output "lambda_details" {
  value = { for fn in aws_lambda_function.lambda : fn.function_name => {
    arn = fn.arn,
    invoke_arn = fn.invoke_arn
  }}
  description = "Details of each Lambda function."
}
output "function_names" {
  value       = var.function_names
  description = "List of function names."
}