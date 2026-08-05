import { buildCayleyTable, type GaloLevel, type GaloOperation } from "../../content/mathematics";
import type { TermPanel } from "../../content/termPages";
import { useI18n } from "../../i18n/I18nContext";

const symbol: Record<GaloOperation, string> = { PLUS: "⊕", STAR: "★" };

/**
 * A real table from the tower with the cells this concept lives in marked. The
 * grid is regenerated from the laws on every render, so a highlighted cell can
 * never disagree with the mathematics it is illustrating.
 */
export function TermTablePanel({ panel }: { panel: TermPanel }) {
  const { t } = useI18n();
  const level = panel.level as GaloLevel;
  const table = buildCayleyTable(panel.law, level);
  const marked = new Set((panel.cells ?? []).map(([r, c]) => `${r}:${c}`));
  const markedHeaders = new Set(panel.headers ?? []);
  const tone = panel.tone === "warn" ? "is-warn" : "is-accent";

  return (
    <figure className={`term-table ${tone}`}>
      <table dir="ltr">
        <caption>
          <bdi dir="ltr">
            {panel.law} · L{level}
          </bdi>
        </caption>
        <thead>
          <tr>
            <th scope="col">
              <bdi dir="ltr">{symbol[panel.law]}</bdi>
            </th>
            {table.map((_, index) => (
              <th key={`c-${index}`} scope="col" className={markedHeaders.has(index) ? "is-marked" : undefined}>
                P{index}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.map((cells, rowIndex) => (
            <tr key={`r-${rowIndex}`}>
              <th scope="row" className={markedHeaders.has(rowIndex) ? "is-marked" : undefined}>
                P{rowIndex}
              </th>
              {cells.map((cell) => (
                <td
                  key={`${cell.left}-${cell.right}`}
                  className={marked.has(`${cell.left}:${cell.right}`) ? "is-marked" : undefined}
                >
                  P{cell.result}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <figcaption>{t("Regenerated from the law on this page, not copied from a document.")}</figcaption>
    </figure>
  );
}
