import { useId } from "react";
import { useI18n } from "../../i18n/I18nContext";
import {
  boundaryCauses,
  verdictBoundaryLine,
  verdictFailClosed,
  verdictLawLine,
  verdictStages,
} from "../../content/verdictLaw";

/**
 * The three-condition law, drawn as one chain and one wall.
 *
 * The temptation with this picture is to draw four boxes and an arrow, which
 * would say that each stage hands its work to the next and the last one signs.
 * That is not what happens: the stages accumulate authority, and the signature
 * is a conjunction of all of them. So the stages are a numbered chain and the
 * verdict sits underneath as a single line with the boundary beside it — an
 * answer and a refusal leaving from the same place, which is the honest shape.
 *
 * HTML rather than SVG throughout: these labels are sentences, they translate
 * into four languages, and SVG text does not wrap.
 */
export function VerdictConjunctionFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();

  const equivalent = `${t(verdictLawLine)}. ${verdictStages
    .map((stage) => `${stage.number}. ${t(stage.name)} — ${t(stage.does)}`)
    .join(" ")} ${t(verdictBoundaryLine)} ${boundaryCauses.map((entry) => t(entry.cause)).join("; ")}.`;

  return (
    <figure className="verdict" aria-labelledby={titleId} aria-describedby={descriptionId}>
      <figcaption className="verdict__caption">
        <span className="verdict__eyebrow">{t("THE LAW OF A PUBLISHED ANSWER")}</span>
        <strong id={titleId}>{t("One proposal, then three conditions on it. Only the conjunction may sign.")}</strong>
      </figcaption>

      <ol className="verdict__stages">
        {verdictStages.map((stage) => (
          <li key={stage.name}>
            <span className="verdict__number" dir="ltr">
              {stage.number}
            </span>
            <div>
              <strong>{t(stage.name)}</strong>
              <p className="verdict__does">{t(stage.does)}</p>
              <p className="verdict__prevents">
                <span>{t("Without it")}</span> {t(stage.prevents)}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <p className="verdict__law">{t(verdictLawLine)}</p>

      <div className="verdict__outcomes">
        <div className="verdict__outcome is-answer">
          <span className="verdict__tag" dir="ltr">
            {t("ANSWER")}
          </span>
          <p>{t("All four held. The prediction, its ranking and its record are published together.")}</p>
        </div>
        <div className="verdict__outcome is-boundary">
          <span className="verdict__tag" dir="ltr">
            {t("BOUNDARY")}
          </span>
          <p>{t(verdictBoundaryLine)}</p>
          <ul>
            {boundaryCauses.map((entry) => (
              <li key={entry.cause}>
                <strong>{t(entry.cause)}</strong>
                <span>{t(entry.detail)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="verdict__foot">{t(verdictFailClosed)}</p>

      <p className="sr-only" id={descriptionId}>
        {equivalent}
      </p>
    </figure>
  );
}
