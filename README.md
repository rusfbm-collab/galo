# GALO AI public site

Multilingual public surface for GALO AI at `https://aigalo.com`. English, Russian, Simplified Chinese, and Arabic versions separate current verified bounded mechanics from the wider architecture under development.

## Language routes

| Language           | Home  | Plain words  | Investors       | Auditors    | Theory       | How it thinks  | GALO vs LLM  | Mathematics | Symmetry       | Evidence       | Privacy       |
| ------------------ | ----- | ------------ | --------------- | ----------- | ------------ | -------------- | ------------ | ----------- | -------------- | -------------- | ------------- |
| English            | `/`   | `/simple`    | `/investors`    | `/audit`    | `/theory`    | `/thinking`    | `/vs-llm`    | `/math`     | `/symmetry`    | `/evidence`    | `/privacy`    |
| Russian            | `/ru` | `/ru/simple` | `/ru/investors` | `/ru/audit` | `/ru/theory` | `/ru/thinking` | `/ru/vs-llm` | `/ru/math`  | `/ru/symmetry` | `/ru/evidence` | `/ru/privacy` |
| Simplified Chinese | `/zh` | `/zh/simple` | `/zh/investors` | `/zh/audit` | `/zh/theory` | `/zh/thinking` | `/zh/vs-llm` | `/zh/math`  | `/zh/symmetry` | `/zh/evidence` | `/zh/privacy` |
| Arabic             | `/ar` | `/ar/simple` | `/ar/investors` | `/ar/audit` | `/ar/theory` | `/ar/thinking` | `/ar/vs-llm` | `/ar/math`  | `/ar/symmetry` | `/ar/evidence` | `/ar/privacy` |

The build writes a localized HTML entry for every route with matching `lang`, direction, canonical URL, and reciprocal `hreflang` metadata. Arabic routes use RTL layout while exact machine tokens, hashes, IDs, metrics, and receipt JSON remain LTR and unchanged.

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
6. Confirm `/healthz`, the 280 localized routes above (44 pages plus one page per concept), and an unknown path after the first deployment.

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
- Confirmed public evaluation contact: `src/content/contact.ts`
- Public claim matrix: `src/content/publicClaims.ts`
- GALO / language-model comparison: `src/content/llmComparison.ts`
- Thinking schemes, refusal gates, and carried state: `src/content/thinking.ts`
- Plain-words page, opening story, and jargon translator: `src/content/plainWords.ts`
- One page per concept, with the table cells each one lives in: `src/content/termPages.ts`
- Non-technical account, stage facts, risks, and diligence path: `src/content/investors.ts`
- Verification tiers, claim anatomy, and audit limits: `src/content/audit.ts`
- Internal red-team claim controller: `src/content/claims.ts`
- Release evidence: `src/content/evidence.ts`
- Frozen PLUS/STAR formulas and table generator: `src/content/mathematics.ts`
- Recorded receipt walkthrough: `src/data/controlled-replay.json`
- Plain-language term explanations: `src/content/termDeepDives.ts`
- Academic definitions and proofs: `src/content/academicAnalysis.ts`
- Non-technical briefing and Cayley foundation: `src/content/plainLanguage.ts`
- Diagram and chart components: `src/components/diagrams/`
- Added interface strings must be translated in `src/i18n/locales/` before `npm run test` passes

The confirmed public evaluation address is `rusfbm@gmail.com`. Other unknown personal facts and missing assets remain `null` and are hidden from the interface. Do not add a deck, photo, technical brief, additional contact address, customer, revenue, funding, legal-status, or partnership claim without a direct source.

Run `npm run claims:check` after every content change.

## Rollback

1. Identify the last verified commit on `main`.
2. Create a revert commit instead of rewriting shared history.
3. Push the revert to `main`.
4. Let Amvera rebuild from the reverted commit and verify `/healthz` plus the primary routes.

## Privacy and security

The site has no backend, database, forms, analytics, cookies, or secrets. Nginx sets a restrictive security-header baseline. Hosting infrastructure may still maintain technical request logs.
