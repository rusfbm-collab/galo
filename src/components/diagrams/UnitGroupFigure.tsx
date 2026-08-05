import { useId } from "react";
import { sameLevelAutomorphismCount, symmetryLevelProfiles } from "../../content/mathematics";
import { useI18n } from "../../i18n/I18nContext";

const WIDTH = 660;
const HEIGHT = 250;
const BASELINE = 186;
const PLOT_TOP = 40;
const LEFT = 34;
const BAR_WIDTH = 44;

const maximum = symmetryLevelProfiles.reduce((peak, row) => Math.max(peak, row.automorphismOrder), 0);
const slot = (WIDTH - LEFT * 2) / symmetryLevelProfiles.length;

function barPath(x: number, height: number, width: number, radius = 4) {
  const top = BASELINE - height;
  const r = Math.min(radius, height);
  return `M ${x} ${BASELINE} V ${top + r} Q ${x} ${top} ${x + r} ${top} H ${x + width - r} Q ${x + width} ${top} ${x + width} ${top + r} V ${BASELINE} Z`;
}

/**
 * How many lawful relabellings each level admits. The count is φ(n), which is why
 * a prime level has the most and why the total 18 is a sum and not a group order.
 */
export function UnitGroupFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();

  return (
    <figure className="galo-figure galo-figure--units">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("HOW MANY LAWFUL RELABELLINGS EACH LEVEL HAS")}</span>
        <strong>{t("The count is Euler's totient, and it does not grow with the level.")}</strong>
        <span className="galo-figure__note">
          {t(
            "A relabelling is lawful when it preserves both laws and the named constant. The number of them at level n is the count of indices coprime to n, so L5 and L7 admit more than L6 does despite being smaller.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("Number of automorphisms at each level")}</title>
          <desc id={descriptionId}>
            {t(
              "A column chart from L1 to L7 with heights 1, 1, 2, 2, 4, 2 and 6. The tallest columns are the prime levels L5 and L7, and the total across all levels is eighteen.",
            )}
          </desc>

          <line className="galo-axis" x1={LEFT} y1={BASELINE} x2={WIDTH - LEFT} y2={BASELINE} />
          {[2, 4, 6].map((tick) => {
            const y = BASELINE - (tick / maximum) * (BASELINE - PLOT_TOP);
            return <line key={tick} className="galo-grid" x1={LEFT} y1={y} x2={WIDTH - LEFT} y2={y} />;
          })}

          {symmetryLevelProfiles.map((profile, index) => {
            const height = (profile.automorphismOrder / maximum) * (BASELINE - PLOT_TOP);
            const x = LEFT + index * slot + (slot - BAR_WIDTH) / 2;
            const isPrime = [2, 3, 5, 7].includes(profile.level);
            return (
              <g key={profile.level} className={isPrime ? "galo-bar galo-bar--accent" : "galo-bar"}>
                <path d={barPath(x, height, BAR_WIDTH)} />
                <text
                  className="galo-bar__value"
                  x={x + BAR_WIDTH / 2}
                  y={BASELINE - height - 9}
                  textAnchor="middle"
                  direction="ltr"
                >
                  {profile.automorphismOrder}
                </text>
                <text
                  className="galo-bar__label"
                  x={x + BAR_WIDTH / 2}
                  y={BASELINE + 20}
                  textAnchor="middle"
                  direction="ltr"
                >
                  L{profile.level}
                </text>
                <text
                  className="galo-bar__sub"
                  x={x + BAR_WIDTH / 2}
                  y={BASELINE + 36}
                  textAnchor="middle"
                  direction="ltr"
                >
                  φ({profile.level})
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="galo-figure__legend">
        <span>
          <i className="galo-swatch galo-swatch--series-2" aria-hidden="true" />
          {t("prime level")}
        </span>
        <span>
          <i className="galo-swatch galo-swatch--series-1" aria-hidden="true" />
          {t("composite or degenerate level")}
        </span>
      </div>

      <p className="galo-figure__note galo-figure__note--boundary">
        {t(
          "The sum across the seven levels is {total}. That is a total of seven separate local groups, not the order of one group.",
          {
            total: sameLevelAutomorphismCount,
          },
        )}
      </p>
    </figure>
  );
}
