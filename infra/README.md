# Infrastructure

The site is served at **https://lesmedhealth.co.za** (and www) from:

| Resource | Value |
|---|---|
| S3 bucket | `lesmed.motebo.co.za` (af-south-1, private, OAC-only) |
| CloudFront distribution | `E33C8TTBASDBPN` (d2khftm4k4qscm.cloudfront.net) |
| CloudFront function | `lesmed-url-rewrite` (viewer-request, maps `/x` → `/x.html`) |
| ACM certificate | `arn:aws:acm:us-east-1:135409860627:certificate/822ea424-9607-420e-bb31-416d7889a090` (lesmedhealth.co.za + www, us-east-1) |
| Route 53 zone | `Z03596222FQTYVYCVD3VR` (lesmedhealth.co.za) |

`acm-validation.json` and `alias-records.json` are the change batches that
created the DNS records (kept for reference; already applied).

Deploys: `../deploy.sh` (build → S3 sync → CloudFront invalidation).
