# QA report

Status: **PASS_WITH_DISCLOSED_RUNTIME_AND_VISUAL_BOUNDARIES**

Review date: 2026-08-04
Release target: pull request → terminal GitHub Actions → `main` → Amvera Docker build

## Local release checks

`npm run format:check && npm run build` completed with exit code 0.

| Check                         | Result                                                                                     |
| ----------------------------- | ------------------------------------------------------------------------------------------ |
| Source claim firewall         | PASS — 43 public-source files, 0 forbidden matches, 40 required boundaries                 |
| ESLint                        | PASS                                                                                       |
| TypeScript strict build       | PASS                                                                                       |
| Vitest / Testing Library      | PASS — 5 files, 77 tests                                                                   |
| Vite production build         | PASS — 1,610 modules                                                                       |
| Localized HTML prerender      | PASS — 24 route entries                                                                    |
| Compiled-asset claim firewall | PASS — 30 artifacts, 0 forbidden matches                                                   |
| Prettier                      | PASS                                                                                       |
| `npm audit`                   | PASS — 0 known production or development vulnerabilities after compatible lock-file update |

Production payload:

```text
dist/index.html                     1.65 kB | gzip   0.71 kB
dist/assets/index-DiY_WqNl.css    121.46 kB | gzip  22.22 kB
dist/assets/index-CK1P-qqb.js   1,303.68 kB | gzip 404.98 kB
```

Vite reports a non-failing raw-chunk-size warning above 500 kB. The gzip JavaScript payload is 404.98 kB after adding the complete four-language school curriculum; route/locale code splitting remains a performance follow-up, not a correctness failure.

## Archive evidence review

- Archive SHA-256: `64506fbf19caac52fb8c44cebcc3fc4f8f1cfae959a5e75db3e63e3073716de9`.
- ZIP integrity: PASS, 569 entries.
- Fresh STATIC: PASS; receipt `f00581021163a7236194517d0370cff3d836803804959fdf1adfb318cb4666ea`.
- Fresh FAST on CPython 3.12.13: PASS; receipt `5046b87d78373c6f9b3f707923f3b00fc9c2f013ae23c3e4d41313413f47d456`.
- Fresh FULL: `NOT COMPLETED` — not run.
- Stored FULL: PASS, 1,366/1,366 checks across 131 modules.
- Stored targeted: 338 PASS; direct gates: 22 PASS.
- CPython 3.13 replay: BLOCKED_ENVIRONMENT_RUNTIME_UNAVAILABLE.
- Current status: `READY_NOT_DUAL_MINOR_SEALED_WITH_DISCLOSED_BOUNDARIES`.

The site distinguishes fresh results from stored receipts. It does not call the stored FULL result fresh and does not convert the CPython 3.13 environment block into a pass.

## Mathematical review

The tests independently enumerate the finite structures instead of accepting displayed totals as fixtures.

- PLUS group laws and every PLUS/STAR table entry across L1–L7.
- 140 ordered input coordinates, 280 raw law coordinates, and 560 unique oriented typed transition coordinates.
- Current runtime scope of 556 active coordinates across L2–L7, with L1 control-only.
- STAR one-sided roles for every nontrivial level: unique left zero P0, unique right-neutral P0, no left-neutral element, no right zero, and no two-sided neutral/zero element.
- STAR noncommutativity and nonassociativity at every `n≥2`, including the exact L3 witness.
- ABI LEFT/RIGHT operand placement, standard left/right translations, table axis, and every fixed-active rank.
- Left/right iteration and the zero-prefix theorem by exhaustive short-word enumeration.
- All right-, left-, and two-sided stable subsets and all STAR/full congruences.
- All PLUS, STAR, and full-algebra automorphisms by exhaustive permutation search.
- Unit cycles, carrier and ordered-pair orbits, stabilizers, orbit–stabilizer, inversion orbits, direct orbit enumeration, and an independent Burnside calculation.
- Exact aggregate reconciliation: local automorphism orders sum to 18; fibrewise typed pair orbits total 224.
- Affine STAR failures for every nonzero translation, L5/L7 quadratic-residue block behavior, and an exact L6 CRT counterexample.
- Every pointed map `A_n→A_m` for `1≤n,m≤7`: 70 full-algebra homomorphisms, including 28 embeddings; the zero homomorphism exists for every pair.

The public pages distinguish mathematical homomorphism, injective embedding, legacy compatibility replay, and authorized operational transfer. They explicitly state that the old morphism module is excluded from the current V4 wheel.

### Beginner-theory verification

The dedicated Theory route is tested as an educational contour, not as a second source of mathematical authority.

- A shared school notebook contains 59 concept lessons: 20 foundations, 23 mathematics lessons, and 16 symmetry lessons. Every lesson has the same seven fields: analogy, exact definition, worked finite example, reason/proof, common mistake or boundary, table check, and formula check.
- The same cards appear in the guided Theory route and in the academic Mathematics and Symmetry chapters, so a learner can move from a concrete explanation to the formal reference without changing terminology.
- Every one of the 280 raw PLUS/STAR table cells is reconstructed by a formula implementation that does not call the table lookup.
- Every one of the 560 oriented typed coordinates is then reconciled through three witnesses: raw table address, independent formula result, and canonical typed target.
- The interactive tutor exposes the same contract as `BEGINNER_TRANSITION_DUAL_CHANNEL`, including `cell_id`, `raw_operands`, `table_expected`, `formula_got`, `rc`, and terminal `status`.
- The L3 P0 reset example is replayed in both `STAR_LEFT` and `STAR_RIGHT`, proving that source/active role placement can change the target.
- Every possible identity candidate is checked at each `n≥2`; the displayed proof first forces `e=P0` from `P1★e=P1` and then rejects that sole candidate with `P0★P1≠P1`.
- The fixed-active L3 example independently recovers `rank(STAR_LEFT,P2)=2` and `rank(STAR_RIGHT,P2)=3`, while a direct affine-shift witness fails STAR preservation.
- Independent direct orbit enumeration and the Burnside calculation both reconstruct the fibrewise typed total `224`; `18` remains the sum of seven local automorphism-group orders.
- The route explicitly bridges two L3 carrier orbits, five L3 ordered-pair orbits, twenty L3 typed orbits, and the fibrewise whole-tower total `224`; no orbit crosses a level or family boundary.
- Beginner-facing tests require the exact L3→L5 preservation counterexample, the independent `n∣m` embedding theorem, and the distinction between the always-present zero homomorphism and a nonzero embedding. Archived morphism receipts remain `COMPATIBILITY_ONLY`, not a current V4 API.
- The object-boundary ledger separates pole, typed coordinate, committed descriptor, frontier, one-shot handle, target World Atlas state, and execution receipt.
- Current-selector arithmetic is independently reconstructed as `108=4Σ_{n=2}^7n`, `1,204=556+6×108`, `880=556+3×108`, and `440=880/2`; all eight target-architecture stages remain explicitly marked `TARGET`.
- Evidence tests preserve the contour boundary: fresh FULL was not run; the stored FULL receipt is `1,366/1,366`; the current V4 selector is deterministic, untrained, and limited to exactly two fixed source patterns.

## Release arithmetic tests

The release test suite checks:

```text
1,366 = 1,277 + 89
4,802 = 1,902 + 2,852 + 24 + 24 + 0 + 0
1,204 = 556 + 6 × 108
756 = 7 × 108
345 = 324 + 21
325 = 324 + 1 generated runtime-policy marker
880 = 440 + 440
```

This prevents the generated wheel marker from being miscounted as a selected source module.

## Localization and accessibility checks

- English, Russian, Simplified Chinese, and Arabic render all six routes: Home, Theory, Mathematics, Symmetry, Evidence, and Privacy — 24 prerendered HTML entries in total.
- Rendered-route translation coverage is complete for RU/ZH/AR.
- All 59 seven-part school lessons are translated as complete academic explanations rather than word-for-word glosses; terminology and placeholder parity are checked separately for RU, ZH, and AR. Exact IDs, formulas, hashes, and machine statuses remain untranslated and LTR.
- Arabic document direction is RTL while tables, formulas, matrices, hashes, and receipt JSON remain LTR; translated captions and explanatory labels inherit RTL independently of their LTR mathematical containers.
- Semantic header/navigation/main/footer landmarks, skip link, focus styles, reduced-motion rules, aria-live replay, and expanded-state navigation are present.
- Beginner explanatory prose has a 14px minimum and table/technical text a 13px minimum; horizontal ledgers are labelled, keyboard-focusable regions.
- Interactive tests cover Cayley cells and keyboard-oriented selection, beginner dual-channel replay, typed-family switching, receipt replay/reset, symmetry cycles, stabilizers, Burnside totals, localized paths, metadata, and all chapter anchors.

## Claim firewall

The source and compiled-artifact firewalls reject general overclaims plus the following mathematics/release regressions:

- P0 described as a STAR identity without side qualification;
- no homomorphism L3→L5;
- a global 18-element automorphism group;
- 560 raw/formal Cayley cells;
- a learned selector or authenticated external truth;
- proven external operational gain;
- fresh FULL 1,366/1,366;
- dual-minor PASS, a current trained Atlas, or executable CORE/QUASI/BOUNDARY actions.

## Visual and deployment boundary

The cloud browser cannot access the local loopback preview in this environment (`ERR_BLOCKED_BY_CLIENT`). Therefore no human-like browser screenshot review of this local build is claimed. DOM, responsive CSS, overflow wrappers, RTL direction, and interactions are automated; a deployed desktop/mobile visual review remains required after Amvera publishes the terminally green `main` commit.

Docker is unavailable in the local workspace. GitHub Actions is the authoritative container witness: it must build the image and smoke-test `/healthz`, all localized Theory, Mathematics, and Symmetry routes, the existing routes, and an unknown fallback before merge/publication acceptance.

## Remaining research boundaries

The public site discloses:

1. persistent trusted manifest head — NOT IMPLEMENTED;
2. Python process capability isolation — NOT PROVEN;
3. CPython 3.13 replay — BLOCKED;
4. arbitrary free-text semantic noninterference — NOT PROVEN;
5. external outcome and operational gain — NOT PROVEN;
6. persistent policy — NOT STARTED;
7. current trained World Atlas — NOT PRESENT;
8. General AI — NOT CLAIMED.

The current selector is deterministic and limited to two fixed source patterns. Historical relational-KG research material remains compatibility history, has no supported strong-control advantage, and is not presented as a current trained Atlas.
