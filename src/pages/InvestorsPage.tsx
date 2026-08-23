import { ArrowLeft, ArrowRight, Ban, CircleAlert, Compass, Skull, Target } from "lucide-react";
import { DecisionTraceFigure } from "../components/diagrams/DecisionTraceFigure";
import { DiligenceTimelineFigure } from "../components/diagrams/DiligenceTimelineFigure";
import { LearningGateFigure } from "../components/diagrams/LearningGateFigure";
import { StackPlacementFigure } from "../components/diagrams/StackPlacementFigure";
import { PageShell } from "../components/layout/PageShell";
import { PageContents } from "../components/ui/PageContents";
import { SectionHeading } from "../components/ui/SectionHeading";
import {
  fundedPlan,
  investableRisks,
  investmentThesis,
  investorField,
  statusLine,
  thesisDeadline,
  whatWouldMakeUsWrong,
} from "../content/investorCase";
import {
  businessProblem,
  diligenceSteps,
  investorNotClaimed,
  oneMinuteFacts,
  stageFacts,
  whereItFits,
} from "../content/investors";
import { useI18n } from "../i18n/I18nContext";

const contents = [
  { href: "#thesis", label: "The thesis, in four questions" },
  { href: "#state-of-play", label: "What exists today, and what does not" },
  { href: "#problem", label: "The problem, in money rather than mathematics" },
  { href: "#where-it-fits", label: "Where a layer like this would sit" },
  { href: "#field", label: "The field, in five lines" },
  { href: "#risks", label: "Six risks, and what kills each one" },
  { href: "#plan", label: "Twelve months, if funded" },
  { href: "#diligence", label: "A diligence path you can run yourself" },
  { href: "#not-claimed", label: "What is not being claimed" },
] as const;

export function InvestorsPage() {
  const { href, t } = useI18n();

  return (
    <PageShell>
      <section className="page-hero page-hero--investors">
        <div className="shell">
          <a className="back-link" href={href("/")}>
            <ArrowLeft className="directional-icon" size={16} aria-hidden="true" /> {t("Home")}
          </a>
          <p className="eyebrow eyebrow--cyan">{t("GALO AI · PRE-SEED")}</p>
          <h1>{t("A weight-free decision layer for private and industrial AI.")}</h1>
          <p>
            {t(
              "No learned weights and no backpropagation: what the engine learns is explicit and can be read, versioned and rolled back. The first product applies that to decision assurance around the systems a plant already runs. This page is the investment case: why this could be a company, what a cheque buys, what would unlock the next round, and the point at which the thesis should be called dead.",
            )}
          </p>
          <ul className="investor-status" aria-label={t("Current status")}>
            {statusLine.map((chip) => (
              <li key={chip}>{t(chip)}</li>
            ))}
          </ul>
        </div>
      </section>

      <PageContents label="On this page" ariaLabel="Investor chapter navigation" items={contents} />

      <section id="thesis" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("THE THESIS, IN FOUR QUESTIONS")}
            title={t("Why this could be a company, and what a cheque is actually for.")}
            text={t(
              "The rest of this page is evidence and limits. This part is the argument, and it is an argument rather than a result — every claim in it is either checkable below or marked as not yet established.",
            )}
          />
          <div className="thesis-blocks">
            {investmentThesis.map((block) => (
              <article key={block.heading}>
                <h3>{t(block.heading)}</h3>
                <p>{t(block.body)}</p>
              </article>
            ))}
          </div>
          <p className="section-followup">
            <Compass size={16} aria-hidden="true" />{" "}
            {t(
              "The architecture is general; the first thing anybody would buy is not. What that first product is, what it would cost as a planning hypothesis, and how far it is from touching a machine:",
            )}{" "}
            <a href={href("/industry")}>{t("the industrial wedge, in full")}</a>
          </p>
        </div>
      </section>

      <section id="state-of-play" className="section section--navy math-anchor-section">
        <div className="shell">
          <SectionHeading
            light
            eyebrow={t("WHAT EXISTS TODAY, AND WHAT DOES NOT")}
            title={t("The short answers, including the ones that are simply no.")}
            text={t(
              "This is the section most sites do not publish. Each answer is written the way it would have to be written in a data room, and where the honest answer is not disclosed, it says not disclosed rather than something warmer.",
            )}
          />
          <div className="one-minute__facts">
            {oneMinuteFacts.map((fact) => (
              <article key={fact.label}>
                <strong dir="ltr">{fact.value}</strong>
                <h3>{t(fact.label)}</h3>
                <p>{t(fact.note)}</p>
              </article>
            ))}
          </div>
          <div className="stage-facts">
            {stageFacts.map((fact) => (
              <article key={fact.question}>
                <div className="stage-facts__head">
                  <h3>{t(fact.question)}</h3>
                  <span className={`stage-facts__marker is-${fact.marker.toLowerCase().replace(/\s+/g, "-")}`}>
                    <bdi dir="ltr">{fact.marker}</bdi>
                  </span>
                </div>
                <p>{t(fact.answer)}</p>
              </article>
            ))}
          </div>
          <LearningGateFigure />
        </div>
      </section>

      <section id="problem" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("THE PROBLEM, IN MONEY RATHER THAN MATHEMATICS")}
            title={t("The expensive failure is not the wrong decision. It is the one nobody can reconstruct.")}
            text={t(
              "Every card below describes a cost that organisations already pay and rarely put on a line item, because it arrives as senior time, delay, and disputes that end without resolution.",
            )}
          />
          <div className="investor-problems">
            {businessProblem.map((card) => (
              <article key={card.number}>
                <span className="investor-problems__index" dir="ltr">
                  {card.number}
                </span>
                <h3>{t(card.title)}</h3>
                <p>{t(card.text)}</p>
                <p className="investor-problems__cost">
                  <b>{t("What it costs")}</b> {t(card.cost)}
                </p>
              </article>
            ))}
          </div>
          <DecisionTraceFigure />
        </div>
      </section>

      <section id="where-it-fits" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("WHERE A LAYER LIKE THIS WOULD SIT")}
            title={t("Not a replacement for anything. The part in the middle that has to be defensible.")}
            text={t(
              "Read the four situations below as descriptions of shape, not as pipeline. None of them is a deployment, a pilot, a customer, or a conversation, and none is presented as one.",
            )}
          />
          <StackPlacementFigure />
          <div className="investor-fit">
            {whereItFits.map((entry) => (
              <article key={entry.sector}>
                <Compass size={20} aria-hidden="true" />
                <h3>{t(entry.sector)}</h3>
                <p className="investor-fit__situation">{t(entry.situation)}</p>
                <p>{t(entry.whatWouldChange)}</p>
              </article>
            ))}
          </div>
          <p className="investor-note">
            <CircleAlert size={17} aria-hidden="true" />
            {t(
              "These four are illustrations of where the shape fits, written by us. No organisation named or unnamed has evaluated, piloted, or agreed to anything, and nothing on this site should be read as implying otherwise.",
            )}
          </p>
        </div>
      </section>

      <section id="field" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("THE FIELD, IN FIVE LINES")}
            title={t("What each class is bought for, and where this differs.")}
            text={t(
              "Compared by class rather than by company, and short on purpose. Nothing here says one class answers better than another; that has not been measured. The full family-by-family table is on the comparison page.",
            )}
          />
          <div className="field-table-wrap" role="region" aria-label={t("The field in five lines")} tabIndex={0}>
            <table className="field-table">
              <thead>
                <tr>
                  <th scope="col">{t("Class")}</th>
                  <th scope="col">{t("Bought for")}</th>
                  <th scope="col">{t("Where this differs")}</th>
                </tr>
              </thead>
              <tbody>
                {investorField.map((row) => (
                  <tr key={row.klass} className={row.isGalo ? "is-galo" : undefined}>
                    <th scope="row">{t(row.klass)}</th>
                    <td>{t(row.boughtFor)}</td>
                    <td>{t(row.difference)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="section-followup">
            <a className="text-link" href={href("/vs-llm#classes")}>
              {t("Nine classes of alternative approach, compared on authority, change and replay")}{" "}
              <ArrowRight className="directional-icon" size={16} aria-hidden="true" />
            </a>
          </p>
        </div>
      </section>

      <section id="risks" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("SIX RISKS, AND WHAT KILLS EACH ONE")}
            title={t("Written by us, in the form we would want them written if we were reading.")}
            text={t(
              "A risk without a test is an opinion. Each entry names the thing that could go wrong, why it would end the company rather than merely delay it, the observation that would settle it either way, and where it stands today.",
            )}
          />
          <div className="risk-register">
            {investableRisks.map((entry) => (
              <article key={entry.code}>
                <span className="risk-register__code" dir="ltr">
                  {entry.code}
                </span>
                <h3>{t(entry.risk)}</h3>
                <p>{t(entry.whyFatal)}</p>
                <p className="risk-register__settled">
                  <b>{t("What would settle it")}</b> {t(entry.whatSettlesIt)}
                </p>
                <p className="risk-register__status">
                  <bdi dir="ltr">{t(entry.statusToday)}</bdi>
                </p>
              </article>
            ))}
          </div>
          <p className="risk-register__deadline">
            <Skull size={18} aria-hidden="true" /> {t(thesisDeadline)}
          </p>
        </div>
      </section>

      <section id="plan" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("TWELVE MONTHS, IF FUNDED")}
            title={t("What the money would be spent on, and what would say it was the wrong bet.")}
            text={t(
              "No round is open, no round size is stated, and nothing below has been agreed with anyone. This is what the first twelve months would be spent on if the work were funded, written as work rather than as milestones that imply a result.",
            )}
          />
          <ol className="funded-plan">
            {fundedPlan.map((item) => (
              <li key={item.number}>
                <span dir="ltr">{item.number}</span>
                <div>
                  <h3>{t(item.title)}</h3>
                  <p>{t(item.text)}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="wrong-list">
            <div className="wrong-list__head">
              <Target size={20} aria-hidden="true" />
              <strong>{t("What would make us wrong")}</strong>
            </div>
            <ul>
              {whatWouldMakeUsWrong.map((line) => (
                <li key={line}>{t(line)}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="diligence" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("A DILIGENCE PATH YOU CAN RUN YOURSELF")}
            title={t("Six steps, five of which need nothing from us at all.")}
            text={t(
              "The cheapest way to find out whether a claim discipline is real is to attack the numbers, not the story. The path below is ordered by cost, and the first disproof available is also the fastest one.",
            )}
          />
          <DiligenceTimelineFigure />
          <ol className="diligence-steps">
            {diligenceSteps.map((step) => (
              <li key={step.number}>
                <div className="diligence-steps__head">
                  <span dir="ltr">{step.number}</span>
                  <code dir="ltr">{step.timeBox}</code>
                </div>
                <div>
                  <h3>{t(step.step)}</h3>
                  <p>{t(step.outcome)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="not-claimed" className="section section--dark math-anchor-section">
        <div className="shell">
          <SectionHeading
            light
            eyebrow={t("WHAT IS NOT BEING CLAIMED")}
            title={t("The list a reader would otherwise have to assemble by noticing absences.")}
            text={t(
              "Everything below is false today, so it is written down rather than left to inference. If any line here changes, it changes on the evidence page first and on this list second.",
            )}
          />
          <ul className="not-claimed">
            {investorNotClaimed.map((line) => (
              <li key={line}>
                <Ban size={17} aria-hidden="true" />
                {t(line)}
              </li>
            ))}
          </ul>
          <div className="theory-next__links comparison-next">
            <a href={href("/audit")}>
              <span>{t("If you have to verify rather than decide")}</span>
              <strong>{t("What an outsider can actually establish")}</strong>
              <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            </a>
            <a href={href("/thinking")}>
              <span>{t("If you want the mechanism")}</span>
              <strong>{t("One decision, drawn stage by stage")}</strong>
              <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            </a>
            <a href={href("/evidence")}>
              <span>{t("If you want the record")}</span>
              <strong>{t("Four tracks and their current milestones")}</strong>
              <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
