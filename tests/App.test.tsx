import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { App } from "../src/app/App";
import { termSlugs } from "../src/content/termPages";
import { routePhases } from "../src/content/thinking";
import { investorBriefing } from "../src/content/plainLanguage";
import {
  artefactScopes,
  changeBoundary,
  changeCases,
  explainerParagraphs,
  heroBoundary,
  heroEyebrow,
  heroHeadline,
  heroLead,
  heroMarkers,
  heroResult,
  learnedGroups,
  learnedGroupsNote,
} from "../src/content/homeNarrative";

import {
  getMissingTranslations,
  localizedPath,
  parseLocalizedPath,
  resetMissingTranslations,
  switchLocalePath,
} from "../src/i18n/I18nContext";

function setPath(path: string) {
  window.history.replaceState({}, "", path);
}

describe("GALO public site", () => {
  beforeEach(() => setPath("/"));
  afterEach(cleanup);

  // HOME-H1-01 — the headline is the one sentence the page is allowed to open with.
  it("leads with the category, then the wedge, and keeps the boundary in the hero", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1, name: heroHeadline })).toBeInTheDocument();
    expect(heroHeadline).toBe("AI built for provable decisions.");

    const hero = document.querySelector(".hero");
    expect(hero).toBeInTheDocument();

    // Eyebrow, lead, result line, markers and boundary — the whole first screen.
    expect(hero?.textContent).toContain(heroEyebrow);
    expect(hero?.textContent).toContain(heroResult);
    expect(hero?.querySelectorAll(".hero__markers li")).toHaveLength(heroMarkers.length);
    expect(hero?.textContent).toContain(heroBoundary);

    // Three paragraphs — the problem, the answer, the wedge — and a ceiling so
    // the first screen cannot quietly grow into an essay.
    expect(heroLead).toHaveLength(3);
    const leadWords = heroLead.join(" ").trim().split(/\s+/).length;
    expect(leadWords).toBeLessThanOrEqual(130);

    expect(screen.getByRole("link", { name: /Request a bounded industrial evaluation/i })).toHaveAttribute(
      "href",
      "/industry",
    );
    expect(screen.getByRole("link", { name: "See how GALO works" })).toHaveAttribute("href", "#what-galo-is");
  });

  // HOME-EXPLAINER-10 — the whole claim in prose, once, before any diagram
  // takes it apart, and not repeated from the hero it follows.
  it("states what GALO is in prose directly under the hero", () => {
    render(<App />);
    const explainer = document.querySelector("#what-galo-is");
    expect(explainer).toBeInTheDocument();

    const panel = explainer?.querySelector(".home-explainer__panel");
    expect(panel?.querySelectorAll("p:not(.eyebrow)")).toHaveLength(explainerParagraphs.length);
    expect(explainerParagraphs).toHaveLength(2);
    for (const paragraph of explainerParagraphs) {
      expect(panel?.textContent).toContain(paragraph);
    }

    // The mechanism, the local revision, and the wedge — all three are in it.
    const text = panel?.textContent ?? "";
    expect(text).toContain("no trainable weights and uses no backpropagation");
    expect(text).toContain("versioned Atlas");
    expect(text).toContain("without retraining the whole system");

    // It sits between the hero and the first figure section.
    const order = Array.from(document.querySelectorAll("section[id]")).map((element) => element.id);
    expect(order.indexOf("what-galo-is")).toBe(0);
    expect(order.indexOf("what-galo-is")).toBeLessThan(order.indexOf("learned-state"));

    // And the hero above it no longer says the same thing in the same words.
    const hero = document.querySelector(".hero")?.textContent ?? "";
    for (const paragraph of explainerParagraphs) {
      expect(hero).not.toContain(paragraph);
    }
  });

  // HOME-STALE-CLAIM-02 — copy the restructure retired must not survive anywhere on the page.
  it("carries no sentence the restructure retired", () => {
    render(<App />);
    const page = document.querySelector("main")?.textContent ?? "";
    for (const stale of [
      "A different kind of AI, for decisions that have to stay provable.",
      "AI built to keep decisions provable.",
      "Provable AI for critical decisions.",
      "Not a neural net as authority.",
      "a weight carries no name",
      "probabilistic answer",
    ]) {
      expect(page).not.toContain(stale);
    }
    // The old headline-decomposition block went with the old headline.
    expect(document.querySelectorAll(".headline-claim")).toHaveLength(0);
    // And the seven-phase route is no longer the first thing a visitor meets.
    expect(document.querySelector(".hero .hero-route")).toBeNull();
    expect(document.querySelector("#under-the-hood .hero-route")).toBeInTheDocument();
  });

  // HOME-WEIGHT-FREE-03 — the identity is stated before any number that argues for it.
  it("puts the weight-free identity above every number that argues for it", () => {
    render(<App />);

    // Two lanes of three stages, with exactly one pivot stage marked in each.
    const figure = document.querySelector(".hero .wf-hero");
    expect(figure?.querySelectorAll(".wf-hero__stage")).toHaveLength(6);
    expect(figure?.querySelectorAll(".wf-hero__stage.is-pivot")).toHaveLength(2);

    // The alternative to weights is listed as four stable groups, plus the invariant.
    const learned = document.querySelector("#learned-state");
    expect(learned?.querySelectorAll(".learned-groups article")).toHaveLength(learnedGroups.length);
    expect(learnedGroups).toHaveLength(4);
    expect(learned?.textContent).toContain(learnedGroupsNote);

    // Both concessions travel with the claim, in the section that makes it.
    const cycle = document.querySelector("#learning-cycle");
    expect(cycle?.textContent).toContain("run by the project on its own code");
    expect(cycle?.textContent).toContain("It is not part of GALO");

    // And the identity sections stand ahead of the ones that carry the evidence.
    const order = Array.from(document.querySelectorAll("section[id]")).map((element) => element.id);
    for (const identity of ["learned-state", "when-change", "provable", "learning-cycle", "scope"]) {
      expect(order.indexOf(identity)).toBeGreaterThan(-1);
      expect(order.indexOf(identity)).toBeLessThan(order.indexOf("evidence"));
      expect(order.indexOf(identity)).toBeLessThan(order.indexOf("two-towers"));
    }
    expect(order.indexOf("learned-state")).toBeLessThan(order.indexOf("receipt"));
  });

  // HOME-SCOPE-04 — three artefacts, kept apart, each answering the same four questions.
  it("separates the three artefacts instead of saying “the system”", () => {
    render(<App />);
    const scope = document.querySelector("#scope");
    expect(scope?.querySelectorAll(".scopes__card")).toHaveLength(3);
    expect(artefactScopes.map((entry) => entry.tag)).toEqual([
      "PUBLIC BOUNDED VERIFIER",
      "SEALED RESEARCH LINE",
      "TARGET INDUSTRIAL PRODUCT",
    ]);
    for (const card of Array.from(scope?.querySelectorAll(".scopes__card") ?? [])) {
      expect(card.querySelectorAll("dl > div")).toHaveLength(4);
      expect(Array.from(card.querySelectorAll("dt")).map((term) => term.textContent)).toEqual([
        "What exists",
        "What was measured",
        "What does not follow",
        "The next gate",
      ]);
    }

    // Every number that argues for GALO belongs to the evidence section, not the identity ones.
    for (const id of ["learned-state", "when-change", "provable", "learning-cycle", "scope"]) {
      const text = document.querySelector(`#${id}`)?.textContent ?? "";
      for (const figure of ["1,204", "4,802", "880", "440"]) {
        expect(text).not.toContain(figure);
      }
    }
    expect(document.querySelector("#evidence")?.textContent).toContain("1,204");
  });

  // HOME-DIAGRAM-A11Y-05 — every new figure is reachable without sight or a mouse.
  it("gives every home figure a name, a text equivalent and keyboard reach", () => {
    render(<App />);
    for (const selector of [".wf-hero", ".change-impact", ".provable", ".cycle", ".scopes"]) {
      const figure = document.querySelector(selector);
      expect(figure, selector).toBeInTheDocument();
      expect(figure?.tagName).toBe("FIGURE");
      expect(figure?.querySelector("figcaption"), selector).toBeInTheDocument();

      const labelledBy = figure?.getAttribute("aria-labelledby");
      const describedBy = figure?.getAttribute("aria-describedby");
      expect(labelledBy, selector).toBeTruthy();
      expect(describedBy, selector).toBeTruthy();
      expect(document.getElementById(labelledBy as string), selector).toBeInTheDocument();

      const equivalent = document.getElementById(describedBy as string);
      expect(equivalent, selector).toBeInTheDocument();
      expect(equivalent?.className).toContain("sr-only");
      expect((equivalent?.textContent ?? "").length, selector).toBeGreaterThan(40);
    }

    // The one interactive figure is a real tablist, not hover-only decoration.
    const tabs = Array.from(document.querySelectorAll<HTMLButtonElement>(".change-impact [role='tab']"));
    expect(tabs).toHaveLength(changeCases.length);
    expect(tabs.filter((tab) => tab.getAttribute("aria-selected") === "true")).toHaveLength(1);
    for (const tab of tabs) {
      expect(tab.tagName).toBe("BUTTON");
      expect(tab.getAttribute("aria-controls")).toBeTruthy();
    }
  });

  it("moves the selected change with the arrow keys", () => {
    render(<App />);
    const tabs = Array.from(document.querySelectorAll<HTMLButtonElement>(".change-impact [role='tab']"));
    const [first, second] = tabs;
    expect(first).toBeDefined();
    expect(second).toBeDefined();
    expect(first!.getAttribute("aria-selected")).toBe("true");

    fireEvent.keyDown(first!, { key: "ArrowRight" });
    expect(second!.getAttribute("aria-selected")).toBe("true");

    fireEvent.keyDown(second!, { key: "ArrowLeft" });
    expect(first!.getAttribute("aria-selected")).toBe("true");
  });

  // HOME-CLAIM-09 — the outcomes a change can have are named, and none of them is a score.
  it("keeps the three change outcomes named rather than scored", () => {
    render(<App />);
    expect(changeCases.map((entry) => entry.outcome)).toEqual(["STANDS", "REVISE", "NEEDS EVIDENCE"]);
    const impact = document.querySelector(".change-impact");
    expect(impact?.querySelector(".change-impact__outcome")?.className).toMatch(/is-(stands|revise|needs-evidence)/);
    // The illustrative disclaimer travels with the target workflow it draws.
    expect(document.querySelector("#when-change")?.textContent).toContain(changeBoundary);
  });

  it("draws one episode of reasoning under the hood, with both lawful exits on it", () => {
    render(<App />);
    const route = document.querySelector("#under-the-hood .hero-route");
    expect(route).toBeInTheDocument();

    // One chip per phase, in the order the thinking page renders them, and the
    // plain name leads while the technical code follows it on the same row.
    const phases = route?.querySelectorAll(".hero-route__phase") ?? [];
    expect(phases).toHaveLength(routePhases.length);
    expect(Array.from(phases).map((phase) => phase.querySelector(".hero-route__name")?.textContent)).toEqual([
      "Open possibilities",
      "Keep alternatives",
      "Test what separates them",
      "Assemble one lawful answer",
      "Take the outcome from outside",
      "Record what is reusable",
      "Seal the episode",
    ]);
    expect(Array.from(phases).map((phase) => phase.querySelector(".hero-route__gloss")?.textContent)).toEqual([
      "SEARCH",
      "HYPOTHESES",
      "PROBING",
      "COMPOSITION",
      "REVEAL",
      "LEARNING",
      "COMPLETE",
    ]);

    // Both exits, each naming the outcome above its terminal code.
    const exits = route?.querySelectorAll(".hero-route__exit") ?? [];
    expect(Array.from(exits).map((exit) => exit.querySelector(".hero-route__exit-plain")?.textContent)).toEqual([
      "NEEDS MORE EVIDENCE",
      "INVALID RUN",
    ]);
    expect(Array.from(exits).map((exit) => exit.querySelector(".hero-route__exit-code")?.textContent)).toEqual([
      "BOUNDARY",
      "REJECT",
    ]);
    expect(route?.querySelectorAll(".hero-route__exit.is-reject")).toHaveLength(1);
    // One stub per phase, plus the rail itself and one drop into each exit.
    expect(route?.querySelectorAll(".hero-route__rail")).toHaveLength(routePhases.length + 3);
  });

  it("shows exact evidence numbers with scope captions", () => {
    render(<App />);
    expect(screen.getByText("560")).toBeInTheDocument();
    expect(screen.getByText("1,204")).toBeInTheDocument();
    expect(screen.getByText("1,366 / 1,366")).toBeInTheDocument();
    expect(screen.getByText(/not semantic concepts/i)).toBeInTheDocument();
    expect(screen.getByText(/measure of intelligence/i)).toBeInTheDocument();
  });

  it("keeps current and target architecture visibly separate", () => {
    render(<App />);
    expect(screen.getByText("CURRENT VERIFIED SLICE")).toBeInTheDocument();
    expect(screen.getByText(/TARGET ARCHITECTURE · IN DEVELOPMENT/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /neither observation-conditioned structural reasoning nor persistent learning is implemented there/i,
      ),
    ).toBeInTheDocument();
  });

  it("makes every architecture stage open, because a chevron that does nothing reads as broken", async () => {
    const user = userEvent.setup();
    render(<App />);

    const stages = Array.from(document.querySelectorAll<HTMLDetailsElement>(".architecture-lane__steps details"));
    expect(stages).toHaveLength(11);
    for (const stage of stages) {
      // Every row has a real explanation behind it rather than a bare label.
      expect(stage.querySelector("summary")).toBeInTheDocument();
      expect((stage.querySelector("p")?.textContent ?? "").length, stage.textContent ?? "").toBeGreaterThan(60);
      expect(stage.open).toBe(false);
    }

    await user.click(stages[0]!.querySelector("summary")!);
    expect(stages[0]!.open).toBe(true);
    expect(stages[0]!).toHaveTextContent("the complete list of actions the engine is allowed to take is fixed");

    // The six target stages each say plainly that they are not in the shipped
    // release. They may not say "not built": the sealed prototype runs several.
    const target = stages.slice(5);
    expect(target).toHaveLength(6);
    const targetProse = target.map((stage) => stage.querySelector("p")?.textContent ?? "").join(" ");
    expect(targetProse).toMatch(/does not run|not in the shipped release|No trained Atlas/i);
    expect(targetProse).not.toMatch(/\bNot built\b/);
  });

  it("replays the receipt deterministically", async () => {
    const user = userEvent.setup();
    render(<App />);
    expect(
      screen.getByRole("heading", { name: "Bundled sample verified against the pinned release key" }),
    ).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: /Show step 6/i }));
    expect(
      screen.getByRole("heading", { name: "Terminal release status preserved with disclosed boundaries" }),
    ).toBeInTheDocument();
    expect(screen.getAllByText("BOUNDARY").length).toBeGreaterThan(0);
    await user.click(screen.getByRole("button", { name: /Reset/i }));
    expect(
      screen.getByRole("heading", { name: "Bundled sample verified against the pinned release key" }),
    ).toBeInTheDocument();
  });

  it("discloses all critical boundaries", () => {
    render(<App />);
    expect(screen.getByText("Partner-controlled operational validity")).toBeInTheDocument();
    expect(screen.getByText("Arbitrary free-text semantic noninterference")).toBeInTheDocument();
    expect(screen.getAllByText("Persistent policy").length).toBeGreaterThan(0);
    expect(screen.getByText("General AI")).toBeInTheDocument();
  });

  it("publishes the confirmed evaluation email and the confirmed founder profile", () => {
    render(<App />);
    expect(screen.getByRole("link", { name: /LinkedIn/i })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/ruslan-a-5038765/",
    );
    expect(screen.getByRole("link", { name: "rusfbm@gmail.com" })).toHaveAttribute("href", "mailto:rusfbm@gmail.com");
    expect(
      screen
        .getByRole("link", { name: /Request a 25-minute evaluation/i })
        .getAttribute("href")
        ?.startsWith("mailto:rusfbm@gmail.com?subject="),
    ).toBe(true);
    expect(screen.queryByText(/Public evaluation contact is pending founder confirmation/i)).not.toBeInTheDocument();
  });

  it("puts every page in the footer, grouped, and marks the page you are on", () => {
    setPath("/audit");
    render(<App />);

    const footer = screen.getByRole("contentinfo");
    const map = within(footer).getByRole("navigation", { name: "Footer links" });
    expect(map.querySelectorAll("h2")).toHaveLength(3);
    for (const route of [
      "/",
      "/simple",
      "/vs-llm",
      "/investors",
      "/audit",
      "/hub71",
      "/industry",
      "/evidence",
      "/theory",
      "/thinking",
      "/math",
      "/symmetry",
    ]) {
      expect(map.querySelector(`a[href="${route}"]`), `Footer is missing ${route}`).toBeInTheDocument();
    }
    // Every entry carries a line saying what that page settles.
    expect(map.querySelectorAll("li > span")).toHaveLength(12);

    const header = screen.getByRole("navigation", { name: "Primary navigation" });
    expect(header.querySelector('a[aria-current="page"]')).toHaveAttribute("href", "/audit");
  });

  it("opens the mobile menu grouped, with the whole site in it", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: /Open navigation/i }));

    const menu = screen.getByRole("navigation", { name: "Mobile navigation" });
    expect(menu.querySelectorAll(".mobile-nav__group")).toHaveLength(3);
    expect(menu.querySelectorAll("a:not(.button)")).toHaveLength(12);
    expect(menu.querySelector('a[href="/hub71"]')).toBeInTheDocument();
  });

  it("answers a dead end with the whole site rather than two buttons", () => {
    setPath("/outside-scope");
    render(<App />);

    const map = screen.getByRole("navigation", { name: "All pages" });
    expect(map.querySelectorAll("h3")).toHaveLength(3);
    expect(map.querySelectorAll("a")).toHaveLength(12);
    expect(screen.getByText("Whatever you were looking for, it is one of these.")).toBeInTheDocument();
  });

  it("gives the long pages a chapter bar whose targets all exist", () => {
    for (const route of [
      "/simple",
      "/investors",
      "/audit",
      "/hub71",
      "/theory",
      "/thinking",
      "/vs-llm",
      "/math",
      "/symmetry",
    ]) {
      setPath(route);
      const view = render(<App />);
      const bar = document.querySelector(".math-contents");
      expect(bar, `No chapter bar on ${route}`).toBeInTheDocument();
      for (const link of Array.from(bar!.querySelectorAll<HTMLAnchorElement>("a"))) {
        const target = link.getAttribute("href")?.slice(1) ?? "";
        const section = document.getElementById(target);
        expect(section, `${route} chapter bar points at missing #${target}`).toBeInTheDocument();
        // The target has to clear the sticky header and the bar itself.
        expect(section?.classList.contains("math-anchor-section"), `${route} #${target} lacks the anchor offset`).toBe(
          true,
        );
      }
      view.unmount();
    }
  });

  it("provides semantic landmarks and mobile navigation control", () => {
    render(<App />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    const menu = screen.getByRole("button", { name: /Open navigation/i });
    fireEvent.click(menu);
    expect(menu).toHaveAttribute("aria-expanded", "true");
  });

  it("draws the six new mathematical figures on the pages that argue for them", () => {
    setPath("/math");
    const maths = render(<App />);
    expect(document.querySelector(".galo-figure--latin")).toBeInTheDocument();
    expect(document.querySelector(".galo-figure--assoc")).toBeInTheDocument();
    // The Latin-square panels: two five-by-five grids drawn from the tables.
    expect(document.querySelectorAll(".galo-figure--latin rect.galo-latin__cell")).toHaveLength(50);
    // STAR's reset row is the only one flagged, and it flags all five of its cells.
    expect(document.querySelectorAll(".galo-figure--latin rect.is-repeated")).toHaveLength(5);
    maths.unmount();

    setPath("/theory");
    const theory = render(<App />);
    expect(document.querySelector(".galo-figure--difference")).toBeInTheDocument();
    // Twenty-one disagreeing cells across the seven levels.
    expect(document.querySelectorAll(".galo-figure--difference rect.is-different")).toHaveLength(21);
    theory.unmount();

    setPath("/symmetry");
    render(<App />);
    expect(document.querySelector(".galo-figure--lattice")).toBeInTheDocument();
    expect(document.querySelector(".galo-figure--orders")).toBeInTheDocument();
    expect(document.querySelector(".galo-figure--burnside")).toBeInTheDocument();
    // Four rings at L6, thirteen position tiles across L6 and L7, seven bar pairs.
    expect(document.querySelectorAll(".galo-lattice__node")).toHaveLength(4);
    expect(document.querySelectorAll(".galo-orders__tile")).toHaveLength(13);
    expect(document.querySelectorAll(".galo-burnside__bar")).toHaveLength(14);
  });

  it("keeps every same-page navigation target resolvable", () => {
    render(<App />);
    const samePageLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href^="#"], a[href^="/#"]'));
    expect(samePageLinks.length).toBeGreaterThan(0);

    for (const link of samePageLinks) {
      const target = link.getAttribute("href")?.split("#")[1];
      expect(target, "Missing fragment in " + link.href).toBeTruthy();
      expect(document.getElementById(target ?? ""), "Missing target for #" + target).toBeInTheDocument();
    }
  });

  it("renders the evidence route", () => {
    setPath("/evidence");
    render(<App />);
    expect(
      screen.getByRole("heading", { level: 1, name: "What already works, and what is being built next." }),
    ).toBeInTheDocument();
    expect(screen.getByText("Work runs on four tracks, and each one is at a different stage.")).toBeInTheDocument();
    expect(screen.getByText("Target world-model loop")).toBeInTheDocument();
    expect(screen.getByText("READY_NOT_DUAL_MINOR_SEALED_WITH_DISCLOSED_BOUNDARIES")).toBeInTheDocument();
    expect(screen.getByText("1,366 / 1,366")).toBeInTheDocument();
    expect(screen.getByText("What the work count is, and what it is not.")).toBeInTheDocument();
    expect(screen.getByText("NOT COMPLETED")).toBeInTheDocument();
    expect(screen.getByText(/closed deterministic selector\. Nothing about it was learned/i)).toBeInTheDocument();
    expect(screen.getByRole("table", { name: "Public claim matrix" })).toBeInTheDocument();
    expect(screen.getByText("NOT PRESENT")).toBeInTheDocument();
    expect(screen.getAllByText("NOT CLAIMED").length).toBeGreaterThan(0);
  });

  it("opens with a plain-language briefing before any mathematics", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: "If you read one section on this site, read this one." }),
    ).toBeInTheDocument();
    expect(investorBriefing.map((item) => item.question)).toEqual([
      "What is GALO?",
      "What does it learn?",
      "Why does that matter?",
      "What is the first product?",
      "What works today?",
      "What is not claimed?",
    ]);
    for (const item of investorBriefing) {
      expect(screen.getByRole("heading", { name: item.question })).toBeInTheDocument();
    }
    // The briefing no longer denies the learning the rest of the page describes.
    const briefing = document.querySelector("#plain-language")?.textContent ?? "";
    expect(briefing).not.toMatch(/nothing is learned/i);
    // And it names which of the three artefacts each answer is about.
    expect(briefing).toContain("bounded public verifier");
    expect(briefing).toContain("sealed line");
    expect(briefing).toContain("It is intended, not deployed.");
    expect(screen.getByText(/a finite table of results for two inputs — a Cayley table/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /See the table everything is built on/i })).toHaveAttribute(
      "href",
      "/theory#cayley-first",
    );
  });

  it("renders the industrial wedge without letting it become a claim of authority", () => {
    setPath("/industry");
    render(<App />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Decision assurance around the digital twins a plant already runs.",
      }),
    ).toBeInTheDocument();

    // The two levels are stated next to each other, and the guard line under them
    // is the sentence that stops one being read as the other.
    expect(document.querySelectorAll(".wedge-grid article")).toHaveLength(3);
    const guard = document.querySelector(".wedge-guard")?.textContent ?? "";
    expect(guard).toContain("GENERAL-PURPOSE ARCHITECTURE = YES");
    expect(guard).toContain("GENERAL INTELLIGENCE = NOT PROVEN");

    // Nine tiers, with the partner owning the top and the bottom of the stack.
    const tiers = document.querySelectorAll(".integration-stack > li");
    expect(tiers).toHaveLength(9);
    expect(tiers[0]?.textContent).toContain("replaces none of them");
    expect(tiers[8]?.textContent).toContain("No current or proposed path writes to them directly");

    // Seven steps of one evaluated decision, ending with no actuation.
    expect(document.querySelectorAll(".industrial-workflow > li")).toHaveLength(7);
    expect(screen.getByText("No real actuation happens during an evaluation.")).toBeInTheDocument();

    // Five rungs of the ladder, and not one of them is marked as running.
    const rungs = document.querySelectorAll(".autonomy-ladder > li");
    expect(rungs).toHaveLength(5);
    expect(document.querySelectorAll(".autonomy-ladder__status.is-runs-today")).toHaveLength(0);
    expect(document.querySelectorAll(".autonomy-ladder__status.is-gated")).toHaveLength(3);

    // Seven arms, eight gates, five offer rows, five fit criteria.
    expect(document.querySelectorAll(".evaluation-arms article")).toHaveLength(7);
    expect(document.querySelectorAll(".promotion-gates ul li")).toHaveLength(8);
    expect(document.querySelectorAll(".offer-ladder tbody tr")).toHaveLength(5);
    expect(document.querySelectorAll(".partner-fit article")).toHaveLength(5);

    // The price table says what it is in its own caption.
    expect(document.querySelector(".offer-ladder caption")?.textContent).toContain(
      "Design-partner planning hypotheses",
    );
  });

  it("renders the sealed learning line with its refusal in the same table", () => {
    setPath("/evidence");
    render(<App />);

    // One carrier is asserted, and no archive is named or fingerprinted for it.
    // Per-run replay receipts are a different thing and stay.
    const carrier = document.querySelector(".sealed-archive")?.textContent ?? "";
    expect(carrier).toMatch(/single self-verifying carrier/i);
    expect(carrier).not.toMatch(/[0-9a-f]{40}/);
    expect(document.querySelector(".fingerprint-card")?.textContent ?? "").not.toMatch(/[0-9a-f]{40}/);
    expect(document.body.textContent ?? "").not.toMatch(/_CONSOLIDATE|\.zip\b/i);

    // What a reviewer can run comes before what the numbers say.
    const replay = document.querySelectorAll(".sealed-replay article");
    expect(replay).toHaveLength(3);
    expect(document.querySelector(".sealed-replay")?.textContent).toContain("20 / 20");

    const results = document.querySelectorAll(".learning-results article");
    expect(results).toHaveLength(6);
    expect(document.querySelectorAll(".learning-results article.is-negative")).toHaveLength(1);

    const statuses = Array.from(document.querySelectorAll(".learning-results__status")).map((node) => node.textContent);
    expect(statuses).toContain("TYPED REFUSAL, SEALED");
    expect(statuses.filter((status) => status === "SUPPORTED, SEALED")).toHaveLength(4);

    // The strongest result leads, and the refusal is printed as-is.
    expect(
      screen.getByText("66.4% less work on the complete official test — 57,755 words, F1 0.759"),
    ).toBeInTheDocument();
    expect(screen.getByText("A typed refusal, under seal, on both campaigns")).toBeInTheDocument();

    // The superseded 0% on Kinship is still on the page rather than deleted.
    expect(screen.getByText(/earlier contour measured a 0% advantage/i)).toBeInTheDocument();

    // The withdrawn V67 numbers are gone.
    expect(screen.queryByText(/49\.7%/)).not.toBeInTheDocument();
    expect(screen.queryByText(/JF17K/)).not.toBeInTheDocument();

    // The frozen release and the prototype are kept apart in the section lead.
    expect(screen.getByText(/still performs no learning at all/i)).toBeInTheDocument();

    expect(document.querySelectorAll(".learning-contract ol li")).toHaveLength(8);
    const boundaries = document.querySelectorAll(".learning-boundaries li");
    expect(boundaries).toHaveLength(7);
    // V78 puts the measured path outside the architecture; the page says so.
    expect(document.querySelector(".learning-boundaries")?.textContent).toContain("NOT ATTRIBUTED");
    expect(document.querySelector(".learning-boundaries")?.textContent).toContain("NOT AUTHORIZED");
  });

  it("teaches the engine before it shows the dossier", () => {
    setPath("/hub71");
    render(<App />);

    expect(
      screen.getByRole("heading", { level: 1, name: "How GALO works. No formulas, and no need to trust the brand." }),
    ).toBeInTheDocument();

    // The mechanism comes first. Nothing on the first screen is a status label,
    // a release code, or an affiliation disclaimer.
    const hero = document.querySelector(".page-hero");
    expect(hero?.textContent).not.toMatch(/R5B6A1_3|ESTABLISHED|NOT ESTABLISHED|AFFILIATION/);
    expect(hero?.textContent).toMatch(/checkable record/i);

    expect(document.querySelectorAll(".engine-minute li")).toHaveLength(3);
    expect(document.querySelectorAll(".engine-steps li")).toHaveLength(7);
    expect(document.querySelectorAll(".engine-roles > article")).toHaveLength(2);
    expect(document.querySelectorAll(".engine-not article")).toHaveLength(5);
    expect(document.querySelectorAll(".engine-example li")).toHaveLength(5);
    expect(document.querySelectorAll(".engine-checked article")).toHaveLength(4);
    // The fourth checked line is an absence and is rendered as one.
    expect(document.querySelectorAll(".engine-checked article.is-missing")).toHaveLength(1);
    expect(document.querySelectorAll(".engine-attack li")).toHaveLength(5);

    // Three figures carry the mechanism, including the one that compares where
    // the authority sits against the neighbouring families.
    expect(document.querySelector(".galo-figure--cycle")).toBeInTheDocument();
    expect(document.querySelector(".galo-figure--authority-line")).toBeInTheDocument();
    const authority = document.querySelector(".galo-figure--authority");
    expect(authority).toBeInTheDocument();
    expect(authority?.textContent).toContain("Cyc");
    expect(authority?.querySelectorAll(".galo-authority__row")).toHaveLength(5);
    expect(authority?.querySelectorAll(".galo-authority__row.is-galo")).toHaveLength(1);
    // Four rows read "same object", one reads "two objects".
    expect(authority?.querySelectorAll(".galo-authority__sign.is-galo")).toHaveLength(1);

    // The dossier survives, folded into the appendix at the bottom rather than
    // standing in front of everybody who is not an assessor.
    const appendix = document.querySelector("#appendix");
    expect(appendix?.querySelector(".engine-affiliation")?.textContent).toContain(
      "not affiliated with, endorsed by, backed by, or selected by Hub71",
    );
    expect(appendix?.querySelectorAll("details.engine-dossier")).toHaveLength(4);
    expect(appendix?.querySelectorAll(".engine-dossier__table tbody tr")).toHaveLength(11);
    expect(appendix?.querySelectorAll(".assessment-status.is-negative")).toHaveLength(6);
    expect(appendix?.querySelectorAll(".engine-dossier__list li")).toHaveLength(5);
    expect(appendix?.querySelectorAll(".engine-dossier__questions > div")).toHaveLength(6);
    expect(appendix?.querySelectorAll(".engine-dossier__withheld li")).toHaveLength(4);

    // Every anchor in the contents strip resolves.
    for (const link of Array.from(document.querySelectorAll<HTMLAnchorElement>('.math-contents a[href^="#"]'))) {
      const target = link.getAttribute("href")?.slice(1) ?? "";
      expect(document.getElementById(target), `Missing engine-tour target #${target}`).toBeInTheDocument();
    }

    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute("href", "https://aigalo.com/hub71");
  });

  it("opens the theory route from the Cayley table it is built on", () => {
    setPath("/theory");
    render(<App />);
    expect(
      screen.getByRole("heading", { name: "Everything on this site is built on one finite table." }),
    ).toBeInTheDocument();
    expect(screen.getByRole("table", { name: "Multiplication, three by three" })).toBeInTheDocument();
    expect(screen.getByRole("table", { name: "PLUS on three positions" })).toBeInTheDocument();
    expect(document.querySelector(".galo-figure--bridge")).toBeInTheDocument();
    expect(document.querySelector(".galo-figure--chain")).toBeInTheDocument();
    expect(document.querySelectorAll(".theory-foundation-steps article")).toHaveLength(6);
    expect(document.querySelectorAll(".theory-why-finite__grid article")).toHaveLength(4);
  });

  it("opens the theory chapter with a non-mathematical lane and a reader router", () => {
    setPath("/theory");
    render(<App />);

    // The complaint these two figures answer is that the chapter only works for
    // a reader who is willing to do the algebra in order.
    expect(document.querySelector("#orientation")).toBeInTheDocument();
    expect(document.querySelectorAll(".galo-lanes__row.is-maths li")).toHaveLength(5);
    expect(document.querySelectorAll(".galo-lanes__row.is-business li")).toHaveLength(5);
    expect(document.querySelector(".galo-lanes__row.is-business li")).toHaveTextContent(
      "traces back to an object that fits on a page",
    );

    const cards = document.querySelectorAll(".galo-readers__card");
    expect(cards).toHaveLength(4);
    for (const card of Array.from(cards)) {
      // Every route a card offers has to resolve, and every card has to name the
      // thing its section will not be able to give the reader.
      const href = card.querySelector("a")?.getAttribute("href") ?? "";
      expect(href).toMatch(/^\/(investors|audit|thinking)#[a-z-]+$/);
      expect(card.querySelector(".galo-readers__cannot")?.textContent ?? "").not.toBe("");
    }
  });

  it("carries the non-specialist from the question to the table, the words, and the takeaways", () => {
    setPath("/theory");
    render(<App />);

    // The hero offers the non-mathematical entry first, and it lands in the
    // section that was added for it.
    const start = screen.getByRole("link", { name: /Start here if you are not a mathematician/i });
    expect(start).toHaveAttribute("href", "#orientation");

    // Four forced steps from "why did it do that" to a grid, each naming the
    // alternative it rules out, so the mathematics arrives as a consequence.
    const steps = document.querySelectorAll(".galo-bridge-steps li");
    expect(steps).toHaveLength(4);
    for (const step of Array.from(steps)) {
      expect(step.querySelector("h4")?.textContent ?? "").not.toBe("");
      expect(step.querySelector(".galo-bridge-steps__instead")?.textContent ?? "").not.toBe("");
    }
    expect(steps[0]).toHaveTextContent("get the same answer twice");
    expect(steps[3]).toHaveTextContent("is a table");

    // Six words, each linking to a term page that exists.
    const words = document.querySelectorAll(".orientation-vocab article");
    expect(words).toHaveLength(6);
    const slugs = new Set(termSlugs);
    for (const word of Array.from(words)) {
      const slug = word.querySelector("h4 a")?.getAttribute("href")?.split("/term/")[1] ?? "";
      expect(slugs.has(slug), `Vocabulary card points at unknown term page ${slug}`).toBe(true);
      expect(word.querySelector(".orientation-vocab__where")?.textContent ?? "").not.toBe("");
    }

    // Four takeaways, each with a check and a link to the section that settles it.
    const takeaways = document.querySelectorAll(".orientation-takeaways li");
    expect(takeaways).toHaveLength(4);
    for (const item of Array.from(takeaways)) {
      expect(item.querySelector(".orientation-takeaways__check")?.textContent ?? "").not.toBe("");
      const href = item.querySelector("a")?.getAttribute("href") ?? "";
      expect(href).toMatch(/^\/(theory|investors)#[a-z0-9-]+$/);
    }
  });

  it("draws the investor-facing figures the theory sections were missing", () => {
    setPath("/theory");
    render(<App />);

    for (const figure of [
      ".galo-figure--lanes",
      ".galo-figure--readers",
      ".galo-figure--cost",
      ".galo-figure--named",
      ".galo-figure--gate",
      ".galo-figure--typed",
      ".galo-figure--size",
      ".galo-figure--shelves",
    ]) {
      expect(document.querySelector(figure), `Missing figure ${figure}`).toBeInTheDocument();
    }

    // The absorbing-state figure is generated from the law, so the marked nodes
    // and the written-out chains have to agree with STAR at L3.
    const chains = Array.from(document.querySelectorAll(".galo-figure--gate .galo-figure__stage-notes bdi")).map(
      (node) => node.textContent,
    );
    expect(chains).toEqual(["P1 → P2 → P1 → P2 → P1", "P2 → P1 → P0 → P0 → P0", "P0 → P0 → P0 → P0 → P0"]);

    // One pair, four typed readings: three reach P2 and only STAR_LEFT resets.
    const targets = Array.from(document.querySelectorAll(".galo-figure--typed .galo-typed__target")).map(
      (node) => node.textContent,
    );
    expect(targets).toEqual(["→ P2", "→ P2", "→ P0", "→ P2"]);

    // The whole declared index is drawn, one mark per coordinate, banded by level.
    expect(document.querySelectorAll(".galo-figure--size .galo-size__mark")).toHaveLength(560);
    expect(document.querySelectorAll(".galo-figure--size .galo-size__mark.is-band-6")).toHaveLength(196);

    // Three shelves, and the target shelf keeps the unwelcome statuses on it.
    expect(document.querySelectorAll(".galo-shelves__shelf")).toHaveLength(3);
    expect(document.querySelector(".galo-shelves__shelf.is-target")).toHaveTextContent(
      "Persistent policy learning inside this release: NOT STARTED",
    );
  });

  it("publishes numbered definitions and proofs on the mathematics route", () => {
    setPath("/math");
    render(<App />);
    expect(
      screen.getByRole("heading", { name: "Definitions, propositions, and proofs in ordinary mathematical form." }),
    ).toBeInTheDocument();
    expect(document.querySelectorAll(".academic__item--definition")).toHaveLength(6);
    expect(document.querySelectorAll(".academic__proof")).toHaveLength(11);
    expect(
      screen.getByText("Aut(A_n) ≅ U(n) = (Z/nZ)^×, σ_u(P_i) = P_((ui) mod n), |Aut(A_n)| = φ(n)"),
    ).toBeInTheDocument();
    expect(screen.getAllByText("∎").length).toBe(11);
    expect(screen.getByText(/they are theorems about a finite algebra/i)).toBeInTheDocument();
  });

  it("renders the mathematics route and computes selectable Cayley cells", async () => {
    const user = userEvent.setup();
    setPath("/math");
    render(<App />);

    expect(screen.getByRole("heading", { level: 1, name: "The mathematics beneath GALO AI." })).toBeInTheDocument();
    expect(screen.getByRole("table", { name: "PLUS Cayley table at L3" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "PLUS at L3: P1 with P2 equals P0" })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /^STAR$/ }));
    await user.click(screen.getByRole("button", { name: "STAR at L3: P0 with P2 equals P0" }));

    expect(screen.getByRole("table", { name: "STAR Cayley table at L3" })).toBeInTheDocument();
    expect(document.querySelector(".cayley-result__equation")).toHaveTextContent("STAR3(P0, P2) = P0");
    expect(screen.getByText("RESET ROW")).toBeInTheDocument();

    expect(document.querySelector(".typed-cell-record > code")).toHaveTextContent("L3:STAR_LEFT:P0:P2");
    await user.click(screen.getByRole("button", { name: "STAR_RIGHT" }));
    expect(document.querySelector(".typed-cell-record > code")).toHaveTextContent("L3:STAR_RIGHT:P0:P2");
    expect(screen.getByText("224")).toBeInTheDocument();
    expect(document.querySelector(".symmetry-card__counts")).toHaveTextContent("18");
    expect(screen.getByText(/P0 is neutral only on the right/i)).toBeInTheDocument();
    expect(screen.getByText(/Degenerate exception: on the one-element carrier/i)).toBeInTheDocument();
    expect(screen.queryByText(/directed magma/i)).not.toBeInTheDocument();

    for (const link of Array.from(document.querySelectorAll<HTMLAnchorElement>('.math-contents a[href^="#"]'))) {
      const target = link.getAttribute("href")?.slice(1) ?? "";
      expect(document.getElementById(target), `Missing mathematics target #${target}`).toBeInTheDocument();
    }
  });

  it("renders the beginner theory route with a two-channel transition witness and exact boundaries", async () => {
    const user = userEvent.setup();
    setPath("/theory");
    render(<App />);

    expect(
      screen.getByRole("heading", { level: 1, name: "GALO theory, explained from the first state transition." }),
    ).toBeInTheDocument();
    expect(screen.getByRole("table", { name: "Complete L3 PLUS table" })).toBeInTheDocument();
    expect(screen.getByRole("table", { name: "Complete L3 STAR table" })).toBeInTheDocument();
    expect(
      screen.getByRole("table", { name: "From a local pole to an execution witness: do not mix object classes." }),
    ).toBeInTheDocument();
    expect(screen.getByText("Conclusion: STAR has no two-sided identity at any level n≥2.")).toBeInTheDocument();
    expect(screen.getByText(/e=P_k ∈ Q_n.*k≡0.*e=P0/)).toBeInTheDocument();
    expect(screen.getByText("A_n=(Q_n,PLUS_n,STAR_n,P0)")).toBeInTheDocument();
    expect(screen.getByText("Im={P0,P1} · rank=2")).toBeInTheDocument();
    expect(screen.getByText("Im=Q_3 · rank=3")).toBeInTheDocument();
    expect(document.querySelector(".theory-translation-bridge__cards article:first-child p")).toHaveTextContent(
      "P0 resets to P0, while P1 wraps to P0 because",
    );
    expect(screen.getByText("BEGINNER_TRANSITION_DUAL_CHANNEL")).toBeInTheDocument();

    const witness = document.querySelector(".theory-tutor__record");
    expect(witness).toHaveTextContent("L3:STAR_LEFT:P0:P2");
    expect(witness).toHaveTextContent("table_expectedP0");
    expect(witness).toHaveTextContent("formula_gotP0");
    expect(witness).toHaveTextContent("statusPASS");

    const controls = screen.getByLabelText("Beginner transition controls");
    await user.click(within(controls).getByRole("button", { name: "STAR_RIGHT" }));
    expect(witness).toHaveTextContent("L3:STAR_RIGHT:P0:P2");
    expect(witness).toHaveTextContent("raw_operandsP2, P0");
    expect(witness).toHaveTextContent("table_expectedP2");
    expect(witness).toHaveTextContent("formula_gotP2");
    expect(witness).toHaveTextContent("rc0");

    expect(screen.getByText("COMPATIBILITY_ONLY:")).toBeInTheDocument();
    expect(screen.getByText("DIRECT_MORPHISM_REJECTION_L3_TO_L5")).toBeInTheDocument();
    expect(screen.getByText("BOUNDARY_LEVEL_ALIGNMENT_NOT_PROVEN")).toBeInTheDocument();
    expect(screen.getByText("3 ∤ 5 ⇒ Emb(A_3,A_5)=∅")).toBeInTheDocument();
    expect(
      screen.getByText(/At L3 specifically there are two pole orbits, five ordered-pair orbits/i),
    ).toBeInTheDocument();
    // The chapter states what each release number counts; how it is derived is a
    // formal-chapter question and is no longer printed next to it.
    const releaseCounts = screen.getByRole("table", {
      name: "The four numbers this release is held to, and what each one counts",
    });
    expect(releaseCounts).toHaveTextContent("1,204");
    expect(releaseCounts).toHaveTextContent("The complete committed descriptor universe in the current release.");
    expect(releaseCounts).not.toHaveTextContent("556 + 6 × 108");
    expect(screen.getByText("TARGET ARCHITECTURE · NOT CURRENT V4")).toBeInTheDocument();
    expect(screen.getByText(/must not be presented as a current multi-step runtime capability/i)).toBeInTheDocument();
    expect(screen.getByText("READY_NOT_DUAL_MINOR_SEALED_WITH_DISCLOSED_BOUNDARIES")).toBeInTheDocument();
    expect(screen.getByText("NOT COMPLETED")).toBeInTheDocument();
    expect(screen.getByText(/stored release evidence and was not freshly replayed/i)).toBeInTheDocument();
    const lessonCards = document.querySelectorAll(".theory-glossary > .concept-lesson-card");
    expect(lessonCards).toHaveLength(59);
    expect(lessonCards[0]?.querySelectorAll(".concept-lesson__field")).toHaveLength(7);
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute("href", "https://aigalo.com/theory");

    for (const link of Array.from(document.querySelectorAll<HTMLAnchorElement>('.theory-contents a[href^="#"]'))) {
      const target = link.getAttribute("href")?.slice(1) ?? "";
      expect(document.getElementById(target), `Missing theory target #${target}`).toBeInTheDocument();
    }
  });

  it("links every term chip to its own page", () => {
    setPath("/theory");
    render(<App />);

    expect(document.querySelector(".galo-figure--dial")).toBeInTheDocument();
    expect(document.querySelector(".galo-figure--star")).toBeInTheDocument();
    expect(document.querySelector(".galo-figure--heat")).toBeInTheDocument();
    expect(document.querySelector(".galo-figure--count")).toBeInTheDocument();
    expect(document.querySelector(".galo-figure--orbit")).toBeInTheDocument();
    expect(document.querySelector(".galo-figure--transfer")).toBeInTheDocument();
    expect(document.querySelector(".galo-figure--funnel")).toBeInTheDocument();

    const chips = screen.getAllByRole("link", { name: "STAR" });
    expect(chips[0]).toHaveAttribute("href", "/term/star");
    expect(screen.getAllByRole("link", { name: "Left zero" })[0]).toHaveAttribute("href", "/term/left-zero");

    // Every chip on the page has to resolve to a real term page.
    const slugs = new Set(termSlugs);
    for (const chip of Array.from(document.querySelectorAll<HTMLAnchorElement>(".term-chip"))) {
      const slug = chip.getAttribute("href")?.split("/term/")[1] ?? "";
      expect(slugs.has(slug), `Chip points at unknown term page ${slug}`).toBe(true);
    }
  });

  it("explains one term on a live table from the tower", () => {
    setPath("/term/star");
    render(<App />);

    expect(screen.getByRole("heading", { level: 1, name: "STAR" })).toBeInTheDocument();
    expect(document.querySelector(".term-galo")?.textContent).toContain("STAR is the GALO law that can reset");
    expect(document.querySelector("#in-the-table .term-page__heading")?.textContent).toContain(
      "The marked top row is all P0",
    );

    // The definition a referee would accept comes first, tagged with the branch
    // of mathematics it belongs to and with the honest note that the name is ours.
    expect(document.querySelector(".term-hero__tags")?.textContent).toContain("Project term, not standard mathematics");
    expect(document.querySelector(".term-academic__formal")?.textContent).toContain(
      "★_n(P_i, P_j) = P_0  (i = 0);  P_((i+j) mod n)  (i ≠ 0)",
    );
    expect(document.querySelector("#academic .term-academic p")?.textContent).toContain(
      "A project name for a binary operation obtained from",
    );

    // The table is regenerated from the law, and the cells this concept lives in
    // are the ones marked.
    const table = document.querySelector(".term-table table")!;
    expect(table.querySelector("caption")?.textContent).toContain("STAR · L3");
    const markedCells = Array.from(table.querySelectorAll("td.is-marked"));
    expect(markedCells).toHaveLength(3);
    expect(markedCells.map((cell) => cell.textContent)).toEqual(["P0", "P0", "P0"]);

    expect(document.querySelectorAll(".term-lesson__field")).toHaveLength(7);
    expect(within(document.querySelector(".term-related")!).getByRole("link", { name: /Left zero/i })).toHaveAttribute(
      "href",
      "/term/left-zero",
    );

    // Fifty-nine terms in a fixed order, walkable without returning to the glossary.
    const steps = document.querySelector(".term-steps")!;
    expect(steps.querySelector(".term-steps__position")?.textContent).toMatch(/^\d+ \/ 59$/);
    expect(within(steps as HTMLElement).getByRole("link", { name: /Previous term/i })).toHaveAttribute(
      "href",
      expect.stringContaining("/term/"),
    );
    expect(within(steps as HTMLElement).getByRole("link", { name: /Next term/i })).toHaveAttribute(
      "href",
      expect.stringContaining("/term/"),
    );

    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute("href", "https://aigalo.com/term/star");
  });

  it("gives every one of the 59 terms a page that resolves", () => {
    expect(termSlugs).toHaveLength(59);
    for (const slug of termSlugs) {
      setPath(`/term/${slug}`);
      const view = render(<App />);
      expect(document.querySelector(".term-table table"), `No table for ${slug}`).toBeInTheDocument();
      expect(document.querySelectorAll(".term-lesson__field")).toHaveLength(7);
      expect(document.querySelector(".term-galo"), `No GALO meaning for ${slug}`).toBeInTheDocument();
      view.unmount();
    }
  });

  it("falls back to the not-found page for an unknown term slug", () => {
    setPath("/term/not-a-real-term");
    render(<App />);
    expect(document.querySelector(".term-table")).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("recolours both Cayley fields when the illustrated level changes", async () => {
    const user = userEvent.setup();
    setPath("/theory");
    render(<App />);

    expect(screen.getByRole("table", { name: "PLUS field at L3" })).toBeInTheDocument();
    const levels = screen.getByRole("group", { name: "Level for both coloured tables" });
    await user.click(within(levels).getByRole("button", { name: "L5" }));
    expect(screen.getByRole("table", { name: "STAR field at L5" })).toBeInTheDocument();
    const resetRow = document.querySelector(".galo-heat__table tr.is-reset-row");
    expect(resetRow?.querySelectorAll("td")).toHaveLength(5);
    expect(resetRow?.textContent).toContain("P0P0P0P0P0");
  });

  it("renders a term page in Arabic while the table keeps its own direction", () => {
    setPath("/ar/term/star");
    render(<App />);

    expect(document.documentElement).toHaveAttribute("dir", "rtl");
    expect(screen.getByRole("heading", { level: 1, name: "STAR" })).toBeInTheDocument();
    expect(document.querySelector(".term-galo")?.textContent).toContain("قانون GALO القادر على إعادة الضبط");

    // Table geometry stays left-to-right so the row and column headers keep
    // meaning the same thing in every locale.
    expect(document.querySelector(".term-table table")).toHaveAttribute("dir", "ltr");
    expect(document.querySelectorAll(".term-table td.is-marked")).toHaveLength(3);
    expect(document.querySelectorAll(".term-lesson__field")).toHaveLength(7);
  });

  it("gives the language-model comparison its own route with the honest breadth row", () => {
    setPath("/vs-llm");
    render(<App />);

    expect(
      screen.getByRole("heading", { level: 1, name: "GALO is not a language model, and not a competitor to one." }),
    ).toBeInTheDocument();
    expect(screen.getByRole("table", { name: /Property-by-property/i })).toBeInTheDocument();
    expect(document.querySelectorAll(".comparison-table tbody tr")).toHaveLength(11);
    expect(screen.getByRole("rowheader", { name: "Breadth today" })).toBeInTheDocument();
    expect(screen.getByText(/A language model handles open-ended tasks/i)).toBeInTheDocument();
    expect(
      screen.getByText(/no language understanding at all\. This is the honest shape of the trade/i),
    ).toBeInTheDocument();

    expect(document.querySelector(".galo-figure--machines")).toBeInTheDocument();
    expect(document.querySelector(".galo-figure--answers")).toBeInTheDocument();
    expect(document.querySelector(".galo-figure--complement")).toBeInTheDocument();

    expect(document.querySelectorAll(".landscape-card")).toHaveLength(13);
    expect(screen.getByRole("heading", { level: 3, name: "Proof assistants" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: "Global common-sense knowledge bases" })).toBeInTheDocument();
    expect(screen.getByText(/Cyc proved there is demand for explicit reasoning/i)).toBeInTheDocument();
    expect(screen.getByText("Lean and mathlib, Rocq (formerly Coq), Isabelle/HOL")).toBeInTheDocument();
    expect(screen.getByText(/Stronger verification than GALO claims anywhere/i)).toBeInTheDocument();
    expect(document.querySelectorAll(".landscape-standing li")).toHaveLength(4);
    expect(screen.getByText(/No benchmark has been run/i)).toBeInTheDocument();

    expect(screen.getByText("GALO is a replacement for a language model.")).toBeInTheDocument();
    expect(screen.getByText(/No such comparison is claimed/i)).toBeInTheDocument();
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute("href", "https://aigalo.com/vs-llm");

    for (const link of Array.from(document.querySelectorAll<HTMLAnchorElement>('.math-contents a[href^="#"]'))) {
      const target = link.getAttribute("href")?.slice(1) ?? "";
      expect(document.getElementById(target), `Missing comparison target #${target}`).toBeInTheDocument();
    }
  });

  it("carries the comparison route into every locale", () => {
    for (const [path, heading] of [
      ["/ru/vs-llm", "GALO — не языковая модель и не конкурент ей."],
      ["/zh/vs-llm", "GALO 不是语言模型，也不是它的竞争者。"],
      ["/ar/vs-llm", "GALO ليس نموذج لغة ولا منافسًا له."],
    ] as const) {
      setPath(path);
      const view = render(<App />);
      expect(screen.getByRole("heading", { level: 1, name: heading })).toBeInTheDocument();
      view.unmount();
    }
  });

  it("explains the whole thing in plain words with no formula on the page", () => {
    setPath("/simple");
    render(<App />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Sometimes what matters after a decision is not the answer, but being able to show calmly why it counted as permitted at the time.",
      }),
    ).toBeInTheDocument();

    expect(document.querySelectorAll(".plain-story > li")).toHaveLength(4);
    expect(document.querySelectorAll(".plain-idea > article")).toHaveLength(3);
    expect(document.querySelectorAll(".usual-here > article")).toHaveLength(2);
    expect(document.querySelectorAll(".not-chatbot > p")).toHaveLength(3);
    expect(document.querySelectorAll(".plain-neighbours > article")).toHaveLength(4);
    expect(document.querySelectorAll(".from-list p")).toHaveLength(3);
    expect(document.querySelectorAll(".have-not__column")).toHaveLength(2);
    expect(document.querySelectorAll(".have-not__column li")).toHaveLength(8);
    expect(document.querySelectorAll(".in-short > p")).toHaveLength(4);
    expect(document.querySelectorAll(".plain-jargon > div")).toHaveLength(10);

    // The page reuses the figures a newcomer can read without help, and adds none
    // of the ones that assume the vocabulary.
    expect(document.querySelector(".galo-figure--trace")).toBeInTheDocument();
    expect(document.querySelector(".galo-figure--two-ways")).toBeInTheDocument();
    expect(document.querySelector(".galo-figure--tiers")).not.toBeInTheDocument();

    // the honest column still says the four things it has always said
    expect(screen.getByText("Customers or pilots")).toBeInTheDocument();
    expect(screen.getByText("A promise that it is cleverer than familiar AI")).toBeInTheDocument();
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute("href", "https://aigalo.com/simple");

    for (const link of Array.from(document.querySelectorAll<HTMLAnchorElement>('.math-contents a[href^="#"]'))) {
      const target = link.getAttribute("href")?.slice(1) ?? "";
      expect(document.getElementById(target), `Missing plain-words target #${target}`).toBeInTheDocument();
    }
  });

  it("carries the plain-words route into every locale", () => {
    for (const [path, heading] of [
      [
        "/ru/simple",
        "Иногда после решения важнее не сам ответ, а возможность позже спокойно показать: почему тогда это вообще считалось допустимым.",
      ],
      ["/zh/simple", "有时候，一个决定之后要紧的不是答案本身，而是日后能否从容地说清：当时凭什么算是被允许的。"],
      [
        "/ar/simple",
        "أحيانًا لا يكون المهم بعد القرار هو الجواب نفسه، بل أن تستطيع لاحقًا أن تبيّن بهدوء لماذا عُدَّ ذلك مسموحًا به حينئذ.",
      ],
    ] as const) {
      setPath(path);
      const view = render(<App />);
      expect(screen.getByRole("heading", { level: 1, name: heading })).toBeInTheDocument();
      view.unmount();
    }
  });

  it("routes a non-technical reader through the investor page", () => {
    setPath("/investors");
    render(<App />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "A weight-free decision layer for private and industrial AI.",
      }),
    ).toBeInTheDocument();

    // the case comes first, then the evidence and the limits
    expect(document.querySelectorAll(".investor-status > li")).toHaveLength(5);
    expect(document.querySelectorAll(".thesis-blocks > article")).toHaveLength(4);
    expect(document.querySelectorAll(".one-minute__facts > article")).toHaveLength(4);
    expect(document.querySelectorAll(".investor-problems > article")).toHaveLength(4);
    expect(document.querySelectorAll(".investor-fit > article")).toHaveLength(4);
    expect(document.querySelectorAll(".stage-facts > article")).toHaveLength(8);
    // the field is five lines here; the long table lives on the comparison page
    expect(document.querySelectorAll("#field .field-table tbody tr")).toHaveLength(5);
    expect(document.querySelectorAll("#field .field-table tbody tr.is-galo")).toHaveLength(1);

    expect(document.querySelectorAll(".risk-register > article")).toHaveLength(6);
    // every risk says where it stands today, and the thesis has a deadline
    expect(document.querySelectorAll(".risk-register__status")).toHaveLength(6);
    expect(document.querySelector(".risk-register__deadline")?.textContent).toMatch(/nine to twelve months/i);
    expect(document.querySelectorAll(".funded-plan > li")).toHaveLength(5);
    expect(document.querySelectorAll(".wrong-list li")).toHaveLength(3);
    expect(document.querySelectorAll(".diligence-steps > li")).toHaveLength(6);
    expect(document.querySelectorAll(".not-claimed > li")).toHaveLength(6);

    expect(document.querySelector(".galo-figure--trace")).toBeInTheDocument();
    expect(document.querySelector(".galo-figure--stack")).toBeInTheDocument();
    expect(document.querySelector(".galo-figure--gatechain")).toBeInTheDocument();
    expect(document.querySelector(".galo-figure--diligence")).toBeInTheDocument();

    expect(screen.getAllByText(/No revenue, no funds raised, no customer, no pilot/i).length).toBeGreaterThan(1);
    expect(screen.getByText(/No organisation named or unnamed has evaluated, piloted, or agreed/i)).toBeInTheDocument();
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute("href", "https://aigalo.com/investors");

    for (const link of Array.from(document.querySelectorAll<HTMLAnchorElement>('.math-contents a[href^="#"]'))) {
      const target = link.getAttribute("href")?.slice(1) ?? "";
      expect(document.getElementById(target), `Missing investor target #${target}`).toBeInTheDocument();
    }
  });

  it("tells an auditor what cannot be established from the site", () => {
    setPath("/audit");
    render(<App />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "What a sceptical outsider can establish here, and what nobody can.",
      }),
    ).toBeInTheDocument();

    expect(document.querySelectorAll(".audit-tiers > article")).toHaveLength(4);
    expect(document.querySelector(".audit-tiers > article.is-t4")).toBeInTheDocument();
    // Each headline promise carries the action that would refute it.
    const promises = document.querySelectorAll(".promise-checks > li");
    expect(promises).toHaveLength(3);
    promises.forEach((promise) => {
      expect(promise.querySelector(".promise-checks__step")?.textContent ?? "").not.toHaveLength(0);
      expect(promise.querySelector(".promise-checks__limit")?.textContent ?? "").not.toHaveLength(0);
    });
    expect(screen.getByText(/falsifies the claim outright/i)).toBeInTheDocument();

    expect(document.querySelectorAll(".claim-chain > li")).toHaveLength(5);
    expect(document.querySelectorAll(".status-rules > article")).toHaveLength(4);
    expect(document.querySelectorAll(".audit-questions > article")).toHaveLength(8);
    expect(document.querySelectorAll(".repro-steps > article")).toHaveLength(5);
    expect(document.querySelectorAll(".not-claimed > li")).toHaveLength(5);

    expect(document.querySelector(".galo-figure--tiers")).toBeInTheDocument();
    expect(document.querySelector(".galo-figure--anatomy")).toBeInTheDocument();

    expect(screen.getByText(/every check published here is run by the project's own build/i)).toBeInTheDocument();
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute("href", "https://aigalo.com/audit");

    for (const link of Array.from(document.querySelectorAll<HTMLAnchorElement>('.math-contents a[href^="#"]'))) {
      const target = link.getAttribute("href")?.slice(1) ?? "";
      expect(document.getElementById(target), `Missing audit target #${target}`).toBeInTheDocument();
    }
  });

  it("offers four reader routes on the home page", () => {
    setPath("/");
    render(<App />);

    const paths = document.querySelectorAll(".reader-paths > article");
    expect(paths).toHaveLength(4);
    expect(paths[0]?.querySelectorAll("ol > li")).toHaveLength(3);
    expect(screen.getByRole("heading", { level: 2, name: /You do not need the mathematics/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Request a bounded industrial evaluation/i })).toBeInTheDocument();
  });

  it("carries the investor and audit routes into every locale", () => {
    for (const [path, heading] of [
      ["/ru/investors", "Слой решений без обучаемых весов — для частного и промышленного ИИ."],
      ["/zh/investors", "面向私有与工业人工智能的无权重决策层。"],
      ["/ar/audit", "ما الذي يستطيع مراجع خارجي متشكّك إثباته هنا، وما الذي لا يستطيعه أحد."],
      ["/ru/audit", "Что здесь можно проверить самому — и чего не проверит никто."],
    ] as const) {
      setPath(path);
      const view = render(<App />);
      expect(screen.getByRole("heading", { level: 1, name: heading })).toBeInTheDocument();
      view.unmount();
    }
  });

  it("gives the reasoning route its own page with every phase, exit, and stop on it", () => {
    setPath("/thinking");
    render(<App />);

    expect(
      screen.getByRole("heading", { level: 1, name: "The route an episode travels, phase by phase." }),
    ).toBeInTheDocument();

    expect(document.querySelector(".galo-figure--pipeline")).toBeInTheDocument();
    expect(document.querySelector(".galo-figure--gates")).toBeInTheDocument();
    expect(document.querySelector(".galo-figure--loop")).toBeInTheDocument();
    expect(document.querySelector(".galo-figure--determinism")).toBeInTheDocument();
    expect(document.querySelector(".galo-figure--memory")).toBeInTheDocument();
    expect(document.querySelector(".galo-figure--funnel")).toBeInTheDocument();

    expect(document.querySelectorAll(".thinking-stages > article")).toHaveLength(7);
    expect(document.querySelectorAll(".thinking-exits > article")).toHaveLength(2);
    expect(document.querySelectorAll(".thinking-exits > article.is-reject")).toHaveLength(1);
    expect(document.querySelectorAll(".thinking-properties > article")).toHaveLength(4);
    expect(document.querySelectorAll(".thinking-gates > article")).toHaveLength(5);
    expect(document.querySelectorAll(".thinking-gates__terminal.is-reject")).toHaveLength(1);
    expect(document.querySelectorAll(".thinking-registers > article")).toHaveLength(5);
    expect(document.querySelectorAll(".thinking-registers > article.is-dropped")).toHaveLength(2);
    expect(document.querySelectorAll(".thinking-table tbody tr")).toHaveLength(9);

    // The phase names are machine labels and stay untranslated in every locale.
    for (const phase of ["SEARCH", "HYPOTHESES", "PROBING", "COMPOSITION", "REVEAL", "LEARNING", "COMPLETE"]) {
      expect(screen.getAllByText(phase).length, phase).toBeGreaterThan(0);
    }

    expect(screen.getByRole("table", { name: /accepted observation/i })).toBeInTheDocument();
    expect(screen.getByText("GALO thinks the way a person thinks.")).toBeInTheDocument();
    // The attribution gap has to be on the page, not only in the archive.
    expect(
      screen.getByText("The route drawn on this page is what the published results measured."),
    ).toBeInTheDocument();
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute("href", "https://aigalo.com/thinking");

    for (const link of Array.from(document.querySelectorAll<HTMLAnchorElement>('.math-contents a[href^="#"]'))) {
      const target = link.getAttribute("href")?.slice(1) ?? "";
      expect(document.getElementById(target), `Missing thinking target #${target}`).toBeInTheDocument();
    }
  });

  it("carries the thinking route into every locale", () => {
    for (const [path, heading] of [
      ["/ru/thinking", "Маршрут, который проходит эпизод, фаза за фазой."],
      ["/zh/thinking", "一次推理所走的路线，逐个阶段。"],
      ["/ar/thinking", "المسار الذي تسلكه الحلقة، مرحلةً مرحلة."],
    ] as const) {
      setPath(path);
      const view = render(<App />);
      expect(screen.getByRole("heading", { level: 1, name: heading })).toBeInTheDocument();
      view.unmount();
    }
  });

  it("adds the second illustration batch to the theory, evidence, and symmetry routes", () => {
    setPath("/theory");
    const theory = render(<App />);
    expect(document.querySelector(".galo-figure--roles")).toBeInTheDocument();
    expect(document.querySelector(".galo-figure--resolution")).toBeInTheDocument();
    expect(document.querySelector(".galo-figure--tree")).toBeInTheDocument();
    expect(document.querySelector(".galo-figure--square")).toBeInTheDocument();
    theory.unmount();

    setPath("/evidence");
    const evidence = render(<App />);
    expect(document.querySelector(".galo-figure--receipt")).toBeInTheDocument();
    expect(screen.getByText("check_id")).toBeInTheDocument();
    evidence.unmount();

    setPath("/symmetry");
    render(<App />);
    expect(document.querySelector(".galo-figure--units")).toBeInTheDocument();
  });

  it("renders the symmetry route and recomputes cycles, stabilizers, and Burnside counts", async () => {
    const user = userEvent.setup();
    setPath("/symmetry");
    render(<App />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Which renamings leave every rule exactly where it was." }),
    ).toBeInTheDocument();

    // The chapter now opens without notation: four steps, then one renaming that
    // works and one that does not, before any group theory appears.
    expect(document.querySelectorAll(".symmetry-basics > li")).toHaveLength(4);
    const checks = document.querySelectorAll(".symmetry-checks article");
    expect(checks).toHaveLength(2);
    expect(checks[0]).toHaveClass("is-symmetry");
    expect(checks[1]).toHaveClass("is-not-symmetry");
    expect(screen.getByText(/leaves every rule exactly where it was is a symmetry/i)).toBeInTheDocument();

    // Same-shape-is-not-same-meaning is stated in words, not only in notation.
    expect(screen.getByText("Same shape means the same thing.")).toBeInTheDocument();
    expect(screen.getByText(/says nothing about where either came from/i)).toBeInTheDocument();

    expect(screen.getByText("enumeration=224 · Burnside=224")).toBeInTheDocument();
    expect(screen.getByText(/Eighteen is seven separate answers added together/i)).toBeInTheDocument();

    // The quadratic-residue, CRT and character cards moved to the formal chapter.
    expect(screen.queryByText(/u=2: \{1,4\} → \{2,3\}/i)).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Read them in the formal chapter" })).toHaveAttribute(
      "href",
      "/math#academic-analysis",
    );

    const controls = screen.getByLabelText("Symmetry explorer controls");
    const selects = controls.querySelectorAll("select");
    await user.selectOptions(selects[0]!, "7");
    await user.selectOptions(selects[1]!, "6");
    expect(screen.getByText("(P0) (P1 P6) (P2 P5) (P3 P4)")).toBeInTheDocument();
    expect(screen.getByText(/Pair orbits: 9/)).toBeInTheDocument();

    for (const link of Array.from(document.querySelectorAll<HTMLAnchorElement>('.math-contents a[href^="#"]'))) {
      const target = link.getAttribute("href")?.slice(1) ?? "";
      expect(document.getElementById(target), `Missing symmetry target #${target}`).toBeInTheDocument();
    }
  });

  it("renders the symmetry chapter in Russian, Chinese, and RTL Arabic", () => {
    for (const [path, heading, direction] of [
      ["/ru/symmetry", "Какие переименования оставляют каждое правило ровно там, где оно было.", "ltr"],
      ["/zh/symmetry", "哪些改名能把每一条规则都原封不动留在原处。", "ltr"],
      ["/ar/symmetry", "أيّ إعادات التسمية تُبقي كلّ قاعدة في موضعها تمامًا.", "rtl"],
    ] as const) {
      setPath(path);
      const view = render(<App />);
      expect(screen.getByRole("heading", { level: 1, name: heading })).toBeInTheDocument();
      expect(document.documentElement).toHaveAttribute("dir", direction);
      expect(document.querySelector(".hom-matrix-wrap")).toHaveAttribute("dir", "ltr");
      view.unmount();
    }
  });

  it("renders privacy and the custom 404", () => {
    setPath("/privacy");
    const privacy = render(<App />);
    expect(screen.getByRole("heading", { level: 1, name: /quiet, static website/i })).toBeInTheDocument();
    privacy.unmount();
    setPath("/outside-scope");
    render(<App />);
    expect(screen.getByRole("heading", { level: 1, name: "Page not found." })).toBeInTheDocument();
    expect(screen.getByText(/outside the current site boundary/i)).toBeInTheDocument();
  });

  // HOME-I18N-08 — the restructured home page renders in four languages with no
  // English left showing through, and Arabic keeps its right-to-left direction.
  it("renders the restructured home page in every locale without English fallback", () => {
    const headlines: Record<string, string> = {
      "": "AI built for provable decisions.",
      ru: "ИИ для доказуемых решений.",
      zh: "为可证明的决策而打造的人工智能。",
      ar: "ذكاءٌ اصطناعيّ بُني لقراراتٍ قابلة للإثبات.",
    };

    for (const [locale, headline] of Object.entries(headlines)) {
      setPath(locale ? `/${locale}` : "/");
      render(<App />);

      expect(screen.getByRole("heading", { level: 1, name: headline })).toBeInTheDocument();
      expect(document.documentElement).toHaveAttribute("dir", locale === "ar" ? "rtl" : "ltr");

      // Every new section is present in every language.
      for (const id of ["learned-state", "when-change", "provable", "learning-cycle", "scope", "not-this"]) {
        expect(document.querySelector(`#${id}`), `${locale || "en"} #${id}`).toBeInTheDocument();
      }

      // And no English sentence from the source copy leaks into a translated page.
      if (locale) {
        const hero = document.querySelector(".hero")?.textContent ?? "";
        expect(hero, locale).not.toContain(heroHeadline);
        expect(hero, locale).not.toContain(heroResult);
      }

      cleanup();
    }
  });

  // HOME-CLAIM-09 — the first screen carries the boundary and nothing that would
  // read as a deployment, a customer or an outside model doing the work.
  it("keeps the claim firewall on the first screen", () => {
    render(<App />);
    const hero = document.querySelector(".hero")?.textContent ?? "";

    expect(hero).toContain("Research prototype.");
    for (const forbidden of ["GPT", "LLM", "language model", "customer", "revenue", "letter of intent", "deployed"]) {
      expect(hero.toLowerCase(), forbidden).not.toContain(forbidden.toLowerCase());
    }

    // The external model is discussed, but below the fold and with its rule attached.
    const cycle = document.querySelector("#learning-cycle")?.textContent ?? "";
    expect(cycle).toContain("It is not part of GALO");
  });

  it("renders a complete Russian home route with localized navigation and contact", () => {
    setPath("/ru");
    render(<App />);
    expect(document.documentElement).toHaveAttribute("lang", "ru");
    expect(document.documentElement).toHaveAttribute("dir", "ltr");
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "ИИ для доказуемых решений.",
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "Основная навигация" })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "Доказательства" })[0]).toHaveAttribute("href", "/ru/evidence");
    expect(screen.getByRole("combobox", { name: "Язык" })).toHaveValue("ru");
  });

  it("renders the Chinese evidence route while preserving exact release tokens", () => {
    setPath("/zh/evidence");
    render(<App />);
    expect(document.documentElement).toHaveAttribute("lang", "zh-CN");
    expect(
      screen.getByRole("heading", { level: 1, name: "已经能用的部分，以及接下来正在建设的部分。" }),
    ).toBeInTheDocument();
    expect(screen.getByText("READY_NOT_DUAL_MINOR_SEALED_WITH_DISCLOSED_BOUNDARIES")).toBeInTheDocument();
    // "General AI" is now bounded twice on this page: once for the frozen release
    // and once for the V65-V67 learning line.
    expect(screen.getAllByText("通用人工智能").length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText("NOT CLAIMED").length).toBeGreaterThan(0);
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute("href", "https://aigalo.com/zh/evidence");
  });

  it("renders Arabic in RTL while leaving recorded payload fields canonical", () => {
    setPath("/ar");
    render(<App />);
    expect(document.documentElement).toHaveAttribute("lang", "ar");
    expect(document.documentElement).toHaveAttribute("dir", "rtl");
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "ذكاءٌ اصطناعيّ بُني لقراراتٍ قابلة للإثبات.",
      }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText("حمولة إيصال منقحة")).toHaveTextContent('"externalOriginProven": false');
    expect(screen.getByRole("link", { name: "rusfbm@gmail.com" })).toBeInTheDocument();
  });

  it("renders the Arabic mathematics route in RTL while keeping tables left-to-right", () => {
    setPath("/ar/math");
    render(<App />);
    expect(document.documentElement).toHaveAttribute("lang", "ar");
    expect(document.documentElement).toHaveAttribute("dir", "rtl");
    expect(document.querySelector(".cayley-table-wrap")).toHaveAttribute("dir", "ltr");
    expect(document.querySelector(".typed-cell-record > code")).toHaveAttribute("dir", "ltr");
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute("href", "https://aigalo.com/ar/math");
  });

  it("keeps Arabic beginner prose RTL while isolating canonical tables and formulas as LTR", () => {
    setPath("/ar/theory");
    render(<App />);
    const caption = screen.getByText("جدول PLUS الكامل عند L3");
    expect(document.documentElement).toHaveAttribute("dir", "rtl");
    expect(caption).toHaveAttribute("dir", "rtl");
    expect(caption.closest("table")).toHaveAttribute("dir", "ltr");
    expect(document.querySelector(".theory-tutor__formula code")).toHaveAttribute("dir", "ltr");
    const firstLesson = document.querySelector(".theory-glossary .concept-lesson");
    expect(within(firstLesson as HTMLElement).getByText("قناة الصيغة")).not.toHaveAttribute("dir", "ltr");
    const carrierDefinition = document.querySelector(
      ".theory-glossary .concept-lesson__field:nth-child(2) .concept-lesson__formal",
    );
    expect(firstLesson).toHaveAttribute("dir", "rtl");
    expect(carrierDefinition?.querySelector("bdi")).toHaveAttribute("dir", "ltr");
    expect(document.querySelector(".theory-divisibility-proof h3 bdi")).toHaveAttribute("dir", "ltr");
  });

  it("localizes privacy and 404 pages without losing the locale prefix", () => {
    setPath("/ru/privacy");
    const privacy = render(<App />);
    expect(screen.getByRole("heading", { level: 1, name: /По умолчанию/i })).toBeInTheDocument();
    privacy.unmount();
    setPath("/ar/outside-scope");
    render(<App />);
    expect(screen.getByRole("heading", { level: 1, name: "الصفحة غير موجودة." })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /العودة إلى الرئيسية/ })).toHaveAttribute("href", "/ar");
  });

  it("builds stable localized URLs and parses prefixed routes", () => {
    expect(localizedPath("en", "/evidence")).toBe("/evidence");
    expect(localizedPath("ru", "/#receipt")).toBe("/ru#receipt");
    expect(localizedPath("zh", "/privacy")).toBe("/zh/privacy");
    expect(localizedPath("ar", "/math#cayley-tables")).toBe("/ar/math#cayley-tables");
    expect(localizedPath("zh", "/theory#guided-lab")).toBe("/zh/theory#guided-lab");
    expect(localizedPath("ru", "/vs-llm#dimensions")).toBe("/ru/vs-llm#dimensions");
    expect(localizedPath("zh", "/thinking#gates")).toBe("/zh/thinking#gates");
    expect(localizedPath("ru", "/investors#risks")).toBe("/ru/investors#risks");
    expect(parseLocalizedPath("/ar/audit/")).toEqual({ locale: "ar", route: "/audit", rawRoute: "/audit" });
    expect(parseLocalizedPath("/ru/thinking/")).toEqual({ locale: "ru", route: "/thinking", rawRoute: "/thinking" });
    expect(parseLocalizedPath("/ar/vs-llm/")).toEqual({ locale: "ar", route: "/vs-llm", rawRoute: "/vs-llm" });
    expect(localizedPath("ru", "/symmetry#orbit-lab")).toBe("/ru/symmetry#orbit-lab");
    expect(parseLocalizedPath("/ar/evidence/")).toEqual({ locale: "ar", route: "/evidence", rawRoute: "/evidence" });
    expect(parseLocalizedPath("/ru/math/")).toEqual({ locale: "ru", route: "/math", rawRoute: "/math" });
    expect(parseLocalizedPath("/zh/symmetry/")).toEqual({ locale: "zh", route: "/symmetry", rawRoute: "/symmetry" });
    expect(parseLocalizedPath("/ar/theory/")).toEqual({ locale: "ar", route: "/theory", rawRoute: "/theory" });
    expect(parseLocalizedPath("/ru/not-real")).toEqual({ locale: "ru", route: "/404", rawRoute: "/not-real" });
    expect(switchLocalePath("zh", "/ar/math", "#cayley-tables")).toBe("/zh/math#cayley-tables");
  });

  it("has translation coverage for every rendered string in every localized route", () => {
    resetMissingTranslations();
    for (const locale of ["ru", "zh", "ar"]) {
      for (const route of [
        "",
        "/simple",
        "/investors",
        "/audit",
        "/hub71",
        "/theory",
        "/thinking",
        "/vs-llm",
        "/math",
        "/symmetry",
        "/evidence",
        "/privacy",
        "/not-found",
        ...termSlugs.map((slug) => `/term/${slug}`),
      ]) {
        setPath(`/${locale}${route}`);
        const view = render(<App />);
        view.unmount();
      }
    }
    expect(getMissingTranslations()).toEqual({});
  }, 120000);
});
