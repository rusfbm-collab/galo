import { describe, expect, it } from "vitest";

const levels = [1, 2, 3, 4, 5, 6, 7] as const;

function carrier(level: number) {
  return Array.from({ length: level }, (_, value) => value);
}

function plus(level: number, left: number, right: number) {
  return (left + right) % level;
}

function star(level: number, left: number, right: number) {
  return left === 0 ? 0 : (left + right) % level;
}

function gcd(left: number, right: number) {
  let a = left;
  let b = right;
  while (b !== 0) [a, b] = [b, a % b];
  return a;
}

function enumerateMappings(sourceSize: number, targetSize: number) {
  const mappings: number[][] = [];
  const current = Array.from({ length: sourceSize }, () => 0);

  function visit(index: number) {
    if (index === sourceSize) {
      mappings.push([...current]);
      return;
    }
    for (let value = 0; value < targetSize; value += 1) {
      current[index] = value;
      visit(index + 1);
    }
  }

  // Every full-algebra homomorphism must preserve the named constant P0.
  visit(1);
  return mappings;
}

function preservesFullAlgebra(source: number, target: number, mapping: readonly number[]) {
  if (mapping[0] !== 0) return false;
  for (const left of carrier(source)) {
    for (const right of carrier(source)) {
      if (mapping[plus(source, left, right)] !== plus(target, mapping[left]!, mapping[right]!)) return false;
      if (mapping[star(source, left, right)] !== star(target, mapping[left]!, mapping[right]!)) return false;
    }
  }
  return true;
}

function enumerateSubsets(level: number) {
  return Array.from(
    { length: 2 ** level },
    (_, mask) => new Set(carrier(level).filter((value) => (mask & (1 << value)) !== 0)),
  );
}

function enumeratePartitions(size: number) {
  if (size === 0) return [[]] as number[][];
  const partitions: number[][] = [];
  const labels = Array.from({ length: size }, () => 0);

  function visit(index: number, maximum: number) {
    if (index === size) {
      partitions.push([...labels]);
      return;
    }
    for (let label = 0; label <= maximum + 1; label += 1) {
      labels[index] = label;
      visit(index + 1, Math.max(maximum, label));
    }
  }

  // Restricted-growth labels give every set partition exactly once.
  visit(1, 0);
  return partitions;
}

function isStarCongruence(level: number, partition: readonly number[]) {
  for (const left of carrier(level)) {
    for (const equivalentLeft of carrier(level)) {
      if (partition[left] !== partition[equivalentLeft]) continue;
      for (const right of carrier(level)) {
        for (const equivalentRight of carrier(level)) {
          if (partition[right] !== partition[equivalentRight]) continue;
          if (partition[star(level, left, right)] !== partition[star(level, equivalentLeft, equivalentRight)]) {
            return false;
          }
        }
      }
    }
  }
  return true;
}

function catalan(index: number): number {
  if (index === 0) return 1;
  return Array.from({ length: index }, (_, split) => catalan(split) * catalan(index - 1 - split)).reduce(
    (sum, value) => sum + value,
    0,
  );
}

describe("independent school-level reconstruction of the published mathematics", () => {
  it("checks all four cyclic-group laws for PLUS on L1-L7", () => {
    for (const level of levels) {
      const values = carrier(level);
      for (const left of values) {
        expect(values).toContain(plus(level, left, 0));
        expect(plus(level, left, 0)).toBe(left);
        expect(plus(level, 0, left)).toBe(left);
        expect(plus(level, left, (level - left) % level)).toBe(0);
        for (const right of values) {
          expect(values).toContain(plus(level, left, right));
          expect(plus(level, left, right)).toBe(plus(level, right, left));
          for (const third of values) {
            expect(plus(level, plus(level, left, right), third)).toBe(plus(level, left, plus(level, right, third)));
          }
        }
      }
    }
  });

  it("proves the one-sided STAR roles are unique and the missing roles really are absent", () => {
    for (const level of levels.slice(1)) {
      const values = carrier(level);
      const leftZeros = values.filter((candidate) =>
        values.every((value) => star(level, candidate, value) === candidate),
      );
      const rightNeutrals = values.filter((candidate) =>
        values.every((value) => star(level, value, candidate) === value),
      );
      const leftNeutrals = values.filter((candidate) =>
        values.every((value) => star(level, candidate, value) === value),
      );
      const rightZeros = values.filter((candidate) =>
        values.every((value) => star(level, value, candidate) === candidate),
      );
      const twoSidedNeutrals = values.filter((candidate) =>
        values.every((value) => star(level, candidate, value) === value && star(level, value, candidate) === value),
      );

      expect(leftZeros).toEqual([0]);
      expect(rightNeutrals).toEqual([0]);
      expect(leftNeutrals).toEqual([]);
      expect(rightZeros).toEqual([]);
      expect(twoSidedNeutrals).toEqual([]);
      expect(star(level, 0, 1)).not.toBe(star(level, 1, 0));
      expect(star(level, star(level, 1, 0), 1)).not.toBe(star(level, 1, star(level, 0, 1)));
    }
  });

  it("reconstructs every fixed-active rank formula from finite images", () => {
    for (const level of levels) {
      for (const active of carrier(level)) {
        const plusLeft = new Set(carrier(level).map((source) => plus(level, source, active))).size;
        const plusRight = new Set(carrier(level).map((source) => plus(level, active, source))).size;
        const starLeft = new Set(carrier(level).map((source) => star(level, source, active))).size;
        const starRight = new Set(carrier(level).map((source) => star(level, active, source))).size;

        expect(plusLeft).toBe(level);
        expect(plusRight).toBe(level);
        expect(starLeft).toBe(active === 0 || level === 1 ? level : level - 1);
        expect(starRight).toBe(active === 0 ? 1 : level);
      }
    }
  });

  it("exhaustively classifies all full-algebra homomorphisms and embeddings", () => {
    const expectedHomomorphisms = [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 2, 1, 2, 1, 2, 1],
      [1, 1, 3, 1, 1, 3, 1],
      [1, 1, 1, 3, 1, 1, 1],
      [1, 1, 1, 1, 5, 1, 1],
      [1, 1, 1, 1, 1, 3, 1],
      [1, 1, 1, 1, 1, 1, 7],
    ];

    let homomorphismTotal = 0;
    let embeddingTotal = 0;
    const automorphismCounts: number[] = [];
    for (const source of levels) {
      for (const target of levels) {
        const homomorphisms = enumerateMappings(source, target).filter((mapping) =>
          preservesFullAlgebra(source, target, mapping),
        );
        const embeddings = homomorphisms.filter((mapping) => new Set(mapping).size === mapping.length);
        expect(homomorphisms).toHaveLength(expectedHomomorphisms[source - 1]![target - 1]!);
        if (source >= 2) {
          expect(embeddings.length > 0).toBe(target % source === 0);
          expect(homomorphisms.filter((mapping) => mapping.some((value) => value !== 0))).toEqual(embeddings);
        }
        if (source === target) automorphismCounts.push(embeddings.length);
        homomorphismTotal += homomorphisms.length;
        embeddingTotal += embeddings.length;
      }
    }

    expect(homomorphismTotal).toBe(70);
    expect(embeddingTotal).toBe(28);
    expect(automorphismCounts).toEqual([1, 1, 2, 2, 4, 2, 6]);
  });

  it("enumerates every one-sided stable subset of the STAR reduct", () => {
    for (const level of levels.slice(1)) {
      const values = carrier(level);
      const subsets = enumerateSubsets(level);
      const rightStable = subsets.filter((subset) =>
        [...subset].every((left) => values.every((right) => subset.has(star(level, left, right)))),
      );
      const leftStable = subsets.filter((subset) =>
        [...subset].every((right) => values.every((left) => subset.has(star(level, left, right)))),
      );

      expect(rightStable.map((subset) => [...subset])).toEqual([[], [0], values]);
      expect(leftStable.map((subset) => [...subset])).toEqual([[], values]);
    }
  });

  it("enumerates every STAR congruence rather than assuming the two expected partitions", () => {
    const counts = levels.map(
      (level) => enumeratePartitions(level).filter((partition) => isStarCongruence(level, partition)).length,
    );
    expect(counts).toEqual([1, 2, 2, 2, 2, 2, 2]);
  });

  it("derives the Catalan bracketing counts by the independent split recurrence", () => {
    expect([1, 2, 3, 4, 5].map((arity) => catalan(arity - 1))).toEqual([1, 1, 2, 5, 14]);
  });

  it("checks the exact CRT counterexample instead of transferring STAR coordinatewise", () => {
    const theta = (value: number) => [value % 2, value % 3] as const;
    const global = theta(star(6, 3, 1));
    const coordinatewise = [star(2, theta(3)[0], theta(1)[0]), star(3, theta(3)[1], theta(1)[1])] as const;

    expect(global).toEqual([0, 1]);
    expect(coordinatewise).toEqual([0, 0]);
    expect(global).not.toEqual(coordinatewise);
  });

  it("checks the L5 quadratic-residue block swap and the L7 inversion orbits", () => {
    const quadraticResidues = new Set([1, 4]);
    const nonresidues = new Set([2, 3]);
    const multiplyBlock = (block: ReadonlySet<number>, unit: number) =>
      new Set([...block].map((value) => (unit * value) % 5));

    expect(multiplyBlock(quadraticResidues, 4)).toEqual(quadraticResidues);
    expect(multiplyBlock(nonresidues, 4)).toEqual(nonresidues);
    expect(multiplyBlock(quadraticResidues, 2)).toEqual(nonresidues);
    expect(multiplyBlock(nonresidues, 2)).toEqual(quadraticResidues);

    const inversionOrbits = [[0], [1, 6], [2, 5], [3, 4]];
    expect(inversionOrbits.flat().sort((left, right) => left - right)).toEqual(carrier(7));
    expect(inversionOrbits.every((orbit) => orbit.every((value) => orbit.includes((7 - value) % 7)))).toBe(true);
  });

  it("derives unit residues by both coprimality and full-cycle traversal", () => {
    for (const level of levels) {
      const unitsByGcd = carrier(level).filter((step) => gcd(step, level) === 1);
      const unitsByTraversal = carrier(level).filter((step) => {
        const visited = new Set(carrier(level).map((multiple) => (step * multiple) % level));
        return visited.size === level;
      });
      expect(unitsByTraversal).toEqual(unitsByGcd);
    }
    expect(carrier(6).map((multiple) => (2 * multiple) % 6)).toEqual([0, 2, 4, 0, 2, 4]);
    expect(new Set(carrier(6).map((multiple) => (5 * multiple) % 6)).size).toBe(6);
  });

  it("checks the cyclic element-order reason behind the embedding divisibility theorem", () => {
    const order = (level: number, value: number) => {
      for (let multiple = 1; multiple <= level; multiple += 1) {
        if ((multiple * value) % level === 0) return multiple;
      }
      throw new Error("Every element of a finite cyclic group must have finite order.");
    };

    for (const source of levels.slice(1)) {
      for (const target of levels) {
        const hasElementOfExactOrder = carrier(target).some((value) => order(target, value) === source);
        expect(hasElementOfExactOrder).toBe(target % source === 0);
      }
    }
    expect(carrier(4).map((value) => order(4, value))).toEqual([1, 4, 2, 4]);
    expect(carrier(5).map((value) => order(5, value))).not.toContain(3);
  });

  it("proves affine maps preserve the PLUS torsor law while nonzero shifts fail STAR", () => {
    const torsor = (level: number, first: number, middle: number, last: number) =>
      (first - middle + last + level) % level;

    for (const level of levels) {
      const units = carrier(level).filter((unit) => gcd(unit, level) === 1);
      for (const unit of units) {
        for (const shift of carrier(level)) {
          const affine = (value: number) => (unit * value + shift) % level;
          for (const first of carrier(level)) {
            for (const middle of carrier(level)) {
              for (const last of carrier(level)) {
                expect(affine(torsor(level, first, middle, last))).toBe(
                  torsor(level, affine(first), affine(middle), affine(last)),
                );
              }
            }
          }
          if (level >= 2 && shift !== 0) {
            expect(affine(star(level, 0, 0))).not.toBe(star(level, affine(0), affine(0)));
          }
        }
      }
    }
  });

  it("lists all five L3 pair orbits before multiplying by four typed-family fibres", () => {
    const actions = [(value: number) => value, (value: number) => (2 * value) % 3];
    const seen = new Set<string>();
    const orbits: string[][] = [];

    for (const left of carrier(3)) {
      for (const right of carrier(3)) {
        const key = `${left},${right}`;
        if (seen.has(key)) continue;
        const orbit = [...new Set(actions.map((action) => `${action(left)},${action(right)}`))].sort();
        orbit.forEach((member) => seen.add(member));
        orbits.push(orbit);
      }
    }

    expect(orbits).toEqual([["0,0"], ["0,1", "0,2"], ["1,0", "2,0"], ["1,1", "2,2"], ["1,2", "2,1"]]);
    expect(seen.size).toBe(9);
    expect(orbits.length * 4).toBe(20);
  });

  it("separates all cyclic characters from the faithful phase labels", () => {
    for (const level of levels) {
      for (const phaseIndex of carrier(level)) {
        const kernel = carrier(level).filter((value) => (phaseIndex * value) % level === 0);
        expect(kernel.length === 1).toBe(gcd(phaseIndex, level) === 1);
      }
    }
  });

  it("reconstructs the school Burnside examples at L3 from fixed objects", () => {
    const identity = (value: number) => value;
    const swap = (value: number) => (2 * value) % 3;
    const pointFixCounts = [identity, swap].map(
      (action) => carrier(3).filter((value) => action(value) === value).length,
    );
    const pairs = carrier(3).flatMap((left) => carrier(3).map((right) => [left, right] as const));
    const pairFixCounts = [identity, swap].map(
      (action) => pairs.filter(([left, right]) => action(left) === left && action(right) === right).length,
    );

    expect(pointFixCounts).toEqual([3, 1]);
    expect((pointFixCounts[0]! + pointFixCounts[1]!) / 2).toBe(2);
    expect(pairFixCounts).toEqual([9, 1]);
    expect((pairFixCounts[0]! + pairFixCounts[1]!) / 2).toBe(5);
  });
});
