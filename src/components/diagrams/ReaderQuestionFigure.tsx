import { ArrowRight, Banknote, Gavel, ScrollText, Wrench } from "lucide-react";
import { useI18n } from "../../i18n/I18nContext";

const readers = [
  {
    id: "investor",
    icon: Banknote,
    who: "An investor",
    question: "What exists today, and what is still a plan?",
    answer: "The stage facts, the six risks, and the six-step diligence path",
    href: "/investors#state-of-play",
    cannot: "Any revenue, customer, pilot, or measured result — there are none to show.",
  },
  {
    id: "auditor",
    icon: ScrollText,
    who: "An auditor",
    question: "Which published values can I check myself, and how far does each check reach?",
    answer: "Four tiers of verifiability and five reproduction steps with expected results",
    href: "/audit#what-you-can-check",
    cannot: "Independence. Every check published here was run by the project on its own work.",
  },
  {
    id: "engineer",
    icon: Wrench,
    who: "An engineer",
    question: "What does the engine actually do on one input?",
    answer: "One episode in seven phases, with two lawful ways out of it",
    href: "/thinking#route",
    cannot: "A live engine. The site recomputes from published formulas; it does not execute the release.",
  },
  {
    id: "reviewer",
    icon: Gavel,
    who: "Someone signing off",
    question: "If this refused an action, what would I be handed?",
    answer: "The five slots every published claim has to fill, and the shape of a receipt",
    href: "/audit#anatomy",
    cannot: "A legal or regulatory opinion. The record is an engineering artefact, not an assurance.",
  },
] as const;

/**
 * The theory chapter is long, and most readers arrive with one question. This
 * routes each of them to the section that answers it, and states in the same
 * card the thing that section will not be able to give them.
 */
export function ReaderQuestionFigure() {
  const { href, t } = useI18n();

  return (
    <figure className="galo-figure galo-figure--readers">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("FOUR READERS, FOUR DIFFERENT QUESTIONS")}</span>
        <strong>{t("Find your question, then jump straight to the part that answers it.")}</strong>
        <span className="galo-figure__note">
          {t(
            "This chapter builds the mathematics in order, which is the right order for learning it and the wrong order for most people who open it. Each card below names a question, the section that answers it, and — in the same card — the thing that section cannot give you.",
          )}
        </span>
      </figcaption>

      <div className="galo-readers">
        {readers.map((reader) => (
          <article key={reader.id} className={`galo-readers__card is-${reader.id}`}>
            <header className="galo-readers__head">
              <reader.icon size={20} aria-hidden="true" />
              <span>{t(reader.who)}</span>
            </header>
            <h4>{t(reader.question)}</h4>
            <a className="galo-readers__link" href={href(reader.href)}>
              <span>{t(reader.answer)}</span>
              <ArrowRight className="directional-icon" size={16} aria-hidden="true" />
            </a>
            <p className="galo-readers__cannot">
              <b>{t("What it will not give you")}</b>
              {t(reader.cannot)}
            </p>
          </article>
        ))}
      </div>
    </figure>
  );
}
