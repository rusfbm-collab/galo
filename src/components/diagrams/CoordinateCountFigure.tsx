import { useId } from "react";
import { canonicalTypedCellCount, towerCounts } from "../../content/mathematics";
import { useI18n } from "../../i18n/I18nContext";

const WIDTH = 660;
const HEIGHT = 268;
const BASELINE = 214;
const PLOT_TOP = 44;
const LEFT = 30;
const BAR_WIDTH = 50;

const maximum = towerCounts.reduce((peak, row) => Math.max(peak, row.typedCells), 0);
const slot = (WIDTH - LEFT * 2) / towerCounts.length;

function barPath(x: number, height: number, width: number, radius = 4) {
  const top = BASELINE - height;
  const r = Math.min(radius, height);
  return `M ${x} ${BASELINE} V ${top + r} Q ${x} ${top} ${x + r} ${top} H ${x + width - r} Q ${x + width} ${top} ${x + width} ${top + r} V ${BASELINE} Z`;
}

/**
 * The 560-coordinate count as a shape: every level contributes 4n² typed
 * coordinates, and the four L1 coordinates stay control-only in the runtime.
 */
export function CoordinateCountFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();

  return (
    <figure className="galo-figure galo-figure--count">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("WHERE 560 COMES FROM, LEVEL BY LEVEL")}</span>
        <strong>{t("Nothing is estimated. Every level is counted, then the counts are added.")}</strong>
        <span className="galo-figure__note">
          {t(
            "A level with n positions has n² ordered input pairs. Two laws and two role placements multiply that by four, so level n contributes exactly 4n² typed coordinates.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("Typed coordinates contributed by each level")}</title>
          <desc id={descriptionId}>
            {t(
              "A column chart with one column per level from L1 to L7. The columns rise 4, 16, 36, 64, 100, 144 and 196, which add up to 560. The L1 column is marked separately because those four coordinates stay control-only in the current runtime.",
            )}
          </desc>

          <line className="galo-axis" x1={LEFT} y1={BASELINE} x2={WIDTH - LEFT} y2={BASELINE} />
          {[50, 100, 150].map((tick) => {
            const y = BASELINE - (tick / maximum) * (BASELINE - PLOT_TOP);
            return <line key={tick} className="galo-grid" x1={LEFT} y1={y} x2={WIDTH - LEFT} y2={y} />;
          })}

          {towerCounts.map((row, index) => {
            const height = (row.typedCells / maximum) * (BASELINE - PLOT_TOP);
            const x = LEFT + index * slot + (slot - BAR_WIDTH) / 2;
            const isControlOnly = row.level === 1;
            return (
              <g key={row.level} className={isControlOnly ? "galo-bar galo-bar--muted" : "galo-bar"}>
                <path d={barPath(x, height, BAR_WIDTH)} />
                <text
                  className="galo-bar__value"
                  x={x + BAR_WIDTH / 2}
                  y={BASELINE - height - 10}
                  textAnchor="middle"
                  direction="ltr"
                >
                  {row.typedCells}
                </text>
                <text
                  className="galo-bar__label"
                  x={x + BAR_WIDTH / 2}
                  y={BASELINE + 22}
                  textAnchor="middle"
                  direction="ltr"
                >
                  L{row.level}
                </text>
                <text
                  className="galo-bar__sub"
                  x={x + BAR_WIDTH / 2}
                  y={BASELINE + 40}
                  textAnchor="middle"
                  direction="ltr"
                >
                  4×{row.level}²
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="galo-figure__legend">
        <span>
          <i className="galo-swatch galo-swatch--series-1" aria-hidden="true" />
          {t("active in the current runtime")}
        </span>
        <span>
          <i className="galo-swatch galo-swatch--muted" aria-hidden="true" />
          {t("counted in the mathematics, control-only in the runtime")}
        </span>
      </div>

      <ol className="galo-chain">
        <li>
          <code dir="ltr">Σ n² = 140</code>
          <span>{t("ordered input pairs across L1–L7")}</span>
        </li>
        <li>
          <code dir="ltr">× 2 = 280</code>
          <span>{t("each pair is evaluated under PLUS and under STAR")}</span>
        </li>
        <li>
          <code dir="ltr">× 2 = {canonicalTypedCellCount}</code>
          <span>{t("each law cell is recorded with a LEFT or RIGHT role placement")}</span>
        </li>
        <li>
          <code dir="ltr">− 4 = 556</code>
          <span>{t("the four L1 coordinates stay control-only in the current runtime")}</span>
        </li>
      </ol>
    </figure>
  );
}
