import { describe, expect, it } from "vitest";
import {
  lawfulExits,
  memoryRegisters,
  refusalGates,
  routePhases,
  routeProperties,
  thinkingMisreadings,
  thinkingTranslationKeys,
  thinkingWalkthrough,
} from "../src/content/thinking";
import { releaseEvidence } from "../src/content/evidence";

describe("the reasoning route", () => {
  it("keeps the phase set closed and in order", () => {
    expect(routePhases).toHaveLength(7);
    expect(routePhases.map((phase) => phase.number)).toEqual(["01", "02", "03", "04", "05", "06", "07"]);
    expect(routePhases.map((phase) => phase.name)).toEqual([
      "SEARCH",
      "HYPOTHESES",
      "PROBING",
      "COMPOSITION",
      "REVEAL",
      "LEARNING",
      "COMPLETE",
    ]);
  });

  it("puts the external disclosure before the learning phase", () => {
    // The whole separation between learning and self-confirmation rests on this
    // order. If LEARNING ever precedes REVEAL, the page is describing a system
    // that can score its own outcomes.
    const reveal = routePhases.findIndex((phase) => phase.name === "REVEAL");
    const learning = routePhases.findIndex((phase) => phase.name === "LEARNING");
    expect(reveal).toBeGreaterThan(-1);
    expect(learning).toBe(reveal + 1);
    expect(routePhases[learning]!.happens).toMatch(/laws, the candidate set, and the verdict do not/i);
  });

  it("gives every phase a question, an action, a detail, and a stopping condition", () => {
    for (const phase of routePhases) {
      expect(phase.title.length).toBeGreaterThan(8);
      expect(phase.question.endsWith("?")).toBe(true);
      expect(phase.happens.length).toBeGreaterThan(40);
      expect(phase.detail.length).toBeGreaterThan(120);
      expect(phase.stopsWhen.length).toBeGreaterThan(20);
    }
  });

  it("keeps the two lawful exits distinct", () => {
    expect(lawfulExits.map((exit) => exit.terminal)).toEqual(["BOUNDARY", "REJECT"]);
    const boundary = lawfulExits[0]!;
    const reject = lawfulExits[1]!;
    expect(boundary.title).toMatch(/lawfully/i);
    expect(reject.title).toMatch(/not lawful/i);
  });

  it("names four constraints that separate a route from a search", () => {
    expect(routeProperties).toHaveLength(4);
    const prose = routeProperties.map((entry) => `${entry.title} ${entry.text}`).join(" ");
    // Each of the four has to be stated as an enforced rule, not an aspiration.
    expect(prose).toMatch(/may not/i);
    expect(prose).toMatch(/budget/i);
    expect(prose).toMatch(/external evaluator/i);
    expect(prose).toMatch(/leaves its own record/i);
  });

  it("names one stop per declared check and says which terminal it reaches", () => {
    expect(refusalGates.map((gate) => gate.code)).toEqual(["G1", "G2", "G3", "G4", "G5"]);
    expect(refusalGates.filter((gate) => gate.terminal === "BOUNDARY")).toHaveLength(4);
    expect(refusalGates.filter((gate) => gate.terminal === "REJECT")).toHaveLength(1);
    for (const gate of refusalGates) {
      expect(gate.gate.length).toBeGreaterThan(8);
      expect(gate.refusesWhen.length).toBeGreaterThan(30);
      expect(gate.instead.length).toBeGreaterThan(30);
    }
  });

  it("carries three registers and drops two", () => {
    expect(memoryRegisters.filter((entry) => entry.carried)).toHaveLength(3);
    expect(memoryRegisters.filter((entry) => !entry.carried)).toHaveLength(2);

    // Durable learned state is carried, and it is the detachable kind — that is
    // what makes every published percentage a paired measurement.
    const volume = memoryRegisters.find((entry) => entry.register === "The learned volume");
    expect(volume?.carried).toBe(true);
    expect(volume?.detail).toMatch(/detach/i);

    // Two things a reader will assume are there have to stay absent.
    for (const entry of memoryRegisters.filter((register) => !register.carried)) {
      expect(entry.holds).toMatch(/^Nothing\./);
    }
  });

  it("walks one bounded step through values that match the published release numbers", () => {
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

    // The attribution gap is the one a reader is most likely to walk away with,
    // so the page has to say it rather than let the diagram imply otherwise.
    const attribution = thinkingMisreadings.at(-1)!;
    expect(attribution.claim).toMatch(/what the published results measured/i);
    expect(attribution.correction).toMatch(/not established/i);
  });

  it("publishes no internal identifier, module path, or receipt type", () => {
    const prose = [
      ...routePhases.flatMap((phase) => [phase.title, phase.question, phase.happens, phase.detail, phase.stopsWhen]),
      ...lawfulExits.flatMap((exit) => [exit.title, exit.meaning, exit.detail]),
      ...routeProperties.flatMap((entry) => [entry.title, entry.text]),
      ...refusalGates.flatMap((gate) => [gate.gate, gate.refusesWhen, gate.instead]),
      ...memoryRegisters.flatMap((entry) => [entry.register, entry.holds, entry.detail]),
      ...thinkingMisreadings.flatMap((entry) => [entry.claim, entry.correction]),
    ].join(" ");

    // SCREAMING_SNAKE terminals, dotted module paths, and _private helpers all
    // belong in the theory archive rather than on a public page.
    expect(prose).not.toMatch(/[A-Z][A-Z0-9]+_[A-Z0-9_]+/);
    expect(prose).not.toMatch(/\b\w+\.py\b/);
    expect(prose).not.toMatch(/\b_[a-z_]+\(/);
  });

  it("makes no performance, cognition, or autonomy claim anywhere in the schemes", () => {
    const prose = [
      ...routePhases.flatMap((phase) => [phase.title, phase.question, phase.happens, phase.detail, phase.stopsWhen]),
      ...lawfulExits.flatMap((exit) => [exit.title, exit.meaning, exit.detail]),
      ...routeProperties.flatMap((entry) => [entry.title, entry.text]),
      ...refusalGates.flatMap((gate) => [gate.gate, gate.refusesWhen, gate.instead]),
      ...memoryRegisters.flatMap((entry) => [entry.register, entry.holds, entry.detail]),
      ...thinkingWalkthrough.map((row) => row.note),
    ].join(" ");

    expect(prose).not.toMatch(/\b(faster|cheaper|outperform|beats|state of the art|understands|conscious)\b/i);
    expect(prose).not.toMatch(/\b(fully autonomous|human-level|production-ready)\b/i);
  });

  it("publishes a deduplicated translation surface", () => {
    expect(new Set(thinkingTranslationKeys).size).toBe(thinkingTranslationKeys.length);
    expect(thinkingTranslationKeys).toEqual(expect.arrayContaining(routePhases.map((phase) => phase.title)));
    expect(thinkingTranslationKeys).toEqual(expect.arrayContaining(refusalGates.map((gate) => gate.gate)));
    expect(thinkingTranslationKeys).toEqual(expect.arrayContaining(routeProperties.map((entry) => entry.title)));
  });
});
