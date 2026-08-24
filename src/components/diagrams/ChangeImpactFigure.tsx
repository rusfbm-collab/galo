import { useId, useState } from "react";
import { CircleAlert } from "lucide-react";
import { useI18n } from "../../i18n/I18nContext";
import { changeCases, changeIllustrative } from "../../content/homeNarrative";

/**
 * The value of the whole architecture, shown on one workflow.
 *
 * A reader who has understood "explicit state" still has to be told why they
 * should care, and this is the answer: when a record moves, the affected
 * conclusions can be named instead of guessed at, and the unaffected ones can be
 * left alone instead of re-run out of caution.
 *
 * Deliberately not drawn as a node-and-edge graph. GALO's Atlas is a versioned
 * fabric of typed records, and drawing it as a semantic network would teach the
 * wrong object — so the figure is made of versioned cards, an affected column
 * and an untouched column, and one named outcome.
 *
 * The three switches are ordinary buttons in a tab pattern: keyboard reachable,
 * no hover-only content, no animation to suppress under reduced motion.
 */
export function ChangeImpactFigure() {
  const { t } = useI18n();
  const [active, setActive] = useState(0);
  const baseId = useId();
  const titleId = useId();
  const descriptionId = useId();

  const current = changeCases[active] ?? changeCases[0]!;

  const equivalent = changeCases
    .map(
      (entry) =>
        `${t(entry.trigger)}: ${t(entry.sourceName)} ${entry.sourceVersion}. ${t("Affected")}: ${entry.affected
          .map((item) => t(item))
          .join(", ")}. ${t("Not affected")}: ${entry.untouched.map((item) => t(item)).join(", ")}. ${t(
          entry.outcome,
        )} — ${t(entry.outcomeDetail)}`,
    )
    .join(" ");

  return (
    <figure className="change-impact" aria-labelledby={titleId} aria-describedby={descriptionId}>
      <figcaption className="change-impact__caption">
        <span className="change-impact__flag">{t(changeIllustrative)}</span>
        <strong id={titleId}>{t("One record moves. Three things can follow.")}</strong>
      </figcaption>

      <div className="change-impact__switch" role="tablist" aria-label={t("What changed")}>
        {changeCases.map((entry, index) => (
          <button
            key={entry.trigger}
            type="button"
            role="tab"
            id={`${baseId}-tab-${index}`}
            aria-selected={index === active}
            aria-controls={`${baseId}-panel-${index}`}
            tabIndex={index === active ? 0 : -1}
            className={index === active ? "is-active" : undefined}
            onClick={() => setActive(index)}
            onKeyDown={(event) => {
              if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
              event.preventDefault();
              const step = event.key === "ArrowRight" ? 1 : -1;
              const next = (active + step + changeCases.length) % changeCases.length;
              setActive(next);
              document.getElementById(`${baseId}-tab-${next}`)?.focus();
            }}
          >
            {t(entry.trigger)}
          </button>
        ))}
      </div>

      <div
        className="change-impact__panel"
        role="tabpanel"
        id={`${baseId}-panel-${active}`}
        aria-labelledby={`${baseId}-tab-${active}`}
      >
        <div className="change-impact__source">
          <span>{t("What moved")}</span>
          <strong>
            {t(current.sourceName)}{" "}
            <span className="change-impact__version" dir="ltr">
              {current.sourceVersion}
            </span>
          </strong>
        </div>

        <div className="change-impact__split">
          <div className="change-impact__column is-affected">
            <p className="change-impact__column-head">{t("Affected")}</p>
            <ul>
              {current.affected.map((item) => (
                <li key={item}>{t(item)}</li>
              ))}
            </ul>
          </div>
          <div className="change-impact__column">
            <p className="change-impact__column-head">{t("Not affected")}</p>
            <ul>
              {current.untouched.map((item) => (
                <li key={item}>{t(item)}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`change-impact__outcome is-${current.outcome.toLowerCase().replace(/\s+/g, "-")}`}>
          <span className="change-impact__outcome-tag" dir="ltr">
            {t(current.outcome)}
          </span>
          <p>{t(current.outcomeDetail)}</p>
        </div>
      </div>

      <p className="change-impact__note">
        <CircleAlert size={15} aria-hidden="true" />
        <span>
          {t(
            "Only the affected frames and routes are replayed. Everything the change did not reach keeps the version it already had.",
          )}
        </span>
      </p>
      <p className="sr-only" id={descriptionId}>
        {equivalent}
      </p>
    </figure>
  );
}
