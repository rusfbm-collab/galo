import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

/**
 * The theory chapter has two registers on purpose. The formal sections are
 * written the way a reviewer expects to read them, and that is left alone. The
 * opening path — the sections a newcomer meets before any algebra — is supposed
 * to be readable without the glossary, and it kept drifting back into the
 * formal vocabulary. These tests hold that line.
 */

const page = readFileSync("src/pages/TheoryPage.tsx", "utf8");

/** Words the plain path may not use in a heading or lead without explaining them. */
const UNEXPLAINED = [
  "carrier",
  "reduct",
  "endomorphism",
  "automorphism",
  "torsor",
  "holomorph",
  "arity",
  "quotient",
  "coset",
  "involution",
  "idempotent",
  "cardinality",
  "totient",
  "magma",
  "monoid",
  "semigroup",
  "nondegenerate",
  "opaque vector",
  "transition alphabet",
  "semantic role placement",
  "terminal witness",
];

/** The section ids that make up the plain path, in page order. */
const PLAIN_PATH = [
  "orientation",
  "cayley-first",
  "one-sentence",
  "states",
  "plus-star",
  "p0",
  "typed-actions",
  "guided-lab",
  "count-560",
];

function headingsOf(sectionId: string): string {
  const start = page.indexOf(`<section id="${sectionId}"`);
  expect(start, `section #${sectionId} is missing`).toBeGreaterThan(-1);
  const heading = page.indexOf("<SectionHeading", start);
  const end = page.indexOf("/>", heading);
  return page.slice(heading, end);
}

describe("the plain path through the theory chapter", () => {
  it("opens every plain section without a word it does not explain", () => {
    for (const id of PLAIN_PATH) {
      const head = headingsOf(id);
      for (const word of UNEXPLAINED) {
        expect(head.toLowerCase(), `#${id} heading uses "${word}"`).not.toContain(word);
      }
    }
  });

  it("states the whole idea in a sentence a non-mathematician can read", () => {
    const head = headingsOf("one-sentence");
    expect(head).toContain("GALO writes out every move available at one spot");
    // and the boundary under it still says all four things it is not
    expect(head).toContain("not a language model");
    expect(head).toContain("not a trained memory");
    expect(head).toContain("not proof of intelligence");
    expect(head).toContain("not a certificate that anything is true");
  });

  it("keeps the P0 lead about sides rather than about one-sided identities", () => {
    const head = headingsOf("p0");
    expect(head).toContain("swallows the answer");
    expect(head).toContain("leaves the other input untouched");
    expect(head).not.toContain("left zero");
    expect(head).not.toContain("right-neutral");
  });

  it("still says a PASS is worthless without its scope", () => {
    const head = headingsOf("evidence-language");
    expect(head).toContain("A PASS on its own says nothing");
    expect(head).toContain("the exact scope it was checked in");
  });

  it("leaves the formal chapters in their own register", () => {
    // the academic layer is allowed — and expected — to use the exact words
    const academic = readFileSync("src/content/academicAnalysis.ts", "utf8");
    expect(academic).toMatch(/automorphism|endomorphism|associativity/);
  });
});
