import { useId } from "react";
import { galoLevels, nontrivialPlusFolds } from "../../content/mathematics";
import { useI18n } from "../../i18n/I18nContext";

const WIDTH = 660;
const HEIGHT = 344;

const PANEL_Y = 16;
const PANEL_HEIGHT = 272;
const PANEL_WIDTH = 306;
const PANEL_X = [16, 338];

const CHIP_WIDTH = 54;
const CHIP_HEIGHT = 22;
const CHIP_STEP = 26;
const CHIP_TOP = PANEL_Y + 64;

const TEXT_OFFSET = 82;
const LINE_STEP = 25;

/** Levels whose PLUS tower admits a downward map other than the collapse onto P0. */
const FOLDING_LEVELS = new Set([4, 6]);

type Tower = {
  name: string;
  signature: string;
  headline: string;
  properties: readonly string[];
  fold: string;
};

/**
 * The two towers, side by side, in the shape the difference actually has.
 *
 * Deliberately not a staircase of blocks: every level chip is the same size,
 * because the point is not that higher levels are bigger but that the two towers
 * carry different algebra over the same poles. The marks on the PLUS column are
 * the five levels that can fold onto a lower one; the STAR column has none, and
 * requiring a map to commute with both leaves only the collapse.
 *
 * Everything drawn here is enumerated in `tests/mathematics.test.ts` rather than
 * asserted, including the five folds and the two levels they start from.
 */
export function TwoTowersFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();

  const towers: readonly Tower[] = [
    {
      name: "PLUS",
      signature: "G_n = (Q_n, PLUS_n, P0)",
      headline: "Moves around the dial",
      properties: ["Associative", "Commutative", "Every pole has an inverse"],
      fold: t("Folds down in {folds} ways", { folds: nontrivialPlusFolds }),
    },
    {
      name: "STAR",
      signature: "S_n = (Q_n, STAR_n, P0)",
      headline: "Asks about a reset first",
      properties: ["A left P0 absorbs", "Noncommutative at n ≥ 2", "Nonassociative at n ≥ 2"],
      fold: t("Never folds down"),
    },
  ];

  return (
    <figure className="galo-figure galo-figure--towers">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("THE TWO TOWERS IN THE ENGINE CORE")}</span>
        <strong>{t("Same seven levels, same poles. Two different algebras on them.")}</strong>
        <span className="galo-figure__note">
          {t(
            "PLUS and STAR are not two settings of one law. They are two families of frozen tables running over the same finite carrier, and they behave differently enough that neither can stand in for the other. Both live in the kernel, and the same 560 typed cells serve every domain the engine runs.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("The PLUS tower and the STAR tower side by side")}</title>
          <desc id={descriptionId}>
            {t(
              "Two panels. Each holds a column of seven equally sized level chips, L7 at the top down to L1, next to the properties of that law. The PLUS column marks the two levels that can fold onto a lower one; the STAR column marks none. A line underneath states that both towers stand over the same poles.",
            )}
          </desc>

          {towers.map((tower, panel) => {
            const x = PANEL_X[panel]!;
            return (
              <g key={tower.name} className={`galo-towers__panel${panel === 1 ? " is-star" : ""}`}>
                <rect x={x} y={PANEL_Y} width={PANEL_WIDTH} height={PANEL_HEIGHT} rx="14" />
                <text className="galo-towers__name" x={x + 18} y={PANEL_Y + 30} direction="ltr">
                  {tower.name}
                </text>
                <text className="galo-towers__signature" x={x + 18} y={PANEL_Y + 50} direction="ltr">
                  {tower.signature}
                </text>

                {[...galoLevels].reverse().map((level, row) => {
                  const y = CHIP_TOP + row * CHIP_STEP;
                  const folds = panel === 0 && FOLDING_LEVELS.has(level);
                  return (
                    <g key={level} className={`galo-towers__level${folds ? " is-folding" : ""}`}>
                      <rect x={x + 18} y={y} width={CHIP_WIDTH} height={CHIP_HEIGHT} rx="5" />
                      <text x={x + 18 + CHIP_WIDTH / 2} y={y + 15} textAnchor="middle" direction="ltr">
                        {`L${level}`}
                      </text>
                    </g>
                  );
                })}

                <text className="galo-towers__headline" x={x + TEXT_OFFSET} y={CHIP_TOP + 12}>
                  {t(tower.headline)}
                </text>
                {tower.properties.map((property, line) => (
                  <text
                    key={property}
                    className="galo-towers__property"
                    x={x + TEXT_OFFSET}
                    y={CHIP_TOP + 44 + line * LINE_STEP}
                  >
                    {t(property)}
                  </text>
                ))}
                <text className="galo-towers__fold" x={x + TEXT_OFFSET} y={CHIP_TOP + 44 + 3 * LINE_STEP + 12}>
                  {tower.fold}
                </text>
              </g>
            );
          })}

          <text className="galo-towers__shared" x={WIDTH / 2} y={HEIGHT - 20} textAnchor="middle">
            {t("The same poles Q_n at every level. Different structure on them.")}
          </text>
        </svg>
      </div>

      <div className="galo-figure__legend">
        <span>
          <i className="galo-towers__key" aria-hidden="true" />
          {t("marked: a level that folds onto a lower one")}
        </span>
        <span>{t("Chips are the same size on purpose. A higher level is not a better one.")}</span>
      </div>
    </figure>
  );
}
