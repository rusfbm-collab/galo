import { useId } from "react";
import { useI18n } from "../../i18n/I18nContext";
import { provableParts, provableTerminal } from "../../content/homeNarrative";

/**
 * What the headline word actually consists of.
 *
 * The home page used to take the headline apart into three words — allowed,
 * decide, show — which stopped matching the headline when it changed. This
 * takes apart the word that is actually in it, and it does so as one package
 * rather than four boxes: the point of a provable decision is that it can be
 * handed to an engineer, an auditor or a counterparty in one piece.
 *
 * The terminal outcome is a strip under the four parts rather than a fifth
 * part, because it is a property of the route rather than another thing the
 * package contains.
 */
export function ProvableDecisionFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();

  const equivalent = `${t("A decision record holds four named parts.")} ${provableParts
    .map((part, index) => `${index + 1}. ${t(part.name)} — ${t(part.question)}`)
    .join(" ")} ${t(provableTerminal)}`;

  return (
    <figure className="provable" aria-labelledby={titleId} aria-describedby={descriptionId}>
      <figcaption className="provable__caption">
        <span className="provable__eyebrow">{t("WHAT “PROVABLE” MEANS HERE")}</span>
        <strong id={titleId}>{t("One decision record, four parts, handed over as a package.")}</strong>
      </figcaption>

      <div className="provable__package">
        <p className="provable__package-tag" dir="ltr">
          {t("DECISION RECORD")}
        </p>
        <ol className="provable__parts">
          {provableParts.map((part, index) => (
            <li key={part.name}>
              <span className="provable__index" dir="ltr">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <strong>{t(part.name)}</strong>
                <p className="provable__question">{t(part.question)}</p>
                <p className="provable__detail">{t(part.detail)}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="provable__terminal">{t(provableTerminal)}</p>
      </div>

      <p className="sr-only" id={descriptionId}>
        {equivalent}
      </p>
    </figure>
  );
}
