/**
 * The thinking schemes.
 *
 * Everything on this route describes a decision procedure that is written out in
 * advance, so each stage carries the status it actually has: `CURRENT V4` for a
 * stage the shipped engine performs on every run, and `TARGET` for a stage that
 * exists as written architecture only. Nothing here describes cognition,
 * understanding, or autonomy.
 */

export type ThoughtStatus = "CURRENT V4" | "TARGET";

export type ThoughtStage = {
  number: string;
  name: string;
  question: string;
  happens: string;
  detail: string;
  stopsWhen: string;
  status: ThoughtStatus;
};

/**
 * One complete thought, drawn stage by stage. The first seven stages are what the
 * shipped engine does; the last two are written architecture and are marked as
 * such everywhere they appear.
 */
export const thoughtStages: readonly ThoughtStage[] = [
  {
    number: "01",
    name: "An observation arrives",
    question: "What came in?",
    happens: "One input reaches the engine and is treated as a candidate for matching, never as text to interpret.",
    detail:
      "The engine does not read meaning out of the input. It holds the input as an opaque value that will either match a declared pattern or fail to match it. Because nothing is inferred at this stage, two identical inputs are guaranteed to enter the following stages in exactly the same condition.",
    stopsWhen: "Nothing stops here; this stage only receives.",
    status: "CURRENT V4",
  },
  {
    number: "02",
    name: "The pattern is recognised or refused",
    question: "Is this something I am allowed to act on?",
    happens:
      "The input is matched against exactly two declared source patterns, and anything else is refused outright.",
    detail:
      "The pattern alpha,beta selects the LEFT role and the even enumeration parity; gamma,delta selects RIGHT and odd. There is no third branch and no fallback branch. An unmatched input produces a refusal with a named reason rather than a best guess, which is the first and largest difference between this procedure and an open-ended one.",
    stopsWhen: "The input matches neither declared pattern.",
    status: "CURRENT V4",
  },
  {
    number: "03",
    name: "The current position is read",
    question: "Where am I standing right now?",
    happens: "The state is one named position from the finite carrier declared for the working level.",
    detail:
      "At L3 the carrier is exactly {P0, P1, P2}; at L7 it is exactly seven labels. The position is the whole of the engine's state — there is no second, hidden state alongside it. This is why the state can be printed in full into a record instead of being summarised.",
    stopsWhen: "The declared level offers no such position.",
    status: "CURRENT V4",
  },
  {
    number: "04",
    name: "The candidate universe is opened",
    question: "What could I possibly do next?",
    happens:
      "All 1,204 committed descriptors are entered — the complete list the release commits to before anything runs.",
    detail:
      "The release fixes the list; the run never assembles it. Nothing joins it afterwards, and nothing outside it executes under any circumstances. So the stages that follow narrow rather than search: the answer is known to sit inside a finite set a reviewer can enumerate alone.",
    stopsWhen: "A requested descriptor is not a member of the committed universe.",
    status: "CURRENT V4",
  },
  {
    number: "05",
    name: "Declared filters narrow the set",
    question: "Which of those am I actually permitted to do?",
    happens: "880 descriptors are executable, and the recognised pattern exposes one 440-candidate parity frontier.",
    detail:
      "Both cuts are written into the release contract rather than decided during the run. Only four action kinds are executable at all; the remaining descriptors stay inert by construction. The parity half is fixed by whichever of the two patterns matched at stage 02, so the same input always reaches the same frontier.",
    stopsWhen: "The candidate is inert or sits on the other parity half.",
    status: "CURRENT V4",
  },
  {
    number: "06",
    name: "The order is derived and one handle is bound",
    question: "Which single candidate do I take, and can I prove I would take it again?",
    happens:
      "A SHA-256 order over observation, candidate ID, and ordinal fixes the sequence, and one candidate is bound to a single use.",
    detail:
      "This is the stage most often mistaken for judgement. It is not: the order is a hash of values that are all recorded, so anyone holding the record can recompute the same order and reach the same candidate. The bound handle is one-shot and process-local — using it twice is refused rather than tolerated.",
    stopsWhen: "The handle has already been spent, rolled back, or revoked.",
    status: "CURRENT V4",
  },
  {
    number: "07",
    name: "One bounded action runs and is recorded",
    question: "What did I do, and what does the record say?",
    happens:
      "A single action of arity 2 executes at route depth 1, and a receipt records the checks, the work units, and the outcome.",
    detail:
      "The run ends here. There is no second step inside the same run, no revision of the earlier stages, and no write back into any learned store: semantic reads, rank effects, and learning writes are all zero. The receipt is the deliverable, and it is what someone else replays.",
    stopsWhen: "A precondition of the bounded action is unmet, and the refusal itself is recorded.",
    status: "CURRENT V4",
  },
  {
    number: "08",
    name: "The world model is revised",
    question: "What should change in what I hold about the world?",
    happens: "The recorded outcome would update an explicit world model, entry by entry, rather than a set of weights.",
    detail:
      "This stage is written architecture with named preconditions, and it does not run today. Its point is that a revision would be a named edit to a named entry, so a reviewer could ask which entry changed, why, and on the strength of which receipt — the question that cannot be put to a fitted parameter.",
    stopsWhen: "It does not run at all in the current release.",
    status: "TARGET",
  },
  {
    number: "09",
    name: "The working resolution is reconsidered",
    question: "Do I need finer distinctions for what comes next?",
    happens: "The level would be chosen in response to the situation instead of being declared in advance.",
    detail:
      "A coarser level never lies; it simply stops being able to tell two situations apart. Selecting the level automatically is exactly the adaptive-resolution part of the architecture, and it is open work. In the current release the level is fixed before the run and never changes during it.",
    stopsWhen: "It does not run at all in the current release.",
    status: "TARGET",
  },
];

export type RefusalGate = {
  code: string;
  gate: string;
  refusesWhen: string;
  instead: string;
};

/**
 * The five places a thought can stop. Each one is a declared check, so a stop is
 * a recorded outcome with a named cause rather than a failure to produce output.
 */
export const refusalGates: readonly RefusalGate[] = [
  {
    code: "G1",
    gate: "Pattern not accepted",
    refusesWhen: "The observation matches neither of the two declared source patterns.",
    instead: "Nothing is executed and no candidate is opened. The refusal names the gate that stopped it.",
  },
  {
    code: "G2",
    gate: "Kind not executable",
    refusesWhen: "The candidate's action kind is outside the four kinds the release makes executable.",
    instead: "The descriptor stays inert. It remains a member of the committed universe, but it cannot run.",
  },
  {
    code: "G3",
    gate: "Outside the exposed frontier",
    refusesWhen: "The candidate sits on the parity half that the matched pattern did not select.",
    instead: "It is never exposed to ordering, so it cannot be reached even accidentally.",
  },
  {
    code: "G4",
    gate: "Handle already spent",
    refusesWhen: "A one-shot executable handle is used a second time, after rollback, or after revocation.",
    instead: "The second use is refused by the sequence check, and the attempt appears in the record.",
  },
  {
    code: "G5",
    gate: "Outside the declared scope",
    refusesWhen: "A step would require reading meaning, changing a ranking, or writing something learned.",
    instead: "All three counters are held at zero, so the step cannot occur rather than occurring quietly.",
  },
];

export type MemoryRegister = {
  register: string;
  holds: string;
  detail: string;
  carried: boolean;
};

/**
 * What survives from one thought to the next, and what deliberately does not.
 */
export const memoryRegisters: readonly MemoryRegister[] = [
  {
    register: "The current position",
    holds: "One label from the declared carrier, such as P2 at L3.",
    detail:
      "This is the entire mutable state. It can be written into a record in full, compared to another run character by character, and restored exactly.",
    carried: true,
  },
  {
    register: "The declared boundary",
    holds: "Level, laws, executable kinds, arity, route depth, and accepted patterns.",
    detail:
      "Fixed by the release before any run begins. A run cannot widen it, and two runs of the same release are bounded identically.",
    carried: true,
  },
  {
    register: "The receipt ledger",
    holds: "An append-only record of what each completed step checked, executed, and refused.",
    detail:
      "The ledger is read by people and by replay tooling, not by the engine's decision path. It never feeds back into the ordering of a later run.",
    carried: true,
  },
  {
    register: "Learned weights",
    holds: "Nothing. There are none.",
    detail:
      "No parameter is fitted, adjusted, or accumulated. Two runs separated by a thousand other runs behave identically on the same input.",
    carried: false,
  },
  {
    register: "An accumulated preference",
    holds: "Nothing. Order comes from a hash, not from history.",
    detail:
      "Because the ordering input is observation, candidate ID, and ordinal, an earlier run cannot make a later run prefer anything. learning_writes stays at zero.",
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
 * One thought carried through with concrete values, so the schemes above can be
 * checked against something specific rather than read as a metaphor.
 */
export const thinkingWalkthrough: readonly WalkthroughRow[] = [
  {
    step: "01",
    asks: "What came in?",
    value: "alpha,beta",
    note: "The input is held as an opaque value. Nothing is inferred from it before it is matched.",
  },
  {
    step: "02",
    asks: "Which declared pattern matched?",
    value: "LEFT · even",
    note: "The first of the two accepted patterns matched, which fixes both the operand role and the enumeration parity.",
  },
  {
    step: "03",
    asks: "Where does the run stand?",
    value: "P1 ∈ Q_3",
    note: "The whole mutable state is one label from the three declared at this level.",
  },
  {
    step: "04",
    asks: "What exists at all?",
    value: "1,204",
    note: "The committed universe is entered in full. It was fixed by the release, not assembled during the run.",
  },
  {
    step: "05",
    asks: "What is allowed to execute?",
    value: "880",
    note: "Only four action kinds are executable; every other descriptor stays inert by construction.",
  },
  {
    step: "06",
    asks: "What is exposed to this pattern?",
    value: "440",
    note: "The matched pattern selects one parity half, so the other half is never even offered for ordering.",
  },
  {
    step: "07",
    asks: "In what order are they taken?",
    value: "SHA-256(observation, candidate_id, ordinal)",
    note: "Every input to the order is recorded, so the same sequence can be recomputed by someone else.",
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
      "The word names a written-out decision procedure with declared stages. No claim about cognition, understanding, or awareness is made anywhere on this site.",
  },
  {
    claim: "The loop runs continuously until it is satisfied.",
    correction:
      "The current engine performs one bounded step per run at route depth 1. Multi-step trajectories are named open work on the evidence page.",
  },
  {
    claim: "GALO works out which action is best.",
    correction:
      "Nothing is scored. The order is derived from a hash of recorded values, which is why a reviewer can recompute it and reach the same candidate.",
  },
  {
    claim: "Each thought teaches GALO something.",
    correction:
      "Learning writes are held at zero. Revising an explicit world model is stage 08, and stage 08 is target architecture rather than shipped behaviour.",
  },
  {
    claim: "A refusal means the system failed.",
    correction:
      "A refusal is a recorded outcome with a named gate. The design prefers a stop that can be pointed at over an answer that cannot be traced.",
  },
] as const;

export const thinkingTranslationKeys = [
  ...new Set([
    ...thoughtStages.flatMap((stage) => [stage.name, stage.question, stage.happens, stage.detail, stage.stopsWhen]),
    ...refusalGates.flatMap((gate) => [gate.gate, gate.refusesWhen, gate.instead]),
    ...memoryRegisters.flatMap((entry) => [entry.register, entry.holds, entry.detail]),
    ...thinkingWalkthrough.flatMap((row) => [row.asks, row.note]),
    ...thinkingMisreadings.flatMap((entry) => [entry.claim, entry.correction]),
  ]),
] as const;
