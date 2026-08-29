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
  /** The action a sceptic takes to settle this one, phrased as an instruction. */
  auditStep: string;
  href: string;
  hrefLabel: string;
};

export const headlineClaims: readonly HeadlineClaim[] = [
  {
    word: "Allowed",
    claim: "The list of permitted actions is closed before the run, not reconstructed after it.",
    mechanism:
      "The set of possible answers is closed from the training data before the test data is read, and its digest is published with the run. An outcome outside that set cannot be produced; the row becomes a boundary and is written down.",
    limit:
      "The list is small and declared by hand. How far it can be widened before declaring it stops being practical is open work, not a solved problem.",
    auditStep:
      "Rebuild the answer set from the training split yourself and count it. The published figures are 25, 55 and 122 outcomes with a digest each; a different count is a finding you can name and we would have to answer.",
    href: "/evidence",
    hrefLabel: "See the declared universe and how it is counted",
  },
  {
    word: "Decide",
    claim: "The record names the option that was taken and the options that were open at that moment.",
    mechanism:
      "Counting memory orders the whole closed answer set, and the top of that order is published only if three separate rights were bought. The same input gives the same outcome on any machine.",
    limit:
      "There is no learned preference and no natural-language reason. The engine chooses inside a declared set; it does not judge what the set should have contained.",
    auditStep:
      "Run the same source pattern twice on different machines and compare the chosen candidate. Anything but an identical result falsifies the claim outright.",
    href: "/thinking",
    hrefLabel: "Follow one decision from input to record",
  },
  {
    word: "Show",
    claim: "A stranger can repeat the run without asking us for anything, and compare it step by step.",
    mechanism:
      "Each evaluated row leaves a receipt — 2,275 of them across three runs, answered or refused — and every corpus file verifies byte for byte against a named upstream commit.",
    limit:
      "What is published is stored release evidence; fresh FULL was not run. External operational gain is not measured, and nothing here is a benchmark result.",
    auditStep:
      "Take a published receipt, replay it, and compare it field by field. What you cannot settle from here is a fresh full run, because that evidence is stored rather than live.",
    href: "/audit",
    hrefLabel: "Reproduce it in five steps",
  },
] as const;

export const headlineClaimTranslationKeys = headlineClaims.flatMap((entry) => [
  entry.word,
  entry.claim,
  entry.mechanism,
  entry.limit,
  entry.auditStep,
  entry.hrefLabel,
]);
