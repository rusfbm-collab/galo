import { ArrowLeft, ArrowRight, Coffee, HandHeart, MessageSquareOff, Signpost, Train } from "lucide-react";
import { DecisionTraceFigure } from "../components/diagrams/DecisionTraceFigure";
import { TwoWaysToDecideFigure } from "../components/diagrams/TwoWaysToDecideFigure";
import { FamiliarTableBridgeFigure } from "../components/diagrams/FamiliarTableBridgeFigure";
import { PageShell } from "../components/layout/PageShell";
import { PageContents } from "../components/ui/PageContents";
import { SectionHeading } from "../components/ui/SectionHeading";
import { aiWords, notWhatYouThink } from "../content/aiBasics";
import {
  honestAdmissions,
  jargonTranslations,
  openingStory,
  plainIdea,
  timetableComparison,
  whatChanges,
} from "../content/plainWords";
import { plainNeighbours } from "../content/landscape";
import { useI18n } from "../i18n/I18nContext";

const contents = [
  { href: "#not-ai", label: "If you do not work with AI at all" },
  { href: "#neighbours", label: "Three things this sits next to" },
  { href: "#story", label: "A situation you already know" },
  { href: "#idea", label: "What we actually do about it" },
  { href: "#table", label: "Why a table, of all things" },
  { href: "#changes", label: "What that buys you" },
  { href: "#honest", label: "What we would rather tell you ourselves" },
  { href: "#ai-words", label: "The AI words everyone uses" },
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

      <PageContents label="On this page" ariaLabel="Plain-words chapter navigation" items={contents} />

      <section id="not-ai" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("START HERE IF AI IS NOT YOUR FIELD")}
            title={t("You do not need to know anything about artificial intelligence to read this page.")}
            text={t(
              "Most people meet AI as a chat window that answers questions. That is one kind, and it is not this. Before anything else, here are the four things a reader usually assumes on arriving, and what is actually true.",
            )}
          />
          <div className="plain-misconceptions">
            {notWhatYouThink.map((entry) => (
              <article key={entry.assumption}>
                <MessageSquareOff size={19} aria-hidden="true" />
                <p className="plain-misconceptions__assumption">{t(entry.assumption)}</p>
                <p className="plain-misconceptions__reality">{t(entry.reality)}</p>
              </article>
            ))}
          </div>
          <TwoWaysToDecideFigure />
        </div>
      </section>

      <section id="neighbours" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("THREE THINGS THIS SITS NEXT TO")}
            title={t("Other people have been at this for a long time, and some of them are further along.")}
            text={t(
              "A page like this usually skips the neighbours, which is how a reader ends up thinking nobody else has had the idea. Three of them, then, in ordinary words — and the middle one is the awkward one, so it is the one worth reading twice.",
            )}
          />
          <div className="plain-neighbours">
            {plainNeighbours.map((entry) => (
              <article key={entry.what}>
                <Signpost size={19} aria-hidden="true" />
                <h3>{t(entry.what)}</h3>
                <p>{t(entry.plain)}</p>
              </article>
            ))}
          </div>
          <p className="section-followup">
            <a className="text-link" href={href("/vs-llm#landscape")}>
              {t("The same comparison in full, with nine families named")}{" "}
              <ArrowRight className="directional-icon" size={16} aria-hidden="true" />
            </a>
          </p>
        </div>
      </section>

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

      <section id="ai-words" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("THE AI WORDS EVERYONE USES")}
            title={t("Twelve words from the AI world, each in one sentence.")}
            text={t(
              "These are not our words — they belong to the whole industry, and every article you read uses them as though you already know them. Each one below gets a plain sentence and a note on why it turns up here at all.",
            )}
          />
          <div className="plain-aiwords">
            {aiWords.map((entry) => (
              <article key={entry.word}>
                <h3>{t(entry.word)}</h3>
                <p>{t(entry.plain)}</p>
                <p className="plain-aiwords__why">
                  <b>{t("Why it turns up here")}</b>
                  {t(entry.whyHere)}
                </p>
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
