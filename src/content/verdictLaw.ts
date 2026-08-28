/**
 * How a public answer is produced, and why most of the time there isn't one.
 *
 * The site used to describe this as two contours — a part that learns and a
 * part that checks — running beside each other. That reading is wrong and is
 * corrected here: there is one path, and the learning and the checking are two
 * roles inside it. Nothing halfway along the path is allowed to become an
 * answer on its own.
 *
 * Everything in this module is architecture rather than result. No release
 * name, no artefact version and no measured figure belongs here; the numbers
 * live on the evidence page, where their scope is stated beside them.
 */

/* ------------------------------------------- the law of a public answer ---- */

export const verdictEyebrow = "WHEN AN ANSWER IS ALLOWED TO EXIST";

export const verdictHeadline = "Three conditions have to hold at once. Any one missing is a boundary.";

export const verdictBody =
  "A ranked guess is produced early and is never published on its own. Before it can become an answer it has to buy the right to be one, be supported by a structure the system actually learned, and survive a typed program that runs on the frozen tables. The conditions are joined by and, not by or — which is why refusing is ordinary here rather than exceptional.";

export type VerdictStage = {
  number: string;
  name: string;
  /** What this stage contributes, in one sentence. */
  does: string;
  /** The specific way an answer could go wrong if this stage were missing. */
  prevents: string;
};

/**
 * The order is a chain of authority rather than a schedule. An implementation
 * may compute a later stage early; what it may not do is let any stage publish.
 */
export const verdictStages: readonly VerdictStage[] = [
  {
    number: "01",
    name: "A ranked proposal",
    does: "Counting memory orders the declared candidates for this context. The ordering is recorded and stays inside the record.",
    prevents: "A remembered answer or a bare prior becoming the verdict because nothing else was asked of it.",
  },
  {
    number: "02",
    name: "The right to answer",
    does: "The context's own out-of-sample record — how often this kind of context has been right before it saw the current label — is weighed against what a wrong answer costs.",
    prevents: "A signal that is real but too weak to be worth acting on being treated as good enough.",
  },
  {
    number: "03",
    name: "A learned structure behind it",
    does: "The same proposal has to be supported by a relation frame, or by a reusable structure built over repeated frames, that this system actually formed from evidence.",
    prevents: "Counting memory answering on its own, with no structural trace of having learned anything.",
  },
  {
    number: "04",
    name: "A typed program that runs",
    does: "The route's full set of typed steps is compiled and executed against the frozen tables, and every one of them has to pass.",
    prevents: "The algebra being decoration — checked once at build time and never on the path to an actual answer.",
  },
];

export const verdictLawLine = "ANSWER = right to answer AND learned structure AND typed program passed";

export const verdictBoundaryLine =
  "Anything else is a boundary: no published answer, no ranking, and the reason named in the record.";

/**
 * The three ways the conjunction fails. Kept separate because collapsing them
 * would hide which of the three conditions is the one that is missing.
 */
export type BoundaryCause = {
  cause: string;
  detail: string;
};

export const boundaryCauses: readonly BoundaryCause[] = [
  {
    cause: "The right was not bought",
    detail: "The context has not earned enough out-of-sample credit for an answer to be worth its cost of being wrong.",
  },
  {
    cause: "No learned structure supported it",
    detail: "Nothing in the frames or the structures built over them stands behind this particular proposal.",
  },
  {
    cause: "The typed program did not pass",
    detail: "Some step of the route did not compile or did not execute lawfully against the frozen tables.",
  },
];

export const verdictFailClosed =
  "A boundary carries no hidden prediction. The proposal stays in the record for diagnosis, and the published answer is empty rather than quietly downgraded.";

/* -------------------------------------------------------- causal order ---- */

export const causalEyebrow = "THE ORDER THE PROTOCOL FIXES";

export const causalHeadline = "The space of possible answers is closed before the test data is opened.";

export const causalBody =
  "Most of what makes a benchmark result believable is not the number — it is the order in which things were allowed to happen. Each step below reads only what the steps before it have already frozen, and the evaluation split is read once, at the end, without writing anything back.";

export type CausalStep = {
  number: string;
  step: string;
  reads: string;
  freezes: string;
};

export const causalSteps: readonly CausalStep[] = [
  {
    number: "01",
    step: "Read the training split",
    reads: "Training data only",
    freezes: "Nothing yet",
  },
  {
    number: "02",
    step: "Close the set of possible answers",
    reads: "Training data only",
    freezes: "The candidate universe, and a digest of it",
  },
  {
    number: "03",
    step: "Learn, then freeze the state",
    reads: "Training data only",
    freezes: "The learned state, and a digest of it",
  },
  {
    number: "04",
    step: "Read the selection split",
    reads: "A separate split, never the test one",
    freezes: "Nothing yet",
  },
  {
    number: "05",
    step: "Fix the policy",
    reads: "The selection split's outcome",
    freezes: "Every setting the evaluation will run under",
  },
  {
    number: "06",
    step: "Read the test split",
    reads: "Test data, once",
    freezes: "Nothing — the state is already sealed",
  },
  {
    number: "07",
    step: "Evaluate, read-only",
    reads: "Test data, once",
    freezes: "One receipt for every test row",
  },
];

export const causalLaws: readonly string[] = [
  "The set of possible answers is a function of the training data and the declared schema. The test split is not one of its arguments.",
  "Every row of the test split gets exactly one machine-readable receipt, whether it was answered or refused.",
  "The learned state is byte-identical before and after evaluation, and that is checked rather than asserted.",
  "If the true answer for a row lies outside the closed set, the row becomes a boundary with an empty prediction — recorded as a limit of the evaluation, never as the system declining in flight.",
];

export const causalBoundary =
  "This is a description of the protocol, not of a partner deployment. It says how a result was produced; it does not say the result transfers to anybody else's data.";

/* ------------------------------------------- coverage is not accuracy ---- */

export const denominatorEyebrow = "FOUR NUMBERS, FOUR DIFFERENT DENOMINATORS";

export const denominatorHeadline = "Refusing everywhere and scoring zero are the same fact, stated twice.";

export const denominatorBody =
  "A system allowed to refuse can flatter itself by answering only when it is sure. The defence is to publish every denominator at once, so that a high score among answers and a low share of questions answered cannot be quietly traded against each other.";

export type Denominator = {
  metric: string;
  over: string;
  says: string;
  misreadAs: string;
};

export const denominators: readonly Denominator[] = [
  {
    metric: "Proposal accuracy",
    over: "Rows where counting memory produced a ranking",
    says: "How good the internal ordering is, before any gate is applied.",
    misreadAs: "The system's accuracy. It is not: a proposal is not a published answer.",
  },
  {
    metric: "Coverage",
    over: "All evaluated rows",
    says: "The share of questions on which all three conditions held.",
    misreadAs: "A score. It says how often an answer existed, not how often it was right.",
  },
  {
    metric: "Selective accuracy",
    over: "Rows that were answered",
    says: "How often the published answers were correct.",
    misreadAs: "The headline result. On its own it hides how much was refused.",
  },
  {
    metric: "Overall accuracy",
    over: "All evaluated rows",
    says: "Correct answers over every question asked, with every refusal counted as wrong.",
    misreadAs: "Unfairly harsh. It is the only one of the four that cannot be improved by refusing more.",
  },
];

export const denominatorRule =
  "Coverage and accuracy are never substituted for one another, and overall accuracy is the figure a refusal cannot help.";

export const denominatorWorked =
  "A benchmark where nothing bought the right to answer publishes a coverage of zero and an overall accuracy of zero, and no selective accuracy at all — because there is nothing to take the average over. The internal ranking on the same rows may be well above chance. Reporting that ranking as the result would be the exact substitution this rule forbids.";

/* ------------------------------------------------- route arithmetic ---- */

export const routeArithmeticNote =
  "One prediction does not visit the whole catalogue. It executes a fixed list of typed steps that covers three reading channels, all seven levels, and all four families — and every one of them has to pass. The catalogue is an address space; the route is a length.";

export const routeArithmeticLine = "3 channels × 7 levels × 4 families = 84 typed steps on one route";

export const routeArithmeticCaution =
  "The 84 are steps, not distinct catalogue cells. Two channels can land on the same cell, so the number of distinct addresses a single prediction touches is smaller than the number of steps it runs.";

export const verdictLawTranslationKeys = [
  verdictEyebrow,
  verdictHeadline,
  verdictBody,
  ...verdictStages.flatMap((stage) => [stage.name, stage.does, stage.prevents]),
  verdictLawLine,
  verdictBoundaryLine,
  ...boundaryCauses.flatMap((entry) => [entry.cause, entry.detail]),
  verdictFailClosed,
  causalEyebrow,
  causalHeadline,
  causalBody,
  ...causalSteps.flatMap((step) => [step.step, step.reads, step.freezes]),
  ...causalLaws,
  causalBoundary,
  denominatorEyebrow,
  denominatorHeadline,
  denominatorBody,
  ...denominators.flatMap((entry) => [entry.metric, entry.over, entry.says, entry.misreadAs]),
  denominatorRule,
  denominatorWorked,
  routeArithmeticNote,
  routeArithmeticCaution,
] as const;
