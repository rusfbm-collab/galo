import { useId } from "react";
import { buildCayleyTable, type GaloLevel, type GaloOperation } from "../../content/mathematics";
import { useI18n } from "../../i18n/I18nContext";

const LEVEL: GaloLevel = 5;
const CELL = 40;
const HEAD = 30;
const PANEL_WIDTH = HEAD + LEVEL * CELL + 34;
const GAP = 44;
const WIDTH = PANEL_WIDTH * 2 + GAP;
const TOP = 34;
const HEIGHT = TOP + HEAD + LEVEL * CELL + 44;

/** Distinct results in each row and in each column, computed rather than asserted. */
function distinctCounts(operation: GaloOperation) {
  const table = buildCayleyTable(operation, LEVEL);
  const rows = table.map((row) => new Set(row.map((cell) => cell.result)).size);
  const columns = Array.from({ length: LEVEL }, (_, column) => new Set(table.map((row) => row[column]!.result)).size);
  return { table, rows, columns };
}

function Panel({ operation, x, label }: { operation: GaloOperation; x: number; label: string }) {
  const { table, rows, columns } = distinctCounts(operation);
  const sign = operation === "PLUS" ? "+" : "★";

  return (
    <g>
      <text className="galo-latin__title" x={x} y={TOP - 12} direction="ltr">
        {label}
      </text>

      <text className="galo-latin__head" x={x + HEAD / 2} y={TOP + HEAD - 10} textAnchor="middle" direction="ltr">
        {sign}
      </text>
      {table.map((_, column) => (
        <text
          key={`col-${column}`}
          className="galo-latin__head"
          x={x + HEAD + column * CELL + CELL / 2}
          y={TOP + HEAD - 10}
          textAnchor="middle"
          direction="ltr"
        >
          P{column}
        </text>
      ))}

      {table.map((row, rowIndex) => {
        const complete = rows[rowIndex] === LEVEL;
        return (
          <g key={`row-${rowIndex}`}>
            <text
              className="galo-latin__head"
              x={x + HEAD / 2}
              y={TOP + HEAD + rowIndex * CELL + CELL / 2 + 5}
              textAnchor="middle"
              direction="ltr"
            >
              P{rowIndex}
            </text>
            {row.map((cell, column) => (
              <g key={`cell-${rowIndex}-${column}`}>
                <rect
                  className={complete ? "galo-latin__cell" : "galo-latin__cell is-repeated"}
                  x={x + HEAD + column * CELL}
                  y={TOP + HEAD + rowIndex * CELL}
                  width={CELL}
                  height={CELL}
                />
                <text
                  className="galo-latin__value"
                  x={x + HEAD + column * CELL + CELL / 2}
                  y={TOP + HEAD + rowIndex * CELL + CELL / 2 + 5}
                  textAnchor="middle"
                  direction="ltr"
                >
                  P{cell.result}
                </text>
              </g>
            ))}
            <text
              className={complete ? "galo-latin__mark" : "galo-latin__mark is-bad"}
              x={x + HEAD + LEVEL * CELL + 16}
              y={TOP + HEAD + rowIndex * CELL + CELL / 2 + 6}
              textAnchor="middle"
              direction="ltr"
            >
              {complete ? "✓" : rows[rowIndex]}
            </text>
          </g>
        );
      })}

      {columns.map((count, column) => (
        <text
          key={`colmark-${column}`}
          className={count === LEVEL ? "galo-latin__mark" : "galo-latin__mark is-bad"}
          x={x + HEAD + column * CELL + CELL / 2}
          y={TOP + HEAD + LEVEL * CELL + 24}
          textAnchor="middle"
          direction="ltr"
        >
          {count === LEVEL ? "✓" : count}
        </text>
      ))}
    </g>
  );
}

/**
 * The Latin-square test, run on both laws at L5 and marked in the margins.
 *
 * PLUS produces every position exactly once in every row and every column,
 * which is what a group table looks like. STAR fails the same test, and the
 * counts in the margin say by how much: the reset row carries one value five
 * times, and every column inherits a repeat from it.
 */
export function LatinSquareFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();

  return (
    <figure className="galo-figure galo-figure--latin">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("THE OLDEST TEST FOR A GROUP TABLE")}</span>
        <strong>{t("Every position exactly once in every row and column — PLUS passes, STAR does not.")}</strong>
        <span className="galo-figure__note">
          {t(
            "Count the distinct results along each row and each column. A tick means all five appeared; a number means how few did. The whole failure of STAR is one row, and it drags four of the five columns down with it.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("The Latin-square test applied to both laws at L5")}</title>
          <desc id={descriptionId}>
            {t(
              "Two five-by-five tables. In the PLUS table every row and every column contains each of P0 to P4 exactly once, and every margin carries a tick. In the STAR table the first row is P0 five times, so that row is marked 1, and four of the five columns are marked 4.",
            )}
          </desc>
          <Panel operation="PLUS" x={0} label={t("PLUS at L5")} />
          <Panel operation="STAR" x={PANEL_WIDTH + GAP} label={t("STAR at L5")} />
        </svg>
      </div>

      <p className="galo-figure__note galo-figure__note--boundary">
        {t(
          "This is the standard test and it is decisive in one direction only: failing it rules a table out of being a group table, while passing it does not by itself make one. The rest of the group properties are checked separately.",
        )}
      </p>
    </figure>
  );
}
