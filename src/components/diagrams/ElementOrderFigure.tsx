import { useId } from "react";
import { greatestCommonDivisor, type GaloLevel } from "../../content/mathematics";
import { useI18n } from "../../i18n/I18nContext";

const SHOWN: readonly GaloLevel[] = [6, 7];
const TILE = 62;
const GAP = 8;
const TOP = 40;
const ROW_GAP = 92;
const LEFT = 74;
const WIDTH = LEFT + 7 * (TILE + GAP) + 20;
const HEIGHT = TOP + SHOWN.length * ROW_GAP + 34;

/** How many PLUS steps of size k it takes to return to P0 at level n. */
function orderOf(level: number, step: number) {
  return level / greatestCommonDivisor(step, level);
}

const rows = SHOWN.map((level) => ({
  level,
  orders: Array.from({ length: level }, (_, step) => ({ step, order: orderOf(level, step) })),
}));

const longest = rows.reduce((peak, row) => Math.max(peak, row.level), 0);

/**
 * The order of every position, at a composite level and at a prime one.
 *
 * Adding the same position over and over eventually returns to P0, and how long
 * that takes is n divided by the common factor. At L7 every position but P0
 * takes the full seven steps; at L6 the answer depends on the position, which
 * is the same arithmetic that decides how many sub-collections a level has.
 */
export function ElementOrderFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();

  return (
    <figure className="galo-figure galo-figure--orders">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("HOW LONG EACH POSITION TAKES TO COME HOME")}</span>
        <strong>{t("Add the same position repeatedly and count the steps back to P0.")}</strong>
        <span className="galo-figure__note">
          {t(
            "The number on each tile is how many additions of that position return you to P0. It is the level divided by whatever factor the two share, so at a prime level every position but P0 takes the full lap.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("Steps back to P0 for every position at L6 and at L7")}</title>
          <desc id={descriptionId}>
            {t(
              "Two rows of tiles. At L6 the counts read one, six, three, two, three, six. At L7 they read one followed by six sevens. The composite level splits into several different answers; the prime level does not.",
            )}
          </desc>

          {rows.map((row, rowIndex) => {
            const y = TOP + rowIndex * ROW_GAP;
            return (
              <g key={row.level}>
                <text className="galo-orders__level" x={0} y={y + TILE / 2 + 6} direction="ltr">
                  {`L${row.level}`}
                </text>
                {row.orders.map(({ step, order }) => {
                  const x = LEFT + step * (TILE + GAP);
                  const isFull = order === row.level;
                  const isHome = order === 1;
                  return (
                    <g key={step}>
                      <rect
                        className={
                          isHome
                            ? "galo-orders__tile is-home"
                            : isFull
                              ? "galo-orders__tile is-full"
                              : "galo-orders__tile"
                        }
                        x={x}
                        y={y}
                        width={TILE}
                        height={TILE}
                        rx={10}
                      />
                      <text
                        className="galo-orders__step"
                        x={x + TILE / 2}
                        y={y + 22}
                        textAnchor="middle"
                        direction="ltr"
                      >
                        {`P${step}`}
                      </text>
                      <text
                        className="galo-orders__order"
                        x={x + TILE / 2}
                        y={y + 48}
                        textAnchor="middle"
                        direction="ltr"
                      >
                        {order}
                      </text>
                    </g>
                  );
                })}
                {row.level < longest && (
                  <text
                    className="galo-orders__absent"
                    x={LEFT + row.level * (TILE + GAP) + 6}
                    y={y + TILE / 2 + 5}
                    direction="ltr"
                  >
                    —
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      <div className="galo-figure__legend">
        <span>
          <i className="galo-swatch galo-swatch--muted" aria-hidden="true" />
          {t("P0, already home")}
        </span>
        <span>
          <i className="galo-swatch galo-swatch--series-1" aria-hidden="true" />
          {t("takes the full lap of the level")}
        </span>
        <span>
          <i className="galo-swatch galo-swatch--series-2" aria-hidden="true" />
          {t("comes home early, on a shorter ring")}
        </span>
      </div>

      <ol className="galo-chain">
        <li>
          <code dir="ltr">ord(k) = n / gcd(n, k)</code>
          <span>{t("steps back to P0 for the position k at level n")}</span>
        </li>
        <li>
          <code dir="ltr">ord(2) = 6 / 2 = 3</code>
          <span>{t("at L6, adding P2 three times returns to P0 through P2 and P4")}</span>
        </li>
        <li>
          <code dir="ltr">gcd(7, k) = 1</code>
          <span>{t("at a prime level nothing shares a factor, so every position takes the full lap")}</span>
        </li>
      </ol>
    </figure>
  );
}
