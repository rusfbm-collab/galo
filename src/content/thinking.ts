/**
 * The reasoning route.
 *
 * This page used to describe one artefact only: a bounded execution slice that
 * accepted two fixed input patterns and performed no learning at all. That
 * artefact is superseded, and describing the route by it would describe a thing
 * that no longer runs. The route an episode travels is a closed set of phases
 * with two lawful exits, a counted budget, and a learning phase that opens only
 * after somebody outside the system discloses the outcome; the bounded step the
 * public runs actually measure sits inside it and is shown as one evaluated row.
 *
 * Rules for every string in this file. Nothing here describes cognition,
 * understanding, or autonomy; "thinking" names a written-out route, and the page
 * says so in the first screen. Nothing here publishes an internal identifier, a
 * module path, or a receipt type — the shape of the route is the subject, not its
 * implementation. And nothing here may imply that the drawn route is what the
 * published results measured: it is not, that gap is the last of the five
 * misreadings, and it is stated rather than glossed.
 */

export type RoutePhase = {
  number: string;
  /** The phase's own name, kept untranslated and left-to-right in every locale. */
  name: string;
  /** What the phase does, in words a first-time reader can follow without the code. */
  publicName: string;
  title: string;
  question: string;
  happens: string;
  detail: string;
  stopsWhen: string;
  /** Four or five words for the home-page figure, where there is no room for a sentence. */
  heroGloss: string;
};

/**
 * The phase set is closed: an episode is in exactly one of these, and a request
 * for a phase outside the set is rejected rather than improvised. Each phase
 * seals its state on the way out, which is why an interrupted episode resumes
 * instead of restarting.
 */
export const routePhases: readonly RoutePhase[] = [
  {
    number: "01",
    name: "SEARCH",
    publicName: "Open possibilities",
    title: "The candidate space is opened",
    question: "What could lawfully happen here at all?",
    happens:
      "The episode opens, the space of lawful candidates is materialised, and the portfolio is checked for completeness before anything is chosen.",
    detail:
      "Candidates are enumerated from the declared laws rather than proposed by a model. Because completeness is checked instead of assumed, an incomplete portfolio is itself a recorded outcome: the route stops and names the part it could not open, rather than continuing over a space it cannot vouch for.",
    stopsWhen: "The portfolio cannot be completed, or the space cannot be materialised within the declared limit.",
    heroGloss: "candidates opened in full",
  },
  {
    number: "02",
    name: "HYPOTHESES",
    publicName: "Keep alternatives",
    title: "Executable local maps are built",
    question: "Which readings of this situation are lawful?",
    happens:
      "Lawful models become executable local maps, and any already-proven structure whose signature matches is consumed instead of being rebuilt.",
    detail:
      "This is where knowledge gets used rather than merely stored. When a proven structure covers a signature the episode needs, the step is taken from that structure and the shortcut leaves its own record — so a reduction in work can always be pointed at, instead of appearing as an unexplained improvement.",
    stopsWhen: "No available probe would tell the surviving readings apart.",
    heroGloss: "maps built, structures reused",
  },
  {
    number: "03",
    name: "PROBING",
    publicName: "Test what separates them",
    title: "One distinguishing probe is taken",
    question: "What would tell these readings apart?",
    happens:
      "A distinguishing probe is chosen and executed, the observation is recorded, attributed to the assumption it bears on, and the affected map is revised locally.",
    detail:
      "The set of probes and their cost are fixed before the episode begins. The policy may choose among them; it may not change them or reprice them. That is the rule which keeps a probe from turning into a way of justifying a conclusion already reached.",
    stopsWhen: "The evidence does not distinguish, or the probe taken is not the probe that was declared.",
    heroGloss: "one distinguishing probe",
  },
  {
    number: "04",
    name: "COMPOSITION",
    publicName: "Assemble one lawful answer",
    title: "The surviving maps are composed",
    question: "Does one lawful whole come out of what survived?",
    happens:
      "The surviving maps are composed into a single multi-place structure, and proven structures are applied again wherever they cover it.",
    detail:
      "The composition has to be unique up to lawful equivalence. Two inequivalent lawful compositions are not settled by preference: the route reports that it holds two of them and stops, because choosing between them would be exactly the unrecorded judgement this design exists to avoid.",
    stopsWhen: "No lawful composition exists, or several inequivalent ones do.",
    heroGloss: "one lawful whole, or none",
  },
  {
    number: "05",
    name: "REVEAL",
    publicName: "Take the outcome from outside",
    title: "The outcome is disclosed from outside",
    question: "What actually happened, according to somebody other than me?",
    happens:
      "The outcome of the action is disclosed by an external evaluator, and its record is required before the route may continue.",
    detail:
      "Without an external reveal the route has no right to learn. This is the single rule that separates learning from self-confirmation: a system allowed to score its own outcomes can improve its numbers indefinitely without improving anything else.",
    stopsWhen: "No external reveal is available, or the outcome it reports is not verified.",
    heroGloss: "the outcome comes from outside",
  },
  {
    number: "06",
    name: "LEARNING",
    publicName: "Record what is reusable",
    title: "Durable state is updated, and only durable state",
    question: "What may I keep from this, and what may I never keep?",
    happens:
      "A learning intent is formed and applied: the ordering and the durable Atlas state change, and the laws, the candidate set, and the verdict do not.",
    detail:
      "What is updated is where to look and in what order — never what counts as permitted. A policy snapshot that has gone stale is refused rather than merged, so two independent replays of the same episode land on the same state rather than on two nearly identical ones.",
    stopsWhen: "The policy snapshot the intent was formed against is no longer current.",
    heroGloss: "the order changes, not the verdict",
  },
  {
    number: "07",
    name: "COMPLETE",
    publicName: "Seal the episode",
    title: "The episode is sealed",
    question: "What can somebody else replay from this?",
    happens:
      "The episode closes on a typed terminal, and its state and checkpoint are sealed so the route can be resumed with an identical result.",
    detail:
      "Every phase seals its state on the way out, which is why an interrupted episode continues instead of restarting, and why a mismatch of environment or Atlas on resumption is refused by name instead of quietly producing different numbers.",
    stopsWhen: "The environment or the Atlas does not match the checkpoint being resumed.",
    heroGloss: "sealed, and replayable by others",
  },
];

export type LawfulExit = {
  terminal: "BOUNDARY" | "REJECT";
  /** The same outcome named for a reader who has never seen the terminal code. */
  plain: string;
  title: string;
  meaning: string;
  detail: string;
};

/**
 * Two exits, and they say different things. Keeping them apart is the point: a
 * boundary is a lawful run that could not settle the question, a rejection is a
 * run that was not lawful. Collapsing the two would make every stop look the same.
 */
export const lawfulExits: readonly LawfulExit[] = [
  {
    terminal: "BOUNDARY",
    plain: "NEEDS MORE EVIDENCE",
    title: "The route ran lawfully and could not settle it",
    meaning: "Reachable from any phase, and a legitimate way for an episode to end.",
    detail:
      "The evidence did not distinguish, no lawful composition was unique, no external reveal was available, or the counted budget ran out. In each case the cause is named in the record, so a stop is something a reader can examine rather than an absence of output.",
  },
  {
    terminal: "REJECT",
    plain: "INVALID RUN",
    title: "The run was not lawful, and is not repaired",
    meaning: "A broken invariant, refused by name rather than corrected in flight.",
    detail:
      "A probe set changed under the policy, a stale snapshot submitted, a phase outside the declared set requested. The episode is rejected rather than salvaged, because a run that repaired its own violations would be a run nobody could reason about afterwards.",
  },
];

export type RouteProperty = {
  number: string;
  title: string;
  text: string;
};

/**
 * The four properties that make this a route rather than a search. Each one is a
 * constraint the engine enforces, not an intention.
 */
export const routeProperties: readonly RouteProperty[] = [
  {
    number: "01",
    title: "The outcome is typed, not scored",
    text: "Nothing is chosen for being most plausible. When there is nothing to tell the alternatives apart, the route must take a probe or return a boundary. The one thing it may not do is hand back the likeliest reading as though it had been established.",
  },
  {
    number: "02",
    title: "Every step has a price, and the budget is finite",
    text: "Work is counted in units as it is spent, and exhausting the budget is a lawful outcome with a named cause rather than a quiet decline in quality. That is what makes the difference between two runs a quantity instead of an impression.",
  },
  {
    number: "03",
    title: "Learning opens only after an outside disclosure",
    text: "The route may not confirm itself. Until an external evaluator discloses the outcome, no durable state may change, and an attempt to change it before that point is refused by name and written down.",
  },
  {
    number: "04",
    title: "Every shortcut has to be presentable",
    text: "Work goes down by consuming structures that were already proven, and each such consumption leaves its own record. A reduction nobody can point at is treated here as a defect rather than as a result.",
  },
];

export type RefusalGate = {
  code: string;
  gate: string;
  terminal: "BOUNDARY" | "REJECT";
  refusesWhen: string;
  instead: string;
};

/**
 * The five places an episode is allowed to stop. Four end in a boundary and one
 * in a rejection, and the record says which.
 */
export const refusalGates: readonly RefusalGate[] = [
  {
    code: "G1",
    gate: "Nothing left to distinguish with",
    terminal: "BOUNDARY",
    refusesWhen: "Several readings survive and no available probe would separate them.",
    instead:
      "A boundary is returned naming what could not be separated, rather than the reading the route happens to find most plausible.",
  },
  {
    code: "G2",
    gate: "The space could not be opened in full",
    terminal: "BOUNDARY",
    refusesWhen: "The candidate portfolio cannot be completed, or materialising it would exceed the declared limit.",
    instead:
      "The episode stops before anything is chosen, because a choice out of a space nobody can vouch for is not a lawful choice.",
  },
  {
    code: "G3",
    gate: "No single lawful composition",
    terminal: "BOUNDARY",
    refusesWhen: "Either nothing composes lawfully, or two inequivalent lawful compositions both stand.",
    instead:
      "Both are reported as boundaries. The second is the interesting one: holding two answers is stated outright rather than resolved by preference.",
  },
  {
    code: "G4",
    gate: "The work budget is spent",
    terminal: "BOUNDARY",
    refusesWhen: "The counted work for the episode reaches its declared budget before the route completes.",
    instead:
      "A boundary is returned with the budget as its named cause, so running out is never confused with having answered poorly.",
  },
  {
    code: "G5",
    gate: "An invariant was broken",
    terminal: "REJECT",
    refusesWhen:
      "A probe set or its price was changed under the policy, a stale snapshot was submitted, or an undeclared phase was requested.",
    instead:
      "The episode is rejected rather than repaired. A rejection says the run was not lawful at all, which is a different statement from a boundary and is kept separate in the record.",
  },
];

export type MemoryRegister = {
  register: string;
  holds: string;
  detail: string;
  carried: boolean;
};

/**
 * What survives an episode, and what deliberately does not. The second entry is
 * the one that changed: durable learned state exists, it lives in a volume that
 * can be detached, and detaching it is how the published results were measured.
 */
export const memoryRegisters: readonly MemoryRegister[] = [
  {
    register: "The episode's record",
    holds: "What was checked, what was probed, what ran, what was refused, and how much work it cost.",
    detail:
      "Append-only and linked back to the observation it came from, so what was learned cannot be shown without the episodes that produced it. A record is read by people and by replay tooling, never by the decision path of a later episode.",
    carried: true,
  },
  {
    register: "The learned volume",
    holds: "Counters and learned orders over what to try first, held in a volume that can be detached.",
    detail:
      "Separable is the operative word. The volume is learned from the training data, then frozen and digested before the split that tests it is opened. Nothing in it is a weight, and nothing in it can widen what is permitted: removing it changes how quickly an answer is found, never which answers are lawful.",
    carried: true,
  },
  {
    register: "Proven structures and their lifecycle",
    holds: "Structures that passed the formation checks, each standing as active, weakened, or retired.",
    detail:
      "A structure is weakened by a counterexample rather than deleted quietly, and everything derived from it loses force with it. So a structure that turns out to be wrong leaves a trail instead of disappearing from the story.",
    carried: true,
  },
  {
    register: "Learned weights",
    holds: "Nothing. There are none.",
    detail:
      "No parameter is fitted, adjusted, or accumulated. What differs between two runs is the order candidates are tried in and which proven structures are already available — never what counts as a lawful answer.",
    carried: false,
  },
  {
    register: "Any change to what is permitted",
    holds: "Nothing. Learning cannot reach the verdict.",
    detail:
      "The laws, the candidate set, and the verifier's authority are frozen with respect to everything above. An episode may end up doing less work than the one before it; it may not end up being allowed more.",
    carried: false,
  },
];

export type WalkthroughRow = {
  step: string;
  asks: string;
  /** Exact machine value: kept untranslated and left-to-right in every locale. */
  value: string;
  note: string;
};

/**
 * One evaluated row of a public run, carried through with concrete values. This
 * is one bounded step, not the route above: the state was learned before the
 * split that tests it was opened, and nothing in the run writes back to it. The
 * counters that sit at zero are properties of that discipline, not evidence that
 * the artefact learns nothing — it learns, and then it stops.
 */
export const thinkingWalkthrough: readonly WalkthroughRow[] = [
  {
    step: "01",
    asks: "What came in?",
    value: "one held-out row",
    note: "A row from the split that was sealed until now. Nothing about it may widen the set of answers it is allowed to reach.",
  },
  {
    step: "02",
    asks: "What was already fixed?",
    value: "answers · state · policy",
    note: "The answer set, the learned state and the publishing policy were each frozen and digested from the training split. None of the three moves while this split is being read.",
  },
  {
    step: "03",
    asks: "Where does the run stand?",
    value: "P1 ∈ Q_3",
    note: "The whole mutable state is one label from the three declared at this level.",
  },
  {
    step: "04",
    asks: "What answers exist at all?",
    value: "122",
    note: "The closed answer set is entered in full. It was fixed from the training split before this row was read, not assembled during the run.",
  },
  {
    step: "05",
    asks: "In what order are they taken?",
    value: "ranked, unpublished",
    note: "Counting memory orders the whole set for this context. The ordering is recorded and never leaves the record on its own.",
  },
  {
    step: "06",
    asks: "May any of it be published?",
    value: "right ∧ structure ∧ program",
    note: "Three separate rights have to be bought. Any one missing and the row ends as a boundary with its cause named.",
  },
  {
    step: "07",
    asks: "How many typed steps ran?",
    value: "84",
    note: "Three reading channels, seven levels, four families — and every one of them has to pass before anything is admitted.",
  },
  {
    step: "08",
    asks: "Which candidate, and for how long?",
    value: "handle × 1",
    note: "One candidate is bound to a single process-local use. A second use is refused by the sequence check.",
  },
  {
    step: "09",
    asks: "What actually ran?",
    value: "arity 2 · route_depth 1",
    note: "One bounded action, then the run ends and writes its receipt. There is no second step inside the run.",
  },
];

export const thinkingMisreadings = [
  {
    claim: "GALO thinks the way a person thinks.",
    correction:
      "The word names a written-out route with declared phases, a counted budget, and a typed outcome. No claim about cognition, understanding, or awareness is made here or anywhere else on this site.",
  },
  {
    claim: "The route keeps going until it is satisfied.",
    correction:
      "It cannot. The budget is finite and counted as it is spent, and exhausting it is a lawful outcome with a named cause. An episode ends on a settled answer or on a boundary, never on having tried for long enough.",
  },
  {
    claim: "GALO works out which candidate is best.",
    correction:
      "Nothing is scored. When the alternatives cannot be told apart, the route takes a probe or returns a boundary — it never hands back the most plausible one as though it had been established.",
  },
  {
    claim: "Nothing is learned here, since there are no weights.",
    correction:
      "There are no weights, and there is learning. What is learned is where to look and in what order, held in a volume kept apart from the engine; what may never be learned is the verdict. The public runs measure that learned state on data it was never fitted to, and the coverage that belongs beside each accuracy is published with it on the evidence page.",
  },
  {
    claim: "The route drawn on this page is what the published results measured.",
    correction:
      "It is not, and the gap is published rather than glossed. What a public run exercises is one bounded step: a closed set of possible answers, a ranking over it, the three conditions an answer has to meet, and a typed route that has to pass. The phases around that step — taking a probe, waiting for an outside disclosure, revising a persistent Atlas — are not in the measured path, so the architecture's joint contribution is unestablished rather than demonstrated. An end-to-end run that would settle it is the next registered step.",
  },
] as const;

export const thinkingTranslationKeys = [
  ...new Set([
    ...routePhases.flatMap((phase) => [
      phase.title,
      phase.question,
      phase.happens,
      phase.detail,
      phase.stopsWhen,
      phase.heroGloss,
      phase.publicName,
    ]),
    ...lawfulExits.flatMap((exit) => [exit.title, exit.meaning, exit.detail, exit.plain]),
    ...routeProperties.flatMap((entry) => [entry.title, entry.text]),
    ...refusalGates.flatMap((gate) => [gate.gate, gate.refusesWhen, gate.instead]),
    ...memoryRegisters.flatMap((entry) => [entry.register, entry.holds, entry.detail]),
    ...thinkingWalkthrough.flatMap((row) => [row.asks, row.note]),
    ...thinkingMisreadings.flatMap((entry) => [entry.claim, entry.correction]),
  ]),
] as const;
