export const galoLevels = [1, 2, 3, 4, 5, 6, 7] as const;

export type GaloLevel = (typeof galoLevels)[number];
export type GaloOperation = "PLUS" | "STAR";
export type GaloOrientation = "LEFT" | "RIGHT";
export type GaloActionFamily = `${GaloOperation}_${GaloOrientation}`;
export type FixedActiveAxis = "ROW" | "COLUMN";
export type StandardTranslation = "LEFT_TRANSLATION" | "RIGHT_TRANSLATION";

export const galoOperations: readonly GaloOperation[] = ["PLUS", "STAR"];
export const galoActionFamilies: readonly GaloActionFamily[] = ["PLUS_LEFT", "PLUS_RIGHT", "STAR_LEFT", "STAR_RIGHT"];

export type CayleyCell = {
  left: number;
  right: number;
  result: number;
};

export type TowerCount = {
  level: GaloLevel;
  poles: number;
  orderedPairs: number;
  plusCells: number;
  starCells: number;
  lawCells: number;
  typedCells: number;
};

export type CanonicalTypedCell = {
  level: GaloLevel;
  family: GaloActionFamily;
  operation: GaloOperation;
  orientation: GaloOrientation;
  source: number;
  active: number;
  leftOperand: number;
  rightOperand: number;
  target: number;
  cellId: `L${GaloLevel}:${GaloActionFamily}:P${number}:P${number}`;
};

function assertCoordinate(level: number, coordinate: number, label: string) {
  if (!Number.isInteger(level) || level < 1 || level > 7) {
    throw new RangeError("GALO level must be an integer from 1 through 7.");
  }
  if (!Number.isInteger(coordinate) || coordinate < 0 || coordinate >= level) {
    throw new RangeError(`${label} operand must belong to Q_${level}.`);
  }
}

export function plusIndex(level: GaloLevel, left: number, right: number) {
  assertCoordinate(level, left, "Left");
  assertCoordinate(level, right, "Right");
  return (left + right) % level;
}

export function starIndex(level: GaloLevel, left: number, right: number) {
  assertCoordinate(level, left, "Left");
  assertCoordinate(level, right, "Right");
  return left === 0 ? 0 : (left + right) % level;
}

export function applyGaloOperation(operation: GaloOperation, level: GaloLevel, left: number, right: number) {
  return operation === "PLUS" ? plusIndex(level, left, right) : starIndex(level, left, right);
}

export function parseActionFamily(family: GaloActionFamily) {
  const [operation, orientation] = family.split("_") as [GaloOperation, GaloOrientation];
  return { operation, orientation };
}

export function buildCanonicalTypedCell(
  level: GaloLevel,
  family: GaloActionFamily,
  source: number,
  active: number,
): CanonicalTypedCell {
  assertCoordinate(level, source, "Source");
  assertCoordinate(level, active, "Active");

  const { operation, orientation } = parseActionFamily(family);
  const [leftOperand, rightOperand] = orientation === "LEFT" ? [source, active] : [active, source];
  const target = applyGaloOperation(operation, level, leftOperand, rightOperand);

  return {
    level,
    family,
    operation,
    orientation,
    source,
    active,
    leftOperand,
    rightOperand,
    target,
    cellId: `L${level}:${family}:P${source}:P${active}`,
  };
}

export function buildCanonicalTower(): CanonicalTypedCell[] {
  return galoLevels.flatMap((level) =>
    galoActionFamilies.flatMap((family) =>
      Array.from({ length: level }, (_, source) =>
        Array.from({ length: level }, (_, active) => buildCanonicalTypedCell(level, family, source, active)),
      ).flat(),
    ),
  );
}

export function buildFixedActiveTransformation(level: GaloLevel, family: GaloActionFamily, active: number) {
  assertCoordinate(level, active, "Active");
  return Array.from({ length: level }, (_, source) => buildCanonicalTypedCell(level, family, source, active).target);
}

export function isStrongOperatorMorphism(sourceLevel: GaloLevel, targetLevel: GaloLevel, mapping: readonly number[]) {
  if (mapping.length !== sourceLevel || mapping[0] !== 0) return false;
  if (mapping.some((value) => !Number.isInteger(value) || value < 0 || value >= targetLevel)) return false;

  for (const family of galoActionFamilies) {
    for (let source = 0; source < sourceLevel; source += 1) {
      for (let active = 0; active < sourceLevel; active += 1) {
        const sourceTarget = buildCanonicalTypedCell(sourceLevel, family, source, active).target;
        const mappedTarget = mapping[sourceTarget]!;
        const targetResult = buildCanonicalTypedCell(targetLevel, family, mapping[source]!, mapping[active]!).target;
        if (mappedTarget !== targetResult) return false;
      }
    }
  }
  return true;
}

export function buildScaledTowerMorphism(sourceLevel: GaloLevel, targetLevel: GaloLevel) {
  if (targetLevel % sourceLevel !== 0) return null;
  const scale = targetLevel / sourceLevel;
  return Array.from({ length: sourceLevel }, (_, pole) => (pole * scale) % targetLevel);
}

export const canonicalScaledEmbeddings = galoLevels.flatMap((sourceLevel) =>
  galoLevels.flatMap((targetLevel) => {
    const mapping = buildScaledTowerMorphism(sourceLevel, targetLevel);
    return mapping && isStrongOperatorMorphism(sourceLevel, targetLevel, mapping)
      ? [{ sourceLevel, targetLevel, mapping }]
      : [];
  }),
);

export function greatestCommonDivisor(left: number, right: number) {
  let a = left;
  let b = right;
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

export function fixedActiveAxis(family: GaloActionFamily): FixedActiveAxis {
  return parseActionFamily(family).orientation === "LEFT" ? "COLUMN" : "ROW";
}

export function standardTranslationForFamily(family: GaloActionFamily): StandardTranslation {
  return parseActionFamily(family).orientation === "LEFT" ? "RIGHT_TRANSLATION" : "LEFT_TRANSLATION";
}

export function leftStarTranslation(level: GaloLevel, active: number, source: number) {
  return starIndex(level, active, source);
}

export function rightStarTranslation(level: GaloLevel, active: number, source: number) {
  return starIndex(level, source, active);
}

export function unitMultipliers(level: GaloLevel) {
  return Array.from({ length: level }, (_, value) => value).filter(
    (value) => greatestCommonDivisor(value, level) === 1,
  );
}

export function applyUnitMultiplier(level: GaloLevel, multiplier: number, value: number) {
  assertCoordinate(level, value, "Unit-action");
  if (!unitMultipliers(level).includes(multiplier)) {
    throw new RangeError(`Multiplier ${multiplier} is not a unit modulo ${level}.`);
  }
  return (multiplier * value) % level;
}

export function unitCycleDecomposition(level: GaloLevel, multiplier: number) {
  const seen = new Set<number>();
  const cycles: number[][] = [];

  for (let value = 0; value < level; value += 1) {
    if (seen.has(value)) continue;
    const cycle: number[] = [];
    let cursor = value;
    do {
      seen.add(cursor);
      cycle.push(cursor);
      cursor = applyUnitMultiplier(level, multiplier, cursor);
    } while (!seen.has(cursor));
    cycles.push(cycle);
  }

  return cycles;
}

export function buildCarrierOrbit(level: GaloLevel, value: number) {
  assertCoordinate(level, value, "Orbit");
  return [...new Set(unitMultipliers(level).map((multiplier) => (multiplier * value) % level))].sort(
    (left, right) => left - right,
  );
}

export function buildPairOrbit(level: GaloLevel, source: number, active: number) {
  assertCoordinate(level, source, "Source");
  assertCoordinate(level, active, "Active");
  return [
    ...new Set(
      unitMultipliers(level).map((multiplier) => `${(multiplier * source) % level}:${(multiplier * active) % level}`),
    ),
  ]
    .map((key) => key.split(":").map(Number) as [number, number])
    .sort(([leftSource, leftActive], [rightSource, rightActive]) =>
      leftSource === rightSource ? leftActive - rightActive : leftSource - rightSource,
    );
}

export function buildPairStabilizer(level: GaloLevel, source: number, active: number) {
  assertCoordinate(level, source, "Source");
  assertCoordinate(level, active, "Active");
  return unitMultipliers(level).filter(
    (multiplier) => (multiplier * source) % level === source && (multiplier * active) % level === active,
  );
}

export function countPairOrbitsByEnumeration(level: GaloLevel) {
  const seen = new Set<string>();
  let count = 0;
  for (let source = 0; source < level; source += 1) {
    for (let active = 0; active < level; active += 1) {
      const key = `${source}:${active}`;
      if (seen.has(key)) continue;
      count += 1;
      for (const [orbitSource, orbitActive] of buildPairOrbit(level, source, active)) {
        seen.add(`${orbitSource}:${orbitActive}`);
      }
    }
  }
  return count;
}

export function fixedPointsOfUnit(level: GaloLevel, multiplier: number) {
  return Array.from({ length: level }, (_, value) => value).filter((value) => (multiplier * value) % level === value);
}

export function countPairOrbitsByBurnside(level: GaloLevel) {
  const multipliers = unitMultipliers(level);
  const fixedPairTotal = multipliers.reduce((sum, multiplier) => {
    const fixedPointCount = fixedPointsOfUnit(level, multiplier).length;
    return sum + fixedPointCount ** 2;
  }, 0);
  return fixedPairTotal / multipliers.length;
}

export function inversionOrbits(level: GaloLevel) {
  const seen = new Set<number>();
  const orbits: number[][] = [];
  for (let value = 0; value < level; value += 1) {
    if (seen.has(value)) continue;
    const inverse = (level - value) % level;
    const orbit = [...new Set([value, inverse])].sort((left, right) => left - right);
    orbit.forEach((item) => seen.add(item));
    orbits.push(orbit);
  }
  return orbits;
}

export function enumerateStarHomomorphisms(sourceLevel: GaloLevel, targetLevel: GaloLevel) {
  const zero = Array.from({ length: sourceLevel }, () => 0);
  if (sourceLevel === 1 || targetLevel % sourceLevel !== 0) return [zero];

  const scale = targetLevel / sourceLevel;
  const embeddings = unitMultipliers(sourceLevel).map((unit) =>
    Array.from({ length: sourceLevel }, (_, value) => (scale * unit * value) % targetLevel),
  );
  return [zero, ...embeddings];
}

export function iterateStarProduct(level: GaloLevel, value: number, length: number, association: "LEFT" | "RIGHT") {
  assertCoordinate(level, value, "Iteration");
  if (!Number.isInteger(length) || length < 1) throw new RangeError("Iteration length must be positive.");
  const sequence = [value];
  for (let index = 1; index < length; index += 1) {
    const previous = sequence[index - 1]!;
    sequence.push(association === "LEFT" ? starIndex(level, previous, value) : starIndex(level, value, previous));
  }
  return sequence;
}

export const sameLevelAutomorphismCount = galoLevels.reduce((sum, level) => sum + unitMultipliers(level).length, 0);

export const structuralOrbitCount = galoLevels.reduce(
  (towerTotal, level) => towerTotal + galoActionFamilies.length * countPairOrbitsByEnumeration(level),
  0,
);

export const structuralOrbitCountByBurnside = galoLevels.reduce(
  (towerTotal, level) => towerTotal + galoActionFamilies.length * countPairOrbitsByBurnside(level),
  0,
);

export const symmetryLevelProfiles = galoLevels.map((level) => ({
  level,
  units: unitMultipliers(level),
  automorphismOrder: unitMultipliers(level).length,
  holomorphOrder: level * unitMultipliers(level).length,
  carrierOrbitCount: new Set(Array.from({ length: level }, (_, value) => buildCarrierOrbit(level, value).join(":")))
    .size,
  pairOrbitCount: countPairOrbitsByEnumeration(level),
  pairOrbitCountByBurnside: countPairOrbitsByBurnside(level),
  starEndomorphismCount: enumerateStarHomomorphisms(level, level).length,
}));

export function buildCayleyTable(operation: GaloOperation, level: GaloLevel): CayleyCell[][] {
  return Array.from({ length: level }, (_, left) =>
    Array.from({ length: level }, (_, right) => ({
      left,
      right,
      result: applyGaloOperation(operation, level, left, right),
    })),
  );
}

export const towerCounts: readonly TowerCount[] = galoLevels.map((level) => ({
  level,
  poles: level,
  orderedPairs: level ** 2,
  plusCells: level ** 2,
  starCells: level ** 2,
  lawCells: 2 * level ** 2,
  typedCells: 4 * level ** 2,
}));

export const rawCellsPerOperator = towerCounts.reduce((sum, row) => sum + row.orderedPairs, 0);
export const rawLawCellCount = towerCounts.reduce((sum, row) => sum + row.lawCells, 0);
export const canonicalTypedCellCount = towerCounts.reduce((sum, row) => sum + row.typedCells, 0);
