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
  { symbol: "x∈X", reading: "x belongs to X", meaning: "The object x is an element of the set X." },
  { symbol: "A⇒B", reading: "A implies B", meaning: "Whenever A is true, B must also be true." },
  {
    symbol: "A⇔B",
    reading: "A if and only if B",
    meaning: "Both implications A⇒B and B⇒A hold.",
  },
  { symbol: "∅", reading: "the empty set", meaning: "A set containing no elements; it is not the pole P0." },
  { symbol: "n∤m", reading: "n does not divide m", meaning: "There is no integer q with m=qn." },
  { symbol: "S⊆X", reading: "S is a subset of X", meaning: "Every element of S also belongs to X." },
  {
    symbol: "Δ_X",
    reading: "the equality relation on X",
    meaning: "The pairs (x,x) and no pairs of distinct elements.",
  },
  {
    symbol: "ord(x)",
    reading: "the order of x",
    meaning: "The first positive repeat length returning x to the identity.",
  },
  { symbol: "Aut(A)", reading: "automorphisms of A", meaning: "All bijective structure-preserving self-maps of A." },
  { symbol: "End(A)", reading: "endomorphisms of A", meaning: "All structure-preserving maps from A to itself." },
  { symbol: "Hom(A,B)", reading: "homomorphisms from A to B", meaning: "All declared-structure-preserving maps A→B." },
  {
    symbol: "φ",
    reading: "phi",
    meaning: "Either a named map or Euler's totient φ(n); the surrounding definition fixes which one.",
  },
  {
    symbol: "gcd(a,b)",
    reading: "greatest common divisor",
    meaning: "The largest positive integer dividing both a and b.",
  },
  { symbol: "binom(n,k)", reading: "n choose k", meaning: "The number of k-element subsets of an n-element set." },
  {
    symbol: "G⋊H",
    reading: "semidirect product",
    meaning: "A group built from G and H together with a declared action of H on G.",
  },
  {
    symbol: "χ_s",
    reading: "character chi sub s",
    meaning: "A group homomorphism from the cyclic group to nonzero complex phases.",
  },
  {
    symbol: "exp(z)",
    reading: "the exponential of z",
    meaning: "Here it produces unit-circle phases such as exp(2πisk/n).",
  },
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

export type SchoolMathChapter = "theory" | "mathematics" | "symmetry";

export type SchoolMathLesson = {
  term: string;
  chapter: SchoolMathChapter;
  analogy: string;
  exactDefinition: string;
  workedExample: string;
  whyTrue: string;
  commonMistake: string;
  tableCheck: string;
  formulaCheck: string;
};

type SchoolMathGlossaryEntry = SchoolMathLesson & {
  plain: string;
  formal: string;
};

function schoolMathLesson(entry: SchoolMathLesson): SchoolMathGlossaryEntry {
  return { ...entry, plain: entry.analogy, formal: entry.exactDefinition };
}

export const schoolMathLessons: readonly SchoolMathGlossaryEntry[] = [
  schoolMathLesson({
    term: "Carrier",
    chapter: "theory",
    analogy: "Think of the labelled seats on one small carousel: the carrier is the complete list of seats that exist.",
    exactDefinition: "Q_n={P0,…,P_(n−1)} and |Q_n|=n.",
    workedExample: "L3: Q_3={P0,P1,P2}; there are exactly three allowed poles.",
    whyTrue:
      "The level is declared by listing one label for each residue from 0 through n−1, so no extra pole is hidden outside the list.",
    commonMistake: "A carrier is not the set of everything the agent knows; it is one finite local state set.",
    tableCheck: "L3 row and column headers: P0 | P1 | P2.",
    formulaCheck: "|Q_3|=3.",
  }),
  schoolMathLesson({
    term: "Pole",
    chapter: "theory",
    analogy: "A pole is one named seat on the carousel, not the whole carousel and not the passenger sitting there.",
    exactDefinition: "P_i∈Q_n with 0≤i<n; calculation identifies P_i with residue i modulo n.",
    workedExample: "L3: P2 is the label with calculation index 2; one further PLUS step reaches P0.",
    whyTrue:
      "The label-to-residue correspondence is a bijection, so every pole has one calculation index and every allowed index names one pole.",
    commonMistake: "P2 does not universally mean twice as much, better, later, or more intelligent than P1.",
    tableCheck: "L3: row P2 and column P2 are addresses labelled by P2, not measured quantities.",
    formulaCheck: "P_(i+kn)=P_i for every integer k.",
  }),
  schoolMathLesson({
    term: "Level",
    chapter: "theory",
    analogy: "Changing level is like choosing a dial with a different number of marked positions.",
    exactDefinition: "L_n is the local frame whose carrier is Q_n and whose index arithmetic is modulo n.",
    workedExample: "L2 has {P0,P1}; L3 has {P0,P1,P2}. P2 exists locally at L3 but not at L2.",
    whyTrue: "The subscript n fixes both the number of labels and the modulus used by every operation at that level.",
    commonMistake:
      "A larger level gives more distinctions, not automatically more knowledge, accuracy, or intelligence.",
    tableCheck: "L2 laws have 2×2 tables; L3 laws have 3×3 tables.",
    formulaCheck: "|Q_n|=n and |Q_n×Q_n|=n².",
  }),
  schoolMathLesson({
    term: "Binary operation",
    chapter: "theory",
    analogy: "It is a deterministic two-slot machine: insert a left state and a right state, then receive one state.",
    exactDefinition: "f:Q_n×Q_n→Q_n is a total function on ordered pairs.",
    workedExample: "L2 has four inputs: (P0,P0), (P0,P1), (P1,P0), and (P1,P1).",
    whyTrue: "A complete Cayley table contains one cell for every ordered pair and exactly one output in each cell.",
    commonMistake: "Binary means two inputs, not a two-element carrier and not a probabilistic yes-or-no answer.",
    tableCheck: "A 2×2 table has four filled body cells and no missing input pair.",
    formulaCheck: "|Q_2×Q_2|=2²=4.",
  }),
  schoolMathLesson({
    term: "Modulo n",
    chapter: "theory",
    analogy: "Modulo arithmetic is clock arithmetic: after the last mark, counting continues from the first mark.",
    exactDefinition: "i≡j (mod n) exactly when n divides i−j; the remainder is chosen from 0,…,n−1.",
    workedExample: "L3: 2+2=4 and 4 leaves remainder 1 after division by 3, so P2⊕P2=P1.",
    whyTrue: "The division algorithm gives one unique remainder between 0 and n−1 for every integer.",
    commonMistake: "The statement 4≡1 (mod 3) does not claim that the ordinary integers 4 and 1 are equal.",
    tableCheck: "L3 PLUS: row P2, column P2, cell P1.",
    formulaCheck: "(2+2) mod 3=1.",
  }),
  schoolMathLesson({
    term: "Cayley table",
    chapter: "theory",
    analogy: "It is the multiplication-table idea applied to any finite two-input rule.",
    exactDefinition:
      "The row names the raw-left operand, the column names the raw-right operand, and their intersection is f(row,column).",
    workedExample: "L3 PLUS: select row P1 and column P2; the intersection is P0.",
    whyTrue:
      "Rows and columns enumerate the full Cartesian product Q_n×Q_n, so the table is another complete representation of the function.",
    commonMistake: "Swapping row and column is harmless only after commutativity has been proved for that operation.",
    tableCheck: "row P1 · column P2 → P0.",
    formulaCheck: "PLUS_3(P1,P2)=P_((1+2) mod 3)=P0.",
  }),
  schoolMathLesson({
    term: "PLUS",
    chapter: "theory",
    analogy: "PLUS rotates a finite dial by the number of steps named by the second pole.",
    exactDefinition: "PLUS_n(P_i,P_j)=P_((i+j) mod n); (Q_n,PLUS_n,P0)≅C_n.",
    workedExample: "L3: start at P1, move two steps, and wrap around: P1⊕P2=P0.",
    whyTrue:
      "Addition of residues is closed, associative, and commutative; P0 is the identity and P_(n−i) is the inverse of P_i.",
    commonMistake:
      "PLUS is a finite cyclic law on labels, not ordinary addition of domain meanings or real quantities.",
    tableCheck: "L3 PLUS: row P1, column P2, cell P0; row P2, column P1 gives the same cell value.",
    formulaCheck: "(1+2) mod 3=0=(2+1) mod 3.",
  }),
  schoolMathLesson({
    term: "STAR",
    chapter: "theory",
    analogy: "STAR is a dial with a one-sided emergency latch: a raw-left P0 resets before any movement is calculated.",
    exactDefinition: "STAR_n(P_i,P_j)=P0 if i=0; otherwise STAR_n(P_i,P_j)=P_((i+j) mod n).",
    workedExample: "L3: P0★P2=P0, but P2★P0=P2 because only the raw-left input controls reset.",
    whyTrue: "The piecewise definition checks i=0 first; every nonzero row then agrees cell-for-cell with PLUS.",
    commonMistake: "A P0 on the right does not trigger reset, and STAR is not commutative for n≥2.",
    tableCheck: "L3 STAR: the P0 row is P0,P0,P0; the P2 row is P2,P0,P1.",
    formulaCheck: "STAR_3(P0,P2)=P0 while STAR_3(P2,P0)=P_((2+0) mod 3)=P2.",
  }),
  schoolMathLesson({
    term: "Left zero",
    chapter: "theory",
    analogy:
      "A left zero is a one-sided stop button: once it is in the left slot, the other input cannot change the output.",
    exactDefinition: "z is a left zero when z★x=z for every x; for STAR at n≥2, the unique left zero is z=P0.",
    workedExample: "L3: P0★P0=P0, P0★P1=P0, and P0★P2=P0.",
    whyTrue:
      "The first branch gives P0★x=P0. If z=P_k is nonzero, choose x=P_(n−k): then z★x=P0≠z, so no nonzero pole is a left zero.",
    commonMistake: "Left zero does not mean two-sided zero: P1★P0=P1≠P0.",
    tableCheck: "The complete P0 row of every STAR table is constant P0.",
    formulaCheck: "∀j, STAR_n(P0,P_j)=P0.",
  }),
  schoolMathLesson({
    term: "Right-neutral element",
    chapter: "theory",
    analogy: "A right-neutral element is a do-nothing input only when placed in the right slot.",
    exactDefinition:
      "e is right-neutral when x★e=x for every x; for STAR at n≥2, the unique right-neutral element is e=P0.",
    workedExample: "L3: P0★P0=P0, P1★P0=P1, and P2★P0=P2.",
    whyTrue:
      "P_i★P0=P_i for every i. Conversely, if e=P_k were right-neutral, P1★P_k=P1 would force 1+k≡1 (mod n), hence k≡0 and e=P0.",
    commonMistake: "Right-neutral does not mean two-sided identity: P0★P1=P0≠P1.",
    tableCheck: "The P0 column of the L3 STAR table reads P0,P1,P2 from top to bottom.",
    formulaCheck: "∀i, STAR_n(P_i,P0)=P_i.",
  }),
  schoolMathLesson({
    term: "Source state",
    chapter: "theory",
    analogy: "The source is the named starting role in a transition, like the person whose position is being updated.",
    exactDefinition:
      "source=P_s is a semantic role retained in level:family:source:active even when raw operand order changes.",
    workedExample: "L3 with source P0 and active P2: LEFT places P0 in the row; RIGHT places P0 in the column.",
    whyTrue: "The canonical record stores source separately from the left and right operand slots.",
    commonMistake: "Source does not always mean raw-left operand; it moves to the raw-right slot in a RIGHT family.",
    tableCheck: "LEFT: row=source; RIGHT: column=source.",
    formulaCheck: "LEFT(P_s,P_a)=F(P_s,P_a); RIGHT(P_s,P_a)=F(P_a,P_s).",
  }),
  schoolMathLesson({
    term: "Active pole",
    chapter: "theory",
    analogy: "The active pole is the second named role, like the instruction applied to the source.",
    exactDefinition:
      "active=P_a is retained as a semantic role; orientation determines whether it occupies the raw-right or raw-left slot.",
    workedExample:
      "L3 with source P0 and active P2: STAR_LEFT resets to P0, while STAR_RIGHT places P2 left and returns P2.",
    whyTrue:
      "STAR tests the raw-left operand, so moving the active role between axes can change the result without changing the law.",
    commonMistake:
      "Active is not automatically an action command or a global World Atlas state; it is one local operand role.",
    tableCheck: "STAR_LEFT uses column P2; STAR_RIGHT uses row P2.",
    formulaCheck: "STAR_LEFT(P0,P2)=P0; STAR_RIGHT(P0,P2)=P2.",
  }),
  schoolMathLesson({
    term: "Typed coordinate",
    chapter: "theory",
    analogy: "It is a postal address for one transition: removing any address field can send you to a different cell.",
    exactDefinition:
      "cell_id=L{n}:{family}:P{source}:P{active}; target is computed from the family law and orientation.",
    workedExample: "L3:STAR_RIGHT:P0:P2 has raw operands (P2,P0) and target P2.",
    whyTrue:
      "Level, family, source, and active together determine one raw ordered pair and therefore one deterministic output.",
    commonMistake:
      "Two coordinates that share a target are not the same typed record and do not share provenance automatically.",
    tableCheck: "L3 STAR: row P2, column P0 → P2.",
    formulaCheck: "STAR_RIGHT(P0,P2)=STAR_3(P2,P0)=P2.",
  }),
  schoolMathLesson({
    term: "Typed catalogue count",
    chapter: "theory",
    analogy: "Count an inventory by addresses: input squares first, rule books second, and role labels third.",
    exactDefinition: "Σ_(n=1)^7 n²=140; 2 laws give 280 raw law cells; 2 orientations give 560 typed coordinates.",
    workedExample: "L2 contributes 4·2·2=16 typed coordinates; L3 contributes 9·2·2=36.",
    whyTrue: "At level n there are n choices for source and n for active, independently, for each of four family tags.",
    commonMistake: "The 560 records are not neurons, concepts, learned skills, meanings, or units of intelligence.",
    tableCheck: "Per-level typed totals: 4,16,36,64,100,144,196.",
    formulaCheck: "4Σ_(n=1)^7 n²=4·140=560; active L2–L7: 560−4=556.",
  }),
  schoolMathLesson({
    term: "Rank",
    chapter: "mathematics",
    analogy: "Rank counts how many different destinations a fixed one-input machine can actually reach.",
    exactDefinition: "rank(T)=|Im(T)| for T:Q_n→Q_n obtained by fixing the family and active pole.",
    workedExample: "L3, active P2: STAR_LEFT maps P0,P1,P2 to P0,P0,P1, so its image is {P0,P1} and rank=2.",
    whyTrue: "A finite map's image is found by listing every output once and removing duplicates.",
    commonMistake:
      "This is finite transformation rank, not learned matrix rank; ABI LEFT is the standard right translation when active is fixed.",
    tableCheck: "Read the fixed P2 column for STAR_LEFT and the fixed P2 row for STAR_RIGHT.",
    formulaCheck: "rank(STAR_LEFT(_,P2))=2; rank(STAR_RIGHT(_,P2))=3 at L3.",
  }),
  schoolMathLesson({
    term: "Reduct and expansion",
    chapter: "mathematics",
    analogy: "The same game board can be studied with one rule book or with both rule books open.",
    exactDefinition: "G_n=(Q_n,PLUS_n,P0), S_n=(Q_n,STAR_n,P0), and A_n=(Q_n,PLUS_n,STAR_n,P0).",
    workedExample:
      "At L2 the carrier {P0,P1} is shared, but PLUS and STAR have different P0 rows and therefore define different reducts.",
    whyTrue: "A reduct forgets named operations; an expansion names more operations on the same carrier.",
    commonMistake: "Sharing the same set of poles does not make PLUS and STAR the same algebraic structure.",
    tableCheck: "L2 PLUS P0 row: P0,P1; L2 STAR P0 row: P0,P0.",
    formulaCheck: "signature(G_n)=(2,0); signature(S_n)=(2,0); signature(A_n)=(2,2,0).",
  }),
  schoolMathLesson({
    term: "Composition",
    chapter: "mathematics",
    analogy:
      "Composition is a recipe in which the output of one two-input step becomes an ingredient in the next step.",
    exactDefinition:
      "A full binary tree with k leaves has k−1 apply nodes; its C_(k−1) possible shapes are counted by Catalan numbers.",
    workedExample: "Three inputs have two trees: (P1★P0)★P1=P2 and P1★(P0★P1)=P1 at L3.",
    whyTrue: "Every binary apply joins two existing subexpressions, reducing the number of separate pieces by one.",
    commonMistake:
      "A list of operands is not a complete STAR program, and the formal tree is not a current V4 multi-step runtime claim.",
    tableCheck: "First tree lookups: P1★P0=P1, then P1★P1=P2; second tree: P0★P1=P0, then P1★P0=P1.",
    formulaCheck: "C_2=(1/3)binom(4,2)=2.",
  }),
  schoolMathLesson({
    term: "Nonassociative",
    chapter: "mathematics",
    analogy:
      "Parentheses are like recipe order: mixing the same ingredients in a different order can change the result.",
    exactDefinition: "An operation is nonassociative when some x,y,z satisfy (x★y)★z≠x★(y★z).",
    workedExample: "L3: (P1★P0)★P1=P2, while P1★(P0★P1)=P1.",
    whyTrue: "One explicit unequal pair of bracketed evaluations is enough to disprove a universal associativity law.",
    commonMistake: "Commutativity and associativity are different properties; STAR has neither for n≥2.",
    tableCheck: "The four L3 table lookups in the two trees return final cells P2 and P1.",
    formulaCheck: "P2≠P1 ⇒ STAR_3 is not associative.",
  }),
  schoolMathLesson({
    term: "Zero-prefix rule",
    chapter: "mathematics",
    analogy: "In a left-to-right chain, reaching the reset state is like a latch: every later step stays reset.",
    exactDefinition:
      "A left-associated STAR word follows modular prefix sums until a prefix equals P0; after that point every later value is P0.",
    workedExample: "L5: (P2★P3)★P4=P0★P4=P0, although P2⊕P3⊕P4=P4.",
    whyTrue:
      "Before reset, each nonzero left value uses addition; after reset, the left-zero law P0★x=P0 applies inductively.",
    commonMistake: "The final ordinary PLUS sum does not reveal whether an earlier STAR prefix already hit P0.",
    tableCheck: "L5 STAR: row P2, column P3 → P0; then row P0, column P4 → P0.",
    formulaCheck: "2+3≡0 (mod 5) ⇒ (P2★P3)★P4=P0.",
  }),
  schoolMathLesson({
    term: "Stable subset",
    chapter: "mathematics",
    analogy:
      "A subset is stable on one side if using one of its members in that slot never sends the result outside the subset.",
    exactDefinition: "Right-stable means S★Q_n⊆S; left-stable means Q_n★S⊆S.",
    workedExample: "L3: {P0} is right-stable because P0★x=P0, but not left-stable because P1★P0=P1.",
    whyTrue:
      "Every nonzero STAR row cycles through all of Q_n, so a proper nonempty right-stable subset can contain only P0.",
    commonMistake:
      "These one-sided magma subsets are not automatically ring ideals, and left/right refer to operand slots.",
    tableCheck: "L3 P0 row stays inside {P0}; the P0 column contains P1 and P2 outside {P0}.",
    formulaCheck: "{P0}★Q_3={P0}, but Q_3★{P0}=Q_3.",
  }),
  schoolMathLesson({
    term: "Congruence",
    chapter: "mathematics",
    analogy: "A congruence allows labels to be merged only when every operation remains well-defined after the merge.",
    exactDefinition:
      "An equivalence ∼ is a congruence when it is compatible with every named operation: x∼x' and y∼y' imply F(x,y)∼F(x',y') for each F; use STAR for S_n and both PLUS and STAR for A_n.",
    workedExample: "L3: if P0∼P1, then P0★P1=P0 and P1★P1=P2 force P0∼P2, so all poles merge.",
    whyTrue:
      "The reset row distinguishes P0 so strongly that any nontrivial identification propagates through compatibility to the universal relation.",
    commonMistake: "An arbitrary grouping of visually similar poles is not automatically a valid quotient.",
    tableCheck: "Compare the L3 cells (P0,P1)→P0 and (P1,P1)→P2 after assuming P0∼P1.",
    formulaCheck: "Con(S_n)={Δ_(Q_n),Q_n×Q_n} for n≥2.",
  }),
  schoolMathLesson({
    term: "Automorphism",
    chapter: "symmetry",
    analogy:
      "Rename every locker and key reversibly; if every instruction still works after renaming, the renaming is an automorphism.",
    exactDefinition: "A bijection σ:A_n→A_n preserving PLUS, STAR, and P0; σ_u(P_i)=P_((ui) mod n) for u∈U(n).",
    workedExample: "L3: u=2 fixes P0 and swaps P1 with P2.",
    whyTrue:
      "A unit u is invertible modulo n, so multiplication by u is a permutation and distributes over modular addition without moving zero.",
    commonMistake:
      "A reversible permutation is not enough; it must preserve every declared operation and named constant.",
    tableCheck: "L3 PLUS: σ(P1⊕P2)=σ(P0)=P0 and σ(P1)⊕σ(P2)=P2⊕P1=P0.",
    formulaCheck: "σ_u(F(x,y))=F(σ_u(x),σ_u(y)).",
  }),
  schoolMathLesson({
    term: "Group action",
    chapter: "symmetry",
    analogy:
      "A group action is a complete set of reversible buttons together with the rule for pressing buttons in sequence.",
    exactDefinition: "An action satisfies 1·x=x and (gh)·x=g·(h·x).",
    workedExample:
      "L3: U(3)={1,2}; button 1 does nothing and button 2 swaps P1,P2. Pressing button 2 twice returns every pole.",
    whyTrue: "Multiplying unit indices corresponds exactly to composing their multiplication permutations.",
    commonMistake: "One chosen symmetry is a group element, not the whole acting group and not an orbit.",
    tableCheck: "L3 action rows: u=1 maps 0,1,2 to 0,1,2; u=2 maps them to 0,2,1.",
    formulaCheck: "σ_2∘σ_2=σ_(4 mod 3)=σ_1=id.",
  }),
  schoolMathLesson({
    term: "Orbit",
    chapter: "symmetry",
    analogy: "An orbit is the list of every place a marker can reach when every allowed symmetry button is tried.",
    exactDefinition: "Orb(x)={g·x | g∈G}.",
    workedExample: "L3 under U(3): Orb(P0)={P0} and Orb(P1)={P1,P2}.",
    whyTrue:
      "Applying every group element produces exactly the reachable images, and the group axioms make reachability an equivalence relation.",
    commonMistake:
      "Objects in one orbit are structurally related, not automatically equal in meaning, provenance, evidence, or authority.",
    tableCheck: "Apply u=1 and u=2 to P1: the output list is P1,P2.",
    formulaCheck: "Orb(P1)={P_(1·1 mod 3),P_(2·1 mod 3)}={P1,P2}.",
  }),
  schoolMathLesson({
    term: "Stabilizer",
    chapter: "symmetry",
    analogy: "The stabilizer contains exactly the symmetry buttons that leave a chosen marker in its original place.",
    exactDefinition: "Stab(x)={g∈G | g·x=x}; |G|=|Orb(x)|·|Stab(x)| for finite actions.",
    workedExample: "L3: only u=1 fixes P1, so Stab(P1)={1}; 2=2·1 matches orbit–stabilizer.",
    whyTrue: "Group elements carrying x to the same orbit point form equal-sized cosets of the stabilizer.",
    commonMistake: "The stabilizer is a subgroup of transformations, while the orbit is a set of acted-on objects.",
    tableCheck: "L3: u=1 sends P1→P1; u=2 sends P1→P2.",
    formulaCheck: "|U(3)|=2=|Orb(P1)|·|Stab(P1)|=2·1.",
  }),
  schoolMathLesson({
    term: "Burnside's lemma",
    chapter: "symmetry",
    analogy: "Count symmetry classes by averaging how many objects each symmetry button leaves unmoved.",
    exactDefinition: "|X/G|=(1/|G|)Σ_(g∈G)|Fix(g)|.",
    workedExample: "L3 poles: identity fixes 3 and the swap fixes only P0, so (3+1)/2=2 orbits.",
    whyTrue: "Count pairs (g,x) with g·x=x in two ways: each orbit contributes exactly |G| such pairs.",
    commonMistake: "Do not divide the number of objects by |G| unless every orbit happens to have full size.",
    tableCheck: "L3 fixed-pole ledger: id→3, swap→1; direct orbit list: {P0}, {P1,P2}.",
    formulaCheck: "(3+1)/2=2; for ordered pairs, (9+1)/2=5.",
  }),
  schoolMathLesson({
    term: "Affine torsor symmetry",
    chapter: "symmetry",
    analogy:
      "A marked dial can be relabelled around its fixed origin; an unmarked dial may also be rotated before relabelling.",
    exactDefinition: "F_(u,b)(x)=ux+b with u∈U(n); all such maps form Hol(C_n)=C_n⋊U(n).",
    workedExample: "L3 shift T1(x)=x+1 preserves the unpointed affine torsor, but T1(P0★P0)=P1 while T1(P0)★T1(P0)=P2.",
    whyTrue:
      "The translation term b moves the named origin; STAR's unique left zero must remain P0, forcing b=0 for a STAR automorphism.",
    commonMistake:
      "Hol(C_n) is not the STAR automorphism group and an affine torsor map need not be a pointed group automorphism.",
    tableCheck: "L3 STAR compares the original cell (P0,P0)→P0 with the shifted cell (P1,P1)→P2.",
    formulaCheck: "T1(P0★P0)=P1≠P2=T1(P0)★T1(P0).",
  }),
  schoolMathLesson({
    term: "Inversion orbit",
    chapter: "symmetry",
    analogy: "Inversion pairs a clockwise difference with the equally long counter-clockwise difference on the dial.",
    exactDefinition: "ι(δ)=−δ mod n and ι²=id; its orbits contain δ and −δ.",
    workedExample: "L3 inversion orbits are {0} and {1,2} because −1≡2 (mod 3).",
    whyTrue: "Applying the minus sign twice returns the original residue, so every orbit has one or two elements.",
    commonMistake:
      "These are algebraic orbits of differences, not claims about physical mirrors, time reversal, or causality.",
    tableCheck: "L3 inversion lookup: 0→0, 1→2, 2→1.",
    formulaCheck: "−(−δ)≡δ (mod n).",
  }),
  schoolMathLesson({
    term: "Quadratic-residue block",
    chapter: "symmetry",
    analogy:
      "Colour nonzero dial marks by whether they are a square; some symmetries keep each colour, while others swap the colours.",
    exactDefinition: "QR(p)={u² mod p | u∈U(p)} for odd prime p; QR(p) is a subgroup of U(p).",
    workedExample: "L5: QR(5)={1,4} and the other unit block is {2,3}; multiplication by 2 swaps the two blocks.",
    whyTrue:
      "Multiplying by a square preserves square/non-square status, while multiplying by a non-square interchanges the two cosets.",
    commonMistake: "The full unit group preserves the unordered partition, but it does not fix each block separately.",
    tableCheck: "L5 under u=2: 1→2 and 4→3, so {1,4}→{2,3}.",
    formulaCheck: "QR(5)={1²,2²,3²,4²} mod 5={1,4}.",
  }),
  schoolMathLesson({
    term: "CRT boundary",
    chapter: "symmetry",
    analogy:
      "A six-position addition dial can be viewed as a two-position dial and a three-position dial together, but STAR's reset watches global zero.",
    exactDefinition: "CRT gives Z/6Z≅Z/2Z×Z/3Z for addition; it is not a coordinatewise STAR isomorphism.",
    workedExample: "L6: θ(3★1)=θ(4)=(0,1), but θ(3)★_coordθ(1)=(0,0).",
    whyTrue:
      "The residue 3 is zero modulo 3 but not globally zero modulo 6, so a coordinatewise reset fires when the original STAR reset does not.",
    commonMistake:
      "A decomposition preserving PLUS does not automatically preserve every other operation on the same carrier.",
    tableCheck: "L6 STAR: row P3, column P1 → P4; coordinate STAR resets the modulo-3 component.",
    formulaCheck: "θ(3★_6 1)=(0,1)≠(0,0)=θ(3)★_coordθ(1).",
  }),
  schoolMathLesson({
    term: "Character",
    chapter: "symmetry",
    analogy:
      "A character labels dial positions by equally spaced arrows on the complex unit circle while respecting addition.",
    exactDefinition:
      "A character is a group homomorphism C_n→C×; χ_s(k)=exp(2πisk/n), so χ_s(k+ℓ)=χ_s(k)χ_s(ℓ). It is faithful exactly when gcd(s,n)=1.",
    workedExample: "L3 with ω=exp(2πi/3): χ_1 maps P0→1, P1→ω, and P2→ω².",
    whyTrue: "The exponential turns addition of angles into multiplication of complex phases.",
    commonMistake: "P0 maps to complex 1, not complex 0; only unit s gives a faithful label with trivial kernel.",
    tableCheck: "L3 PLUS P1⊕P2=P0 matches ω·ω²=1.",
    formulaCheck: "χ_1(1+2)=exp(2πi)=1=χ_1(1)χ_1(2).",
  }),
  schoolMathLesson({
    term: "Fibrewise aggregate",
    chapter: "symmetry",
    analogy: "Count objects inside labelled drawers first; adding drawer totals does not create one giant drawer.",
    exactDefinition: "Σ|Aut(A_n)|=18 and 4Σ pair_orbits(n)=224, with level and family tags fixed by the action.",
    workedExample: "L3 has 2 pole orbits, 5 ordered-pair orbits, and 4×5=20 typed orbits.",
    whyTrue:
      "The diagonal unit action is computed independently in each level and each of four family fibres before the finite totals are added.",
    commonMistake: "Eighteen is not one global group order, and 224 is not the orbit count of a cross-level action.",
    tableCheck: "Pair-orbit row L1–L7: 1,4,5,10,7,20,9; sum=56.",
    formulaCheck: "4×56=224; 1+1+2+2+4+2+6=18.",
  }),
  schoolMathLesson({
    term: "Homomorphism",
    chapter: "mathematics",
    analogy:
      "A homomorphism translates labels between two dials while making every operation commute with the translation.",
    exactDefinition:
      "f:A_n→A_m is a homomorphism when f(P0)=P0 and f(F_n(x,y))=F_m(f(x),f(y)) for every x,y and each F∈{PLUS,STAR}.",
    workedExample: "L2→L4 with f(P0)=P0 and f(P1)=P2 preserves P1⊕P1=P0 and P1★P1=P0.",
    whyTrue: "The preservation equation is checked on every ordered source pair; finite tables make this exhaustive.",
    commonMistake: "Matching pole names or being injective as a set map does not prove operation preservation.",
    tableCheck: "L2 cell (P1,P1)→P0 maps to L4 cell (P2,P2)→P0 for both laws.",
    formulaCheck: "f(P1⊕_2P1)=P0=P2⊕_4P2.",
  }),
  schoolMathLesson({
    term: "Zero homomorphism",
    chapter: "mathematics",
    analogy: "It is a translation that collapses every source label onto the target's P0.",
    exactDefinition: "z_(n,m)(P_i)=P0 for every P_i∈Q_n.",
    workedExample: "L3→L5: P0,P1,P2 all map to P0, and both sides of every preservation equation equal P0.",
    whyTrue: "PLUS_m(P0,P0)=P0 and STAR_m(P0,P0)=P0, so constant-P0 outputs preserve both operations.",
    commonMistake:
      "Saying no morphism exists from L3 to L5 is false; what fails is every nonzero full-algebra homomorphism.",
    tableCheck: "Every source table cell maps to target cell (P0,P0)→P0.",
    formulaCheck: "z(F_n(x,y))=P0=F_m(z(x),z(y)).",
  }),
  schoolMathLesson({
    term: "Embedding",
    chapter: "mathematics",
    analogy: "An embedding places the smaller dial inside the larger one without merging any of its marked positions.",
    exactDefinition: "An embedding is an injective homomorphism; for n≥2, A_n embeds in A_m exactly when n divides m.",
    workedExample: "L2→L4 uses P0→P0 and P1→P2; L3→L5 is impossible because 3 does not divide 5.",
    whyTrue:
      "The image of generator P1 must have exact additive order n, and a cyclic group of order m has such an element exactly when n|m.",
    commonMistake:
      "The same-index candidate P_i→P_i can fail even when labels look compatible; operational transfer needs further authorization.",
    tableCheck: "L3→L5 failure: source PLUS(P1,P2)→P0, target PLUS(P1,P2)→P3.",
    formulaCheck: "h(P_i)=P_((u·m/n)i mod m), u∈U(n), when n|m.",
  }),
  schoolMathLesson({
    term: "Receipt",
    chapter: "theory",
    analogy:
      "A receipt is like a laboratory log: it records which bounded check ran, on what scope, and what status ended it.",
    exactDefinition: "receipt=(check_id,scope,inputs,status,work ledger,terminal witness).",
    workedExample:
      "DIRECT_MORPHISM_REPLAY_L2_TO_L4 records mapping, four checked pairs, four families, rc=0, and status=PASS.",
    whyTrue:
      "Machine-readable fields bind a claim to one replayable contour instead of leaving an unscoped success word.",
    commonMistake:
      "A receipt is not a mathematical theorem, truth certificate, customer outcome, or proof of intelligence.",
    tableCheck: "Receipt ledger columns: check_id | scope | expected | got | status.",
    formulaCheck: "PASS + disclosed scope ≠ proof outside that scope.",
  }),
  schoolMathLesson({
    term: "Boundary",
    chapter: "theory",
    analogy: "A boundary is a clearly marked stop sign showing exactly why a stronger conclusion is not allowed.",
    exactDefinition:
      "BOUNDARY is a terminal status paired with a missing condition, counterexample, or unavailable contour.",
    workedExample: "L3→L5 same-index transfer ends at the named level-alignment boundary with the P0≠P3 witness.",
    whyTrue:
      "An explicit failed preservation equation is sufficient to reject that candidate map without guessing a favourable interpretation.",
    commonMistake:
      "A boundary is not a hidden pass, and an environment block must not be reported as a successful replay.",
    tableCheck:
      "Receipt fields: expected=the divisible-pair tuple; got=[3,5]; the separate preservation counterexample compares P0 with P3.",
    formulaCheck: "φ(PLUS_3(P1,P2))=P0≠P3=PLUS_5(φP1,φP2).",
  }),
  schoolMathLesson({
    term: "Formal, current, and target layers",
    chapter: "theory",
    analogy:
      "Keep the proven blueprint, the machine running today, and the proposed future machine in three labelled folders.",
    exactDefinition:
      "FORMAL=finite laws; CURRENT V4=bounded deterministic selector; TARGET=unimplemented or unproven World Atlas learning architecture.",
    workedExample:
      "Formal: 560 coordinates. Current: 556 active, 1,204 committed, 880 executable, 440 per pattern. Target: persistent trained Atlas NOT_PRESENT.",
    whyTrue:
      "Each layer has different objects and evidence, so conclusions are licensed only inside the layer whose contract was checked.",
    commonMistake:
      "Verified finite tables do not prove persistent learning, external operational gain, a trained Atlas, or General AI.",
    tableCheck: "Layer ledger: FORMAL | CURRENT V4 | TARGET, with a separate status column.",
    formulaCheck: "1,204→880→440 is current selector arithmetic; it is not the 560-coordinate formal derivation.",
  }),
  schoolMathLesson({
    term: "Symbol legend",
    chapter: "theory",
    analogy:
      "Mathematical symbols are road signs: learn what each sign asks you to do before trying to read the whole proof.",
    exactDefinition:
      "∈ means belongs to; ⇒ implies; ⇔ if and only if; ∅ empty set; ∤ does not divide; ⊆ subset; Δ equality relation; ord order; Aut automorphisms; End endomorphisms; Hom homomorphisms; φ Euler totient or a named map by context; gcd greatest common divisor; binom binomial coefficient; ⋊ semidirect product; χ character; exp exponential.",
    workedExample: "L3: P1∈Q_3 and ord(P1)=3 ⇒ P1 generates Q_3 under PLUS; 3∤5 ⇔ no element of order 3 exists in C_5.",
    whyTrue:
      "Each symbol has a fixed local grammar, while overloaded letters such as φ receive their meaning from the definition immediately around them.",
    commonMistake:
      "Do not read ⇒ as equality, ⇔ as one-way implication, ∅ as P0, Δ as a numeric difference, or ⋊ as ordinary multiplication.",
    tableCheck: "Legend lookup: symbol | read aloud | meaning in this chapter.",
    formulaCheck: "n∤m is the negation of n|m; x∈∅ is always false; Δ_X={(x,x)|x∈X}.",
  }),
  schoolMathLesson({
    term: "Residue class",
    chapter: "theory",
    analogy: "A residue class is a basket holding all integers that land on the same dial mark.",
    exactDefinition: "[i]_n={i+kn | k∈Z}; P_i represents [i]_n in Q_n.",
    workedExample: "L3: …,−5,−2,1,4,7,… all belong to [1]_3 and are represented by P1.",
    whyTrue: "Two integers land on the same mark exactly when their difference is a multiple of n.",
    commonMistake:
      "A residue class is an infinite set of integers; the selected remainder 0,…,n−1 is only its convenient representative.",
    tableCheck: "L3 labels choose the representatives 0,1,2 for the three residue classes.",
    formulaCheck: "[4]_3=[1]_3 because 3|(4−1).",
  }),
  schoolMathLesson({
    term: "Signature, arity, and constant",
    chapter: "mathematics",
    analogy:
      "A signature is the list of available machine buttons together with the number of input slots on each button.",
    exactDefinition: "arity(PLUS)=2, arity(STAR)=2, arity(P0)=0; the project shorthand for A_n is signature (2,2,0).",
    workedExample:
      "At L2, PLUS(P1,P1) uses two inputs, while the symbol P0 names one fixed element and accepts no inputs.",
    whyTrue: "Arity counts argument places syntactically; a named constant is exactly a nullary operation.",
    commonMistake: "The tuple (2,2,0) lists arities, not level sizes, tensor dimensions, or learned layer widths.",
    tableCheck: "Operation ledger: PLUS | 2; STAR | 2; P0 | 0.",
    formulaCheck: "A_n=(Q_n,PLUS_n,STAR_n,P0).",
  }),
  schoolMathLesson({
    term: "Magma, semigroup, monoid, and group",
    chapter: "mathematics",
    analogy:
      "These names are levels of a checklist: each new level keeps every earlier requirement and adds another one.",
    exactDefinition:
      "magma=set with a closed total binary operation; semigroup=magma+associativity; monoid=semigroup+two-sided identity; group=monoid in which every element has a two-sided inverse.",
    workedExample:
      "For n≥2, PLUS is a group; STAR is a magma but fails associativity and therefore cannot be a semigroup, monoid, or group.",
    whyTrue:
      "The hierarchy follows directly from nested definitions, so failing an earlier requirement blocks every stronger class.",
    commonMistake:
      "Having a right-neutral element is not enough for a monoid; the identity must work on both sides and associativity must hold.",
    tableCheck: "L3 STAR gives (P1★P0)★P1=P2 but P1★(P0★P1)=P1.",
    formulaCheck: "group ⇒ monoid ⇒ semigroup ⇒ magma; the reverse implications need not hold.",
  }),
  schoolMathLesson({
    term: "Closure",
    chapter: "mathematics",
    analogy: "Closure means the operation never throws you outside the declared game board.",
    exactDefinition: "F is closed on Q_n when F(x,y)∈Q_n for every x,y∈Q_n.",
    workedExample: "L3: PLUS(P2,P2)=P1 and STAR(P0,P2)=P0; both outputs still belong to Q_3.",
    whyTrue: "Modulo n always returns an index 0,…,n−1, and the reset branch returns P0, which is already in Q_n.",
    commonMistake: "Closure does not imply associativity, commutativity, inverses, or meaningful real-world semantics.",
    tableCheck: "Every body cell of each L3 table contains one of P0,P1,P2 and no outside symbol.",
    formulaCheck: "PLUS_n,STAR_n:Q_n×Q_n→Q_n.",
  }),
  schoolMathLesson({
    term: "Associativity",
    chapter: "mathematics",
    analogy: "Associativity asks whether moving parentheses changes the answer while keeping operand order fixed.",
    exactDefinition: "F is associative when F(F(x,y),z)=F(x,F(y,z)) for every x,y,z.",
    workedExample:
      "L3 PLUS is associative, but STAR fails on x=P1,y=P0,z=P1, producing P2 on the left and P1 on the right.",
    whyTrue: "Residue addition inherits integer associativity; one unequal STAR triple disproves STAR associativity.",
    commonMistake: "Associativity does not permit reordering operands; that separate permission is commutativity.",
    tableCheck: "Replay two table lookups for each side of the L3 STAR counterexample.",
    formulaCheck: "(i+j)+k≡i+(j+k) (mod n), but (P1★P0)★P1≠P1★(P0★P1).",
  }),
  schoolMathLesson({
    term: "Commutativity",
    chapter: "mathematics",
    analogy: "Commutativity asks whether swapping the two input seats leaves the result unchanged.",
    exactDefinition: "F is commutative when F(x,y)=F(y,x) for every x,y.",
    workedExample: "L3 PLUS(P1,P2)=P0=PLUS(P2,P1), while STAR(P0,P1)=P0≠P1=STAR(P1,P0).",
    whyTrue: "Integer addition is commutative, but STAR's reset condition singles out the raw-left operand.",
    commonMistake:
      "One symmetric-looking cell is not a proof; every reflected pair across the table diagonal must agree.",
    tableCheck: "The PLUS table is symmetric across its diagonal; the STAR table is not for n≥2.",
    formulaCheck: "i+j≡j+i (mod n); STAR_n(P0,P1)≠STAR_n(P1,P0).",
  }),
  schoolMathLesson({
    term: "Identity element",
    chapter: "mathematics",
    analogy: "An identity is a do-nothing input that works from both sides for every element.",
    exactDefinition: "e is a two-sided identity when e∘x=x=x∘e for every x.",
    workedExample: "At L3, P0 is the PLUS identity; STAR has P_i★P0=P_i but P0★P1=P0≠P1, so it has no identity.",
    whyTrue:
      "For STAR, a right-neutral candidate e=P_k must satisfy P1★P_k=P1, which forces k≡0 and e=P0; the remaining candidate fails on the left because P0★P1=P0≠P1. Thus no two-sided identity exists for n≥2.",
    commonMistake: "Do not shorten right-neutral to identity, and keep the degenerate L1 exception separate.",
    tableCheck: "An identity requires both its row and its column to reproduce the header sequence.",
    formulaCheck: "PLUS_n(P0,P_i)=P_i=PLUS_n(P_i,P0).",
  }),
  schoolMathLesson({
    term: "Inverse and generator",
    chapter: "mathematics",
    analogy: "An inverse walks back to the origin; a generator can reach every dial mark by repeated steps.",
    exactDefinition: "In PLUS, P_i^(−1)=P_((n−i) mod n); P_k generates C_n exactly when gcd(k,n)=1.",
    workedExample: "L3: P1 and P2 are inverses because P1⊕P2=P0; repeated P1 visits P0,P1,P2.",
    whyTrue: "The inverse index cancels i modulo n, and a step k visits n/gcd(k,n) distinct residues.",
    commonMistake:
      "STAR lacks a two-sided identity for n≥2, so group-style inverses and generators do not transfer unchanged to STAR.",
    tableCheck: "L3 PLUS row P1 contains P0 under column P2; powers of P1 cycle through all three poles.",
    formulaCheck: "i+(n−i)≡0 (mod n); ord(P_k)=n/gcd(k,n).",
  }),
  schoolMathLesson({
    term: "Standard left and right translation",
    chapter: "mathematics",
    analogy:
      "Fix one operand of a two-input table; a fixed row or column becomes a one-input route through the outputs.",
    exactDefinition: "L_a(x)=a★x is the standard left translation; R_a(x)=x★a is the standard right translation.",
    workedExample: "L3 with a=P2: L_P2 maps P0,P1,P2 to P2,P0,P1; R_P2 maps them to P0,P0,P1.",
    whyTrue: "The adjective left or right names the slot occupied by the fixed multiplier a.",
    commonMistake: "ABI STAR_LEFT(s,a)=s★a is standard R_a; ABI STAR_RIGHT(s,a)=a★s is standard L_a.",
    tableCheck: "L_a is row a; R_a is column a.",
    formulaCheck: "STAR_LEFT(_,a)=R_a and STAR_RIGHT(_,a)=L_a.",
  }),
  schoolMathLesson({
    term: "Image of a function",
    chapter: "mathematics",
    analogy:
      "The image is the set of destinations actually reached, not every destination that was available in principle.",
    exactDefinition: "Im(f)={f(x)|x∈X}; rank(f)=|Im(f)| for a finite transformation.",
    workedExample: "L3 R_P2 has outputs P0,P0,P1, so Im(R_P2)={P0,P1} and rank=2.",
    whyTrue: "List all outputs and remove repetitions; the remaining distinct values are exactly the image.",
    commonMistake:
      "Codomain Q_3 has three elements even when the image has only two; image and codomain are not synonyms.",
    tableCheck: "Fixed P2 STAR column: P0,P0,P1.",
    formulaCheck: "Im(R_P2)={P0,P1}⊂Q_3.",
  }),
  schoolMathLesson({
    term: "Function, injection, surjection, and bijection",
    chapter: "mathematics",
    analogy:
      "A function gives every student one locker; injective forbids sharing, surjective leaves no locker unused, and bijective does both.",
    exactDefinition:
      "function: one output per input; injective: f(x)=f(y)⇒x=y; surjective: Im(f)=Y; bijective: injective and surjective.",
    workedExample: "L2→L4 map P0→P0,P1→P2 is injective but not surjective; L3 multiplication by 2 is bijective.",
    whyTrue:
      "The definitions test collisions and coverage separately; on equal finite sets, injective and surjective are equivalent.",
    commonMistake:
      "A homomorphism need not be injective, and an injection is not an embedding until operation preservation is proved.",
    tableCheck: "Mapping ledger L2→L4 uses two distinct targets but leaves P1 and P3 unused.",
    formulaCheck: "injective+surjective⇔bijective.",
  }),
  schoolMathLesson({
    term: "Divisibility and element order",
    chapter: "mathematics",
    analogy:
      "An n-step cycle fits evenly inside an m-step cycle only when m can be split into whole blocks of n steps.",
    exactDefinition: "n|m means m=qn for an integer q; ord(x) is the least positive r with r·x=0 in an additive group.",
    workedExample: "2|4 and P2∈C_4 has order 2; 3∤5 and no element of C_5 has order 3.",
    whyTrue:
      "Every element order in a finite group divides the group order; in C_m an element of order n exists exactly when n|m.",
    commonMistake:
      "The symbol n|m does not mean a fraction, and a same-name pole does not preserve element order across levels.",
    tableCheck: "L4 repeated PLUS of P2: P0→P2→P0; L5 every nonzero pole has order 5.",
    formulaCheck: "ord(P_k in C_m)=m/gcd(k,m).",
  }),
  schoolMathLesson({
    term: "Unit group and Euler totient",
    chapter: "symmetry",
    analogy:
      "Units are exactly the step sizes that eventually visit every mark instead of getting trapped in a smaller loop.",
    exactDefinition: "U(n)={u mod n | gcd(u,n)=1}; |U(n)|=φ(n).",
    workedExample: "U(3)={1,2} and φ(3)=2; U(4)={1,3} while step 2 is excluded because gcd(2,4)=2.",
    whyTrue: "A residue has a multiplicative inverse modulo n exactly when it is coprime to n.",
    commonMistake: "U(n) is a multiplicative group of indices, not the carrier Q_n under PLUS.",
    tableCheck: "Unit ledger L1–L7 has sizes 1,1,2,2,4,2,6.",
    formulaCheck: "u∈U(n)⇔gcd(u,n)=1⇔∃v:uv≡1 (mod n).",
  }),
  schoolMathLesson({
    term: "Catalan number and bracket recurrence",
    chapter: "mathematics",
    analogy:
      "Catalan numbers count all ways to split an ordered row of operands into a left subtree and a right subtree.",
    exactDefinition: "C_0=1 and C_r=Σ_(i=0)^(r−1) C_i C_(r−1−i); equivalently C_r=(1/(r+1))binom(2r,r).",
    workedExample: "Three operands use r=2 apply nodes: C_2=C_0C_1+C_1C_0=1+1=2 bracketings.",
    whyTrue:
      "Choose the root split; left and right subtree shapes are independent, so their counts multiply and all split positions add.",
    commonMistake: "Catalan counts tree shapes with fixed operand order; it does not count permutations of operands.",
    tableCheck: "arity 2,3,4,5 → bracketings 1,2,5,14.",
    formulaCheck: "C_3=C_0C_2+C_1C_1+C_2C_0=2+1+2=5.",
  }),
  schoolMathLesson({
    term: "Equivalence relation and quotient",
    chapter: "mathematics",
    analogy:
      "An equivalence relation sorts objects into non-overlapping boxes; a quotient treats each whole box as one new point.",
    exactDefinition:
      "∼ is reflexive, symmetric, and transitive; X/∼ is the set of equivalence classes. An algebraic quotient requires ∼ to be a congruence.",
    workedExample:
      "L3 inversion gives classes {P0} and {P1,P2}, but these orbit classes are not automatically a STAR congruence quotient.",
    whyTrue:
      "The three axioms make every object belong to exactly one class; compatibility is the extra condition that makes operations independent of representatives.",
    commonMistake:
      "An orbit partition, semantic grouping, and congruence quotient are different constructions until compatibility is proved.",
    tableCheck:
      "Test representatives P1 and P2 in the STAR table before trying to define an operation on their merged class.",
    formulaCheck: "[x]★[y]=[x★y] is well-defined only when ∼ is a congruence.",
  }),
  schoolMathLesson({
    term: "Endomorphism",
    chapter: "symmetry",
    analogy:
      "An endomorphism is a rule-preserving map that starts and ends on the same structure, even if it collapses states.",
    exactDefinition: "End(A_n)=Hom(A_n,A_n); automorphisms are exactly the bijective endomorphisms.",
    workedExample: "At L3, the zero map and the two unit maps u=1,2 are the three full-algebra endomorphisms.",
    whyTrue:
      "Every nonzero full-algebra endomorphism at n≥2 is injective and hence bijective on the finite carrier; the zero map is the only collapsing case.",
    commonMistake: "End(A_n) is not the same set as Aut(A_n): the zero endomorphism is not an automorphism when n≥2.",
    tableCheck: "L3 endomorphism ledger: zero | identity | swap P1,P2.",
    formulaCheck: "|End(A_3)|=1+|U(3)|=3; |Aut(A_3)|=2.",
  }),
  schoolMathLesson({
    term: "Isomorphism versus literal equality",
    chapter: "symmetry",
    analogy: "Two maps can have the same route structure even when their labels and object types are different.",
    exactDefinition:
      "A≅B means a bijective structure-preserving map exists; it does not assert A=B as literal sets or typed objects.",
    workedExample: "U(3)={1,2} is canonically isomorphic to Aut(A_3)={id,σ_2} by u↦σ_u.",
    whyTrue:
      "The correspondence preserves multiplication as composition and has a unique inverse, while residues and permutations remain different kinds of objects.",
    commonMistake: "Writing U(n)=Aut(A_n) without declaring the identification can conflate indices with functions.",
    tableCheck: "Correspondence table: 1→id; 2→(P1 P2).",
    formulaCheck: "σ_u∘σ_v=σ_(uv mod n).",
  }),
  schoolMathLesson({
    term: "Torsor and holomorph",
    chapter: "symmetry",
    analogy:
      "A torsor is a dial whose relative differences remain meaningful even after the absolute zero mark is erased.",
    exactDefinition: "The cyclic torsor uses [x,y,z]=x−y+z; its affine symmetries x↦ux+b form Hol(C_n)=C_n⋊U(n).",
    workedExample: "L3 shift T1(x)=x+1 preserves [x,y,z] because every b cancels in (x+b)−(y+b)+(z+b).",
    whyTrue:
      "Translations change the chosen origin but preserve all relative differences; unit multipliers preserve the cyclic group structure.",
    commonMistake:
      "A torsor is not a pointed group, and its translation symmetries do not preserve STAR's named reset point.",
    tableCheck: "Check L3 triples before and after T1; corresponding ternary outputs differ by the same shift.",
    formulaCheck: "[F(x),F(y),F(z)]=u(x−y+z)+b=F([x,y,z]).",
  }),
  schoolMathLesson({
    term: "Five L3 ordered-pair orbits",
    chapter: "symmetry",
    analogy:
      "Pair each point of the 3×3 source-active grid with the point obtained by swapping P1 and P2 in both coordinates.",
    exactDefinition: "U(3) acts diagonally by u·(P_s,P_a)=(P_(us),P_(ua)).",
    workedExample:
      "The five orbits are {(P0,P0)}, {(P0,P1),(P0,P2)}, {(P1,P0),(P2,P0)}, {(P1,P1),(P2,P2)}, and {(P1,P2),(P2,P1)}.",
    whyTrue:
      "Identity fixes all nine pairs; u=2 fixes only (P0,P0), and every other pair is matched with one distinct partner.",
    commonMistake:
      "These five pair orbits are not the two pole orbits and not the twenty typed orbits after four family tags are restored.",
    tableCheck: "Orbit sizes 1+2+2+2+2=9 exhaust the L3 ordered-pair table.",
    formulaCheck: "Burnside: (9+1)/2=5; typed at L3: 4×5=20.",
  }),
  schoolMathLesson({
    term: "Current V4 school replay",
    chapter: "theory",
    analogy:
      "Imagine a sealed card catalogue: recognize one of two exact request cards, discard forbidden card types, choose one parity shelf, sort reproducibly, and use one card once.",
    exactDefinition:
      "alpha,beta→LEFT/even; gamma,delta→RIGHT/odd; committed=1,204; executable=880; frontier=440; order=SHA-256(observation,candidate_id,ordinal); arity=2; route_depth=1.",
    workedExample:
      "For alpha,beta, the selector accepts the fixed pattern, enters 1,204 committed descriptors, keeps 880 of four executable kinds, exposes the 440 even-parity candidates, derives a hash order, binds one process-local handle, executes one bounded action, and records a receipt.",
    whyTrue:
      "The current release contract fixes each filter and count; semantic_reads, rank_effects, and learning_writes are all zero, so Atlas state cannot change the order.",
    commonMistake:
      "A pole is a formal P_i label; a source pattern is one accepted input string; rank is |Im(T)|; ranking is the hash-derived candidate order. The arithmetic shows six 108-descriptor increments, but the reviewed source does not disclose names for six generated strata, so no such names may be invented.",
    tableCheck:
      "Replay ledger: fixed pattern | committed 1,204 | executable 880 | parity frontier 440 | one-shot handle | receipt.",
    formulaCheck: "108=4Σ_(n=2)^7n; 1,204=556+6·108; 880=556+3·108; 440=880/2.",
  }),
] as const;

export const theoryGlossary = schoolMathLessons;

export const schoolMathLessonRequiredFields = [
  "analogy",
  "exactDefinition",
  "workedExample",
  "whyTrue",
  "commonMistake",
  "tableCheck",
  "formulaCheck",
] as const satisfies readonly (keyof SchoolMathLesson)[];

export const schoolMathLessonUiTranslationKeys = [
  "Intuition / analogy",
  "Exact definition",
  "Worked small-level example",
  "Why it is true",
  "Common mistake or boundary",
  "Table channel",
  "Formula channel",
  "Open a term for a complete seven-part explanation and two independent checks.",
  "Every entry moves from analogy to exact definition, works a small example, explains why the claim is true, names a common mistake, and reconciles table and formula channels.",
  "School proof notebook",
  "SCHOOL PROOF NOTEBOOK",
  "Advanced words become manageable when every claim follows the same seven questions.",
  "Open a card in order: start with the analogy, read the exact definition, replay the small example, inspect the reason, reject the common mistake, and make the table and formula agree.",
  "School symmetry notebook",
  "SCHOOL SYMMETRY NOTEBOOK",
  "Treat a symmetry as a rule-preserving relabelling before counting anything.",
  "Each card begins with a concrete dial picture, then states the academic definition, works a finite example, proves the claim, marks the interpretation boundary, and reconciles a lookup ledger with a formula.",
] as const;

export const schoolMathTranslationKeys = [
  ...new Set(
    schoolMathLessons
      .flatMap((lesson) => [lesson.term, ...schoolMathLessonRequiredFields.map((field) => lesson[field])])
      .concat(theorySymbolLegend.flatMap((item) => [item.reading, item.meaning]))
      .concat(schoolMathLessonUiTranslationKeys),
  ),
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
