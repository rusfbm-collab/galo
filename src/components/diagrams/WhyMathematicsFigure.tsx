import { ArrowDown, Ban } from "lucide-react";
import { mathematicsBridge } from "../../content/orientation";
import { useI18n } from "../../i18n/I18nContext";

/**
 * The step nobody explains: how a question about accountability turns into a
 * grid of letters. Each step is forced by the one above it, and each names the
 * ordinary-looking alternative that fails, so the mathematics arrives as a
 * consequence rather than as a preference.
 */
export function WhyMathematicsFigure() {
  const { t } = useI18n();

  return (
    <figure className="galo-figure galo-figure--bridge-steps">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("HOW A QUESTION TURNS INTO A TABLE")}</span>
        <strong>{t("Four steps from “why did it do that?” to a grid of letters.")}</strong>
        <span className="galo-figure__note">
          {t(
            "The mathematics on this site is not a preference. It is what is left after four requirements, each of which rules out the obvious alternative. If you disagree with a step, you have found the exact place where you would disagree with the whole project.",
          )}
        </span>
      </figcaption>

      <ol className="galo-bridge-steps">
        {mathematicsBridge.map((step, index) => (
          <li key={step.number}>
            <div className="galo-bridge-steps__marker">
              <span dir="ltr">{step.number}</span>
              {index < mathematicsBridge.length - 1 && <ArrowDown size={16} aria-hidden="true" />}
            </div>
            <div className="galo-bridge-steps__body">
              <h4>{t(step.need)}</h4>
              <p>{t(step.follows)}</p>
              <p className="galo-bridge-steps__instead">
                <Ban size={15} aria-hidden="true" />
                <span>
                  <b>{t("Instead of")}</b>
                  {t(step.insteadOf)}
                </span>
              </p>
            </div>
          </li>
        ))}
      </ol>

      <p className="galo-figure__note galo-figure__note--boundary">
        {t(
          "Nothing above says the table is a good answer, only that it is the shape an answer has to have. Whether this particular table is useful for any particular job is a separate question, and this site does not claim to have settled it.",
        )}
      </p>
    </figure>
  );
}
