/**
 * What the public artefact does today, in numbers.
 *
 * This replaces the descriptor arithmetic the site used to lead with — 1,204
 * committed, 880 executable, 440 on one pattern. Those counted a bounded
 * execution slice that learned nothing and accepted two fixed input patterns.
 * The artefact anybody can run now learns from a training split, evaluates a
 * held-out one, and writes one machine-readable receipt per test row. The old
 * counts are not wrong; they describe something that has been superseded, and
 * they stay in the archive rather than being quietly restated as current.
 *
 * Every figure here is the project running public corpora on its own machine.
 * None of it is a partner's data, a partner's evaluator, or an industrial
 * setting, and the section that says so travels with the numbers rather than
 * sitting three screens below them.
 */

export type BenchmarkOutcome = {
  /** The task, named for what it does rather than for the corpus it uses. */
  task: string;
  /** The public corpus, named because a reader has to be able to fetch it. */
  corpus: string;
  trainRows: string;
  testRows: string;
  /** How many distinct answers were possible, and where that set came from. */
  candidates: string;
  answered: string;
  refused: string;
  correct: string;
  coverage: string;
  overall: string;
  /** Null where nothing was answered, because an average over nothing is not zero. */
  selective: string | null;
  /** The one sentence a reader should take away from this row. */
  reading: string;
};

/**
 * Ordered by what a sceptical reader should meet first. The benchmark that
 * produced no answers at all is second rather than last: burying it would be
 * the exact move the coverage rule on the theory page exists to forbid.
 */
export const benchmarkOutcomes: readonly BenchmarkOutcome[] = [
  {
    task: "Relation labelling",
    corpus: "Kinship",
    trainRows: "8,544",
    testRows: "1,074",
    candidates: "25 labels, taken from the training split alone",
    answered: "957",
    refused: "117",
    correct: "141",
    coverage: "89.1%",
    overall: "13.1%",
    selective: "14.7%",
    reading:
      "Most questions were answered and most answers were wrong. Publishing the coverage beside the accuracy is what stops that reading as a 14.7% system.",
  },
  {
    task: "Relation labelling",
    corpus: "Nations",
    trainRows: "1,592",
    testRows: "201",
    candidates: "55 labels, taken from the training split alone",
    answered: "0",
    refused: "201",
    correct: "0",
    coverage: "0%",
    overall: "0%",
    selective: null,
    reading:
      "Nothing bought the right to answer, so there is no published prediction on any row. The internal ranking on those same rows is above chance, and reporting it as the result would be a substitution rather than a finding.",
  },
  {
    task: "Word inflection",
    corpus: "English morphology",
    trainRows: "10,000",
    testRows: "1,000",
    candidates: "122 edit actions, taken from the training split alone",
    answered: "996",
    refused: "4",
    correct: "970",
    coverage: "99.6%",
    overall: "97.0%",
    selective: "97.4%",
    reading:
      "The strongest of the three, and the only one where the answer set almost always contained the truth. The four refusals are rows whose true action was not in the training split at all.",
  },
];

export const benchmarkTotals = {
  testRows: "2,275",
  receipts: "2,275",
  answered: "1,953",
  refused: "322",
} as const;

/**
 * The same figures as raw numbers, so the displayed strings can be reconciled
 * rather than trusted. A rate that does not follow from its own counts is the
 * easiest error to publish and the hardest to notice.
 */
export const benchmarkArithmetic = [
  { corpus: "Kinship", rows: 1074, answered: 957, refused: 117, correct: 141 },
  { corpus: "Nations", rows: 201, answered: 0, refused: 201, correct: 0 },
  { corpus: "English morphology", rows: 1000, answered: 996, refused: 4, correct: 970 },
] as const;

export const benchmarkHeadline = "Three public corpora, and one receipt for every question asked.";

export const benchmarkBody =
  "The set of possible answers is closed from the training split before the test split is opened, and every test row gets a machine-readable receipt whether it was answered or refused. That discipline is what makes the weak rows readable rather than embarrassing: a benchmark that answered nothing says so in the same table as the one that answered almost everything.";

export const benchmarkTaskNote =
  "Both relation rows classify which label holds between a given pair. That is not the entity-ranking task the same corpora are usually cited for, and the two are not comparable.";

export const benchmarkBoundary =
  "Every figure above was produced by the project running public corpora on its own machine. No partner has run any of it on their own data with their own evaluator, and no result here transfers to an industrial setting.";

/* --------------------------------------------------- what can be replayed ---- */

export type ReplayProperty = {
  value: string;
  label: string;
  detail: string;
};

/**
 * The properties a reviewer can exercise without asking us for anything. These
 * are the current public artefact's, and they are the reason the numbers above
 * are worth reading at all.
 */
export const replayProperties: readonly ReplayProperty[] = [
  {
    value: "2,275",
    label: "Receipts, one per test row",
    detail:
      "Answered or refused, every row leaves a machine-readable record. A row cannot be dropped from the denominator by producing nothing.",
  },
  {
    value: "9",
    label: "Input files pinned by hash",
    detail: "Every corpus file is byte-identical to a named upstream commit, checked by SHA-256 rather than described.",
  },
  {
    value: "3 / 3",
    label: "Rebuilds that matched byte for byte",
    detail:
      "A cold run from a fresh unpack reconstructs each learned state and each prediction ledger and compares them against the shipped ones.",
  },
  {
    value: "0",
    label: "Third-party runtime dependencies",
    detail:
      "The verifier runs on a standard Python interpreter and its own standard library, so a reviewer reproduces it rather than reproducing our environment.",
  },
];

export const replayNote =
  "The candidate set, the learned state and the policy are each frozen and digested before the split that tests them is read, and the digest is what a re-run is compared against.";

/* ------------------------------------------------------ what is not here ---- */

export const publicRunLimits: readonly string[] = [
  "No partner-controlled data, evaluator or deployment stands behind any of it.",
  "The redistribution chain for the corpus files is only partly proven, and that status is published rather than assumed.",
  "No head-to-head comparison against a language model was run, and none is claimed.",
  "General intelligence is not claimed, and the engine produces structured predictions and boundaries rather than speech.",
];

/**
 * The counts the site used to lead with. They are kept because deleting a
 * superseded number is how a record becomes untrustworthy — but they are marked
 * as history, and nothing on the site may present them as current.
 */
export const supersededSelector = {
  label: "What this replaces",
  note: "An earlier release published a committed universe of 1,204 descriptors, 880 of them executable, and a 440-candidate frontier for each of two fixed input patterns. That artefact accepted two patterns, took one bounded action, and performed no learning at all. It is superseded by the artefact measured above, and its counts are history rather than a description of anything running today.",
} as const;

export const publicRunTranslationKeys = [
  benchmarkHeadline,
  benchmarkBody,
  benchmarkTaskNote,
  benchmarkBoundary,
  ...benchmarkOutcomes.flatMap((row) => [row.task, row.corpus, row.candidates, row.reading]),
  ...replayProperties.flatMap((row) => [row.label, row.detail]),
  replayNote,
  ...publicRunLimits,
  supersededSelector.label,
  supersededSelector.note,
] as const;
