import { describe, expect, it } from "vitest";
import { aiBasicsTranslationKeys, aiWords, notWhatYouThink, twoWaysToDecide } from "../src/content/aiBasics";

/**
 * This is the only material on the site written for somebody who does not work
 * with artificial intelligence at all. Two things could ruin it: reintroducing
 * the vocabulary it exists to explain, and turning a description of how other
 * systems are built into a claim about how well they work. Both are pinned.
 */
describe("AI basics for a non-specialist", () => {
  it("explains twelve industry words and says why each one turns up here", () => {
    expect(aiWords).toHaveLength(12);
    const words = aiWords.map((entry) => entry.word);
    for (const expected of ["Model", "Training", "Large language model", "Hallucination", "Black box", "Benchmark"]) {
      expect(words).toContain(expected);
    }
    for (const entry of aiWords) {
      expect(entry.plain.length, entry.word).toBeGreaterThan(50);
      expect(entry.whyHere.length, entry.word).toBeGreaterThan(30);
      // A gloss that reuses the word it is defining has explained nothing.
      expect(entry.plain.toLowerCase(), entry.word).not.toContain(entry.word.toLowerCase());
    }
  });

  it("answers the four things a reader arriving from a chatbot assumes", () => {
    expect(notWhatYouThink).toHaveLength(4);
    const prose = notWhatYouThink.map((entry) => `${entry.assumption} ${entry.reality}`).join(" ");
    expect(prose).toMatch(/does not write text, hold a conversation, or answer questions/i);
    expect(prose).toMatch(/no customer, no pilot, and no deployment/i);
    // Three of the four answers open with a flat "No."; the exception is the
    // one where the honest answer is that nothing has been measured.
    expect(notWhatYouThink.filter((entry) => entry.reality.startsWith("No."))).toHaveLength(3);
  });

  it("contrasts how systems are built without claiming how well they work", () => {
    expect(twoWaysToDecide).toHaveLength(3);
    const usual = twoWaysToDecide.map((step) => step.usual).join(" ");
    expect(usual).not.toMatch(/\b(worse|inferior|unreliable|inaccurate|dangerous|broken)\b/i);
    expect(usual).not.toMatch(/\b(?:is|are)\s+(?:slower|weaker|less)\b/i);
    for (const step of twoWaysToDecide) {
      expect(step.usual.length, step.number).toBeGreaterThan(60);
      expect(step.here.length, step.number).toBeGreaterThan(60);
    }
  });

  it("uses no jargon it has not itself explained", () => {
    const explained = new Set(aiWords.map((entry) => entry.word.toLowerCase()));
    // Terms the rest of the site leans on that must never appear unexplained here.
    const forbidden = ["embedding", "transformer", "gradient", "fine-tune", "rag", "token", "parameter count"];
    const prose = aiBasicsTranslationKeys.join(" ").toLowerCase();
    for (const term of forbidden) {
      expect(explained.has(term) || !prose.includes(term), `Unexplained jargon: ${term}`).toBe(true);
    }
    expect(new Set(aiBasicsTranslationKeys).size).toBe(aiBasicsTranslationKeys.length);
  });
});
