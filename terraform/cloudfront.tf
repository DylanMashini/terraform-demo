locals {
  s3_origin_id = "staticFilesS3Origin"
}

resource "aws_cloudfront_origin_access_control" "default" {
  name                              = "Default S3 Access Control"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}


resource "aws_cloudfront_distribution" "s3_files_distribution" {
    price_class = "PriceClass_100"

    aliases = ["demo.dylanmashini.com"]

    origin {
        domain_name = aws_s3_bucket.chat_api_static_files.bucket_regional_domain_name
        origin_access_control_id =  aws_cloudfront_origin_access_control.default.id
        origin_id = local.s3_origin_id    
    }
    enabled = true
    is_ipv6_enabled = true
    default_root_object = "index.html"

    default_cache_behavior {
        # Optimized Default
        cache_policy_id = "658327ea-f89d-4fab-a63d-7e88639e58f6"
        allowed_methods = ["GET", "HEAD", "OPTIONS"]
        cached_methods = ["GET", "HEAD"]
        target_origin_id = local.s3_origin_id
        viewer_protocol_policy = "redirect-to-https"
    }
    viewer_certificate {
        acm_certificate_arn = aws_acm_certificate_validation.demo_certificate_verification.certificate_arn
        ssl_support_method = "sni-only"
    }

    restrictions {
        geo_restriction {
            restriction_type = "none"
            locations = []
        }
    }
}

resource "cloudflare_record" "demo_dns_record" {
    name = "demo"
    type = "CNAME"
    zone_id = var.CLOUDFLARE_ZONE_ID
    content = aws_cloudfront_distribution.s3_files_distribution.domain_name
    comment = "Managed by terraform"
}

