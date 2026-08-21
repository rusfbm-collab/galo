import { describe, expect, it } from "vitest";
import {
  autonomyLadder,
  evaluationArms,
  industrialWorkflow,
  integrationStack,
  offerLadder,
  partnerFit,
  promotionGates,
  stopRule,
  wedgeSeparation,
} from "../src/content/industrial";
import {
  learningBoundaries,
  learningContract,
  learningResults,
  sealedReplay,
} from "../src/content/learningEvidence";

/**
 * The industrial wedge is the one part of this site that talks about money, a
 * plant, and a machine that moves. Every sentence here is therefore a sentence
 * somebody could be hurt by if it drifted. These tests hold three lines:
 * the platform thesis is never collapsed into the product, nothing on the page
 * claims authority over a physical process, and the price rows stay labelled
 * as hypotheses rather than quietly becoming a price list.
 */

const AUTHORITY_CLAIM =
  /\b(deployed at|running in production|controls the (plant|line|robot)|replaces (SCADA|the PLC|the digital twin))\b/i;

describe("the platform thesis and the commercial wedge", () => {
  it("states both levels separately, so neither can be read as the other", () => {
    expect(wedgeSeparation).toHaveLength(3);
    const [thesis, wedge, purpose] = wedgeSeparation;
    expect(thesis!.value).toMatch(/general-purpose/i);
    expect(wedge!.value).toMatch(/industrial decision assurance/i);
    expect(purpose!.detail).toMatch(/falsifies an architecture/i);
    for (const row of wedgeSeparation) {
      expect(row.detail.length).toBeGreaterThan(120);
    }
  });

  it("never claims the architecture is proven by the wedge existing", () => {
    const all = wedgeSeparation.map((row) => `${row.value} ${row.detail}`).join(" ");
    expect(all).not.toMatch(AUTHORITY_CLAIM);
    expect(all).not.toMatch(/\bproven\b/i);
  });
});

describe("where GALO sits in a plant", () => {
  it("puts nine tiers in order, with the partner owning both ends", () => {
    expect(integrationStack).toHaveLength(9);
    expect(integrationStack[0]!.owner).toBe("partner");
    expect(integrationStack.at(-1)!.owner).toBe("partner");
    expect(integrationStack.filter((tier) => tier.owner === "boundary")).toHaveLength(1);
  });

  it("says in the tier list itself that nothing existing is replaced or written to", () => {
    expect(integrationStack[0]!.detail).toMatch(/replaces none of them/i);
    expect(integrationStack.at(-1)!.detail).toMatch(/no current or proposed path writes to them/i);
  });

  it("names the systems an operator would recognise", () => {
    const tiers = integrationStack.map((tier) => tier.tier).join(" | ");
    for (const name of ["SCADA", "PLC", "MES", "ERP", "historian"]) {
      expect(tiers).toContain(name);
    }
  });
});

describe("one evaluated decision", () => {
  it("walks seven steps and numbers them in order", () => {
    expect(industrialWorkflow).toHaveLength(7);
    expect(industrialWorkflow.map((step) => step.number)).toEqual(["01", "02", "03", "04", "05", "06", "07"]);
    expect(industrialWorkflow.map((step) => step.title)).toEqual([
      "Observe",
      "Propose",
      "Commit",
      "Reveal",
      "Learn",
      "Verify",
      "Simulate",
    ]);
  });

  it("gives every step a partner system, a GALO artefact and a control", () => {
    for (const step of industrialWorkflow) {
      // "TRAIN split only." is legitimately terse; the bar is here to catch a
      // placeholder, not to force a sentence where a phrase is the honest answer.
      expect(step.partnerSystem.length).toBeGreaterThan(15);
      expect(step.galoArtifact.length).toBeGreaterThan(20);
      expect(step.control.length).toBeGreaterThan(20);
      for (const cell of [step.partnerSystem, step.galoArtifact, step.control]) {
        expect(cell.endsWith(".")).toBe(true);
      }
    }
  });

  it("keeps actuation out of the run and says so in a control line", () => {
    const controls = industrialWorkflow.map((step) => step.control).join(" ");
    expect(controls).toMatch(/no real actuation happens/i);
  });
});

describe("the autonomy ladder", () => {
  it("has five rungs, lettered A to E, and not one of them runs today", () => {
    expect(autonomyLadder.map((rung) => rung.code)).toEqual(["A", "B", "C", "D", "E"]);
    expect(autonomyLadder.some((rung) => rung.status === "runs today")).toBe(false);
  });

  it("gates every rung with evidence rather than a date", () => {
    for (const rung of autonomyLadder) {
      expect(rung.gate.length).toBeGreaterThan(40);
      expect(rung.gate).not.toMatch(/\b(Q[1-4]|month|202\d|by \d)\b/i);
    }
  });

  it("hardens the two rungs that would touch a machine", () => {
    const supervisory = autonomyLadder.find((rung) => rung.code === "C")!;
    const robotics = autonomyLadder.find((rung) => rung.code === "D")!;
    expect(supervisory.status).toBe("gated");
    expect(robotics.status).toBe("gated");
    expect(robotics.role).toMatch(/above the vendor's controller/i);
    expect(robotics.gate).toMatch(/certified interlocks/i);
  });
});

describe("the offer ladder", () => {
  it("lists five rungs and gives each a duration and a proof", () => {
    expect(offerLadder).toHaveLength(5);
    for (const rung of offerLadder) {
      expect(rung.duration.length).toBeGreaterThan(4);
      expect(rung.proof.length).toBeGreaterThan(30);
    }
  });

  it("prices the first two rungs in AED and leaves the rest open", () => {
    expect(offerLadder[0]!.price).toMatch(/^AED /);
    expect(offerLadder[0]!.duration).toBe("6–8 weeks");
    expect(offerLadder[1]!.price).toMatch(/^AED /);
    expect(offerLadder.at(-1)!.price).not.toMatch(/^AED /);
  });

  it("never presents a number as a rate card, a discount or an agreed figure", () => {
    const prices = offerLadder.map((rung) => `${rung.price} ${rung.duration}`).join(" ");
    expect(prices).not.toMatch(/\b(discount|list price|rate card|starting at|agreed|signed)\b/i);
  });
});

describe("the admission gate", () => {
  it("gives five criteria, each with the reason and the thing that rules a plant out", () => {
    expect(partnerFit).toHaveLength(5);
    for (const line of partnerFit) {
      expect(line.why.length).toBeGreaterThan(40);
      expect(line.disqualifier.length).toBeGreaterThan(30);
    }
  });

  it("disqualifies a partner who wants unsupervised control immediately", () => {
    const disqualifiers = partnerFit.map((line) => line.disqualifier).join(" ");
    expect(disqualifiers).toMatch(/immediate unsupervised control/i);
  });
});

describe("the evaluation design", () => {
  it("runs seven arms, A0 through A6", () => {
    expect(evaluationArms.map((arm) => arm.code)).toEqual(["A0", "A1", "A2", "A3", "A4", "A5", "A6"]);
    for (const arm of evaluationArms) {
      expect(arm.isolates.length).toBeGreaterThan(20);
    }
  });

  it("keeps A1 as the same-mechanism comparator and A6 unpromotable", () => {
    expect(evaluationArms[1]!.definition).toMatch(/same engine/i);
    expect(evaluationArms[1]!.isolates).toMatch(/same-mechanism comparator/i);
    expect(evaluationArms.at(-1)!.definition).toMatch(/never promotable/i);
  });

  it("preregisters eight gates, including parity and zero false accepts", () => {
    expect(promotionGates).toHaveLength(8);
    const byMetric = new Map(promotionGates.map((gate) => [gate.metric, gate.condition]));
    expect(byMetric.get("Terminal parity")).toMatch(/exact equality/i);
    expect(byMetric.get("False accepts")).toBe("Zero.");
    expect(byMetric.get("Verified work")).toMatch(/CI95/);
  });

  it("writes the stop rule as a way to fail rather than a way to retry", () => {
    expect(stopRule).toMatch(/NOT_SUPPORTED/);
    expect(stopRule).toMatch(/protocol is not changed/i);
  });
});

describe("the sealed V75-V78 learning line", () => {
  it("publishes six sealed results and keeps the one the system refused", () => {
    expect(learningResults).toHaveLength(6);
    const refusals = learningResults.filter((row) => row.status === "TYPED REFUSAL, SEALED");
    expect(refusals.map((row) => row.task)).toEqual(["Nations"]);
    // JF17K-3 was withdrawn with the V67 line and must not reappear.
    expect(learningResults.map((row) => row.task)).not.toContain("JF17K-3");
  });

  it("gives every result a boundary, including the positive ones", () => {
    for (const row of learningResults) {
      expect(row.boundary.length).toBeGreaterThan(50);
      expect(row.establishes.length).toBeGreaterThan(30);
    }
  });

  it("keeps the superseded 0% on the benchmark that now learns", () => {
    // Kinship flipped from a flat negative to a positive when the mechanism
    // changed. Quietly replacing the old number would be the dishonest move.
    const kinship = learningResults.find((row) => row.task === "Kinship")!;
    expect(kinship.headline).toContain("57.4%");
    expect(kinship.boundary).toContain("0%");
    expect(kinship.boundary).toMatch(/stays in the archive rather than being dropped/i);
  });

  it("reads a refusal as a refusal rather than as a result in either direction", () => {
    const nations = learningResults.find((row) => row.task === "Nations")!;
    expect(nations.establishes).toMatch(/allowed to fail/i);
    expect(nations.boundary).toMatch(/no positive claim and no negative claim/i);
  });

  it("does not let the strongest number stand without its comparator or its scope", () => {
    const language = learningResults[0]!;
    expect(language.task).toBe("SIGMORPHON 2022");
    expect(language.headline).toContain("66.4%");
    expect(language.headline).toContain("57,755");
    // The saving has to be attributable to learning rather than to a smaller search.
    expect(language.establishes).toMatch(/38\.2% of words needed more than one check/i);
    expect(language.boundary).toMatch(/not a partner-controlled result/i);

    const synthetic = learningResults.at(-1)!;
    expect(synthetic.headline).toContain("60.9%");
    expect(synthetic.boundary).toMatch(/superseded in scope/i);
  });

  it("says the strong baseline was run and won, rather than leaving it untested", () => {
    // V61 records openly that on a full refit the strongest counting baseline
    // beats the tower tail on every external corpus. Claiming it was never
    // tested would be the flattering version.
    const umls = learningResults.find((row) => row.task === "UMLS")!;
    expect(umls.boundary).toMatch(/tested rather than left open/i);
    expect(umls.boundary).toMatch(/strongest counting baseline beats the tower tail/i);
    expect(umls.boundary).not.toMatch(/has not been tested/i);
  });

  it("publishes both campaigns wherever two were run, not the better one", () => {
    for (const task of ["UMLS", "Kinship", "WN18RR"]) {
      const row = learningResults.find((entry) => entry.task === task)!;
      expect(row.headline).toMatch(/with the key.*with it withheld/i);
      expect(row.headline).toContain("CI95");
    }
  });

  it("states what a reviewer can run without asking us for anything", () => {
    expect(sealedReplay).toHaveLength(3);
    const byLabel = new Map(sealedReplay.map((row) => [row.label, row.value]));
    expect(byLabel.get("Sealed experiments")).toBe("6");
    expect(byLabel.get("Independent audit checks")).toBe("18 / 18");
    expect(sealedReplay.map((row) => row.detail).join(" ")).toMatch(/bit-exact replays/i);
  });

  it("names the eight conditions before a work-reduction claim is made", () => {
    expect(learningContract).toHaveLength(8);
    const contract = learningContract.join(" ");
    expect(contract).toMatch(/heldout set is frozen/i);
    expect(contract).toMatch(/identical, not merely comparable/i);
    expect(contract).toMatch(/no oracle leak/i);
  });

  it("keeps the six boundaries that decide how these numbers may be quoted", () => {
    const byLabel = new Map(learningBoundaries.map((row) => [row.label, row.status]));
    expect(byLabel.get("Partner-controlled validity")).toBe("NOT PROVEN");
    expect(byLabel.get("Industrial and production autonomy")).toBe("NOT AUTHORIZED");
    expect(byLabel.get("Functional-safety certification")).toBe("NOT CLAIMED");
    expect(byLabel.get("Customers, letters of intent, revenue")).toBe("NONE");
    expect(byLabel.get("General AI")).toBe("NOT PROVEN");
    // The sealed secondary measurements did not turn this one into a claim.
    expect(byLabel.get("Tower-specific advantage")).toBe("NOT PROVEN");
    const tower = learningBoundaries.find((row) => row.label === "Tower-specific advantage")!;
    expect(tower.detail).toMatch(/uniquely beats a matched alternative is not claimed/i);
    // Associativity is sealed; embeddability is not, and the page may not merge them.
    expect(tower.detail).toMatch(/associatively under seal/i);
    expect(tower.detail).toMatch(/in development, where a seal is still the next step/i);
  });

  it("separates the frozen release from the prototype in the boundary text", () => {
    const autonomy = learningBoundaries.find((row) => row.label === "Industrial and production autonomy")!;
    expect(autonomy.detail).toMatch(/nothing here authorises a command/i);
    const general = learningBoundaries.find((row) => row.label === "General AI")!;
    expect(general.detail).toMatch(/design intention/i);
  });
});
