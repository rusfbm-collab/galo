import { useId } from "react";
import { buildFixedActiveTransformation } from "../../content/mathematics";
import { useI18n } from "../../i18n/I18nContext";

const LEVEL = 6;
const ACTIVE = 2;
const WIDTH = 660;
const LANE_GAP = 122;
const HEIGHT = 26 + LANE_GAP + 108 + 10;
const CELL = 34;

/**
 * What happens when one operand is held still.
 *
 * The section states that a fixed active pole gives a column under LEFT and a
 * row under RIGHT, then reports ranks. This draws the ranks: the same fixed pole
 * under PLUS is a permutation — every arrow lands somewhere different — and under
 * STAR several arrows land on the same target, which is what a rank below the
 * carrier size means and why a STAR step can rule possibilities out.
 *
 * The two rows are computed from the tables, not written down, so a change in
 * the formulas moves the picture.
 */
export function TranslationRankFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();
  const arrowId = useId();

  const lanes = [
    {
      family: "PLUS_LEFT" as const,
      image: buildFixedActiveTransformation(LEVEL, "PLUS_LEFT", ACTIVE),
      reading: "Every pole lands on its own target. Nothing is merged, so nothing was learned by taking the step.",
    },
    {
      family: "STAR_LEFT" as const,
      image: buildFixedActiveTransformation(LEVEL, "STAR_LEFT", ACTIVE),
      reading: "Several poles land on the same target. That merge is exactly what makes the step informative.",
    },
  ];

  return (
    <figure className="galo-figure galo-figure--rank">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("HOLD ONE OPERAND STILL AND LOOK")}</span>
        <strong>{t("One law relabels the carrier. The other folds it.")}</strong>
        <span className="galo-figure__note">
          {t(
            "Fix the active pole and a two-place law becomes a one-place map, which can be drawn in full. Under PLUS that map is a bijection at every level: it moves the poles around and loses nothing. Under STAR it is not, and the poles that land together are indistinguishable from that step onward. A system that only relabels can never narrow anything down.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("Two rows of arrows from six poles to their images")}</title>
          <desc id={descriptionId}>
            {t(
              "Two lanes, each with six source poles above and six target poles below, joined by arrows. In the upper lane every arrow reaches a different target. In the lower lane several arrows converge on the same target, and the targets nothing reaches are drawn empty.",
            )}
          </desc>
          <defs>
            <marker id={arrowId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" fill="var(--chart-neutral-strong)" />
            </marker>
          </defs>

          {lanes.map((lane, laneIndex) => {
            const top = 26 + laneIndex * LANE_GAP;
            const reached = new Set(lane.image);
            const startX = 176;
            return (
              <g key={lane.family} className={`galo-rank__lane is-${lane.family.split("_")[0]!.toLowerCase()}`}>
                <text className="galo-rank__family" x="14" y={top + CELL / 2 + 16} direction="ltr">
                  {lane.family}
                </text>
                <text className="galo-rank__rank" x="14" y={top + CELL / 2 + 34} direction="ltr">
                  rank {reached.size} / {LEVEL}
                </text>

                {lane.image.map((target, source) => {
                  const sx = startX + source * (CELL + 12) + CELL / 2;
                  const tx = startX + target * (CELL + 12) + CELL / 2;
                  return (
                    <g key={source}>
                      <rect x={startX + source * (CELL + 12)} y={top} width={CELL} height={CELL} rx="8" />
                      <text x={sx} y={top + CELL / 2} dominantBaseline="central" textAnchor="middle" direction="ltr">
                        {source}
                      </text>
                      <path
                        className="galo-rank__link"
                        d={`M${sx} ${top + CELL + 2} C ${sx} ${top + CELL + 20}, ${tx} ${top + CELL + 20}, ${tx} ${top + CELL + 34}`}
                        markerEnd={`url(#${arrowId})`}
                      />
                    </g>
                  );
                })}

                {Array.from({ length: LEVEL }, (_, pole) => (
                  <g key={pole} className={reached.has(pole) ? "galo-rank__target" : "galo-rank__target is-empty"}>
                    <rect x={startX + pole * (CELL + 12)} y={top + CELL + 40} width={CELL} height={CELL} rx="8" />
                    <text
                      x={startX + pole * (CELL + 12) + CELL / 2}
                      y={top + CELL + 40 + CELL / 2}
                      dominantBaseline="central"
                      textAnchor="middle"
                      direction="ltr"
                    >
                      {pole}
                    </text>
                  </g>
                ))}
              </g>
            );
          })}
        </svg>
      </div>

      <ol className="galo-figure__stage-notes galo-figure__stage-notes--wide">
        {lanes.map((lane) => (
          <li key={lane.family}>
            <strong dir="ltr">{lane.family}</strong>
            <span>
              <bdi dir="ltr">
                L{LEVEL} · active {ACTIVE} → [{lane.image.join(", ")}]
              </bdi>
              {t(lane.reading)}
            </span>
          </li>
        ))}
      </ol>

      <p className="galo-figure__foot">
        {t(
          "Drawn at level 6 with the active pole fixed at 2. Change either in the explorer above and the arrows move, but the difference between the two laws does not: one is onto the whole carrier at every level, and the other is not.",
        )}
      </p>
    </figure>
  );
}
