import { ArrowLeft, ArrowRight, Braces, Check, ShieldAlert } from "lucide-react";
import { CayleyExplorer } from "../components/math/CayleyExplorer";
import { PageShell } from "../components/layout/PageShell";
import { SectionHeading } from "../components/ui/SectionHeading";
import { canonicalTypedCellCount, rawCellsPerOperator, towerCounts } from "../content/mathematics";
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
  { name: "PLUS_LEFT", operation: "PLUS", order: "operands(source, active)" },
  { name: "PLUS_RIGHT", operation: "PLUS", order: "operands(active, source)" },
  { name: "STAR_LEFT", operation: "STAR", order: "operands(source, active)" },
  { name: "STAR_RIGHT", operation: "STAR", order: "operands(active, source)" },
] as const;

const orientationWitnesses = [
  { cellId: "L3:PLUS_LEFT:P0:P2", result: "P2" },
  { cellId: "L3:PLUS_RIGHT:P0:P2", result: "P2" },
  { cellId: "L3:STAR_LEFT:P0:P2", result: "P0" },
  { cellId: "L3:STAR_RIGHT:P0:P2", result: "P2" },
] as const;

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

      <section className="section section--white">
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

      <section className="section section--navy">
        <div className="shell">
          <SectionHeading
            light
            eyebrow={t("TWO FROZEN OPERATORS")}
            title={t("PLUS and STAR share a carrier, but not an algebraic structure.")}
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
              <p className="eyebrow">{t("STAR / DIRECTED MAGMA")}</p>
              <h3>STAR</h3>
              <code dir="ltr">P0 ★ P_j = P0; P_i ★ P_j = P_((i + j) mod n) if i ≠ 0</code>
              <p>
                {t(
                  "STAR is closed and has right identity P0. Its P0 row is a left reset; for n ≥ 2 it is nonassociative and is not a group.",
                )}
              </p>
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
          <p className="math-p0-boundary">
            {t(
              "P0 is a local algebraic anchor. It is not global truth, moral good, customer acceptance, access authorization, or a final real-world verdict.",
            )}
          </p>
        </div>
      </section>

      <section className="section section--paper">
        <div className="shell">
          <SectionHeading
            eyebrow={t("TYPED EXECUTION")}
            title={t("The four action families preserve operand order explicitly.")}
            text={t(
              "The binary table is not redefined for LEFT or RIGHT. The family determines how source and active pole are placed into the same frozen operator.",
            )}
          />
          <div className="orientation-grid">
            {orientations.map((orientation) => (
              <article key={orientation.name}>
                <div>
                  <span>{orientation.operation}</span>
                  <Braces size={19} aria-hidden="true" />
                </div>
                <h3 dir="ltr">{orientation.name}</h3>
                <code dir="ltr">{orientation.order}</code>
                <p>{t(orientation.name.endsWith("LEFT") ? "source then active" : "active then source")}</p>
              </article>
            ))}
          </div>
          <p className="math-contract-note">{t("Orientation changes operand placement, not the Cayley law.")}</p>
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

      <section className="section section--white">
        <div className="shell">
          <SectionHeading
            eyebrow={t("TOWER INVARIANT")}
            title={t("Why the current registry contains exactly 560 typed cells.")}
            text={t(
              "Each level L_n has n² cells per operator. Two operators and two orientations produce 4n² typed cells.",
            )}
          />
          <div className="tower-math">
            <div className="tower-table-wrap">
              <table className="tower-table">
                <caption className="sr-only">{t("L1–L7 formal cell count")}</caption>
                <thead>
                  <tr>
                    <th scope="col">{t("Level")}</th>
                    <th scope="col">{t("Poles")}</th>
                    <th scope="col">{t("Cells per operator")}</th>
                    <th scope="col">{t("Typed cells")}</th>
                  </tr>
                </thead>
                <tbody>
                  {towerCounts.map((row) => (
                    <tr key={row.level}>
                      <th scope="row">L{row.level}</th>
                      <td>{row.poles}</td>
                      <td>{row.cellsPerOperator}</td>
                      <td>{row.typedCells}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th scope="row" colSpan={2}>
                      {t("Total")}
                    </th>
                    <td>{rawCellsPerOperator}</td>
                    <td>{canonicalTypedCellCount}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <aside className="tower-invariant-card">
              <span>{t("Exact invariant")}</span>
              <code dir="ltr">Σ(n=1…7) n² = {rawCellsPerOperator}</code>
              <code dir="ltr">
                2 × 2 × {rawCellsPerOperator} = {canonicalTypedCellCount}
              </code>
              <p>
                {t(
                  "This count is a formal registry size, not a count of semantic concepts and not an intelligence metric.",
                )}
              </p>
            </aside>
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
          </div>
        </div>
      </section>

      <section className="section section--dark math-boundary-section">
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
