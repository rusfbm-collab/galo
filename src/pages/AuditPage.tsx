import { ArrowLeft, ArrowRight, Ban, ClipboardCheck, CircleAlert, ScanSearch } from "lucide-react";
import { ClaimAnatomyFigure } from "../components/diagrams/ClaimAnatomyFigure";
import { VerificationTierFigure } from "../components/diagrams/VerificationTierFigure";
import { PageShell } from "../components/layout/PageShell";
import { SectionHeading } from "../components/ui/SectionHeading";
import {
  auditLimits,
  auditorQuestions,
  evidenceChain,
  reproductionSteps,
  statusRules,
  verificationTiers,
} from "../content/audit";
import { headlineClaims } from "../content/headlineClaims";
import { useI18n } from "../i18n/I18nContext";

const contents = [
  { href: "#what-you-can-check", label: "Four tiers of verifiability" },
  { href: "#three-promises", label: "The three promises, and how to break each" },
  { href: "#anatomy", label: "The shape of every published claim" },
  { href: "#reading-a-status", label: "How to read a status without being misled" },
  { href: "#eight-questions", label: "Eight questions, answered as they stand" },
  { href: "#reproduce", label: "Reproduce it yourself in five steps" },
  { href: "#limits", label: "What cannot be established from here" },
] as const;

export function AuditPage() {
  const { href, t } = useI18n();

  return (
    <PageShell>
      <section className="page-hero page-hero--audit">
        <div className="shell">
          <a className="back-link" href={href("/")}>
            <ArrowLeft className="directional-icon" size={16} aria-hidden="true" /> {t("Home")}
          </a>
          <p className="eyebrow eyebrow--cyan">{t("FOR A READER WHO HAS TO VERIFY, NOT ENJOY")}</p>
          <h1>{t("What a sceptical outsider can establish here, and what nobody can.")}</h1>
          <p>
            {t(
              "This page is written against its own site. It says which published values you can recompute in front of you, which ones are merely stored, and which ones cannot be settled from here at all — because a verification page that never says no is not a verification page.",
            )}
          </p>
          <div className="audit-hero__pair">
            <div>
              <ScanSearch size={20} aria-hidden="true" />
              <strong>{t("What this page gives you")}</strong>
              <span>{t("A tier for every kind of evidence, and an operation you can run for each one.")}</span>
            </div>
            <div className="is-boundary">
              <Ban size={20} aria-hidden="true" />
              <strong>{t("What it refuses to give you")}</strong>
              <span>{t("Any impression of independence. Every check published here is run by our own build.")}</span>
            </div>
          </div>
        </div>
      </section>

      <nav className="math-contents" aria-label={t("Audit chapter navigation")}>
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

      <section id="what-you-can-check" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("FOUR TIERS OF VERIFIABILITY")}
            title={t("Sort every number on this site into one of four boxes before you argue about any of them.")}
            text={t(
              "The tier is not a measure of importance. It answers one question: how many people, with what access, could establish this without trusting the project? A claim in the last tier is not weaker — it is outside what this site can settle.",
            )}
          />
          <VerificationTierFigure />
          <div className="audit-tiers">
            {verificationTiers.map((tier) => (
              <article key={tier.code} className={`is-${tier.code.toLowerCase()}`}>
                <div className="audit-tiers__head">
                  <span dir="ltr">{tier.code}</span>
                  <code dir="ltr">{tier.tag}</code>
                </div>
                <h3>{t(tier.label)}</h3>
                <p>{t(tier.means)}</p>
                <p className="audit-tiers__example">
                  <b>{t("For example")}</b> {t(tier.example)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="three-promises" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("THE THREE PROMISES, AND HOW TO BREAK EACH")}
            title={t("The front page makes three claims. Each one has an action that would refute it.")}
            text={t(
              "A claim nobody can falsify is not evidence, it is advertising. Below, each promise from the headline is paired with the specific thing a sceptic does to settle it, and with the part that no action available here can settle at all.",
            )}
          />
          <ol className="promise-checks">
            {headlineClaims.map((claim, index) => (
              <li key={claim.word}>
                <span className="promise-checks__index" dir="ltr">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <strong>{t(claim.claim)}</strong>
                  <p className="promise-checks__step">
                    <ClipboardCheck size={16} aria-hidden="true" /> {t(claim.auditStep)}
                  </p>
                  <p className="promise-checks__limit">
                    <CircleAlert size={16} aria-hidden="true" /> {t(claim.limit)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="anatomy" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("THE SHAPE OF EVERY PUBLISHED CLAIM")}
            title={t("Five slots, and a sentence that cannot fill them is not published as a claim.")}
            text={t(
              "This is both the editorial rule and the fastest audit of it. Take any assertion on this site, try to fill in the five slots from what is on the page, and treat a slot you cannot fill as a finding.",
            )}
          />
          <ClaimAnatomyFigure />
          <ol className="claim-chain">
            {evidenceChain.map((step) => (
              <li key={step.field}>
                <div className="claim-chain__head">
                  <span dir="ltr">{step.number}</span>
                  <code dir="ltr">{step.field}</code>
                </div>
                <div>
                  <h3>{t(step.question)}</h3>
                  <p>{t(step.detail)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="reading-a-status" className="section section--navy math-anchor-section">
        <div className="shell">
          <SectionHeading
            light
            eyebrow={t("HOW TO READ A STATUS WITHOUT BEING MISLED")}
            title={t("Four rules, and the third one is where most misreadings happen.")}
            text={t(
              "These rules exist because the most likely way this site could mislead somebody is not a false statement. It is a true statement quoted without the scope that makes it true.",
            )}
          />
          <div className="status-rules">
            {statusRules.map((rule) => (
              <article key={rule.code}>
                <span dir="ltr">{rule.code}</span>
                <h3>{t(rule.rule)}</h3>
                <p>{t(rule.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="eight-questions" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("EIGHT QUESTIONS, ANSWERED AS THEY STAND")}
            title={t("The questions a reviewer opens with, and the answers as of this release.")}
            text={t(
              "Each answer is followed by the operation that would confirm or break it. If an answer and its check ever disagree, the check wins and the answer is the thing that has to change.",
            )}
          />
          <div className="audit-questions">
            {auditorQuestions.map((entry) => (
              <article key={entry.number}>
                <div className="audit-questions__headrow">
                  <span dir="ltr">{entry.number}</span>
                  <h3>{t(entry.question)}</h3>
                </div>
                <p className="audit-questions__answer">{t(entry.answerToday)}</p>
                <p className="audit-questions__check">
                  <ClipboardCheck size={16} aria-hidden="true" />
                  <span>
                    <b>{t("How to check it")}</b> {t(entry.howToCheck)}
                  </span>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reproduce" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("REPRODUCE IT YOURSELF IN FIVE STEPS")}
            title={t("Every step below has an expected result, so a disagreement lands on a specific line.")}
            text={t(
              "This is deliberately mechanical. A reviewer should be able to work through it without a conversation, and should end holding either five matches or one named mismatch.",
            )}
          />
          <div className="repro-steps">
            {reproductionSteps.map((step) => (
              <article key={step.number}>
                <span dir="ltr">{step.number}</span>
                <h3>{t(step.action)}</h3>
                <p>
                  <b>{t("Expected")}</b> {t(step.expected)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="limits" className="section section--dark math-anchor-section">
        <div className="shell">
          <SectionHeading
            light
            eyebrow={t("WHAT CANNOT BE ESTABLISHED FROM HERE")}
            title={t("Five sentences that a reviewer would otherwise have to discover by exhaustion.")}
            text={t("Each one is a real limit of this site rather than a limit of the underlying idea.")}
          />
          <ul className="not-claimed">
            {auditLimits.map((line) => (
              <li key={line}>
                <Ban size={17} aria-hidden="true" />
                {t(line)}
              </li>
            ))}
          </ul>
          <div className="theory-next__links comparison-next">
            <a href={href("/evidence")}>
              <span>{t("The published record")}</span>
              <strong>{t("Statuses, boundaries, and the release fingerprint")}</strong>
              <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            </a>
            <a href={href("/thinking")}>
              <span>{t("The mechanism being audited")}</span>
              <strong>{t("One decision, drawn stage by stage")}</strong>
              <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            </a>
            <a href={href("/math#academic-analysis")}>
              <span>{t("The formal statements")}</span>
              <strong>{t("Numbered definitions and proofs")}</strong>
              <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
