import { describe, expect, it } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { afterEach, beforeEach } from "vitest";
import { App } from "../src/app/App";
import { authorityLine, structuralRightLine } from "../src/content/weightFree";
import {
  boundaryCauses,
  causalLaws,
  causalSteps,
  denominators,
  routeArithmeticLine,
  verdictLawTranslationKeys,
  verdictStages,
} from "../src/content/verdictLaw";

function setPath(path: string) {
  window.history.replaceState({}, "", path);
}

describe("the law of a published answer", () => {
  beforeEach(() => setPath("/theory"));
  afterEach(cleanup);

  it("states an answer as a conjunction, with one way in and three ways out", () => {
    expect(verdictStages).toHaveLength(4);
    // One proposal, then exactly the three conditions that can fail.
    expect(boundaryCauses).toHaveLength(3);
    expect(verdictStages[0]!.name).toBe("A ranked proposal");

    render(<App />);
    const section = document.querySelector("#verdict-law");
    expect(section).toBeInTheDocument();

    const figure = section?.querySelector(".verdict");
    expect(figure?.tagName).toBe("FIGURE");
    expect(figure?.querySelectorAll(".verdict__stages li")).toHaveLength(verdictStages.length);
    expect(figure?.querySelectorAll(".verdict__outcome")).toHaveLength(2);
    expect(figure?.querySelectorAll(".verdict__outcome.is-boundary li")).toHaveLength(boundaryCauses.length);

    // Every stage says what it prevents, which is the part a sceptic reads.
    for (const stage of verdictStages) {
      expect(figure?.textContent).toContain(stage.prevents);
    }
  });

  it("keeps the route length and the catalogue size as different numbers", () => {
    render(<App />);
    const section = document.querySelector("#verdict-law");
    expect(section?.textContent).toContain(routeArithmeticLine);
    expect(routeArithmeticLine).toContain("3 channels × 7 levels × 4 families = 84");
    // And says so, rather than leaving the reader to notice.
    expect(section?.textContent).toContain("not distinct catalogue cells");
  });
});

describe("reading a benchmark result", () => {
  beforeEach(() => setPath("/theory"));
  afterEach(cleanup);

  it("draws the protocol order and marks where the test split is finally read", () => {
    expect(causalSteps).toHaveLength(7);
    // The candidate universe is closed at step two, before any evaluation split.
    expect(causalSteps[1]!.step).toBe("Close the set of possible answers");
    expect(causalSteps[1]!.reads).toBe("Training data only");
    // Only the last two steps touch it.
    const testSteps = causalSteps.filter((step) => step.reads.toLowerCase().includes("test data"));
    expect(testSteps.map((step) => step.number)).toEqual(["06", "07"]);

    render(<App />);
    const figure = document.querySelector("#reading-a-result .causal");
    expect(figure?.tagName).toBe("FIGURE");
    expect(figure?.querySelectorAll(".causal__row")).toHaveLength(causalSteps.length);
    expect(figure?.querySelectorAll(".causal__row.is-test")).toHaveLength(2);
    expect(figure?.querySelectorAll(".causal__laws li")).toHaveLength(causalLaws.length);
  });

  it("publishes all four denominators so a refusal cannot flatter the score", () => {
    expect(denominators.map((entry) => entry.metric)).toEqual([
      "Proposal accuracy",
      "Coverage",
      "Selective accuracy",
      "Overall accuracy",
    ]);
    // Two are over the same set and mean opposite things; that is the point.
    expect(denominators[1]!.over).toBe("All evaluated rows");
    expect(denominators[3]!.over).toBe("All evaluated rows");

    render(<App />);
    const figure = document.querySelector("#reading-a-result .denominators");
    expect(figure?.querySelectorAll("article")).toHaveLength(denominators.length);
    for (const entry of denominators) {
      expect(figure?.textContent).toContain(entry.misreadAs);
    }
  });

  it("names no release, no artefact version and no dataset in the architecture copy", () => {
    const copy = verdictLawTranslationKeys.join(" ");
    for (const forbidden of [
      /\bV1\d\d\b/,
      /consolidate/i,
      /SIGMORPHON/i,
      /Kinship/i,
      /Nations/i,
      /PyKEEN/i,
      /\.json\b/,
      /\.zip\b/,
    ]) {
      expect(copy).not.toMatch(forbidden);
    }
    // And carries no digest, which is what a version number turns into next.
    expect(copy).not.toMatch(/\b[0-9a-f]{16,}\b/);
  });

  it("gives both new figures a name, a text equivalent and a caption", () => {
    render(<App />);
    for (const selector of [".verdict", ".causal", ".denominators"]) {
      const figure = document.querySelector(selector);
      expect(figure, selector).toBeInTheDocument();
      expect(figure?.querySelector("figcaption"), selector).toBeInTheDocument();
      const describedBy = figure?.getAttribute("aria-describedby");
      const labelledBy = figure?.getAttribute("aria-labelledby");
      expect(document.getElementById(labelledBy as string), selector).toBeInTheDocument();
      const equivalent = document.getElementById(describedBy as string);
      expect(equivalent?.className, selector).toContain("sr-only");
      expect((equivalent?.textContent ?? "").length, selector).toBeGreaterThan(60);
    }
  });
});

describe("the site carries the theory consistently", () => {
  beforeEach(() => setPath("/"));
  afterEach(cleanup);

  it("names no accelerator, programme or assessor anywhere it renders", () => {
    for (const route of ["/", "/engine", "/industry", "/investors", "/evidence", "/thinking", "/theory"]) {
      setPath(route);
      render(<App />);
      const page = document.body.textContent ?? "";
      expect(page, route).not.toMatch(/hub\s*71/i);
      cleanup();
    }
  });

  it("keeps the old engine URL reachable instead of 404ing it", () => {
    setPath("/hub71");
    render(<App />);
    expect(screen.getByRole("heading", { level: 1, name: /How GALO works/i })).toBeInTheDocument();
    cleanup();

    setPath("/ru/hub71");
    render(<App />);
    expect(document.querySelector("h1")?.textContent ?? "").not.toBe("");
    expect(document.querySelector(".page-hero--programme")).toBeInTheDocument();
  });

  it("says on every page that learning is required as well as unauthorised", () => {
    render(<App />);
    const learned = document.querySelector("#learned-state")?.textContent ?? "";
    expect(learned).toContain(authorityLine);
    expect(learned).toContain(structuralRightLine);

    cleanup();
    setPath("/engine");
    render(<App />);
    const roles = document.querySelector(".engine-roles")?.textContent ?? document.body.textContent ?? "";
    expect(roles).toContain("without it there is no answer to check");
    expect(roles).toContain("Answer from the frozen laws alone when nothing was learned");
  });

  it("puts the three verdict conditions on the thinking page as a second family", () => {
    setPath("/thinking");
    render(<App />);
    const block = document.querySelector(".thinking-verdict");
    expect(block).toBeInTheDocument();
    expect(block?.querySelectorAll(".thinking-verdict__causes li")).toHaveLength(boundaryCauses.length);
    expect(block?.querySelector("a")).toHaveAttribute("href", "/theory#verdict-law");
    // The route gates stay a separate family of five.
    expect(document.querySelectorAll(".thinking-gates article")).toHaveLength(5);
  });

  it("draws three crossings on the authority line, not one", () => {
    setPath("/engine");
    render(<App />);
    const figure = document.querySelector(".galo-figure--authority-line");
    expect(figure).toBeInTheDocument();
    // A candidate, the right it earned, and the structure that backs it.
    expect(figure?.querySelectorAll(".galo-lanes__chip")).toHaveLength(3);
    expect(figure?.querySelectorAll(".galo-lanes__cross")).toHaveLength(3);
    // One way to admit, one way to refuse, and the refusal is not drawn as an error.
    expect(figure?.querySelectorAll(".galo-lanes__verdict.is-admit")).toHaveLength(1);
    expect(figure?.querySelectorAll(".galo-lanes__verdict.is-refuse")).toHaveLength(0);
    expect(figure?.textContent).toContain("may say yes only if all three arrived");
  });

  it("fans the engine cycle's fifth step into the three conditions", () => {
    setPath("/engine");
    render(<App />);
    const figure = document.querySelector(".galo-figure--cycle");
    expect(figure?.querySelectorAll(".galo-cycle__condition")).toHaveLength(3);
    expect(figure?.querySelectorAll(".galo-cycle__fan")).toHaveLength(3);
    expect(figure?.textContent).toContain("all three, or a boundary");
  });

  it("leads the route map with plain phase names and keeps the codes beside them", () => {
    setPath("/thinking");
    render(<App />);
    const map = document.querySelector(".route-map");
    expect(map?.tagName).toBe("FIGURE");
    expect(map?.querySelectorAll(".route-map__phases li")).toHaveLength(7);
    expect(Array.from(map?.querySelectorAll(".route-map__phases strong") ?? []).map((n) => n.textContent)).toEqual([
      "Open possibilities",
      "Keep alternatives",
      "Test what separates them",
      "Assemble one lawful answer",
      "Take the outcome from outside",
      "Record what is reusable",
      "Seal the episode",
    ]);
    expect(
      Array.from(map?.querySelectorAll(".route-map__phases .route-map__code") ?? []).map((n) => n.textContent),
    ).toEqual(["SEARCH", "HYPOTHESES", "PROBING", "COMPOSITION", "REVEAL", "LEARNING", "COMPLETE"]);
    expect(map?.querySelectorAll(".route-map__exits article")).toHaveLength(2);
  });

  it("warns about the denominator before the evidence numbers, not after", () => {
    setPath("/evidence");
    render(<App />);
    const section = document.querySelector("#learning");
    const warning = section?.querySelector(".learning-denominators");
    const results = section?.querySelector(".learning-results");
    expect(warning).toBeInTheDocument();
    expect(results).toBeInTheDocument();
    expect(warning!.compareDocumentPosition(results!) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(warning?.querySelector("a")).toHaveAttribute("href", "/theory#reading-a-result");
  });
});
