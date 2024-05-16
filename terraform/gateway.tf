
resource "aws_api_gateway_rest_api" "backend_api" {
  name = "Backend API"
}

output "rest_api" {
  description = "Rest API"
  value       = aws_api_gateway_rest_api.backend_api
}

# API Gateway Resource for each Lambda function
resource "aws_api_gateway_resource" "api_resource" {
  for_each    = { for fn in module.lambda_functions.function_names : fn => fn }
  rest_api_id = aws_api_gateway_rest_api.backend_api.id
  parent_id   = aws_api_gateway_rest_api.backend_api.root_resource_id
  path_part   = replace(each.value, "_", "-") # Using the function name as the path part
}

# API Gateway Method for each Resource (assuming POST method)
resource "aws_api_gateway_method" "api_method" {
  for_each      = aws_api_gateway_resource.api_resource
  rest_api_id   = each.value.rest_api_id
  resource_id   = each.value.id
  http_method   = "POST"
  authorization = "NONE"
}

module "cors" {
  for_each = aws_api_gateway_resource.api_resource
  source   = "squidfunk/api-gateway-enable-cors/aws"
  version  = "0.3.3"

  api_id          = aws_api_gateway_rest_api.backend_api.id
  api_resource_id = each.value.id
}





# Lambda Permission for API Gateway to invoke the function
resource "aws_lambda_permission" "lambda_permission" {
  for_each      = module.lambda_functions.function_names
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = each.value
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_api_gateway_rest_api.backend_api.execution_arn}/*"
}

# Integration between API Gateway and Lambda
resource "aws_api_gateway_integration" "lambda_integration" {
  for_each                = aws_api_gateway_method.api_method
  rest_api_id             = each.value.rest_api_id
  resource_id             = each.value.resource_id
  http_method             = each.value.http_method
  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = module.lambda_functions.lambda_details[each.key].invoke_arn
}

resource "aws_api_gateway_deployment" "api_deployment" {
  rest_api_id = aws_api_gateway_rest_api.backend_api.id

  triggers = {
    redeployment = jsonencode(module.lambda_functions)
  }

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_api_gateway_stage" "example" {
  deployment_id = aws_api_gateway_deployment.api_deployment.id
  rest_api_id   = aws_api_gateway_rest_api.backend_api.id
  stage_name    = "prod"
}

