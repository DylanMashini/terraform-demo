use aws_config::BehaviorVersion;
use aws_sdk_dynamodb::{
    operation::put_item::{PutItemError, PutItemOutput},
    types::AttributeValue,
    Client,
};
use base64::{engine::general_purpose, Engine as _};
use hmac::{Hmac, Mac};
use poem::{handler, http::StatusCode, post, web::Json, IntoResponse, Route};
use poem_lambda::{run, Error};
use serde::{Deserialize, Serialize};
use sha2::Sha256;
use uuid::Uuid;
use utils::EndpointError;

type HmacSha256 = Hmac<Sha256>;

#[derive(Deserialize)]
struct CreateUserParams {
    pub user_id: String,
    pub password: String,
}

#[derive(Debug, Serialize)]
struct CreateUserResponse {
    successful: bool,
    public_api_key: String,
    secret_api_key: String,
}


#[derive(Debug, Serialize)]
#[serde(untagged)]
enum Response {
    Successful(CreateUserResponse),
    Error(EndpointError),
}

async fn add_user(
    client: Client,
    user_id: String,
    password: String,
    stored_api_key: String,
) -> Result<PutItemOutput, (String, StatusCode)> {
    let request = client
        .put_item()
        .table_name("Users")
        .item("UserId", AttributeValue::S(user_id.clone()))
        .item("Password", AttributeValue::S(password))
        .item("PublicKey", AttributeValue::S(stored_api_key))
        .item("MessageCount", AttributeValue::N("0".to_string()))
        .condition_expression("attribute_not_exists(UserId)");

    let response = request.send().await;

    match response {
        Ok(x) => Ok(x),
        Err(e) => match e.into_service_error() {
            PutItemError::ConditionalCheckFailedException(_) => Err(("User with ID Already Exists".to_string(), StatusCode::CONFLICT)),
            _ => Err(("Internal Server Error Adding to DB".to_string(), StatusCode::INTERNAL_SERVER_ERROR)),
        },
    }
}

#[handler]
async fn create_user(body: poem::web::Json<CreateUserParams>) -> impl IntoResponse {
    let secret_key = std::env::var("HMAC_GLOBAL_SECRET_KEY")
        .expect("HMAC_SECRET_KEY expected to exist as env var");

    let stored_key = Uuid::new_v4().to_string().replace("-", "");

    let signed_key = HmacSha256::new_from_slice(format!("{}{}", secret_key, stored_key).as_bytes())
        .expect("HMAC secret should've been generated")
        .finalize()
        .into_bytes();

    let signed_key = general_purpose::STANDARD.encode(signed_key.as_slice());

    let config = aws_config::load_defaults(BehaviorVersion::latest()).await;
    let client = Client::new(&config);

    match add_user(
        client,
        body.user_id.clone(),
        body.password.clone(),
        stored_key.clone(),
    )
    .await
    {
        Ok(_) => (),
        Err(error) => return Json(Response::Error(EndpointError {
            message: error.0
        })).with_status(error.1),
    };

    Json(Response::Successful(CreateUserResponse {
        successful: true,
        public_api_key: "pk_".to_owned() + &stored_key,
        secret_api_key: "sk_".to_owned() + &signed_key,
    }))
    .with_status(StatusCode::OK)
}

#[tokio::main]
async fn main() -> Result<(), Error> {
    let app = Route::new().at("/create-user", post(create_user));
    run(Route::new().nest("/prod", app)).await
}
