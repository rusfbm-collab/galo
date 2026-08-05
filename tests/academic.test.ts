import { describe, expect, it } from "vitest";
import { academicDefinitions, academicPropositions, academicTranslationKeys } from "../src/content/academicAnalysis";
import {
  cayleyFoundation,
  cayleyWhyFinite,
  investorBriefing,
  plainLanguageTranslationKeys,
} from "../src/content/plainLanguage";
import {
  comparisonMisreadings,
  comparisonRows,
  comparisonTranslationKeys,
  compositionSteps,
  galoStrengths,
  modelStrengths,
} from "../src/content/llmComparison";
import { locales } from "../src/i18n/I18nContext";
import { translations } from "../src/i18n/translations";

const translatedLocales = locales.filter((locale) => locale !== "en");

describe("academic reference", () => {
  it("numbers every definition and proposition uniquely and in order", () => {
    const definitionIds = academicDefinitions.map(({ id }) => id);
    const propositionIds = academicPropositions.map(({ id }) => id);
    expect(definitionIds).toEqual(academicDefinitions.map((_, index) => `D${index + 1}`));
    expect(propositionIds).toEqual(academicPropositions.map((_, index) => `P${index + 1}`));
    expect(new Set([...definitionIds, ...propositionIds]).size).toBe(definitionIds.length + propositionIds.length);
  });

  it("gives every proposition a statement, a formal form, and a nonempty proof", () => {
    for (const entry of academicPropositions) {
      expect(entry.statement.trim().length, `${entry.id}.statement`).toBeGreaterThan(40);
      expect(entry.formal.trim().length, `${entry.id}.formal`).toBeGreaterThan(5);
      expect(entry.proof.length, `${entry.id}.proof`).toBeGreaterThan(1);
      for (const step of entry.proof) {
        expect(step.text.trim().length, `${entry.id} proof step`).toBeGreaterThan(30);
      }
    }
  });

  it("covers the results the rest of the site relies on", () => {
    const titles = academicPropositions.map(({ title }) => title).join(" | ");
    expect(titles).toContain("cyclic group");
    expect(titles).toContain("left zero");
    expect(titles).toContain("right-neutral");
    expect(titles).toContain("no two-sided identity");
    expect(titles).toContain("560 coordinates");
    expect(titles).toContain("levels divide");
    expect(titles).toContain("zero map");
  });

  it("keeps every formal expression out of the translated surface", () => {
    const formalStrings = [
      ...academicDefinitions.map(({ formal }) => formal),
      ...academicPropositions.flatMap((entry) => [
        entry.formal,
        ...entry.proof.flatMap((step) => (step.formal ? [step.formal] : [])),
      ]),
    ];
    for (const formal of formalStrings) {
      expect(academicTranslationKeys).not.toContain(formal);
    }
  });

  it("builds the Cayley foundation as six ordered steps with four table properties", () => {
    expect(cayleyFoundation.map(({ number }) => number)).toEqual(["01", "02", "03", "04", "05", "06"]);
    expect(cayleyFoundation[0]?.title.toLowerCase()).toContain("table");
    expect(cayleyWhyFinite).toHaveLength(4);
    expect(investorBriefing).toHaveLength(6);
    for (const entry of investorBriefing) {
      expect(entry.question.endsWith("?")).toBe(true);
      expect(entry.detail.trim().length).toBeGreaterThan(60);
    }
  });

  it("translates every academic and plain-language string into Russian, Chinese, and Arabic", () => {
    const required = [...academicTranslationKeys, ...plainLanguageTranslationKeys];
    for (const locale of translatedLocales) {
      const dictionary = translations[locale];
      const missing = required.filter((key) => !Object.hasOwn(dictionary, key));
      expect(missing, `missing ${locale} translations`).toEqual([]);
    }
  });
});

describe("language-model comparison", () => {
  it("compares ten properties and never states a performance claim", () => {
    expect(comparisonRows).toHaveLength(10);
    const forbidden = /\b(faster|cheaper|better than|outperform|beats|superior|more accurate than a language model\b)/i;
    for (const row of comparisonRows) {
      expect(row.dimension.trim().length).toBeGreaterThan(4);
      expect(row.model.trim().length).toBeGreaterThan(40);
      expect(row.galo.trim().length).toBeGreaterThan(40);
      expect(`${row.model} ${row.galo}`).not.toMatch(forbidden);
    }
  });

  it("keeps the breadth row last and honest about the trade", () => {
    const last = comparisonRows.at(-1);
    expect(last?.dimension).toBe("Breadth today");
    expect(last?.model.toLowerCase()).toContain("enormous");
    expect(last?.galo.toLowerCase()).toContain("narrow");
  });

  it("names what a language model can do and GALO cannot", () => {
    expect(modelStrengths).toHaveLength(4);
    expect(galoStrengths).toHaveLength(4);
    expect(modelStrengths.map(({ title }) => title)).toContain("Language and meaning");
  });

  it("corrects every misreading it raises", () => {
    expect(comparisonMisreadings).toHaveLength(5);
    for (const entry of comparisonMisreadings) {
      expect(entry.claim.trim().length).toBeGreaterThan(20);
      expect(entry.correction.trim().length).toBeGreaterThan(80);
    }
    expect(comparisonMisreadings[1]?.correction).toContain("No such comparison is claimed");
  });

  it("marks the two proposing stages of the composition as target architecture", () => {
    expect(compositionSteps).toHaveLength(5);
    const byActor = Object.fromEntries(compositionSteps.map((step) => [step.number, step]));
    expect(byActor["01"]?.status).toBe("TARGET");
    expect(byActor["05"]?.status).toBe("TARGET");
    expect(compositionSteps.filter((step) => step.status === "CURRENT V4")).toHaveLength(3);
  });

  it("translates every comparison string into Russian, Chinese, and Arabic", () => {
    for (const locale of translatedLocales) {
      const dictionary = translations[locale];
      const missing = comparisonTranslationKeys.filter((key) => !Object.hasOwn(dictionary, key));
      expect(missing, `missing ${locale} translations`).toEqual([]);
    }
  });
});
