/**
 * The headline read back as three separate claims.
 *
 * "AI that has to show why it was allowed to decide" is a promise in three
 * parts — allowed, decide, show — and a reader is entitled to ask what backs
 * each one. Every entry here names the mechanism, the page where it can be
 * checked, and the part of the claim that is not yet earned. The limits are not
 * a disclaimer at the bottom; they sit in the same card as the claim.
 */

export type HeadlineClaim = {
  /** The word from the headline this card is answering for. */
  word: string;
  claim: string;
  /** What is actually built, in numbers that appear elsewhere on the site. */
  mechanism: string;
  /** What this does not amount to. */
  limit: string;
  href: string;
  hrefLabel: string;
};

export const headlineClaims: readonly HeadlineClaim[] = [
  {
    word: "Allowed",
    claim: "The list of permitted actions is closed before the run, not reconstructed after it.",
    mechanism:
      "The declared universe holds 1,204 descriptors, of which 880 are executable, and the whole of it is enumerated on every build. An action that is not in the list cannot be taken; the attempt is refused and written down.",
    limit:
      "The list is small and declared by hand. How far it can be widened before declaring it stops being practical is open work, not a solved problem.",
    href: "/evidence",
    hrefLabel: "See the declared universe and how it is counted",
  },
  {
    word: "Decide",
    claim: "The record names the option that was taken and the options that were open at that moment.",
    mechanism:
      "For each of the two fixed source patterns the selector narrows a 440-candidate frontier to one, in an order fixed by a hash rather than by a preference. The same input gives the same choice on any machine.",
    limit:
      "There is no learned preference and no natural-language reason. The engine chooses inside a declared set; it does not judge what the set should have contained.",
    href: "/thinking",
    hrefLabel: "Follow one decision from input to record",
  },
  {
    word: "Show",
    claim: "A stranger can repeat the run without asking us for anything, and compare it step by step.",
    mechanism:
      "Each step leaves a receipt, 4,802 internal work-unit identifiers are reconciled against their parts, and the bundled finite sample verifies against a release-pinned public key.",
    limit:
      "What is published is stored release evidence; fresh FULL was not run. External operational gain is not measured, and nothing here is a benchmark result.",
    href: "/audit",
    hrefLabel: "Reproduce it in five steps",
  },
] as const;

export const headlineClaimTranslationKeys = headlineClaims.flatMap((entry) => [
  entry.word,
  entry.claim,
  entry.mechanism,
  entry.limit,
  entry.hrefLabel,
]);
