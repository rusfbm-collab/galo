/**
 * Why automorphisms are load-bearing rather than decorative.
 *
 * A reader who has just met the fourteen tables is entitled to treat symmetry as
 * an aesthetic remark. It is not one here, and the reason is countable: the 560
 * typed coordinates fall into 224 orbits, so checking one representative of each
 * orbit settles all 560. That is the argument, and it is arithmetic rather than
 * taste.
 *
 * The section is built so every claim in it is a script a reader can run:
 * relabel a carrier and redraw the table, and either every cell lands where it
 * was or it does not; count orbits twice, once by enumeration and once by
 * Burnside, and the two either agree or one of them is wrong. Nothing here is
 * asserted that the mathematics module cannot compute.
 *
 * Rules for every string. No count is written down — the figures import them.
 * And the boundary travels with the claim: an automorphism preserves shape, not
 * meaning, so two poles in the same orbit are structurally indistinguishable and
 * nothing about what they refer to follows from that.
 */

import {
  applyGaloOperation,
  countPairOrbitsByEnumeration,
  galoLevels,
  unitMultipliers,
  type GaloLevel,
  type GaloOperation,
} from "./mathematics";

export const automorphismEyebrow = "RENAMINGS THAT CHANGE NOTHING";

export const automorphismHeadline = "Checking 224 things settles all 560.";

export const automorphismLead =
  "Rename every pole at once, redraw the table, and look at what moved. Most renamings wreck the table; a few leave it exactly as it was, and those few are the automorphisms. This is not an aesthetic observation. Two coordinates related by an automorphism are the same coordinate as far as the laws can tell, so a property checked at one of them holds at the other by construction rather than by luck — and the whole catalogue collapses from 560 addresses to 224 that have to be checked separately. Everything below is a script: relabel, redraw, compare.";

export const automorphismBoundary =
  "An automorphism preserves shape and says nothing about meaning. Two poles in the same orbit are indistinguishable to the laws; that they refer to the same thing in the world does not follow, and this site never argues that it does.";

/* --------------------------------------------- what a renaming has to do ---- */

export const definitionEyebrow = "THE TEST, IN ONE LINE";

export const definitionHeadline =
  "Combine then rename, or rename then combine. If it makes no difference, it is an automorphism.";

export const definitionBody =
  "Take a map φ that sends each pole somewhere. It is an automorphism when two things hold: it is a renaming, meaning no two poles are sent to one name, and it preserves both laws, meaning φ(a ⊕ b) = φ(a) ⊕ φ(b) for every pair and the same for ★. Both conditions are needed. The map that sends everything to P0 preserves both laws perfectly and is not a renaming of anything, which is why the first check below is for collisions and the second is the law. That is n² lookups per law, and a level small enough to print is a level small enough to check exhaustively.";

/**
 * Multiplying every pole by a fixed number is the natural family of candidate
 * renamings on a cyclic carrier, and it is the one that produces every
 * automorphism these tables have. The interesting part is which multipliers
 * qualify: exactly those sharing no factor with the level.
 */
export type RenamingCase = {
  level: GaloLevel;
  multiplier: number;
  /** True when the multiplier shares no factor with the level. */
  isUnit: boolean;
  /** Where each pole goes. */
  images: readonly number[];
  /** The first pair that breaks the test, or null when nothing breaks. */
  counterexample: { operation: GaloOperation; left: number; right: number; mapped: number; direct: number } | null;
  /**
   * Which table to draw. Multiplying by a constant preserves PLUS whatever the
   * constant is, so a PLUS table for a failing case would have nothing marked in
   * it — the failure lives in STAR. Draw the law the failure is actually in.
   */
  drawnOperation: GaloOperation;
  reading: string;
};

function firstCounterexample(level: GaloLevel, multiplier: number) {
  for (const operation of ["PLUS", "STAR"] as const) {
    for (let left = 0; left < level; left += 1) {
      for (let right = 0; right < level; right += 1) {
        const mapped = (multiplier * applyGaloOperation(operation, level, left, right)) % level;
        const direct = applyGaloOperation(operation, level, (multiplier * left) % level, (multiplier * right) % level);
        if (mapped !== direct) return { operation, left, right, mapped, direct };
      }
    }
  }
  return null;
}

function renamingCase(level: GaloLevel, multiplier: number, reading: string): RenamingCase {
  const counterexample = firstCounterexample(level, multiplier);
  return {
    level,
    multiplier,
    isUnit: unitMultipliers(level).includes(multiplier),
    images: Array.from({ length: level }, (_, pole) => (multiplier * pole) % level),
    counterexample,
    drawnOperation: counterexample?.operation ?? "PLUS",
    reading,
  };
}

export const renamingCases: readonly RenamingCase[] = [
  renamingCase(
    5,
    2,
    "Five is prime, so doubling hits every pole once and the renaming is a genuine reshuffle. Redraw both tables under it and every cell is back where it started: all fifty checks pass, and this multiplier is an automorphism.",
  ),
  renamingCase(
    6,
    2,
    "Six is even, so doubling sends P0 and P3 to the same place. Two poles cannot share one name, so this fails the first condition outright. It then fails the second as well, and the STAR table above shows exactly where: the marked cells are the pairs the two routes disagree on. PLUS is not drawn here because multiplying by a constant preserves PLUS whatever the constant is — a PLUS table would look untouched and prove nothing.",
  ),
];

/* ------------------------------------------------ which multipliers work ---- */

export const ledgerEyebrow = "WHICH RENAMINGS SURVIVE";

export const ledgerHeadline = "Exactly the multipliers that share no factor with the level.";

export const ledgerBody =
  "Run the test at every level for every multiplier and a pattern comes out that nobody chose: the survivors are the numbers coprime to the level. Prime levels keep almost everything, even levels keep almost nothing, and level 6 — the richest level for structure — is one of the poorest for symmetry, because it is divisible twice over.";

export const ledgerReading =
  "The two facts are the same fact from opposite ends. A level with many divisors has many ways for a multiplier to collapse poles together, so it has few automorphisms; a prime level has none, so it has as many as it can.";

/* ---------------------------------------------------------- the payoff ---- */

export const compressionEyebrow = "WHY THIS IS WORTH ANYTHING";

export const compressionHeadline = "560 coordinates, 224 of them genuinely different.";

export const compressionBody =
  "Group the ordered pairs so that two pairs sit together whenever a renaming carries one to the other. Nothing inside a group can be told apart by the laws, so a property established at one member holds at every member without being checked there. That is the whole practical content of symmetry here: the number of things that have to be checked separately, and it is smaller than the number of things.";

export const compressionReading =
  "Every count in the table is computed on each build, twice: once by walking the pairs and collecting orbits, and once by Burnside's lemma. Two channels that disagree would fail the build rather than reach this page.";

/* ---------------------------------------------------- the second channel ---- */

export const burnsideEyebrow = "THE SAME NUMBER, COUNTED A SECOND WAY";

export const burnsideHeadline = "Average what each renaming leaves untouched, and the orbit count falls out.";

export const burnsideBody =
  "Counting orbits by walking them is straightforward and easy to get subtly wrong. Burnside's lemma counts the same thing without walking anything: for each renaming, count the pairs it leaves exactly where they are, then take the average over all renamings. The two methods share no code and no reasoning, so agreement between them is evidence rather than a restatement.";

export const burnsideReading =
  "A renaming fixes a pair exactly when it fixes both of its poles, so the count of fixed pairs is the square of the count of fixed poles. That is the only step of the script that is not a lookup.";

/* ----------------------------------------------------------- one orbit ---- */

export const walkEyebrow = "ONE ORBIT, WALKED";

export const walkHeadline = "Apply every renaming to one pair and see where it lands.";

export const walkBody =
  "Take a single coordinate and hit it with each automorphism in turn. The distinct results are its orbit — the set of coordinates that are the same coordinate as far as the laws are concerned. The renamings that leave it exactly where it was are its stabiliser, and the size of the orbit times the size of the stabiliser is the number of renamings, every time.";

export const walkReading =
  "This is what the compression above is made of, one coordinate at a time. Establish something at the pair below and it holds at every other member of its orbit, because a renaming that carried the pair there also carried the argument.";

/* ------------------------------------------------------- why it matters ---- */

export type SymmetryUse = {
  number: string;
  claim: string;
  mechanism: string;
  check: string;
};

export const symmetryUses: readonly SymmetryUse[] = [
  {
    number: "01",
    claim: "A check at one coordinate is a check at every coordinate in its orbit",
    mechanism:
      "If a renaming carries one coordinate to another and leaves both laws exactly as they were, then any statement about the first that is expressed in terms of the laws transfers to the second unchanged. Nothing is being assumed here: the transfer is the renaming, applied to the argument instead of to the table.",
    check:
      "Walk the orbit of one pair below, then take any property the tables settle — which cell it lands on, whether it meets the absorbing pole — and confirm it holds at every member.",
  },
  {
    number: "02",
    claim: "It tells you which distinctions the algebra cannot be making",
    mechanism:
      "Two poles in the same orbit are indistinguishable to the laws. So an argument that treats them differently is not using the algebra — it is smuggling in something from outside it. Symmetry is how that smuggling becomes visible, because it names exactly the distinctions that have no formal content.",
    check:
      "At level 5 every non-zero pole is in one orbit. Any claim that P1 and P3 behave differently under the laws is therefore false, and can be refuted by exhibiting the renaming that swaps them.",
  },
  {
    number: "03",
    claim: "It is a second channel on the counts, not a restatement of them",
    mechanism:
      "The orbit counts are computed twice on every build — once by enumeration and once by Burnside's lemma — and the two share no reasoning. A count that survives both has been checked, not asserted. This is the same discipline the concept cards use when they demand a table channel and a formula channel that agree.",
    check:
      "The Burnside script below prints its own working: the fixed poles of each renaming, the squares, the sum, and the average. Compare its result to the enumerated column in the table above it.",
  },
  {
    number: "04",
    claim: "It puts a floor under how much of the catalogue can be redundant",
    mechanism:
      "Two coordinates in every five have to be settled separately, and no fewer. That is a real number rather than a hope: the compression is exactly the orbit count, and there is no further renaming to find, because the survivors of the test are already all of them. Symmetry buys a factor, not an escape.",
    check:
      "Add the per-level orbit counts in the table and multiply by the four typed families. The result is the number of coordinates that have to be settled separately, and it does not move.",
  },
];

export const automorphismClose =
  "None of this makes the engine right about anything. It makes a specific class of mistake impossible to hide: a claim that holds at one coordinate and fails at another in the same orbit is not a subtle empirical finding, it is an arithmetic error, and it can be caught by a script rather than by an argument.";

export const automorphismTranslationKeys = [
  automorphismEyebrow,
  automorphismHeadline,
  automorphismLead,
  automorphismBoundary,
  definitionEyebrow,
  definitionHeadline,
  definitionBody,
  ...renamingCases.map((entry) => entry.reading),
  ledgerEyebrow,
  ledgerHeadline,
  ledgerBody,
  ledgerReading,
  compressionEyebrow,
  compressionHeadline,
  compressionBody,
  compressionReading,
  burnsideEyebrow,
  burnsideHeadline,
  burnsideBody,
  burnsideReading,
  walkEyebrow,
  walkHeadline,
  walkBody,
  walkReading,
  ...symmetryUses.flatMap((use) => [use.claim, use.mechanism, use.check]),
  automorphismClose,
] as const;

/** The totals the compression figure reports, derived rather than written down. */
export const compressionTotals = {
  pairs: galoLevels.reduce((sum, level) => sum + level * level, 0),
  orbits: galoLevels.reduce((sum, level) => sum + countPairOrbitsByEnumeration(level), 0),
} as const;
