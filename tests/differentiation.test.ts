import { describe, expect, it } from "vitest";
import {
  differentiationBoundary,
  heroDifferentiators,
  whatThisIs,
  whatThisIsNot,
} from "../src/content/differentiation";
import { comparisonClasses, comparisonClassesBoundary } from "../src/content/comparisonClasses";
import { landscapeRows } from "../src/content/landscape";

describe("the differentiation block", () => {
  it("opens on the category, not on a hedge about authority", () => {
    expect(heroDifferentiators).toHaveLength(4);
    const joined = heroDifferentiators.join(" ");
    // "not a neural net as authority" conceded that a neural net was in there
    // and merely outranked. The first line now says the stronger thing.
    expect(joined).not.toMatch(/as authority/);
    expect(heroDifferentiators[0]).toMatch(/No learned weights\. No backpropagation\./);
    expect(joined).toMatch(/Atlas of relations/);
    expect(joined).toMatch(/local revision/i);
    expect(joined).toMatch(/deterministic replay/);
  });

  it("answers each assumption once, with no comparative claim", () => {
    expect(whatThisIsNot).toHaveLength(4);
    for (const row of whatThisIsNot) {
      expect(row.taken).toMatch(/^Taken for /);
      expect(row.answer.length).toBeGreaterThan(40);
      // difference, never superiority
      expect(row.answer).not.toMatch(/\b(better|faster|superior|outperform|beats)\b/i);
    }
    const taken = whatThisIsNot.map((r) => r.taken).join(" ");
    expect(taken).toMatch(/language model/);
    expect(taken).toMatch(/knowledge graph/);
    expect(taken).toMatch(/Cyc/);
    expect(taken).toMatch(/governance wrapper/);
    // and the block closes by saying what it is instead
    expect(whatThisIs).toMatch(/does not own the verdict/);
  });

  it("keeps the limiter that stops the section reading as a boast", () => {
    expect(differentiationBoundary).toMatch(/not says?|None of this says/);
    expect(differentiationBoundary).toMatch(/has not been measured/);
    expect(differentiationBoundary).toMatch(/specified, not shipped/);
  });

  it("gives Cyc a row of its own rather than a parenthesis", () => {
    const cyc = landscapeRows.find((row) => row.family === "Global common-sense knowledge bases");
    expect(cyc).toBeDefined();
    expect(cyc?.examples).toMatch(/Cyc/);
    expect(cyc?.relation).toMatch(/not a second attempt/i);
    // and it is no longer buried in the knowledge-graph row
    const graphs = landscapeRows.find((row) => row.family === "Knowledge graphs and ontologies");
    expect(graphs?.examples).not.toMatch(/Cyc/);
  });
});

describe("the class comparison", () => {
  it("compares nine classes plus this one, by class rather than by brand", () => {
    expect(comparisonClasses).toHaveLength(10);
    expect(comparisonClasses.filter((row) => row.isGalo)).toHaveLength(1);
    const approaches = comparisonClasses.map((row) => row.approach);
    for (const expected of [
      "Foundation and language models",
      "Retrieval and agent stacks",
      "Knowledge graphs",
      "Symbolic knowledge bases",
      "Neuro-symbolic hybrids",
      "Predictive world models",
      "Causal stacks",
      "Formal methods and provers",
      "Governance and policy layers",
    ]) {
      expect(approaches).toContain(expected);
    }
    // the class is the subject; products are landmarks in their own column
    for (const row of comparisonClasses) {
      expect(row.approach).not.toMatch(/GPT|Neo4j|LangGraph|Cyc|Lean/);
    }
  });

  it("fills every column and never ranks one class above another", () => {
    for (const row of comparisonClasses) {
      // the GALO row's landmark is legitimately just "This project"
      expect(row.landmarks.length).toBeGreaterThan(10);
      // cells are phrases now, not paragraphs — the floor only catches empties
      for (const cell of [row.strength, row.authority, row.change, row.contrast]) {
        expect(cell.length).toBeGreaterThan(20);
      }
      // and the ceiling is what keeps the five columns readable at 1024px
      for (const cell of [row.strength, row.authority, row.change]) {
        expect(cell.length).toBeLessThan(105);
      }
      expect(`${row.strength} ${row.contrast}`).not.toMatch(/\b(outperform|beats|superior to|better than)\b/i);
    }
  });

  it("says the GALO row is the one nobody outside the team has run", () => {
    const galo = comparisonClasses.find((row) => row.isGalo);
    expect(galo?.contrast).toMatch(/nobody outside the team has run/);
    expect(galo?.contrast).toMatch(/not proven/);
    expect(galo?.contrast).toMatch(/not authorised/);
  });

  it("does not let the world-model row be read as a latent video predictor", () => {
    const world = comparisonClasses.find((row) => row.approach === "Predictive world models");
    expect(world?.contrast).toMatch(/declared decision state/);
    expect(world?.contrast).toMatch(/not a latent predictor of the next frame/);
  });

  it("keeps the positioning boundary and the four-line home strip", () => {
    expect(comparisonClassesBoundary).toMatch(/not a claim of universal superiority/);
    expect(comparisonClassesBoundary).toMatch(/has been measured against any of these classes/);
  });
});
