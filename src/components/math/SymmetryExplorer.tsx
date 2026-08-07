import { useState } from "react";
import {
  buildCarrierOrbit,
  buildPairOrbit,
  buildPairStabilizer,
  countPairOrbitsByBurnside,
  fixedPointsOfUnit,
  galoLevels,
  unitCycleDecomposition,
  unitMultipliers,
  type GaloLevel,
} from "../../content/mathematics";
import { useI18n } from "../../i18n/I18nContext";

function poleList(values: readonly number[]) {
  return values.map((value) => `P${value}`).join(", ");
}

function cycleLabel(cycle: readonly number[]) {
  return `(${cycle.map((value) => `P${value}`).join(" ")})`;
}

export function SymmetryExplorer() {
  const { t } = useI18n();
  const [level, setLevel] = useState<GaloLevel>(5);
  const [multiplier, setMultiplier] = useState(2);
  const [source, setSource] = useState(1);
  const [active, setActive] = useState(2);
  const units = unitMultipliers(level);
  const selectedMultiplier = units.includes(multiplier) ? multiplier : units[0]!;

  const cycles = unitCycleDecomposition(level, selectedMultiplier);
  const carrierOrbit = buildCarrierOrbit(level, source);
  const pairOrbit = buildPairOrbit(level, source, active);
  const stabilizer = buildPairStabilizer(level, source, active);

  const changeLevel = (nextLevel: GaloLevel) => {
    setLevel(nextLevel);
    const nextUnits = unitMultipliers(nextLevel);
    setMultiplier(nextUnits[0]!);
    setSource((value) => Math.min(value, nextLevel - 1));
    setActive((value) => Math.min(value, nextLevel - 1));
  };

  return (
    <div className="symmetry-explorer">
      <div className="symmetry-explorer__controls" aria-label={t("Symmetry explorer controls")}>
        <label>
          <span>{t("Level")}</span>
          <select value={level} onChange={(event) => changeLevel(Number(event.target.value) as GaloLevel)}>
            {galoLevels.map((item) => (
              <option key={item} value={item}>
                L{item}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>{t("Unit multiplier")}</span>
          <select value={selectedMultiplier} onChange={(event) => setMultiplier(Number(event.target.value))}>
            {units.map((unit) => (
              <option key={unit} value={unit}>
                u={unit}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>{t("Source pole")}</span>
          <select value={source} onChange={(event) => setSource(Number(event.target.value))}>
            {Array.from({ length: level }, (_, value) => (
              <option key={value} value={value}>
                P{value}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>{t("Active pole")}</span>
          <select value={active} onChange={(event) => setActive(Number(event.target.value))}>
            {Array.from({ length: level }, (_, value) => (
              <option key={value} value={value}>
                P{value}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="symmetry-explorer__results" aria-live="polite">
        <article>
          <span>{t("Selected automorphism")}</span>
          <code dir="ltr">
            σ_{selectedMultiplier}(P_i)=P_(({selectedMultiplier}i) mod {level})
          </code>
          <strong dir="ltr">{cycles.map(cycleLabel).join(" ")}</strong>
          <p>{t("Cycle notation lists every pole exactly once; one-cycles are fixed points.")}</p>
        </article>
        <article>
          <span>{t("Carrier orbit")}</span>
          <code dir="ltr">
            Orb(P{source}) = {`{${poleList(carrierOrbit)}}`}
          </code>
          <p>{t("The orbit holds every image of the selected pole under all the units, and not just under the one that was selected.")}</p>
        </article>
        <article>
          <span>{t("Ordered-pair orbit")}</span>
          <code dir="ltr">
            {`{${pairOrbit.map(([pairSource, pairActive]) => `(P${pairSource},P${pairActive})`).join(", ")}}`}
          </code>
          <p>{t("The same multiplier acts diagonally on source and active; level and family remain fixed.")}</p>
        </article>
        <article>
          <span>{t("Stabilizer and orbit–stabilizer")}</span>
          <code dir="ltr">
            Stab(P{source},P{active}) = {`{${stabilizer.join(", ")}}`}
          </code>
          <strong dir="ltr">
            {units.length} = {pairOrbit.length} × {stabilizer.length}
          </strong>
          <p>{t("Group order equals orbit size times stabilizer order for this finite action.")}</p>
        </article>
      </div>

      <div className="burnside-ledger" aria-live="polite">
        <div>
          <span>{t("Burnside ledger for ordered pairs")}</span>
          <code dir="ltr">|Q_n²/U(n)| = (1/|U(n)|) Σ_u |Fix(u)|²</code>
        </div>
        <div className="burnside-ledger__rows" dir="ltr">
          {units.map((unit) => {
            const fixed = fixedPointsOfUnit(level, unit);
            return (
              <div key={unit}>
                <code>u={unit}</code>
                <span>Fix={fixed.length}</span>
                <span>Fix²={fixed.length ** 2}</span>
              </div>
            );
          })}
        </div>
        <strong dir="ltr">
          {t("Pair orbits")}: {countPairOrbitsByBurnside(level)} · {t("Typed orbits at this level")}: 4 ×{" "}
          {countPairOrbitsByBurnside(level)} = {4 * countPairOrbitsByBurnside(level)}
        </strong>
      </div>
    </div>
  );
}
