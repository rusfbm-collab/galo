export const galoLevels = [1, 2, 3, 4, 5, 6, 7] as const;

export type GaloLevel = (typeof galoLevels)[number];
export type GaloOperation = "PLUS" | "STAR";

export const galoOperations: readonly GaloOperation[] = ["PLUS", "STAR"];

export type CayleyCell = {
  left: number;
  right: number;
  result: number;
};

export type TowerCount = {
  level: GaloLevel;
  poles: number;
  cellsPerOperator: number;
  typedCells: number;
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
  cellsPerOperator: level ** 2,
  typedCells: 4 * level ** 2,
}));

export const rawCellsPerOperator = towerCounts.reduce((sum, row) => sum + row.cellsPerOperator, 0);
export const canonicalTypedCellCount = towerCounts.reduce((sum, row) => sum + row.typedCells, 0);
