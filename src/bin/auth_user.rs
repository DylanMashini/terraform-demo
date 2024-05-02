use poem::{get, handler, post, web::{Data, Path}, RequestBody, Route};
use poem_lambda::{run, Error};
use serde::{Deserialize, Serialize};

#[derive(Deserialize)]
struct AuthUserRequest {
    pub user_id: String,
}

#[derive(Serialize)]
struct AuthUserResponse {
    token: String,
}

#[handler]
fn create_chat(body: poem::web::Json<AuthUserRequest>) -> poem::web::Json<AuthUserResponse> {
    poem::web::Json(AuthUserResponse {
        token: body.user_id.clone()
    })
}

#[tokio::main]
async fn main() -> Result<(), Error>{
    println!("AHHHHHHHHH");
    let app = Route::new().at("/auth-user", post(create_chat));
    run(Route::new().nest("/prod", app)).await
}
