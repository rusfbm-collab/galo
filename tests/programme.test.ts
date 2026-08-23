import { describe, expect, it } from "vitest";
import {
  askedFor,
  assessmentTable,
  hardQuestions,
  nonAffiliation,
  notAskedFor,
  notPublishedHere,
  programmeTranslationKeys,
  regionFit,
  twelveMonths,
} from "../src/content/programme";
import { siteContent } from "../src/content/site";

/**
 * The dossier is the page most likely to be read by somebody deciding whether
 * to take a meeting, which makes it the page where a soft claim would do the
 * most damage. These tests pin the properties that keep it a document rather
 * than a pitch: the absences are stated, the fit arguments carry their limits,
 * the commitments carry their failure conditions, and no relationship with
 * anybody is implied anywhere in it.
 */
describe("assessment dossier", () => {
  it("states the non-affiliation in the form the claim checker requires", () => {
    expect(nonAffiliation).toContain("not affiliated with, endorsed by, backed by, or selected by Hub71");
    expect(nonAffiliation).toMatch(/reports no decision, no relationship, and no outcome/i);
  });

  it("never implies a relationship, a selection, or an endorsement", () => {
    const prose = programmeTranslationKeys.join(" ");
    expect(prose).not.toMatch(/\b(Hub71 partner|Hub71 portfolio|Hub71 cohort|selected for|accepted into)\b/i);
    // Describing somebody else's programme second-hand is the failure mode this
    // page exists to avoid, so its own strings may not do it either.
    expect(prose).not.toMatch(/\b(their criteria|the programme offers|eligibility requirements)\b/i);
    expect(new Set(programmeTranslationKeys).size).toBe(programmeTranslationKeys.length);
  });

  it("keeps the negative lines in the table rather than in a footnote", () => {
    expect(assessmentTable).toHaveLength(11);

    const negative = assessmentTable.filter((row) => row.status === "NONE" || row.status === "NOT ESTABLISHED");
    expect(negative).toHaveLength(6);

    // The first negative line has to appear before the halfway point, or the
    // table is ordered to be skimmed favourably.
    const firstNegative = assessmentTable.findIndex((row) => row.status === "NONE" || row.status === "NOT ESTABLISHED");
    expect(firstNegative).toBeLessThan(assessmentTable.length / 2);

    for (const row of assessmentTable) {
      expect(row.answerToday.length, row.dimension).toBeGreaterThan(40);
      if (row.whereToCheck) expect(row.whereToCheck).toMatch(/^\/[a-z0-9#/-]*$/);
    }
  });

  it("agrees with the empty fields in the site record rather than filling them in", () => {
    expect(siteContent.company.revenue).toBeNull();
    expect(siteContent.company.fundsRaised).toBeNull();
    expect(siteContent.company.legalStatus).toBeNull();

    const byDimension = new Map(assessmentTable.map((row) => [row.dimension, row]));
    expect(byDimension.get("Revenue")!.status).toBe("NONE");
    expect(byDimension.get("Capital raised")!.status).toBe("NONE");
    expect(byDimension.get("Operating company")!.status).toBe("NOT ESTABLISHED");
    expect(byDimension.get("Independent verification")!.status).toBe("NOT ESTABLISHED");
    expect(byDimension.get("External operational gain")!.status).toBe("NOT ESTABLISHED");
  });

  it("attaches a limit to every regional-fit claim", () => {
    expect(regionFit).toHaveLength(4);
    for (const entry of regionFit) {
      expect(entry.mechanism.length, entry.claim).toBeGreaterThan(120);
      expect(entry.limit.length, entry.claim).toBeGreaterThan(80);
      // A limit that only softens the claim is not a limit.
      expect(entry.limit, entry.claim).toMatch(/\bno\b|\bnot\b|\bneither\b/i);
    }
  });

  it("gives every twelve-month commitment the observation that would show it was missed", () => {
    expect(twelveMonths).toHaveLength(5);
    expect(twelveMonths.map((entry) => entry.window)).toEqual([
      "Months 0–3",
      "Months 0–6",
      "Months 3–9",
      "Months 6–12",
      "Months 9–12",
    ]);
    for (const entry of twelveMonths) {
      expect(entry.wouldFailIf.length, entry.window).toBeGreaterThan(40);
    }
    // The two commitments that matter most are the ones that could be quietly
    // dropped: an outside re-derivation, and publishing a measurement whichever
    // way it comes out.
    expect(twelveMonths[1]!.deliverable).toMatch(/outside the project/i);
    expect(twelveMonths[1]!.wouldFailIf).toMatch(/not published because it went badly/i);
    expect(twelveMonths[4]!.deliverable).toMatch(/whatever it turns out to be/i);
    expect(twelveMonths[4]!.wouldFailIf).toMatch(/only a favourable one/i);
  });

  it("says what is not being asked for, at the same length as what is", () => {
    expect(askedFor).toHaveLength(5);
    expect(notAskedFor).toHaveLength(5);
    expect(notAskedFor.join(" ")).toMatch(/endorsement/i);
    expect(notAskedFor.join(" ")).toMatch(/validation of the technical claims/i);
  });

  it("answers the six hard questions without softening the two that hurt", () => {
    expect(hardQuestions).toHaveLength(6);
    const byQuestion = new Map(hardQuestions.map((entry) => [entry.question, entry.answerToday]));
    expect(byQuestion.get("Does any of this help anyone?")).toMatch(/^Unknown/);
    expect(byQuestion.get("Who has checked this?")).toMatch(/^Nobody outside the project/);
    for (const entry of hardQuestions) {
      expect(entry.question.endsWith("?"), entry.question).toBe(true);
      expect(entry.answerToday.length, entry.question).toBeGreaterThan(120);
    }
  });

  it("separates facts that are withheld from facts that do not exist", () => {
    expect(notPublishedHere).toHaveLength(4);
    const withheld = notPublishedHere.filter((entry) => entry.status === "NOT DISCLOSED");
    const absent = notPublishedHere.filter((entry) => entry.status === "NOT APPLICABLE");
    expect(withheld).toHaveLength(2);
    expect(absent).toHaveLength(2);
    for (const entry of withheld) {
      expect(entry.availability).toMatch(/on request/i);
    }
    for (const entry of absent) {
      expect(entry.availability).toMatch(/no (capital|operating company)/i);
    }
  });
});
