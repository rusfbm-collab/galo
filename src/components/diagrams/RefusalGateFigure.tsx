import { useId } from "react";
import { refusalGates } from "../../content/thinking";
import { useI18n } from "../../i18n/I18nContext";

const WIDTH = 660;
const HEIGHT = 216;
const LANE_Y = 62;
const GATE_X = [116, 222, 328, 434, 540];
const TRAY_Y = 140;

/**
 * The five declared checks a thought has to pass. A thought that fails one stops
 * at that gate and the gate's code is written into the record, so a stop is an
 * outcome with a cause rather than an absence of output.
 */
export function RefusalGateFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();
  const arrowId = useId();
  const refuseId = useId();

  return (
    <figure className="galo-figure galo-figure--gates">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("WHERE A THOUGHT IS ALLOWED TO STOP")}</span>
        <strong>{t("Five gates, each with a name that ends up in the record.")}</strong>
        <span className="galo-figure__note">
          {t(
            "A thought travels the lane from left to right and has to clear every gate. Failing one is not an error condition to be recovered from: the run stops, and the gate that stopped it is written down, which is why a refusal can be argued with afterwards.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("Five refusal gates along one execution lane")}</title>
          <desc id={descriptionId}>
            {t(
              "A horizontal lane runs from an observation on the left to a receipt on the right. Five gates labelled G1 to G5 stand across the lane, and each has a downward arrow into a tray that collects refusals together with the code of the gate that produced them.",
            )}
          </desc>
          <defs>
            <marker id={arrowId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" fill="var(--chart-neutral-strong)" />
            </marker>
            <marker id={refuseId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" fill="var(--chart-2)" />
            </marker>
          </defs>

          <path className="galo-gate__lane" d={`M20 ${LANE_Y} H ${WIDTH - 34}`} markerEnd={`url(#${arrowId})`} />

          <text className="galo-gate__terminal" x="20" y={LANE_Y - 16} direction="ltr">
            observation
          </text>
          <text className="galo-gate__terminal is-end" x={WIDTH - 20} y={LANE_Y - 16} textAnchor="end" direction="ltr">
            receipt
          </text>

          {refusalGates.map((gate, index) => {
            const x = GATE_X[index]!;
            return (
              <g key={gate.code} className="galo-gate__node">
                <rect x={x - 17} y={LANE_Y - 26} width="34" height="52" rx="9" />
                <text x={x} y={LANE_Y} dominantBaseline="central" textAnchor="middle" direction="ltr">
                  {gate.code}
                </text>
                <path
                  className="galo-gate__refuse"
                  d={`M${x} ${LANE_Y + 26} V ${TRAY_Y - 8}`}
                  markerEnd={`url(#${refuseId})`}
                />
              </g>
            );
          })}

          <g className="galo-gate__tray">
            <rect x="20" y={TRAY_Y} width={WIDTH - 40} height="44" rx="12" />
            <text x={WIDTH / 2} y={TRAY_Y + 22} dominantBaseline="central" textAnchor="middle">
              {t("stopped here, with the gate written into the record")}
            </text>
          </g>

          <text className="galo-gate__foot" x="20" y={HEIGHT - 8}>
            {t("no gate is skipped, and no gate has a fallback branch")}
          </text>
        </svg>
      </div>
    </figure>
  );
}
