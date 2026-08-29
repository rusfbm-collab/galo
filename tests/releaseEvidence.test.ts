import { createHash } from "node:crypto";
import { describe, expect, it } from "vitest";
import { claims } from "../src/content/claims";
import { releaseEvidence } from "../src/content/evidence";
import { benchmarkArithmetic, benchmarkOutcomes, benchmarkTotals, supersededSelector } from "../src/content/publicRun";
import { publicClaims } from "../src/content/publicClaims";
import replayData from "../src/data/controlled-replay.json";

describe("public run arithmetic", () => {
  it("accounts for every test row as either answered or refused", () => {
    for (const row of benchmarkArithmetic) {
      expect(row.answered + row.refused, row.corpus).toBe(row.rows);
      expect(row.correct, row.corpus).toBeLessThanOrEqual(row.answered);
    }
  });

  it("derives every published rate from its own counts", () => {
    // Compare the rate, not its formatting: the site writes 97.0% where the
    // arithmetic gives 97, and a formatting difference is not a wrong number.
    const rate = (shown: string | null) => (shown === null ? null : Number.parseFloat(shown));
    const expectRate = (shown: string | null, n: number, d: number, where: string) => {
      if (d === 0) {
        expect(shown, where).toBeNull();
        return;
      }
      expect(rate(shown), where).toBeCloseTo((n / d) * 100, 1);
    };
    for (const shown of benchmarkOutcomes) {
      const raw = benchmarkArithmetic.find((row) => row.corpus === shown.corpus);
      expect(raw, shown.corpus).toBeDefined();
      expect(shown.testRows, shown.corpus).toBe(raw!.rows.toLocaleString("en-US"));
      expect(shown.answered, shown.corpus).toBe(String(raw!.answered));
      expect(shown.refused, shown.corpus).toBe(String(raw!.refused));
      expect(shown.correct, shown.corpus).toBe(String(raw!.correct));
      expectRate(shown.coverage, raw!.answered, raw!.rows, `${shown.corpus} coverage`);
      expectRate(shown.overall, raw!.correct, raw!.rows, `${shown.corpus} overall`);
      // No average exists over nothing, so a benchmark that answered nowhere
      // publishes no selective figure rather than a zero.
      expectRate(shown.selective, raw!.correct, raw!.answered, `${shown.corpus} selective`);
    }
  });

  it("totals the three runs without rounding any of them away", () => {
    const sum = (key: "rows" | "answered" | "refused") =>
      benchmarkArithmetic.reduce((total, row) => total + row[key], 0);
    expect(benchmarkTotals.testRows).toBe(sum("rows").toLocaleString("en-US"));
    expect(benchmarkTotals.receipts).toBe(sum("rows").toLocaleString("en-US"));
    expect(benchmarkTotals.answered).toBe(sum("answered").toLocaleString("en-US"));
    expect(benchmarkTotals.refused).toBe(String(sum("refused")));
  });

  it("still reports the replay it did not complete", () => {
    expect(releaseEvidence.freshReplay.full).toBe("NOT COMPLETED");
  });

  it("keeps the superseded descriptor counts marked as history", () => {
    // They may stay on the site; they may not be restated as current.
    expect(supersededSelector.note).toContain("1,204");
    expect(supersededSelector.note).toMatch(/superseded/i);
    const currentCopy = [
      ...releaseEvidence.selector.map((entry) => `${entry.value} ${entry.label} ${entry.detail}`),
      ...releaseEvidence.metrics.map((entry) => `${entry.value} ${entry.label} ${entry.detail}`),
      ...releaseEvidence.current,
    ].join(" ");
    for (const stale of ["1,204", "880", "440", "1,366"]) {
      expect(currentCopy, stale).not.toContain(stale);
    }
  });

  it("keeps the internal and rendered claim registries aligned with exact terminal statuses", () => {
    expect(claims.map(({ id, publicCopy, status, source }) => ({ id, publicCopy, status, source }))).toEqual(
      publicClaims,
    );

    const statuses = Object.fromEntries(publicClaims.map(({ id, status }) => [id, status]));
    expect(statuses.C07_PERSISTENT_LEARNING_NOT_STARTED).toBe("not-started");
    expect(statuses.C08_TRAINED_ATLAS_NOT_PRESENT).toBe("not-present");
    expect(statuses.C09_EXTERNAL_GAIN_NOT_PROVEN).toBe("not-proven");
    expect(statuses.C10_GENERAL_AI_NOT_CLAIMED).toBe("not-claimed");
  });
});

describe("the home-page replay walkthrough", () => {
  // The card tells the reader the hex is the SHA-256 of the block above it. That
  // is only worth printing if it is true, so it is checked here rather than
  // maintained by hand.
  it("digests exactly the payload it renders", () => {
    for (const step of replayData.steps) {
      const rendered = JSON.stringify(step.payload, null, 2);
      expect(createHash("sha256").update(rendered).digest("hex"), step.id).toBe(step.digest);
    }
  });

  it("walks the current protocol rather than the superseded execution slice", () => {
    const prose = JSON.stringify(replayData);
    for (const stale of ["1204", "1,204", "880", "440", "4802", "R5B6A1_3", "TWO_FIXED_PATTERNS"]) {
      expect(prose, stale).not.toContain(stale);
    }
    // The terminal step keeps its boundary rather than closing on a pass.
    expect(replayData.steps.at(-1)?.status).toBe("BOUNDARY");
  });
});
