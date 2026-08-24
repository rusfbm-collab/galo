import { useId } from "react";
import { useI18n } from "../../i18n/I18nContext";
import {
  cycleDiff,
  cycleDiffAfter,
  cycleDiffBefore,
  cycleInvariant,
  cycleNoGradient,
  cycleStages,
} from "../../content/homeNarrative";

/**
 * Learning, drawn as five steps and one diff.
 *
 * The question this answers is the one a machine-learning reader asks the moment
 * the weights are taken away: then what changes? The answer is a version number
 * and a short list of named additions — so the figure shows exactly that, with
 * the invariant that did not move printed underneath.
 *
 * The diff is the whole argument in miniature. A neural update would be shown,
 * if it could be shown at all, as a heat map or a point cloud; this one is three
 * lines a person can read, and the version before it is still there to compare
 * against.
 */
export function WeightFreeLearningCycleFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();

  const equivalent = `${cycleStages
    .map((stage) => `${stage.number}. ${t(stage.label)}`)
    .join(" ")} ${t(cycleDiffBefore)} → ${t(cycleDiffAfter)}: ${cycleDiff.map((line) => t(line)).join(", ")}. ${t(
    cycleInvariant,
  )}.`;

  return (
    <figure className="cycle" aria-labelledby={titleId} aria-describedby={descriptionId}>
      <figcaption className="cycle__caption">
        <span className="cycle__eyebrow">{t("ONE LEARNING UPDATE, END TO END")}</span>
        <strong id={titleId}>{t("The version changes. What the engine may admit does not.")}</strong>
      </figcaption>

      <ol className="cycle__stages">
        {cycleStages.map((stage) => (
          <li key={stage.label}>
            <span className="cycle__number" dir="ltr">
              {stage.number}
            </span>
            <div>
              <strong>{t(stage.label)}</strong>
              <p>{t(stage.detail)}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="cycle__diff">
        <div className="cycle__version">
          <span dir="ltr">{t(cycleDiffBefore)}</span>
          <small>{t("before")}</small>
        </div>
        <ul className="cycle__diff-lines">
          {cycleDiff.map((line) => (
            <li key={line} dir="ltr">
              {t(line)}
            </li>
          ))}
        </ul>
        <div className="cycle__version is-after">
          <span dir="ltr">{t(cycleDiffAfter)}</span>
          <small>{t("after")}</small>
        </div>
      </div>

      <div className="cycle__invariant">
        <span className="cycle__no-gradient" dir="ltr">
          {t(cycleNoGradient)}
        </span>
        <span>{t(cycleInvariant)}</span>
      </div>

      <p className="sr-only" id={descriptionId}>
        {equivalent}
      </p>
    </figure>
  );
}
