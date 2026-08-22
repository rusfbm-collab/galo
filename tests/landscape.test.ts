import { describe, expect, it } from "vitest";
import { headlineClaims } from "../src/content/headlineClaims";
import { landscapeRows, landscapeStanding, landscapeVerdicts, plainNeighbours } from "../src/content/landscape";

/**
 * The landscape section names other people's systems, which is the one place on
 * this site where a careless sentence would be a claim about somebody else's
 * work. These tests hold the section to the same discipline as the rest: describe
 * how a thing is built, never how well it performs, and never borrow a result.
 */

const PERFORMANCE_WORDS =
  /\b(better|worse|faster|slower|cheaper|smarter|more accurate|outperform\w*|beats?|superior|state of the art|state-of-the-art)\b/i;

describe("the wider field", () => {
  it("names thirteen families and fills every column", () => {
    expect(landscapeRows).toHaveLength(13);
    for (const row of landscapeRows) {
      expect(row.family.length).toBeGreaterThan(8);
      expect(row.examples.length).toBeGreaterThan(12);
      expect(row.decidedBy.length).toBeGreaterThan(80);
      expect(row.checkable.length).toBeGreaterThan(80);
      expect(row.relation.length).toBeGreaterThan(80);
    }
  });

  it("makes no performance comparison in any cell", () => {
    for (const row of landscapeRows) {
      for (const cell of [row.decidedBy, row.checkable, row.relation]) {
        expect(cell).not.toMatch(PERFORMANCE_WORDS);
      }
    }
    for (const verdict of landscapeVerdicts) {
      expect(verdict.answer).not.toMatch(PERFORMANCE_WORDS);
    }
  });

  it("names systems a reader could look up rather than gesturing at categories", () => {
    const examples = landscapeRows.map((row) => row.examples).join(" | ");
    for (const name of ["GPT", "Lean", "Z3", "AlphaProof", "Cyc", "Soar", "Drools", "LangChain", "Palantir"]) {
      expect(examples).toContain(name);
    }
  });

  it("says out loud where the project stands behind the field", () => {
    const relations = landscapeRows.map((row) => row.relation).join(" ");
    expect(relations).toMatch(/not implemented/i);
    expect(relations).toMatch(/narrower/i);
    expect(relations).toMatch(/specified rather than shipped/i);
  });

  it("keeps the unflattering column, and keeps it concrete", () => {
    expect(landscapeStanding).toHaveLength(4);
    const us = landscapeStanding.map((row) => row.us).join(" ");
    expect(us).toMatch(/no customer, no pilot, no deployment/i);
    expect(us).toMatch(/no benchmark has been run/i);
    expect(us).toMatch(/pre-seed/i);
  });

  it("answers the three questions a specialist would actually ask", () => {
    expect(landscapeVerdicts).toHaveLength(3);
    for (const verdict of landscapeVerdicts) {
      expect(verdict.question.endsWith("?")).toBe(true);
      expect(verdict.answer.length).toBeGreaterThan(120);
    }
  });
});

describe("the same comparison for a reader outside the field", () => {
  it("gives three neighbours and no product jargon", () => {
    expect(plainNeighbours).toHaveLength(3);
    for (const entry of plainNeighbours) {
      expect(entry.what.length).toBeGreaterThan(20);
      expect(entry.plain.length).toBeGreaterThan(150);
      // Vocabulary the plain page has not earned the right to use.
      expect(entry.plain).not.toMatch(/\b(inference|ontolog\w+|entailment|neuro-symbolic|SMT|corpus)\b/i);
      expect(entry.plain).not.toMatch(PERFORMANCE_WORDS);
    }
  });

  it("keeps the awkward neighbour awkward", () => {
    const rulebook = plainNeighbours[1]!;
    expect(rulebook.plain).toMatch(/decades old, and it works/i);
    expect(rulebook.plain).toMatch(/not running yet/i);
  });
});

describe("the headline, taken apart", () => {
  it("answers for each word of the headline", () => {
    expect(headlineClaims.map((claim) => claim.word)).toEqual(["Allowed", "Decide", "Show"]);
  });

  it("puts a mechanism, a limit, and a place to check next to every claim", () => {
    for (const claim of headlineClaims) {
      expect(claim.claim.length).toBeGreaterThan(60);
      expect(claim.mechanism.length).toBeGreaterThan(120);
      expect(claim.limit.length).toBeGreaterThan(80);
      expect(["/evidence", "/thinking", "/audit", "/math", "/theory", "/simple"]).toContain(claim.href);
      expect(claim.hrefLabel.length).toBeGreaterThan(12);
    }
  });

  it("carries the numbers the rest of the site is held to", () => {
    const mechanisms = headlineClaims.map((claim) => claim.mechanism).join(" ");
    expect(mechanisms).toContain("1,204");
    expect(mechanisms).toContain("880");
    expect(mechanisms).toContain("440");
    expect(mechanisms).toContain("4,802");
  });

  it("gives a sceptic an action for each promise, phrased as an instruction", () => {
    for (const claim of headlineClaims) {
      expect(claim.auditStep.length).toBeGreaterThan(100);
      expect(claim.auditStep).toMatch(/^(Enumerate|Run|Take)\b/);
    }
    const steps = headlineClaims.map((claim) => claim.auditStep).join(" ");
    expect(steps).toMatch(/falsifies the claim/i);
    expect(steps).toMatch(/cannot settle from here/i);
  });

  it("never states a limit softer than the claim it sits beside", () => {
    const limits = headlineClaims.map((claim) => claim.limit).join(" ");
    expect(limits).toMatch(/open work/i);
    expect(limits).toMatch(/no learned preference/i);
    expect(limits).toContain("fresh FULL was not run");
  });
});
