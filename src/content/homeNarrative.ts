/**
 * The home page as a sequence of one idea per section.
 *
 * The page had grown into an argument that repeated itself: the hero carried the
 * category, a long lead, a result line, four bullets, four status chips, two
 * calls to action, a four-clause boundary and a seven-phase engine diagram, and
 * then the same idea was made again in a weight-free section, a comparison
 * figure and a list of state kinds. A reader who did not already know what GALO
 * was met seven internal phase names before meeting the category.
 *
 * So the order here is fixed and each step earns the next: what kind of thing it
 * is, what it keeps, what that buys when the world changes, what "provable"
 * consists of, how learning happens without weights, and only then which
 * artefact each published number belongs to. Numbers, phase names, tables and
 * internal identifiers all wait until after that.
 *
 * Every string is content rather than markup so the four locales stay in one
 * place and the page file stays readable.
 */

/* ---------------------------------------------------------------- hero ---- */

export const heroEyebrow = "WEIGHT-FREE AI · INDUSTRIAL DECISION ASSURANCE";

/**
 * "Keep" is the load-bearing word: a decision that was provable on the day is
 * cheap, and one that is still provable after a source moved is the product.
 */
export const heroHeadline = "AI built to keep decisions provable.";

export const heroLead: readonly string[] = [
  "Neural AI learns by changing hidden numerical weights. GALO has no learned weights and uses no backpropagation. It learns by building and revising explicit relations and verified structures in a versioned Atlas.",
  "That keeps the state behind a decision readable, replayable, and re-checkable in the one place a change actually touched. The first product is intended for industrial decision assurance around the digital twins and operational systems a company already operates.",
];

/** Three verbs, in the order an operator would want them. */
export const heroResult = "See what changed. Trace what it affects. Re-check only what matters.";

/** Four markers, two or three words each, read at a glance rather than parsed. */
export const heroMarkers: readonly string[] = [
  "No learned weights",
  "No backpropagation",
  "Explicit Atlas state",
  "Independent replay",
];

/**
 * One line. The full state of play has its own section further down, where a
 * reader who wants it will look for it; on the first screen it competes with the
 * thing it is qualifying.
 */
export const heroBoundary =
  "Research prototype. General AI, partner-controlled validity and production autonomy are not claimed.";

/* ------------------------------------------------------- hero figure ---- */

export const heroFigureEyebrow = "WHAT CHANGES WHEN THE SYSTEM LEARNS";

export type ContrastLane = {
  head: string;
  /** Three stages, and no more: the hero is not the place for a full pipeline. */
  stages: readonly string[];
};

export const neuralLane: ContrastLane = {
  head: "NEURAL AI",
  stages: ["Data and feedback", "Hidden numerical weights change", "Model output"],
};

export const galoLane: ContrastLane = {
  head: "GALO",
  stages: [
    "Data and verified outcomes",
    "Named relations and verified structures change",
    "Decision route and replay record",
  ],
};

export const heroFigureFoot =
  "No trainable weights. No backpropagation. What GALO learned stays explicit and can be inspected.";

export const heroFigureEquivalent =
  "Two lanes side by side. A neural system goes from data and feedback, through a change in hidden numerical weights, to a model output. GALO goes from data and verified outcomes, through a change in named relations and verified structures, to a decision route and a replay record. The middle stage is the only one that differs.";

/* ------------------------------------------------------ learned state ---- */

export const learnedStateHeadline = "Neural AI learns weights. GALO learns structures.";

export const learnedStateBody =
  "A neural model spreads what it learned across hidden numerical parameters, and no single one of them stands for anything a person could name. GALO stores what it learned as named, versioned records instead.";

export type LearnedGroup = {
  name: string;
  holds: string;
};

/**
 * Four groups rather than a closed list of six kinds. The earlier wording tied a
 * public claim to one schema, and a schema can change; what may not change is
 * that the state stays explicit, typed and replayable, which is what the note
 * under the group list says.
 */
export const learnedGroups: readonly LearnedGroup[] = [
  {
    name: "Experience records",
    holds: "What an episode met and what came back, linked to the observation it came from.",
  },
  {
    name: "Search counters and orders",
    holds: "How often something held up, and which candidate is worth trying first.",
  },
  {
    name: "Relation frames and routes",
    holds: "Named relations between named things, and the procedures written out over them.",
  },
  {
    name: "Verified reusable structures",
    holds: "Structures that passed their checks, each standing as active, weakened, or retired.",
  },
];

export const learnedGroupsNote =
  "The exact schemas may change. The invariant does not: learned state stays explicit, typed and replayable.";

/* ------------------------------------------------------ change impact ---- */

export const changeHeadline = "Change one fact. Re-check the decisions it actually affects.";

export const changeBody =
  "This is the everyday version of the whole argument. A record moves, and the question is not what the model now says — it is which conclusions that change reaches, which it leaves alone, and whether the ones left standing are still supported.";

export type ChangeCase = {
  /** The toggle label. */
  trigger: string;
  /** What moved. Translated. */
  sourceName: string;
  /** The version transition, kept Latin and left-to-right in every locale so a
      bidirectional reader is never left guessing which version came first. */
  sourceVersion: string;
  /** What the change reaches. */
  affected: readonly string[];
  /** What it demonstrably does not reach. */
  untouched: readonly string[];
  /** One of the three outcomes. */
  outcome: "STANDS" | "REVISE" | "NEEDS EVIDENCE";
  outcomeDetail: string;
};

/**
 * Three switches over one illustrative workflow. Every one of them is a target
 * workflow written by us, and the figure says so on its face — no partner has
 * run any of this on their own data.
 */
export const changeCases: readonly ChangeCase[] = [
  {
    trigger: "A source record changes",
    sourceName: "Sensor calibration record",
    sourceVersion: "v2 → v3",
    affected: ["Temperature threshold frame", "Maintenance recommendation route"],
    untouched: ["Inventory decision", "Supplier approval", "Energy plan"],
    outcome: "STANDS",
    outcomeDetail:
      "The affected route is replayed against the new record and reaches the same result. The decision keeps its support, and the replay says why.",
  },
  {
    trigger: "A procedure is revised",
    sourceName: "Maintenance procedure",
    sourceVersion: "rev. 7 → rev. 8",
    affected: ["Maintenance recommendation route", "Two downstream work orders"],
    untouched: ["Temperature threshold frame", "Inventory decision", "Energy plan"],
    outcome: "REVISE",
    outcomeDetail:
      "The route depended on a step the revision removed. It is marked for revision rather than quietly re-run, and everything derived from it is marked with it.",
  },
  {
    trigger: "Evidence goes missing",
    sourceName: "Vibration series, missing window",
    sourceVersion: "06:00 → 14:00",
    affected: ["Bearing wear explanation", "Shutdown recommendation route"],
    untouched: ["Inventory decision", "Supplier approval"],
    outcome: "NEEDS EVIDENCE",
    outcomeDetail:
      "Two explanations remain open and nothing in the record separates them. The route stops at a named boundary instead of returning the more plausible one.",
  },
];

export const changeIllustrative = "ILLUSTRATIVE TARGET WORKFLOW · NOT A PARTNER DEPLOYMENT";

export const changeBoundary =
  "No partner has run this on their own data, and the workflow above was written by the project to show the shape of the product rather than a result.";

/* --------------------------------------------------- provable decision ---- */

export const provableHeadline = "A provable decision has four visible parts.";

export const provableBody =
  "“Provable” is a strong word, so here is the whole of what it means here — a package somebody else can be handed. It is not a claim that the answer is true. It is a claim that the way it was reached can be read and repeated.";

export type ProvablePart = {
  name: string;
  question: string;
  detail: string;
};

export const provableParts: readonly ProvablePart[] = [
  {
    name: "Named sources",
    question: "Which records, observations and versions were used?",
    detail: "Each one is named and versioned, so a later reader is looking at what the run was looking at.",
  },
  {
    name: "Competing explanations",
    question: "Which lawful explanations were still open?",
    detail: "The alternatives are kept while the evidence does not separate them, rather than narrowed by preference.",
  },
  {
    name: "A written-out route",
    question: "Which steps connected the evidence to the result?",
    detail: "The route is a record of steps rather than a description of behaviour, and it is versioned as it stood.",
  },
  {
    name: "An independently replayable record",
    question: "Can somebody else repeat the same route from the same state?",
    detail: "The record carries what was checked, what ran, what was refused, and what it cost.",
  },
];

export const provableTerminal =
  "The route ends on one of three outcomes — admitted, refused, or stopped for want of evidence — and the outcome is written into the record with its cause.";

/* ------------------------------------------------------ learning cycle ---- */

export const cycleHeadline = "How a weight-free system learns.";

export const cycleBody =
  "Learning happens between episodes, not inside one. What changes is a version of the Atlas that somebody can read; what never changes is what the engine is allowed to admit.";

export type CycleStage = {
  number: string;
  label: string;
  detail: string;
};

export const cycleStages: readonly CycleStage[] = [
  { number: "01", label: "An episode runs", detail: "Inside a declared set of permitted moves, on a fixed budget." },
  {
    number: "02",
    label: "The outcome is revealed from outside",
    detail: "From an evaluator the engine does not control, after the route was committed.",
  },
  {
    number: "03",
    label: "The experience is checked",
    detail: "A structure is formed only if it passes its checks; a counterexample weakens one instead of deleting it.",
  },
  {
    number: "04",
    label: "The Atlas receives a new explicit version",
    detail: "A version somebody can diff against the one before it, and roll back on its own.",
  },
  {
    number: "05",
    label: "A later episode may reuse it",
    detail: "Reuse changes where the search looks first. It never changes what may be admitted.",
  },
];

export const cycleInvariant = "Laws unchanged · Candidate authority unchanged · Verifier unchanged";

export const cycleNoGradient = "NO GRADIENT STEP";

/** The diff a reader is shown instead of a heat map or an embedding space. */
export const cycleDiffBefore = "Atlas v12";
export const cycleDiffAfter = "Atlas v13";
export const cycleDiff: readonly string[] = ["+ one verified relation frame", "+ one reuse binding", "counter 4 → 5"];

/* -------------------------------------------------------------- scopes ---- */

export const scopeHeadline = "Three different things, and every number belongs to one of them.";

export const scopeBody =
  "Most of the confusion about projects like this comes from a sentence that mixes them. So they are named separately here, and each figure elsewhere on the site says which one it came from.";

export type ArtefactScope = {
  tag: string;
  name: string;
  exists: string;
  measured: string;
  doesNotFollow: string;
  nextGate: string;
};

export const artefactScopes: readonly ArtefactScope[] = [
  {
    tag: "PUBLIC BOUNDED VERIFIER",
    name: "The release anybody can run",
    exists: "A finite, declared execution slice with deterministic replay, and no persistent learning in it at all.",
    measured:
      "That it reproduces: fresh replays pass, and every published structural count is re-derived on each build.",
    doesNotFollow: "Nothing about learning, and nothing about operational value. This artefact does not learn.",
    nextGate: "Somebody outside the project re-running it and publishing what they got.",
  },
  {
    tag: "SEALED RESEARCH LINE",
    name: "The prototypes that do learn",
    exists: "Separate sealed artefacts with trained Atlas volumes, preregistered before the results were seen.",
    measured:
      "Paired reductions in work on public corpora against the identical system with its learning switched off, published with the benchmark that refused to be learned.",
    doesNotFollow:
      "Not a statement about the public release, which learns nothing, and not a statement about any industrial setting.",
    nextGate: "An end-to-end run where the full architecture, not a counting ranker, is in the measured path.",
  },
  {
    tag: "TARGET INDUSTRIAL PRODUCT",
    name: "The thing being aimed at",
    exists: "A written specification and this page. No deployment, no customer, no pilot.",
    measured: "Nothing. No partner has run anything on their own data with their own evaluator.",
    doesNotFollow: "No claim of operational gain, partner-controlled validity, or authority over any plant system.",
    nextGate:
      "One bounded, read-only evaluation on a partner's data, with the success condition agreed in writing first.",
  },
];

export const scopeBoundary =
  "General-purpose architecture, not general intelligence. Partner-controlled validity is not proven, production autonomy is not authorised, no command path to any plant system is authorised, and there is no customer, letter of intent or revenue.";

/* ----------------------------------------------------------- not this ---- */

export type NotThisCard = {
  name: string;
  detail: string;
};

/** Four cards, two short sentences each, kept below the positive explanation. */
export const notThisCards: readonly NotThisCard[] = [
  {
    name: "Not a language model",
    detail: "There is no parameter tensor to fit and no gradient step to take. It sits beside one perfectly well.",
  },
  {
    name: "Not a knowledge graph",
    detail: "A stored edge is not a verdict here. What is stored is the state of a decision and how it was reached.",
  },
  {
    name: "Not a rule engine",
    detail:
      "Rules do not learn. This does, and what it learns is which route to try rather than what counts as lawful.",
  },
  {
    name: "Not a governance wrapper",
    detail: "There is no model underneath being supervised. The checking is the engine, not a filter over one.",
  },
];

/* ------------------------------------------------------ under the hood ---- */

export const underHoodHeadline = "The finite core, for readers who want it.";

export const underHoodBody =
  "Everything above rests on a small frozen kernel. It is written out in advance rather than fitted, which is why the whole of it can be checked entry by entry.";

export const underHoodTeaser: readonly string[] = [
  "A frozen finite kernel",
  "Two table families",
  "Seven local resolutions",
  "No learned law",
];

export const homeNarrativeTranslationKeys = [
  heroEyebrow,
  heroHeadline,
  ...heroLead,
  heroResult,
  ...heroMarkers,
  heroBoundary,
  heroFigureEyebrow,
  neuralLane.head,
  galoLane.head,
  ...neuralLane.stages,
  ...galoLane.stages,
  heroFigureFoot,
  heroFigureEquivalent,
  learnedStateHeadline,
  learnedStateBody,
  ...learnedGroups.flatMap((entry) => [entry.name, entry.holds]),
  learnedGroupsNote,
  changeHeadline,
  changeBody,
  ...changeCases.flatMap((entry) => [
    entry.trigger,
    entry.sourceName,
    ...entry.affected,
    ...entry.untouched,
    entry.outcomeDetail,
  ]),
  changeIllustrative,
  changeBoundary,
  provableHeadline,
  provableBody,
  ...provableParts.flatMap((entry) => [entry.name, entry.question, entry.detail]),
  provableTerminal,
  cycleHeadline,
  cycleBody,
  ...cycleStages.flatMap((entry) => [entry.label, entry.detail]),
  cycleInvariant,
  cycleNoGradient,
  cycleDiffBefore,
  cycleDiffAfter,
  ...cycleDiff,
  scopeHeadline,
  scopeBody,
  ...artefactScopes.flatMap((entry) => [
    entry.tag,
    entry.name,
    entry.exists,
    entry.measured,
    entry.doesNotFollow,
    entry.nextGate,
  ]),
  scopeBoundary,
  ...notThisCards.flatMap((entry) => [entry.name, entry.detail]),
  underHoodHeadline,
  underHoodBody,
  ...underHoodTeaser,
] as const;
