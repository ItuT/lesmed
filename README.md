# Lesmed Community Health Centre — Website

Website for [Lesmed Community Health Centre](https://lesmed.motebo.co.za), a
community clinic in Verena, Mpumalanga, South Africa.
Practice no. 1328034 · "Bringing Healthcare Closer to Home"

## Stack

- [Next.js](https://nextjs.org) (App Router, static export) + Tailwind CSS + TypeScript
- Hosted on AWS: S3 + CloudFront + ACM, DNS via Route 53 (`lesmed.motebo.co.za`)

## Structure

- `site/` — the Next.js app. All content (services, contact details, hours,
  team) lives in `site/src/lib/site.ts`.
- `images/` — original source assets (logo, flyer).
- `docs/wix-site-content.md` — content scraped from the old Wix site, kept as
  the source of truth for copy.

## Develop

```bash
cd site
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to site/out/
```

## Deploy

Build, then sync `site/out/` to the S3 bucket and invalidate CloudFront —
see `deploy.sh`.
