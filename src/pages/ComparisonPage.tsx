import { ArrowLeft, ArrowRight, CircleAlert, CircleCheck, Sparkles, ShieldCheck } from "lucide-react";
import { AnswerPathFigure } from "../components/diagrams/AnswerPathFigure";
import { ComplementFigure } from "../components/diagrams/ComplementFigure";
import { TwoMachinesFigure } from "../components/diagrams/TwoMachinesFigure";
import { PageShell } from "../components/layout/PageShell";
import { TermChips } from "../components/theory/TermExplainer";
import { SectionHeading } from "../components/ui/SectionHeading";
import { comparisonMisreadings, comparisonRows, galoStrengths, modelStrengths } from "../content/llmComparison";
import { useI18n } from "../i18n/I18nContext";

const contents = [
  { href: "#not-the-same-object", label: "Not the same kind of object" },
  { href: "#anatomy", label: "Two anatomies, side by side" },
  { href: "#dimensions", label: "Ten dimensions compared" },
  { href: "#strengths", label: "What each one is good at" },
  { href: "#together", label: "How they could work together" },
  { href: "#misreadings", label: "Five misreadings" },
] as const;

export function ComparisonPage() {
  const { href, t } = useI18n();

  return (
    <PageShell>
      <section className="page-hero page-hero--comparison">
        <div className="shell">
          <a className="back-link" href={href("/")}>
            <ArrowLeft className="directional-icon" size={16} aria-hidden="true" /> {t("Home")}
          </a>
          <p className="eyebrow eyebrow--cyan">{t("GALO AND LANGUAGE MODELS")}</p>
          <h1>{t("GALO is not a language model, and not a competitor to one.")}</h1>
          <p>
            {t(
              "They are different classes of object that give different kinds of guarantee. This page sets them side by side on mechanism and evidence — never on quality of output, because no comparative evaluation has been run.",
            )}
          </p>
          <div className="comparison-hero__pair">
            <div>
              <Sparkles size={20} aria-hidden="true" />
              <strong>{t("A language model")}</strong>
              <span>{t("Open input, learned behaviour, enormous breadth, checked by sampling.")}</span>
            </div>
            <div className="is-galo">
              <ShieldCheck size={20} aria-hidden="true" />
              <strong>{t("The GALO engine today")}</strong>
              <span>{t("Declared input, written-out behaviour, very narrow scope, checked by enumeration.")}</span>
            </div>
          </div>
        </div>
      </section>

      <nav className="math-contents" aria-label={t("Comparison chapter navigation")}>
        <div className="shell">
          <span>{t("On this page")}</span>
          <div>
            {contents.map((item, index) => (
              <a key={item.href} href={item.href}>
                <bdi dir="ltr">{String(index + 1).padStart(2, "0")}</bdi> {t(item.label)}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="not-the-same-object" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("START FROM THE CATEGORY, NOT THE SCORE")}
            title={t("A thermometer and a thermostat both concern temperature. They are still different machines.")}
            text={t(
              "Asking which of the two is better is like asking whether a measuring instrument beats a control loop. The useful question is what each one can be held to: what it accepts, what it produces, and what it lets an outsider verify afterwards.",
            )}
          />
          <div className="comparison-frame">
            <article>
              <span>{t("What a language model is for")}</span>
              <p>
                {t(
                  "Turning open-ended input into a useful continuation. It is the most general-purpose software artefact anyone has built, and nothing in the GALO kernel competes with that.",
                )}
              </p>
            </article>
            <article>
              <span>{t("What the GALO kernel is for")}</span>
              <p>
                {t(
                  "Making a small part of a decision process exhaustively checkable and exactly replayable. It buys that by giving up breadth almost entirely.",
                )}
              </p>
            </article>
            <article className="comparison-frame__boundary">
              <span>{t("What is deliberately not on this page")}</span>
              <p>
                {t(
                  "Any statement that one is faster, cheaper, safer, or more accurate than the other. Those are empirical claims and none of them has been measured here.",
                )}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="anatomy" className="section section--navy math-anchor-section">
        <div className="shell">
          <SectionHeading
            light
            eyebrow={t("TWO ANATOMIES")}
            title={t("The difference is visible one step in.")}
            text={t(
              "Take a single step through each system and write down what object is sitting at each stage. On one side the objects are quantities that were fitted; on the other they are positions that were declared.",
            )}
          />
          <TwoMachinesFigure />
        </div>
      </section>

      <section id="dimensions" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("TEN DIMENSIONS")}
            title={t("Each row is a property, and the last row is the one that keeps the rest honest.")}
            text={t(
              "Read the final row first. A language model is vastly broader than the current GALO engine, and every other row should be read with that in mind.",
            )}
          />
          <div
            className="comparison-table-wrap"
            role="region"
            aria-label={t("Property-by-property comparison")}
            tabIndex={0}
          >
            <table className="comparison-table">
              <caption>{t("Property-by-property, with no performance claim in any cell")}</caption>
              <thead>
                <tr>
                  <th scope="col">{t("Dimension")}</th>
                  <th scope="col">{t("A language model")}</th>
                  <th scope="col">{t("The GALO engine today")}</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.dimension}>
                    <th scope="row">{t(row.dimension)}</th>
                    <td>{t(row.model)}</td>
                    <td className="is-galo">{t(row.galo)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <AnswerPathFigure />
        </div>
      </section>

      <section id="strengths" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("WHAT EACH ONE IS GOOD AT")}
            title={t("Both lists are short, and both are honest.")}
            text={t(
              "The left column lists what the GALO kernel cannot do at all. The right column lists properties rather than results: they say what the layer can be asked for, and say nothing about how well it does any task.",
            )}
          />
          <div className="comparison-strengths">
            <div className="comparison-strengths__column">
              <div className="comparison-strengths__head">
                <Sparkles size={20} aria-hidden="true" />
                <h3>{t("A language model can, and GALO cannot")}</h3>
              </div>
              {modelStrengths.map((entry) => (
                <article key={entry.title}>
                  <h4>{t(entry.title)}</h4>
                  <p>{t(entry.text)}</p>
                </article>
              ))}
            </div>
            <div className="comparison-strengths__column is-galo">
              <div className="comparison-strengths__head">
                <ShieldCheck size={20} aria-hidden="true" />
                <h3>{t("The verified layer can offer as a property")}</h3>
              </div>
              {galoStrengths.map((entry) => (
                <article key={entry.title}>
                  <h4>{t(entry.title)}</h4>
                  <p>{t(entry.text)}</p>
                </article>
              ))}
            </div>
          </div>
          <TermChips terms={["Cayley table", "Receipt", "Boundary", "Formal, current, and target layers"]} />
        </div>
      </section>

      <section id="together" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("HOW THEY COULD WORK TOGETHER")}
            title={t("The interesting configuration is not one against the other.")}
            text={t(
              "An open-ended system is good at proposing; a declared finite layer is good at admitting, executing within a contract, and recording. The architecture describes that composition, and three of its five stages exist today inside a narrow scope.",
            )}
          />
          <ComplementFigure />
        </div>
      </section>

      <section id="misreadings" className="section section--dark math-anchor-section">
        <div className="shell">
          <SectionHeading
            light
            eyebrow={t("FIVE MISREADINGS")}
            title={t("The five things this page is most likely to be taken to mean.")}
            text={t("Each one is stated in the strongest form somebody might repeat it, and then corrected.")}
          />
          <div className="theory-misconceptions">
            {comparisonMisreadings.map((item) => (
              <article key={item.claim}>
                <div>
                  <CircleAlert size={18} aria-hidden="true" />
                  <strong>{t(item.claim)}</strong>
                </div>
                <p>
                  <CircleCheck size={17} aria-hidden="true" /> {t(item.correction)}
                </p>
              </article>
            ))}
          </div>
          <div className="theory-next__links comparison-next">
            <a href={href("/theory#cayley-first")}>
              <span>{t("Where the table comes from")}</span>
              <strong>{t("Start with the multiplication table you already know")}</strong>
              <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            </a>
            <a href={href("/math#academic-analysis")}>
              <span>{t("The formal statements")}</span>
              <strong>{t("Numbered definitions and proofs")}</strong>
              <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            </a>
            <a href={href("/evidence")}>
              <span>{t("What is actually proven")}</span>
              <strong>{t("Four tracks and their current milestones")}</strong>
              <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
