use poem::{handler, post, EndpointExt, Route};
use poem_lambda::{run, Error};
use serde::{Deserialize, Serialize};
use openai_api_rs::v1::api::Client;
use openai_api_rs::v1::chat_completion::{self, ChatCompletionRequest};
use openai_api_rs::v1::common::{GPT3_5_TURBO, GPT4};
use std::env;

#[derive(Deserialize)]
struct Message {
    pub message: String,
    pub author: String,
}

#[derive(Deserialize)]
struct CreateChatParams {
    pub messages: Vec<Message>
}

#[derive(Serialize)]
pub struct CreateChatResponse {
    pub response: String
}

#[handler]
fn create_chat(body: poem::web::Json<CreateChatParams>) -> poem::web::Json<CreateChatResponse> {
    println!("TESTING LOGS!!! First message:{}", body.messages[1].message);
    let client = Client::new(env::var("OPENAI_API_KEY").unwrap().to_string());
    let mut chat_completion_messages: Vec<chat_completion::ChatCompletionMessage> = Vec::new();
    for message in &body.messages {
        let role = match &*message.author {
            "user" => chat_completion::MessageRole::user,
            "agent" => chat_completion::MessageRole::assistant,
            _ => panic!("Invalid Author")
        };
        chat_completion_messages.push(
            chat_completion::ChatCompletionMessage { role, content: chat_completion::Content::Text(message.message.clone()), name: None }
        );
    }
    let request = ChatCompletionRequest::new(
        GPT3_5_TURBO.to_string(),
        chat_completion_messages,
    );
    let res = client.chat_completion(request);
    poem::web::Json(CreateChatResponse {
        response: res.unwrap().choices[0].message.content.clone().unwrap()
    })
}

#[tokio::main]
async fn main() -> Result<(), Error>{
    let cors = poem::middleware::Cors::new().allow_origin_regex("*");
    let app = Route::new().at("/create-chat", post(create_chat)).with(poem::middleware::Cors::new());
    run(Route::new().nest("/prod", app)).await
}
