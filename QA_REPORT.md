# QA report

Status: **PASS_WITH_DECLARED_DEPLOYMENT_BOUNDARIES**

Review date: 2026-08-04  
Release target: main → Amvera Docker build → https://aigalo.com

## Automated release checks

The final local release command completed with exit code 0:

```text
npm run build
```

That command produced the following terminal results:

| Check                         | Result                                                                             |
| ----------------------------- | ---------------------------------------------------------------------------------- |
| Source claim firewall         | PASS — 24 public-source files, 0 forbidden matches, 20 required boundaries present |
| ESLint                        | PASS                                                                               |
| TypeScript strict build       | PASS                                                                               |
| Vitest / Testing Library      | PASS — 1 file, 16 tests                                                            |
| Vite build                    | PASS — 1,589 modules                                                               |
| Localized HTML prerender      | PASS — 12 route entries                                                            |
| Compiled-asset claim firewall | PASS — 21 local artifacts, 0 forbidden matches                                     |
| Prettier                      | PASS — all selected release files                                                  |

Final static payload:

```text
dist/index.html                   1.65 kB | gzip   0.70 kB
dist/assets/index-B-4BPpD4.css   52.37 kB | gzip  11.83 kB
dist/assets/index-CZ7nTfMH.js   361.35 kB | gzip 111.60 kB
```

The clean published tree produced this GitHub-runner payload:

```text
dist/index.html                   1.65 kB | gzip   0.70 kB
dist/assets/index-O7NtI_-g.css   46.45 kB | gzip  10.46 kB
dist/assets/index-BmE3tMn1.js   361.35 kB | gzip 111.60 kB
```

Its compiled-asset firewall scanned 18 published artifacts with 0 forbidden matches. The local count includes three unrelated starter SVGs that were intentionally excluded from the GitHub allowlist.

The compiled-asset firewall also checks that TODO_CONFIRM is absent from the browser artifact. DOM tests verify the confirmed `rusfbm@gmail.com` contact, localized evaluation subjects, locale-preserving routes, metadata, RTL direction, and unchanged receipt payload fields.

## Content and claim verification

- Archive SHA-256: 03aebd6bdfe13ded06863d3cc2cca4280c9dd0d67285df312c1856b13594d62f.
- Fresh STATIC verification: PASS, exit code 0.
- Fresh FAST verification: PASS, exit code 0; 249 targeted tests and 168 direct selfcheck gates were recorded.
- Stored release FULL receipt: PASS, 1,277/1,277 checks across 126 modules.
- A fresh external FULL replay in this review session was intentionally stopped after 49/126 modules and 407/407 completed checks passing. It produced no terminal receipt and is disclosed as NOT_COMPLETED, not represented as a fresh FULL pass.
- Current public status remains READY_NOT_TRAINED_WITH_DISCLOSED_BOUNDARIES.

The public interface distinguishes architecture, implemented bounded mechanics, in-development targets, and unproven claims. The recorded receipt explorer is labeled as a client-side walkthrough, not a live model or external benchmark.

## Browser and interaction review

A cloud-browser review was completed at a 1,363 × 936 desktop viewport across English, Russian, Simplified Chinese, and Arabic.

- Home, Evidence, Privacy, custom 404, localized URL prefixes, canonical URLs, reciprocal language alternates, and section anchors rendered.
- Hero, current-versus-target architecture, Abu Dhabi plan, and receipt explorer were visually inspected.
- Receipt step navigation, reset, and terminal BOUNDARY state worked.
- The Evidence page exposed the 10-row public claim matrix in LTR and RTL layouts.
- The language switch preserved the current page when changing from Arabic Evidence to Chinese Evidence.
- Same-page target resolution is covered by an automated DOM test.
- No site-originated console errors were observed. Browser-extension metadata messages were excluded from the site result.
- The confirmed evaluation email is public. Unconfirmed social, partner-logo, and download links remain hidden.

Responsive behavior is implemented at 1,300 px, 860 px, and 620 px breakpoints. The mobile drawer and accessibility state are covered by automated interaction tests; a separate mobile screenshot and device Lighthouse run were not captured in this environment.

## Accessibility and privacy checks

- Semantic header, navigation, main, section, and footer landmarks are present.
- A skip link, visible focus states, text-plus-icon statuses, reduced-motion rules, and an aria-live replay region are present.
- The navigation control exposes its expanded state.
- There are no forms, analytics, advertising trackers, cookies, database calls, user uploads, or client-side secrets.
- Privacy copy discloses that the hosting provider may retain technical request logs.

Formal Lighthouse scores and assistive-technology manual testing were NOT_RUN in this environment and must be checked against the deployed Amvera URL.

## Deployment configuration

- amvera.yaml parses successfully and declares Docker with container port 80.
- The multi-stage Dockerfile uses locked npm installation, a static Vite build, Nginx, and a /healthz container check.
- Nginx includes SPA fallback, direct healthz, immutable hashed assets, no-cache HTML, gzip, and security headers.
- GitHub Actions repeats formatting, lint, typecheck, both claim firewalls, tests, static build, container build, and route smoke checks on main and pull requests.

Docker is not installed in the local review environment (command not found, exit code 127). This local limitation is closed by the published operational witness: GitHub Actions run 30869804408 built the production image and completed the container smoke test successfully. Direct Nginx requests returned HTTP 200 for `/evidence`, `/privacy`, `/outside-scope`, `/ru`, `/zh/evidence`, and `/ar/privacy`; `/healthz` also passed before the route checks.

The remaining deployment witness is the first Amvera image build followed by TLS/domain checks for `aigalo.com`, all 12 localized routes, and an unknown route.

## Intentionally unresolved public data

The following values remain null or absent and are hidden:

- Telegram;
- founder photo and LinkedIn;
- education, employment history, current location, and legal entity status;
- IP-ownership statement;
- Hub71 deck and sanitized public technical brief;
- customers, users, revenue, funding, LOIs, pilots, and partner endorsements.

Evaluation CTAs use the confirmed public email with a localized subject. No form submission or backend is introduced.

## Release decision

The static website source is committed to GitHub and its push-triggered container CI is passing. Production acceptance remains conditional on the first Amvera build, TLS/domain configuration using Amvera-provided DNS records, route checks, and deployed Lighthouse/accessibility review.
