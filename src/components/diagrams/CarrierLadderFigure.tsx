import { useId } from "react";
import { galoLevels, rawCellsPerOperator } from "../../content/mathematics";
import { useI18n } from "../../i18n/I18nContext";

const WIDTH = 660;
const ROW = 30;
const HEIGHT = ROW * galoLevels.length + 34;
const CELL = 26;
const START_X = 92;

/**
 * The seven carriers, drawn at their real sizes.
 *
 * The page states Σ n² = 140 in a formula, which is correct and tells a reader
 * nothing about why. Here every level is a row of its own poles, so the count is
 * something a reader arrives at by looking rather than by trusting: level n has
 * n poles, an ordered pair picks two of them, and the squares add up.
 */
export function CarrierLadderFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();

  const orderedPairs = galoLevels.reduce((sum, level) => sum + level ** 2, 0);

  return (
    <figure className="galo-figure galo-figure--ladder">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("SEVEN CARRIERS, DRAWN AT SIZE")}</span>
        <strong>{t("Level n holds n poles, and an ordered pair picks two of them.")}</strong>
        <span className="galo-figure__note">
          {t(
            "Nothing here is chosen for convenience. The levels run 1 to 7, each level's carrier is the set of its own poles, and the number of ordered pairs at that level is n × n. Add the seven squares and the whole space of pairs comes to a number a reader can check on a sheet of paper.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("Seven rows of poles, one row per level")}</title>
          <desc id={descriptionId}>
            {t(
              "Seven rows. The first row holds one square, the second two, and so on up to seven, and each row is labelled with the number of ordered pairs at that level: one, four, nine, sixteen, twenty-five, thirty-six and forty-nine.",
            )}
          </desc>

          {galoLevels.map((level, index) => {
            const y = 8 + index * ROW;
            return (
              <g key={level} className="galo-ladder__row">
                <text className="galo-ladder__level" x="14" y={y + CELL / 2} dominantBaseline="central" direction="ltr">
                  L{level}
                </text>
                {Array.from({ length: level }, (_, pole) => (
                  <g key={pole}>
                    <rect x={START_X + pole * (CELL + 4)} y={y} width={CELL} height={CELL} rx="6" />
                    <text
                      className="galo-ladder__pole"
                      x={START_X + pole * (CELL + 4) + CELL / 2}
                      y={y + CELL / 2}
                      dominantBaseline="central"
                      textAnchor="middle"
                      direction="ltr"
                    >
                      {pole}
                    </text>
                  </g>
                ))}
                <text
                  className="galo-ladder__count"
                  x={WIDTH - 14}
                  y={y + CELL / 2}
                  dominantBaseline="central"
                  textAnchor="end"
                  direction="ltr"
                >
                  {level} × {level} = {level * level}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <p className="galo-figure__foot">
        {t(
          "The seven squares sum to {pairs} ordered pairs. That is the whole space one operator can address, before any law is applied to it and before any orientation is attached.",
          { pairs: String(orderedPairs) },
        )}
      </p>

      {/* The count is re-derived from the level list rather than written down, so a
          changed level set fails the build instead of quietly disagreeing here. */}
      <p className="sr-only">
        {t("Ordered pairs across all seven levels: {pairs}.", { pairs: String(rawCellsPerOperator) })}
      </p>
    </figure>
  );
}
