import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { App } from "../src/app/App";
import { cayleyTableEntries, richnessClaims } from "../src/content/cayleyTables";
import { applyGaloOperation, declaredTableCount, galoLevels } from "../src/content/mathematics";

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
