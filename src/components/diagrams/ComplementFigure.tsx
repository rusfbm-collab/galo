import { useId } from "react";
import { compositionSteps } from "../../content/llmComparison";
import { useI18n } from "../../i18n/I18nContext";

const WIDTH = 660;
const HEIGHT = 224;

/**
 * The proposed composition: an open-ended system proposes, the verified layer
 * admits and records. Each stage carries its real status, and the two stages that
 * belong to the proposing side are marked as target architecture.
 */
export function ComplementFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();
  const arrowId = useId();

  return (
    <figure className="galo-figure galo-figure--complement">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("HOW THE TWO COULD FIT TOGETHER")}</span>
        <strong>{t("One side proposes without limits; the other admits within a declared one.")}</strong>
        <span className="galo-figure__note">
          {t(
            "This loop is written architecture, not a shipped feature. The admit, execute, and record stages exist today inside a narrow contract; the two proposing stages do not exist at all and are marked accordingly.",
          )}
        </span>
      </figcaption>

      <div className="galo-complement__zones">
        <span className="galo-complement__zone-tag">{t("open-ended proposer")}</span>
        <span className="galo-complement__zone-tag is-galo">{t("verified layer")}</span>
      </div>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("Proposed loop between an open-ended proposer and the verified layer")}</title>
          <desc id={descriptionId}>
            {t(
              "A cycle of five stages. An open-ended system proposes a candidate; the verified layer admits or refuses it, executes one bounded action, and writes a record; a refusal carries its reason back so the proposal can be revised.",
            )}
          </desc>
          <defs>
            <marker id={arrowId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" fill="var(--chart-neutral-strong)" />
            </marker>
          </defs>

          <g className="galo-complement__zone is-model">
            <rect x="10" y="20" width="200" height={HEIGHT - 66} rx="18" />
          </g>
          <g className="galo-complement__zone is-galo">
            <rect x="248" y="20" width={WIDTH - 262} height={HEIGHT - 66} rx="18" />
          </g>

          {compositionSteps.map((step, index) => {
            const isModel = step.actor === "model";
            const cx = isModel ? 110 : 330 + (index - 1) * 130;
            const cy = isModel ? (index === 0 ? 78 : 150) : 78;
            return (
              <g key={step.number} className={`galo-complement__node is-${step.actor}`}>
                <circle cx={cx} cy={cy} r="26" />
                <text
                  className="galo-complement__index"
                  x={cx}
                  y={cy}
                  dominantBaseline="central"
                  textAnchor="middle"
                  direction="ltr"
                >
                  {step.number}
                </text>
                <text className="galo-complement__status" x={cx} y={cy + 46} textAnchor="middle" direction="ltr">
                  {step.status}
                </text>
              </g>
            );
          })}

          <path className="galo-complement__link" d="M140 78 H 296" markerEnd={`url(#${arrowId})`} />
          <path className="galo-complement__link" d="M360 78 H 426" markerEnd={`url(#${arrowId})`} />
          <path className="galo-complement__link" d="M490 78 H 556" markerEnd={`url(#${arrowId})`} />
          <path
            className="galo-complement__link galo-complement__link--return"
            d="M590 106 V 150 H 142"
            markerEnd={`url(#${arrowId})`}
          />
        </svg>
      </div>

      <ol className="galo-figure__stage-notes">
        {compositionSteps.map((step) => (
          <li key={step.number}>
            <strong dir="ltr">{step.number}</strong>
            <span>
              <b>
                {t(step.title)} · <bdi dir="ltr">{step.status}</bdi>
              </b>
              {t(step.text)}
            </span>
          </li>
        ))}
      </ol>
    </figure>
  );
}
