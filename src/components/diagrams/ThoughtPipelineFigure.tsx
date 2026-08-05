import { useId } from "react";
import { thoughtStages } from "../../content/thinking";
import { useI18n } from "../../i18n/I18nContext";

const WIDTH = 660;
const HEIGHT = 290;
const NODE_WIDTH = 190;
const NODE_HEIGHT = 58;
const COLUMNS = [16, 236, 456];
const ROWS = [30, 124, 218];

/** Exact machine values, kept untranslated and left-to-right in every locale. */
const stageValues = [
  "observation",
  "LEFT | RIGHT",
  "P_i ∈ Q_n",
  "1,204",
  "880 → 440",
  "SHA-256",
  "arity 2",
  "learning_writes = 0",
  "route_depth = 1",
];

/**
 * One complete thought as nine stages. The first seven are what the shipped
 * engine performs on every run; the last two are written architecture and are
 * drawn dashed so the separation survives translation and printing.
 */
export function ThoughtPipelineFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();
  const arrowId = useId();

  return (
    <figure className="galo-figure galo-figure--pipeline">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("ONE THOUGHT, FROM INPUT TO RECORD")}</span>
        <strong>{t("Nine stages, seven of which run today.")}</strong>
        <span className="galo-figure__note">
          {t(
            "Every stage asks one question and hands one object to the next stage. Nothing is skipped, nothing is reordered, and each stage names the condition that would stop the thought there rather than letting it continue on a guess.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("The nine stages of one GALO thought")}</title>
          <desc id={descriptionId}>
            {t(
              "Nine numbered boxes laid out in three rows of three and joined by arrows in reading order. The first seven boxes are drawn with solid borders and carry the machine value each stage produces; the last two are drawn with dashed borders and are marked as not shipped.",
            )}
          </desc>
          <defs>
            <marker id={arrowId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" fill="var(--chart-neutral-strong)" />
            </marker>
          </defs>

          {thoughtStages.map((stage, index) => {
            const column = index % 3;
            const row = Math.floor(index / 3);
            const x = COLUMNS[column]!;
            const y = ROWS[row]!;
            const isTarget = stage.status === "TARGET";
            return (
              <g key={stage.number} className={`galo-pipeline__node${isTarget ? " is-target" : ""}`}>
                <rect x={x} y={y} width={NODE_WIDTH} height={NODE_HEIGHT} rx="12" />
                <text className="galo-pipeline__index" x={x + 16} y={y + 24} direction="ltr">
                  {stage.number}
                </text>
                <text className="galo-pipeline__value" x={x + 16} y={y + 44} direction="ltr">
                  {stageValues[index]}
                </text>
                <text
                  className="galo-pipeline__status"
                  x={x + NODE_WIDTH - 14}
                  y={y + 24}
                  textAnchor="end"
                  direction="ltr"
                >
                  {stage.status}
                </text>
              </g>
            );
          })}

          {thoughtStages.slice(0, -1).map((stage, index) => {
            const column = index % 3;
            const row = Math.floor(index / 3);
            const y = ROWS[row]!;
            const targetStage = thoughtStages[index + 1]!.status === "TARGET";
            const className = `galo-pipeline__link${targetStage ? " is-target" : ""}`;
            const d =
              column < 2
                ? `M${COLUMNS[column]! + NODE_WIDTH} ${y + NODE_HEIGHT / 2} H ${COLUMNS[column + 1]! - 8}`
                : `M${COLUMNS[2]! + NODE_WIDTH / 2} ${y + NODE_HEIGHT} V ${y + NODE_HEIGHT + 18} H ${COLUMNS[0]! + NODE_WIDTH / 2} V ${ROWS[row + 1]! - 8}`;
            return <path key={`link-${stage.number}`} className={className} d={d} markerEnd={`url(#${arrowId})`} />;
          })}
        </svg>
      </div>

      <div className="galo-figure__legend galo-pipeline__legend">
        <span>
          <i className="galo-pipeline__key" aria-hidden="true" />
          {t("solid: performed on every run today")}
        </span>
        <span>
          <i className="galo-pipeline__key is-target" aria-hidden="true" />
          {t("dashed: written architecture only")}
        </span>
      </div>
    </figure>
  );
}
