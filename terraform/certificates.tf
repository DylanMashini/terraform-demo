resource "aws_acm_certificate" "demo_certificate" {
  domain_name = "demo.dylanmashini.com"
  subject_alternative_names = ["demo.dylanmashini.com"]
  validation_method = "DNS"
  lifecycle {
    create_before_destroy = true
  }
}

resource "cloudflare_record" "demo_certificate_verification_record" {
    for_each = {
        for dvo in aws_acm_certificate.demo_certificate.domain_validation_options : dvo.domain_name => {
          name   = dvo.resource_record_name
          record = dvo.resource_record_value
          type   = dvo.resource_record_type
        }

    }
    zone_id = var.CLOUDFLARE_ZONE_ID
    name = each.value.name
    ttl = 1
    type = each.value.type
    proxied = false
    content = each.value.record
    comment = "Managed by terraform"
}

resource "aws_acm_certificate_validation" "demo_certificate_verification" {
    certificate_arn = aws_acm_certificate.demo_certificate.arn
    depends_on = [cloudflare_record.demo_certificate_verification_record]
}

resource "aws_acm_certificate" "api_certificate" {
  domain_name = "api.demo.dylanmashini.com"
  subject_alternative_names = ["api.demo.dylanmashini.com"]
  validation_method = "DNS"
  lifecycle {
    create_before_destroy = true
  }
}

resource "cloudflare_record" "api_certificate_verification_record" {
    for_each = {
        for dvo in aws_acm_certificate.api_certificate.domain_validation_options : dvo.domain_name => {
          name   = dvo.resource_record_name
          record = dvo.resource_record_value
          type   = dvo.resource_record_type
        }

    }
    zone_id = var.CLOUDFLARE_ZONE_ID
    name = each.value.name
    ttl = 1
    type = each.value.type
    proxied = false
    content = each.value.record
    comment = "Managed by terraform"
}

resource "aws_acm_certificate_validation" "api_certificate_verification" {
    certificate_arn = aws_acm_certificate.api_certificate.arn
    depends_on = [cloudflare_record.api_certificate_verification_record]
}
