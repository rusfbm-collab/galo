import { buildCayleyTable } from "../../content/mathematics";
import { useI18n } from "../../i18n/I18nContext";

const schoolRows = [1, 2, 3];
const plusTable = buildCayleyTable("PLUS", 3);

/**
 * The multiplication table everyone learned at school, placed beside the L3 PLUS
 * table, so the reader can see that a Cayley table is the same familiar object.
 */
export function SchoolTableBridgeFigure() {
  const { t } = useI18n();

  return (
    <figure className="galo-figure galo-figure--bridge">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("YOU HAVE READ ONE OF THESE BEFORE")}</span>
        <strong>{t("A Cayley table is the school multiplication table, written for a different rule.")}</strong>
        <span className="galo-figure__note">
          {t(
            "Pick a row, pick a column, read the cell where they cross. That is the whole reading procedure, and it is identical on both sides below.",
          )}
        </span>
      </figcaption>

      <div className="galo-bridge">
        <div className="galo-bridge__panel">
          <p className="galo-bridge__title">{t("The table you already know")}</p>
          <table dir="ltr">
            <caption>{t("Multiplication, three by three")}</caption>
            <thead>
              <tr>
                <th scope="col">×</th>
                {schoolRows.map((column) => (
                  <th key={`sc-${column}`} scope="col">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {schoolRows.map((row) => (
                <tr key={`sr-${row}`}>
                  <th scope="row">{row}</th>
                  {schoolRows.map((column) => (
                    <td key={`s-${row}-${column}`} className={row === 2 && column === 3 ? "is-marked" : undefined}>
                      {row * column}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="galo-bridge__read">
            <span>{t("Row 2, column 3, cell 6.")}</span>
            <code dir="ltr">2 × 3 = 6</code>
          </p>
        </div>

        <div className="galo-bridge__arrow" aria-hidden="true">
          <span>{t("same procedure")}</span>
        </div>

        <div className="galo-bridge__panel">
          <p className="galo-bridge__title">{t("The table GALO starts from")}</p>
          <table dir="ltr">
            <caption>{t("PLUS on three positions")}</caption>
            <thead>
              <tr>
                <th scope="col">+₃</th>
                {plusTable.map((_, column) => (
                  <th key={`pc-${column}`} scope="col">
                    P{column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {plusTable.map((row, rowIndex) => (
                <tr key={`pr-${rowIndex}`}>
                  <th scope="row">P{rowIndex}</th>
                  {row.map((cell) => (
                    <td
                      key={`p-${cell.left}-${cell.right}`}
                      className={cell.left === 1 && cell.right === 2 ? "is-marked" : undefined}
                    >
                      P{cell.result}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="galo-bridge__read">
            <span>{t("Row P1, column P2, cell P0.")}</span>
            <code dir="ltr">P1 ⊕ P2 = P0</code>
          </p>
        </div>
      </div>

      <div className="galo-figure__pair">
        <p>
          <strong>{t("What is the same")}</strong>
          <span>
            {t(
              "Two inputs go in, one result comes out, and every possible pair of inputs already has its own filled cell.",
            )}
          </span>
        </p>
        <p>
          <strong>{t("What is different")}</strong>
          <span>
            {t(
              "The entries are names of positions rather than quantities, and the count wraps: after the last position it returns to the first.",
            )}
          </span>
        </p>
      </div>
    </figure>
  );
}
