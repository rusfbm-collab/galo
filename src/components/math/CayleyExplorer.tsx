import { useMemo, useState, type KeyboardEvent } from "react";
import {
  applyGaloOperation,
  buildCayleyTable,
  galoLevels,
  galoOperations,
  type GaloLevel,
  type GaloOperation,
} from "../../content/mathematics";
import { useI18n } from "../../i18n/I18nContext";

type Coordinate = {
  left: number;
  right: number;
};

function initialCoordinate(level: GaloLevel): Coordinate {
  if (level === 1) return { left: 0, right: 0 };
  return { left: 1, right: Math.min(2, level - 1) };
}

export function CayleyExplorer() {
  const { direction, t } = useI18n();
  const [level, setLevel] = useState<GaloLevel>(3);
  const [operation, setOperation] = useState<GaloOperation>("PLUS");
  const [selected, setSelected] = useState<Coordinate>(initialCoordinate(3));
  const [preview, setPreview] = useState<Coordinate | null>(null);
  const table = useMemo(() => buildCayleyTable(operation, level), [level, operation]);
  const inspected = preview ?? selected;
  const result = applyGaloOperation(operation, level, selected.left, selected.right);
  const symbol = operation === "PLUS" ? "+" : "★";
  const rule = operation === "STAR" && selected.left === 0 ? "RESET ROW" : "CYCLIC STEP";

  const chooseLevel = (nextLevel: GaloLevel) => {
    setLevel(nextLevel);
    setSelected(initialCoordinate(nextLevel));
    setPreview(null);
  };

  const moveByKeyboard = (event: KeyboardEvent<HTMLButtonElement>, left: number, right: number) => {
    const offsets: Partial<Record<string, Coordinate>> = {
      ArrowUp: { left: -1, right: 0 },
      ArrowDown: { left: 1, right: 0 },
      ArrowLeft: { left: 0, right: -1 },
      ArrowRight: { left: 0, right: 1 },
    };
    const offset = offsets[event.key];
    if (!offset) return;
    event.preventDefault();
    const next = {
      left: (left + offset.left + level) % level,
      right: (right + offset.right + level) % level,
    };
    setSelected(next);
    setPreview(null);
    window.requestAnimationFrame(() => {
      document.querySelector<HTMLButtonElement>(`[data-cayley-cell="${next.left}-${next.right}"]`)?.focus();
    });
  };

  return (
    <div className="cayley-explorer">
      <div className="cayley-explorer__controls" aria-label={t("Cayley table controls")}>
        <fieldset>
          <legend>{t("Level")}</legend>
          <div className="segmented-control segmented-control--levels">
            {galoLevels.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={level === item}
                aria-label={t("Choose level L{level}", { level: item })}
                onClick={() => chooseLevel(item)}
              >
                L{item}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend>{t("Operation")}</legend>
          <div className="segmented-control" aria-label={t("Choose operation")}>
            {galoOperations.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={operation === item}
                onClick={() => {
                  setOperation(item);
                  setPreview(null);
                }}
              >
                <span aria-hidden="true">{item === "PLUS" ? "+" : "★"}</span> {item}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="cayley-explorer__workspace">
        <div className="cayley-table-wrap" dir="ltr">
          <table className="cayley-table">
            <caption dir={direction}>{t("{operation} Cayley table at L{level}", { operation, level })}</caption>
            <thead>
              <tr>
                <th className="cayley-table__corner" scope="col" aria-label={t("Left operand by right operand")}>
                  {symbol}
                  <sub>{level}</sub>
                </th>
                {Array.from({ length: level }, (_, right) => (
                  <th key={right} className={inspected.right === right ? "is-axis" : ""} scope="col">
                    P{right}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.map((row, left) => (
                <tr key={left}>
                  <th className={inspected.left === left ? "is-axis" : ""} scope="row">
                    P{left}
                  </th>
                  {row.map((cell) => {
                    const isSelected = selected.left === cell.left && selected.right === cell.right;
                    const isAxis = inspected.left === cell.left || inspected.right === cell.right;
                    return (
                      <td key={`${cell.left}-${cell.right}`} className={isAxis ? "is-axis" : ""}>
                        <button
                          className={isSelected ? "is-selected" : ""}
                          type="button"
                          aria-pressed={isSelected}
                          tabIndex={isSelected ? 0 : -1}
                          data-cayley-cell={`${cell.left}-${cell.right}`}
                          aria-label={t("{operation} at L{level}: P{left} with P{right} equals P{result}", {
                            operation,
                            level,
                            left: cell.left,
                            right: cell.right,
                            result: cell.result,
                          })}
                          onClick={() => setSelected({ left: cell.left, right: cell.right })}
                          onFocus={() => setPreview({ left: cell.left, right: cell.right })}
                          onBlur={() => setPreview(null)}
                          onMouseEnter={() => setPreview({ left: cell.left, right: cell.right })}
                          onMouseLeave={() => setPreview(null)}
                          onKeyDown={(event) => moveByKeyboard(event, cell.left, cell.right)}
                        >
                          P{cell.result}
                        </button>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <aside className="cayley-result" aria-live="polite">
          <div className="cayley-result__topline">
            <span>{t("Selected cell")}</span>
            <strong>{t(rule)}</strong>
          </div>
          <p className="cayley-result__equation mono" dir="ltr">
            {operation}
            <sub>{level}</sub>(P{selected.left}, P{selected.right}) = P{result}
          </p>
          <p>
            {t("Left P{left}, right P{right}: {operation} returns P{result}.", {
              left: selected.left,
              right: selected.right,
              operation,
              result,
            })}
          </p>
          <dl className="cayley-result__axes">
            <div>
              <dt>{t("Rows: left operand")}</dt>
              <dd dir="ltr">P{selected.left}</dd>
            </div>
            <div>
              <dt>{t("Columns: right operand")}</dt>
              <dd dir="ltr">P{selected.right}</dd>
            </div>
            <div>
              <dt>{t("Cell: result")}</dt>
              <dd dir="ltr">P{result}</dd>
            </div>
          </dl>
        </aside>
      </div>

      <div className="cayley-explorer__formula">
        <span>{t(operation === "PLUS" ? "PLUS formula" : "STAR formula")}</span>
        <code dir="ltr">
          {operation === "PLUS"
            ? "PLUS_n(P_i, P_j) = P_((i + j) mod n)"
            : "STAR_n(P_i, P_j) = P0 if i = 0; else P_((i + j) mod n)"}
        </code>
        <small>
          {t("Generated locally from the displayed formula. Educational view — not a live engine, Atlas, or replay.")}
        </small>
      </div>
    </div>
  );
}
