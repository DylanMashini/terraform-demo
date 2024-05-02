use poem::{get, handler, post, web::{Data, Path}, RequestBody, Route};
use poem_lambda::{run, Error};
use serde::Deserialize;

#[derive(Deserialize)]
struct CreateChatParams {
    pub user_id: String,
}

#[handler]
fn create_chat(body: poem::web::Json<CreateChatParams>) -> String {
    body.user_id.clone()
}

#[tokio::main]
async fn main() -> Result<(), Error>{
    let app = Route::new().at("/create-chat", post(create_chat));
    run(Route::new().nest("/prod", app)).await
}
