resource "aws_lambda_function" "lambda" {
  for_each = var.function_names
  filename         = format("backend/target/lambda/%s/bootstrap.zip", each.value)
  runtime          = "provided.al2023"
  handler          = "bootstrap"
  function_name    = each.value
  role             = var.role
  source_code_hash = filebase64sha256(format("backend/target/lambda/%s/bootstrap", each.value))
  depends_on = [var.build_dependency]
  environment {
    variables = var.env_vars
  }
  timeout = 30
}
