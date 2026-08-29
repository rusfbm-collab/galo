import { buildCayleyTable } from "../../content/mathematics";
import { termFigures, type TermFigureSpec } from "../../content/termFigures";
import { useI18n } from "../../i18n/I18nContext";

/**
 * The picture that goes with one concept card.
 *
 * Three renderers cover all twenty terms, because the terms are about three
 * things: a set of poles, a table, or named parts in an order. Keeping it to
 * three means a change to the house style lands everywhere at once, and it
 * means no term gets a picture that quietly stops matching its definition.
 *
 * The table renderer builds its cells from the same laws the rest of the site
 * computes with. Nothing here is transcribed.
 */
function TableFigure({ spec }: { spec: Extract<TermFigureSpec, { kind: "table" }> }) {
  const table = buildCayleyTable(spec.operation, spec.level);
  const symbol = spec.operation === "PLUS" ? "⊕" : "★";

  const marked = (row: number, column: number) => {
    switch (spec.highlight.kind) {
      case "cell":
        return spec.highlight.row === row && spec.highlight.column === column;
      case "row":
        return spec.highlight.row === row;
      case "column":
        return spec.highlight.column === column;
      default:
        return false;
    }
  };

  const markedRow = (row: number) => spec.highlight.kind === "row" && spec.highlight.row === row;
  const markedColumn = (column: number) => spec.highlight.kind === "column" && spec.highlight.column === column;

  return (
    <table className="term-figure__table">
      <thead>
        <tr>
          <th scope="col" dir="ltr">
            {symbol}
          </th>
          {table[0]!.map((cell) => (
            <th key={cell.right} scope="col" className={markedColumn(cell.right) ? "is-marked" : undefined} dir="ltr">
              P{cell.right}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.map((row, left) => (
          <tr key={left}>
            <th scope="row" className={markedRow(left) ? "is-marked" : undefined} dir="ltr">
              P{left}
            </th>
            {row.map((cell) => (
              <td key={cell.right} className={marked(cell.left, cell.right) ? "is-marked" : undefined} dir="ltr">
                {cell.result}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function PolesFigure({ spec }: { spec: Extract<TermFigureSpec, { kind: "poles" }> }) {
  return (
    <div className="term-figure__poles">
      {spec.rows.map((row) => (
        <div key={row.label} className="term-figure__pole-row">
          <span className="term-figure__pole-label" dir="ltr">
            {row.label}
          </span>
          <div className="term-figure__pole-set">
            {Array.from({ length: row.size }, (_, index) => (
              <span key={index} className={`term-figure__pole ${row.marks?.[index] ?? ""}`.trim()} dir="ltr">
                {index}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function FlowFigure({ spec }: { spec: Extract<TermFigureSpec, { kind: "flow" }> }) {
  const { t } = useI18n();
  return (
    <ol className={`term-figure__flow is-${spec.layout}`}>
      {spec.nodes.map((node) => (
        <li key={node.value}>
          <bdi dir="ltr">{node.value}</bdi>
          <span>{t(node.label)}</span>
        </li>
      ))}
    </ol>
  );
}

export function TermFigure({ term }: { term: string }) {
  const { t } = useI18n();
  const spec = termFigures[term];
  // Not every term needs a picture, and a term without one simply keeps its card.
  if (!spec) return null;

  return (
    <figure className={`term-figure is-${spec.kind}`}>
      <div className="term-figure__canvas">
        {spec.kind === "table" && <TableFigure spec={spec} />}
        {spec.kind === "poles" && <PolesFigure spec={spec} />}
        {spec.kind === "flow" && <FlowFigure spec={spec} />}
      </div>
      <figcaption>{t(spec.caption)}</figcaption>
    </figure>
  );
}
