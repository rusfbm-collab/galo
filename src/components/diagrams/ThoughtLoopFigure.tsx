import { useId } from "react";
import { useI18n } from "../../i18n/I18nContext";

const WIDTH = 640;
const HEIGHT = 240;

const stations = [
  { id: "start", x: 60, y: 44, value: "P_i", label: "The position the run starts from" },
  { id: "operand", x: 420, y: 44, value: "P_j", label: "The operand the admitted candidate supplies" },
  { id: "cell", x: 420, y: 168, value: "P_i ⊕ P_j = P_k", label: "The single table cell those two address" },
  { id: "record", x: 60, y: 168, value: "receipt(P_k)", label: "The recorded result, and the start of the next run" },
] as const;

const NODE_WIDTH = 160;
const NODE_HEIGHT = 52;

/**
 * What one step actually changes. The position moves; nothing else does. The
 * three zeros in the middle are the reason the loop can be replayed rather than
 * approximated.
 */
export function ThoughtLoopFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();
  const arrowId = useId();
  const carryId = useId();

  return (
    <figure className="galo-figure galo-figure--loop">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("WHAT ONE STEP LEAVES BEHIND")}</span>
        <strong>{t("The position moves. Nothing else in this engine does.")}</strong>
        <span className="galo-figure__note">
          {t(
            "Two positions address one cell, the cell names the new position, and the record fixes what happened. The counters in the middle stay at zero throughout, which is what lets a second machine reproduce the step exactly instead of approximately.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("The one-step state cycle of the current engine")}</title>
          <desc id={descriptionId}>
            {t(
              "Four boxes at the corners of a cycle: the starting position, the operand supplied by the admitted candidate, the addressed table cell, and the written receipt. A dashed arrow returns from the receipt to the starting position to show that the next run begins from the new position. Three counters in the centre are all zero.",
            )}
          </desc>
          <defs>
            <marker id={arrowId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" fill="var(--chart-neutral-strong)" />
            </marker>
            <marker id={carryId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" fill="var(--chart-3)" />
            </marker>
          </defs>

          {stations.map((station) => (
            <g key={station.id} className={`galo-loop__node is-${station.id}`}>
              <rect x={station.x} y={station.y} width={NODE_WIDTH} height={NODE_HEIGHT} rx="12" />
              <text
                x={station.x + NODE_WIDTH / 2}
                y={station.y + NODE_HEIGHT / 2}
                dominantBaseline="central"
                textAnchor="middle"
                direction="ltr"
              >
                {station.value}
              </text>
            </g>
          ))}

          <path className="galo-loop__link" d="M220 70 H 412" markerEnd={`url(#${arrowId})`} />
          <path className="galo-loop__link" d="M500 96 V 160" markerEnd={`url(#${arrowId})`} />
          <path className="galo-loop__link" d="M420 194 H 228" markerEnd={`url(#${arrowId})`} />
          <path className="galo-loop__link galo-loop__link--carry" d="M140 168 V 104" markerEnd={`url(#${carryId})`} />

          <text className="galo-loop__edge" x="316" y="58" textAnchor="middle" direction="ltr">
            ⊕ | ★
          </text>
          <text className="galo-loop__edge is-carry" x="150" y="140" direction="ltr">
            next run
          </text>

          <g className="galo-loop__core">
            <rect x="246" y="92" width="148" height="80" rx="14" />
            <text x="320" y="118" textAnchor="middle" direction="ltr">
              semantic_reads = 0
            </text>
            <text x="320" y="136" textAnchor="middle" direction="ltr">
              rank_effects = 0
            </text>
            <text x="320" y="154" textAnchor="middle" direction="ltr">
              test_split_writes = 0
            </text>
          </g>
        </svg>
      </div>

      <p className="galo-figure__foot">{t("one run performs exactly one turn of this cycle")}</p>

      <div className="galo-figure__pair">
        {stations.map((station) => (
          <p key={station.id}>
            <strong dir="ltr">{station.value}</strong>
            <span>{t(station.label)}</span>
          </p>
        ))}
      </div>
    </figure>
  );
}
