import { describe, expect, it } from "vitest";
import {
  applyGaloOperation,
  buildCayleyTable,
  canonicalTypedCellCount,
  galoLevels,
  plusIndex,
  rawCellsPerOperator,
  starIndex,
  towerCounts,
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

  it("derives the 140 raw and 560 typed-cell invariants without stored table literals", () => {
    expect(towerCounts.map((row) => row.cellsPerOperator)).toEqual([1, 4, 9, 16, 25, 36, 49]);
    expect(rawCellsPerOperator).toBe(140);
    expect(canonicalTypedCellCount).toBe(560);
    expect(2 * 2 * rawCellsPerOperator).toBe(canonicalTypedCellCount);
  });

  it("rejects operands outside the selected finite carrier", () => {
    expect(() => applyGaloOperation("PLUS", 3, 3, 0)).toThrow(/belong to Q_3/);
    expect(() => applyGaloOperation("STAR", 2, 0, -1)).toThrow(/belong to Q_2/);
  });
});
