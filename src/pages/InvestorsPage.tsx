import { ArrowLeft, ArrowRight, Ban, CircleAlert, Compass, Scale } from "lucide-react";
import { DecisionTraceFigure } from "../components/diagrams/DecisionTraceFigure";
import { DiligenceTimelineFigure } from "../components/diagrams/DiligenceTimelineFigure";
import { LearningGateFigure } from "../components/diagrams/LearningGateFigure";
import { StackPlacementFigure } from "../components/diagrams/StackPlacementFigure";
import { PageShell } from "../components/layout/PageShell";
import { PageContents } from "../components/ui/PageContents";
import { SectionHeading } from "../components/ui/SectionHeading";
import {
  businessProblem,
  diligenceSteps,
  investorNotClaimed,
  oneMinute,
  oneMinuteFacts,
  riskRegister,
  stageFacts,
  whereItFits,
} from "../content/investors";
import { landscapeStanding, landscapeVerdicts } from "../content/landscape";
import { useI18n } from "../i18n/I18nContext";

const contents = [
  { href: "#one-minute", label: "The whole idea in one minute" },
  { href: "#problem", label: "The problem, in money rather than mathematics" },
  { href: "#where-it-fits", label: "Where a layer like this would sit" },
  { href: "#state-of-play", label: "What exists today, stated plainly" },
  { href: "#field", label: "Who else is doing this, and where we stand" },
  { href: "#risks", label: "Six risks and what would settle each" },
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
          <p className="eyebrow eyebrow--cyan">{t("FOR A READER WHO WILL NEVER OPEN THE MATHEMATICS")}</p>
          <h1>{t("What this is, what exists, and what would tell you it is not worth your time.")}</h1>
          <p>
            {t(
              "There is no formula on this page and none is needed. Everything below is written so that a non-technical reader can form a real opinion — including a negative one — in about fifteen minutes, and then check that opinion without asking us for anything.",
            )}
          </p>
          <div className="investor-hero__facts">
            {oneMinuteFacts.map((fact) => (
              <div key={fact.label}>
                <strong dir="ltr">{fact.value}</strong>
                <span>{t(fact.label)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageContents label="On this page" ariaLabel="Investor chapter navigation" items={contents} />

      <section id="one-minute" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("THE WHOLE IDEA IN ONE MINUTE")}
            title={t("Three sentences, and then the four numbers that qualify them.")}
            text={t(
              "If you read nothing else on this site, read this section. The three sentences say what the thing is; the four numbers underneath say how small it currently is, including the number that is zero.",
            )}
          />
          <div className="one-minute">
            <article>
              <span>{t("What it is")}</span>
              <p>{t(oneMinute.what)}</p>
            </article>
            <article>
              <span>{t("Who it is for")}</span>
              <p>{t(oneMinute.forWhom)}</p>
            </article>
            <article>
              <span>{t("Why it is worth doing now")}</span>
              <p>{t(oneMinute.whyNow)}</p>
            </article>
          </div>
          <div className="one-minute__facts">
            {oneMinuteFacts.map((fact) => (
              <article key={fact.label}>
                <strong dir="ltr">{fact.value}</strong>
                <h3>{t(fact.label)}</h3>
                <p>{t(fact.note)}</p>
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

      <section id="state-of-play" className="section section--navy math-anchor-section">
        <div className="shell">
          <SectionHeading
            light
            eyebrow={t("WHAT EXISTS TODAY, STATED PLAINLY")}
            title={t("The short answers, including the ones that are simply no.")}
            text={t(
              "This is the section most sites do not publish. Each answer is written the way it would have to be written in a data room, and where the honest answer is not disclosed, it says not disclosed rather than something warmer.",
            )}
          />
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

      <section id="field" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("WHO ELSE IS DOING THIS")}
            title={t("The question is not whether anyone else has thought of this. Several fields have.")}
            text={t(
              "Declared operators, explicit state, a checker admitting a proposer's candidates — each of those has a literature and, in most cases, working software behind it. An investor should know that before deciding what is actually being funded here, so the three answers below are the ones we would give in the room.",
            )}
          />
          <div className="landscape-verdicts">
            {landscapeVerdicts.map((row) => (
              <article key={row.question}>
                <h3>{t(row.question)}</h3>
                <p>{t(row.answer)}</p>
              </article>
            ))}
          </div>

          <div className="landscape-standing">
            <div className="landscape-standing__head">
              <Scale size={20} aria-hidden="true" />
              <div>
                <strong>{t("What every one of those has, and this project does not")}</strong>
                <p>
                  {t(
                    "This is the part of the comparison that costs us something. Read it before the risk register rather than after it.",
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
              {t("See all twelve families, named, with what each one lets an outsider check")}{" "}
              <ArrowRight className="directional-icon" size={16} aria-hidden="true" />
            </a>
          </p>
        </div>
      </section>

      <section id="risks" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("SIX RISKS AND WHAT WOULD SETTLE EACH")}
            title={t("Written by us, in the form we would want them written if we were reading.")}
            text={t(
              "A risk without a test is an opinion. Each entry below names the thing that could go wrong, why it would matter, and the specific observation that would settle the question in either direction.",
            )}
          />
          <div className="risk-register">
            {riskRegister.map((entry) => (
              <article key={entry.code}>
                <span className="risk-register__code" dir="ltr">
                  {entry.code}
                </span>
                <h3>{t(entry.risk)}</h3>
                <p>{t(entry.whyItMatters)}</p>
                <p className="risk-register__settled">
                  <b>{t("What would settle it")}</b> {t(entry.settledBy)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="diligence" className="section section--paper math-anchor-section">
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
