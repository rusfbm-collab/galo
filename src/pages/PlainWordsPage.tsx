import { ArrowLeft, ArrowRight, Coffee, HandHeart, Train } from "lucide-react";
import { DecisionTraceFigure } from "../components/diagrams/DecisionTraceFigure";
import { FamiliarTableBridgeFigure } from "../components/diagrams/FamiliarTableBridgeFigure";
import { PageShell } from "../components/layout/PageShell";
import { SectionHeading } from "../components/ui/SectionHeading";
import {
  honestAdmissions,
  jargonTranslations,
  openingStory,
  plainIdea,
  timetableComparison,
  whatChanges,
} from "../content/plainWords";
import { useI18n } from "../i18n/I18nContext";

const contents = [
  { href: "#story", label: "A situation you already know" },
  { href: "#idea", label: "What we actually do about it" },
  { href: "#table", label: "Why a table, of all things" },
  { href: "#changes", label: "What that buys you" },
  { href: "#honest", label: "What we would rather tell you ourselves" },
  { href: "#jargon", label: "The words, translated" },
] as const;

export function PlainWordsPage() {
  const { href, t } = useI18n();

  return (
    <PageShell>
      <section className="page-hero page-hero--plain">
        <div className="shell">
          <a className="back-link" href={href("/")}>
            <ArrowLeft className="directional-icon" size={16} aria-hidden="true" /> {t("Home")}
          </a>
          <p className="eyebrow eyebrow--cyan">{t("NO JARGON · TEN MINUTES · NOTHING TO KNOW IN ADVANCE")}</p>
          <h1>{t("What we do, said the way you would say it to a friend.")}</h1>
          <p>
            {t(
              "The rest of this site is written for specialists, and it shows. This page is not. There is no formula on it, no term you are expected to already know, and if a word needs explaining it gets explained right where it appears.",
            )}
          </p>
          <div className="plain-hero__note">
            <Coffee size={20} aria-hidden="true" />
            <span>
              {t(
                "Read it start to finish and you will know what this is, what already works, and what we cannot yet promise. That is the whole point of the page.",
              )}
            </span>
          </div>
        </div>
      </section>

      <nav className="math-contents" aria-label={t("Plain-words chapter navigation")}>
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

      <section id="story" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("START WITH SOMETHING FAMILIAR")}
            title={t("A program decided something about you. Later, nobody could say why.")}
            text={t(
              "Most people have been on one side of this, usually the annoying side. Read the four steps below and you will already know what we are trying to fix.",
            )}
          />
          <ol className="plain-story">
            {openingStory.map((beat) => (
              <li key={beat.number}>
                <span dir="ltr">{beat.number}</span>
                <div>
                  <h3>{t(beat.line)}</h3>
                  <p>{t(beat.detail)}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="plain-punchline">
            {t(
              "That gap at the end — where an honest person genuinely cannot answer a fair question — is the thing this project is about. Not making programs smarter. Making them able to account for themselves afterwards.",
            )}
          </p>
          <DecisionTraceFigure />
        </div>
      </section>

      <section id="idea" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("THE IDEA, IN THREE SENTENCES")}
            title={t("Write down the options first. Then you can only pick from them.")}
            text={t(
              "That is genuinely the whole idea. Everything else on this site — the tables, the counts, the proofs — exists to make those three sentences actually true rather than merely promised.",
            )}
          />
          <div className="plain-idea">
            {plainIdea.map((entry, index) => (
              <article key={entry.title}>
                <span dir="ltr">{String(index + 1).padStart(2, "0")}</span>
                <h3>{t(entry.title)}</h3>
                <p>{t(entry.text)}</p>
              </article>
            ))}
          </div>

          <div className="plain-analogy">
            <Train size={22} aria-hidden="true" />
            <div>
              <h3>{t("It is the difference between asking a well-travelled friend and reading the timetable")}</h3>
              <div className="plain-analogy__pair">
                <p>
                  <strong>{t(timetableComparison.everyday)}</strong>
                  <span>{t(timetableComparison.everydayText)}</span>
                </p>
                <p className="is-ours">
                  <strong>{t(timetableComparison.ours)}</strong>
                  <span>{t(timetableComparison.oursText)}</span>
                </p>
              </div>
              <p className="plain-analogy__foot">
                {t(
                  "Neither one is stupid. You want the friend when you are exploring a new city, and the timetable when you have to be somewhere and explain later why you were late.",
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="table" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("WHY A TABLE, OF ALL THINGS")}
            title={t("Because you already know how to read one, and so does everyone else.")}
            text={t(
              "When people hear that the whole thing rests on a table, they assume something is being simplified for their benefit. It is not. The table really is the foundation, and you learned how to use one at about the age of eight.",
            )}
          />
          <FamiliarTableBridgeFigure />
          <p className="plain-punchline">
            {t(
              "The one on the right is not more advanced. It is the same idea with different labels in the boxes — and because every box is filled in beforehand, there is no situation it can be caught out by.",
            )}
          </p>
        </div>
      </section>

      <section id="changes" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("WHAT THAT BUYS YOU")}
            title={t("Three things become possible that usually are not.")}
            text={t("None of them is exciting on its own. Together they are the reason to bother.")}
          />
          <div className="plain-changes">
            {whatChanges.map((entry, index) => (
              <article key={entry.title}>
                <span dir="ltr">{String(index + 1).padStart(2, "0")}</span>
                <h3>{t(entry.title)}</h3>
                <p>{t(entry.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="honest" className="section section--navy math-anchor-section">
        <div className="shell">
          <SectionHeading
            light
            eyebrow={t("BEFORE YOU GET EXCITED")}
            title={t("Five things we would rather you heard from us than found out later.")}
            text={t(
              "Every one of these is a real limitation, written the way we would say it across a table. If any of them changes, it changes on the evidence page first.",
            )}
          />
          <div className="plain-honest">
            {honestAdmissions.map((entry) => (
              <article key={entry.line}>
                <HandHeart size={19} aria-hidden="true" />
                <div>
                  <h3>{t(entry.line)}</h3>
                  <p>{t(entry.detail)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="jargon" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("THE WORDS, TRANSLATED")}
            title={t("If you carry on to the rest of the site, keep this list open.")}
            text={t(
              "These ten words do most of the damage. On the left is what the other pages say; on the right is what it actually means.",
            )}
          />
          <dl className="plain-jargon">
            {jargonTranslations.map((entry) => (
              <div key={entry.jargon}>
                <dt>{t(entry.jargon)}</dt>
                <dd>{t(entry.plain)}</dd>
              </div>
            ))}
          </dl>

          <div className="theory-next__links comparison-next plain-next">
            <a href={href("/investors")}>
              <span>{t("If you are weighing it up")}</span>
              <strong>{t("What exists, what does not, and how to check")}</strong>
              <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            </a>
            <a href={href("/thinking")}>
              <span>{t("If you want to see it work")}</span>
              <strong>{t("One decision, drawn stage by stage")}</strong>
              <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            </a>
            <a href={href("/vs-llm")}>
              <span>{t("If you are wondering about chatbots")}</span>
              <strong>{t("How this differs from a language model")}</strong>
              <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
