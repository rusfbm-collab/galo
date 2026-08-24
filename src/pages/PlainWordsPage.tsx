import { ArrowLeft, ArrowRight, Check, Coffee, MessageSquareOff, NotebookPen, Signpost, X } from "lucide-react";
import { DecisionTraceFigure } from "../components/diagrams/DecisionTraceFigure";
import { FamiliarTableBridgeFigure } from "../components/diagrams/FamiliarTableBridgeFigure";
import { TwoWaysToDecideFigure } from "../components/diagrams/TwoWaysToDecideFigure";
import { PageShell } from "../components/layout/PageShell";
import { PageContents } from "../components/ui/PageContents";
import { SectionHeading } from "../components/ui/SectionHeading";
import { aiWords, notWhatYouThink } from "../content/aiBasics";
import {
  fromTheList,
  inShort,
  jargonTranslations,
  neighbourNotes,
  notChatbot,
  openingStory,
  plainIdea,
  usualVsHere,
  usualVsHereChange,
  whatThereIs,
  whatThereIsNot,
} from "../content/plainWords";
import { useI18n } from "../i18n/I18nContext";

const contents = [
  { href: "#story", label: "A situation you already know" },
  { href: "#idea", label: "What GALO does" },
  { href: "#usual", label: "How it usually goes, and how it goes here" },
  { href: "#not-chatbot", label: "This is not a chatbot" },
  { href: "#neighbours", label: "What it sits next to" },
  { href: "#from-the-list", label: "Why only from the list" },
  { href: "#table", label: "Why a table, of all things" },
  { href: "#honest", label: "What there is, and what there is not" },
  { href: "#in-short", label: "If you want it very short" },
  { href: "#not-ai", label: "If AI is not your field at all" },
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
          <h1>
            {t(
              "Sometimes what matters after a decision is not the answer, but being able to show calmly why it counted as permitted at the time.",
            )}
          </h1>
          <p>
            {t(
              "No formulas here and no special words. In ten minutes: what this is, what it is not, what already works, and what we are not promising yet.",
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

      <section id="story" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("AN ORDINARY STORY")}
            title={t("Picture a work situation you already know.")}
            text={t(
              "Nothing exotic happens in it. Something changes, work carries on, and the awkward question arrives a month later.",
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
          <DecisionTraceFigure />
        </div>
      </section>

      <section id="idea" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("WHAT GALO DOES")}
            title={t("Put simply, three things.")}
            text={t(
              "Everything else on this site — the tables, the counts, the proofs — exists to make these three actually true rather than merely promised.",
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
        </div>
      </section>

      <section id="usual" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("HOW IT USUALLY GOES, AND HOW IT GOES HERE")}
            title={t("One learns by changing hidden numbers. This one has no numbers to change.")}
            text={t(
              "Neither column is a verdict on the other. They are two ways of arriving at an answer, and the thing each one keeps along the way is what makes them different afterwards.",
            )}
          />
          <div className="usual-here">
            {usualVsHere.map((entry) => (
              <article key={entry.label} className={entry.label === "Here" ? "is-ours" : undefined}>
                <h3>{t(entry.label)}</h3>
                <p>{t(entry.text)}</p>
              </article>
            ))}
          </div>
          <p className="plain-punchline">{t(usualVsHereChange)}</p>
        </div>
      </section>

      <section id="not-chatbot" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("THIS IS NOT A CHATBOT")}
            title={t("It gets along with one perfectly well. It is doing a different job.")}
          />
          <div className="not-chatbot">
            {notChatbot.map((line) => (
              <p key={line}>{t(line)}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="neighbours" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("WHAT IT SITS NEXT TO")}
            title={t("Other people have been at this for a long time, and some of them are further along.")}
            text={t(
              "A page like this usually skips the neighbours, which is how a reader ends up thinking nobody else has had the idea. Four of them, then, in ordinary words.",
            )}
          />
          <div className="plain-neighbours">
            {neighbourNotes.map((entry) => (
              <article key={entry.neighbour}>
                <Signpost size={19} aria-hidden="true" />
                <h3>{t(entry.neighbour)}</h3>
                <p>{t(entry.text)}</p>
              </article>
            ))}
          </div>
          <p className="section-followup">
            <a className="text-link" href={href("/vs-llm#classes")}>
              {t("The same comparison in full, with thirteen families named")}{" "}
              <ArrowRight className="directional-icon" size={16} aria-hidden="true" />
            </a>
          </p>
        </div>
      </section>

      <section id="from-the-list" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("WHY ONLY FROM THE LIST")}
            title={t("Picture a notebook with every permitted action already written in it.")}
          />
          <div className="from-list">
            <NotebookPen size={24} aria-hidden="true" />
            <div>
              {fromTheList.map((line) => (
                <p key={line}>{t(line)}</p>
              ))}
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

      <section id="honest" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("WHAT THERE IS, AND WHAT THERE IS NOT")}
            title={t("Both lists, side by side, with nothing moved between them.")}
            text={t(
              "This is the part most sites leave out, so it is written down rather than left for you to work out from what is missing.",
            )}
          />
          <div className="have-not">
            <div className="have-not__column">
              <h3>
                <Check size={18} aria-hidden="true" /> {t("There already is")}
              </h3>
              <ul>
                {whatThereIs.map((entry) => (
                  <li key={entry.line}>
                    <strong>{t(entry.line)}</strong>
                    <span>{t(entry.detail)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="have-not__column is-not">
              <h3>
                <X size={18} aria-hidden="true" /> {t("There is not yet")}
              </h3>
              <ul>
                {whatThereIsNot.map((entry) => (
                  <li key={entry.line}>
                    <strong>{t(entry.line)}</strong>
                    <span>{t(entry.detail)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="in-short" className="section section--navy math-anchor-section">
        <div className="shell">
          <SectionHeading
            light
            eyebrow={t("IF YOU WANT IT VERY SHORT")}
            title={t("The whole page in three sentences.")}
          />
          <div className="in-short">
            {inShort.map((line) => (
              <p key={line}>{t(line)}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="not-ai" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("IF AI IS NOT YOUR FIELD AT ALL")}
            title={t("You do not need to know anything about artificial intelligence to read this page.")}
            text={t(
              "Most people meet AI as a chat window that answers questions. That is one kind, and it is not this. Here are the four things a reader usually assumes on arriving, and what is actually true.",
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
          <div className="plain-ai-words">
            {aiWords.map((entry) => (
              <article key={entry.word}>
                <h3>{t(entry.word)}</h3>
                <p>{t(entry.plain)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="jargon" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("THE WORDS, TRANSLATED")}
            title={t("If you carry on to the rest of the site, keep this list open.")}
            text={t("These ten words do most of the damage. The site's word first, then what it actually means.")}
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
            <a href={href("/industry")}>
              <span>{t("If you are looking at this from the production side")}</span>
              <strong>{t("Industry")}</strong>
              <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            </a>
            <a href={href("/evidence")}>
              <span>{t("If you want hard numbers and checks")}</span>
              <strong>{t("Evidence")}</strong>
              <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            </a>
            <a href={href("/vs-llm")}>
              <span>{t("If you want to compare it with other approaches")}</span>
              <strong>{t("Comparison")}</strong>
              <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
