variable "function_names" {
  type        = set(string)
  description = "The name of the Lambda function."
}

variable "role" {
  type        = string
  description = "The AWS IAM role that the Lambda function assumes."
}


variable "build_dependency" {
  type        = any
  description = "Ensures that the Lambda is created after the build is complete."
  default     = []
}

variable "env_vars" {
  type = map(string)
  description = "Enviorment Variables For the Lambda Runtime"
  default = {}
}
