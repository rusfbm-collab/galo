import { twoWaysToDecide } from "../../content/aiBasics";
import { useI18n } from "../../i18n/I18nContext";

/**
 * The difference in three steps, with no vocabulary on either side. The left
 * column describes how ordinary AI systems are built — never how well they
 * work, which is a claim this project has not measured and does not make.
 */
export function TwoWaysToDecideFigure() {
  const { t } = useI18n();

  return (
    <figure className="galo-figure galo-figure--two-ways">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("THE SAME THREE STEPS, TWO DIFFERENT WAYS")}</span>
        <strong>{t("Where the answer comes from, and what is left over afterwards.")}</strong>
        <span className="galo-figure__note">
          {t(
            "Read the left column first — that is how nearly every AI system you have heard of is put together. The right column is the same three steps done differently. Neither column says anything about which gives better answers.",
          )}
        </span>
      </figcaption>

      <div className="two-ways">
        <div className="two-ways__head">
          <span className="is-usual">{t("The usual way")}</span>
          <span className="is-here">{t("The way here")}</span>
        </div>
        {twoWaysToDecide.map((step) => (
          <div className="two-ways__row" key={step.number}>
            <span className="two-ways__number" dir="ltr">
              {step.number}
            </span>
            <p className="two-ways__usual">{t(step.usual)}</p>
            <p className="two-ways__here">{t(step.here)}</p>
          </div>
        ))}
      </div>

      <p className="galo-figure__note galo-figure__note--boundary">
        {t(
          "The left column is not a criticism. Building things that way is how the useful AI of the last few years got built, and it does things the right column cannot do at all.",
        )}
      </p>
    </figure>
  );
}
