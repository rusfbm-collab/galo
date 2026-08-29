/**
 * The auditor's entry point.
 *
 * The question this file answers is not what GALO claims but what a sceptical
 * outsider can establish without trusting the project. Every tier, rule, and
 * question below is written so that the answer "you cannot check that from here"
 * appears as often as it is true.
 */

export type VerificationTier = {
  /** Untranslated tier code. */
  code: string;
  /** Untranslated short machine tag. */
  tag: string;
  label: string;
  means: string;
  example: string;
};

export const verificationTiers: readonly VerificationTier[] = [
  {
    code: "T1",
    tag: "in-page",
    label: "Recomputed in front of you",
    means:
      "The page you are reading regenerates the value from the stated law rather than quoting it from a document. If the law and the number disagreed, the page would show the disagreement.",
    example: "Every Cayley table, every per-level count, and the 560 oriented typed coordinates.",
  },
  {
    code: "T2",
    tag: "in-repo",
    label: "Reproducible from the published source",
    means:
      "A check runs on every build and fails the build when it does not hold. You can run the same command and get the same answer on your own machine.",
    example: "The claim-discipline scan, the test suite, and the localized route generation.",
  },
  {
    code: "T3",
    tag: "stored",
    label: "Recorded earlier, published with its scope",
    means:
      "A result produced at a stated time under stated conditions, republished without being re-run. It is evidence about that run and about nothing else.",
    example: "The cold rebuild that reconstructed all three prediction ledgers and matched them byte for byte.",
  },
  {
    code: "T4",
    tag: "external",
    label: "Not verifiable from this site at all",
    means:
      "Anything that would need data we do not hold, a runtime we could not run, or an evaluator who is not us. These are listed rather than quietly omitted.",
    example: "External operational gain, arbitrary free-text behaviour, and validity on a partner's own data.",
  },
];

export type ChainStep = {
  number: string;
  /** Untranslated field name, as it appears in the record. */
  field: string;
  question: string;
  detail: string;
};

export const evidenceChain: readonly ChainStep[] = [
  {
    number: "01",
    field: "claim",
    question: "What exactly is being asserted?",
    detail:
      "One sentence, in publishable form, with no adjective that a reader could interpret two ways. A claim that cannot be written this way is not published.",
  },
  {
    number: "02",
    field: "scope",
    question: "Over what, and under what conditions?",
    detail:
      "The level, the release, the accepted input contract, and the runtime. A claim quoted without its scope is the most common way a record on this site could be misused.",
  },
  {
    number: "03",
    field: "artifact",
    question: "What object would somebody inspect?",
    detail:
      "A generated table, a source file, a stored receipt, or a fingerprinted archive. If no object can be named, the claim goes into the not-proven column instead.",
  },
  {
    number: "04",
    field: "check",
    question: "What operation decides it?",
    detail:
      "Regeneration from the law, an exhaustive enumeration, a fingerprint comparison, or a replay. The operation is stated so a reader can run it rather than believe it.",
  },
  {
    number: "05",
    field: "status",
    question: "What did the check return?",
    detail:
      "PASS, BOUNDARY, NOT PROVEN, NOT STARTED, NOT PRESENT, or NOT CLAIMED. The negative statuses are published with the same weight as the positive one.",
  },
];

export type StatusRule = {
  code: string;
  rule: string;
  text: string;
};

export const statusRules: readonly StatusRule[] = [
  {
    code: "S1",
    rule: "A status without its scope means nothing.",
    text: "PASS answers a specific question about a specific object at a specific release. Quoting the word on its own turns a narrow result into a broad impression, which is exactly the failure this site is built to avoid.",
  },
  {
    code: "S2",
    rule: "A result on one layer does not transfer to another.",
    text: "The formal mathematics, the compatibility record, and the engine running today are separate layers. A proof about the algebra says nothing about the runtime, and a passing runtime check proves nothing about the algebra.",
  },
  {
    code: "S3",
    rule: "BOUNDARY is not a softer PASS.",
    text: "It means a required condition was missing, blocked, or outside the tested scope. Treated as a pass, it would be the single most misleading line on the page, so it is given its own status and its own colour.",
  },
  {
    code: "S4",
    rule: "NOT PROVEN is a statement about evidence, not about falsity.",
    text: "It says nobody established the thing here. It does not say the thing is false. We publish it so the gap is visible instead of being guessed at from our silence.",
  },
];

export type AuditorQuestion = {
  number: string;
  question: string;
  answerToday: string;
  howToCheck: string;
};

export const auditorQuestions: readonly AuditorQuestion[] = [
  {
    number: "01",
    question: "What exactly is the object being audited?",
    answerToday:
      "A finite algebra, a compatibility record kept for comparison, and one narrow execution slice built on the algebra. Three objects, deliberately not merged.",
    howToCheck:
      "Open the evidence page: each of the four work tracks names its own state and the milestone it has actually reached, and none of them borrows a milestone from another.",
  },
  {
    number: "02",
    question: "Is the set of possible actions finite and fixed before the run?",
    answerToday:
      "Yes, per run. The set of possible answers is closed from the training split before the test split is read, and it held 25, 55 and 122 outcomes on the three published runs.",
    howToCheck:
      "The counts are regenerated on the page from the release contract. Recompute them from the stated arithmetic and compare digit by digit.",
  },
  {
    number: "03",
    question: "Can one decision be reproduced by somebody who was not there?",
    answerToday:
      "Within the current scope, yes. The ordering input is a hash over the observation, the candidate identifier, and the ordinal, and all three appear in the record.",
    howToCheck:
      "Take a stored receipt, recompute the ordering from its own fields, and confirm you reach the same candidate without access to the original machine.",
  },
  {
    number: "04",
    question: "What happens when the system cannot act?",
    answerToday:
      "It stops at a named gate and writes that gate into the record. There is no fallback branch and no best-effort answer.",
    howToCheck:
      "Read the five refusal gates on the thinking page, then look for the corresponding refusal fields in the receipt structure.",
  },
  {
    number: "05",
    question: "Is anything learned or accumulated between runs?",
    answerToday:
      "No. Semantic reads, rank effects, and learning writes are all held at zero, and no trained world model is present.",
    howToCheck:
      "These are published as counters rather than as prose. Confirm they are zero in the release evidence, and treat any future non-zero value as a change of claim.",
  },
  {
    number: "06",
    question: "Which published numbers are recomputed, and which are quoted?",
    answerToday:
      "Structural counts are recomputed by the page. Replay results are quoted from a stored receipt and labelled as stored.",
    howToCheck:
      "Use the four verification tiers above. Anything in the stored tier is evidence about one earlier run and must not be read as a fresh result.",
  },
  {
    number: "07",
    question: "What is explicitly outside the tested scope?",
    answerToday:
      "Arbitrary free-text behaviour, partner-controlled operational validity, a trained Atlas in the release, persistent policy, and general intelligence.",
    howToCheck:
      "Each one is published with its own status on the evidence page. Ask for any of them to be demonstrated and expect the answer to match the published status exactly.",
  },
  {
    number: "08",
    question: "What would a failed audit look like here?",
    answerToday:
      "A published count that does not reproduce, a status quoted without its scope, or a stored result presented as a fresh one.",
    howToCheck:
      "All three are cheap to test. The first takes an afternoon, and the other two take one careful reading of the evidence page.",
  },
];

export type ReproductionStep = {
  number: string;
  action: string;
  expected: string;
};

export const reproductionSteps: readonly ReproductionStep[] = [
  {
    number: "01",
    action: "Take the two published laws and generate the tables for one level yourself.",
    expected: "Your table matches the one this site draws, cell for cell, with no exception anywhere in the grid.",
  },
  {
    number: "02",
    action: "Count the oriented typed coordinates from your own tables.",
    expected: "You reach 560 across L1–L7, of which 556 are active in the runtime range.",
  },
  {
    number: "03",
    action: "Reconstruct the selector arithmetic from the published increments.",
    expected:
      "You reach the same closed answer sets — 25, 55 and 122 outcomes — and the same digest for each, computed from the training split alone.",
  },
  {
    number: "04",
    action: "Compare the archive fingerprint you were sent with the one published here.",
    expected: "The two strings are identical, or the artefact is not the one this site describes.",
  },
  {
    number: "05",
    action: "Replay a stored receipt and compare its fields with the record.",
    expected:
      "Checks, work units, and outcome agree. A disagreement is a specific line you can name rather than a general doubt.",
  },
];

export const auditLimits = [
  "You cannot establish from this site that the engine behaves well on any input outside its two accepted patterns, because it does not accept any.",
  "You cannot establish operating-system level isolation of the executing process; that is published as not proven.",
  "You cannot establish a fresh full replay on the runtime that was unavailable; that is published as blocked, not as a pass.",
  "You cannot establish any external operational result, because no such measurement has been made by anybody.",
  "You cannot establish independence of the checking, because every check published here is run by the project's own build.",
] as const;

export const auditTranslationKeys = [
  ...new Set([
    ...verificationTiers.flatMap((tier) => [tier.label, tier.means, tier.example]),
    ...evidenceChain.flatMap((step) => [step.question, step.detail]),
    ...statusRules.flatMap((rule) => [rule.rule, rule.text]),
    ...auditorQuestions.flatMap((entry) => [entry.question, entry.answerToday, entry.howToCheck]),
    ...reproductionSteps.flatMap((step) => [step.action, step.expected]),
    ...auditLimits,
  ]),
] as const;
