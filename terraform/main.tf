terraform {

  backend "s3" {
    bucket = "chat-plugin-terraform-state"
    key = "global/s3/terraform.tfstate"
    region = "us-east-1"
    dynamodb_table = "chat-plugin-terraform-state-lock"
    encrypt = true
  }

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
  access_key = var.AWS_ACCESS_KEY
  secret_key = var.AWS_SECRET_KEY
}

variable "HMAC_SECRET" { type = string }

variable "AWS_ACCESS_KEY" { type = string }

variable "AWS_SECRET_KEY" { type = string }

variable "OPENAI_API_KEY" { type = string }