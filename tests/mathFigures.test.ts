import { describe, expect, it } from "vitest";
import {
  applyGaloOperation,
  buildCayleyTable,
  countPairOrbitsByBurnside,
  countPairOrbitsByEnumeration,
  galoLevels,
  greatestCommonDivisor,
  starIndex,
  type GaloOperation,
} from "../src/content/mathematics";

/**
 * The six new figures draw statements, not decoration. Each of those statements
 * is checked here against the same kernel the figures read from, so a change to
 * the mathematics fails the build rather than quietly producing a picture that
 * says something untrue.
 */

function isLatinSquare(operation: GaloOperation, level: (typeof galoLevels)[number]) {
  const table = buildCayleyTable(operation, level);
  const rowsComplete = table.every((row) => new Set(row.map((cell) => cell.result)).size === level);
  const columnsComplete = Array.from(
    { length: level },
    (_, column) => new Set(table.map((row) => row[column]!.result)).size,
  ).every((distinct) => distinct === level);
  return rowsComplete && columnsComplete;
}

describe("what the Latin-square figure claims", () => {
  it("PLUS passes the test at every level", () => {
    for (const level of galoLevels) {
      expect(isLatinSquare("PLUS", level), `PLUS failed at L${level}`).toBe(true);
    }
  });

  it("STAR fails it at every level above the trivial one", () => {
    expect(isLatinSquare("STAR", 1)).toBe(true);
    for (const level of galoLevels.filter((candidate) => candidate > 1)) {
      expect(isLatinSquare("STAR", level), `STAR unexpectedly passed at L${level}`).toBe(false);
    }
  });

  it("puts the whole failure in the reset row, which drags four of the five columns down", () => {
    const table = buildCayleyTable("STAR", 5);
    expect(new Set(table[0]!.map((cell) => cell.result)).size).toBe(1);

    // Column P0 survives, because the reset already returns P0 there; the other
    // four lose exactly one value to the repeat.
    const columnCounts = Array.from(
      { length: 5 },
      (_, column) => new Set(table.map((row) => row[column]!.result)).size,
    );
    expect(columnCounts).toEqual([5, 4, 4, 4, 4]);
  });
});

describe("what the disagreement map claims", () => {
  const perLevel = galoLevels.map((level) => {
    let count = 0;
    for (let left = 0; left < level; left += 1) {
      for (let right = 0; right < level; right += 1) {
        if (applyGaloOperation("PLUS", level, left, right) !== applyGaloOperation("STAR", level, left, right)) {
          count += 1;
        }
      }
    }
    return { level, count };
  });

  it("finds exactly n − 1 disagreeing pairs at level n", () => {
    for (const { level, count } of perLevel) {
      expect(count, `L${level}`).toBe(level - 1);
    }
  });

  it("totals 21 of the 140 ordered pairs in the tower", () => {
    expect(perLevel.reduce((sum, row) => sum + row.count, 0)).toBe(21);
    expect(galoLevels.reduce((sum, level) => sum + level * level, 0)).toBe(140);
  });

  it("puts every disagreement in the first row, and never on P0 with itself", () => {
    for (const level of galoLevels) {
      for (let left = 0; left < level; left += 1) {
        for (let right = 0; right < level; right += 1) {
          const differs =
            applyGaloOperation("PLUS", level, left, right) !== applyGaloOperation("STAR", level, left, right);
          if (differs) {
            expect(left).toBe(0);
            expect(right).not.toBe(0);
          }
        }
      }
    }
  });
});

describe("what the associativity figure claims", () => {
  it("shows a real counterexample at L3", () => {
    const left = starIndex(3, starIndex(3, 1, 0), 1);
    const right = starIndex(3, 1, starIndex(3, 0, 1));
    expect(left).toBe(2);
    expect(right).toBe(1);
    expect(left).not.toBe(right);
  });

  it("uses a witness that fails at every level above L1", () => {
    for (const level of galoLevels.filter((candidate) => candidate > 1)) {
      expect(starIndex(level, starIndex(level, 1, 0), 1), `L${level}`).not.toBe(
        starIndex(level, 1, starIndex(level, 0, 1)),
      );
    }
  });

  it("leaves PLUS alone: it is associative at every level", () => {
    for (const level of galoLevels) {
      for (let a = 0; a < level; a += 1) {
        for (let b = 0; b < level; b += 1) {
          for (let c = 0; c < level; c += 1) {
            const leftFirst = applyGaloOperation("PLUS", level, applyGaloOperation("PLUS", level, a, b), c);
            const rightFirst = applyGaloOperation("PLUS", level, a, applyGaloOperation("PLUS", level, b, c));
            expect(leftFirst).toBe(rightFirst);
          }
        }
      }
    }
  });
});

describe("what the lattice and order figures claim", () => {
  const divisorsOf = (level: number) =>
    Array.from({ length: level }, (_, index) => index + 1).filter((candidate) => level % candidate === 0);

  it("closes a repeated step into a ring whose size is a divisor of the level", () => {
    for (const level of galoLevels) {
      for (let step = 0; step < level; step += 1) {
        const members = new Set<number>();
        let cursor = 0;
        do {
          members.add(cursor);
          cursor = (cursor + step) % level;
        } while (cursor !== 0);
        expect(level % members.size, `L${level} step ${step}`).toBe(0);
      }
    }
  });

  it("gives L6 four rings and the prime levels two", () => {
    expect(divisorsOf(6)).toEqual([1, 2, 3, 6]);
    expect(divisorsOf(5)).toEqual([1, 5]);
    expect(divisorsOf(7)).toEqual([1, 7]);
  });

  it("reads the order of a position as n divided by the shared factor", () => {
    const ordersAt = (level: number) =>
      Array.from({ length: level }, (_, step) => level / greatestCommonDivisor(step, level));
    expect(ordersAt(6)).toEqual([1, 6, 3, 2, 3, 6]);
    expect(ordersAt(7)).toEqual([1, 7, 7, 7, 7, 7, 7]);
  });
});

describe("what the double-count figure claims", () => {
  it("gets the same orbit count by walking and by averaging, at every level", () => {
    for (const level of galoLevels) {
      expect(countPairOrbitsByEnumeration(level), `L${level}`).toBe(countPairOrbitsByBurnside(level));
    }
  });

  it("matches the worked L6 line shown under the chart", () => {
    expect(countPairOrbitsByEnumeration(6)).toBe(20);
    expect((36 + 4) / 2).toBe(20);
  });
});
