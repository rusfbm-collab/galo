import { useId } from "react";
import { evidenceChain } from "../../content/audit";
import { useI18n } from "../../i18n/I18nContext";

const WIDTH = 660;
const HEIGHT = 168;
const BOX_WIDTH = 116;
const BOX_HEIGHT = 60;
const GAP = 12;
const START_X = 14;

/**
 * The shape every published claim on this site has to have. A statement that
 * cannot be filled in on all five slots is not published as a claim; it goes into
 * the not-proven column instead.
 */
export function ClaimAnatomyFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();
  const arrowId = useId();

  return (
    <figure className="galo-figure galo-figure--anatomy">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("THE SHAPE OF EVERY PUBLISHED CLAIM")}</span>
        <strong>{t("Five slots. A statement that cannot fill all five is not published as a claim.")}</strong>
        <span className="galo-figure__note">
          {t(
            "This is the whole editorial rule of the site, drawn once. It is also the fastest way to audit us: take any sentence that sounds like an assertion and try to fill in the five slots from what is on the page.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("The five slots of a published claim")}</title>
          <desc id={descriptionId}>
            {t(
              "Five boxes in a row joined by arrows and labelled claim, scope, artifact, check, and status. Each box is numbered, and the last box lists the six statuses a check can return.",
            )}
          </desc>
          <defs>
            <marker id={arrowId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" fill="var(--chart-neutral-strong)" />
            </marker>
          </defs>

          {evidenceChain.map((step, index) => {
            const x = START_X + index * (BOX_WIDTH + GAP);
            const isLast = index === evidenceChain.length - 1;
            return (
              <g key={step.field} className={`galo-anatomy__node${isLast ? " is-status" : ""}`}>
                <rect x={x} y="38" width={BOX_WIDTH} height={BOX_HEIGHT} rx="12" />
                <text className="galo-anatomy__index" x={x + 14} y="60" direction="ltr">
                  {step.number}
                </text>
                <text className="galo-anatomy__field" x={x + 14} y="82" direction="ltr">
                  {step.field}
                </text>
                {!isLast && (
                  <path
                    className="galo-anatomy__link"
                    d={`M${x + BOX_WIDTH} 68 H ${x + BOX_WIDTH + GAP - 4}`}
                    markerEnd={`url(#${arrowId})`}
                  />
                )}
              </g>
            );
          })}

          <text className="galo-anatomy__statuses" x={WIDTH - 14} y="122" textAnchor="end" direction="ltr">
            PASS · BOUNDARY · NOT PROVEN · NOT STARTED · NOT PRESENT · NOT CLAIMED
          </text>
          <text className="galo-anatomy__foot" x={START_X} y={HEIGHT - 10}>
            {t("the negative statuses are published with the same weight as the positive one")}
          </text>
        </svg>
      </div>
    </figure>
  );
}
