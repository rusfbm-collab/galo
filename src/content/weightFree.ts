/**
 * What kind of object GALO is, said before anything else on the site.
 *
 * The home page used to open on "a verifiable world model", and the first
 * negative under it was "not a neural net as authority". Both understate the
 * thing they describe. "Not as authority" concedes that a neural net is in
 * there somewhere and merely outranked; a reader who knows the field hears a
 * governance wrapper. The actual position is stronger and simpler: there is no
 * trainable parameter tensor anywhere in the engine, no gradient step, no
 * backpropagation, and nothing that a machine-learning practitioner would
 * recognise as a weight.
 *
 * That is a category, not a feature, so it goes on the first screen and the
 * evidence follows it. Rules for the strings here: the claim is stated once and
 * absolutely, its scope is attached in the same breath rather than in a
 * footnote, and the external-adapter rule is published so nobody has to guess
 * whether an LLM is hiding behind the wording.
 */

/** The whole difference, in the one sentence a non-specialist can repeat. */
export const weightFreeLine = "Neural AI learns weights. GALO learns structures.";

/**
 * The two paths, drawn side by side. Four steps each, deliberately the same
 * length, so the divergence lands on the third step rather than on the shape.
 */
export const neuralPath: readonly string[] = [
  "Data",
  "Training",
  "Hidden numerical weights",
  "A probabilistic answer",
];

export const galoPath: readonly string[] = [
  "Data and experience",
  "Explicit objects and relations",
  "Verified structures and routes",
  "A reproducible answer",
];

export type LearnedItem = {
  /** What the engine stores, in ordinary words. */
  name: string;
  /** What it holds, and why it is not a weight. */
  holds: string;
};

/**
 * The complete list of what a GALO episode may leave behind. If learning is not
 * weights, a reader is owed the alternative in full rather than in outline —
 * and the list being short enough to print is itself the point.
 */
export const learnedState: readonly LearnedItem[] = [
  {
    name: "Counters",
    holds: "How often something has held up, kept as a whole number anybody can read and compare.",
  },
  {
    name: "Discrete orders",
    holds: "Which candidate to try first. An ordering of a declared list, not a score attached to it.",
  },
  {
    name: "Relation frames",
    holds: "A named relation between named things, carrying the observation it came from.",
  },
  {
    name: "Written-out routes",
    holds: "A procedure recorded as steps rather than as behaviour, versioned, and replayable as it stood.",
  },
  {
    name: "Proven structures",
    holds: "A structure that passed its formation checks, standing as active, weakened, or retired.",
  },
  {
    name: "Receipts",
    holds: "What was checked, what ran, what was refused, and what it cost.",
  },
];

/**
 * The required boundary of the whole claim. It concedes exactly two things — the
 * scan is ours, and an external neural component may be bolted on — and it
 * concedes them in the same sentence as the claim rather than three screens
 * down.
 */
export const weightFreeBoundary =
  "This is a statement about what the engine stores and how it changes, and it is checkable the way everything else here is. A static scan of the current release reaches 104 modules from the active entry points, imports no machine-learning framework, and calls no gradient or backpropagation interface. Like every other check on this site, it was run by the project on its own code, and no outside party has repeated it.";

/**
 * Published so that the absolute claim cannot be quietly rescued later by
 * attaching a model and calling it part of the engine.
 */
export const externalAdapterRule =
  "A neural model may be attached from outside as a proposal adapter — a parser or a sensor, in effect. It is not part of GALO, its weights are not GALO state, and it cannot create a frame, write to the Atlas, widen the candidate set, or authorise a verdict.";

/**
 * The line the claim checker pins, kept next to the weight-free block because
 * this is where a reader now meets the authority question for the first time.
 */
export const authorityLine = "Learning may rank candidates; the verifier owns the verdict.";

export const weightFreeTranslationKeys = [
  weightFreeLine,
  ...neuralPath,
  ...galoPath,
  ...learnedState.flatMap((entry) => [entry.name, entry.holds]),
  weightFreeBoundary,
  externalAdapterRule,
  authorityLine,
] as const;
