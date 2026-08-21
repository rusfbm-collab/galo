import { useId } from "react";
import { useI18n } from "../../i18n/I18nContext";

const WIDTH = 660;
const HEIGHT = 220;
const LANES = [
  { id: "run 1", y: 44 },
  { id: "run 2", y: 100 },
  { id: "run 3", y: 156 },
] as const;

const STAGES = [
  { x: 74, width: 108, value: "alpha,beta" },
  { x: 200, width: 104, value: "SHA-256" },
  { x: 322, width: 104, value: "ordinal 1" },
] as const;

const NODE_HEIGHT = 38;
const JOIN_X = 512;

/**
 * Why the choice is reproducible: the ordering input is recorded, so three runs
 * on separate machines derive the same sequence and reach the same candidate.
 */
export function DeterministicChoiceFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();
  const arrowId = useId();

  return (
    <figure className="galo-figure galo-figure--determinism">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("WHY THE SAME THOUGHT HAPPENS TWICE")}</span>
        <strong>{t("Three separate runs, one identical record.")}</strong>
        <span className="galo-figure__note">
          {t(
            "The order over candidates is a hash of values that are all written down: the observation, the candidate identifier, and the ordinal. Nothing in it comes from the machine, the clock, or anything an earlier run left behind, so the sequence is the same wherever it is recomputed.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("Three runs of the same observation converging on one record")}</title>
          <desc id={descriptionId}>
            {t(
              "Three parallel lanes labelled run 1, run 2, and run 3. Each lane passes through the same observation, the same hash, and the same ordinal, and all three converge on a single box marked with an equals sign and the word receipt.",
            )}
          </desc>
          <defs>
            <marker id={arrowId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" fill="var(--chart-neutral-strong)" />
            </marker>
          </defs>

          {LANES.map((lane) => (
            <g key={lane.id} className="galo-determinism__lane">
              <text
                className="galo-determinism__run"
                x="14"
                y={lane.y + NODE_HEIGHT / 2}
                dominantBaseline="central"
                direction="ltr"
              >
                {lane.id}
              </text>
              {STAGES.map((stage, index) => (
                <g key={stage.value} className="galo-determinism__node">
                  <rect x={stage.x} y={lane.y} width={stage.width} height={NODE_HEIGHT} rx="10" />
                  <text
                    x={stage.x + stage.width / 2}
                    y={lane.y + NODE_HEIGHT / 2}
                    dominantBaseline="central"
                    textAnchor="middle"
                    direction="ltr"
                  >
                    {stage.value}
                  </text>
                  {index < STAGES.length - 1 && (
                    <path
                      className="galo-determinism__link"
                      d={`M${stage.x + stage.width} ${lane.y + NODE_HEIGHT / 2} H ${STAGES[index + 1]!.x - 8}`}
                      markerEnd={`url(#${arrowId})`}
                    />
                  )}
                </g>
              ))}
              <path
                className="galo-determinism__link"
                d={`M426 ${lane.y + NODE_HEIGHT / 2} C 470 ${lane.y + NODE_HEIGHT / 2}, 470 119, ${JOIN_X - 8} 119`}
                markerEnd={`url(#${arrowId})`}
              />
            </g>
          ))}

          <g className="galo-determinism__join">
            <rect x={JOIN_X} y="86" width="128" height="66" rx="14" />
            <text className="galo-determinism__equals" x={JOIN_X + 64} y="112" textAnchor="middle" direction="ltr">
              =
            </text>
            <text x={JOIN_X + 64} y="136" textAnchor="middle" direction="ltr">
              receipt
            </text>
          </g>

          <text className="galo-determinism__foot" x="14" y={HEIGHT - 8}>
            {t("nothing in the ordering comes from the machine, the clock, or an earlier run")}
          </text>
        </svg>
      </div>

      <div className="galo-figure__pair">
        <p>
          <strong dir="ltr">SHA-256(observation, candidate_id, ordinal)</strong>
          <span>
            {t(
              "Every input to the order appears in the record, so a reviewer can recompute the sequence without access to the machine that produced it.",
            )}
          </span>
        </p>
        <p>
          <strong dir="ltr">handle × 1</strong>
          <span>
            {t(
              "The candidate the order selects is bound to one process-local use. Using it a second time is refused by the sequence check rather than silently allowed.",
            )}
          </span>
        </p>
      </div>
    </figure>
  );
}
