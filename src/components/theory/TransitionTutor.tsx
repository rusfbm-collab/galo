import { useMemo, useState } from "react";
import { ArrowRight, Check, RotateCcw } from "lucide-react";
import {
  buildCanonicalTypedCell,
  buildCayleyTable,
  galoActionFamilies,
  galoLevels,
  type GaloActionFamily,
  type GaloLevel,
} from "../../content/mathematics";
import { useI18n } from "../../i18n/I18nContext";

function clamp(level: GaloLevel, value: number) {
  return Math.min(value, level - 1);
}

export function TransitionTutor() {
  const { direction, t } = useI18n();
  const [level, setLevel] = useState<GaloLevel>(3);
  const [family, setFamily] = useState<GaloActionFamily>("STAR_LEFT");
  const [source, setSource] = useState(0);
  const [active, setActive] = useState(2);
  const cell = useMemo(() => buildCanonicalTypedCell(level, family, source, active), [active, family, level, source]);
  const table = useMemo(() => buildCayleyTable(cell.operation, level), [cell.operation, level]);
  const symbol = cell.operation === "PLUS" ? "⊕" : "★";
  const isReset = cell.operation === "STAR" && cell.leftOperand === 0;
  const sourceIsLeft = cell.orientation === "LEFT";
  const tableResult = table[cell.leftOperand]![cell.rightOperand]!.result;
  const formulaResult =
    cell.operation === "PLUS"
      ? (cell.leftOperand + cell.rightOperand) % level
      : cell.leftOperand === 0
        ? 0
        : (cell.leftOperand + cell.rightOperand) % level;
  const channelsAgree = tableResult === formulaResult && formulaResult === cell.target;

  const chooseLevel = (nextLevel: GaloLevel) => {
    setLevel(nextLevel);
    setSource((value) => clamp(nextLevel, value));
    setActive((value) => clamp(nextLevel, value));
  };

  const reset = () => {
    setLevel(3);
    setFamily("STAR_LEFT");
    setSource(0);
    setActive(2);
  };

  return (
    <div className="theory-tutor">
      <div className="theory-tutor__topline">
        <div>
          <span>{t("Guided transition laboratory")}</span>
          <strong>{t("Change one input and watch every witness update.")}</strong>
        </div>
        <span className="status status--pass">{t("FORMULA-DERIVED")}</span>
      </div>

      <div className="theory-tutor__controls" aria-label={t("Beginner transition controls")}>
        <fieldset>
          <legend>{t("1. Choose how many local states exist")}</legend>
          <div className="segmented-control segmented-control--levels">
            {galoLevels.map((item) => (
              <button key={item} type="button" aria-pressed={level === item} onClick={() => chooseLevel(item)}>
                L{item}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend>{t("2. Choose the transition family")}</legend>
          <div className="segmented-control theory-tutor__families">
            {galoActionFamilies.map((item) => (
              <button key={item} type="button" aria-pressed={family === item} onClick={() => setFamily(item)}>
                {item}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend>{t("3. Choose the source state")}</legend>
          <div className="segmented-control">
            {Array.from({ length: level }, (_, value) => (
              <button key={value} type="button" aria-pressed={source === value} onClick={() => setSource(value)}>
                P{value}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend>{t("4. Choose the active pole")}</legend>
          <div className="segmented-control">
            {Array.from({ length: level }, (_, value) => (
              <button key={value} type="button" aria-pressed={active === value} onClick={() => setActive(value)}>
                P{value}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="theory-tutor__transition" aria-live="polite">
        <div>
          <span>{t("source")}</span>
          <strong dir="ltr">P{cell.source}</strong>
        </div>
        <ArrowRight className="directional-icon" size={20} aria-hidden="true" />
        <div className="theory-tutor__family">
          <span>{t("family")}</span>
          <strong dir="ltr">{cell.family}</strong>
        </div>
        <ArrowRight className="directional-icon" size={20} aria-hidden="true" />
        <div>
          <span>{t("active")}</span>
          <strong dir="ltr">P{cell.active}</strong>
        </div>
        <ArrowRight className="directional-icon" size={20} aria-hidden="true" />
        <div className="theory-tutor__target">
          <span>{t("target")}</span>
          <strong dir="ltr">P{cell.target}</strong>
        </div>
      </div>

      <div className="theory-tutor__workspace">
        <article className="theory-tutor__replay">
          <span className="theory-card-label">{t("Plain-language replay")}</span>
          <h3>{t("Five small decisions produce one exact transition.")}</h3>
          <ol>
            <li>
              <Check size={16} aria-hidden="true" />
              <p>
                {t("L{level} contains exactly {count} allowed state labels: {states}.", {
                  level,
                  count: level,
                  states: Array.from({ length: level }, (_, value) => `P${value}`).join(", "),
                })}
              </p>
            </li>
            <li>
              <Check size={16} aria-hidden="true" />
              <p>
                {t(
                  sourceIsLeft
                    ? "LEFT places source P{source} on the raw left and active P{active} on the raw right."
                    : "RIGHT places active P{active} on the raw left and source P{source} on the raw right.",
                  { source: cell.source, active: cell.active },
                )}
              </p>
            </li>
            <li>
              <Check size={16} aria-hidden="true" />
              <p>
                {t(
                  cell.operation === "PLUS"
                    ? "PLUS always adds the two indices and wraps around modulo {level}."
                    : isReset
                      ? "STAR sees P0 on the raw left, so the reset clause returns P0 immediately."
                      : "STAR sees a nonzero raw-left pole, so this cell follows cyclic addition modulo {level}.",
                  { level },
                )}
              </p>
            </li>
            <li>
              <Check size={16} aria-hidden="true" />
              <p>
                {t("The table address is row P{left}, column P{right}; that cell contains P{target}.", {
                  left: cell.leftOperand,
                  right: cell.rightOperand,
                  target: cell.target,
                })}
              </p>
            </li>
            <li>
              <Check size={16} aria-hidden="true" />
              <p>
                {t(
                  "The complete typed address is {cellId}. The target is stored as its own result and never hidden inside the ID.",
                  {
                    cellId: cell.cellId,
                  },
                )}
              </p>
            </li>
          </ol>
          <button className="text-button" type="button" onClick={reset}>
            <RotateCcw size={15} aria-hidden="true" /> {t("Restore the L3 reset example")}
          </button>
        </article>

        <article className="theory-tutor__witness">
          <div className="theory-tutor__witness-heading">
            <span className="theory-card-label">{t("Two-channel witness")}</span>
            <strong>{t("Formula and complete table must agree")}</strong>
          </div>
          <div className="theory-tutor__formula">
            <span>{t("Formula channel")}</span>
            <code dir="ltr">
              {cell.family}(P{cell.source}, P{cell.active}) = {cell.operation}(P{cell.leftOperand}, P{cell.rightOperand}
              ) = P{cell.leftOperand} {symbol} P{cell.rightOperand} = P{formulaResult}
            </code>
          </div>
          <div
            className="theory-tutor__table-wrap"
            role="region"
            aria-label={t("Complete {operation} table at L{level}", { operation: cell.operation, level })}
            tabIndex={0}
          >
            <table className="theory-tutor__table" dir="ltr">
              <caption dir={direction}>
                {t("Complete {operation} table at L{level}", { operation: cell.operation, level })}
              </caption>
              <thead>
                <tr>
                  <th scope="col">
                    {symbol}
                    <sub>{level}</sub>
                  </th>
                  {Array.from({ length: level }, (_, right) => (
                    <th key={right} className={right === cell.rightOperand ? "is-axis" : ""} scope="col">
                      P{right}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.map((row, left) => (
                  <tr key={left}>
                    <th className={left === cell.leftOperand ? "is-axis" : ""} scope="row">
                      P{left}
                    </th>
                    {row.map((entry) => {
                      const selected = entry.left === cell.leftOperand && entry.right === cell.rightOperand;
                      return (
                        <td key={`${entry.left}-${entry.right}`} className={selected ? "is-selected" : ""}>
                          P{entry.result}
                          {selected && <span className="sr-only"> · {t("Selected cell")}</span>}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <dl className="theory-tutor__record" dir="ltr">
            <div>
              <dt>check_id</dt>
              <dd>BEGINNER_TRANSITION_DUAL_CHANNEL</dd>
            </div>
            <div>
              <dt>cell_id</dt>
              <dd>{cell.cellId}</dd>
            </div>
            <div>
              <dt>raw_operands</dt>
              <dd>
                P{cell.leftOperand}, P{cell.rightOperand}
              </dd>
            </div>
            <div>
              <dt>table_expected</dt>
              <dd>P{tableResult}</dd>
            </div>
            <div>
              <dt>formula_got</dt>
              <dd>P{formulaResult}</dd>
            </div>
            <div>
              <dt>rc</dt>
              <dd>{channelsAgree ? 0 : 1}</dd>
            </div>
            <div>
              <dt>status</dt>
              <dd>{channelsAgree ? "PASS" : "FAIL"}</dd>
            </div>
          </dl>
          <p className="theory-tutor__boundary">
            {t(
              "This browser lab recomputes finite mathematics. It does not run the release engine, interpret natural language, issue an operational receipt, or learn.",
            )}
          </p>
        </article>
      </div>
    </div>
  );
}
