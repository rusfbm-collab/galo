# QA report

Status: **PASS_WITH_DISCLOSED_RUNTIME_AND_VISUAL_BOUNDARIES**

Review date: 2026-08-04
Release target: pull request → terminal GitHub Actions → `main` → Amvera Docker build

## Local release checks

`npm run format:check && npm run build` completed with exit code 0.

| Check                         | Result                                                                                     |
| ----------------------------- | ------------------------------------------------------------------------------------------ |
| Source claim firewall         | PASS — 37 public-source files, 0 forbidden matches, 31 required boundaries                 |
| ESLint                        | PASS                                                                                       |
| TypeScript strict build       | PASS                                                                                       |
| Vitest / Testing Library      | PASS — 3 files, 49 tests                                                                   |
| Vite production build         | PASS — 1,603 modules                                                                       |
| Localized HTML prerender      | PASS — 20 route entries                                                                    |
| Compiled-asset claim firewall | PASS — 26 artifacts, 0 forbidden matches                                                   |
| Prettier                      | PASS                                                                                       |
| `npm audit`                   | PASS — 0 known production or development vulnerabilities after compatible lock-file update |

Production payload:

```text
dist/index.html                   1.65 kB | gzip   0.70 kB
dist/assets/index-CnkYf94X.css   85.96 kB | gzip  16.77 kB
dist/assets/index-CT2RwVUH.js   644.01 kB | gzip 189.14 kB
```

Vite reports a non-failing raw-chunk-size warning above 500 kB. The gzip payload is 189.14 kB; route/locale code splitting remains a performance follow-up, not a correctness failure.

## Archive evidence review

- Archive SHA-256: `64506fbf19caac52fb8c44cebcc3fc4f8f1cfae959a5e75db3e63e3073716de9`.
- ZIP integrity: PASS, 569 entries.
- Fresh STATIC: PASS; receipt `f00581021163a7236194517d0370cff3d836803804959fdf1adfb318cb4666ea`.
- Fresh FAST on CPython 3.12.13: PASS; receipt `5046b87d78373c6f9b3f707923f3b00fc9c2f013ae23c3e4d41313413f47d456`.
- Fresh FULL: NOT_COMPLETED / not run.
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

- English, Russian, Simplified Chinese, and Arabic render all five routes: Home, Mathematics, Symmetry, Evidence, and Privacy.
- Rendered-route translation coverage is complete for RU/ZH/AR.
- Academic terminology was reviewed separately per language; exact IDs, formulas, hashes, and machine statuses remain untranslated and LTR.
- Arabic document direction is RTL while tables, formulas, matrices, hashes, and receipt JSON remain LTR.
- Semantic header/navigation/main/footer landmarks, skip link, focus styles, reduced-motion rules, aria-live replay, and expanded-state navigation are present.
- Interactive tests cover Cayley cells, typed-family switching, receipt replay/reset, symmetry cycles, stabilizers, Burnside totals, localized paths, metadata, and all chapter anchors.

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

Docker is unavailable in the local workspace. GitHub Actions is the authoritative container witness: it must build the image and smoke-test `/healthz`, all localized Mathematics and Symmetry routes, the existing routes, and an unknown fallback before merge/publication acceptance.

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
