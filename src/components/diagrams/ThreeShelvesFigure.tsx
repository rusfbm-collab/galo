import { CircleAlert, CircleCheck, CircleDashed } from "lucide-react";
import { useI18n } from "../../i18n/I18nContext";

const shelves = [
  {
    id: "formal",
    icon: CircleCheck,
    tag: "FORMAL",
    title: "Proved, and re-derived by the tests on every build",
    question: "Does the mathematics say what the site says it says?",
    items: [
      "P0 is the unique left zero and unique right-neutral element of STAR for every level above one",
      "560 oriented typed transition coordinates, obtained by counting each level and adding",
      "A zero homomorphism exists between every pair of levels, so no pair is unreachable",
      "Lawful relabellings per level are counted by Euler's totient, and the count does not grow",
    ],
  },
  {
    id: "current",
    icon: CircleDashed,
    tag: "CURRENT V4",
    title: "Observed in the release that exists today",
    question: "What does the shipped engine actually do?",
    items: [
      "2,275 evaluation receipts across three public corpora, one for every row, answered or refused",
      "A deterministic ranking over a closed set of possible answers, in a hash-derived order",
      "Stored release evidence; fresh FULL was not run",
      "Atlas semantic reads, rank effects, and learning writes are all zero",
    ],
  },
  {
    id: "target",
    icon: CircleAlert,
    tag: "TARGET",
    title: "Still ahead of the release",
    question: "What would have to be true for the plan to hold?",
    items: [
      "Persistent policy learning inside this release: NOT STARTED",
      "Partner-controlled validity: NOT PROVEN, and it is the next required step",
      "External operational gain has not been measured, in any deployment, by anyone",
      "Sequencing, rollback, and revocation evidence is process-local rather than persistent",
    ],
  },
] as const;

/**
 * The single distinction an investor most needs and is least often given: which
 * statements are theorems, which are properties of the artefact that exists, and
 * which are plans. Nothing on one shelf carries across to another.
 */
export function ThreeShelvesFigure() {
  const { t } = useI18n();

  return (
    <figure className="galo-figure galo-figure--shelves">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("THREE SHELVES, AND NOTHING CARRIES BETWEEN THEM")}</span>
        <strong>{t("Proved, running today, and merely written down are three different things.")}</strong>
        <span className="galo-figure__note">
          {t(
            "Most of the confusion this site has to avoid comes from one move: letting a theorem stand in for a running system, or a running system stand in for a plan. Every statement published here is placed on exactly one of the three shelves below, and the placement is part of the statement.",
          )}
        </span>
      </figcaption>

      <div className="galo-shelves">
        {shelves.map((shelf) => (
          <article key={shelf.id} className={`galo-shelves__shelf is-${shelf.id}`}>
            <header className="galo-shelves__head">
              <shelf.icon size={20} aria-hidden="true" />
              <span className="galo-shelves__tag" dir="ltr">
                {shelf.tag}
              </span>
            </header>
            <h4>{t(shelf.title)}</h4>
            <p className="galo-shelves__question">{t(shelf.question)}</p>
            <ul>
              {shelf.items.map((item) => (
                <li key={item}>{t(item)}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <p className="galo-figure__note galo-figure__note--boundary">
        {t(
          "A reader who takes one line from the first shelf and reads it as a property of the third has been misled, and this site treats that as its own error rather than the reader's.",
        )}
      </p>
    </figure>
  );
}
