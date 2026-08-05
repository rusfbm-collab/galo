import { describe, expect, it } from "vitest";
import {
  memoryRegisters,
  refusalGates,
  thinkingMisreadings,
  thinkingTranslationKeys,
  thinkingWalkthrough,
  thoughtStages,
} from "../src/content/thinking";
import { releaseEvidence } from "../src/content/evidence";

describe("thinking schemes", () => {
  it("keeps the shipped stages and the target stages separated", () => {
    expect(thoughtStages).toHaveLength(9);

    const current = thoughtStages.filter((stage) => stage.status === "CURRENT V4");
    const target = thoughtStages.filter((stage) => stage.status === "TARGET");
    expect(current).toHaveLength(7);
    expect(target).toHaveLength(2);

    // The target stages must be the tail, so a reader who stops early never sees
    // unshipped architecture presented as current behaviour.
    expect(thoughtStages.slice(7).every((stage) => stage.status === "TARGET")).toBe(true);
    for (const stage of target) {
      expect(stage.stopsWhen).toMatch(/does not run at all in the current release/i);
    }

    expect(thoughtStages.map((stage) => stage.number)).toEqual(["01", "02", "03", "04", "05", "06", "07", "08", "09"]);
  });

  it("gives every stage a question, an action, a detail, and a stopping condition", () => {
    for (const stage of thoughtStages) {
      expect(stage.name.length).toBeGreaterThan(8);
      expect(stage.question.endsWith("?")).toBe(true);
      expect(stage.happens.length).toBeGreaterThan(40);
      expect(stage.detail.length).toBeGreaterThan(120);
      expect(stage.stopsWhen.length).toBeGreaterThan(20);
    }
  });

  it("names one refusal gate per declared check", () => {
    expect(refusalGates.map((gate) => gate.code)).toEqual(["G1", "G2", "G3", "G4", "G5"]);
    for (const gate of refusalGates) {
      expect(gate.gate.length).toBeGreaterThan(8);
      expect(gate.refusesWhen.length).toBeGreaterThan(30);
      expect(gate.instead.length).toBeGreaterThan(30);
    }
  });

  it("carries three registers and drops two", () => {
    expect(memoryRegisters.filter((entry) => entry.carried)).toHaveLength(3);
    expect(memoryRegisters.filter((entry) => !entry.carried)).toHaveLength(2);
  });

  it("walks one thought through values that match the published release numbers", () => {
    expect(thinkingWalkthrough).toHaveLength(9);
    const values = thinkingWalkthrough.map((row) => row.value);
    expect(values).toContain(releaseEvidence.selector[0]!.value);
    expect(values).toContain(releaseEvidence.selector[1]!.value);
    expect(values).toContain(releaseEvidence.selector[2]!.value);
    expect(values).toContain("SHA-256(observation, candidate_id, ordinal)");
    for (const row of thinkingWalkthrough) {
      expect(row.asks.endsWith("?")).toBe(true);
      expect(row.note.length).toBeGreaterThan(40);
    }
  });

  it("states five misreadings and corrects each of them", () => {
    expect(thinkingMisreadings).toHaveLength(5);
    for (const entry of thinkingMisreadings) {
      expect(entry.correction.length).toBeGreaterThan(entry.claim.length);
    }
  });

  it("makes no performance, cognition, or autonomy claim anywhere in the schemes", () => {
    const prose = [
      ...thoughtStages.flatMap((stage) => [stage.name, stage.question, stage.happens, stage.detail, stage.stopsWhen]),
      ...refusalGates.flatMap((gate) => [gate.gate, gate.refusesWhen, gate.instead]),
      ...memoryRegisters.flatMap((entry) => [entry.register, entry.holds, entry.detail]),
      ...thinkingWalkthrough.map((row) => row.note),
    ].join(" ");

    expect(prose).not.toMatch(/\b(faster|cheaper|outperform|beats|state of the art|understands|conscious)\b/i);
    expect(prose).not.toMatch(/\b(fully autonomous|human-level|production-ready)\b/i);
  });

  it("publishes a deduplicated translation surface", () => {
    expect(new Set(thinkingTranslationKeys).size).toBe(thinkingTranslationKeys.length);
    expect(thinkingTranslationKeys).toEqual(expect.arrayContaining(thoughtStages.map((stage) => stage.name)));
    expect(thinkingTranslationKeys).toEqual(expect.arrayContaining(refusalGates.map((gate) => gate.gate)));
  });
});
