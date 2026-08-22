import { ArrowLeft, ArrowRight, Check, CircleAlert, ShieldAlert, X } from "lucide-react";
import { AuthorityContrastFigure } from "../components/diagrams/AuthorityContrastFigure";
import { EngineCycleFigure } from "../components/diagrams/EngineCycleFigure";
import { TwoRolesFigure } from "../components/diagrams/TwoRolesFigure";
import { PageShell } from "../components/layout/PageShell";
import { PageContents } from "../components/ui/PageContents";
import { SectionHeading } from "../components/ui/SectionHeading";
import {
  alreadyChecked,
  engineCycle,
  engineIsNot,
  engineRoles,
  miniExample,
  oneMinute,
  whereToAttack,
} from "../content/engineTour";
import { publicContact } from "../content/contact";
import { assessmentTable, hardQuestions, nonAffiliation, notPublishedHere, twelveMonths } from "../content/programme";
import { useI18n } from "../i18n/I18nContext";

const contents = [
  { href: "#one-minute", label: "The whole thing in one minute" },
  { href: "#cycle", label: "One turn of the engine" },
  { href: "#roles", label: "Two roles, and the line between them" },
  { href: "#not", label: "What this is not" },
  { href: "#example", label: "One change, carried through" },
  { href: "#checked", label: "What is already checked" },
  { href: "#attack", label: "Where to attack this" },
  { href: "#next", label: "Where to go next" },
  { href: "#appendix", label: "Application materials" },
] as const;

const positiveStatuses = new Set(["ESTABLISHED"]);
const neutralStatuses = new Set(["PARTIAL", "STATED, NOT DONE", "NOT DISCLOSED"]);

function statusTone(status: string) {
  if (positiveStatuses.has(status)) return "is-established";
  if (neutralStatuses.has(status)) return "is-partial";
  return "is-negative";
}

export function Hub71Page() {
  const { href, t } = useI18n();

  return (
    <PageShell>
      <section className="page-hero page-hero--programme">
        <div className="shell">
          <a className="back-link" href={href("/")}>
            <ArrowLeft className="directional-icon" size={16} aria-hidden="true" /> {t("Home")}
          </a>
          <p className="eyebrow eyebrow--cyan">{t("THE MECHANISM FIRST, THEN THE NUMBERS, THEN THE LIMITS")}</p>
          <h1>{t("How GALO works. No formulas, and no need to trust the brand.")}</h1>
          <p>
            {t(
              "GALO is not a generator of good-looking answers. It is a machine that carries a decision as a checkable record: what changed, what it touched, what may still be accepted, and what can no longer be confirmed. This page explains that in about ten minutes and then hands you the places to attack it.",
            )}
          </p>
          <div className="engine-hero__note">
            <span>
              {t(
                "If you finish this page and still do not believe the project, you should at least be able to say where the hole is. That is the point of it.",
              )}
            </span>
          </div>
        </div>
      </section>

      <PageContents label="On this page" ariaLabel="Engine tour navigation" items={contents} />

      <section id="one-minute" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("IN ONE MINUTE")}
            title={t("Three sentences, and everything else on this page serves them.")}
          />
          <ol className="engine-minute">
            {oneMinute.map((line, index) => (
              <li key={line}>
                <span dir="ltr">{String(index + 1).padStart(2, "0")}</span>
                <p>{t(line)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="cycle" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("ONE TURN OF THE ENGINE")}
            title={t("Seven steps, none of which needs a word you do not already have.")}
            text={t(
              "Read the diagram for the shape, then the cards for what each step actually means. Nothing here is a metaphor for something more complicated underneath: this is the order the work happens in.",
            )}
          />
          <EngineCycleFigure />
          <ol className="engine-steps">
            {engineCycle.map((step) => (
              <li key={step.number}>
                <span dir="ltr">{step.number}</span>
                <div>
                  <h3>{t(step.label)}</h3>
                  <p>{t(step.plain)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="roles" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("TWO ROLES, AND THE LINE BETWEEN THEM")}
            title={t("The part that learns is not allowed to say what is true.")}
            text={t(
              "If you take one thing from this page, take this. Almost every objection to a learning system is really an objection to letting the learned part carry the authority — so here it does not, and the separation is a property of the release rather than a promise about behaviour.",
            )}
          />
          <TwoRolesFigure />
          <div className="engine-roles">
            {engineRoles.map((role) => (
              <article key={role.role}>
                <h3>{t(role.role)}</h3>
                <p className="engine-roles__point">{t(role.point)}</p>
                <div className="engine-roles__lists">
                  <div>
                    <h4>
                      <Check size={16} aria-hidden="true" /> {t("May")}
                    </h4>
                    <ul>
                      {role.may.map((item) => (
                        <li key={item}>{t(item)}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="is-not">
                    <h4>
                      <X size={16} aria-hidden="true" /> {t("May not")}
                    </h4>
                    <ul>
                      {role.mayNot.map((item) => (
                        <li key={item}>{t(item)}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="not" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("WHAT THIS IS NOT")}
            title={t("Five things a reader arrives assuming, answered without scoring anybody.")}
            text={t(
              "Each of these families is real work done by serious people, and several are far ahead of this project in engineering. The difference drawn below is about where the authority sits, and about nothing else.",
            )}
          />
          <div className="engine-not">
            {engineIsNot.map((entry) => (
              <article key={entry.claim}>
                <span>{t("Not")}</span>
                <h3>{t(entry.claim)}</h3>
                <p>{t(entry.answer)}</p>
              </article>
            ))}
          </div>
          <AuthorityContrastFigure />
        </div>
      </section>

      <section id="example" className="section section--navy math-anchor-section">
        <div className="shell">
          <SectionHeading
            light
            eyebrow={t("ONE CHANGE, CARRIED THROUGH")}
            title={t("The least dramatic situation available, which is also the one this is for.")}
          />
          <ol className="engine-example">
            {miniExample.map((line) => (
              <li key={line}>{t(line)}</li>
            ))}
          </ol>
          <p className="engine-example__foot">
            {t(
              "That last line is the part most systems leave out. Saying which conclusions can no longer be confirmed is worth more than producing a fresh answer for all of them.",
            )}
          </p>
        </div>
      </section>

      <section id="checked" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("WHAT IS ALREADY CHECKED")}
            title={t("Four lines, and the fourth is the one that matters most.")}
            text={t(
              "The numbers themselves are on the evidence page, with the comparator each was measured against. This is the summary a reader can hold without opening it.",
            )}
          />
          <div className="engine-checked">
            {alreadyChecked.map((entry) => (
              <article key={entry.title} className={entry.missing ? "is-missing" : undefined}>
                <span aria-hidden="true">{entry.missing ? <X size={17} /> : <Check size={17} />}</span>
                <div>
                  <h3>{t(entry.title)}</h3>
                  <p>{t(entry.detail)}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="section-followup">
            <a className="text-link" href={href("/evidence#learning")}>
              {t("The measured results, with the comparator each was run against")}{" "}
              <ArrowRight className="directional-icon" size={16} aria-hidden="true" />
            </a>
          </p>
        </div>
      </section>

      <section id="attack" className="section section--dark math-anchor-section">
        <div className="shell">
          <SectionHeading
            light
            eyebrow={t("WHERE TO ATTACK THIS")}
            title={t("The honest weaknesses, written to be used rather than to reassure.")}
            text={t(
              "A page that lists only what works is a page nobody can argue with, which is the same as a page nobody can check. Here are the five places a sceptic should push.",
            )}
          />
          <ul className="engine-attack">
            {whereToAttack.map((line) => (
              <li key={line}>
                <CircleAlert size={18} aria-hidden="true" />
                <span>{t(line)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="next" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("WHERE TO GO NEXT")}
            title={t("Four directions, depending on what you would need to see.")}
          />
          <div className="theory-next__links comparison-next">
            <a href={href("/evidence")}>
              <span>{t("If you want the numbers and the checks")}</span>
              <strong>{t("Evidence")}</strong>
              <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            </a>
            <a href={href("/industry")}>
              <span>{t("If you are looking at this from the production side")}</span>
              <strong>{t("Industry")}</strong>
              <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            </a>
            <a href={href("/investors")}>
              <span>{t("If you are deciding whether this could become a company")}</span>
              <strong>{t("Investors")}</strong>
              <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            </a>
            <a href={href("/vs-llm")}>
              <span>{t("If you want the full comparison, class by class")}</span>
              <strong>{t("Comparison")}</strong>
              <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section id="appendix" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("APPENDIX")}
            title={t("Application materials, kept here rather than at the top.")}
            text={t(
              "This used to be the whole page, which made a document written for one assessor stand in front of everybody else. It is still on the record, folded down: twelve assessment lines, twelve months with the observation that would show each was missed, the questions we expect to be pressed on, and the facts a website is the wrong place for.",
            )}
          />
          <div className="engine-affiliation">
            <ShieldAlert size={20} aria-hidden="true" />
            <p>{t(nonAffiliation)}</p>
          </div>

          <details className="engine-dossier">
            <summary>{t("Twelve assessment lines, six of them negative")}</summary>
            <div className="engine-dossier__table-wrap" role="region" tabIndex={0} aria-label={t("Assessment lines")}>
              <table className="engine-dossier__table">
                <thead>
                  <tr>
                    <th scope="col">{t("Line")}</th>
                    <th scope="col">{t("Status")}</th>
                    <th scope="col">{t("What stands behind it")}</th>
                  </tr>
                </thead>
                <tbody>
                  {assessmentTable.map((row) => (
                    <tr key={row.dimension}>
                      <th scope="row">{t(row.dimension)}</th>
                      <td>
                        <span className={`assessment-status ${statusTone(row.status)}`} dir="ltr">
                          {row.status}
                        </span>
                      </td>
                      <td>{t(row.answerToday)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>

          <details className="engine-dossier">
            <summary>{t("Twelve months, each with the observation that would show it was missed")}</summary>
            <ol className="engine-dossier__list">
              {twelveMonths.map((milestone) => (
                <li key={milestone.window}>
                  <strong>{t(milestone.window)}</strong>
                  <span>{t(milestone.deliverable)}</span>
                  <em>{t(milestone.wouldFailIf)}</em>
                </li>
              ))}
            </ol>
          </details>

          <details className="engine-dossier">
            <summary>{t("The questions we expect to be pressed on")}</summary>
            <dl className="engine-dossier__questions">
              {hardQuestions.map((entry) => (
                <div key={entry.question}>
                  <dt>{t(entry.question)}</dt>
                  <dd>{t(entry.answerToday)}</dd>
                </div>
              ))}
            </dl>
          </details>

          <details className="engine-dossier">
            <summary>{t("Facts a website is the wrong place for")}</summary>
            <ul className="engine-dossier__withheld">
              {notPublishedHere.map((entry) => (
                <li key={entry.fact}>
                  <strong>{t(entry.fact)}</strong>
                  <span>{t(entry.availability)}</span>
                </li>
              ))}
            </ul>
            <p className="engine-dossier__contact">
              {t("Anything above is available on request:")}{" "}
              <a href={`mailto:${publicContact.evaluationEmail}`} dir="ltr">
                {publicContact.evaluationEmail}
              </a>
            </p>
          </details>
        </div>
      </section>
    </PageShell>
  );
}
