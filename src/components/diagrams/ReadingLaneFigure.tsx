import { useI18n } from "../../i18n/I18nContext";

const stops = [
  {
    maths: "One finite table",
    business: "Everything published traces back to an object that fits on a page.",
  },
  {
    maths: "Positions carry names",
    business: "A status is one declared name, not a paragraph somebody has to interpret.",
  },
  {
    maths: "One row resets",
    business: "A refusal holds for the rest of the chain instead of being re-argued at each step.",
  },
  {
    maths: "560 counted coordinates",
    business: "Checking the index is a finite reading task rather than a sampling exercise.",
  },
  {
    maths: "Limits stated in the same sentence",
    business: "What is not proven is written down rather than left out.",
  },
] as const;

/**
 * The chapter has two readings running in parallel: the mathematics, and what
 * that mathematics decides for somebody who will never open it. A reader who
 * only needs the lower lane should be able to follow it end to end.
 */
export function ReadingLaneFigure() {
  const { t } = useI18n();

  return (
    <figure className="galo-figure galo-figure--lanes">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("TWO WAYS TO READ THE SAME CHAPTER")}</span>
        <strong>{t("Every mathematical fact below has a second reading that needs no mathematics.")}</strong>
        <span className="galo-figure__note">
          {t(
            "The upper lane is what the chapter proves. The lower lane is what that same fact decides for somebody funding, buying, or signing off on a system. Follow whichever lane you need — the five stops are the same either way.",
          )}
        </span>
      </figcaption>

      <div className="galo-lanes">
        <p className="galo-lanes__lane">{t("what the chapter proves")}</p>
        <ol className="galo-lanes__row is-maths">
          {stops.map((stop, index) => (
            <li key={stop.maths}>
              <span className="galo-lanes__index" dir="ltr">
                {String(index + 1).padStart(2, "0")}
              </span>
              <strong>{t(stop.maths)}</strong>
            </li>
          ))}
        </ol>

        <p className="galo-lanes__lane is-business">{t("what it decides for a buyer")}</p>
        <ol className="galo-lanes__row is-business">
          {stops.map((stop, index) => (
            <li key={stop.business}>
              <span className="galo-lanes__index" dir="ltr">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{t(stop.business)}</span>
            </li>
          ))}
        </ol>
      </div>

      <p className="galo-figure__note galo-figure__note--boundary">
        {t(
          "The lower lane says what the property would decide wherever a layer of this shape were deployed. Nothing has been deployed, so none of it reports a result.",
        )}
      </p>
    </figure>
  );
}
