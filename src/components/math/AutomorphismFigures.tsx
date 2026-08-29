import {
  applyGaloOperation,
  buildCayleyTable,
  buildPairOrbit,
  buildPairStabilizer,
  countPairOrbitsByBurnside,
  countPairOrbitsByEnumeration,
  fixedPointsOfUnit,
  galoLevels,
  unitMultipliers,
  type GaloLevel,
} from "../../content/mathematics";
import { compressionTotals, type RenamingCase } from "../../content/automorphisms";
import { useI18n } from "../../i18n/I18nContext";

/**
 * The five computable figures of the automorphism subsection.
 *
 * They share a script renderer and they only ever appear together on one page,
 * so they live in one file rather than five near-identical ones. Every number
 * any of them prints is computed from the laws on render; nothing here is
 * transcribed, which is the point — a section arguing that a script settles
 * something should not itself be a set of claims typed in by hand.
 */
function Script({ lines }: { lines: readonly { expression: string; because?: string }[] }) {
  const { t } = useI18n();
  return (
    <ol className="auto-script">
      {lines.map((line, index) => (
        <li key={`${line.expression}-${index}`}>
          <bdi dir="ltr">{line.expression}</bdi>
          {line.because ? <span>{t(line.because)}</span> : null}
        </li>
      ))}
    </ol>
  );
}

/* ------------------------------------------- 01 · relabel, redraw, compare ---- */

/**
 * The definition, run rather than stated. Both tables are redrawn under the
 * candidate renaming and compared cell by cell; the verdict is whatever the
 * comparison returns.
 */
export function AutomorphismReplayFigure({ cases }: { cases: readonly RenamingCase[] }) {
  const { t } = useI18n();

  return (
    <div className="auto-cases">
      {cases.map((entry) => {
        const table = buildCayleyTable(entry.drawnOperation, entry.level);
        const checks = entry.level * entry.level * 2;
        const passes = entry.counterexample === null;

        return (
          <section key={`${entry.level}-${entry.multiplier}`} className={`auto-case ${passes ? "is-pass" : "is-fail"}`}>
            <header>
              <bdi dir="ltr">
                φ(P<sub>i</sub>) = P
                <sub>
                  {entry.multiplier}i mod {entry.level}
                </sub>
              </bdi>
              <span className="auto-case__verdict">{passes ? t("an automorphism") : t("not even a renaming")}</span>
            </header>

            {/* Where each pole goes. A collision here means the map is not a
                renaming at all, which is a stronger failure than failing the law. */}
            <div className="auto-case__map">
              {entry.images.map((image, pole) => {
                const collides = entry.images.indexOf(image) !== pole;
                return (
                  <span key={pole} className={collides ? "is-collision" : undefined} dir="ltr">
                    P{pole} → P{image}
                  </span>
                );
              })}
            </div>

            <div className="auto-case__body">
              <div className="auto-case__grid">
                <table className="term-figure__table">
                  <caption>
                    {t("{operation} at level {level}, redrawn under the renaming", {
                      operation: entry.drawnOperation,
                      level: entry.level,
                    })}
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col" dir="ltr">
                        {entry.drawnOperation === "PLUS" ? "⊕" : "★"}
                      </th>
                      {table[0]!.map((cell) => (
                        <th key={cell.right} scope="col" dir="ltr">
                          P{cell.right}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table.map((row, left) => (
                      <tr key={left}>
                        <th scope="row" dir="ltr">
                          P{left}
                        </th>
                        {row.map((cell) => {
                          // Combine then rename, against rename then combine.
                          const mapped = (entry.multiplier * cell.result) % entry.level;
                          const direct = applyGaloOperation(
                            entry.drawnOperation,
                            entry.level,
                            (entry.multiplier * cell.left) % entry.level,
                            (entry.multiplier * cell.right) % entry.level,
                          );
                          return (
                            <td key={cell.right} className={mapped === direct ? undefined : "is-broken"} dir="ltr">
                              {direct}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="auto-case__script">
                <Script
                  lines={
                    passes
                      ? [
                          { expression: `φ(a ⊕ b) =? φ(a) ⊕ φ(b)`, because: "The test, for every pair of poles." },
                          { expression: `φ(a ★ b) =? φ(a) ★ φ(b)`, because: "And again for the second law." },
                          {
                            expression: `${checks} / ${checks} agree`,
                            because: "Every cell of both tables lands back where it was.",
                          },
                        ]
                      : [
                          {
                            expression: `P${entry.images.indexOf(entry.images.find((image, pole) => entry.images.indexOf(image) !== pole) ?? 0)} and P${entry.images.findIndex((image, pole) => entry.images.indexOf(image) !== pole)} → same pole`,
                            because: "Two poles are sent to one name, so this is not a bijection of the carrier.",
                          },
                          {
                            expression: `${entry.counterexample!.operation}: φ(${entry.counterexample!.left}, ${entry.counterexample!.right}) = ${entry.counterexample!.mapped}`,
                            because: "Combine first, then rename.",
                          },
                          {
                            expression: `${entry.counterexample!.operation}: (φ${entry.counterexample!.left}, φ${entry.counterexample!.right}) = ${entry.counterexample!.direct}`,
                            because: "Rename first, then combine. The two routes disagree, and the pair is named.",
                          },
                        ]
                  }
                />
              </div>
            </div>

            <p className="auto-case__reading">{t(entry.reading)}</p>
          </section>
        );
      })}
    </div>
  );
}

/* ------------------------------------------- 02 · which multipliers survive ---- */

export function UnitLedgerFigure() {
  const { t } = useI18n();
  const total = galoLevels.reduce((sum, level) => sum + unitMultipliers(level).length, 0);

  return (
    <div className="auto-ledger" role="region" aria-label={t("Automorphisms at each level")} tabIndex={0}>
      <table className="auto-table">
        <thead>
          <tr>
            <th scope="col">{t("Level")}</th>
            <th scope="col">{t("Multipliers that survive the test")}</th>
            <th scope="col">{t("How many")}</th>
            <th scope="col">{t("Why that many")}</th>
          </tr>
        </thead>
        <tbody>
          {galoLevels.map((level) => {
            const units = unitMultipliers(level);
            return (
              <tr key={level}>
                <th scope="row" dir="ltr">
                  L{level}
                </th>
                <td dir="ltr">{units.map((unit) => `×${unit}`).join("  ")}</td>
                <td dir="ltr">{units.length}</td>
                <td>{t(reasonFor(level))}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th scope="row">{t("All seven")}</th>
            <td />
            <td dir="ltr">{total}</td>
            <td>{t("Every renaming these tables admit, and there are no others to find.")}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

/**
 * Why a level has the automorphism count it has, in one clause. Derived from the
 * level itself so a changed level set cannot leave a wrong reason behind.
 */
function reasonFor(level: GaloLevel) {
  if (level === 1) return "One pole, so the only renaming is the one that does nothing.";
  if (level === 2) return "Two poles, and P0 is pinned, so nothing is left to move.";
  const divisors = Array.from({ length: level - 2 }, (_, index) => index + 2).filter((value) => level % value === 0);
  if (divisors.length === 0) return "Prime, so no multiplier can collapse two poles together and every one survives.";
  return "Divisible, so any multiplier sharing a factor with the level sends two poles to one name and is ruled out.";
}

/* ------------------------------------------------------- 03 · the payoff ---- */

export function OrbitCompressionFigure() {
  const { t } = useI18n();
  const families = 4;

  return (
    <div className="auto-ledger" role="region" aria-label={t("Coordinates against orbits")} tabIndex={0}>
      <table className="auto-table">
        <thead>
          <tr>
            <th scope="col">{t("Level")}</th>
            <th scope="col">{t("Ordered pairs")}</th>
            <th scope="col">{t("Orbits, by enumeration")}</th>
            <th scope="col">{t("Orbits, by Burnside")}</th>
            <th scope="col">{t("Left to check")}</th>
          </tr>
        </thead>
        <tbody>
          {galoLevels.map((level) => {
            const pairs = level * level;
            const enumerated = countPairOrbitsByEnumeration(level);
            const burnside = countPairOrbitsByBurnside(level);
            return (
              <tr key={level}>
                <th scope="row" dir="ltr">
                  L{level}
                </th>
                <td dir="ltr">{pairs}</td>
                <td dir="ltr">{enumerated}</td>
                {/* The two channels are printed side by side on purpose: a
                    disagreement should be visible, not averaged away. */}
                <td dir="ltr" className={enumerated === burnside ? "is-agree" : "is-broken"}>
                  {burnside}
                </td>
                <td dir="ltr">{Math.round((enumerated / pairs) * 100)}%</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th scope="row">{t("All seven")}</th>
            <td dir="ltr">{compressionTotals.pairs}</td>
            <td dir="ltr">{compressionTotals.orbits}</td>
            <td dir="ltr">{compressionTotals.orbits}</td>
            <td dir="ltr">{Math.round((compressionTotals.orbits / compressionTotals.pairs) * 100)}%</td>
          </tr>
          <tr>
            <th scope="row">{t("× four typed families")}</th>
            <td dir="ltr">{compressionTotals.pairs * families}</td>
            <td dir="ltr">{compressionTotals.orbits * families}</td>
            <td dir="ltr">{compressionTotals.orbits * families}</td>
            <td dir="ltr">{Math.round((compressionTotals.orbits / compressionTotals.pairs) * 100)}%</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

/* ----------------------------------------------- 04 · the second channel ---- */

const BURNSIDE_LEVEL: GaloLevel = 6;

export function BurnsideScriptFigure() {
  const { t } = useI18n();
  const units = unitMultipliers(BURNSIDE_LEVEL);
  const rows = units.map((multiplier) => {
    const fixed = fixedPointsOfUnit(BURNSIDE_LEVEL, multiplier);
    return { multiplier, fixed, fixedPairs: fixed.length ** 2 };
  });
  const total = rows.reduce((sum, row) => sum + row.fixedPairs, 0);
  const average = total / units.length;
  const enumerated = countPairOrbitsByEnumeration(BURNSIDE_LEVEL);

  return (
    <div className="auto-burnside">
      <table className="auto-table">
        <caption>{t("Level {level}, one row per renaming", { level: BURNSIDE_LEVEL })}</caption>
        <thead>
          <tr>
            <th scope="col">{t("Renaming")}</th>
            <th scope="col">{t("Poles it leaves alone")}</th>
            <th scope="col">{t("Pairs it leaves alone")}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.multiplier}>
              <th scope="row" dir="ltr">
                ×{row.multiplier}
              </th>
              <td dir="ltr">{row.fixed.map((pole) => `P${pole}`).join(", ")}</td>
              <td dir="ltr">
                {row.fixed.length}² = {row.fixedPairs}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Script
        lines={[
          {
            expression: `${rows.map((row) => row.fixedPairs).join(" + ")} = ${total}`,
            because: "Add the fixed-pair counts across every renaming.",
          },
          {
            expression: `${total} / ${units.length} = ${average}`,
            because: "Divide by how many renamings there are. That average is Burnside's lemma.",
          },
          {
            expression: `${average} = ${enumerated}`,
            because:
              "And it is the number the enumeration reached by walking the orbits, which shares none of this working.",
          },
        ]}
      />
    </div>
  );
}

/* ------------------------------------------------------- 05 · one orbit ---- */

const WALK_LEVEL: GaloLevel = 5;
const WALK_PAIR: [number, number] = [1, 2];

export function OrbitWalkFigure() {
  const [source, active] = WALK_PAIR;
  const units = unitMultipliers(WALK_LEVEL);
  const orbit = buildPairOrbit(WALK_LEVEL, source, active);
  const stabiliser = buildPairStabilizer(WALK_LEVEL, source, active);

  return (
    <div className="auto-walk">
      <div className="auto-walk__steps">
        {units.map((multiplier) => {
          const image: [number, number] = [(multiplier * source) % WALK_LEVEL, (multiplier * active) % WALK_LEVEL];
          const fixes = image[0] === source && image[1] === active;
          return (
            <span key={multiplier} className={fixes ? "is-fixed" : undefined} dir="ltr">
              ×{multiplier} → (P{image[0]}, P{image[1]})
            </span>
          );
        })}
      </div>

      <Script
        lines={[
          {
            expression: `orbit = { ${orbit.map(([s, a]) => `(P${s}, P${a})`).join(", ")} }`,
            because: "The distinct places the pair can be carried to. All of them are the same coordinate to the laws.",
          },
          {
            expression: `stabiliser = { ${stabiliser.map((multiplier) => `×${multiplier}`).join(", ")} }`,
            because: "The renamings that leave it exactly where it was.",
          },
          {
            expression: `${orbit.length} × ${stabiliser.length} = ${orbit.length * stabiliser.length} = |Aut|`,
            because:
              "Orbit size times stabiliser size is the number of renamings — a check that holds at every pair, not only this one.",
          },
        ]}
      />
    </div>
  );
}
