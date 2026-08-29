import { ArrowLeft, ArrowRight, Grid3x3, Repeat2, ShieldAlert } from "lucide-react";
import {
  AutomorphismReplayFigure,
  BurnsideScriptFigure,
  OrbitCompressionFigure,
  OrbitWalkFigure,
  UnitLedgerFigure,
} from "../components/math/AutomorphismFigures";
import { CayleyTableCard } from "../components/math/CayleyTableCard";
import { PageShell } from "../components/layout/PageShell";
import { TermChips } from "../components/theory/TermExplainer";
import { PageContents } from "../components/ui/PageContents";
import { SectionHeading } from "../components/ui/SectionHeading";
import {
  automorphismBoundary,
  automorphismClose,
  automorphismEyebrow,
  automorphismHeadline,
  automorphismLead,
  burnsideBody,
  burnsideEyebrow,
  burnsideHeadline,
  burnsideReading,
  compressionBody,
  compressionEyebrow,
  compressionHeadline,
  compressionReading,
  definitionBody,
  definitionEyebrow,
  definitionHeadline,
  ledgerBody,
  ledgerEyebrow,
  ledgerHeadline,
  ledgerReading,
  renamingCases,
  symmetryUses,
  walkBody,
  walkEyebrow,
  walkHeadline,
  walkReading,
} from "../content/automorphisms";
import {
  cayleyEyebrow,
  cayleyHeadline,
  cayleyLead,
  cayleyLeadBoundary,
  cayleyTableEntries,
  readingBody,
  readingEyebrow,
  readingHeadline,
  readingSteps,
  richnessClaims,
  richnessClose,
  richnessEyebrow,
  richnessHeadline,
  richnessLead,
} from "../content/cayleyTables";
import { declaredTableCount, galoLevels } from "../content/mathematics";
import { useI18n } from "../i18n/I18nContext";

const contents = [
  { href: "#reading", label: "How to read one" },
  { href: "#plus", label: "The seven PLUS tables" },
  { href: "#star", label: "The seven STAR tables" },
  { href: "#richness", label: "Why this is rich" },
  { href: "#automorphisms", label: "Automorphisms" },
] as const;

/**
 * All fourteen tables on one page, each with the lookup that produces one of
 * its cells.
 *
 * The mathematics page derives counts from the tables and offers an explorer
 * for one at a time. Neither answers the question a first-time reader arrives
 * with — where does rich logic come from, if the pieces are addition tables for
 * sets of at most seven things — so this page exists to answer exactly that,
 * with every table printed and every claim checkable against what is printed.
 */
export function CayleyTablesPage() {
  const { href, t } = useI18n();

  const plusTables = cayleyTableEntries.filter((entry) => entry.operation === "PLUS");
  const starTables = cayleyTableEntries.filter((entry) => entry.operation === "STAR");

  return (
    <PageShell>
      <section className="page-hero page-hero--cayley">
        <div className="shell">
          <a className="back-link" href={href("/math")}>
            <ArrowLeft className="directional-icon" size={16} aria-hidden="true" /> {t("Mathematics")}
          </a>
          <p className="eyebrow eyebrow--cyan">{t(cayleyEyebrow)}</p>
          <h1>{t(cayleyHeadline)}</h1>
          <p>{t(cayleyLead)}</p>

          <div className="cayley-hero__counts" aria-label={t("What is printed on this page")}>
            <span dir="ltr">{declaredTableCount}</span>
            <strong>{t("tables printed in full")}</strong>
            <span dir="ltr">{galoLevels.length}</span>
            <strong>{t("levels, from one pole to seven")}</strong>
            <span dir="ltr">2</span>
            <strong>{t("laws, frozen before anything ran")}</strong>
          </div>

          <p className="cayley-hero__boundary">
            <ShieldAlert size={16} aria-hidden="true" /> {t(cayleyLeadBoundary)}
          </p>
        </div>
      </section>

      <PageContents label="On this page" ariaLabel="Cayley tables navigation" items={contents} />

      <section id="reading" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t(readingEyebrow)}
            title={t(readingHeadline)}
            text={t(readingBody)}
            aside={<Grid3x3 size={30} aria-hidden="true" />}
          />
          <div className="cayley-reading">
            {readingSteps.map((step) => (
              <article key={step.number}>
                <span dir="ltr">{step.number}</span>
                <h3>{t(step.title)}</h3>
                <p>{t(step.text)}</p>
              </article>
            ))}
          </div>
          <TermChips terms={["Cayley table", "PLUS", "STAR", "Carrier"]} />
        </div>
      </section>

      <section id="plus" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("THE FIRST TOWER")}
            title={t("Seven PLUS tables, and one rule between them.")}
            text={t(
              "Every one of these is addition modulo the size of its own carrier. There is no branch and nothing to decide: the trace beside each table is three lines long at every level, and the only thing that changes from one to the next is where the wrap happens. Read them for the shape — each row is the row above it shifted by one, which is what a cyclic group looks like when you write it out in full.",
            )}
          />
          <div className="cayley-grid">
            {plusTables.map((entry) => (
              <CayleyTableCard key={`${entry.operation}-${entry.level}`} entry={entry} />
            ))}
          </div>
        </div>
      </section>

      <section id="star" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("THE SECOND TOWER")}
            title={t("Seven STAR tables, and one row that changes everything.")}
            text={t(
              "These agree with the tables above everywhere except the first row. Under STAR, P0 absorbs from the left: whatever the column holds, the answer is P0 and the column is never consulted. That single shaded row is where the second tower earns its keep — it is what lets a step end a line of reasoning, what makes a fixed operand collapse the carrier instead of relabelling it, and what makes the order of application matter. Each table carries two traces, because there are two rules to see.",
            )}
          />
          <div className="cayley-grid">
            {starTables.map((entry) => (
              <CayleyTableCard key={`${entry.operation}-${entry.level}`} entry={entry} />
            ))}
          </div>
        </div>
      </section>

      <section id="automorphisms" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t(automorphismEyebrow)}
            title={t(automorphismHeadline)}
            text={t(automorphismLead)}
            aside={<Repeat2 size={30} aria-hidden="true" />}
          />

          <div className="auto-block">
            <p className="eyebrow">{t(definitionEyebrow)}</p>
            <h3>{t(definitionHeadline)}</h3>
            <p className="auto-block__lead">{t(definitionBody)}</p>
            <AutomorphismReplayFigure cases={renamingCases} />
          </div>

          <div className="auto-block">
            <p className="eyebrow">{t(ledgerEyebrow)}</p>
            <h3>{t(ledgerHeadline)}</h3>
            <p className="auto-block__lead">{t(ledgerBody)}</p>
            <UnitLedgerFigure />
            <p className="auto-block__reading">{t(ledgerReading)}</p>
          </div>

          <div className="auto-block is-payoff">
            <p className="eyebrow">{t(compressionEyebrow)}</p>
            <h3>{t(compressionHeadline)}</h3>
            <p className="auto-block__lead">{t(compressionBody)}</p>
            <OrbitCompressionFigure />
            <p className="auto-block__reading">{t(compressionReading)}</p>
          </div>

          <div className="auto-block">
            <p className="eyebrow">{t(burnsideEyebrow)}</p>
            <h3>{t(burnsideHeadline)}</h3>
            <p className="auto-block__lead">{t(burnsideBody)}</p>
            <BurnsideScriptFigure />
            <p className="auto-block__reading">{t(burnsideReading)}</p>
          </div>

          <div className="auto-block">
            <p className="eyebrow">{t(walkEyebrow)}</p>
            <h3>{t(walkHeadline)}</h3>
            <p className="auto-block__lead">{t(walkBody)}</p>
            <OrbitWalkFigure />
            <p className="auto-block__reading">{t(walkReading)}</p>
          </div>

          <div className="auto-uses">
            {symmetryUses.map((use) => (
              <article key={use.number}>
                <span dir="ltr">{use.number}</span>
                <h3>{t(use.claim)}</h3>
                <p>{t(use.mechanism)}</p>
                <p className="auto-uses__check">
                  <b>{t("Check it yourself")}</b> {t(use.check)}
                </p>
              </article>
            ))}
          </div>

          <p className="auto-close">{t(automorphismClose)}</p>

          <p className="scope-callout">
            <ShieldAlert size={16} aria-hidden="true" /> <strong>{t("Shape, not meaning:")}</strong>{" "}
            {t(automorphismBoundary)}
          </p>
        </div>
      </section>

      <section id="richness" className="section section--navy math-anchor-section">
        <div className="shell">
          <SectionHeading light eyebrow={t(richnessEyebrow)} title={t(richnessHeadline)} text={t(richnessLead)} />
          <div className="cayley-richness">
            {richnessClaims.map((claim) => (
              <article key={claim.number}>
                <span dir="ltr">{claim.number}</span>
                <h3>{t(claim.claim)}</h3>
                <p>{t(claim.mechanism)}</p>
                <p className="cayley-richness__check">
                  <b>{t("Check it yourself")}</b> {t(claim.check)}
                </p>
              </article>
            ))}
          </div>
          <p className="cayley-richness__close">{t(richnessClose)}</p>
          <div className="cayley-onward">
            <a className="text-link" href={href("/math#cells-560")}>
              {t("How fourteen tables become 560 typed coordinates")}{" "}
              <ArrowRight className="directional-icon" size={16} aria-hidden="true" />
            </a>
            <a className="text-link" href={href("/symmetry")}>
              {t("The symmetries these tables carry")}{" "}
              <ArrowRight className="directional-icon" size={16} aria-hidden="true" />
            </a>
            <a className="text-link" href={href("/theory#verdict-law")}>
              {t("What a run has to do before an answer may be published")}{" "}
              <ArrowRight className="directional-icon" size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
