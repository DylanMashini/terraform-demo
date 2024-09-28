use aws_config::BehaviorVersion;
use aws_sdk_dynamodb::{types::AttributeValue, Client};
use poem::{handler, post, web::Json, Route};
use poem_lambda::{run, Error};
use serde::{Deserialize, Serialize};
use utils::verify_key;

#[derive(Deserialize)]
struct VerifyKeyRequest {
    pub public_key: String,
    pub secret_key: String,
}

#[derive(Serialize)]
struct VerifyKeyResponse {
    valid: bool,
    user_id: Option<String>,
}

#[handler]
async fn create_user(body: poem::web::Json<VerifyKeyRequest>) -> Json<VerifyKeyResponse> {
    let public_key = body
        .public_key
        .strip_prefix("pk_")
        .expect("Public Key should have pk_prefix")
        .to_string();

    let secret_key = body
        .secret_key
        .strip_prefix("sk_")
        .expect("Secret Key should start with sk_ prefix")
        .to_string();

    let valid_key = verify_key(public_key.clone(), secret_key).await.unwrap();

    if !valid_key {
        return Json(VerifyKeyResponse {
            valid: valid_key,
            user_id: None,
        });
    }

    let config = aws_config::load_defaults(BehaviorVersion::latest()).await;
    let client = Client::new(&config);

    let request = client
        .query()
        .table_name("Users")
        .index_name("PublicKey")
        .select(aws_sdk_dynamodb::types::Select::AllProjectedAttributes)
        .key_condition_expression("PublicKey = :public_key_value")
        .expression_attribute_values(":public_key_value", AttributeValue::S(public_key));

    let user = match request.send().await {
        Ok(x) => x.items.expect("Item should be populated with HashMap")[0].clone(),
        Err(x) => {
            println!("ERROR: {:?}", x);
            return Json(VerifyKeyResponse {
                valid: true,
                user_id: None,
            });
        }
    };

    let user_id = match user
        .get("UserId")
        .expect("UserID mut be populated because it is defined as primary key")
    {
        AttributeValue::S(val) => val,
        _ => panic!("UserID was non-string value"),
    };

    Json(VerifyKeyResponse {
        valid: valid_key,
        user_id: Some(user_id.clone()),
    })
}

#[tokio::main]
async fn main() -> Result<(), Error> {
    let app = Route::new().at("/*", post(create_user));
    run(Route::new().nest("/prod", app)).await
}
