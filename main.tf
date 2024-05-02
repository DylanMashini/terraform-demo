terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region  = "us-east-1"
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

resource "null_resource" "build_lambda" {
  triggers = {
    always_run = "${timestamp()}"
  }

  provisioner "local-exec" {
    command = "cargo lambda build --release --output-format zip"
  }
}


resource "aws_lambda_function" "auth_user" {
    filename = "target/lambda/auth_user/bootstrap.zip"
    runtime="provided.al2"
    handler="bootstrap"
    function_name = "auth_user"
    role = aws_iam_role.iam_for_lambda.arn
    source_code_hash = filebase64sha256("target/lambda/auth_user/bootstrap")
    depends_on = [null_resource.build_lambda]
}

resource "aws_lambda_function_url" "lambda_function_url" {
  function_name = aws_lambda_function.auth_user.arn
  authorization_type = "NONE"
}

output "auth_user_func_url" {
  description = "Auth User URL"
  value = aws_lambda_function_url.lambda_function_url
}