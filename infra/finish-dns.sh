#!/usr/bin/env bash
# One-time finishing steps that need Route 53 write access:
#   1. Create the ACM DNS validation record and wait for the cert to issue.
#   2. Attach the custom domain + certificate to the CloudFront distribution.
#   3. Point lesmed.motebo.co.za at CloudFront (A + AAAA alias records).
set -euo pipefail
cd "$(dirname "$0")"

ZONE_ID=Z08219143LXBGLSNVUJBY
CERT_ARN=arn:aws:acm:us-east-1:135409860627:certificate/8b44fa82-22f5-4bed-9663-6a2e30b3faab
DISTRIBUTION_ID=E33C8TTBASDBPN
CF_HOSTED_ZONE=Z2FDTNDATAQYW2 # CloudFront's fixed hosted zone id

echo "==> 1/3 Creating ACM validation record"
aws route53 change-resource-record-sets --hosted-zone-id "$ZONE_ID" \
  --change-batch file://acm-validation.json --query ChangeInfo.Status --output text

echo "==> Waiting for certificate to be issued (can take a few minutes)"
aws acm wait certificate-validated --region us-east-1 --certificate-arn "$CERT_ARN"
echo "Certificate issued."

echo "==> 2/3 Attaching lesmed.motebo.co.za + certificate to CloudFront"
aws cloudfront get-distribution-config --id "$DISTRIBUTION_ID" > /tmp/lesmed-dist.json
ETAG=$(python3 -c "import json;print(json.load(open('/tmp/lesmed-dist.json'))['ETag'])")
python3 - <<'PY'
import json
d = json.load(open('/tmp/lesmed-dist.json'))
cfg = d['DistributionConfig']
cfg['Aliases'] = {'Quantity': 1, 'Items': ['lesmed.motebo.co.za']}
cfg['ViewerCertificate'] = {
    'ACMCertificateArn': 'arn:aws:acm:us-east-1:135409860627:certificate/8b44fa82-22f5-4bed-9663-6a2e30b3faab',
    'SSLSupportMethod': 'sni-only',
    'MinimumProtocolVersion': 'TLSv1.2_2021',
}
json.dump(cfg, open('/tmp/lesmed-dist-config.json', 'w'))
PY
aws cloudfront update-distribution --id "$DISTRIBUTION_ID" --if-match "$ETAG" \
  --distribution-config file:///tmp/lesmed-dist-config.json \
  --query 'Distribution.Status' --output text

echo "==> 3/3 Creating A + AAAA alias records"
aws route53 change-resource-record-sets --hosted-zone-id "$ZONE_ID" \
  --change-batch file://alias-records.json --query ChangeInfo.Status --output text

echo "Done. https://lesmed.motebo.co.za will be live once CloudFront finishes deploying (~5 min)."
