import { useMemo, useState } from "react";
import {
  buildCanonicalTypedCell,
  galoActionFamilies,
  galoLevels,
  type GaloActionFamily,
  type GaloLevel,
} from "../../content/mathematics";
import { useI18n } from "../../i18n/I18nContext";

function clampCoordinate(level: GaloLevel, coordinate: number) {
  return Math.min(coordinate, level - 1);
}

export function TypedCellExplorer() {
  const { t } = useI18n();
  const [level, setLevel] = useState<GaloLevel>(3);
  const [family, setFamily] = useState<GaloActionFamily>("STAR_LEFT");
  const [source, setSource] = useState(0);
  const [active, setActive] = useState(2);
  const cell = useMemo(() => buildCanonicalTypedCell(level, family, source, active), [active, family, level, source]);
  const symbol = cell.operation === "PLUS" ? "⊕" : "★";
  const resetController = cell.orientation === "LEFT" ? "source" : "active";

  const chooseLevel = (nextLevel: GaloLevel) => {
    setLevel(nextLevel);
    setSource((value) => clampCoordinate(nextLevel, value));
    setActive((value) => clampCoordinate(nextLevel, value));
  };

  return (
    <div className="typed-cell-explorer">
      <div className="typed-cell-explorer__controls" aria-label={t("Typed cell controls")}>
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
          <legend>{t("Action family")}</legend>
          <div className="segmented-control typed-cell-explorer__families" aria-label={t("Choose action family")}>
            {galoActionFamilies.map((item) => (
              <button key={item} type="button" aria-pressed={family === item} onClick={() => setFamily(item)}>
                {item}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend>{t("Source state")}</legend>
          <div className="segmented-control" aria-label={t("Choose source state")}>
            {Array.from({ length: level }, (_, pole) => (
              <button key={pole} type="button" aria-pressed={source === pole} onClick={() => setSource(pole)}>
                P{pole}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend>{t("Active pole")}</legend>
          <div className="segmented-control" aria-label={t("Choose active pole")}>
            {Array.from({ length: level }, (_, pole) => (
              <button key={pole} type="button" aria-pressed={active === pole} onClick={() => setActive(pole)}>
                P{pole}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="typed-cell-explorer__output">
        <article className="typed-cell-record" aria-live="polite">
          <span>{t("Canonical typed coordinate")}</span>
          <code dir="ltr">{cell.cellId}</code>
          <dl dir="ltr">
            <div>
              <dt>level_n</dt>
              <dd dir="ltr">L{cell.level}</dd>
            </div>
            <div>
              <dt>action_family</dt>
              <dd dir="ltr">{cell.family}</dd>
            </div>
            <div>
              <dt>source_state</dt>
              <dd dir="ltr">P{cell.source}</dd>
            </div>
            <div>
              <dt>active_pole</dt>
              <dd dir="ltr">P{cell.active}</dd>
            </div>
            <div>
              <dt>target_state</dt>
              <dd dir="ltr">P{cell.target}</dd>
            </div>
          </dl>
        </article>

        <article className="typed-cell-derivation">
          <span>{t("Direct table derivation")}</span>
          <div className="typed-cell-derivation__steps" dir="ltr">
            <code>
              {cell.family}(P{cell.source}, P{cell.active})
            </code>
            <b aria-hidden="true">=</b>
            <code>
              {cell.operation}(P{cell.leftOperand}, P{cell.rightOperand})
            </code>
            <b aria-hidden="true">=</b>
            <code>
              P{cell.leftOperand} {symbol} P{cell.rightOperand}
            </code>
            <b aria-hidden="true">=</b>
            <strong>P{cell.target}</strong>
          </div>
          <p>
            {t(
              cell.operation === "PLUS"
                ? "PLUS is commutative, so the two orientations reach the same target; their typed coordinates remain different."
                : resetController === "source"
                  ? "STAR_LEFT tests the source: source P0 activates the reset row."
                  : "STAR_RIGHT places the active pole on the left: active P0 activates the reset row.",
            )}
          </p>
          <small>{t("Formula-derived educational view; it does not issue an engine receipt or verdict.")}</small>
        </article>
      </div>
    </div>
  );
}
