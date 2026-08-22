import { ArrowLeft, ArrowRight, Ban, CircleAlert, FileText, Landmark, Scale, ShieldAlert, Target } from "lucide-react";
import { PageShell } from "../components/layout/PageShell";
import { PageContents } from "../components/ui/PageContents";
import { SectionHeading } from "../components/ui/SectionHeading";
import { publicContact } from "../content/contact";
import { releaseEvidence } from "../content/evidence";
import {
  askedFor,
  assessmentTable,
  hardQuestions,
  nonAffiliation,
  notAskedFor,
  notPublishedHere,
  regionFit,
  twelveMonths,
} from "../content/programme";
import { landscapeStanding } from "../content/landscape";
import { siteContent } from "../content/site";
import { useI18n } from "../i18n/I18nContext";

const contents = [
  { href: "#standing", label: "What this document is" },
  { href: "#assessment", label: "Twelve lines an assessor works through" },
  { href: "#region", label: "Why the work is shaped like the region's problems" },
  { href: "#field", label: "How this reads against the field" },
  { href: "#twelve-months", label: "Twelve months, with failure conditions" },
  { href: "#ask", label: "What is asked for, and what is not" },
  { href: "#pressed", label: "Six questions we expect to be pressed on" },
  { href: "#withheld", label: "Facts not published on a website" },
  { href: "#control", label: "Document control" },
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
          <p className="eyebrow eyebrow--cyan">{t("APPLICATION DOSSIER · NOT AN ANNOUNCEMENT")}</p>
          <h1>{t("Everything an assessor would ask, answered before the meeting.")}</h1>
          <p>
            {t(
              "This page exists so that a first conversation can start at the open questions instead of the closed ones. Twelve assessment lines, six of them negative. Twelve months of commitments, each with the observation that would show it was missed. Six questions we expect to be pressed on, answered as they stand today rather than as we would like them to stand.",
            )}
          </p>
          <div className="programme-hero__strip">
            <div>
              <small>{t("AFFILIATION")}</small>
              <strong>{t("None")}</strong>
            </div>
            <div>
              <small>{t("OUTCOME REPORTED")}</small>
              <strong>{t("None")}</strong>
            </div>
            <div>
              <small>{t("RELEASE OF RECORD")}</small>
              <strong dir="ltr">{releaseEvidence.release}</strong>
            </div>
            <div>
              <small>{t("STAGE")}</small>
              <strong>{t(siteContent.company.stage)}</strong>
            </div>
          </div>
        </div>
      </section>

      <PageContents label="On this page" ariaLabel="Dossier navigation" items={contents} />

      <section id="standing" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("READ THIS FIRST")}
            title={t("No relationship is being claimed here, and none exists.")}
            text={t(
              "A page addressed to a programme is the easiest place on a website to imply a connection that has not happened. So the statement is made once, plainly, and the build refuses to ship without it.",
            )}
          />
          <div className="programme-affiliation">
            <ShieldAlert size={22} aria-hidden="true" />
            <p>{t(nonAffiliation)}</p>
          </div>
          <div className="programme-standing">
            <article>
              <FileText size={19} aria-hidden="true" />
              <h3>{t("What this document does")}</h3>
              <p>
                {t(
                  "It states what exists, what does not, and how to check both, at the level of detail a diligence call would otherwise consume. Every line links to the page that carries its evidence.",
                )}
              </p>
            </article>
            <article>
              <Ban size={19} aria-hidden="true" />
              <h3>{t("What it deliberately avoids")}</h3>
              <p>
                {t(
                  "It does not describe any programme, its criteria, its tracks, or its terms. Nothing in this project can verify those, and repeating them second-hand would be the exact unseriousness this page exists to avoid.",
                )}
              </p>
            </article>
            <article>
              <Target size={19} aria-hidden="true" />
              <h3>{t("How to use it against us")}</h3>
              <p>
                {t(
                  "Take the twelve-month table, keep it, and come back with it. Each milestone carries the observation that would show it was missed, so the document can be marked rather than believed.",
                )}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="assessment" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("THE STATE OF PLAY, LINE BY LINE")}
            title={t("Twelve lines an assessor works through. Six of them are negative.")}
            text={t(
              "The negative lines are not at the bottom. A dossier that puts its three strengths first and its six absences in a footnote is a dossier that expects not to be read carefully, and this one does.",
            )}
          />
          <div className="programme-table-wrap" role="region" aria-label={t("Assessment lines")} tabIndex={0}>
            <table className="programme-table">
              <caption>{t("Assessment lines, with the status each one currently supports")}</caption>
              <thead>
                <tr>
                  <th scope="col">{t("Dimension")}</th>
                  <th scope="col">{t("Where it stands today")}</th>
                  <th scope="col">{t("Status")}</th>
                  <th scope="col">{t("Check")}</th>
                </tr>
              </thead>
              <tbody>
                {assessmentTable.map((row) => (
                  <tr key={row.dimension}>
                    <th scope="row">{t(row.dimension)}</th>
                    <td>{t(row.answerToday)}</td>
                    <td>
                      <span className={`programme-status ${statusTone(row.status)}`} dir="ltr">
                        {row.status}
                      </span>
                    </td>
                    <td>
                      {row.whereToCheck ? (
                        <a href={href(row.whereToCheck)}>
                          {t("Open")}
                          <ArrowRight className="directional-icon" size={14} aria-hidden="true" />
                        </a>
                      ) : (
                        <span className="programme-table__none">{t("Not on this site")}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="programme-note">
            <CircleAlert size={18} aria-hidden="true" />
            <span>
              {t(
                "Three lines are established, three are absent outright, and the rest are partial or undisclosed. That distribution is what a pre-seed research project honestly looks like, and presenting it any other way would only cost the first hour of the first meeting.",
              )}
            </span>
          </p>
        </div>
      </section>

      <section id="region" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("FIT, WITH THE LIMIT ATTACHED")}
            title={t("Four reasons the work is shaped like the region's problems.")}
            text={t(
              "Each claim below is followed by what it does not reach. A fit argument without its limit is a sales argument, and it does not survive the first technical reviewer.",
            )}
          />
          <div className="programme-fit">
            {regionFit.map((entry) => (
              <article key={entry.claim}>
                <Landmark size={19} aria-hidden="true" />
                <h3>{t(entry.claim)}</h3>
                <p>{t(entry.mechanism)}</p>
                <p className="programme-fit__limit">
                  <b>{t("Limit")}</b>
                  {t(entry.limit)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="field" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("HOW THIS READS AGAINST THE FIELD")}
            title={t("An assessment line is worth little without something to measure it against.")}
            text={t(
              "The twelve lines above say what is and is not established inside this project. This section says the harder thing: how the same lines read next to language models, agent frameworks, proof assistants, solvers, learned-proposer work, knowledge graphs, cognitive architectures, and rule engines — thirteen families that are also trying to build artificial intelligence, and every one of which is further along in practical terms.",
            )}
          />
          <div className="landscape-standing">
            <div className="landscape-standing__head">
              <Scale size={20} aria-hidden="true" />
              <div>
                <strong>{t("What every one of those has, and this project does not")}</strong>
                <p>
                  {t(
                    "Four lines, stated here rather than left for the assessor to find. Each one is a reason to say no, and each one is accurate.",
                  )}
                </p>
              </div>
            </div>
            <ul>
              {landscapeStanding.map((row) => (
                <li key={row.they}>
                  <span className="landscape-standing__them">{t(row.they)}</span>
                  <span className="landscape-standing__us">{t(row.us)}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="section-followup">
            <a className="text-link" href={href("/vs-llm#landscape")}>
              {t("See all thirteen families, named, with what each one lets an outsider check")}{" "}
              <ArrowRight className="directional-icon" size={16} aria-hidden="true" />
            </a>
          </p>
        </div>
      </section>

      <section id="twelve-months" className="section section--navy math-anchor-section">
        <div className="shell">
          <SectionHeading
            light
            eyebrow={t("TWELVE MONTHS, WRITTEN TO BE MARKED")}
            title={t("Five commitments, each with the observation that would show it was missed.")}
            text={t(
              "A plan is a wish until somebody can tell whether it happened. Every milestone here carries its own failure condition, so this table can be kept and used against the project a year from now.",
            )}
          />
          <ol className="programme-months">
            {twelveMonths.map((milestone, index) => (
              <li key={milestone.window}>
                <div className="programme-months__marker">
                  <span dir="ltr">{String(index + 1).padStart(2, "0")}</span>
                  <small>{t(milestone.window)}</small>
                </div>
                <div>
                  <p className="programme-months__deliverable">{t(milestone.deliverable)}</p>
                  <p className="programme-months__fail">
                    <b>{t("Missed if")}</b>
                    {t(milestone.wouldFailIf)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="ask" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("THE ASK, IN BOTH DIRECTIONS")}
            title={t("Four things asked for, and four deliberately not asked for.")}
            text={t(
              "The second list matters more than the first. It fixes in advance what could otherwise be read into an introduction, a meeting, or a logo appearing next to ours.",
            )}
          />
          <div className="programme-ask">
            <article className="is-asked">
              <h3>{t("Asked for")}</h3>
              <ul>
                {askedFor.map((line) => (
                  <li key={line}>{t(line)}</li>
                ))}
              </ul>
            </article>
            <article className="is-not-asked">
              <h3>{t("Not asked for")}</h3>
              <ul>
                {notAskedFor.map((line) => (
                  <li key={line}>{t(line)}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="pressed" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("THE HARD PART OF THE CONVERSATION")}
            title={t("Six questions we expect to be pressed on, answered as they stand.")}
            text={t(
              "These are the questions that decide the meeting. Answering them here costs the advantage of a rehearsed reply and gains the only thing worth more: the assessor can check the answers before spending an hour on them.",
            )}
          />
          <dl className="programme-questions">
            {hardQuestions.map((entry, index) => (
              <div key={entry.question}>
                <dt>
                  <span dir="ltr">{String(index + 1).padStart(2, "0")}</span>
                  {t(entry.question)}
                </dt>
                <dd>{t(entry.answerToday)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="withheld" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("WHAT A WEBSITE IS THE WRONG PLACE FOR")}
            title={t("Four facts an assessor will want that are not published here.")}
            text={t(
              "Two of them are withheld on purpose and two of them do not exist yet. Saying which is which is the point: an absence with no explanation reads the same as something being hidden.",
            )}
          />
          <div className="programme-withheld">
            {notPublishedHere.map((entry) => (
              <article key={entry.fact}>
                <span className={entry.status === "NOT APPLICABLE" ? "is-na" : undefined} dir="ltr">
                  {entry.status}
                </span>
                <h3>{t(entry.fact)}</h3>
                <p>{t(entry.availability)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="control" className="section section--dark math-anchor-section">
        <div className="shell">
          <SectionHeading
            light
            eyebrow={t("DOCUMENT CONTROL")}
            title={t("What this document is pinned to, and who answers for it.")}
            text={t(
              "Every figure quoted above is generated from the same release record the rest of the site is generated from, so this page cannot drift away from the evidence pages while looking as though it agrees with them.",
            )}
          />
          <dl className="programme-control" dir="ltr">
            <div>
              <dt>release_of_record</dt>
              <dd>{releaseEvidence.release}</dd>
            </div>
            <div>
              <dt>release_status</dt>
              <dd>{releaseEvidence.status}</dd>
            </div>
            <div>
              <dt>contact_of_record</dt>
              <dd>{publicContact.evaluationEmail}</dd>
            </div>
            <div>
              <dt>legal_entity</dt>
              <dd>NOT INCORPORATED</dd>
            </div>
            <div>
              <dt>affiliation</dt>
              <dd>NONE</dd>
            </div>
          </dl>
          <div className="theory-next__links comparison-next">
            <a href={href("/evidence")}>
              <span>{t("The evidence behind every line above")}</span>
              <strong>{t("Release record and boundaries")}</strong>
              <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            </a>
            <a href={href("/audit")}>
              <span>{t("How far each kind of check reaches")}</span>
              <strong>{t("The verification handbook")}</strong>
              <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            </a>
            <a href={href("/investors")}>
              <span>{t("The same picture in business terms")}</span>
              <strong>{t("Stage, risks, and diligence path")}</strong>
              <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
