resource "aws_s3_bucket" "compiled_js_plugins" {
  bucket = "compiled-js-plugins"

  tags = {
    Name       = "Compiled JS Plugins"
    Enviorment = "Dev"
  }
}

resource "aws_s3_bucket_public_access_block" "compiled_js_plugins" {
  bucket = aws_s3_bucket.compiled_js_plugins.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false

}

resource "aws_s3_bucket_policy" "compiled_js_plugins" {
  bucket = aws_s3_bucket.compiled_js_plugins.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action    = "s3:GetObject"
        Effect    = "Allow"
        Resource  = "arn:aws:s3:::${aws_s3_bucket.compiled_js_plugins.bucket}/*"
        Principal = "*"
      },
    ]
  })
}


resource "aws_s3_bucket_acl" "compiled_js_plugins" {
  depends_on = [
    aws_s3_bucket_ownership_controls.compiled_js_plugins,
    aws_s3_bucket_public_access_block.compiled_js_plugins,
  ]

  bucket = aws_s3_bucket.compiled_js_plugins.id
  acl    = "public-read"
}

resource "aws_s3_bucket_ownership_controls" "compiled_js_plugins" {
  bucket = aws_s3_bucket.compiled_js_plugins.id
  rule {
    object_ownership = "BucketOwnerPreferred"
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
  for_each     = fileset("../plugin/dist/", "*")
  bucket       = aws_s3_bucket.compiled_js_plugins.id
  key          = each.value
  content_type = strcontains(each.value, "js") ? "text/javascript" : "text/css"
  etag         = filemd5(format("%s%s", "../plugin/dist/", each.value))
  source       = format("%s%s", "../plugin/dist/", each.value)
  depends_on   = [aws_s3_bucket.compiled_js_plugins]
  acl = "public-read"
}
