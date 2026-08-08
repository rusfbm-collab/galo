import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { App } from "../src/app/App";
import { termSlugs } from "../src/content/termPages";
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

  it("renders the problem-led hero and bounded status", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1, name: /why it was allowed to decide/i })).toBeInTheDocument();
    expect(screen.getByText("Working bounded prototype")).toBeInTheDocument();
    expect(screen.getByText(/General AI and external capability superiority are not claimed/i)).toBeInTheDocument();
  });

  it("draws the seven levels as seven towers whose heights come from the mathematics", () => {
    render(<App />);
    const towers = document.querySelector(".hero-towers");
    expect(towers).toBeInTheDocument();

    // One group per level, and level n holds exactly n blocks.
    const groups = towers?.querySelectorAll("g") ?? [];
    expect(groups).toHaveLength(7);
    groups.forEach((group, index) => {
      expect(group.querySelectorAll("rect")).toHaveLength(index + 1);
    });

    // The foot of every tower is P0, the state present at every level.
    expect(towers?.querySelectorAll("rect.is-floor")).toHaveLength(7);
    expect(towers?.querySelectorAll(".hero-towers__pole")).toHaveLength(7);
  });

  it("takes the headline apart, with the limit in the same card as the claim", () => {
    render(<App />);
    const cards = document.querySelectorAll(".headline-claim");
    expect(cards).toHaveLength(3);
    cards.forEach((card) => {
      expect(card.querySelector(".headline-claim__mechanism")?.textContent ?? "").not.toHaveLength(0);
      expect(card.querySelector(".headline-claim__limit")?.textContent ?? "").not.toHaveLength(0);
      expect(card.querySelector("a")).toHaveAttribute("href");
    });
    expect(screen.getByText(/The list of permitted actions is closed before the run/i)).toBeInTheDocument();
    expect(screen.getByText(/fresh FULL was not run/i)).toBeInTheDocument();
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
      screen.getByText(/Observation-conditioned structural reasoning and persistent learning are not implemented/i),
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

    // The six target stages each say plainly that they do not run today.
    const target = stages.slice(5);
    expect(target).toHaveLength(6);
    const targetProse = target.map((stage) => stage.querySelector("p")?.textContent ?? "").join(" ");
    expect(targetProse).toMatch(/does not run|Not built|not started|No trained Atlas/i);
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
    expect(screen.getByText("Persistent trusted manifest head")).toBeInTheDocument();
    expect(screen.getByText("Arbitrary free-text semantic noninterference")).toBeInTheDocument();
    expect(screen.getAllByText("Persistent policy").length).toBeGreaterThan(0);
    expect(screen.getByText("General AI")).toBeInTheDocument();
  });

  it("publishes the confirmed evaluation email without inventing social links", () => {
    render(<App />);
    expect(screen.queryByRole("link", { name: /LinkedIn/i })).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: "rusfbm@gmail.com" })).toHaveAttribute("href", "mailto:rusfbm@gmail.com");
    expect(
      screen
        .getByRole("link", { name: /Request a 25-minute evaluation/i })
        .getAttribute("href")
        ?.startsWith("mailto:rusfbm@gmail.com?subject="),
    ).toBe(true);
    expect(screen.queryByText(/Public evaluation contact is pending founder confirmation/i)).not.toBeInTheDocument();
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
    expect(screen.getByText("4,802")).toBeInTheDocument();
    expect(screen.getByText("NOT COMPLETED")).toBeInTheDocument();
    expect(screen.getByText(/closed deterministic selector\. Nothing about it was learned/i)).toBeInTheDocument();
    expect(screen.getByRole("table", { name: "Public claim matrix" })).toBeInTheDocument();
    expect(screen.getByText("NOT PRESENT")).toBeInTheDocument();
    expect(screen.getByText("NOT CLAIMED")).toBeInTheDocument();
  });

  it("opens with a plain-language briefing before any mathematics", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: "If you read one section on this site, read this one." }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "What is actually being built?" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "What would change your mind?" })).toBeInTheDocument();
    expect(screen.getByText(/a finite table of results for two inputs — a Cayley table/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /See the table everything is built on/i })).toHaveAttribute(
      "href",
      "/theory#cayley-first",
    );
  });

  it("renders the assessment dossier as a document, with its absences visible", () => {
    setPath("/hub71");
    render(<App />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Everything an assessor would ask, answered before the meeting." }),
    ).toBeInTheDocument();

    // The non-affiliation statement is the first thing the page settles.
    expect(document.querySelector(".programme-affiliation")?.textContent).toContain(
      "not affiliated with, endorsed by, backed by, or selected by Hub71",
    );
    expect(document.querySelector(".programme-hero__strip")?.textContent).toContain("AFFILIATION");

    // Twelve assessment lines, and the six negative ones are rendered as such
    // rather than being softened into prose.
    const rows = document.querySelectorAll(".programme-table tbody tr");
    expect(rows).toHaveLength(12);
    const statuses = Array.from(document.querySelectorAll(".programme-status")).map((node) => node.textContent);
    expect(statuses.filter((status) => status === "NONE")).toHaveLength(3);
    expect(statuses.filter((status) => status === "NOT ESTABLISHED")).toHaveLength(3);
    expect(document.querySelectorAll(".programme-status.is-negative")).toHaveLength(6);

    // Five commitments, each carrying its own failure condition.
    expect(document.querySelectorAll(".programme-months li")).toHaveLength(5);
    expect(document.querySelectorAll(".programme-months__fail")).toHaveLength(5);

    expect(document.querySelectorAll(".programme-fit__limit")).toHaveLength(4);
    expect(document.querySelectorAll(".programme-questions > div")).toHaveLength(6);
    expect(document.querySelectorAll(".programme-withheld article")).toHaveLength(4);

    // Document control pins the page to the same release record as the rest of
    // the site, and states the legal position rather than leaving it blank.
    const control = document.querySelector(".programme-control");
    expect(control).toHaveTextContent("R5B6A1_3");
    expect(control).toHaveTextContent("NOT INCORPORATED");
    expect(control).toHaveTextContent("rusfbm@gmail.com");
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
      "Persistent policy learning: NOT STARTED",
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
    expect(screen.getByRole("table", { name: "The release counts are derived in this order" })).toHaveTextContent(
      "1,204556 + 6 × 108",
    );
    expect(screen.getByText("TARGET ARCHITECTURE · NOT CURRENT V4")).toBeInTheDocument();
    expect(screen.getByText(/process-local; it does not establish durable trust state/i)).toBeInTheDocument();
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
    expect(document.querySelector(".term-hero__tags")?.textContent).toContain(
      "Project term, not standard mathematics",
    );
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
    expect(screen.getByRole("link", { name: /Left zero/i })).toHaveAttribute("href", "/term/left-zero");
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
    expect(document.querySelectorAll(".comparison-table tbody tr")).toHaveLength(10);
    expect(screen.getByRole("rowheader", { name: "Breadth today" })).toBeInTheDocument();
    expect(screen.getByText(/A language model handles open-ended tasks/i)).toBeInTheDocument();
    expect(
      screen.getByText(/no language understanding at all\. This is the honest shape of the trade/i),
    ).toBeInTheDocument();

    expect(document.querySelector(".galo-figure--machines")).toBeInTheDocument();
    expect(document.querySelector(".galo-figure--answers")).toBeInTheDocument();
    expect(document.querySelector(".galo-figure--complement")).toBeInTheDocument();

    expect(document.querySelectorAll(".landscape-card")).toHaveLength(9);
    expect(screen.getByRole("heading", { level: 3, name: "Proof assistants" })).toBeInTheDocument();
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
      screen.getByRole("heading", { level: 1, name: "What we do, said the way you would say it to a friend." }),
    ).toBeInTheDocument();

    expect(document.querySelectorAll(".plain-story > li")).toHaveLength(4);
    expect(document.querySelectorAll(".plain-idea > article")).toHaveLength(3);
    expect(document.querySelectorAll(".plain-changes > article")).toHaveLength(3);
    expect(document.querySelectorAll(".plain-honest > article")).toHaveLength(5);
    expect(document.querySelectorAll(".plain-jargon > div")).toHaveLength(10);

    // The page reuses the two figures a newcomer can read without help, and adds none
    // of the ones that assume the vocabulary.
    expect(document.querySelector(".galo-figure--trace")).toBeInTheDocument();
    expect(document.querySelector(".galo-figure--bridge")).toBeInTheDocument();
    expect(document.querySelector(".galo-figure--tiers")).not.toBeInTheDocument();

    expect(screen.getByText("It is small. Much smaller than it sounds.")).toBeInTheDocument();
    expect(screen.getByText("It does not replace the chatbots you have used.")).toBeInTheDocument();
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute("href", "https://aigalo.com/simple");

    for (const link of Array.from(document.querySelectorAll<HTMLAnchorElement>('.math-contents a[href^="#"]'))) {
      const target = link.getAttribute("href")?.slice(1) ?? "";
      expect(document.getElementById(target), `Missing plain-words target #${target}`).toBeInTheDocument();
    }
  });

  it("carries the plain-words route into every locale", () => {
    for (const [path, heading] of [
      ["/ru/simple", "Чем мы занимаемся — так, как рассказали бы это другу."],
      ["/zh/simple", "我们在做什么——就像跟朋友讲的那样。"],
      ["/ar/simple", "ما نفعله، مقولًا كما تقوله لصديق."],
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
        name: "What this is, what exists, and what would tell you it is not worth your time.",
      }),
    ).toBeInTheDocument();

    expect(document.querySelectorAll(".one-minute > article")).toHaveLength(3);
    expect(document.querySelectorAll(".one-minute__facts > article")).toHaveLength(4);
    expect(document.querySelectorAll(".investor-problems > article")).toHaveLength(4);
    expect(document.querySelectorAll(".investor-fit > article")).toHaveLength(4);
    expect(document.querySelectorAll(".stage-facts > article")).toHaveLength(8);
    expect(document.querySelectorAll(".risk-register > article")).toHaveLength(6);
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
    expect(screen.getByRole("link", { name: /Explain it in plain words/i })).toBeInTheDocument();
  });

  it("carries the investor and audit routes into every locale", () => {
    for (const [path, heading] of [
      ["/ru/investors", "Что это, что уже работает и что подскажет, что дальше можно не тратить время."],
      ["/zh/investors", "这是什么、有什么，以及什么会告诉你它不值得你花时间。"],
      ["/ar/audit", "ما الذي يستطيع مراجع خارجي متشكّك إثباته هنا، وما الذي لا يستطيعه أحد."],
      ["/ru/audit", "Что здесь можно проверить самому — и чего не проверит никто."],
    ] as const) {
      setPath(path);
      const view = render(<App />);
      expect(screen.getByRole("heading", { level: 1, name: heading })).toBeInTheDocument();
      view.unmount();
    }
  });

  it("gives the thinking schemes their own route with every stage and gate on the page", () => {
    setPath("/thinking");
    render(<App />);

    expect(
      screen.getByRole("heading", { level: 1, name: "The thinking schemes, drawn stage by stage." }),
    ).toBeInTheDocument();

    expect(document.querySelector(".galo-figure--pipeline")).toBeInTheDocument();
    expect(document.querySelector(".galo-figure--gates")).toBeInTheDocument();
    expect(document.querySelector(".galo-figure--loop")).toBeInTheDocument();
    expect(document.querySelector(".galo-figure--determinism")).toBeInTheDocument();
    expect(document.querySelector(".galo-figure--memory")).toBeInTheDocument();
    expect(document.querySelector(".galo-figure--funnel")).toBeInTheDocument();

    expect(document.querySelectorAll(".thinking-stages > article")).toHaveLength(9);
    expect(document.querySelectorAll(".thinking-stages > article.is-target")).toHaveLength(2);
    expect(document.querySelectorAll(".thinking-gates > article")).toHaveLength(5);
    expect(document.querySelectorAll(".thinking-registers > article")).toHaveLength(5);
    expect(document.querySelectorAll(".thinking-registers > article.is-dropped")).toHaveLength(2);
    expect(document.querySelectorAll(".thinking-table tbody tr")).toHaveLength(9);

    expect(screen.getByRole("table", { name: /accepted observation/i })).toBeInTheDocument();
    expect(screen.getByText("GALO thinks the way a person thinks.")).toBeInTheDocument();
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute("href", "https://aigalo.com/thinking");

    for (const link of Array.from(document.querySelectorAll<HTMLAnchorElement>('.math-contents a[href^="#"]'))) {
      const target = link.getAttribute("href")?.slice(1) ?? "";
      expect(document.getElementById(target), `Missing thinking target #${target}`).toBeInTheDocument();
    }
  });

  it("carries the thinking route into every locale", () => {
    for (const [path, heading] of [
      ["/ru/thinking", "Схемы мышления, нарисованные этап за этапом."],
      ["/zh/thinking", "思维图解，逐阶段画出来。"],
      ["/ar/thinking", "مخططات التفكير، مرسومة مرحلةً مرحلة."],
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
      screen.getByRole("heading", { level: 1, name: "Symmetries of the PLUS and STAR families." }),
    ).toBeInTheDocument();
    expect(screen.getByText("enumeration=224 · Burnside=224")).toBeInTheDocument();
    expect(screen.getByText(/Eighteen sums seven local groups/i)).toBeInTheDocument();
    expect(screen.getByText(/u=2: \{1,4\} → \{2,3\}/i)).toBeInTheDocument();

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
      ["/ru/symmetry", "Симметрии семейств PLUS и STAR.", "ltr"],
      ["/zh/symmetry", "PLUS 与 STAR 族的对称性。", "ltr"],
      ["/ar/symmetry", "تناظرات عائلتي PLUS وSTAR.", "rtl"],
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

  it("renders a complete Russian home route with localized navigation and contact", () => {
    setPath("/ru");
    render(<App />);
    expect(document.documentElement).toHaveAttribute("lang", "ru");
    expect(document.documentElement).toHaveAttribute("dir", "ltr");
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Искусственный интеллект, обязанный показать, почему он имел право так решить.",
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
    expect(screen.getByText("通用人工智能")).toBeInTheDocument();
    expect(screen.getByText("NOT CLAIMED")).toBeInTheDocument();
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
        name: "ذكاء اصطناعي مُلزَم بأن يُبيّن لماذا كان له الحقّ في أن يقرّر.",
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
