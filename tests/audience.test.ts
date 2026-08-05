import { describe, expect, it } from "vitest";
import {
  auditLimits,
  auditorQuestions,
  auditTranslationKeys,
  evidenceChain,
  reproductionSteps,
  statusRules,
  verificationTiers,
} from "../src/content/audit";
import {
  businessProblem,
  diligenceSteps,
  investorNotClaimed,
  investorsTranslationKeys,
  oneMinute,
  oneMinuteFacts,
  riskRegister,
  stageFacts,
  whereItFits,
} from "../src/content/investors";
import { readerPaths } from "../src/content/plainLanguage";
import { siteContent } from "../src/content/site";

/**
 * The investor and audit routes are the two places where an over-claim would do
 * the most damage, because they are read by people who will not open the
 * mathematics and check it themselves. These tests pin the honesty properties
 * rather than the prose.
 */
describe("investor entry point", () => {
  it("opens with three sentences and four qualifying numbers", () => {
    expect(oneMinute.what.length).toBeGreaterThan(60);
    expect(oneMinute.forWhom.length).toBeGreaterThan(60);
    expect(oneMinute.whyNow.length).toBeGreaterThan(60);
    expect(oneMinuteFacts).toHaveLength(4);
    expect(oneMinuteFacts.map((fact) => fact.value)).toContain("0");
  });

  it("prints the zero-measurement fact rather than omitting it", () => {
    const zeroResults = oneMinuteFacts.find((fact) => fact.label.includes("measured external results"));
    expect(zeroResults).toBeDefined();
    expect(zeroResults!.value).toBe("0");
    expect(zeroResults!.note).toMatch(/no benchmark, customer outcome, or operational gain has been measured/i);
  });

  it("keeps the stage facts aligned with the empty fields in the site record", () => {
    expect(siteContent.company.revenue).toBeNull();
    expect(siteContent.company.fundsRaised).toBeNull();
    expect(siteContent.company.legalStatus).toBeNull();

    const stage = stageFacts.find((fact) => fact.question === "What stage is this?");
    expect(stage!.answer).toMatch(/no revenue, no funds raised, no customer, no pilot, and no letter of intent/i);

    const disclosure = stageFacts.filter((fact) => fact.marker === "NOT DISCLOSED");
    expect(disclosure.length).toBeGreaterThanOrEqual(2);
    for (const fact of disclosure) {
      expect(fact.answer).toMatch(/not disclosed/i);
    }
  });

  it("marks every deployment scenario as hypothetical rather than as a relationship", () => {
    expect(whereItFits).toHaveLength(4);
    const prose = whereItFits.flatMap((entry) => [entry.situation, entry.whatWouldChange]).join(" ");
    expect(prose).not.toMatch(/\b(our customer|our client|we deployed|in production with|pilot with)\b/i);
    for (const entry of whereItFits) {
      expect(entry.whatWouldChange).toMatch(/would|becomes|stops|keeps/i);
    }
  });

  it("gives every risk a test that could settle it in either direction", () => {
    expect(riskRegister).toHaveLength(6);
    expect(riskRegister.map((entry) => entry.code)).toEqual(["R1", "R2", "R3", "R4", "R5", "R6"]);
    for (const entry of riskRegister) {
      expect(entry.whyItMatters.length).toBeGreaterThan(80);
      expect(entry.settledBy.length).toBeGreaterThan(60);
    }
  });

  it("orders the diligence path by cost and ends at the missing measurement", () => {
    expect(diligenceSteps).toHaveLength(6);
    expect(diligenceSteps.map((step) => step.timeBox)).toEqual(["30m", "1h", "30m", "1h", "1d", "1w"]);
    expect(diligenceSteps.at(-1)!.outcome).toMatch(/this is the missing evidence/i);
  });

  it("publishes the four business problems and six non-claims", () => {
    expect(businessProblem).toHaveLength(4);
    expect(investorNotClaimed).toHaveLength(6);
    for (const line of investorNotClaimed) {
      expect(line).toMatch(/^No\b/);
    }
  });

  it("makes no performance, traction, or valuation claim in any investor string", () => {
    const prose = investorsTranslationKeys.join(" ");
    expect(prose).not.toMatch(/\b(revenue of|ARR|valuation|term sheet|signed|LOI secured|customers use)\b/i);
    expect(prose).not.toMatch(/\b(?:is|are|runs|performs|works)\s+(?:faster|cheaper|better)\s+than\b/i);
    expect(prose).not.toMatch(/\b(outperforms?|market leader|best[- ]in[- ]class)\b/i);
    expect(new Set(investorsTranslationKeys).size).toBe(investorsTranslationKeys.length);
  });
});

describe("audit entry point", () => {
  it("ends its verification ladder in a tier that establishes nothing", () => {
    expect(verificationTiers.map((tier) => tier.code)).toEqual(["T1", "T2", "T3", "T4"]);
    expect(verificationTiers.at(-1)!.label).toMatch(/not verifiable from this site/i);
    expect(verificationTiers.at(-1)!.means).toMatch(/listed rather than quietly omitted/i);
  });

  it("keeps the five claim slots in the order a reviewer would walk them", () => {
    expect(evidenceChain.map((step) => step.field)).toEqual(["claim", "scope", "artifact", "check", "status"]);
    expect(evidenceChain.at(-1)!.detail).toMatch(/NOT PROVEN/);
  });

  it("states the four status rules including the boundary rule", () => {
    expect(statusRules.map((rule) => rule.code)).toEqual(["S1", "S2", "S3", "S4"]);
    expect(statusRules[2]!.rule).toMatch(/BOUNDARY is not a softer PASS/i);
    expect(statusRules[3]!.rule).toMatch(/NOT PROVEN is a statement about evidence/i);
  });

  it("answers eight reviewer questions and gives each one a check", () => {
    expect(auditorQuestions).toHaveLength(8);
    for (const entry of auditorQuestions) {
      expect(entry.question.endsWith("?")).toBe(true);
      expect(entry.answerToday.length).toBeGreaterThan(60);
      expect(entry.howToCheck.length).toBeGreaterThan(60);
    }
  });

  it("gives every reproduction step an expected result", () => {
    expect(reproductionSteps).toHaveLength(5);
    const expected = reproductionSteps.map((step) => step.expected).join(" ");
    expect(expected).toContain("560");
    expect(expected).toContain("1,204");
    expect(expected).toContain("880");
    expect(expected).toContain("440");
  });

  it("publishes five limits, all of them phrased as things the reader cannot establish", () => {
    expect(auditLimits).toHaveLength(5);
    for (const limit of auditLimits) {
      expect(limit).toMatch(/^You cannot establish/);
    }
    expect(auditLimits.join(" ")).toMatch(/independence of the checking/i);
  });

  it("never implies that any check published here is independent", () => {
    const prose = auditTranslationKeys.join(" ");
    expect(prose).not.toMatch(/\b(independently audited|third-party verified|externally certified)\b/i);
    expect(new Set(auditTranslationKeys).size).toBe(auditTranslationKeys.length);
  });
});

describe("reader paths", () => {
  it("gives each audience exactly three stops that resolve to real routes", () => {
    expect(readerPaths).toHaveLength(3);
    const routes = new Set<string>(siteContent.navigation.map((item) => item.href));
    routes.add("/");
    for (const path of readerPaths) {
      expect(path.stops).toHaveLength(3);
      expect(path.minutes).toMatch(/^\d+m$/);
      for (const stop of path.stops) {
        const [route] = stop.href.split("#", 1);
        expect(routes.has(route!), `Unknown reader-path route ${route}`).toBe(true);
      }
    }
  });
});
