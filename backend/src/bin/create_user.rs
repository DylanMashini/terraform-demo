use poem::{handler, post, Route};
use poem_lambda::{run, Error};
use serde::Deserialize;

#[derive(Deserialize)]
struct CreateUserParams {
    pub user_id: String,
}

#[handler]
fn create_user(body: poem::web::Json<CreateUserParams>) -> String {
    body.user_id.clone()
}

#[tokio::main]
async fn main() -> Result<(), Error>{
    let app = Route::new().at("/create-user", post(create_user));
    run(Route::new().nest("/prod", app)).await
}
