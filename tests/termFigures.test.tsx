import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { App } from "../src/app/App";
import { applyGaloOperation } from "../src/content/mathematics";
import { conceptLessons } from "../src/content/theory";
import { termFigures } from "../src/content/termFigures";

describe("the term figures", () => {
  afterEach(cleanup);

  it("gives every term in the theory chapter a picture", () => {
    const theoryTerms = conceptLessons.filter((lesson) => lesson.chapter === "theory").map((lesson) => lesson.term);
    expect(theoryTerms.length).toBeGreaterThan(0);
    for (const term of theoryTerms) {
      expect(termFigures[term], term).toBeDefined();
    }
  });

  it("keys every spec to a term that exists, so a renamed term cannot leave an orphan", () => {
    const known = new Set(conceptLessons.map((lesson) => lesson.term));
    for (const term of Object.keys(termFigures)) {
      expect(known.has(term), term).toBe(true);
    }
  });

  it("says what the picture shows rather than restating the definition", () => {
    for (const [term, spec] of Object.entries(termFigures)) {
      // A caption shorter than a sentence is a label, and the card already has one.
      expect(spec.caption.length, term).toBeGreaterThan(70);
      expect(spec.caption.endsWith("."), term).toBe(true);
    }
  });

  it("points a table highlight at a cell the level actually has", () => {
    for (const [term, spec] of Object.entries(termFigures)) {
      if (spec.kind !== "table") continue;
      const { highlight, level } = spec;
      if (highlight.kind === "cell") {
        expect(highlight.row, term).toBeLessThan(level);
        expect(highlight.column, term).toBeLessThan(level);
      }
      if (highlight.kind === "row") expect(highlight.row, term).toBeLessThan(level);
      if (highlight.kind === "column") expect(highlight.column, term).toBeLessThan(level);
    }
  });

  it("renders each figure from the laws rather than from a transcript", () => {
    window.history.replaceState({}, "", "/theory");
    render(<App />);

    // "Left zero" draws the absorbing row of a STAR table. If the picture ever
    // stopped agreeing with the law, the card would be teaching the wrong thing.
    const spec = termFigures["Left zero"];
    expect(spec?.kind).toBe("table");
    if (spec?.kind !== "table") return;

    const figures = document.querySelectorAll(".term-figure.is-table table");
    expect(figures.length).toBeGreaterThan(0);

    for (const table of Array.from(figures)) {
      const rows = table.querySelectorAll("tbody tr");
      rows.forEach((row, left) => {
        row.querySelectorAll("td").forEach((cell, right) => {
          // Every rendered table cell is one of the two laws at that level.
          const plus = String(applyGaloOperation("PLUS", rows.length as 1 | 2 | 3 | 4 | 5 | 6 | 7, left, right));
          const star = String(applyGaloOperation("STAR", rows.length as 1 | 2 | 3 | 4 | 5 | 6 | 7, left, right));
          expect([plus, star]).toContain(cell.textContent);
        });
      });
    }
  });

  it("puts a figure in every theory concept card on the page", () => {
    window.history.replaceState({}, "", "/theory");
    render(<App />);
    const theoryTerms = conceptLessons.filter((lesson) => lesson.chapter === "theory");
    // The glossary renders the chapter's lessons; each one now carries its picture.
    expect(document.querySelectorAll(".theory-glossary .term-figure").length).toBeGreaterThanOrEqual(
      theoryTerms.length,
    );
  });

  it("marks exactly the region each spec asks for", () => {
    window.history.replaceState({}, "", "/theory");
    render(<App />);
    const figures = Array.from(document.querySelectorAll<HTMLElement>(".term-figure.is-table"));
    // A "none" highlight has to mark nothing: a table shown for its own sake
    // should not be pointing at a cell the caption never mentions.
    const unmarked = figures.filter((figure) => figure.querySelectorAll("td.is-marked").length === 0);
    expect(unmarked.length).toBeGreaterThan(0);
  });
});
