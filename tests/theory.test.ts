import { describe, expect, it } from "vitest";
import {
  buildCanonicalTower,
  buildCayleyTable,
  buildFixedActiveTransformation,
  canonicalTypedCellCount,
  countPairOrbitsByBurnside,
  countPairOrbitsByEnumeration,
  galoActionFamilies,
  galoLevels,
  rawCellsPerOperator,
  rawLawCellCount,
  structuralOrbitCount,
  structuralOrbitCountByBurnside,
  unitMultipliers,
} from "../src/content/mathematics";
import { releaseEvidence, workTrackMilestones } from "../src/content/evidence";
import {
  beginnerCountLedger,
  currentV4Flow,
  runtimeArithmeticRows,
  conceptLessonRequiredFields,
  conceptLessons,
  conceptLessonTranslationKeys,
  targetArchitectureFlow,
  theoryArchitectureLayers,
  theoryEvidenceLadder,
  theoryGlossary,
  theoryMisconceptions,
  theoryObjectClasses,
  theorySymbolLegend,
} from "../src/content/theory";

function formulaResult(operation: "PLUS" | "STAR", level: number, left: number, right: number) {
  if (operation === "STAR" && left === 0) return 0;
  return (left + right) % level;
}

describe("beginner theory dual-channel safeguards", () => {
  it("reconstructs the 140 / 280 / 560 / 556 ledger from object-level counts", () => {
    const orderedPairs = galoLevels.reduce((sum, level) => sum + level ** 2, 0);
    const rawLawCells = 2 * orderedPairs;
    const orientedTypedCells = 2 * rawLawCells;
    const activeRuntimeCells = orientedTypedCells - galoActionFamilies.length;

    expect([orderedPairs, rawLawCells, orientedTypedCells, activeRuntimeCells]).toEqual([140, 280, 560, 556]);
    expect([rawCellsPerOperator, rawLawCellCount, canonicalTypedCellCount]).toEqual([140, 280, 560]);
    expect(beginnerCountLedger.map(({ count }) => count)).toEqual([140, 280, 560, 556]);
    expect(beginnerCountLedger[3]?.calculation).toContain("control-only L1");
    expect(beginnerCountLedger[3]?.meaning).toContain("current V4");
  });

  it("independently reconciles every displayed law table cell with its formula", () => {
    let checked = 0;

    for (const level of galoLevels) {
      for (const operation of ["PLUS", "STAR"] as const) {
        const table = buildCayleyTable(operation, level);
        for (let left = 0; left < level; left += 1) {
          for (let right = 0; right < level; right += 1) {
            expect(table[left]?.[right]?.result).toBe(formulaResult(operation, level, left, right));
            checked += 1;
          }
        }
      }
    }

    expect(checked).toBe(280);
  });

  it("reconciles all 560 typed records through independent table and formula channels", () => {
    const tower = buildCanonicalTower();
    const ids = new Set<string>();

    for (const cell of tower) {
      const table = buildCayleyTable(cell.operation, cell.level);
      const tableExpected = table[cell.leftOperand]?.[cell.rightOperand]?.result;
      const formulaGot = formulaResult(cell.operation, cell.level, cell.leftOperand, cell.rightOperand);

      expect(tableExpected).toBe(formulaGot);
      expect(formulaGot).toBe(cell.target);
      expect(cell.cellId).toBe(`L${cell.level}:${cell.family}:P${cell.source}:P${cell.active}`);
      expect(cell.orientation === "LEFT" ? cell.leftOperand : cell.rightOperand).toBe(cell.source);
      expect(cell.orientation === "LEFT" ? cell.rightOperand : cell.leftOperand).toBe(cell.active);
      ids.add(cell.cellId);
    }

    expect(tower).toHaveLength(560);
    expect(ids.size).toBe(560);
  });

  it("keeps P0 one-sided at every nontrivial level and isolates the L1 degeneration", () => {
    expect(formulaResult("STAR", 1, 0, 0)).toBe(0);

    for (const level of galoLevels.slice(1)) {
      for (let value = 0; value < level; value += 1) {
        expect(formulaResult("STAR", level, 0, value)).toBe(0);
        expect(formulaResult("STAR", level, value, 0)).toBe(value);
      }
      expect(formulaResult("STAR", level, 0, 1)).not.toBe(1);
      for (let candidate = 0; candidate < level; candidate += 1) {
        const isTwoSidedIdentity = Array.from({ length: level }, (_, value) => value).every(
          (value) =>
            formulaResult("STAR", level, candidate, value) === value &&
            formulaResult("STAR", level, value, candidate) === value,
        );
        expect(isTwoSidedIdentity).toBe(false);
      }
    }

    expect(theoryMisconceptions.find(({ claim }) => claim === "P0 is the identity of STAR.")?.correction).toContain(
      "no two-sided identity",
    );
  });

  it("derives the two L3 STAR translation ranks and rejects the affine shift directly", () => {
    const rightTranslation = buildFixedActiveTransformation(3, "STAR_LEFT", 2);
    const leftTranslation = buildFixedActiveTransformation(3, "STAR_RIGHT", 2);

    expect(rightTranslation).toEqual([0, 0, 1]);
    expect(new Set(rightTranslation).size).toBe(2);
    expect(leftTranslation).toEqual([2, 0, 1]);
    expect(new Set(leftTranslation).size).toBe(3);

    const shift = (value: number) => (value + 1) % 3;
    expect(shift(formulaResult("STAR", 3, 0, 0))).toBe(1);
    expect(formulaResult("STAR", 3, shift(0), shift(0))).toBe(2);
  });

  it("reconstructs the 224 fibrewise typed orbits by enumeration and Burnside", () => {
    const directByLevel = galoLevels.map(countPairOrbitsByEnumeration);
    const burnsideByLevel = galoLevels.map(countPairOrbitsByBurnside);
    const automorphismOrders = galoLevels.map((level) => unitMultipliers(level).length);

    expect(directByLevel).toEqual([1, 4, 5, 10, 7, 20, 9]);
    expect(burnsideByLevel).toEqual(directByLevel);
    expect(automorphismOrders).toEqual([1, 1, 2, 2, 4, 2, 6]);
    expect(automorphismOrders.reduce((sum, order) => sum + order, 0)).toBe(18);
    expect(4 * directByLevel.reduce((sum, count) => sum + count, 0)).toBe(224);
    expect(structuralOrbitCount).toBe(224);
    expect(structuralOrbitCountByBurnside).toBe(224);
  });

  it("keeps formal, current V4, target, compatibility, and release evidence separate", () => {
    expect(theoryArchitectureLayers.map(({ status }) => status)).toEqual([
      "FORMAL",
      "FORMAL",
      "FORMAL",
      "CURRENT V4",
      "CURRENT V4",
      "TARGET",
    ]);
    expect(theoryArchitectureLayers.find(({ title }) => title === "Bounded current selection")?.detail).toContain(
      "exactly two fixed source patterns",
    );
    expect(theoryArchitectureLayers.find(({ title }) => title === "Adaptive World Atlas loop")?.detail).toContain(
      "remain target architecture",
    );
    expect(releaseEvidence.tracks.find(({ name }) => name === "Compatibility and audit layer")?.detail).toContain(
      "not automatically current runtime capabilities",
    );
    expect(releaseEvidence.tracks.map(({ reached }) => reached)).toEqual([3, 2, 3, 2]);
    expect(releaseEvidence.tracks.every(({ reached }) => reached < workTrackMilestones.length)).toBe(true);
    expect(releaseEvidence.freshReplay.full).toBe("NOT COMPLETED");
    expect(releaseEvidence.arithmetic.storedFull).toBe(1366);
    expect(releaseEvidence.status).toBe("READY_NOT_DUAL_MINOR_SEALED_WITH_DISCLOSED_BOUNDARIES");
    expect(theoryEvidenceLadder.map(({ status }) => status)).toEqual([
      "FORMALLY DERIVED",
      "TESTED",
      "RELEASE VERIFIED",
      "BOUNDARY",
      "NOT PROVEN",
    ]);
  });

  it("reconstructs the current 1204 → 880 → 440 selector ledger without semantic claims", () => {
    const coverageQuantum = 4 * galoLevels.slice(1).reduce((sum, level) => sum + level, 0);
    const activeTypedCells = canonicalTypedCellCount - galoActionFamilies.length;
    const committed = activeTypedCells + 6 * coverageQuantum;
    const executable = activeTypedCells + 3 * coverageQuantum;
    const frontier = executable / 2;

    expect([coverageQuantum, committed, executable, frontier]).toEqual([108, 1204, 880, 440]);
    expect(runtimeArithmeticRows.map(({ value }) => Number(value.replace(",", "")))).toEqual([
      coverageQuantum,
      committed,
      executable,
      frontier,
    ]);
    expect(currentV4Flow).toHaveLength(8);
    expect(currentV4Flow.find(({ title }) => title === "Derive a deterministic order")?.detail).toContain(
      "learning writes are all zero",
    );
  });

  it("keeps every beginner object class and target step explicitly scoped", () => {
    expect(new Set(theoryObjectClasses.map(({ object }) => object)).size).toBe(theoryObjectClasses.length);
    expect(theoryObjectClasses.find(({ object }) => object === "Pole")?.boundary.toLowerCase()).toContain(
      "not a complete thought",
    );
    expect(theoryObjectClasses.find(({ object }) => object === "World Atlas state")?.layer).toBe(
      "TARGET · NOT PRESENT",
    );
    expect(theoryObjectClasses.find(({ object }) => object === "One-shot handle")?.boundary).toContain("process-local");
    expect(targetArchitectureFlow).toHaveLength(8);
    expect(targetArchitectureFlow.every(({ status }) => status.startsWith("TARGET"))).toBe(true);
    expect(theorySymbolLegend.map(({ symbol }) => symbol)).toEqual(
      expect.arrayContaining(["Σ", "U(n)", "Fix(g)", "X/G"]),
    );
  });

  it("publishes paired plain-language and formal definitions without duplicate glossary terms", () => {
    expect(theoryGlossary).toBe(conceptLessons);
    expect(conceptLessons).toHaveLength(59);
    expect(
      conceptLessons.reduce<Record<string, number>>((counts, lesson) => {
        counts[lesson.chapter] = (counts[lesson.chapter] ?? 0) + 1;
        return counts;
      }, {}),
    ).toEqual({ theory: 20, mathematics: 23, symmetry: 16 });
    expect(new Set(theoryGlossary.map(({ term }) => term)).size).toBe(theoryGlossary.length);
    for (const lesson of conceptLessons) {
      expect(lesson.term.trim().length).toBeGreaterThan(2);
      for (const field of conceptLessonRequiredFields) {
        const minimumLength = field === "analogy" || field === "whyTrue" || field === "commonMistake" ? 20 : 5;
        expect(lesson[field].trim().length, `${lesson.term}.${field}`).toBeGreaterThan(minimumLength);
      }
    }
    expect(new Set(conceptLessonTranslationKeys).size).toBe(conceptLessonTranslationKeys.length);
    expect(conceptLessonTranslationKeys).toEqual(expect.arrayContaining(conceptLessons.map(({ term }) => term)));
    expect(theoryMisconceptions).toHaveLength(6);
  });
});
