import { describe, expect, it } from "vitest";
import {
  termChapterLabel,
  termDeepDiveFields,
  termDeepDives,
  termLessonByTerm,
  termTranslationKeys,
  termUiTranslationKeys,
} from "../src/content/termDeepDives";
import { schoolMathLessonRequiredFields, schoolMathLessons } from "../src/content/theory";
import { translations } from "../src/i18n/translations";
import { locales } from "../src/i18n/I18nContext";

const translatedLocales = locales.filter((locale) => locale !== "en");

describe("term explanations", () => {
  it("attaches every deep dive to an existing school lesson", () => {
    for (const entry of termDeepDives) {
      expect(termLessonByTerm.get(entry.term), `unknown term ${entry.term}`).toBeDefined();
    }
    expect(new Set(termDeepDives.map(({ term }) => term)).size).toBe(termDeepDives.length);
  });

  it("only cross-links terms that can actually be opened", () => {
    const known = new Set(schoolMathLessons.map(({ term }) => term));
    for (const entry of termDeepDives) {
      expect(entry.related.length).toBeGreaterThan(0);
      for (const related of entry.related) {
        expect(known.has(related), `${entry.term} links to unknown term ${related}`).toBe(true);
        expect(related).not.toBe(entry.term);
      }
    }
  });

  it("writes a substantial answer for each of the four plain-language questions", () => {
    for (const entry of termDeepDives) {
      for (const field of termDeepDiveFields) {
        expect(entry[field].trim().length, `${entry.term}.${field}`).toBeGreaterThan(40);
      }
    }
  });

  it("translates every explanation string into Russian, Chinese, and Arabic", () => {
    const required = [
      ...termTranslationKeys,
      ...termUiTranslationKeys,
      ...Object.values(termChapterLabel),
      ...schoolMathLessons.flatMap((lesson) => [
        lesson.term,
        ...schoolMathLessonRequiredFields.map((field) => lesson[field]),
      ]),
    ];

    for (const locale of translatedLocales) {
      const dictionary = translations[locale];
      const missing = required.filter((key) => !Object.hasOwn(dictionary, key));
      expect(missing, `missing ${locale} translations`).toEqual([]);
    }
  });
});
