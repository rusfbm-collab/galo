import { useId, useState } from "react";
import { buildCayleyTable, tableCountDisplay, type GaloOperation } from "../../content/mathematics";
import type { TableEntry, TableTrace } from "../../content/cayleyTables";
import { useI18n } from "../../i18n/I18nContext";

/**
 * One of the fourteen tables, printed in full, with the worked lookups beside
 * it.
 *
 * The table is a real HTML table because it is one: rows and columns with
 * headers, which is what a screen reader needs and what a person printing the
 * page gets for free. The traced cell, its row header and its column header are
 * marked, so the three-step lookup the page describes is visible as a shape
 * rather than only as a sentence.
 *
 * A reader can switch between the traces on a STAR table. There are two of them
 * because STAR has two rules, and seeing the same table answer differently
 * depending on which row you enter is the fastest way to understand why the two
 * towers are not the same tower.
 */
function symbolFor(operation: GaloOperation) {
  return operation === "PLUS" ? "⊕" : "★";
}

const SUPERSCRIPTS = "⁰¹²³⁴⁵⁶⁷⁸⁹";

/**
 * "2.98 × 10¹⁷" rather than "2.98 × 10^17". The caret form reads as a typo, and
 * in an RTL paragraph it breaks across the line at the caret, which leaves the
 * exponent stranded on its own.
 */
function superscript(value: number) {
  return String(value).replace(/\d/g, (digit) => SUPERSCRIPTS[Number(digit)]!);
}

export function CayleyTableCard({ entry }: { entry: TableEntry }) {
  const { t } = useI18n();
  const captionId = useId();
  const [activeTrace, setActiveTrace] = useState(0);

  const table = buildCayleyTable(entry.operation, entry.level);
  const trace: TableTrace = entry.traces[activeTrace] ?? entry.traces[0]!;
  const symbol = symbolFor(entry.operation);
  const counts = tableCountDisplay(entry.level);

  return (
    <article
      className={`cayley-card is-${entry.operation.toLowerCase()}`}
      id={`${entry.operation.toLowerCase()}-l${entry.level}`}
    >
      <header className="cayley-card__head">
        <span className="cayley-card__name" dir="ltr">
          {entry.operation}
          <sub>{entry.level}</sub>
        </span>
        <span className="cayley-card__size" dir="ltr">
          {entry.level} × {entry.level}
        </span>
      </header>

      <p className="cayley-card__reading">{t(entry.reading)}</p>

      <div className="cayley-card__body">
        <div className="cayley-card__grid" role="region" aria-labelledby={captionId} tabIndex={0}>
          <table className="cayley-table">
            <caption id={captionId}>
              {t("The complete {operation} table at level {level}", {
                operation: entry.operation,
                level: entry.level,
              })}
            </caption>
            <thead>
              <tr>
                <th scope="col">
                  <span dir="ltr">{symbol}</span>
                </th>
                {table[0]!.map((cell) => (
                  <th
                    key={cell.right}
                    scope="col"
                    className={cell.right === trace.right ? "is-traced" : undefined}
                    dir="ltr"
                  >
                    P{cell.right}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.map((row, left) => (
                <tr key={left} className={left === trace.left ? "is-traced" : undefined}>
                  <th scope="row" className={left === trace.left ? "is-traced" : undefined} dir="ltr">
                    P{left}
                  </th>
                  {row.map((cell) => {
                    const isTraced = cell.left === trace.left && cell.right === trace.right;
                    // The absorbing row is the whole difference between the two
                    // towers, so it is shaded even when it is not being traced.
                    const isAbsorbing = entry.operation === "STAR" && cell.left === 0;
                    return (
                      <td
                        key={cell.right}
                        className={
                          `${isTraced ? "is-traced " : ""}${isAbsorbing ? "is-absorbing" : ""}`.trim() || undefined
                        }
                        dir="ltr"
                      >
                        {cell.result}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="cayley-card__script">
          {entry.traces.length > 1 && (
            <div className="cayley-card__tabs" role="tablist" aria-label={t("Which rule this lookup takes")}>
              {entry.traces.map((option, index) => (
                <button
                  key={option.label}
                  type="button"
                  role="tab"
                  aria-selected={index === activeTrace}
                  onClick={() => setActiveTrace(index)}
                >
                  {t(option.label)}
                </button>
              ))}
            </div>
          )}

          <p className="cayley-card__question" dir="ltr">
            P{trace.left} {symbol} P{trace.right} = ?
          </p>

          <ol className="cayley-card__steps">
            {trace.lines.map((line, index) => (
              <li key={`${line.expression}-${index}`}>
                <bdi dir="ltr">{line.expression}</bdi>
                <span>{t(line.because, { left: trace.left, right: trace.right })}</span>
              </li>
            ))}
          </ol>

          <p className="cayley-card__answer">
            <span>{t("Answer")}</span>
            <bdi dir="ltr">P{trace.result}</bdi>
          </p>

          <p className="cayley-card__space">
            {t("Tables that could have been declared at this level: {count}. Declared and frozen: 2.", {
              count: counts.exact ?? `${counts.mantissa} × 10${superscript(counts.exponent)}`,
            })}
          </p>
        </div>
      </div>
    </article>
  );
}
