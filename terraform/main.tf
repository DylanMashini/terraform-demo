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
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }


  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region     = "us-east-1"
  access_key = var.AWS_ACCESS_KEY
  secret_key = var.AWS_SECRET_KEY
}

provider "cloudflare" {
        api_token = var.CLOUDFLARE_API_TOKEN
  }

variable "HMAC_SECRET" { type = string }

variable "AWS_ACCESS_KEY" { type = string }

variable "AWS_SECRET_KEY" { type = string }

variable "OPENAI_API_KEY" { type = string }

variable "CLOUDFLARE_API_TOKEN" { type = string }

variable "CLOUDFLARE_ZONE_ID" { type = string }

locals {
  content_type_map = {
   "js" = "text/javascript"
   "html" = "text/html"
   "css"  = "text/css"
   "ico" = "image/x-icon"
  }
}

