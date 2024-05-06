terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.48.0"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region     = "us-east-1"
  access_key = "AKIAXSGTQBOQWMOANK75"
  secret_key = "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"
}

data "aws_iam_policy_document" "assume_role" {
  statement {
    effect = "Allow"

    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }

    actions = ["sts:AssumeRole"]
  }
}


resource "aws_iam_role" "iam_for_lambda" {
  name               = "iam_for_lambda"
  assume_role_policy = data.aws_iam_policy_document.assume_role.json
}

data "aws_iam_policy_document" "lambda_logging" {
  statement {
    effect = "Allow"

    actions = [
      "logs:CreateLogGroup",
      "logs:CreateLogStream",
      "logs:PutLogEvents",
    ]

    resources = ["arn:aws:logs:*:*:*"]
  }
}

resource "aws_iam_policy" "lambda_logging" {
  name        = "lambda_logging"
  path        = "/"
  description = "IAM policy for logging from a lambda"
  policy      = data.aws_iam_policy_document.lambda_logging.json
}

resource "aws_iam_role_policy_attachment" "lambda_logs" {
  role       = aws_iam_role.iam_for_lambda.name
  policy_arn = aws_iam_policy.lambda_logging.arn
}


resource "null_resource" "build_lambda" {
  triggers = {
    always_run = "${timestamp()}"
  }

  provisioner "local-exec" {
    command = "cargo lambda build --release --output-format zip --manifest-path=backend/Cargo.toml"
  }
}

resource "aws_cloudwatch_log_group" "log_groups" {
  for_each = toset([for file in fileset("./backend/src/bin", "*.rs") : trimsuffix(file, ".rs")])
  name              = "/aws/lambda/${each.value}"
  retention_in_days = 14
}


module "lambda_functions" {
  source           = "./modules/lambda_function"
  function_names   = [for file in fileset("./backend/src/bin", "*.rs") : trimsuffix(file, ".rs")]
  role             = aws_iam_role.iam_for_lambda.arn
  build_dependency = null_resource.build_lambda
  env_vars = {
    OPENAI_API_KEY = "sk-proj-9orVqmPF7TEyVLvoDpPBT3BlbkFJMZtvwXxBwtmpcMBtdGiv"
  }
  depends_on = [aws_iam_role_policy_attachment.lambda_logs, aws_cloudwatch_log_group.log_groups]
}

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
  source = "squidfunk/api-gateway-enable-cors/aws"
  version = "0.3.3"

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
  integration_http_method = "POST" # Must be POST for Lambda integrations
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




# output "lambda_function_urls" {
#   description = "Auth User URL"
#   value       = zipmap(module.lambda_functions.lambda_arns, module.lambda_functions.lambda_urls)
# }

resource "null_resource" "build_js" {
  triggers = {
    always_run = "${timestamp()}"
  }

  provisioner "local-exec" {
    command = "pnpm install -C frontend && pnpm -C frontend run build"
  }
}

resource "aws_s3_bucket" "compiled_js_plugins" {
  bucket = "compiled-js-plugins"

  tags = {
    Name       = "Compiled JS Plugins"
    Enviorment = "Dev"
  }
}

resource "aws_s3_bucket_cors_configuration" "compiled_js_plugins" {
  bucket = aws_s3_bucket.compiled_js_plugins.id
  cors_rule {
    allowed_origins = ["*"]
    allowed_methods = ["GET"]
  }
}

resource "aws_s3_object" "dist_files" {
  for_each     = fileset("frontend/dist/lib", "*.js")
  bucket       = aws_s3_bucket.compiled_js_plugins.id
  key          = each.value
  content_type = "text/javascript"
  etag         = filemd5(format("%s%s", "frontend/dist/lib/", each.value))
  source       = format("%s%s", "frontend/dist/lib/", each.value)
  depends_on   = [null_resource.build_js, aws_s3_bucket.compiled_js_plugins]
}

resource "aws_dynamodb_table" "users_table" {
  name         = "Users"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "UserId"

  attribute {
    name = "UserId"
    type = "S"
  }

  attribute {
    name = "Email"
    type = "S"
  }

  global_secondary_index {
    name            = "EmailIndex"
    hash_key        = "Email"
    projection_type = "KEYS_ONLY"
  }
}

output "dyn_db_tbl" {
  description = "Dyn DB TBL"
  value       = aws_dynamodb_table.users_table
}
