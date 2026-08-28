import { useId } from "react";
import { denominatorRule, denominatorWorked, denominators } from "../../content/verdictLaw";
import { useI18n } from "../../i18n/I18nContext";

/**
 * Four metrics that all look like accuracy and are not.
 *
 * A system allowed to refuse can raise its score by answering less, so the
 * denominator is the whole argument and it is usually the part left out. Each
 * card therefore leads with what the number is divided by, before it says what
 * the number means — and carries the specific misreading it invites, because
 * naming the misreading is more use to a sceptical reader than a definition.
 *
 * The worked case underneath is the one that matters: a benchmark answered
 * nowhere reports zero twice and nothing in between, and the internal ranking
 * on those same rows is exactly what must not be published in its place.
 */
export function DenominatorFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();

  const equivalent = `${denominators
    .map((entry) => `${t(entry.metric)}: ${t("over")} ${t(entry.over)}. ${t(entry.says)}`)
    .join(" ")} ${t(denominatorRule)}`;

  return (
    <figure className="denominators" aria-labelledby={titleId} aria-describedby={descriptionId}>
      <figcaption className="denominators__caption">
        <span className="denominators__eyebrow">{t("READ THE DENOMINATOR FIRST")}</span>
        <strong id={titleId}>{t("Four numbers that all look like accuracy, over four different sets.")}</strong>
      </figcaption>

      <div className="denominators__grid">
        {denominators.map((entry) => (
          <article key={entry.metric}>
            <h4>{t(entry.metric)}</h4>
            <p className="denominators__over">
              <span>{t("Divided by")}</span> {t(entry.over)}
            </p>
            <p className="denominators__says">{t(entry.says)}</p>
            <p className="denominators__misread">
              <span>{t("Misread as")}</span> {t(entry.misreadAs)}
            </p>
          </article>
        ))}
      </div>

      <p className="denominators__rule">{t(denominatorRule)}</p>
      <p className="denominators__worked">{t(denominatorWorked)}</p>

      <p className="sr-only" id={descriptionId}>
        {equivalent}
      </p>
    </figure>
  );
}
