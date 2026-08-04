export type BeginnerCountRow = {
  object: string;
  calculation: string;
  count: number;
  meaning: string;
};

export const beginnerCountLedger: readonly BeginnerCountRow[] = [
  {
    object: "Ordered input pairs for one law",
    calculation: "Σ(n²), n=1…7",
    count: 140,
    meaning: "Every row-column address for one binary operation across L1–L7.",
  },
  {
    object: "Raw PLUS and STAR coordinates",
    calculation: "2 × 140",
    count: 280,
    meaning: "The same addresses are evaluated once under PLUS and once under STAR.",
  },
  {
    object: "Oriented typed coordinates",
    calculation: "2 × 280",
    count: 560,
    meaning: "Each raw law coordinate is recorded with LEFT or RIGHT source-active role placement.",
  },
  {
    object: "Current active runtime coordinates",
    calculation: "560 − 4 at control-only L1",
    count: 556,
    meaning: "The mathematical catalogue includes L1; current V4 activates L2–L7 and keeps L1 as control-only.",
  },
] as const;

export const theoryObjectClasses = [
  {
    object: "Pole",
    layer: "FORMAL",
    exact: "P_i ∈ Q_n",
    meaning: "One local state label inside one finite carrier.",
    boundary: "Not a complete thought, world model, semantic concept, or global agent state.",
  },
  {
    object: "Typed transition coordinate",
    layer: "FORMAL",
    exact: "level:family:source:active",
    meaning: "One address that fixes a level, law family, and the semantic roles of both inputs.",
    boundary: "Its target is calculated; its domain meaning and permission are separate contracts.",
  },
  {
    object: "Committed descriptor",
    layer: "CURRENT V4",
    exact: "candidate_id + declared metadata",
    meaning: "One member of the finite candidate universe committed by the release.",
    boundary: "A descriptor may be non-executable and is not a learned concept or completed action.",
  },
  {
    object: "Candidate frontier",
    layer: "CURRENT V4",
    exact: "440 candidates for one accepted pattern",
    meaning: "The parity-filtered candidates that the deterministic selector is allowed to order.",
    boundary: "The order is hash-derived, not a semantic judgment, probability, or learned preference.",
  },
  {
    object: "One-shot handle",
    layer: "CURRENT V4",
    exact: "bound candidate + process-local sequence",
    meaning: "A runtime capability bound to one admitted candidate and one bounded use.",
    boundary:
      "Current rollback, revocation, and sequencing are process-local; no persistent trusted head is implemented.",
  },
  {
    object: "World Atlas state",
    layer: "TARGET · NOT PRESENT",
    exact: "typed objects + events + hypotheses + evidence + revisions",
    meaning: "The target architecture's explicit, revisable model of a domain and its alternatives.",
    boundary: "A trained current Atlas is not present and Atlas state has no effect on current V4 ranking.",
  },
  {
    object: "Execution receipt",
    layer: "CURRENT V4",
    exact: "check + scope + action + work ledger",
    meaning: "A machine-readable witness of what one bounded contour checked and executed.",
    boundary: "Not a mathematical theorem, truth certificate, customer outcome, or proof of intelligence.",
  },
] as const;

export const theorySymbolLegend = [
  { symbol: "Q_n", reading: "Q sub n", meaning: "The complete n-element carrier at level L_n." },
  { symbol: "P_i", reading: "P sub i", meaning: "The pole whose calculation index is i modulo n." },
  { symbol: "|X|", reading: "the size of X", meaning: "The number of elements in a finite set X." },
  { symbol: "Σ", reading: "sum", meaning: "Add the indicated quantity over every stated index." },
  { symbol: "mod n", reading: "modulo n", meaning: "Keep the remainder after division by n; this creates wraparound." },
  {
    symbol: "f:X→Y",
    reading: "f maps X to Y",
    meaning: "A function assigning each input in X exactly one output in Y.",
  },
  {
    symbol: "≅",
    reading: "is isomorphic to",
    meaning: "The structures have the same form under a reversible structure-preserving map.",
  },
  { symbol: "σ", reading: "sigma", meaning: "A relabelling map; here it normally denotes an automorphism." },
  {
    symbol: "U(n)",
    reading: "units modulo n",
    meaning: "Indices u with gcd(u,n)=1; multiplication by u gives the allowed pointed relabellings.",
  },
  {
    symbol: "Orb(x)",
    reading: "orbit of x",
    meaning: "Every object reachable from x under the declared group action.",
  },
  { symbol: "Stab(x)", reading: "stabilizer of x", meaning: "Every group element that leaves x fixed." },
  {
    symbol: "Fix(g)",
    reading: "fixed points of g",
    meaning: "The objects that the selected transformation g does not move.",
  },
  { symbol: "X/G", reading: "X modulo the action of G", meaning: "The set of orbits, not ordinary numeric division." },
] as const;

export const runtimeArithmeticRows = [
  {
    value: "108",
    calculation: "4 × Σ_(n=2)^7 n = 4 × 27",
    meaning: "One release coverage quantum across four typed families and the active levels L2–L7.",
  },
  {
    value: "1,204",
    calculation: "556 + 6 × 108",
    meaning: "The complete committed descriptor universe in the current release.",
  },
  {
    value: "880",
    calculation: "556 + 3 × 108",
    meaning: "The subset whose declared kinds are executable in current V4.",
  },
  {
    value: "440",
    calculation: "880 ÷ 2",
    meaning: "The even- or odd-parity frontier exposed by one of the two accepted source patterns.",
  },
] as const;

export const currentV4Flow = [
  {
    title: "Match one fixed source pattern",
    exact: "alpha,beta or gamma,delta",
    detail: "Only two exact closed patterns are accepted; arbitrary free text is outside this selector contract.",
  },
  {
    title: "Enter the committed universe",
    exact: "committed=1,204",
    detail: "Every candidate must already belong to the finite release commitment.",
  },
  {
    title: "Filter executable kinds",
    exact: "executable=880",
    detail: "The executable ontology is limited to FREE_FRAME, JOINT_COMPOSITION, PROBE, and ROUTE.",
  },
  {
    title: "Choose a parity frontier",
    exact: "LEFT/even or RIGHT/odd · frontier=440",
    detail: "The recognized source pattern selects one half of the executable enumeration.",
  },
  {
    title: "Derive a deterministic order",
    exact: "SHA-256(observation,candidate_id,ordinal)",
    detail: "The hash order is replayable; Atlas semantic reads, rank effects, and learning writes are all zero.",
  },
  {
    title: "Bind a one-shot handle",
    exact: "membership + sequence + single use",
    detail: "The selected candidate is bound to one process-local execution contour.",
  },
  {
    title: "Execute one bounded action",
    exact: "arity=2 · route_depth=1",
    detail: "Current V4 does not execute the formal multi-step program trees described in the mathematics chapter.",
  },
  {
    title: "Record the receipt",
    exact: "phase + occurrence + work IDs",
    detail: "The receipt supports bounded replay and accounting; it does not measure external gain or truth.",
  },
] as const;

export const targetArchitectureFlow = [
  {
    title: "Authenticated observation",
    status: "TARGET · NOT PROVEN",
    detail: "Accept externally grounded evidence with source custody, not only a bundled finite sample.",
  },
  {
    title: "Typed domain map",
    status: "TARGET",
    detail:
      "Declare how domain objects and alternatives map into local finite coordinates without assigning universal pole meanings.",
  },
  {
    title: "Persistent World Atlas",
    status: "TARGET · NOT PRESENT",
    detail: "Maintain explicit objects, events, competing hypotheses, evidence, and local revisions across time.",
  },
  {
    title: "Minimal sufficient resolution",
    status: "TARGET · NOT PROVEN",
    detail: "Choose the smallest level that retains every task-relevant distinction for the current decision.",
  },
  {
    title: "Explicit ProgramIR",
    status: "TARGET",
    detail: "Compile a bracketed, typed, auditable multi-step program rather than an unstructured action list.",
  },
  {
    title: "Authorized action",
    status: "TARGET",
    detail: "Require policy, provenance, capability, budget, and rollback contracts before real execution.",
  },
  {
    title: "Externally grounded outcome",
    status: "TARGET · NOT PROVEN",
    detail: "Use a preregistered evaluator to measure whether the action helped outside the internal receipt ledger.",
  },
  {
    title: "Local revision and policy update",
    status: "TARGET · NOT STARTED",
    detail:
      "Revise only affected hypotheses and authorize learning only after the evidence and evaluation gates close.",
  },
] as const;

export const theoryArchitectureLayers = [
  {
    number: "01",
    title: "Finite state alphabet",
    status: "FORMAL",
    detail: "L1–L7 provide named finite carriers. A pole is a local state label, not a word meaning or neuron.",
  },
  {
    number: "02",
    title: "Frozen transition laws",
    status: "FORMAL",
    detail: "PLUS and STAR turn every ordered pair of poles into one exact target pole.",
  },
  {
    number: "03",
    title: "Typed role placement",
    status: "FORMAL",
    detail: "LEFT and RIGHT retain which input is the source and which input is active.",
  },
  {
    number: "04",
    title: "Bounded current selection",
    status: "CURRENT V4",
    detail:
      "A deterministic selector orders a finite declared candidate frontier for exactly two fixed source patterns.",
  },
  {
    number: "05",
    title: "Receipt-backed execution",
    status: "CURRENT V4",
    detail:
      "Membership, one-shot execution, process-local rollback, process-local revocation, and work accounting are recorded within the current scope.",
  },
  {
    number: "06",
    title: "Adaptive World Atlas loop",
    status: "TARGET",
    detail:
      "Persistent semantic state, partner-grounded evaluation, multi-step programs, and learning remain target architecture.",
  },
] as const;

export const theoryEvidenceLadder = [
  {
    status: "FORMALLY DERIVED",
    question: "Does the statement follow from the declared finite laws?",
    example: "The 560-coordinate count and the role of P0 are exhaustively derivable.",
  },
  {
    status: "TESTED",
    question: "Did independent executable checks reproduce the derivation?",
    example: "All finite tables, typed cells, automorphisms, and homomorphisms are enumerated in tests.",
  },
  {
    status: "RELEASE VERIFIED",
    question: "Did the supplied archive pass the named replay contour?",
    example: "Fresh STATIC and FAST passed; the stored FULL receipt reports 1,366/1,366.",
  },
  {
    status: "BOUNDARY",
    question: "Is a required condition missing, blocked, or outside the tested scope?",
    example: "Fresh FULL was not run and CPython 3.13 was unavailable in the review session.",
  },
  {
    status: "NOT PROVEN",
    question: "Would the claim require external data or a stronger evaluator?",
    example: "External operational gain and arbitrary free-text reasoning are not proven.",
  },
] as const;

export const theoryGlossary = [
  {
    term: "Carrier",
    plain: "The complete finite set of allowed states at one level.",
    formal: "Q_n={P0,…,P_(n−1)}.",
  },
  {
    term: "Pole",
    plain: "One named position inside a carrier.",
    formal: "P_i is identified with residue i modulo n for calculation.",
  },
  {
    term: "Level",
    plain: "The choice of how many distinct local states are available.",
    formal: "L_n uses the n-element carrier Q_n; a larger n is not automatically better or more intelligent.",
  },
  {
    term: "Binary operation",
    plain: "A rule that accepts two allowed states and returns one allowed state.",
    formal: "f:Q_n×Q_n→Q_n.",
  },
  {
    term: "Modulo n",
    plain: "Wrap around to P0 after reaching n, like a finite dial.",
    formal: "Indices differing by a multiple of n represent the same residue class.",
  },
  {
    term: "Cayley table",
    plain: "A complete lookup table for a finite binary operation.",
    formal: "Row is the left operand, column is the right operand, and the cell is the result.",
  },
  {
    term: "PLUS",
    plain: "Cyclic movement around the finite carrier.",
    formal: "PLUS_n(P_i,P_j)=P_((i+j) mod n); (Q_n,PLUS_n) is isomorphic to the cyclic group C_n.",
  },
  {
    term: "STAR",
    plain: "A reset-sensitive cyclic rule: a left P0 resets; otherwise it follows PLUS.",
    formal: "STAR_n(P_i,P_j)=P0 when i=0 and P_((i+j) mod n) otherwise.",
  },
  {
    term: "Left zero",
    plain: "An element that forces the result when it is placed on the left.",
    formal: "P0★x=P0 for every x.",
  },
  {
    term: "Right-neutral element",
    plain: "An element that leaves the other input unchanged when placed on the right.",
    formal: "x★P0=x; this does not make P0 a two-sided identity.",
  },
  {
    term: "Source state",
    plain: "The state from which a typed transition begins.",
    formal: "The source role is retained even when operand swapping gives the same numeric target.",
  },
  {
    term: "Active pole",
    plain: "The second semantic input applied to the source.",
    formal: "LEFT/RIGHT determines whether active occupies the raw right or left operand position.",
  },
  {
    term: "Typed coordinate",
    plain: "A complete address for one deterministic transition.",
    formal: "level:family:source:active, with a separately computed target.",
  },
  {
    term: "Composition",
    plain: "Using the output of one transition as an input to the next.",
    formal: "For nonassociative STAR, the syntax tree or brackets are part of the program.",
  },
  {
    term: "Automorphism",
    plain: "A reversible relabelling that leaves every declared rule unchanged.",
    formal: "A bijection from an algebra to itself preserving its operations and named constants.",
  },
  {
    term: "Orbit",
    plain: "All acted-on objects reachable from one selected object by allowed symmetries.",
    formal: "Orb(x)={g·x | g∈G}.",
  },
  {
    term: "Stabilizer",
    plain: "The symmetries that leave one selected acted-on object unchanged.",
    formal: "Stab(x)={g∈G | g·x=x}.",
  },
  {
    term: "Burnside's lemma",
    plain: "A second way to count symmetry classes by averaging fixed points.",
    formal: "|X/G|=(1/|G|)Σ_g |Fix(g)|.",
  },
  {
    term: "Homomorphism",
    plain: "A map between levels that preserves the declared operations.",
    formal: "It need not be injective; the zero homomorphism exists for every ordered level pair.",
  },
  {
    term: "Embedding",
    plain: "A structure-preserving map that keeps different source states different.",
    formal: "An injective homomorphism; nonzero A_n→A_m embeddings for n≥2 exist exactly when n divides m.",
  },
  {
    term: "Receipt",
    plain: "A machine-readable record of what a bounded execution checked and did.",
    formal: "A receipt is an operational witness, not a mathematical theorem or real-world truth certificate.",
  },
  {
    term: "Boundary",
    plain: "An explicit stop: the available evidence does not authorize the stronger conclusion.",
    formal: "BOUNDARY is a terminal status with a named missing condition or counterexample.",
  },
] as const;

export const theoryMisconceptions = [
  {
    claim: "P0 is the identity of STAR.",
    correction: "For n≥2, P0 is only right-neutral and only a left zero; STAR has no two-sided identity.",
  },
  {
    claim: "L7 is more intelligent than L3.",
    correction:
      "A higher level only offers more local distinctions. Intelligence and task value require separate evidence.",
  },
  {
    claim: "The 560 cells are concepts or neurons.",
    correction:
      "They are formal transition addresses. Semantics, memory, and learned parameters are separate object classes.",
  },
  {
    claim: "An orbit means several states are semantically identical.",
    correction:
      "An orbit records equivalence under one declared symmetry action; it does not merge meaning, provenance, or authority.",
  },
  {
    claim: "There is no morphism from L3 to L5.",
    correction: "The zero homomorphism exists. What does not exist is a nonzero or injective full-algebra embedding.",
  },
  {
    claim: "Verified finite mathematics proves learning or General AI.",
    correction:
      "It proves only the finite claims inside its contract. Persistent learning and General AI remain unclaimed.",
  },
] as const;
