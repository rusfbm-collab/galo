# GALO AI public site

English-first public surface for GALO AI at `https://aigalo.com`. The site separates current verified bounded mechanics from the wider architecture under development.

## Local development

Requirements: Node.js 24 and npm.

```bash
npm ci
npm run dev
```

## Verification and build

```bash
npm run claims:check
npm run lint
npm run typecheck
npm run test
npm run build
```

The static artifact is written to `dist/`.

## Docker

```bash
docker build -t galo-ai-site .
docker run --rm -p 8080:80 galo-ai-site
curl http://localhost:8080/healthz
```

Expected health response: `ok` with HTTP 200.

## Amvera setup

1. Create an Amvera application with Docker as the environment.
2. In the application’s **Repository** tab, connect `rusfbm-collab/galo` and select `main`.
3. Configure the GitHub token or webhook in the Amvera interface. Do not commit a token to this repository.
4. Keep the target event consistent between GitHub and Amvera. A push to `main` can trigger pull/build automatically.
5. Amvera reads `amvera.yaml`, builds `Dockerfile`, and routes to container port 80.
6. Confirm `/healthz`, `/`, `/evidence`, `/privacy`, and an unknown path after the first deployment.

## GitHub webhook checklist

- Payload URL copied from the Amvera Repository screen
- Content type: `application/json`
- Shared webhook secret configured on both sides
- Push event selected
- Target branch: `main`
- No access token or webhook secret committed to Git

## Custom domain checklist

1. Add `aigalo.com` in Amvera and copy the DNS records shown by Amvera.
2. Configure only those records at the DNS provider.
3. Redirect `www.aigalo.com` to the apex domain if the Amvera configuration supports it.
4. Verify TLS, canonical metadata, sitemap, robots file, and Open Graph image.
5. Do not hardcode third-party IP addresses from old instructions.

## Content editing

- Confirmed founder and company facts: `src/content/site.ts`
- Public claim matrix: `src/content/publicClaims.ts`
- Internal red-team claim controller: `src/content/claims.ts`
- Release evidence: `src/content/evidence.ts`
- Recorded receipt walkthrough: `src/data/controlled-replay.json`

Unknown personal facts and missing assets remain `null` and are hidden from the interface. Do not add a deck, photo, technical brief, contact address, customer, revenue, funding, legal-status, or partnership claim without a direct source.

Run `npm run claims:check` after every content change.

## Rollback

1. Identify the last verified commit on `main`.
2. Create a revert commit instead of rewriting shared history.
3. Push the revert to `main`.
4. Let Amvera rebuild from the reverted commit and verify `/healthz` plus the primary routes.

## Privacy and security

The site has no backend, database, forms, analytics, cookies, or secrets. Nginx sets a restrictive security-header baseline. Hosting infrastructure may still maintain technical request logs.
