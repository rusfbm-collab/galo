import { describe, expect, it } from "vitest";
import {
  applyGaloOperation,
  applyUnitMultiplier,
  buildCarrierOrbit,
  buildCayleyTable,
  buildCanonicalTower,
  buildCanonicalTypedCell,
  buildFixedActiveTransformation,
  buildPairOrbit,
  buildPairStabilizer,
  buildScaledTowerMorphism,
  canonicalTypedCellCount,
  countPairOrbitsByBurnside,
  countPairOrbitsByEnumeration,
  enumerateStarHomomorphisms,
  fixedActiveAxis,
  fixedPointsOfUnit,
  galoActionFamilies,
  galoLevels,
  greatestCommonDivisor,
  inversionOrbits,
  isStrongOperatorMorphism,
  iterateStarProduct,
  leftStarTranslation,
  canonicalScaledEmbeddings,
  plusIndex,
  rawCellsPerOperator,
  rawLawCellCount,
  rightStarTranslation,
  sameLevelAutomorphismCount,
  standardTranslationForFamily,
  starIndex,
  structuralOrbitCount,
  structuralOrbitCountByBurnside,
  symmetryLevelProfiles,
  towerCounts,
  unitCycleDecomposition,
  unitMultipliers,
} from "../src/content/mathematics";

function permutations(values: readonly number[]): number[][] {
  if (values.length <= 1) return [values.slice()];
  return values.flatMap((value, index) =>
    permutations([...values.slice(0, index), ...values.slice(index + 1)]).map((tail) => [value, ...tail]),
  );
}

function restrictedGrowthPartitions(size: number): number[][] {
  if (size === 1) return [[0]];
  const result: number[][] = [];
  const labels = Array.from({ length: size }, () => 0);
  const visit = (index: number, maximum: number) => {
    if (index === size) {
      result.push(labels.slice());
      return;
    }
    for (let label = 0; label <= maximum + 1; label += 1) {
      labels[index] = label;
      visit(index + 1, Math.max(maximum, label));
    }
  };
  visit(1, 0);
  return result;
}

function preservesOperation(
  level: (typeof galoLevels)[number],
  mapping: readonly number[],
  operation: "PLUS" | "STAR",
) {
  for (let left = 0; left < level; left += 1) {
    for (let right = 0; right < level; right += 1) {
      const source = applyGaloOperation(operation, level, left, right);
      const target = applyGaloOperation(operation, level, mapping[left]!, mapping[right]!);
      if (mapping[source] !== target) return false;
    }
  }
  return true;
}

function enumerateFunctions(sourceSize: number, targetSize: number) {
  const total = targetSize ** sourceSize;
  return Array.from({ length: total }, (_, code) => {
    let cursor = code;
    return Array.from({ length: sourceSize }, () => {
      const value = cursor % targetSize;
      cursor = Math.floor(cursor / targetSize);
      return value;
    });
  });
}

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

  it("preserves the one-sided STAR laws and an exact nonassociativity witness", () => {
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

  it("exposes an exact counterexample to the Q3-to-Q5 same-index candidate injection", () => {
    const mappedSourceResult = plusIndex(3, 1, 2);
    const targetLevelResult = plusIndex(5, 1, 2);
    expect(mappedSourceResult).toBe(0);
    expect(targetLevelResult).toBe(3);
    expect(mappedSourceResult).not.toBe(targetLevelResult);
    expect(isStrongOperatorMorphism(3, 5, [0, 1, 2])).toBe(false);
    expect(buildScaledTowerMorphism(3, 5)).toBeNull();
  });

  it("checks every canonical scaled embedding across all four typed families", () => {
    expect(canonicalScaledEmbeddings).toHaveLength(16);
    expect(
      canonicalScaledEmbeddings
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

describe("independent finite-algebra audit", () => {
  it("classifies P0 and the L1 exception without assuming a two-sided STAR neutral element", () => {
    expect(starIndex(1, 0, 0)).toBe(0);

    for (const level of galoLevels.slice(1)) {
      for (let value = 0; value < level; value += 1) {
        expect(starIndex(level, 0, value)).toBe(0);
        expect(starIndex(level, value, 0)).toBe(value);
      }

      const twoSidedNeutral = Array.from({ length: level }, (_, candidate) => candidate).filter((candidate) =>
        Array.from({ length: level }, (_, value) => value).every(
          (value) => starIndex(level, candidate, value) === value && starIndex(level, value, candidate) === value,
        ),
      );
      const twoSidedZero = Array.from({ length: level }, (_, candidate) => candidate).filter((candidate) =>
        Array.from({ length: level }, (_, value) => value).every(
          (value) =>
            starIndex(level, candidate, value) === candidate && starIndex(level, value, candidate) === candidate,
        ),
      );
      const leftZeros = Array.from({ length: level }, (_, candidate) => candidate).filter((candidate) =>
        Array.from({ length: level }, (_, value) => value).every(
          (value) => starIndex(level, candidate, value) === candidate,
        ),
      );
      const rightNeutral = Array.from({ length: level }, (_, candidate) => candidate).filter((candidate) =>
        Array.from({ length: level }, (_, value) => value).every(
          (value) => starIndex(level, value, candidate) === value,
        ),
      );
      const leftNeutral = Array.from({ length: level }, (_, candidate) => candidate).filter((candidate) =>
        Array.from({ length: level }, (_, value) => value).every(
          (value) => starIndex(level, candidate, value) === value,
        ),
      );
      const rightZeros = Array.from({ length: level }, (_, candidate) => candidate).filter((candidate) =>
        Array.from({ length: level }, (_, value) => value).every(
          (value) => starIndex(level, value, candidate) === candidate,
        ),
      );

      expect(twoSidedNeutral).toEqual([]);
      expect(twoSidedZero).toEqual([]);
      expect(leftZeros).toEqual([0]);
      expect(rightNeutral).toEqual([0]);
      expect(leftNeutral).toEqual([]);
      expect(rightZeros).toEqual([]);
      expect(starIndex(level, 0, 1)).toBe(0);
      expect(starIndex(level, 1, 0)).toBe(1);
    }
  });

  it("proves STAR is noncommutative and nonassociative at every nontrivial level", () => {
    for (const level of galoLevels.slice(1)) {
      expect(starIndex(level, 0, 1)).not.toBe(starIndex(level, 1, 0));
      expect(starIndex(level, starIndex(level, 1, 0), 1)).not.toBe(starIndex(level, 1, starIndex(level, 0, 1)));
    }
  });

  it("maps ABI LEFT/RIGHT to the opposite standard translation names and correct table axes", () => {
    for (const level of galoLevels) {
      for (let active = 0; active < level; active += 1) {
        const rightTranslation = Array.from({ length: level }, (_, source) =>
          rightStarTranslation(level, active, source),
        );
        const leftTranslation = Array.from({ length: level }, (_, source) =>
          leftStarTranslation(level, active, source),
        );
        expect(buildFixedActiveTransformation(level, "STAR_LEFT", active)).toEqual(rightTranslation);
        expect(buildFixedActiveTransformation(level, "STAR_RIGHT", active)).toEqual(leftTranslation);
        expect(new Set(rightTranslation).size).toBe(active === 0 ? level : level - 1);
        expect(new Set(leftTranslation).size).toBe(active === 0 ? 1 : level);
      }
    }

    expect(fixedActiveAxis("STAR_LEFT")).toBe("COLUMN");
    expect(fixedActiveAxis("STAR_RIGHT")).toBe("ROW");
    expect(standardTranslationForFamily("STAR_LEFT")).toBe("RIGHT_TRANSLATION");
    expect(standardTranslationForFamily("STAR_RIGHT")).toBe("LEFT_TRANSLATION");
  });

  it("verifies left/right iterations and the zero-prefix theorem by exhaustive short words", () => {
    for (const level of galoLevels) {
      for (let value = 0; value < level; value += 1) {
        const left = iterateStarProduct(level, value, 9, "LEFT");
        const right = iterateStarProduct(level, value, 9, "RIGHT");
        let captured = false;
        for (let index = 0; index < 9; index += 1) {
          const additive = ((index + 1) * value) % level;
          if (additive === 0) captured = true;
          expect(left[index]).toBe(captured ? 0 : additive);
          expect(right[index]).toBe(additive);
        }
      }

      for (let length = 1; length <= 4; length += 1) {
        for (const word of enumerateFunctions(length, level)) {
          let actual = word[0]!;
          let prefix = word[0]! % level;
          let captured = prefix === 0;
          for (let index = 1; index < word.length; index += 1) {
            actual = starIndex(level, actual, word[index]!);
            prefix = (prefix + word[index]!) % level;
            if (prefix === 0) captured = true;
          }
          expect(actual).toBe(captured ? 0 : prefix);
        }
      }
    }
  });

  it("exhaustively classifies right-, left-, and two-sided stable subsets", () => {
    for (const level of galoLevels) {
      const stable = { right: [] as string[], left: [] as string[], twoSided: [] as string[] };
      for (let mask = 0; mask < 2 ** level; mask += 1) {
        const subset = Array.from({ length: level }, (_, value) => value).filter((value) => mask & (1 << value));
        const members = new Set(subset);
        const key = subset.join(",");
        const right = subset.every((left) =>
          Array.from({ length: level }, (_, rightValue) => members.has(starIndex(level, left, rightValue))).every(
            Boolean,
          ),
        );
        const left = subset.every((rightValue) =>
          Array.from({ length: level }, (_, leftValue) => members.has(starIndex(level, leftValue, rightValue))).every(
            Boolean,
          ),
        );
        if (right) stable.right.push(key);
        if (left) stable.left.push(key);
        if (right && left) stable.twoSided.push(key);
      }

      if (level === 1) {
        expect(stable).toEqual({ right: ["", "0"], left: ["", "0"], twoSided: ["", "0"] });
      } else {
        expect(stable.right).toEqual(["", "0", Array.from({ length: level }, (_, value) => value).join(",")]);
        expect(stable.left).toEqual(["", Array.from({ length: level }, (_, value) => value).join(",")]);
        expect(stable.twoSided).toEqual(["", Array.from({ length: level }, (_, value) => value).join(",")]);
      }
    }
  });

  it("exhaustively classifies STAR and full-signature congruences", () => {
    for (const level of galoLevels) {
      const congruences = restrictedGrowthPartitions(level).filter((labels) => {
        for (let leftA = 0; leftA < level; leftA += 1) {
          for (let leftB = 0; leftB < level; leftB += 1) {
            if (labels[leftA] !== labels[leftB]) continue;
            for (let rightA = 0; rightA < level; rightA += 1) {
              for (let rightB = 0; rightB < level; rightB += 1) {
                if (labels[rightA] !== labels[rightB]) continue;
                const starA = starIndex(level, leftA, rightA);
                const starB = starIndex(level, leftB, rightB);
                if (labels[starA] !== labels[starB]) return false;
              }
            }
          }
        }
        return true;
      });
      const fullCongruences = congruences.filter((labels) => {
        for (let leftA = 0; leftA < level; leftA += 1) {
          for (let leftB = 0; leftB < level; leftB += 1) {
            if (labels[leftA] !== labels[leftB]) continue;
            for (let rightA = 0; rightA < level; rightA += 1) {
              for (let rightB = 0; rightB < level; rightB += 1) {
                if (labels[rightA] !== labels[rightB]) continue;
                if (labels[plusIndex(level, leftA, rightA)] !== labels[plusIndex(level, leftB, rightB)]) return false;
              }
            }
          }
        }
        return true;
      });
      expect(congruences).toHaveLength(level === 1 ? 1 : 2);
      expect(fullCongruences).toEqual(congruences);
    }
  });

  it("independently enumerates every PLUS, STAR, and full-algebra automorphism", () => {
    const counts = { plus: [] as number[], star: [] as number[], full: [] as number[] };
    for (const level of galoLevels) {
      const candidates = permutations(Array.from({ length: level }, (_, value) => value)).filter(
        (mapping) => mapping[0] === 0,
      );
      const plusAutomorphisms = candidates.filter((mapping) => preservesOperation(level, mapping, "PLUS"));
      const starAutomorphisms = candidates.filter((mapping) => preservesOperation(level, mapping, "STAR"));
      const fullAutomorphisms = candidates.filter(
        (mapping) => preservesOperation(level, mapping, "PLUS") && preservesOperation(level, mapping, "STAR"),
      );
      counts.plus.push(plusAutomorphisms.length);
      counts.star.push(starAutomorphisms.length);
      counts.full.push(fullAutomorphisms.length);

      const unitMaps = unitMultipliers(level).map((unit) =>
        Array.from({ length: level }, (_, value) => (unit * value) % level).join(","),
      );
      expect(fullAutomorphisms.map((mapping) => mapping.join(",")).sort()).toEqual(unitMaps.sort());
    }
    expect(counts.plus).toEqual([1, 1, 2, 2, 4, 2, 6]);
    expect(counts.star).toEqual(counts.plus);
    expect(counts.full).toEqual(counts.plus);
  });

  it("checks automorphism covariance for all 560 typed cells", () => {
    for (const cell of buildCanonicalTower()) {
      for (const unit of unitMultipliers(cell.level)) {
        const transformed = buildCanonicalTypedCell(
          cell.level,
          cell.family,
          applyUnitMultiplier(cell.level, unit, cell.source),
          applyUnitMultiplier(cell.level, unit, cell.active),
        );
        expect(transformed.target).toBe(applyUnitMultiplier(cell.level, unit, cell.target));
      }
    }
  });

  it("derives carrier orbits, cycle partitions, and inversion orbits independently", () => {
    for (const level of galoLevels) {
      const carrierOrbitKeys = new Set<string>();
      for (let value = 0; value < level; value += 1) {
        const orbit = buildCarrierOrbit(level, value);
        expect(orbit.every((item) => greatestCommonDivisor(item, level) === greatestCommonDivisor(value, level))).toBe(
          true,
        );
        carrierOrbitKeys.add(orbit.join(","));
      }
      expect(carrierOrbitKeys.size).toBe(symmetryLevelProfiles[level - 1]!.carrierOrbitCount);

      for (const unit of unitMultipliers(level)) {
        const cycles = unitCycleDecomposition(level, unit).flat();
        expect(cycles.slice().sort((left, right) => left - right)).toEqual(
          Array.from({ length: level }, (_, value) => value),
        );
      }

      const mirror = inversionOrbits(level);
      expect(
        mirror
          .flat()
          .slice()
          .sort((left, right) => left - right),
      ).toEqual(Array.from({ length: level }, (_, value) => value));
      expect(mirror).toHaveLength((level + greatestCommonDivisor(2, level)) / 2);
    }
  });

  it("proves orbit–stabilizer for every ordered pair and reconciles direct orbits with Burnside", () => {
    const direct: number[] = [];
    const burnside: number[] = [];
    for (const level of galoLevels) {
      for (let source = 0; source < level; source += 1) {
        for (let active = 0; active < level; active += 1) {
          expect(buildPairOrbit(level, source, active).length * buildPairStabilizer(level, source, active).length).toBe(
            unitMultipliers(level).length,
          );
        }
      }

      const independentBurnsideNumerator = unitMultipliers(level).reduce((sum, unit) => {
        const fixed = Array.from({ length: level }, (_, value) => value).filter(
          (value) => (unit * value) % level === value,
        ).length;
        expect(fixedPointsOfUnit(level, unit)).toHaveLength(fixed);
        return sum + fixed ** 2;
      }, 0);
      direct.push(countPairOrbitsByEnumeration(level));
      burnside.push(independentBurnsideNumerator / unitMultipliers(level).length);
      expect(countPairOrbitsByBurnside(level)).toBe(burnside.at(-1));
    }
    expect(direct).toEqual([1, 4, 5, 10, 7, 20, 9]);
    expect(burnside).toEqual(direct);
    expect(structuralOrbitCount).toBe(224);
    expect(structuralOrbitCountByBurnside).toBe(224);
  });

  it("checks affine PLUS closure and rejects every nonzero translation as a STAR homomorphism", () => {
    for (const level of galoLevels.slice(1)) {
      const units = unitMultipliers(level);
      const affineMaps = units.flatMap((unit) =>
        Array.from({ length: level }, (_, offset) => ({
          unit,
          offset,
          mapping: Array.from({ length: level }, (_, value) => (unit * value + offset) % level),
        })),
      );
      expect(new Set(affineMaps.map(({ mapping }) => mapping.join(","))).size).toBe(level * units.length);
      for (const { offset, mapping } of affineMaps) {
        if (offset === 0) {
          expect(preservesOperation(level, mapping, "STAR")).toBe(true);
        } else {
          expect(mapping[starIndex(level, 0, 0)]).not.toBe(starIndex(level, mapping[0]!, mapping[0]!));
          expect(preservesOperation(level, mapping, "STAR")).toBe(false);
        }
      }
    }
  });

  it("distinguishes the full unit action from the quadratic-residue block stabilizer", () => {
    const cases = [
      { level: 5 as const, residues: [1, 4], nonresidues: [2, 3], swap: 2 },
      { level: 7 as const, residues: [1, 2, 4], nonresidues: [3, 5, 6], swap: 3 },
    ];
    for (const { level, residues, nonresidues, swap } of cases) {
      expect(residues.map((value) => (swap * value) % level).sort((a, b) => a - b)).toEqual(nonresidues);
      for (const unit of residues) {
        expect(residues.map((value) => (unit * value) % level).sort((a, b) => a - b)).toEqual(residues);
        expect(nonresidues.map((value) => (unit * value) % level).sort((a, b) => a - b)).toEqual(nonresidues);
      }
    }
  });

  it("exposes a coordinatewise-STAR failure under the L6 CRT bijection", () => {
    const crt = (value: number) => [value % 2, value % 3] as const;
    const actual = crt(starIndex(6, 3, 1));
    const coordinatewise = [starIndex(2, 1, 1), starIndex(3, 0, 1)] as const;
    expect(actual).toEqual([0, 1]);
    expect(coordinatewise).toEqual([0, 0]);
    expect(actual).not.toEqual(coordinatewise);
  });

  it("exhaustively separates homomorphisms, embeddings, and the zero map across L1–L7", () => {
    const starMatrix: number[][] = [];
    const plusMatrix: number[][] = [];
    for (const sourceLevel of galoLevels) {
      const starRow: number[] = [];
      const plusRow: number[] = [];
      for (const targetLevel of galoLevels) {
        const allPointedMaps = enumerateFunctions(sourceLevel, targetLevel).filter((mapping) => mapping[0] === 0);
        const starMorphisms = allPointedMaps.filter((mapping) => {
          for (let left = 0; left < sourceLevel; left += 1) {
            for (let right = 0; right < sourceLevel; right += 1) {
              if (
                mapping[starIndex(sourceLevel, left, right)] !== starIndex(targetLevel, mapping[left]!, mapping[right]!)
              )
                return false;
            }
          }
          return true;
        });
        const fullMorphisms = starMorphisms.filter((mapping) => {
          for (let left = 0; left < sourceLevel; left += 1) {
            for (let right = 0; right < sourceLevel; right += 1) {
              if (
                mapping[plusIndex(sourceLevel, left, right)] !== plusIndex(targetLevel, mapping[left]!, mapping[right]!)
              )
                return false;
            }
          }
          return true;
        });
        const additiveCandidates = Array.from({ length: targetLevel }, (_, imageOfOne) =>
          Array.from({ length: sourceLevel }, (_, value) => (imageOfOne * value) % targetLevel),
        );
        const additiveMorphisms = [
          ...new Map(additiveCandidates.map((mapping) => [mapping.join(","), mapping])).values(),
        ].filter((mapping) => {
          for (let left = 0; left < sourceLevel; left += 1) {
            for (let right = 0; right < sourceLevel; right += 1) {
              if (
                mapping[plusIndex(sourceLevel, left, right)] !== plusIndex(targetLevel, mapping[left]!, mapping[right]!)
              )
                return false;
            }
          }
          return true;
        });

        expect(starMorphisms).toEqual(fullMorphisms);
        expect(starMorphisms.map((mapping) => mapping.join(",")).sort()).toEqual(
          enumerateStarHomomorphisms(sourceLevel, targetLevel)
            .map((mapping) => mapping.join(","))
            .sort(),
        );
        expect(starMorphisms[0]).toEqual(Array.from({ length: sourceLevel }, () => 0));
        for (const mapping of starMorphisms.slice(1)) expect(new Set(mapping).size).toBe(sourceLevel);
        starRow.push(starMorphisms.length);
        plusRow.push(additiveMorphisms.length);
        expect(additiveMorphisms).toHaveLength(greatestCommonDivisor(sourceLevel, targetLevel));
      }
      starMatrix.push(starRow);
      plusMatrix.push(plusRow);
    }

    expect(starMatrix).toEqual([
      [1, 1, 1, 1, 1, 1, 1],
      [1, 2, 1, 2, 1, 2, 1],
      [1, 1, 3, 1, 1, 3, 1],
      [1, 1, 1, 3, 1, 1, 1],
      [1, 1, 1, 1, 5, 1, 1],
      [1, 1, 1, 1, 1, 3, 1],
      [1, 1, 1, 1, 1, 1, 7],
    ]);
    expect(isStrongOperatorMorphism(3, 5, [0, 0, 0])).toBe(true);
    expect(isStrongOperatorMorphism(3, 5, [0, 1, 2])).toBe(false);
    expect(plusMatrix[5]![3]).toBe(2);
  }, 30_000);
});
