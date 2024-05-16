resource "aws_dynamodb_table" "users_table" {
  name         = "Users"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "UserId"

  attribute {
    name = "UserId"
    type = "S"
  }


  attribute {
    name = "PublicKey"
    type = "S"
  }

  global_secondary_index {
    name            = "PublicKey"
    hash_key        = "PublicKey"
    projection_type = "KEYS_ONLY"
  }
}

output "dyn_db_tbl" {
  description = "Dyn DB TBL"
  value       = aws_dynamodb_table.users_table
}