resource "aws_s3_bucket" "chat_api_static_files" {
  bucket = "demo.dylanmashini.com"

  tags = {
    Name       = "Chat API Static Files"
    Enviorment = "Prod"
  }
}

resource "aws_s3_bucket_policy" "chat_api_static_files" {
  bucket = aws_s3_bucket.chat_api_static_files.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action    = "s3:GetObject"
        Effect    = "Allow"
        Resource  = "arn:aws:s3:::${aws_s3_bucket.chat_api_static_files.bucket}/*"
        Principal = "*"
      },
    ]
  })
  depends_on = [aws_s3_bucket_acl.chat_api_static_files]
}

resource "aws_s3_bucket_public_access_block" "chat_api_static_files" {
  bucket = aws_s3_bucket.chat_api_static_files.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false


}


resource "aws_s3_bucket_acl" "chat_api_static_files" {
  depends_on = [
    aws_s3_bucket_ownership_controls.chat_api_static_files,
    aws_s3_bucket_public_access_block.chat_api_static_files,
  ]

  bucket = aws_s3_bucket.chat_api_static_files.id
  acl    = "public-read"
}

resource "aws_s3_bucket_ownership_controls" "chat_api_static_files" {
  bucket = aws_s3_bucket.chat_api_static_files.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}




resource "aws_s3_bucket_cors_configuration" "chat_api_static_files" {
  bucket = aws_s3_bucket.chat_api_static_files.id
  cors_rule {
    allowed_origins = ["*"]
    allowed_methods = ["GET"]
  }
}



resource "aws_s3_object" "dist_files" {
  for_each     = fileset("../plugin/dist/", "*")
  bucket       = aws_s3_bucket.chat_api_static_files.id
  key          = each.value
  content_type = strcontains(each.value, "js") ? "text/javascript" : "text/css"
  etag         = filemd5(format("%s%s", "../plugin/dist/", each.value))
  source       = format("%s%s", "../plugin/dist/", each.value)
  depends_on   = [aws_s3_bucket_acl.chat_api_static_files]
  acl = "public-read"
}

resource "aws_s3_object" "compiled_website" {
    for_each = fileset("../website/build", "**/*")
    bucket = aws_s3_bucket.chat_api_static_files.id
    key = each.value
    content_type = lookup(local.content_type_map, split(".", each.value)[length(split(".", each.value)) - 1], "text/html")
    etag = filemd5(format("%s%s", "../website/build/", each.value))
    source = format("%s%s", "../website/build/", each.value)
    depends_on   = [aws_s3_bucket_acl.chat_api_static_files]
    acl = "public-read"
}
