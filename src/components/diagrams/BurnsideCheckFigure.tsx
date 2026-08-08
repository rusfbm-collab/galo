import { useId } from "react";
import {
  countPairOrbitsByBurnside,
  countPairOrbitsByEnumeration,
  fixedPointsOfUnit,
  galoLevels,
  unitMultipliers,
  type GaloLevel,
} from "../../content/mathematics";
import { useI18n } from "../../i18n/I18nContext";

const WORKED: GaloLevel = 6;

const rows = galoLevels.map((level) => ({
  level,
  enumerated: countPairOrbitsByEnumeration(level),
  averaged: countPairOrbitsByBurnside(level),
}));

const worked = unitMultipliers(WORKED).map((multiplier) => ({
  multiplier,
  fixed: fixedPointsOfUnit(WORKED, multiplier).length,
}));
const workedTotal = worked.reduce((sum, entry) => sum + entry.fixed ** 2, 0);

const WIDTH = 660;
const HEIGHT = 230;
const BASELINE = 176;
const PLOT_TOP = 34;
const LEFT = 46;
const BAR = 22;
const peak = rows.reduce((highest, row) => Math.max(highest, row.enumerated), 0);
const slot = (WIDTH - LEFT * 2) / rows.length;

/**
 * The same count arrived at twice, by two methods that share no working.
 *
 * One walks every ordered pair and marks off whole orbits as it goes; the other
 * never looks at an orbit and instead averages how many pairs each relabelling
 * leaves untouched. Both numbers are computed here, and a disagreement anywhere
 * would be visible as two bars of different height.
 */
export function BurnsideCheckFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();

  return (
    <figure className="galo-figure galo-figure--burnside">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("THE SAME NUMBER, REACHED TWO DIFFERENT WAYS")}</span>
        <strong>{t("Count the orbits by walking them, or never look at an orbit and average instead.")}</strong>
        <span className="galo-figure__note">
          {t(
            "The first method goes pair by pair and crosses off everything each orbit touches. The second asks each lawful relabelling how many pairs it leaves exactly where they were, and takes the average. They are unrelated procedures and they agree at every level.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("Orbit counts by enumeration and by averaging, level by level")}</title>
          <desc id={descriptionId}>
            {t(
              "Seven pairs of columns, one pair per level. In each pair the left column is the count from walking the orbits and the right column is the count from averaging fixed pairs. The two columns are the same height at every level: 1, 4, 5, 10, 7, 20 and 9.",
            )}
          </desc>

          <line className="galo-axis" x1={LEFT} y1={BASELINE} x2={WIDTH - LEFT} y2={BASELINE} />

          {rows.map((row, index) => {
            const centre = LEFT + index * slot + slot / 2;
            const height = (row.enumerated / peak) * (BASELINE - PLOT_TOP);
            return (
              <g key={row.level}>
                <rect
                  className="galo-burnside__bar is-enumerated"
                  x={centre - BAR - 3}
                  y={BASELINE - height}
                  width={BAR}
                  height={height}
                  rx={3}
                />
                <rect
                  className="galo-burnside__bar is-averaged"
                  x={centre + 3}
                  y={BASELINE - (row.averaged / peak) * (BASELINE - PLOT_TOP)}
                  width={BAR}
                  height={(row.averaged / peak) * (BASELINE - PLOT_TOP)}
                  rx={3}
                />
                <text
                  className="galo-burnside__value"
                  x={centre}
                  y={BASELINE - height - 10}
                  textAnchor="middle"
                  direction="ltr"
                >
                  {row.enumerated}
                </text>
                <text className="galo-burnside__level" x={centre} y={BASELINE + 22} textAnchor="middle" direction="ltr">
                  {`L${row.level}`}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="galo-figure__legend">
        <span>
          <i className="galo-swatch galo-swatch--series-1" aria-hidden="true" />
          {t("counted by walking every orbit")}
        </span>
        <span>
          <i className="galo-swatch galo-swatch--series-3" aria-hidden="true" />
          {t("counted by averaging what each relabelling leaves fixed")}
        </span>
      </div>

      <ol className="galo-chain">
        {worked.map((entry) => (
          <li key={entry.multiplier}>
            <code dir="ltr">{`×${entry.multiplier}: ${entry.fixed}² = ${entry.fixed ** 2}`}</code>
            <span>
              {entry.multiplier === 1
                ? t("the relabelling that changes nothing leaves every pair fixed")
                : t("the only other lawful relabelling at L6 leaves just two positions where they were")}
            </span>
          </li>
        ))}
        <li>
          <code dir="ltr">{`${workedTotal} / ${worked.length} = ${countPairOrbitsByBurnside(WORKED)}`}</code>
          <span>{t("the average is the orbit count, and walking the orbits at L6 gives the same number")}</span>
        </li>
      </ol>

      <p className="galo-figure__note galo-figure__note--boundary">
        {t(
          "Agreement between two methods is a check on the arithmetic, not evidence about anything outside it. It says the counting is right; it says nothing about what the orbits are for.",
        )}
      </p>

      <p className="sr-only">{t("Both methods agree at every level.")}</p>
    </figure>
  );
}
