import { useId } from "react";
import { applyGaloOperation, galoLevels, towerCounts } from "../../content/mathematics";
import { useI18n } from "../../i18n/I18nContext";

const CELL = 16;
const GAP = 20;
const TOP = 26;
const LEFT = 8;

/** Every ordered pair at every level, split by whether the two laws agree on it. */
const levelDifferences = galoLevels.map((level) => {
  const disagreeing: { left: number; right: number }[] = [];
  for (let left = 0; left < level; left += 1) {
    for (let right = 0; right < level; right += 1) {
      if (applyGaloOperation("PLUS", level, left, right) !== applyGaloOperation("STAR", level, left, right)) {
        disagreeing.push({ left, right });
      }
    }
  }
  return { level, disagreeing, pairs: level * level };
});

const disagreementTotal = levelDifferences.reduce((sum, row) => sum + row.disagreeing.length, 0);
const pairTotal = towerCounts.reduce((sum, row) => sum + row.orderedPairs, 0);

const offsets = levelDifferences.reduce<number[]>((positions, row, index) => {
  const previous = positions[index - 1] ?? LEFT;
  const previousWidth = index === 0 ? 0 : levelDifferences[index - 1]!.level * CELL + GAP;
  positions.push(previous + previousWidth);
  return positions;
}, []);

const WIDTH = offsets[offsets.length - 1]! + levelDifferences[levelDifferences.length - 1]!.level * CELL + LEFT;
const HEIGHT = TOP + 7 * CELL + 46;

/**
 * Where the two laws actually disagree, drawn over the whole tower.
 *
 * The reset clause looks dramatic in prose and is small on the page: at level n
 * the laws differ on exactly the n−1 cells of the first row where the right
 * input is not P0. Everything else — 119 of 140 ordered pairs — is identical.
 * Both the map and the counts are computed by comparing the two operations
 * cell by cell rather than being asserted from the formula.
 */
export function DifferenceMapFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();

  return (
    <figure className="galo-figure galo-figure--difference">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("WHERE THE TWO LAWS ACTUALLY DISAGREE")}</span>
        <strong>{t("One row wide, at every level, and nowhere else.")}</strong>
        <span className="galo-figure__note">
          {t(
            "Each square below is one level: rows are the left input, columns the right. A filled cell is a pair where PLUS and STAR return different positions. They sit in the first row only, and P0 combined with itself is not among them.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("Cells where PLUS and STAR return different positions")}</title>
          <desc id={descriptionId}>
            {t(
              "Seven square grids, one per level from L1 to L7. In each grid the only filled cells lie along the top row, and there are n−1 of them at level n: none at L1, one at L2, and six at L7. Twenty-one filled cells out of one hundred and forty.",
            )}
          </desc>

          {levelDifferences.map((row, index) => {
            const x = offsets[index]!;
            const marked = new Set(row.disagreeing.map((pair) => `${pair.left}:${pair.right}`));
            return (
              <g key={row.level}>
                {Array.from({ length: row.level }, (_, left) =>
                  Array.from({ length: row.level }, (_, right) => (
                    <rect
                      key={`${left}-${right}`}
                      className={marked.has(`${left}:${right}`) ? "galo-diff__cell is-different" : "galo-diff__cell"}
                      x={x + right * CELL}
                      y={TOP + left * CELL}
                      width={CELL - 1.5}
                      height={CELL - 1.5}
                      rx={2}
                    />
                  )),
                )}
                <text
                  className="galo-diff__level"
                  x={x + (row.level * CELL) / 2}
                  y={TOP + row.level * CELL + 18}
                  textAnchor="middle"
                  direction="ltr"
                >
                  {`L${row.level}`}
                </text>
                <text
                  className="galo-diff__count"
                  x={x + (row.level * CELL) / 2}
                  y={TOP + row.level * CELL + 34}
                  textAnchor="middle"
                  direction="ltr"
                >
                  {`${row.disagreeing.length}/${row.pairs}`}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="galo-figure__legend">
        <span>
          <i className="galo-swatch galo-swatch--series-1" aria-hidden="true" />
          {t("the two laws return different positions")}
        </span>
        <span>
          <i className="galo-swatch galo-swatch--muted" aria-hidden="true" />
          {t("the two laws agree")}
        </span>
      </div>

      <ol className="galo-chain">
        <li>
          <code dir="ltr">{`${disagreementTotal} / ${pairTotal}`}</code>
          <span>{t("ordered pairs across the tower on which the laws disagree")}</span>
        </li>
        <li>
          <code dir="ltr">n − 1</code>
          <span>{t("disagreeing pairs at level n, all of them in the first row")}</span>
        </li>
        <li>
          <code dir="ltr">P0 ★ P0 = P0 = P0 + P0</code>
          <span>{t("the one cell of the reset row where the two laws still agree")}</span>
        </li>
      </ol>
    </figure>
  );
}
