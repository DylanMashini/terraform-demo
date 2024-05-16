use aws_sdk_dynamodb::{types::AttributeValue, Client as DBClient};
use openai_api_rs::v1::api::Client;
use openai_api_rs::v1::chat_completion::{self, ChatCompletionMessage, ChatCompletionRequest};
use openai_api_rs::v1::common::GPT3_5_TURBO;
use poem::http::StatusCode;
use poem::{handler, post, EndpointExt, IntoResponse, Route, web::Json};
use poem_lambda::{run, Error};
use serde::{Deserialize, Serialize};
use std::env;
use utils::EndpointError;

#[derive(Deserialize)]
struct Message {
    pub message: String,
    pub author: String,
}

#[derive(Deserialize)]
struct CreateChatParams {
    pub messages: Vec<Message>,
    pub api_key: String,
}

#[derive(Serialize, Debug)]
pub struct CreateChatResponse {
    pub response: String,
}

#[derive(Debug, Serialize)]
#[serde(untagged)]
enum Response {
    Successful(CreateChatResponse),
    Error(EndpointError),
}

#[handler]
async fn create_chat(
    body: poem::web::Json<CreateChatParams>,
) -> impl IntoResponse {
    let config = aws_config::load_defaults(aws_config::BehaviorVersion::latest()).await;
    let db_client = DBClient::new(&config);

    let public_key = body
        .api_key
        .strip_prefix("pk_")
        .expect("Prefix For Public API key should be pk_")
        .to_string();

    let db_res = db_client
        .query()
        .table_name("Users")
        .index_name("PublicKey")
        .select(aws_sdk_dynamodb::types::Select::AllProjectedAttributes)
        .key_condition_expression("PublicKey = :pk_val")
        .expression_attribute_values(":pk_val", AttributeValue::S(public_key))
        .send()
        .await
        .expect("API Key should exist as GSK");

    let partial_db_tbl = match db_res.items().get(0).clone() {
        Some(x) => x,
        None => return Json(Response::Error(EndpointError {
            message: "API Key Invalid".to_string()
        })).with_status(StatusCode::UNAUTHORIZED)
    };

    let user_id = partial_db_tbl
        .get("UserId")
        .expect("DB Table MUST have UserId");

    let update_expression = "SET MessageCount = MessageCount + :inc".to_string();

    let res = db_client
        .update_item()
        .table_name("Users")
        .key("UserId", user_id.clone())
        .update_expression(update_expression)
        .expression_attribute_values(":inc".to_string(), AttributeValue::N("1".to_string()))
        .return_values(aws_sdk_dynamodb::types::ReturnValue::UpdatedNew)
        .send()
        .await;

    println!("UPDATE_RESULT: {:?}", res);

    let openai_client = Client::new(env::var("OPENAI_API_KEY").unwrap().to_string());
    let mut chat_completion_messages: Vec<chat_completion::ChatCompletionMessage> = vec![ChatCompletionMessage {role: chat_completion::MessageRole::system, content: chat_completion::Content::Text("You are a helpful assistant. If the user ends the conversation, or if the conversation seems to come to an end, send a message that just says \"<END>\". The program you are running inside of will handle politely ending the conversation when it recives the signal from you. ".to_string()), name: None}];

    for message in &body.messages {
        let role = match &*message.author {
            "user" => chat_completion::MessageRole::user,
            "agent" => chat_completion::MessageRole::assistant,
            _ => panic!("Invalid Author"),
        };
        chat_completion_messages.push(chat_completion::ChatCompletionMessage {
            role,
            content: chat_completion::Content::Text(message.message.clone()),
            name: None,
        });
    }
    let request = ChatCompletionRequest::new(GPT3_5_TURBO.to_string(), chat_completion_messages);
    let res = openai_client.chat_completion(request);

    Json(Response::Successful(CreateChatResponse {
        response: res.unwrap().choices[0].message.content.clone().unwrap(),
    })).with_status(StatusCode::OK)

}

#[tokio::main]
async fn main() -> Result<(), Error> {
    let app = Route::new()
        .at("/create-chat", post(create_chat))
        .with(poem::middleware::Cors::new());
    run(Route::new().nest("/prod", app)).await
}
