#!/usr/bin/env bash
# Build the site and deploy it to S3 + CloudFront.
set -euo pipefail
cd "$(dirname "$0")/site"

BUCKET=lesmed.motebo.co.za
DISTRIBUTION_ID=E33C8TTBASDBPN

npm run build
aws s3 sync out/ "s3://$BUCKET/" --delete
aws cloudfront create-invalidation --distribution-id "$DISTRIBUTION_ID" --paths "/*" --query 'Invalidation.{Id:Id,Status:Status}' --output table
echo "Deployed. Live at https://lesmed.motebo.co.za"
