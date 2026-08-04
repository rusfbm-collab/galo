import { ArrowLeft, ArrowRight, Braces, Check, GitBranch, ShieldAlert } from "lucide-react";
import { CayleyExplorer } from "../components/math/CayleyExplorer";
import { TypedCellExplorer } from "../components/math/TypedCellExplorer";
import { PageShell } from "../components/layout/PageShell";
import { SectionHeading } from "../components/ui/SectionHeading";
import {
  canonicalScaledEmbeddings,
  canonicalTypedCellCount,
  iterateStarProduct,
  rawCellsPerOperator,
  rawLawCellCount,
  sameLevelAutomorphismCount,
  structuralOrbitCount,
  towerCounts,
} from "../content/mathematics";
import { useI18n } from "../i18n/I18nContext";

const readingSteps = [
  {
    number: "01",
    title: "Pick the left operand",
    text: "Find P_i in the first column. This fixes the row.",
  },
  {
    number: "02",
    title: "Pick the right operand",
    text: "Find P_j in the header. This fixes the column.",
  },
  {
    number: "03",
    title: "Read the intersection",
    text: "The cell is the output P_k. No probability or learned parameter is involved.",
  },
] as const;

const orientations = [
  {
    name: "PLUS_LEFT",
    operation: "PLUS",
    order: "row = source · column = active",
    formula: "PLUS_LEFT(P_s, P_a) = PLUS_n(P_s, P_a) = P_((s+a) mod n)",
    text: "The source selects the PLUS row and the active pole selects the column.",
  },
  {
    name: "PLUS_RIGHT",
    operation: "PLUS",
    order: "row = active · column = source",
    formula: "PLUS_RIGHT(P_s, P_a) = PLUS_n(P_a, P_s) = P_((a+s) mod n)",
    text: "The active pole selects the PLUS row. The target matches PLUS_LEFT by commutativity, but the typed coordinate does not.",
  },
  {
    name: "STAR_LEFT",
    operation: "STAR",
    order: "row = source · column = active",
    formula: "STAR_LEFT(P_s, P_a) = P0 if s=0; else P_((s+a) mod n)",
    text: "The source selects the STAR row. A source at P0 activates the left-reset row, whatever the active pole is.",
  },
  {
    name: "STAR_RIGHT",
    operation: "STAR",
    order: "row = active · column = source",
    formula: "STAR_RIGHT(P_s, P_a) = P0 if a=0; else P_((a+s) mod n)",
    text: "The active pole is placed on the left. An active P0 activates the reset row; this can change the target relative to STAR_LEFT.",
  },
] as const;

const orientationWitnesses = [
  { cellId: "L3:PLUS_LEFT:P0:P2", result: "P2" },
  { cellId: "L3:PLUS_RIGHT:P0:P2", result: "P2" },
  { cellId: "L3:STAR_LEFT:P0:P2", result: "P0" },
  { cellId: "L3:STAR_RIGHT:P0:P2", result: "P2" },
] as const;

const countSteps = [
  {
    number: "01",
    title: "Choose the carrier",
    formula: "Q_n = {P0, …, P_(n−1)}",
    text: "Level L_n contains n poles. The level fixes the finite carrier before any table lookup occurs.",
  },
  {
    number: "02",
    title: "Enumerate ordered pairs",
    formula: "|Q_n × Q_n| = n²",
    text: "Every row-column pair is one input coordinate of a binary Cayley law. Order is retained even when outputs coincide.",
  },
  {
    number: "03",
    title: "Apply two frozen laws",
    formula: "PLUS + STAR = 2n² law coordinates",
    text: "PLUS and STAR each fill the same n-by-n coordinate grid with their own deterministic result.",
  },
  {
    number: "04",
    title: "Attach two typed orientations",
    formula: "LEFT + RIGHT = 4n² oriented typed coordinates",
    text: "LEFT and RIGHT do not invent a third law. They record which role—source or active—occupies each table axis.",
  },
] as const;

const mathContents = [
  { href: "#objects", label: "Objects and notation" },
  { href: "#cayley-tables", label: "Cayley tables" },
  { href: "#frozen-laws", label: "PLUS and STAR" },
  { href: "#typed-actions", label: "Four action families" },
  { href: "#cells-560", label: "The 560 coordinates" },
  { href: "#transformations", label: "Translations and ranks" },
  { href: "#composition", label: "Brackets and programs" },
  { href: "#star-structure", label: "Stability and congruences" },
  { href: "#morphisms", label: "Cross-level morphisms" },
] as const;

const activeNontrivialTransfers = canonicalScaledEmbeddings.filter(
  ({ sourceLevel, targetLevel }) => sourceLevel >= 2 && targetLevel > sourceLevel,
);

const l6LeftIteration = iterateStarProduct(6, 2, 6, "LEFT");
const l6RightIteration = iterateStarProduct(6, 2, 6, "RIGHT");

export function MathematicsPage() {
  const { href, t } = useI18n();

  return (
    <PageShell>
      <section className="page-hero page-hero--math">
        <div className="shell">
          <a className="back-link" href={href("/")}>
            <ArrowLeft className="directional-icon" size={16} aria-hidden="true" /> {t("Home")}
          </a>
          <p className="eyebrow eyebrow--cyan">{t("FORMAL KERNEL")}</p>
          <h1>{t("The mathematics beneath GALO AI.")}</h1>
          <p>
            {t(
              "The L1–L7 Cayley tables define the frozen PLUS and STAR operators used by the current formal kernel. They specify exact finite transformations; they do not by themselves prove learning, intelligence, or external performance.",
            )}
          </p>
          <div className="math-hero__status" aria-label={t("Formal scope")}>
            <span>L1–L7</span>
            <span>PLUS</span>
            <span>STAR</span>
            <strong>{t("FORMALLY_DERIVED")}</strong>
          </div>
          <a className="button button--primary math-hero__action" href="#cayley-tables">
            {t("Explore the tables")} <ArrowRight className="directional-icon" size={17} aria-hidden="true" />
          </a>
        </div>
      </section>

      <nav className="math-contents" aria-label={t("Mathematics chapter navigation")}>
        <div className="shell">
          <span>{t("On this page")}</span>
          <div>
            {mathContents.map((item, index) => (
              <a key={item.href} href={item.href}>
                <bdi dir="ltr">{String(index + 1).padStart(2, "0")}</bdi> {t(item.label)}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="objects" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("OBJECTS AND NOTATION")}
            title={t("One carrier, two reducts, one full finite algebra.")}
            text={t(
              "Project labels P_i are residue classes. The word tower is project terminology for the indexed family L1–L7; it is not an ascending chain unless connecting morphisms are specified.",
            )}
          />
          <div className="math-object-grid">
            <article>
              <span>{t("Carrier correspondence")}</span>
              <code dir="ltr">Q_n = {`{P0,…,P_(n−1)}`} ↔ Z/nZ</code>
              <p>{t("The bijection sends P_i to the residue class i modulo n and P0 to 0.")}</p>
            </article>
            <article>
              <span>{t("PLUS reduct")}</span>
              <code dir="ltr">G_n = (Q_n, PLUS_n, P0) ≅ C_n</code>
              <p>{t("This is the cyclic group of order n. P0 is its two-sided neutral element.")}</p>
            </article>
            <article>
              <span>{t("STAR reduct")}</span>
              <code dir="ltr">S_n = (Q_n, STAR_n, P0)</code>
              <p>{t("This is a pointed finite magma: a set with one total binary operation and a named constant.")}</p>
            </article>
            <article>
              <span>{t("Full expansion")}</span>
              <code dir="ltr">A_n = (Q_n, PLUS_n, STAR_n, P0)</code>
              <p>{t("This finite algebra has signature (2,2,0): two binary operations and one constant.")}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="cayley-tables" className="section section--paper math-explorer-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("INTERACTIVE CAYLEY EXPLORER")}
            title={t("Read every transition directly from the formula.")}
            text={t(
              "Choose a level and an operation. Rows are left operands, columns are right operands, and each intersection is the exact result.",
            )}
            aside={<span className="math-proof-chip">Q_n × Q_n → Q_n</span>}
          />
          <CayleyExplorer />
        </div>
      </section>

      <section id="reading-tables" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("HOW TO READ THE TABLE")}
            title={t("Three coordinates, one deterministic answer.")}
          />
          <div className="math-reading-grid">
            {readingSteps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{t(step.title)}</h3>
                <p>{t(step.text)}</p>
              </article>
            ))}
          </div>
          <div className="math-example-grid">
            <article>
              <span>{t("Worked example at L3")}</span>
              <code dir="ltr">PLUS_3(P1, P2) = P0</code>
              <p>{t("Move from row P1 to column P2. Since (1 + 2) mod 3 = 0, the result is P0.")}</p>
            </article>
            <article>
              <span>{t("STAR reset example at L3")}</span>
              <code dir="ltr">STAR_3(P0, P2) = P0</code>
              <p>{t("The P0 row is constant under STAR: P0 is a left reset.")}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="frozen-laws" className="section section--navy math-anchor-section">
        <div className="shell">
          <SectionHeading
            light
            eyebrow={t("TWO FROZEN OPERATORS")}
            title={t("PLUS and STAR share a carrier; their reducts are different algebraic structures.")}
          />
          <div className="operator-grid">
            <article>
              <div className="operator-card__mark" aria-hidden="true">
                +
              </div>
              <p className="eyebrow">{t("PLUS / CYCLIC GROUP")}</p>
              <h3>PLUS</h3>
              <code dir="ltr">P_i ⊕ P_j = P_((i + j) mod n)</code>
              <p>
                {t(
                  "PLUS is closed and associative, P0 is the identity, and every pole has an inverse. It is the cyclic group C_n on the pole indices.",
                )}
              </p>
            </article>
            <article>
              <div className="operator-card__mark" aria-hidden="true">
                ★
              </div>
              <p className="eyebrow">{t("STAR / POINTED FINITE MAGMA")}</p>
              <h3>STAR</h3>
              <code dir="ltr">P0 ★ P_j = P0; P_i ★ P_j = P_((i + j) mod n) if i ≠ 0</code>
              <p>
                {t(
                  "For STAR and n≥2, P0 is the unique left zero and unique right-neutral element. There is no left-neutral element, right zero, or two-sided neutral element: STAR is noncommutative, nonassociative, and neither a group nor a monoid.",
                )}
              </p>
            </article>
          </div>
          <div className="p0-role-grid">
            <article>
              <span>PLUS · {t("all levels")}</span>
              <code dir="ltr">P0 ⊕ P_i = P_i = P_i ⊕ P0</code>
              <p>{t("P0 is a two-sided neutral element for PLUS.")}</p>
            </article>
            <article>
              <span>STAR · n ≥ 2</span>
              <code dir="ltr">P0 ★ P1 = P0 ≠ P1 · P1 ★ P0 = P1</code>
              <p>
                {t(
                  "P0 is neutral only on the right and absorbing only on the left; it is not a two-sided identity or zero.",
                )}
              </p>
            </article>
            <article>
              <span>STAR · L1</span>
              <code dir="ltr">P0 ★ P0 = P0</code>
              <p>
                {t(
                  "Degenerate exception: on the one-element carrier, P0 is simultaneously a two-sided neutral element and a two-sided zero.",
                )}
              </p>
            </article>
          </div>
          <p className="math-p0-boundary">
            {t(
              "P0 is a local algebraic anchor. It is not global truth, moral good, customer acceptance, access authorization, or a final real-world verdict.",
            )}
          </p>
        </div>
      </section>

      <section id="typed-actions" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("FOUR TYPED ACTION FAMILIES")}
            title={t("LEFT and RIGHT say who occupies each Cayley-table axis.")}
            text={t(
              "The frozen PLUS and STAR laws do not change. The action family preserves the semantic roles source and active while mapping them to the raw left and right operands.",
            )}
          />
          <div className="action-family-grid">
            {orientations.map((orientation) => (
              <article key={orientation.name} id={orientation.name.toLowerCase().replace("_", "-")}>
                <div className="action-family-card__topline">
                  <span>{orientation.operation}</span>
                  <Braces size={19} aria-hidden="true" />
                </div>
                <h3 dir="ltr">{orientation.name}</h3>
                <code dir="ltr">{orientation.formula}</code>
                <strong dir="ltr">{orientation.order}</strong>
                <p>{t(orientation.text)}</p>
              </article>
            ))}
          </div>
          <p className="math-contract-note">
            {t(
              "Orientation changes operand placement, not the Cayley law. Equal targets never erase the distinct typed coordinates.",
            )}
          </p>
          <div className="orientation-witness">
            <div className="orientation-witness__intro">
              <span>{t("Direct L3 orientation witness")}</span>
              <strong dir="ltr">source = P0 · active = P2</strong>
              <p>
                {t(
                  "PLUS returns the same target because it is commutative, while STAR orientation changes the target. The typed identities remain distinct in both cases.",
                )}
              </p>
            </div>
            <div className="orientation-witness__records" dir="ltr">
              {orientationWitnesses.map((witness) => (
                <div key={witness.cellId}>
                  <code>{witness.cellId}</code>
                  <span aria-hidden="true">→</span>
                  <strong>{witness.result}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="cells-560" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("THE 560 ORIENTED TYPED COORDINATES")}
            title={t("From Cayley coordinates to a typed transition registry.")}
            text={t(
              "The number 560 follows from complete enumeration, not from training or statistical estimation. The derivation has four explicit steps.",
            )}
            aside={<span className="math-proof-chip">Σ 4n² = 560</span>}
          />

          <div className="cell-count-steps">
            {countSteps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{t(step.title)}</h3>
                <code dir="ltr">{step.formula}</code>
                <p>{t(step.text)}</p>
              </article>
            ))}
          </div>

          <div className="tower-math tower-math--expanded">
            <div className="tower-table-wrap" dir="ltr">
              <table className="tower-table tower-table--expanded">
                <caption className="sr-only">{t("L1–L7 derivation of 560 oriented typed coordinates")}</caption>
                <thead>
                  <tr>
                    <th scope="col">{t("Level")}</th>
                    <th scope="col">{t("Poles")}</th>
                    <th scope="col">{t("Ordered pairs")}</th>
                    <th scope="col">PLUS</th>
                    <th scope="col">STAR</th>
                    <th scope="col">{t("Two laws")}</th>
                    <th scope="col">{t("Four typed families")}</th>
                  </tr>
                </thead>
                <tbody>
                  {towerCounts.map((row) => (
                    <tr key={row.level}>
                      <th scope="row">L{row.level}</th>
                      <td>{row.poles}</td>
                      <td>{row.orderedPairs}</td>
                      <td>{row.plusCells}</td>
                      <td>{row.starCells}</td>
                      <td>{row.lawCells}</td>
                      <td>{row.typedCells}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th scope="row" colSpan={2}>
                      {t("L1–L7 total")}
                    </th>
                    <td>{rawCellsPerOperator}</td>
                    <td>{rawCellsPerOperator}</td>
                    <td>{rawCellsPerOperator}</td>
                    <td>{rawLawCellCount}</td>
                    <td>{canonicalTypedCellCount}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <aside className="tower-invariant-card">
              <span>{t("Formula / invariant")}</span>
              <code dir="ltr">Σ(n=1…7) n² = {rawCellsPerOperator}</code>
              <code dir="ltr">
                2 laws × {rawCellsPerOperator} = {rawLawCellCount}
              </code>
              <code dir="ltr">
                2 orientations × {rawLawCellCount} = {canonicalTypedCellCount}
              </code>
              <p>
                {t(
                  "LEFT and RIGHT duplicate typed identity, not the numerical Cayley law. That distinction is why 280 raw law coordinates become 560 oriented typed transition coordinates.",
                )}
              </p>
            </aside>
          </div>

          <div className="cell-semantics-grid">
            <article>
              <span>{t("What one cell expresses")}</span>
              <p>
                {t(
                  "One cell states: at one level, under one typed family, this source and active pole deterministically produce this target. Its full coordinate is level:family:source:active.",
                )}
              </p>
            </article>
            <article>
              <span>{t("What it does not express")}</span>
              <p>
                {t(
                  "A cell is not a concept, word meaning, neuron, learned parameter, skill, truth value, or intelligence unit. Semantics and authority require separate evidence layers.",
                )}
              </p>
            </article>
          </div>

          <div className="typed-cell-lab">
            <div className="typed-cell-lab__heading">
              <span>{t("INTERACTIVE CELL ANATOMY")}</span>
              <h3>{t("Construct any one of the 560 coordinates and replay its table lookup.")}</h3>
              <p>
                {t(
                  "Change the level, family, source, and active pole. Every displayed field is recomputed from the frozen formulas in this browser.",
                )}
              </p>
            </div>
            <TypedCellExplorer />
          </div>

          <div className="tower-scope-notes">
            <p>
              {t(
                "A higher level is not more intelligent. Pole labels are local to a frame and have no fixed global meaning.",
              )}
            </p>
            <p>
              {t(
                "A binary Cayley operation on Q_n does not make the carrier L2. Every level L1–L7 has binary PLUS and STAR laws.",
              )}
            </p>
            <p>
              {t(
                "The mathematical catalogue counts L1–L7. In the current operational whole-tower scope, L1 is CONTROL_ONLY and L2–L7 are active.",
              )}
            </p>
          </div>
        </div>
      </section>

      <section id="transformations" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("STANDARD TRANSLATIONS AND FINITE RANKS")}
            title={t("A fixed active pole gives a column for LEFT and a row for RIGHT.")}
            text={t(
              "Fixing the family and active pole turns source-to-target records into a unary map. ABI LEFT/RIGHT names encode operand placement; they are not the standard names of left and right algebraic translations.",
            )}
          />
          <div className="transformation-grid">
            <article className="transformation-card">
              <span>{t("Object hierarchy")}</span>
              <div className="transformation-chain" dir="ltr">
                <code>(n, f, s, a, F_f(s,a))</code>
                <b aria-hidden="true">→</b>
                <code>T_f,a : Q_n → Q_n</code>
                <b aria-hidden="true">→</b>
                <code>T_r ∘ … ∘ T_1</code>
                <b aria-hidden="true">→</b>
                <code>BRACKETED_ROUTE</code>
              </div>
              <p>{t("The full 560-coordinate catalogue is not executed in every episode.")}</p>
            </article>
            <article className="transformation-card transformation-card--rank">
              <span>{t("Rank for fixed active pole a")}</span>
              <dl dir="ltr">
                <div>
                  <dt>PLUS_LEFT / PLUS_RIGHT</dt>
                  <dd>rank = n</dd>
                </div>
                <div>
                  <dt>STAR_LEFT</dt>
                  <dd>a=0 → n · a≠0 → n−1</dd>
                </div>
                <div>
                  <dt>STAR_RIGHT</dt>
                  <dd>a=0 → 1 · a≠0 → n</dd>
                </div>
              </dl>
              <p>{t("Rank means the number of image states of a finite map; it is not a learned matrix rank.")}</p>
            </article>
          </div>
          <div className="translation-ledger">
            <article>
              <span dir="ltr">STAR_LEFT(s,a)</span>
              <code dir="ltr">s ★ a = R_a(s)</code>
              <strong>{t("fixed column · standard right translation")}</strong>
              <p>{t("For a=0 this is the identity map; for a≠0 its image is Q_n without P_a.")}</p>
            </article>
            <article>
              <span dir="ltr">STAR_RIGHT(s,a)</span>
              <code dir="ltr">a ★ s = L_a(s)</code>
              <strong>{t("fixed row · standard left translation")}</strong>
              <p>{t("For a=0 this is the constant P0 map; for a≠0 it is a cyclic bijection.")}</p>
            </article>
          </div>
          <div className="symmetry-card">
            <div>
              <span>{t("A separate academic symmetry chapter")}</span>
              <code dir="ltr">μ_u(P_i) = P_((u·i) mod n), gcd(u,n)=1</code>
              <code dir="ltr">μ_u(F_f(s,a)) = F_f(μ_u(s), μ_u(a))</code>
            </div>
            <div className="symmetry-card__counts">
              <div>
                <strong>{sameLevelAutomorphismCount}</strong>
                <span>{t("same-level automorphisms across L1–L7")}</span>
              </div>
              <div>
                <strong>{structuralOrbitCount}</strong>
                <span>{t("fibrewise structural orbits of the 560 oriented typed coordinates")}</span>
              </div>
            </div>
            <p>
              {t(
                "These are sums of local quantities, not the order of one global group or the orbit count of one global action. The dedicated chapter defines automorphisms, affine actions, orbits, stabilizers, and Burnside's lemma.",
              )}
            </p>
            <a className="button button--primary" href={href("/symmetry")}>
              {t("Open the symmetry chapter")} <ArrowRight className="directional-icon" size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section id="composition" className="section section--navy math-anchor-section">
        <div className="shell">
          <SectionHeading
            light
            eyebrow={t("BRACKETS ARE PART OF THE PROGRAM")}
            title={t("Binary cells compose into explicit syntax trees.")}
            text={t(
              "A k-operand expression uses k−1 binary cells. For STAR, changing the tree can change the result, so a list of operands is not a complete program.",
            )}
          />
          <div className="composition-grid">
            <article>
              <span>{t("Program size")}</span>
              <code dir="ltr">k operands → k − 1 binary apply nodes</code>
              <p>
                {t(
                  "Every internal node records its level, family, source, active pole, target, and parent-child position.",
                )}
              </p>
            </article>
            <article>
              <span>{t("Possible bracketings")}</span>
              <code dir="ltr">C_(k−1) = (1/k) · binom(2k−2, k−1)</code>
              <p>{t("The Catalan count is 1, 2, 5, and 14 for arities 2, 3, 4, and 5 respectively.")}</p>
            </article>
          </div>
          <div className="associator-witness">
            <div>
              <span>{t("Exact nonassociativity witness at L3")}</span>
              <strong>{t("Same inputs, different brackets, different result.")}</strong>
            </div>
            <div className="associator-witness__equations" dir="ltr">
              <code>(P1 ★ P0) ★ P1 = P2</code>
              <code>P1 ★ (P0 ★ P1) = P1</code>
            </div>
            <p>{t("The two bracketings return different poles, so brackets are part of the program.")}</p>
          </div>
          <div className="iteration-grid">
            <article>
              <span>{t("Left-associated iteration at L6, a=P2")}</span>
              <code dir="ltr">{l6LeftIteration.map((value) => `P${value}`).join(" → ")} → …</code>
              <p>{t("Once a prefix sum reaches P0, every later left-associated STAR product remains P0.")}</p>
            </article>
            <article>
              <span>{t("Right-associated iteration at L6, a=P2")}</span>
              <code dir="ltr">{l6RightIteration.map((value) => `P${value}`).join(" → ")} → …</code>
              <p>
                {t(
                  "Right association repeatedly applies a nonzero left translation, so the additive cycle continues through P0.",
                )}
              </p>
            </article>
            <article>
              <span>{t("Zero-prefix theorem · L5 witness")}</span>
              <code dir="ltr">(P2 ★ P3) ★ P4 = P0 ★ P4 = P0</code>
              <p>
                {t(
                  "The ordinary PLUS sum is P4, but the first zero prefix is captured by the left-associated STAR word.",
                )}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="star-structure" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("STAR REDUCT: STABILITY AND CONGRUENCES")}
            title={t("One-sided closure is asymmetric; quotient structure is rigid.")}
            text={t(
              "These are statements about the STAR reduct S_n. They use standard finite-algebra terminology and do not import ring ideals or ring multiplication.",
            )}
          />
          <div className="star-structure-grid">
            <article>
              <span>{t("Right-stable subsets · n≥2")}</span>
              <code dir="ltr">S ★ Q_n ⊆ S</code>
              <strong dir="ltr">∅ · {`{P0}`} · Q_n</strong>
              <p>
                {t(
                  "The proper nonempty example is {P0}; it is closed when elements of the subset occupy the left operand.",
                )}
              </p>
            </article>
            <article>
              <span>{t("Left-stable and two-sided · n≥2")}</span>
              <code dir="ltr">Q_n ★ S ⊆ S</code>
              <strong dir="ltr">∅ · Q_n</strong>
              <p>{t("The subset {P0} fails because P1 ★ P0 = P1. There is no proper nonempty left-stable subset.")}</p>
            </article>
            <article>
              <span>{t("Congruences · n≥2")}</span>
              <code dir="ltr">Con(S_n) = {`{Δ_(Q_n), Q_n×Q_n}`}</code>
              <p>
                {t(
                  "If P0 is identified with one nonzero element, compatibility forces every element into one class. If P0 stays alone, two distinct nonzero elements cannot be identified.",
                )}
              </p>
            </article>
            <article>
              <span>{t("The L1 exception")}</span>
              <code dir="ltr">Δ_(Q_1) = Q_1 × Q_1</code>
              <p>
                {t(
                  "On a one-element carrier the identity and universal congruences coincide, and every subset classification degenerates accordingly.",
                )}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="morphisms" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("CROSS-LEVEL MORPHISMS")}
            title={t("A shared label is not a proof of lawful transport.")}
            text={t(
              "States from different carriers cannot enter the same Cayley cell directly. A cross-level map must preserve the declared typed operations on its stated domain and disclose every lost observable.",
            )}
            aside={<GitBranch size={30} aria-hidden="true" />}
          />

          <div className="morphism-contract">
            <article className="morphism-contract__formula">
              <span>{t("Formula / preservation contract")}</span>
              <p>
                {t("For a declared map φ: Q_n → Q_m and every tested family F, the following square must commute:")}
              </p>
              <code dir="ltr">φ(F_n(P_s, P_a)) = F_m(φ(P_s), φ(P_a))</code>
              <ul>
                <li dir="ltr">φ(P0) = P0</li>
                <li dir="ltr">F ∈ {`{PLUS_LEFT, PLUS_RIGHT, STAR_LEFT, STAR_RIGHT}`}</li>
                <li>{t("Bracket-sensitive observables must remain distinguishable on the declared domain.")}</li>
              </ul>
            </article>
            <article className="morphism-contract__receipt">
              <span>{t("LevelAlignmentReceipt / required fields")}</span>
              <dl>
                <div>
                  <dt dir="ltr">source_level / target_level</dt>
                  <dd>{t("The two finite carriers being related.")}</dd>
                </div>
                <div>
                  <dt dir="ltr">explicit mapping</dt>
                  <dd>{t("The image of every state used by the composition.")}</dd>
                </div>
                <div>
                  <dt dir="ltr">preservation checks</dt>
                  <dd>{t("P0, all four typed families, orientation, and bracketing observables.")}</dd>
                </div>
                <div>
                  <dt dir="ltr">lost observables / counterexamples</dt>
                  <dd>{t("Anything the map merges, changes, or fails to preserve.")}</dd>
                </div>
              </dl>
            </article>
          </div>

          <p className="scope-callout">
            <strong>{t("Compatibility boundary:")}</strong>{" "}
            {t(
              "The morphism receipts below belong to the compatibility and audit mathematics. The legacy morphism_v1 module is excluded from the current V4 runtime wheel; these examples are not current API capabilities.",
            )}
          </p>

          <div className="morphism-witness morphism-witness--pass">
            <div className="morphism-witness__heading">
              <span>PASS · {t("Canonical nonzero embedding")}</span>
              <strong dir="ltr">h: Q_2 → Q_4, h(P_i) = P_((2i) mod 4)</strong>
            </div>
            <div className="morphism-witness__equations" dir="ltr">
              <code>h(P0) = P0 · h(P1) = P2</code>
              <code>h(STAR_RIGHT_2(P0,P1)) = h(P1) = P2</code>
              <code>STAR_RIGHT_4(h(P0),h(P1)) = STAR_RIGHT_4(P0,P2) = P2</code>
            </div>
            <dl>
              <div>
                <dt>check</dt>
                <dd>{t("All four families on all four ordered source-active pairs.")}</dd>
              </div>
              <div>
                <dt>mapping</dt>
                <dd dir="ltr">P0→P0 · P1→P2</dd>
              </div>
              <div>
                <dt>receipt_id</dt>
                <dd dir="ltr">fc7946d5a85ec30ba495123bec2ba04288caca0c27b44fd0aace2ad8a5619f95</dd>
              </div>
              <div>
                <dt>{t("canonical nontrivial scaled embeddings")}</dt>
                <dd dir="ltr">
                  {activeNontrivialTransfers
                    .map(({ sourceLevel, targetLevel }) => `L${sourceLevel}→L${targetLevel}`)
                    .join(" · ")}
                </dd>
              </div>
              <div>
                <dt>scope</dt>
                <dd>{t("Frozen operator laws; contextual composition still needs its alignment receipt.")}</dd>
              </div>
            </dl>
          </div>

          <div className="morphism-witness">
            <div className="morphism-witness__heading">
              <span>FAIL · {t("Same-index candidate injection")}</span>
              <strong dir="ltr">φ: Q_3 → Q_5, φ(P_i) = P_i</strong>
            </div>
            <div className="morphism-witness__equations" dir="ltr">
              <code>φ(PLUS_3(P1, P2)) = φ(P0) = P0</code>
              <code>PLUS_5(φ(P1), φ(P2)) = PLUS_5(P1, P2) = P3</code>
              <strong>expected P0 · got P3 · P0 ≠ P3</strong>
            </div>
            <dl>
              <div>
                <dt>{t("legacy compatibility code")}</dt>
                <dd dir="ltr">REJECT_R5B5F_NO_LAWFUL_LEVEL_TRANSFER</dd>
              </div>
              <div>
                <dt>expected / got</dt>
                <dd dir="ltr">target % source = 0 · 5 % 3 = 2</dd>
              </div>
              <div>
                <dt>where</dt>
                <dd dir="ltr">transfer_level_v1 · PLUS counterexample</dd>
              </div>
              <div>
                <dt>boundary</dt>
                <dd dir="ltr">BOUNDARY_LEVEL_ALIGNMENT_NOT_PROVEN</dd>
              </div>
              <div>
                <dt>{t("minimal fix")}</dt>
                <dd>
                  {t(
                    "Use a lawful explicit mapping and pass every preservation check, or regenerate the operands at a common level.",
                  )}
                </dd>
              </div>
            </dl>
          </div>

          <div className="morphism-witness morphism-witness--neutral">
            <div className="morphism-witness__heading">
              <span>PASS · {t("Zero homomorphism exists between every pair of levels")}</span>
              <strong dir="ltr">z_(n,m): A_n → A_m, z_(n,m)(P_i) = P0</strong>
            </div>
            <div className="morphism-witness__equations" dir="ltr">
              <code>{`Hom(A_n,A_m)={0}∪{h_u | n|m, u∈U(n)}`}</code>
              <code>z(x ⊕ y) = P0 = P0 ⊕ P0</code>
              <code>z(x ★ y) = P0 = P0 ★ P0</code>
            </div>
            <p>
              {t(
                "Therefore A3→A5 has a homomorphism, but no nonzero homomorphism and no embedding. For n≥2, a nonzero homomorphism A_n→A_m exists exactly when n divides m; every such map is injective. At n=1 the unique zero map is itself an embedding.",
              )}
            </p>
          </div>

          <p className="math-contract-note">
            {t(
              "A homomorphism is a mathematical preservation condition; an embedding is an injective homomorphism; a candidate injection is only a set map until preservation is proved. LevelAlignmentReceipt separately records whether an operational transfer is authorized.",
            )}
          </p>
          <p className="math-contract-note">
            {t(
              "Across ordered pairs L1–L7 there are 70 full-algebra homomorphisms, including 28 embeddings. The compatibility replay lists 16 divisible level pairs and chooses one canonical embedding on each; it does not enumerate every homomorphism.",
            )}
          </p>
        </div>
      </section>

      <section id="mathematical-boundary" className="section section--dark math-boundary-section math-anchor-section">
        <div className="shell">
          <SectionHeading
            light
            eyebrow={t("MATHEMATICAL BOUNDARY")}
            title={t("What these tables establish—and what they do not.")}
          />
          <div className="math-boundary-grid">
            <article className="math-boundary-card math-boundary-card--established">
              <div className="math-boundary-card__heading">
                <Check size={20} aria-hidden="true" />
                <h3>{t("Established")}</h3>
              </div>
              <ul>
                <li>{t("Total deterministic maps Q_n × Q_n → Q_n for L1–L7.")}</li>
                <li>{t("Closure, operator formulas, typed operand orientation, and exact table count.")}</li>
                <li>{t("A finite transition alphabet for the current formal execution layer.")}</li>
              </ul>
            </article>
            <article className="math-boundary-card math-boundary-card--open">
              <div className="math-boundary-card__heading">
                <ShieldAlert size={20} aria-hidden="true" />
                <h3>{t("Not established")}</h3>
              </div>
              <ul>
                <li>{t("Tables alone do not provide world semantics.")}</li>
                <li>
                  {t("Persistent policy learning:")} <bdi dir="ltr">NOT_STARTED</bdi>. {t("Trained Atlas:")}{" "}
                  <bdi dir="ltr">NOT_PRESENT</bdi>.
                </li>
                <li>
                  {t("External operational gain:")} <bdi dir="ltr">NOT_PROVEN</bdi>. {t("General AI:")}{" "}
                  <bdi dir="ltr">NOT_CLAIMED</bdi>.
                </li>
                <li>{t("This browser explorer is not a runtime selfcheck or release replay.")}</li>
              </ul>
            </article>
          </div>
          <div className="math-evidence-link">
            <div>
              <span>{t("Release evidence")}</span>
              <strong>{t("Review the status, fingerprint, test receipts, and claim boundaries.")}</strong>
            </div>
            <a className="button button--light" href={href("/evidence")}>
              {t("View the evidence layer")} <ArrowRight className="directional-icon" size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
