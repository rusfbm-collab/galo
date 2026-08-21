import { useId } from "react";
import { diligenceSteps } from "../../content/investors";
import { useI18n } from "../../i18n/I18nContext";

const WIDTH = 660;
const HEIGHT = 160;
const LINE_Y = 74;
const FIRST_X = 60;
const SPACING = 108;

/**
 * The diligence path as a timeline, with the time each step actually takes. The
 * point of the picture is that the first five steps cost less than one meeting.
 */
export function DiligenceTimelineFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();
  const arrowId = useId();

  return (
    <figure className="galo-figure galo-figure--diligence">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("A DILIGENCE PATH YOU CAN RUN WITHOUT US")}</span>
        <strong>{t("Five of the six steps cost less than one meeting.")}</strong>
        <span className="galo-figure__note">
          {t(
            "Each step is something a sceptical reader can do alone, in the stated time, using only what is published. The sixth step is the one that needs a decision from you, because it is the measurement nobody has made yet.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("Six diligence steps on a timeline with their time boxes")}</title>
          <desc id={descriptionId}>
            {t(
              "A horizontal line with six numbered stops. The first five are marked with short time boxes of thirty minutes to one day; the sixth is marked one week and is drawn as the point where a decision is required.",
            )}
          </desc>
          <defs>
            <marker id={arrowId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" fill="var(--chart-neutral-strong)" />
            </marker>
          </defs>

          <path className="galo-diligence__line" d={`M20 ${LINE_Y} H ${WIDTH - 34}`} markerEnd={`url(#${arrowId})`} />

          {diligenceSteps.map((step, index) => {
            const x = FIRST_X + index * SPACING;
            const isLast = index === diligenceSteps.length - 1;
            return (
              <g key={step.number} className={`galo-diligence__stop${isLast ? " is-decision" : ""}`}>
                <circle cx={x} cy={LINE_Y} r="20" />
                <text x={x} y={LINE_Y} dominantBaseline="central" textAnchor="middle" direction="ltr">
                  {step.number}
                </text>
                <text className="galo-diligence__time" x={x} y={LINE_Y - 32} textAnchor="middle" direction="ltr">
                  {step.timeBox}
                </text>
              </g>
            );
          })}

          <text className="galo-diligence__foot" x="20" y={HEIGHT - 12}>
            {t("steps 01 to 05 use only what is already published")}
          </text>
          <text className="galo-diligence__foot is-decision" x={WIDTH - 20} y={HEIGHT - 12} textAnchor="end">
            {t("step 06 is the missing measurement")}
          </text>
        </svg>
      </div>
    </figure>
  );
}
