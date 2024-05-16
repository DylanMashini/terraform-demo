use serde::Serialize;
use sha2::Sha256;
use hmac::{Hmac, Mac};
use base64::{engine::general_purpose, Engine as _};

type HmacSha256 = Hmac<Sha256>;

pub async fn verify_key(public_api_key: String, secret_api_key: String) -> Result<bool, ()> {
    // Run PUBLIC_API_KEY and global secret through HMAC and than compare to SECRET_API_KEY

    let global_key = std::env::var("HMAC_GLOBAL_SECRET_KEY").expect("HMAC_SECRET_KEY expected to exist as env var");

    let calculated_secret_key = HmacSha256::new_from_slice(format!("{}{}", global_key, public_api_key).as_bytes()).expect("").finalize().into_bytes();
    let calculated_secret_key = general_purpose::STANDARD.encode(calculated_secret_key.as_slice());

    Ok(calculated_secret_key == secret_api_key)
}

#[derive(Debug, Serialize)]
pub struct EndpointError {
    pub message: String
}