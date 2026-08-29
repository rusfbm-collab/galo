import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { App } from "../src/app/App";
import { cayleyTableEntries, richnessClaims } from "../src/content/cayleyTables";
import {
  applyGaloOperation,
  buildPairOrbit,
  buildPairStabilizer,
  countPairOrbitsByBurnside,
  countPairOrbitsByEnumeration,
  declaredTableCount,
  galoLevels,
  unitMultipliers,
} from "../src/content/mathematics";
import { compressionTotals, renamingCases } from "../src/content/automorphisms";

function openCayleyPage() {
  window.history.replaceState({}, "", "/cayley");
  return render(<App />);
}

describe("the Cayley tables page", () => {
  afterEach(cleanup);

  it("prints one table for every level of both towers", () => {
    expect(cayleyTableEntries).toHaveLength(declaredTableCount);
    expect(cayleyTableEntries.filter((entry) => entry.operation === "PLUS")).toHaveLength(galoLevels.length);
    expect(cayleyTableEntries.filter((entry) => entry.operation === "STAR")).toHaveLength(galoLevels.length);

    openCayleyPage();
    // Fourteen tables on the page, and every one of them a real HTML table so a
    // screen reader and a printout both get rows, columns and headers.
    expect(document.querySelectorAll("table.cayley-table")).toHaveLength(declaredTableCount);
  });

  it("fills every cell of every table from the laws rather than from a list", () => {
    openCayleyPage();
    for (const entry of cayleyTableEntries) {
      const card = document.getElementById(`${entry.operation.toLowerCase()}-l${entry.level}`);
      expect(card, `${entry.operation} L${entry.level}`).toBeInTheDocument();

      const rows = card!.querySelectorAll("tbody tr");
      expect(rows, `${entry.operation} L${entry.level}`).toHaveLength(entry.level);

      rows.forEach((row, left) => {
        const cells = row.querySelectorAll("td");
        expect(cells).toHaveLength(entry.level);
        cells.forEach((cell, right) => {
          expect(cell.textContent).toBe(String(applyGaloOperation(entry.operation, entry.level, left, right)));
        });
      });
    }
  });

  it("gives every table a worked lookup whose answer is the cell it points at", () => {
    for (const entry of cayleyTableEntries) {
      for (const trace of entry.traces) {
        // The trace is the page's explanation of the lookup. If its stated answer
        // ever drifts from the tables, the explanation is teaching the wrong thing.
        expect(applyGaloOperation(entry.operation, entry.level, trace.left, trace.right), entry.operation).toBe(
          trace.result,
        );
        expect(trace.lines.length).toBeGreaterThanOrEqual(3);
      }
    }
  });

  it("gives STAR two traces and PLUS one, because STAR has two rules", () => {
    for (const entry of cayleyTableEntries) {
      if (entry.operation === "PLUS") {
        expect(entry.traces, `PLUS L${entry.level}`).toHaveLength(1);
        continue;
      }
      // The single-pole level has no second row to differ in.
      expect(entry.traces.length, `STAR L${entry.level}`).toBe(entry.level === 1 ? 1 : 2);
    }

    // The absorbing trace comes first, because it is the rule that makes this a
    // different tower rather than a second copy of the first.
    for (const entry of cayleyTableEntries.filter((row) => row.operation === "STAR" && row.level > 1)) {
      expect(entry.traces[0]!.left, `STAR L${entry.level}`).toBe(0);
      expect(entry.traces[0]!.result, `STAR L${entry.level}`).toBe(0);
      expect(entry.traces[1]!.left, `STAR L${entry.level}`).not.toBe(0);
      // Both traces landing on the same pole would hide the difference they exist to show.
      expect(entry.traces[1]!.result, `STAR L${entry.level}`).not.toBe(entry.traces[0]!.result);
    }
  });

  it("marks the traced cell and shades the absorbing row", () => {
    openCayleyPage();
    const star = document.getElementById("star-l5")!;
    // The absorbing row is the whole difference between the towers, so it is
    // visible before a reader has been told about it.
    expect(star.querySelectorAll("td.is-absorbing")).toHaveLength(5);
    expect(star.querySelectorAll("td.is-traced")).toHaveLength(1);

    const plus = document.getElementById("plus-l5")!;
    expect(plus.querySelectorAll("td.is-absorbing")).toHaveLength(0);
    expect(plus.querySelectorAll("td.is-traced")).toHaveLength(1);
  });

  it("switches the traced cell when a reader takes the other rule", async () => {
    const user = userEvent.setup();
    openCayleyPage();
    const star = document.getElementById("star-l5")!;

    const tabs = within(star).getAllByRole("tab");
    expect(tabs).toHaveLength(2);
    expect(star.querySelector("td.is-traced")?.textContent).toBe("0");

    await user.click(tabs[1]!);
    // The stepping row answers somewhere other than P0, which is the point of
    // being able to switch at all.
    expect(star.querySelector("td.is-traced")?.textContent).not.toBe("0");
  });

  it("carries six checkable reasons, each with the check attached", () => {
    expect(richnessClaims).toHaveLength(6);
    for (const claim of richnessClaims) {
      expect(claim.mechanism.length).toBeGreaterThan(200);
      // A claim whose check is shorter than a sentence is not a check.
      expect(claim.check.length).toBeGreaterThan(80);
    }
    openCayleyPage();
    expect(document.querySelectorAll(".cayley-richness article")).toHaveLength(6);
  });

  it("is reachable from the pages a reader would arrive from", () => {
    for (const path of ["/math", "/theory", "/symmetry"]) {
      cleanup();
      window.history.replaceState({}, "", path);
      render(<App />);
      const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href="/cayley"]'));
      expect(links.length, path).toBeGreaterThan(0);
    }
  });

  it("names itself in the site map so it is not an orphan", () => {
    openCayleyPage();
    const footer = document.querySelector("footer")!;
    expect(within(footer).getByText("Cayley tables")).toBeInTheDocument();
  });

  it("keeps the page's own claims free of run figures", () => {
    openCayleyPage();
    const main = document.querySelector("main")?.textContent ?? "";
    // This page is algebra. The measured figures belong to the runs and travel
    // with their scope, which is on a different page.
    for (const runFigure of ["2,275", "1,953", "89.1%", "97.0%"]) {
      expect(main, runFigure).not.toContain(runFigure);
    }
  });

  it("shows every level's table space beside the two that were declared", () => {
    openCayleyPage();
    // The comparison is the argument for the tables being a commitment rather
    // than a convenience, so it travels with every table.
    expect(document.querySelectorAll(".cayley-card__space")).toHaveLength(declaredTableCount);
    expect(screen.getAllByText(/Declared and frozen: 2/).length).toBe(declaredTableCount);
  });
});

describe("the automorphism subsection", () => {
  afterEach(cleanup);

  it("passes a unit multiplier and fails a non-unit, computed rather than asserted", () => {
    expect(renamingCases).toHaveLength(2);
    const [passing, failing] = renamingCases;

    // The lane that passes has to actually pass: no counterexample, and a
    // multiplier coprime to the level.
    expect(passing!.isUnit).toBe(true);
    expect(passing!.counterexample).toBeNull();
    expect(new Set(passing!.images).size).toBe(passing!.level);

    // The lane that fails has to fail for the reason the copy gives: two poles
    // sent to one name, not a subtler breach.
    expect(failing!.isUnit).toBe(false);
    expect(failing!.counterexample).not.toBeNull();
    expect(new Set(failing!.images).size).toBeLessThan(failing!.level);
  });

  it("agrees with the laws on which multipliers are automorphisms", () => {
    for (const level of galoLevels) {
      for (let multiplier = 0; multiplier < level; multiplier += 1) {
        const images = Array.from({ length: level }, (_, pole) => (multiplier * pole) % level);
        const bijective = new Set(images).size === level;

        let preserves = true;
        for (const operation of ["PLUS", "STAR"] as const) {
          for (let left = 0; left < level && preserves; left += 1) {
            for (let right = 0; right < level && preserves; right += 1) {
              const mapped = (multiplier * applyGaloOperation(operation, level, left, right)) % level;
              const direct = applyGaloOperation(operation, level, images[left]!, images[right]!);
              if (mapped !== direct) preserves = false;
            }
          }
        }

        // Preserving the laws is necessary and not sufficient, which is what the
        // page's definition has to say: the constant map to P0 preserves both
        // laws perfectly and renames nothing. An automorphism is a bijection
        // that preserves, and for these tables that is exactly a unit.
        expect(bijective && preserves, `L${level} ×${multiplier}`).toBe(bijective);
        expect(unitMultipliers(level).includes(multiplier), `L${level} ×${multiplier}`).toBe(bijective);
      }
    }
  });

  it("knows that preserving the laws alone does not make an automorphism", () => {
    // The trivial map sending every pole to P0 satisfies both law conditions and
    // is not a renaming. If the page only tested the laws it would call this an
    // automorphism, so the definition names both conditions.
    for (const level of galoLevels.filter((value) => value > 1)) {
      let preserves = true;
      for (const operation of ["PLUS", "STAR"] as const) {
        for (let left = 0; left < level; left += 1) {
          for (let right = 0; right < level; right += 1) {
            if (applyGaloOperation(operation, level, 0, 0) !== 0) preserves = false;
          }
        }
      }
      expect(preserves, `L${level}`).toBe(true);
      expect(unitMultipliers(level).includes(0), `L${level}`).toBe(false);
    }
  });

  it("counts orbits the same way twice, at every level", () => {
    for (const level of galoLevels) {
      // The page prints both channels side by side and claims they agree. If
      // they ever did not, the claim would be the thing that was wrong.
      expect(countPairOrbitsByEnumeration(level), `L${level}`).toBe(countPairOrbitsByBurnside(level));
    }
  });

  it("compresses 560 typed coordinates to 224 orbits", () => {
    expect(compressionTotals.pairs).toBe(140);
    expect(compressionTotals.orbits).toBe(56);
    // Four typed families over the same pairs.
    expect(compressionTotals.pairs * 4).toBe(560);
    expect(compressionTotals.orbits * 4).toBe(224);
    // The copy says two coordinates in every five have to be settled separately.
    expect(compressionTotals.orbits / compressionTotals.pairs).toBeCloseTo(0.4, 3);
  });

  it("keeps orbit times stabiliser equal to the number of renamings", () => {
    for (const level of galoLevels) {
      const renamings = unitMultipliers(level).length;
      for (let source = 0; source < level; source += 1) {
        for (let active = 0; active < level; active += 1) {
          const orbit = buildPairOrbit(level, source, active).length;
          const stabiliser = buildPairStabilizer(level, source, active).length;
          expect(orbit * stabiliser, `L${level} (${source},${active})`).toBe(renamings);
        }
      }
    }
  });

  it("renders the subsection with all five scripts", () => {
    openCayleyPage();
    const section = document.getElementById("automorphisms");
    expect(section).toBeInTheDocument();
    // Two lanes of the definition, two ledgers, the Burnside working and the walk.
    expect(section!.querySelectorAll(".auto-case")).toHaveLength(2);
    expect(section!.querySelectorAll(".auto-table").length).toBeGreaterThanOrEqual(3);
    expect(section!.querySelectorAll(".auto-script").length).toBeGreaterThanOrEqual(4);
    expect(section!.querySelectorAll(".auto-uses article")).toHaveLength(4);
  });

  it("marks the broken cells only in the lane that breaks", () => {
    openCayleyPage();
    const lanes = Array.from(document.querySelectorAll(".auto-case"));
    const passing = lanes.find((lane) => lane.classList.contains("is-pass"))!;
    const failing = lanes.find((lane) => lane.classList.contains("is-fail"))!;
    expect(passing.querySelectorAll("td.is-broken")).toHaveLength(0);
    expect(failing.querySelectorAll("td.is-broken").length).toBeGreaterThan(0);
    // And the collision is marked where it happens, before any law is tested.
    expect(failing.querySelectorAll(".auto-case__map span.is-collision").length).toBeGreaterThan(0);
  });
});
