import { useId } from "react";
import { useI18n } from "../../i18n/I18nContext";

const WIDTH = 700;
const HEIGHT = 330;

const modelStages = [
  { label: "text", note: "an open-ended input" },
  { label: "tokens", note: "split into pieces" },
  { label: "learned parameters", note: "billions of fitted numbers" },
  { label: "probability over tokens", note: "a distribution, not a choice" },
  { label: "sampled token", note: "one draw from that distribution" },
] as const;

const galoStages = [
  { label: "two declared positions", note: "both from a finite list" },
  { label: "one table cell", note: "row and column fix it" },
  { label: "one named position", note: "the cell's exact entry" },
  { label: "typed coordinate", note: "the cell plus its input roles" },
  { label: "execution record", note: "replayable by someone else" },
] as const;

/**
 * The two anatomies side by side. Neither lane is presented as better; the point
 * is that the objects on the path are of different kinds, so the guarantees you
 * can ask for at each step are different too.
 */
export function TwoMachinesFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();
  const arrowId = useId();

  const rowHeight = 46;

  return (
    <figure className="galo-figure galo-figure--machines">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("TWO DIFFERENT KINDS OF MACHINE")}</span>
        <strong>{t("Follow one step through each, and the difference is the objects on the path.")}</strong>
        <span className="galo-figure__note">
          {t(
            "Neither column is the better machine. What differs is what sits at each stage: on the left, quantities nobody named; on the right, positions somebody declared in advance.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("The path of one step through a language model and through GALO")}</title>
          <desc id={descriptionId}>
            {t(
              "Two vertical lanes. The left lane runs from text through tokens, learned parameters, a probability distribution, and a sampled token. The right lane runs from two declared positions through one table cell, one named position, a typed coordinate, and an execution record.",
            )}
          </desc>
          <defs>
            <marker id={arrowId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" fill="var(--chart-neutral-strong)" />
            </marker>
          </defs>

          <text className="galo-machines__lane-title" x="12" y="18">
            {t("A language model")}
          </text>
          <text className="galo-machines__lane-title galo-machines__lane-title--galo" x={WIDTH / 2 + 12} y="18">
            {t("The GALO engine today")}
          </text>

          {modelStages.map((stage, index) => {
            const y = 32 + index * rowHeight;
            return (
              <g key={stage.label} className="galo-machines__node is-model">
                <rect x="12" y={y} width={WIDTH / 2 - 40} height={rowHeight - 12} rx="9" />
                <text className="galo-machines__label" x="26" y={y + 15}>
                  {t(stage.label)}
                </text>
                <text className="galo-machines__note" x="26" y={y + 28}>
                  {t(stage.note)}
                </text>
                {index < modelStages.length - 1 && (
                  <path
                    className="galo-machines__link"
                    d={`M${WIDTH / 4 - 14} ${y + rowHeight - 12} V ${y + rowHeight}`}
                    markerEnd={`url(#${arrowId})`}
                  />
                )}
              </g>
            );
          })}

          {galoStages.map((stage, index) => {
            const y = 32 + index * rowHeight;
            return (
              <g key={stage.label} className="galo-machines__node is-galo">
                <rect x={WIDTH / 2 + 12} y={y} width={WIDTH / 2 - 40} height={rowHeight - 12} rx="9" />
                <text className="galo-machines__label" x={WIDTH / 2 + 26} y={y + 15}>
                  {t(stage.label)}
                </text>
                <text className="galo-machines__note" x={WIDTH / 2 + 26} y={y + 28}>
                  {t(stage.note)}
                </text>
                {index < galoStages.length - 1 && (
                  <path
                    className="galo-machines__link"
                    d={`M${(3 * WIDTH) / 4 - 14} ${y + rowHeight - 12} V ${y + rowHeight}`}
                    markerEnd={`url(#${arrowId})`}
                  />
                )}
              </g>
            );
          })}

          <line className="galo-machines__divider" x1={WIDTH / 2} y1="8" x2={WIDTH / 2} y2={HEIGHT - 34} />

          <text className="galo-machines__foot" x="12" y={HEIGHT - 12}>
            {t("checked by sampling")}
          </text>
          <text className="galo-machines__foot is-galo" x={WIDTH / 2 + 12} y={HEIGHT - 12}>
            {t("checked by enumeration")}
          </text>
        </svg>
      </div>

      <p className="galo-figure__note galo-figure__note--boundary">
        {t(
          "This is a description of mechanism, not a performance comparison. No benchmark, accuracy, or capability contest between the two is claimed on this site.",
        )}
      </p>
    </figure>
  );
}
