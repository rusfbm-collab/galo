# QA report

Status: **PASS_WITH_DECLARED_ENVIRONMENT_LIMITS**

Review date: 2026-08-03  
Release target: main → Amvera Docker build → https://aigalo.com

## Automated release checks

The final local release command completed with exit code 0:

```text
npm run build
```

That command produced the following terminal results:

| Check                         | Result                                                                            |
| ----------------------------- | --------------------------------------------------------------------------------- |
| Source claim firewall         | PASS — 17 public-source files, 0 forbidden matches, 7 required boundaries present |
| ESLint                        | PASS                                                                              |
| TypeScript strict build       | PASS                                                                              |
| Vitest / Testing Library      | PASS — 1 file, 10 tests                                                           |
| Vite build                    | PASS — 1,583 modules                                                              |
| Compiled-asset claim firewall | PASS — 10 artifacts, 0 forbidden matches                                          |
| Prettier                      | PASS — all selected release files                                                 |

Final static payload:

```text
dist/index.html                   1.62 kB | gzip  0.68 kB
dist/assets/index-CoeNN8Mq.css   49.22 kB | gzip 11.14 kB
dist/assets/index-DqeAM-at.js   240.18 kB | gzip 74.10 kB
```

The compiled-asset firewall also checks that TODO_CONFIRM is absent from the browser artifact. A DOM test independently verifies that no email link is rendered while the contact value is unconfirmed.

## Content and claim verification

- Archive SHA-256: 03aebd6bdfe13ded06863d3cc2cca4280c9dd0d67285df312c1856b13594d62f.
- Fresh STATIC verification: PASS, exit code 0.
- Fresh FAST verification: PASS, exit code 0; 249 targeted tests and 168 direct selfcheck gates were recorded.
- Stored release FULL receipt: PASS, 1,277/1,277 checks across 126 modules.
- A fresh external FULL replay in this review session was intentionally stopped after 49/126 modules and 407/407 completed checks passing. It produced no terminal receipt and is disclosed as NOT_COMPLETED, not represented as a fresh FULL pass.
- Current public status remains READY_NOT_TRAINED_WITH_DISCLOSED_BOUNDARIES.

The public interface distinguishes architecture, implemented bounded mechanics, in-development targets, and unproven claims. The recorded receipt explorer is labeled as a client-side walkthrough, not a live model or external benchmark.

## Browser and interaction review

A cloud-browser review was completed at a 1,363 × 936 desktop viewport.

- Home, Evidence, Privacy, custom 404, and section anchors rendered.
- Hero, current-versus-target architecture, Abu Dhabi plan, and receipt explorer were visually inspected.
- Receipt step navigation, reset, and terminal BOUNDARY state worked.
- The Evidence page exposed the 10-row public claim matrix.
- Same-page target resolution is covered by an automated DOM test.
- No site-originated console errors were observed. Browser-extension metadata messages were excluded from the site result.
- No external contact, social, partner-logo, or download link is emitted while its value or asset remains unconfirmed.

Responsive behavior is implemented at 1,120 px, 860 px, and 620 px breakpoints. The mobile drawer and accessibility state are covered by automated interaction tests; a separate mobile screenshot and device Lighthouse run were not captured in this environment.

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

Container execution is NOT_RUN_RUNTIME_ABSENT: neither docker nor nginx is installed in this review environment (command not found, exit code 127). The exact remaining deployment witness is a successful Amvera image build followed by HTTP checks for /healthz, /, /evidence, /privacy, and an unknown route.

## Intentionally unresolved public data

The following values remain null or absent and are hidden:

- public evaluation email and Telegram;
- founder photo and LinkedIn;
- education, employment history, current location, and legal entity status;
- IP-ownership statement;
- Hub71 deck and sanitized public technical brief;
- customers, users, revenue, funding, LOIs, pilots, and partner endorsements.

The primary CTA therefore routes to inspectable evidence and founder context instead of inventing a contact destination. A confirmed public email is the remaining content blocker for email-based evaluation and pilot CTAs.

## Release decision

The static website source is ready for the requested GitHub commit. Production acceptance remains conditional on the first Amvera build, TLS/domain configuration using Amvera-provided DNS records, route checks, and deployed Lighthouse/accessibility review.
