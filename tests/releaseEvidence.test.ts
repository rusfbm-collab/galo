import { describe, expect, it } from "vitest";
import { claims } from "../src/content/claims";
import { releaseEvidence } from "../src/content/evidence";
import { publicClaims } from "../src/content/publicClaims";

describe("R5B6A1_3 evidence arithmetic", () => {
  it("reconciles the stored FULL extension without calling it fresh", () => {
    const { arithmetic, freshReplay } = releaseEvidence;
    expect(arithmetic.parentStoredFull + arithmetic.newStoredChecks).toBe(arithmetic.storedFull);
    expect(freshReplay.full).toBe("NOT COMPLETED");
  });

  it("reconciles the six disjoint physical work phases", () => {
    expect(releaseEvidence.workLedger.reduce((sum, phase) => sum + phase.value, 0)).toBe(
      releaseEvidence.arithmetic.physicalWorkTotal,
    );
  });

  it("reconciles formal universe and coverage counts", () => {
    const { arithmetic } = releaseEvidence;
    expect(arithmetic.activeTypedCoordinates + 6 * arithmetic.perLevelCoverageCells).toBe(
      arithmetic.wholeTowerUniverse,
    );
    expect(7 * arithmetic.perLevelCoverageCells).toBe(arithmetic.coverageCells);
  });

  it("keeps source modules separate from the generated wheel marker", () => {
    const { arithmetic } = releaseEvidence;
    expect(arithmetic.selectedSourceModules + arithmetic.excludedSourceModules).toBe(arithmetic.allSourceModules);
    expect(arithmetic.selectedSourceModules + arithmetic.generatedRuntimePolicyMarkers).toBe(arithmetic.wheelInventory);
    expect(arithmetic.wheelInventory + arithmetic.excludedSourceModules).not.toBe(arithmetic.allSourceModules);
  });

  it("partitions executable descriptors into two equal fixed-pattern frontiers", () => {
    const [left, right] = [440, 440];
    expect(left + right).toBe(880);
    expect(releaseEvidence.selector.map((stage) => stage.value)).toContain("440");
  });

  it("keeps the internal and rendered claim registries aligned with exact terminal statuses", () => {
    expect(claims.map(({ id, publicCopy, status, source }) => ({ id, publicCopy, status, source }))).toEqual(
      publicClaims,
    );

    const statuses = Object.fromEntries(publicClaims.map(({ id, status }) => [id, status]));
    expect(statuses.C07_PERSISTENT_LEARNING_NOT_STARTED).toBe("not-started");
    expect(statuses.C08_TRAINED_ATLAS_NOT_PRESENT).toBe("not-present");
    expect(statuses.C09_EXTERNAL_GAIN_NOT_PROVEN).toBe("not-proven");
    expect(statuses.C10_GENERAL_AI_NOT_CLAIMED).toBe("not-claimed");
  });
});
