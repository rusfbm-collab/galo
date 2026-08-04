# Academic Mathematics and R5B6A1_3 Release Review

Review date: 2026-08-04
Repository baseline: `5e3766375ca32eb5ffaf3e77bf1ced14596fad06`

## Purpose and authority

This document records an independent review of the finite algebra presented by the GALO website and of the supplied `R5B6A1_3` release archive. It has two purposes:

1. establish publication-safe mathematical statements for `PLUS`, `STAR`, typed action orientations, automorphisms, orbits, and cross-level maps; and
2. distinguish fresh verification performed during this review from evidence stored inside the release archive.

The following authority order is used throughout:

1. mathematical derivation and exhaustive independent enumeration for finite-algebra claims;
2. immutable machine status, contracts, manifests, and receipts for release claims;
3. the current V4 wheel for claims about the currently shipped runtime;
4. compatibility source and historical evidence only for explicitly historical or audit claims;
5. prose theory as architectural context, never as a substitute for contradictory machine evidence.

No result in this review establishes external operational gain, persistent learning, a trained current Atlas, or general artificial intelligence.

## Reviewed sources and immutable identities

| Source                                                          | Role                                                  | SHA-256                                                            |
| --------------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------ |
| `GALO_OPERATOR_CONSOLIDATE_R5B6A1_3_VERIFIED_CURRENT(1).zip`    | Current release archive and machine evidence          | `64506fbf19caac52fb8c44cebcc3fc4f8f1cfae959a5e75db3e63e3073716de9` |
| `STAR_ALGEBRAS_STANDARD_ACADEMIC_RU(3).pdf`                     | Academic reference for the `STAR` algebra             | `12e482c88ebe45afc3eacf93ee7698957cd50ac329d5957cf0906c46cebca98d` |
| `GALO_TWO_TOWERS_SYMMETRY_ACADEMIC_REPORT_V2(4).pdf`            | Academic reference for symmetries and tower structure | `496209046f5fa92c27a15a98ff083414d2a171bb008dd56dfd43b802668f6f9b` |
| Parent `R5B6A1_2` outer archive                                 | Release-delta parent recorded by `R5B6A1_3`           | `03aebd6bdfe13ded06863d3cc2cca4280c9dd0d67285df312c1856b13594d62f` |
| `01_ENGINE/GALO_GENERAL_AI_ENGINE_R5B6A1_3_CURRENT_PRODUCT.zip` | Audit and full-replay engine                          | `4132a83e2d11c529403ae8aef2514e07709c8620fd914263366c73e90bac89b3` |
| `08_DEPENDENCIES/WHEELHOUSE/galo_ai-0.1.3-py3-none-any.whl`     | Current V4 runtime distribution                       | `262dca8c679ed2f3a376199b23bf46b0a0de3e56076a7cd0dd47250605dfba12` |
| `06_THEORY_AND_HANDOFF/GALO_AI_THEORY_CURRENT.docx`             | Architectural theory and handoff document             | `1fc54f27a61562f612dcdcc3e318c124f5c4fd7745cc6f7e9bec1c8b15fd3248` |
| `05_EVIDENCE/VISUAL/GALO_AI_THEORY_CURRENT.pdf`                 | Bound 119-page rendering of the theory document       | `cfa357a3ceb40d85fb111e322cafd6ddcaf14d84a3cbb9d570fc5073ac49a7e5` |

The uploaded outer archive contains 569 files and has valid ZIP CRCs. Its immutable outer manifest records 568 payload files, 2,248 recursive nodes, 19 ZIP containers, no symbolic links, and no cache or bytecode artifacts.

## Independent finite-algebra review

### Carriers and operations

For each level $1 \leq n \leq 7$, let

\[
Q_n = \{P_0,\ldots,P_{n-1}\} \cong \mathbb Z/n\mathbb Z.
\]

Writing pole indices modulo $n$, the two raw binary laws are

\[
P_i + P_j = P_{i+j},
\]

and

\[
P_i \star P_j =
\begin{cases}
P_0, & i=0,\\
P_{i+j}, & i\ne 0.
\end{cases}
\]

The `PLUS` algebra is the cyclic group $C_n$. The `STAR` classification requires an explicit distinction between the degenerate level $n=1$ and every nondegenerate level $n \geq 2$.

### Exact role of $P_0$ in `STAR`

For every $n \geq 2$,

\[
P_0\star P_j=P_0,
\qquad
P_i\star P_0=P_i.
\]

Therefore $P_0$ is:

- the unique **left zero** of `STAR`; and
- the unique **right identity element** of `STAR`.

It is neither a two-sided identity nor a two-sided zero. For $n \geq 2$, `STAR` has no left identity and no right zero. Unqualified terms such as “the identity,” “the unit,” “the zero,” “absorbing element,” or “neutral element” are mathematically unsafe unless the relevant side is stated.

At $n=1$, the single element is simultaneously a two-sided identity and a two-sided zero. Every public classification must state this exception.

For $n \geq 2$, `STAR` is a finite total magma, but it is neither commutative nor associative. For example,

\[
P_0\star P_1=P_0\ne P_1=P_1\star P_0,
\]

and

\[
(P_1\star P_0)\star P_1=P_{2\bmod n},
\qquad
P_1\star(P_0\star P_1)=P_1.
\]

The two results differ for every $n \geq 2$. Thus, for $n \geq 2$, `STAR` is not a semigroup, monoid, group, quasigroup, loop, ring, or field.

### Typed action orientations are not translation names

The operational interface defines operand roles:

\[
\begin{aligned}
\operatorname{PLUS\_LEFT}(s,a) &= s+a,\\
\operatorname{PLUS\_RIGHT}(s,a) &= a+s,\\
\operatorname{STAR\_LEFT}(s,a) &= s\star a,\\
\operatorname{STAR\_RIGHT}(s,a) &= a\star s.
\end{aligned}
\]

`LEFT` and `RIGHT` describe where `source` and `active` are placed. They do not name the standard left and right translations of an algebra.

In standard terminology,

\[
L_x(y)=x\star y,
\qquad
R_y(x)=x\star y.
\]

Consequently, with active pole $a$ fixed and source $s$ varying, `STAR_LEFT` is the standard right translation $R_a$, while `STAR_RIGHT` is the standard left translation $L_a$.

| Typed family with fixed active pole $a$ | Standard map            |                    Exact rank |
| --------------------------------------- | ----------------------- | ----------------------------: |
| `PLUS_LEFT`                             | $s\mapsto s+a$          |                           $n$ |
| `PLUS_RIGHT`                            | $s\mapsto a+s$          |                           $n$ |
| `STAR_LEFT`                             | $R_a:s\mapsto s\star a$ | $n$ if $a=0$; otherwise $n-1$ |
| `STAR_RIGHT`                            | $L_a:s\mapsto a\star s$ |   $1$ if $a=0$; otherwise $n$ |

Here rank means the cardinality of the image of a finite map. It is not a matrix rank or a learned-model quantity.

### The 140, 280, 560, and 556 counts

The exact count is

\[
\sum_{n=1}^{7}n^2=140.
\]

This yields:

| Object being counted                                        |           Count |
| ----------------------------------------------------------- | --------------: |
| Ordered coordinates for one binary law across L1-L7         |             140 |
| Raw `PLUS` and `STAR` law-table coordinates                 | $2\cdot140=280$ |
| Oriented typed coordinates after `LEFT`/`RIGHT` role typing | $2\cdot280=560$ |
| Active oriented coordinates on L2-L7                        |     $560-4=556$ |

The per-level typed counts are $4n^2$, namely

\[
4,16,36,64,100,144,196.
\]

Accordingly, 560 must be described as the number of **oriented typed transition coordinates**. It is not the number of raw Cayley-table entries, neurons, concepts, skills, meanings, or units of intelligence.

### Automorphisms and family-preserving orbits

For the two-operation algebra

\[
A_n=(Q_n,+,\star),
\]

every automorphism is multiplication by a unit modulo $n$:

\[
\operatorname{Aut}(A_n)\cong(\mathbb Z/n\mathbb Z)^\times.
\]

The automorphism counts for L1-L7 are

\[
1,1,2,2,4,2,6.
\]

Their sum is 18. This number is an inventory total across seven separate levels; it is not the order of one global 18-element automorphism group.

For the diagonal action on ordered coordinate pairs,

\[
u\cdot(i,j)=(ui,uj),
\]

Burnside's lemma gives

\[
N_n=\frac{1}{\varphi(n)}
\sum_{u\in(\mathbb Z/n\mathbb Z)^\times}
\gcd(u-1,n)^2.
\]

The resulting pair-orbit counts are

\[
1,4,5,10,7,20,9.
\]

They sum to 56. When the four typed family labels are fixed rather than permuted, this gives

\[
4\cdot56=224
\]

family-preserving typed orbit classes. The number 224 is meaningful only together with this explicitly stated group action and family-preservation rule.

As a concrete example, at L5 the units $1,2,3,4$ send the pair $(1,2)$ through

\[
(1,2),(2,4),(3,1),(4,3).
\]

This is a four-element orbit; the typed family label and provenance remain unchanged.

### Cross-level homomorphisms and embeddings

The compatibility implementation uses a narrower operational policy than the full mathematical homomorphism category. These must not be conflated.

For $n \geq 2$, every homomorphism $A_n\to A_m$ preserving both `PLUS` and `STAR` is either:

1. the zero homomorphism $h(P_i)=P_0$, which exists for every ordered pair $(n,m)$; or
2. a nonzero injective homomorphism, possible exactly when $n\mid m$, of the form

\[
h_u(P_i)=P_{(m/n)ui},
\qquad
u\in(\mathbb Z/n\mathbb Z)^\times.
\]

Thus, when $n\mid m$, there are $\varphi(n)$ nonzero embeddings, not only the canonical choice $u=1$. For $n=1$, the unique zero map is also injective because the domain has one element.

Across all ordered level pairs L1-L7, exhaustive enumeration gives:

| Class                                                | Count |
| ---------------------------------------------------- | ----: |
| Zero homomorphisms, one per ordered level pair       |    49 |
| Nonzero injective homomorphisms                      |    21 |
| All homomorphisms                                    |    70 |
| Injective homomorphisms, including the seven L1 maps |    28 |

The canonical positive example

\[
L2\to L4,
\qquad
h(P_i)=P_{2i}
\]

is correct. For L3 to L5, the pole-name map $h(P_i)=P_i$ fails because

\[
h(P_1+P_2)=P_0,
\qquad
h(P_1)+h(P_2)=P_3.
\]

The correct conclusion is:

> There is no injective or non-collapsing homomorphism from L3 to L5; the zero homomorphism exists but is deliberately excluded by the operational information-preservation policy.

It is incorrect to state that no homomorphism L3 to L5 exists.

The archived compatibility module `src/galo_next/route_execution/morphism_v1.py` selects one canonical embedding for each divisible level pair and calls those pairs `lawful_transfers`. That is a valid restricted policy when named as such, but not a classification of all homomorphisms. The module is explicitly excluded from the current V4 wheel by `R5B6A1_3_RUNTIME_PAYLOAD_POLICY.json` and therefore must not be advertised as a current V4 public API.

## R5B6A1_3 release evidence

### Fresh and stored verification are different claims

The following outer-archive checks were run afresh, read-only, during this review:

| Verification contour             | Status  | Receipt digest                                                     | Qualification                          |
| -------------------------------- | ------- | ------------------------------------------------------------------ | -------------------------------------- |
| ZIP CRC and inventory inspection | PASS    | N/A                                                                | Fresh inspection of the uploaded bytes |
| Outer `STATIC`                   | PASS    | `f00581021163a7236194517d0370cff3d836803804959fdf1adfb318cb4666ea` | Fresh replay                           |
| Outer `FAST`, CPython 3.12.13    | PASS    | `5046b87d78373c6f9b3f707923f3b00fc9c2f013ae23c3e4d41313413f47d456` | Fresh replay                           |
| Outer `FULL`                     | NOT RUN | N/A                                                                | No fresh FULL claim is authorized      |

The archive contains the following stored release evidence:

| Stored contour        | Result                                               | Canonical location                                            |
| --------------------- | ---------------------------------------------------- | ------------------------------------------------------------- |
| FULL regression       | 1,366/1,366 PASS; 131/131 modules; 0 fail/error/skip | `05_EVIDENCE/FULL/FULL_TERMINAL_RECEIPT.json`                 |
| Targeted              | 338/338 PASS                                         | `05_EVIDENCE/BUILD/R5B6A1_3_THEORY_FACTS.json` → `$.targeted` |
| Direct selfcheck      | 22/22 PASS                                           | `05_EVIDENCE/BUILD/R5B6A1_3_THEORY_FACTS.json` → `$.direct`   |
| Installed wheel smoke | 9/9 PASS                                             | `05_EVIDENCE/BUILD/R5B6A1_3_THEORY_FACTS.json` → `$.wheel`    |

The stored FULL terminal receipt has digest

`69279e019dfe6c30da4b06979d5c17fc125670c058599c97896b35d0e247f0b0`.

The parent-test inclusion receipt confirms that all 1,277 parent test IDs are retained and 89 new IDs are added:

\[
1366=1277+89.
\]

The immutable outer manifest was assembled before an external outer replay and therefore retains `OUTER_STATIC_312=NOT_RUN`, `OUTER_FAST_312=NOT_RUN`, and `OUTER_FULL_312=NOT_RUN`. Those embedded pre-replay fields do not negate the fresh terminal `STATIC` and `FAST` results above, but they must not be silently rewritten or represented as an embedded FULL certificate.

### Exact release status

The canonical current status is

`READY_NOT_DUAL_MINOR_SEALED_WITH_DISCLOSED_BOUNDARIES`.

The current runtime is verified on CPython 3.12.13. CPython 3.13 replay is recorded as

`BLOCKED_ENVIRONMENT_RUNTIME_UNAVAILABLE`,

so the release is not dual-minor sealed.

Compared with `R5B6A1_2`, the stored evidence changes as follows:

| Field                | R5B6A1_2 | R5B6A1_3 |
| -------------------- | -------: | -------: |
| FULL tests           |    1,277 |    1,366 |
| Test modules         |      126 |      131 |
| Targeted tests       |      249 |      338 |
| Current direct gates |       14 |       22 |
| Wheel                |    0.1.2 |    0.1.3 |

### What the current selector actually proves

The current V4 selector is a closed deterministic mechanism, not a trained semantic reasoner.

Its public ontology contains exactly two source-owned observations:

- `BINARY_PUBLIC_LEFT_V1`, represented by the exact ordered features `alpha`, `beta`; and
- `BINARY_PUBLIC_RIGHT_V1`, represented by the exact ordered features `gamma`, `delta`.

Unknown fields, aliases, encoded aliases, and Unicode-homoglyph canaries are rejected. This establishes a controlled finite-language firewall, not semantic noninterference for arbitrary text.

The exact candidate arithmetic is:

\[
\begin{aligned}
N_{\mathrm{free}} &= 4\sum_{n=2}^{7}n^2=556,\\
N_{\mathrm{stratum}} &= 4\sum_{n=2}^{7}n=108,\\
N_{\mathrm{universe}} &= 556+6\cdot108=1204,\\
N_{\mathrm{coverage}} &= 7\cdot108=756.
\end{aligned}
\]

The current selector admits only `FREE_FRAME`, `JOINT_COMPOSITION`, `PROBE`, and `ROUTE`, giving

\[
556+3\cdot108=880
\]

currently selectable descriptors. The two observations select opposite enumeration parities, producing two distinct 440-candidate frontiers. Candidate order is a deterministic SHA-256-derived order over the observation, candidate ID, and enumeration ordinal.

The bound Atlas snapshot contributes identity only:

| Atlas effect         | Count |
| -------------------- | ----: |
| Semantic Atlas reads |     0 |
| Rank effects         |     0 |
| Learning writes      |     0 |

The release therefore proves internal candidate choice within a finite sealed contract. It does not prove learned selection, natural-language understanding, persistent adaptation, or outcome improvement.

### Receipt-derived work accounting

The current episode receipt contains six disjoint ledger partitions representing five phase types, with action execution split into baseline and treatment arms:

| Ledger partition           | Verified work-unit count |
| -------------------------- | -----------------------: |
| Shared episode preparation |                    1,902 |
| Selector                   |                    2,852 |
| Baseline action execution  |                       24 |
| Treatment action execution |                       24 |
| Outcome evaluation         |                        0 |
| Policy update              |                        0 |
| **Physical total**         |                **4,802** |

The arithmetic is exact:

\[
4802=1902+2852+24+24+0+0.
\]

The legacy attributed total is

\[
6704=4802+1902,
\]

because shared preparation is attributed to both arms. The attributed total is explicitly non-authoritative for physical execution.

These values count receipt-bound internal work-unit identifiers. They are not wall-clock time, energy use, floating-point operations, cost savings, model quality, or external operational gain. Outcome-evaluation and policy-update work are both zero, and the episode does not authorize learning or promotion.

### Disclosed release boundaries

The canonical boundary registry contains six open items:

| Boundary                                     | Status                                    | Meaning                                                                                                                     |
| -------------------------------------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Persistent trusted manifest head             | `NOT_IMPLEMENTED`                         | Manifest head and revocation state are process-local and do not survive restart                                             |
| Python process capability isolation          | `NOT_PROVEN`                              | Ordinary public paths reject correctly, but Python reflection and direct private-module access are not a capability sandbox |
| CPython 3.13 STATIC/FAST/FULL                | `BLOCKED_ENVIRONMENT_RUNTIME_UNAVAILABLE` | The exact candidate has not been replayed under CPython 3.13                                                                |
| Arbitrary free-text semantic noninterference | `NOT_PROVEN`                              | The proof covers only the exact finite two-observation ontology                                                             |
| External outcome and operational gain        | `NOT_PROVEN`                              | No preregistered externally grounded evaluator has produced an outcome                                                      |
| Persistent policy and trained current Atlas  | `NOT_STARTED`                             | The current release performs no persistent learning                                                                         |

Additional current-scope limits remain explicit:

- L1 is control-only; active execution scope is L2-L7;
- participant arity is 2;
- route depth is 1;
- each episode has one action per arm;
- mutable multi-step proof state and horizon 2-6 are not implemented;
- real `CORE_BINDING`, `QUASI_CORE`, and `BOUNDARY_ACTION` execution is unavailable;
- a probe can create a request, but no external response loop is implemented;
- a general $k$-ary composition engine is an architectural target, not a current runtime capability.

## Formal mathematics, compatibility evidence, and current runtime

These layers must remain visibly separate on the public site.

| Layer                          | What belongs here                                                                                                                                                                                              | What must not be inferred                                                                                             |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Formal mathematics             | $Q_n$, `PLUS`, `STAR`, 280 raw law coordinates, 560 typed orientations, translations, ranks, automorphisms, Burnside orbits, homomorphism classification, bracket-sensitive expressions                        | Runtime availability, learning, semantic intelligence, or external performance                                        |
| Compatibility and audit source | Historical modules, `morphism_v1.py`, operator-semantics analysis, stored regressions, superseded experiments, reconstruction tools                                                                            | Membership in the current V4 wheel or authority over current public execution                                         |
| Current V4 runtime             | Pinned-key signature verification, finite source ontology, deterministic 440-candidate frontiers, internal handle opening, one-shot two-arm execution, receipt-derived ledger, fail-closed legacy public paths | Arbitrary-text semantics, persistent trust, multi-step reasoning, trained selection, external outcomes, or general AI |
| Architectural target           | Multi-step trajectories, real CORE/QUASI/BOUNDARY actions, response-driven probes, revision, causal stopping, persistent learning, trained Atlas                                                               | A delivered or verified feature                                                                                       |

The source archive is an audit-and-full-replay container with compatibility history. The wheel, not the presence of a source file in that archive, determines whether a module belongs to the current runtime.

## Source, custody, and historical-evidence limitations

### Pinned-key verification is not independent external truth

The shipped sample manifest is cryptographically verified relative to a public key pinned inside the release. It binds signer and authority identifiers, sequence, previous-manifest identity, payload SHA-256 and size, and process-local revocation state.

The bundled sample, however, uses GALO-defined authority identifiers and synthetic features such as `alpha` and `beta`. The evidence therefore establishes integrity relative to the release-pinned key. It does not independently establish that a third party owns the key, that the source is externally grounded, or that the payload is true.

Publication-safe wording is:

> The bundled finite sample is verified against a release-pinned public key.

The broader wording “independent external source authenticity is proven” is not authorized by the supplied evidence.

### Data rights are not cleared for commercial redistribution

`04_DATA/DATA_CUSTODY_INDEX.json` records:

`commercial_redistribution_authorized=false`.

The relational-KG and n-ary bundles additionally have incomplete custody metadata. All five data bundles pass integrity checks and require no network for replay, but every authority flag in `04_DATA/EXTERNAL_DATA_CATALOG.json` is false. Integrity is not a license, provenance authority, semantic verdict, or redistribution permission.

### Historical training must not be presented as current learning

Compatibility history contains a relational-KG research-benchmark artifact with 99,041 recorded updates. It also records commercial rights as not proven and partner validation as false.

The stronger-control audit states:

- `learned_advantage_vs_strong_controls=NOT_SUPPORTED`;
- `authorizes_verdict=false`;
- the analysis is retrospective and not preregistered;
- partner grade and partner validation are false; and
- general AI is not claimed.

This historical artifact is distinct from the current V4 selector, whose Atlas is untrained and has zero semantic reads, rank effects, and learning writes. Neither the historical `18.108%` descriptive result nor any older learning headline may be presented as current operational gain.

### The theory document contains retained stale front matter

The bound 119-page theory document appends the current R5B6A1_3 material in Part XL, pages 116-119. Earlier retained pages still state, among other historical text:

- `Revision V24.1 - R5B6A1_1` on the title page;
- that Part XXXIX/R5B6A1_2 is the current authority;
- `UNIVERSE_BOUND_EXECUTION=FAIL`; and
- `560 formal raw cells`.

Those statements do not describe the current release and, in the last case, are mathematically imprecise. Part XL and the machine status correct the release history, while the independent derivation in this review corrects the cell terminology. The document itself states that manifests, receipts, tables, status registries, and direct replay take priority over DOCX prose.

The visual QA receipt confirms page decoding, dimensions, binding, and 100% page-set coverage, but explicitly records

`visual_inspection_performed_by_builder=false`.

Programmatic render integrity must not be described as a human mathematical review.

### Wheel partition arithmetic requires precise labels

The release facts list 345 source files, 325 selected wheel files, and 21 excluded compatibility files. Those numbers are not one direct disjoint-union equation because the selected wheel inventory includes one generated runtime-policy marker that is absent from source.

The exact partition is

\[
345=324+21,
\]

where 324 source files are selected and 21 source files are excluded. The wheel then contains

\[
325=324+1
\]

selected files after adding the generated marker. The expression `345 = 325 + 21` is false and must not appear publicly.

## Publication requirements for the website

All English, Russian, Simplified Chinese, and Arabic versions must preserve the same quantifiers, sidedness, exceptional case $n=1$, and formal/runtime boundaries. In particular, the site must:

1. call $P_0$ the left zero and right identity of `STAR` for $n \geq 2$, never an unqualified identity or zero;
2. identify `LEFT` and `RIGHT` as operand-role orientations, not standard algebraic translations;
3. call 560 oriented typed transition coordinates and separately identify the 280 raw law-table coordinates;
4. state that 18 is the sum of seven local automorphism counts;
5. define the group action before stating the 224 family-preserving orbit count;
6. state that the L3 to L5 pole-name map fails and that no injective homomorphism exists, while acknowledging the zero homomorphism;
7. label morphism replay and operator-semantics material as formal or compatibility/audit evidence, not current V4 runtime capability;
8. describe the current selector as a finite deterministic selector with two 440-candidate frontiers, not a trained or general semantic policy;
9. present 4,802 and 6,704 only as internal work-unit accounting, never as speed, cost reduction, or gain;
10. distinguish fresh `STATIC` and `FAST` from stored FULL 1,366/1,366;
11. keep CPython 3.13, persistent trust, arbitrary-text noninterference, external outcome, persistent learning, trained current Atlas, and operational gain visibly unresolved;
12. distinguish formal architecture from executable current scope for composition, CORE/QUASI actions, probes, revision, and multi-step trajectories; and
13. retain the data-custody and commercial-redistribution boundary wherever archive or dataset downloads are discussed.

Public claim checks should reject, unless the exact corrective context is present:

- “`P0` is the identity/unit of `STAR`”;
- “`STAR` has a zero”;
- “there is no homomorphism L3 to L5”;
- “GALO has one 18-element automorphism group”;
- “560 raw Cayley cells”;
- “the selector learned” or “the selector understands arbitrary observations”;
- “fresh FULL 1,366/1,366”;
- “dual-minor PASS”;
- “current trained Atlas”;
- “external operational gain”; and
- “real CORE/QUASI/BOUNDARY execution is current.”

## Canonical evidence pointers

| Claim                                  | Archive-relative authority and JSON path                                                                                                                      |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Current status and suite               | `07_STATUS/CURRENT_FINAL_STATUS.json` → `$.status`, `$.suite`, `$.targeted`, `$.direct_selfcheck`, `$.wheel`                                                  |
| Six current boundaries                 | `07_STATUS/CURRENT_BOUNDARY_REGISTRY.json` → `$.boundaries`                                                                                                   |
| Stored FULL result                     | `05_EVIDENCE/FULL/FULL_TERMINAL_RECEIPT.json` → `$.status`, `$.test_count`, `$.test_module_count`, `$.counts`, `$.receipt_digest`                             |
| Parent test inclusion                  | Nested engine `CURRENT_PARENT_TEST_ID_INCLUSION.json` → `$.parent_test_count`, `$.added_test_count`, `$.missing_parent_test_ids`, `$.strict_subset`           |
| Two 440-candidate frontiers            | Nested engine `CURRENT_R5B6A1_3_DIRECT_SELFCHECK.json` → G11 `$.direct_replay_witness`                                                                        |
| Integrated source-to-action boundary   | Same receipt → G14 `$.got` and `$.direct_replay_witness`                                                                                                      |
| Six work-ledger partitions             | Same receipt → G15 `$.direct_replay_witness.phase_counts`, `$.physical_total`, `$.attributed_total`                                                           |
| No outcome, learning, or trained Atlas | Same receipt → G20 `$.got`                                                                                                                                    |
| Universe scope and counts              | Nested engine `R5B6A1_1_WHOLE_TOWER_UNIVERSE_CONTRACT.json` → `$.finite_scope`                                                                                |
| Current mechanical contract            | Nested engine `R5B6A1_3_RELEASE_CONTRACT.json` → `$.mechanical_authorities`, `$.learning`, `$.frozen_untrained_atlas`                                         |
| Excluded compatibility modules         | Nested engine `R5B6A1_3_RUNTIME_PAYLOAD_POLICY.json` → `$.excluded_compatibility_rows`                                                                        |
| Data custody and rights                | `04_DATA/DATA_CUSTODY_INDEX.json` → `$.boundary`, `$.commercial_redistribution_authorized`, `$.bundles`                                                       |
| Data authority flags                   | `04_DATA/EXTERNAL_DATA_CATALOG.json` → `$.all_authority_flags_false`, `$.bundles`                                                                             |
| Historical trained artifact            | Nested engine `CURRENT_DOMAIN_TRAINING_STATUS.json` → `$.trained_atlases`, `$.trained_domain_count`                                                           |
| Strong-control historical conclusion   | Nested engine `CURRENT_GENERAL_AI_GAI4A_R3_STATUS.json` → `$.learned_advantage_vs_strong_controls`, `$.authorizes_verdict`, `$.partner_grade`, `$.general_ai` |
| Theory render qualification            | `05_EVIDENCE/VISUAL/R5B6A1_3_THEORY_VISUAL_QA_RECEIPT.json` → `$.claims`, `$.theory`, `$.render`                                                              |

## Final review conclusion

The finite `PLUS`/`STAR` mathematics is suitable for publication after the sided-identity, translation, cell-count, orbit-action, and homomorphism corrections above. The current release also contains meaningful bounded mechanical progress: pinned-key source verification, a closed finite ontology, internal deterministic candidate choice, a one-shot source-to-action path, and receipt-derived work accounting.

Those results remain narrow. The correct public release statement is that fresh outer `STATIC` and `FAST` replay passed on CPython 3.12.13, while FULL 1,366/1,366 is stored release evidence. External outcomes, operational gain, persistent learning, a trained current Atlas, arbitrary-text semantic noninterference, CPython 3.13 replay, real multi-step execution, and general AI remain unproven or unimplemented as explicitly recorded above.
