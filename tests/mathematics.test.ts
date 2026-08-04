import { describe, expect, it } from "vitest";
import {
  applyGaloOperation,
  buildCayleyTable,
  buildCanonicalTower,
  buildCanonicalTypedCell,
  buildFixedActiveTransformation,
  buildScaledTowerMorphism,
  canonicalTypedCellCount,
  galoActionFamilies,
  galoLevels,
  isStrongOperatorMorphism,
  lawfulScaledTransfers,
  plusIndex,
  rawCellsPerOperator,
  rawLawCellCount,
  sameLevelAutomorphismCount,
  starIndex,
  structuralOrbitCount,
  towerCounts,
  unitMultipliers,
} from "../src/content/mathematics";

describe("GALO frozen PLUS/STAR mathematics", () => {
  it("generates every L1–L7 Cayley cell from the declared formulas", () => {
    for (const level of galoLevels) {
      for (const operation of ["PLUS", "STAR"] as const) {
        const table = buildCayleyTable(operation, level);
        expect(table).toHaveLength(level);
        expect(table.flat()).toHaveLength(level ** 2);

        for (const cell of table.flat()) {
          const expected =
            operation === "PLUS"
              ? (cell.left + cell.right) % level
              : cell.left === 0
                ? 0
                : (cell.left + cell.right) % level;
          expect(cell.result).toBe(expected);
          expect(cell.result).toBeGreaterThanOrEqual(0);
          expect(cell.result).toBeLessThan(level);
        }
      }
    }
  });

  it("satisfies the PLUS cyclic-group contracts across the frozen tower", () => {
    for (const level of galoLevels) {
      for (let left = 0; left < level; left += 1) {
        expect(plusIndex(level, 0, left)).toBe(left);
        expect(plusIndex(level, left, 0)).toBe(left);
        expect(plusIndex(level, left, (level - left) % level)).toBe(0);

        for (let middle = 0; middle < level; middle += 1) {
          expect(plusIndex(level, left, middle)).toBe(plusIndex(level, middle, left));
          for (let right = 0; right < level; right += 1) {
            expect(plusIndex(level, plusIndex(level, left, middle), right)).toBe(
              plusIndex(level, left, plusIndex(level, middle, right)),
            );
          }
        }
      }
    }
  });

  it("preserves the STAR reset/right-identity contracts and an exact nonassociativity witness", () => {
    for (const level of galoLevels) {
      for (let pole = 0; pole < level; pole += 1) {
        expect(starIndex(level, 0, pole)).toBe(0);
        expect(starIndex(level, pole, 0)).toBe(pole);
      }
    }

    for (const level of galoLevels.slice(1)) {
      const leftAssociated = starIndex(level, starIndex(level, 1, 0), 1);
      const rightAssociated = starIndex(level, 1, starIndex(level, 0, 1));
      expect(leftAssociated).not.toBe(rightAssociated);
    }

    expect(starIndex(3, starIndex(3, 1, 0), 1)).toBe(2);
    expect(starIndex(3, 1, starIndex(3, 0, 1))).toBe(1);
  });

  it("derives the 140-pair, 280-law-cell, and 560-typed-cell invariants without table literals", () => {
    expect(towerCounts.map((row) => row.orderedPairs)).toEqual([1, 4, 9, 16, 25, 36, 49]);
    expect(towerCounts.map((row) => row.lawCells)).toEqual([2, 8, 18, 32, 50, 72, 98]);
    expect(towerCounts.map((row) => row.typedCells)).toEqual([4, 16, 36, 64, 100, 144, 196]);
    expect(rawCellsPerOperator).toBe(140);
    expect(rawLawCellCount).toBe(280);
    expect(canonicalTypedCellCount).toBe(560);
    expect(2 * rawCellsPerOperator).toBe(rawLawCellCount);
    expect(2 * rawLawCellCount).toBe(canonicalTypedCellCount);
  });

  it("constructs every canonical typed coordinate exactly once and replays its raw table lookup", () => {
    const tower = buildCanonicalTower();
    expect(tower).toHaveLength(560);
    expect(new Set(tower.map((cell) => cell.cellId)).size).toBe(560);

    for (const cell of tower) {
      expect(cell.target).toBe(applyGaloOperation(cell.operation, cell.level, cell.leftOperand, cell.rightOperand));
      expect(cell.cellId).toBe(`L${cell.level}:${cell.family}:P${cell.source}:P${cell.active}`);
    }

    for (const level of galoLevels) {
      for (const family of galoActionFamilies) {
        expect(tower.filter((cell) => cell.level === level && cell.family === family)).toHaveLength(level ** 2);
      }
    }
  });

  it("preserves typed identity while applying LEFT and RIGHT operand placement exactly", () => {
    const plusLeft = buildCanonicalTypedCell(3, "PLUS_LEFT", 0, 2);
    const plusRight = buildCanonicalTypedCell(3, "PLUS_RIGHT", 0, 2);
    const starLeft = buildCanonicalTypedCell(3, "STAR_LEFT", 0, 2);
    const starRight = buildCanonicalTypedCell(3, "STAR_RIGHT", 0, 2);

    expect([plusLeft.leftOperand, plusLeft.rightOperand, plusLeft.target]).toEqual([0, 2, 2]);
    expect([plusRight.leftOperand, plusRight.rightOperand, plusRight.target]).toEqual([2, 0, 2]);
    expect(plusLeft.cellId).not.toBe(plusRight.cellId);
    expect([starLeft.leftOperand, starLeft.rightOperand, starLeft.target]).toEqual([0, 2, 0]);
    expect([starRight.leftOperand, starRight.rightOperand, starRight.target]).toEqual([2, 0, 2]);
  });

  it("exposes an exact counterexample to naive Q3-to-Q5 same-index alignment", () => {
    const mappedSourceResult = plusIndex(3, 1, 2);
    const targetLevelResult = plusIndex(5, 1, 2);
    expect(mappedSourceResult).toBe(0);
    expect(targetLevelResult).toBe(3);
    expect(mappedSourceResult).not.toBe(targetLevelResult);
    expect(isStrongOperatorMorphism(3, 5, [0, 1, 2])).toBe(false);
    expect(buildScaledTowerMorphism(3, 5)).toBeNull();
  });

  it("checks every lawful scaled tower morphism across all four families", () => {
    expect(lawfulScaledTransfers).toHaveLength(16);
    expect(
      lawfulScaledTransfers
        .filter(({ sourceLevel, targetLevel }) => sourceLevel >= 2 && targetLevel > sourceLevel)
        .map(({ sourceLevel, targetLevel }) => [sourceLevel, targetLevel]),
    ).toEqual([
      [2, 4],
      [2, 6],
      [3, 6],
    ]);

    const l2ToL4 = buildScaledTowerMorphism(2, 4);
    expect(l2ToL4).toEqual([0, 2]);
    expect(l2ToL4 && isStrongOperatorMorphism(2, 4, l2ToL4)).toBe(true);
  });

  it("derives fixed-active ranks, 18 automorphisms, and 224 typed structural orbits", () => {
    for (const level of galoLevels) {
      for (let active = 0; active < level; active += 1) {
        const rank = (family: (typeof galoActionFamilies)[number]) =>
          new Set(buildFixedActiveTransformation(level, family, active)).size;

        expect(rank("PLUS_LEFT")).toBe(level);
        expect(rank("PLUS_RIGHT")).toBe(level);
        expect(rank("STAR_LEFT")).toBe(active === 0 ? level : level - 1);
        expect(rank("STAR_RIGHT")).toBe(active === 0 ? 1 : level);
      }
    }

    expect(galoLevels.map((level) => unitMultipliers(level).length)).toEqual([1, 1, 2, 2, 4, 2, 6]);
    expect(sameLevelAutomorphismCount).toBe(18);
    expect(structuralOrbitCount).toBe(224);
  });

  it("rejects operands outside the selected finite carrier", () => {
    expect(() => applyGaloOperation("PLUS", 3, 3, 0)).toThrow(/belong to Q_3/);
    expect(() => applyGaloOperation("STAR", 2, 0, -1)).toThrow(/belong to Q_2/);
    expect(() => buildCanonicalTypedCell(3, "STAR_LEFT", 0, 3)).toThrow(/belong to Q_3/);
  });
});
