import { conceptLessons } from "./theory";

/**
 * One page per concept, each one anchored in a live table from the tower.
 *
 * The complaint this answers is that the theory chapters explain terms in terms
 * of other terms. Here every entry says two things instead: where to look in an
 * actual PLUS or STAR table, and what the word concretely refers to inside GALO
 * rather than in algebra generally.
 */

export type TermPanel = {
  law: "PLUS" | "STAR";
  level: number;
  /** Cells to mark, as [row, column] pole indices. */
  cells?: readonly (readonly [number, number])[];
  /** Pole labels to mark in the row and column headers. */
  headers?: readonly number[];
  tone?: "accent" | "warn";
};

export type TermPage = {
  panels: readonly TermPanel[];
  /** Where to look in the table above. */
  reading: string;
  /** What the word refers to inside GALO, as opposed to in algebra generally. */
  inGalo: string;
};

const row = (level: number, r: number) =>
  Array.from({ length: level }, (_, c) => [r, c] as const) as readonly (readonly [number, number])[];
const column = (level: number, c: number) =>
  Array.from({ length: level }, (_, r) => [r, c] as const) as readonly (readonly [number, number])[];

export const termPages: Record<string, TermPage> = {
  Carrier: {
    panels: [{ law: "PLUS", level: 3, headers: [0, 1, 2] }],
    reading:
      "Look only at the labels down the side and across the top. That short list is the carrier — nothing else exists at this level.",
    inGalo:
      "In GALO the carrier is the complete set of positions the engine may ever be in during a run. Declaring it is the first thing a level does.",
  },
  Pole: {
    panels: [{ law: "PLUS", level: 3, headers: [2] }],
    reading: "One marked label, P2. It is a name, not a quantity — P2 is not twice P1 and not better than it.",
    inGalo:
      "A pole is one named position from the declared list. GALO's whole changing state at any moment is exactly one of these names.",
  },
  Level: {
    panels: [
      { law: "PLUS", level: 2 },
      { law: "PLUS", level: 4 },
    ],
    reading:
      "Two tables of the same rule, two by two and four by four. The level is simply how many positions there are.",
    inGalo:
      "Choosing a level in GALO is choosing how finely situations are told apart. A bigger level distinguishes more but costs more to declare and check.",
  },
  "Binary operation": {
    panels: [{ law: "PLUS", level: 3, cells: [[1, 2]] }],
    reading:
      "Row P1, column P2, one marked cell. Two inputs go in, exactly one answer comes out, and it is already written down.",
    inGalo:
      "Every step GALO takes is one binary operation: the position it is standing on, plus the operand the admitted action supplies.",
  },
  "Modulo n": {
    panels: [{ law: "PLUS", level: 3, cells: [[2, 2]] }],
    reading: "Row P2, column P2. Two plus two would be four, but there is no P4 here, so the count wraps round to P1.",
    inGalo: "Wrapping is what keeps GALO finite. No sequence of steps can ever walk off the end of the declared list.",
  },
  "Cayley table": {
    panels: [{ law: "PLUS", level: 3 }],
    reading: "The whole grid, filled in beforehand. Every possible pair of inputs already has its own cell.",
    inGalo:
      "This object is the foundation of GALO. Everything else on the site — the counts, the receipts, the proofs — exists to make these grids checkable.",
  },
  PLUS: {
    panels: [{ law: "PLUS", level: 3, cells: row(3, 1) }],
    reading:
      "The marked row shows PLUS from P1: each answer is one step further round the ring, and it never gets stuck.",
    inGalo:
      "PLUS is the GALO law that keeps moving. Used alone it can reach every position from every position, which is why the second law exists.",
  },
  STAR: {
    panels: [{ law: "STAR", level: 3, cells: row(3, 0), tone: "warn" }],
    reading: "The marked top row is all P0. When the left input is P0, STAR answers P0 whatever the right input says.",
    inGalo:
      "STAR is the GALO law that can reset. That asymmetry is what makes a step order-sensitive, and order-sensitivity is what makes programs meaningful.",
  },
  "Left zero": {
    panels: [{ law: "STAR", level: 3, cells: row(3, 0), tone: "warn" }],
    reading: "Read the marked row left to right: P0, P0, P0. The left input swallowed the right one.",
    inGalo:
      "In GALO this is the only way a step can discard what it was given. It is declared in the law, not decided at runtime.",
  },
  "Right-neutral element": {
    panels: [{ law: "STAR", level: 3, cells: column(3, 0) }],
    reading: "The marked first column returns the row label unchanged: P0 on the right changes nothing.",
    inGalo:
      "The same P0 behaves in two different ways depending on which side it sits. GALO records which side each operand was on, precisely because of this.",
  },
  "Source state": {
    panels: [{ law: "PLUS", level: 3, headers: [1] }],
    reading: "The marked row label is the source: the position the step starts from, before anything is applied.",
    inGalo:
      "GALO reads the source state at the start of every run. It is the whole of the mutable state, so it can be printed into the record in full.",
  },
  "Active pole": {
    panels: [{ law: "PLUS", level: 3, cells: [[1, 2]] }],
    reading: "The value inside the marked cell — P0 — is the active pole: where the step actually lands.",
    inGalo: "This is the position GALO stands on after the step, and the position the next run would start from.",
  },
  "Typed coordinate": {
    panels: [
      { law: "PLUS", level: 3, cells: [[1, 2]] },
      { law: "STAR", level: 3, cells: [[1, 2]] },
    ],
    reading:
      "The same row and column in both tables. Same address, different law — so they are two different coordinates, not one.",
    inGalo:
      "GALO records the law and the operand roles alongside the cell. Two steps that end on the same position still keep different records.",
  },
  "Typed catalogue count": {
    panels: [
      { law: "PLUS", level: 3 },
      { law: "STAR", level: 3 },
    ],
    reading:
      "Nine cells in each table, two laws, and two operand orientations each. Counting is just multiplication, done honestly.",
    inGalo:
      "The 560 GALO publishes is this count carried across the whole tower. It is a size, not a score, and it says nothing about capability.",
  },
  Rank: {
    panels: [{ law: "STAR", level: 3, cells: row(3, 0), tone: "warn" }],
    reading:
      "Look at how many distinct answers appear in the table at all. The marked row contributes only one of them.",
    inGalo:
      "Rank tells GALO how many positions are actually reachable through a law. A low rank means a step throws information away.",
  },
  "Reduct and expansion": {
    panels: [
      { law: "PLUS", level: 3 },
      { law: "STAR", level: 3 },
    ],
    reading:
      "Take one table away and you have a reduct. Put it back and you have the expansion. Same positions, different amount of structure.",
    inGalo:
      "GALO is the expansion: both laws together. Statements proved about PLUS alone do not automatically hold once STAR is added back.",
  },
  Composition: {
    panels: [
      {
        law: "PLUS",
        level: 3,
        cells: [
          [1, 2],
          [0, 1],
        ],
      },
    ],
    reading:
      "Read the first marked cell, then use its answer as the row of the second. That chain is a two-step program.",
    inGalo:
      "A GALO program is exactly this chaining. Today the engine performs one link per run; longer chains are written architecture.",
  },
  Nonassociative: {
    panels: [
      {
        law: "STAR",
        level: 3,
        cells: [
          [1, 0],
          [0, 1],
        ],
        tone: "warn",
      },
    ],
    reading: "The two marked cells are the same three operands bracketed two ways. They do not agree.",
    inGalo:
      "Because of this, the bracketing of a GALO program is part of the program. It has to be written down, never assumed.",
  },
  "Zero-prefix rule": {
    panels: [{ law: "STAR", level: 3, cells: row(3, 0), tone: "warn" }],
    reading: "Once the marked row is reached, everything after it stays at P0 no matter what arrives.",
    inGalo:
      "A GALO program that begins with this prefix is pinned for the rest of its length. Detecting that early is a cheap, exact check.",
  },
  "Stable subset": {
    panels: [
      {
        law: "PLUS",
        level: 4,
        cells: [
          [0, 0],
          [0, 2],
          [2, 0],
          [2, 2],
        ],
      },
    ],
    reading: "The four marked cells use only P0 and P2, and every answer is again P0 or P2. That pair never leaks out.",
    inGalo:
      "A stable subset is a smaller world GALO cannot escape from. It is how a narrower scope can be carved out and still be exact.",
  },
  Congruence: {
    panels: [
      {
        law: "PLUS",
        level: 4,
        cells: [
          [0, 0],
          [0, 2],
          [2, 0],
          [2, 2],
        ],
      },
    ],
    reading: "Group the labels into evens and odds, and the marked cells still land in the group you would predict.",
    inGalo:
      "A congruence is when a coarser view of GALO's state is still a working view. It is the exact condition for simplifying without lying.",
  },
  Automorphism: {
    panels: [{ law: "PLUS", level: 3 }],
    reading:
      "Imagine renaming the labels and rewriting the table. If the grid comes out identical, the renaming was an automorphism.",
    inGalo:
      "These are the relabellings that change nothing GALO can observe. Counting them is how the site measures how much of a level is real structure.",
  },
  "Group action": {
    panels: [{ law: "PLUS", level: 3, headers: [1, 2] }],
    reading: "The marked labels are being moved around by the relabellings, while the table underneath stays fixed.",
    inGalo:
      "An action is what lets GALO count distinct situations rather than distinct names. Two names moved onto each other were never two situations.",
  },
  Orbit: {
    panels: [{ law: "PLUS", level: 3, headers: [1, 2] }],
    reading:
      "The two marked labels can be swapped by a lawful relabelling, so they belong to the same orbit. P0 cannot, so it sits alone.",
    inGalo:
      "An orbit is a group of GALO positions that are genuinely interchangeable. Orbits, not labels, are what should be counted.",
  },
  Stabilizer: {
    panels: [{ law: "PLUS", level: 3, headers: [0] }],
    reading: "The marked label survives every lawful relabelling. Its stabilizer is therefore the whole group.",
    inGalo:
      "P0 is pinned in place in GALO by the laws themselves. That is why it is the natural starting position and the natural reset.",
  },
  "Burnside's lemma": {
    panels: [{ law: "PLUS", level: 3 }],
    reading:
      "Count how many cells each relabelling leaves untouched, average those counts, and you get the number of orbits.",
    inGalo:
      "This is the arithmetic GALO uses to publish orbit counts. It replaces guessing with a calculation anyone can redo.",
  },
  "Affine torsor symmetry": {
    panels: [{ law: "PLUS", level: 3 }],
    reading: "Slide every label round by a fixed amount. The PLUS grid is unchanged, which is why sliding is allowed.",
    inGalo:
      "GALO has no privileged position under PLUS alone. Only when STAR is added does P0 become special, and the site keeps those two facts apart.",
  },
  "Inversion orbit": {
    panels: [{ law: "PLUS", level: 3, headers: [1, 2] }],
    reading: "Reverse the direction of travel: P1 and P2 swap, P0 stays. The marked pair is one inversion orbit.",
    inGalo: "Inversion is the smallest non-trivial symmetry GALO has at most levels, and it is often the only one.",
  },
  "Quadratic-residue block": {
    panels: [{ law: "PLUS", level: 5, headers: [1, 4] }],
    reading: "The marked labels are the squares modulo five. They form a block the symmetries keep together.",
    inGalo:
      "At prime levels this block structure decides how GALO's positions can be grouped. It is a fact about the level, not a design choice.",
  },
  "CRT boundary": {
    panels: [{ law: "PLUS", level: 6 }],
    reading: "Six splits into two and three, so this table behaves like a two-table and a three-table side by side.",
    inGalo:
      "Composite levels split in GALO and prime levels do not. That is a hard boundary on what a single level can express.",
  },
  Character: {
    panels: [{ law: "PLUS", level: 3 }],
    reading: "A character assigns each label a value so that the table's additions become ordinary multiplications.",
    inGalo:
      "Characters are a checking device in GALO, not a feature. They give a second, independent way to confirm a count.",
  },
  "Fibrewise aggregate": {
    panels: [{ law: "PLUS", level: 3 }],
    reading: "Group the cells that share an answer, then count each group. That grouping is the fibre.",
    inGalo:
      "GALO aggregates per fibre so that a total can be broken back down. A number that cannot be broken down is not published.",
  },
  Homomorphism: {
    panels: [
      { law: "PLUS", level: 2 },
      { law: "PLUS", level: 4 },
    ],
    reading:
      "A map between the two tables is lawful when combining before mapping and mapping before combining land on the same cell.",
    inGalo:
      "This is the only way GALO may carry a result from one level to another. Anything failing the test is refused, not approximated.",
  },
  "Zero homomorphism": {
    panels: [
      { law: "PLUS", level: 3, cells: [[0, 0]] },
      { law: "PLUS", level: 5, cells: [[0, 0]] },
    ],
    reading: "Send absolutely everything to P0. It is dull, it loses everything, and it is always lawful.",
    inGalo:
      "Because this map always exists, GALO never claims two levels are unconnected. The honest question is whether an interesting map exists.",
  },
  Embedding: {
    panels: [
      { law: "PLUS", level: 2 },
      { law: "PLUS", level: 4 },
    ],
    reading: "Two fits inside four without collisions, so the small table can be found intact inside the big one.",
    inGalo:
      "A GALO level embeds in another only when its size divides. That is a fact of arithmetic, and it limits which transfers are possible.",
  },
  Receipt: {
    panels: [{ law: "PLUS", level: 3, cells: [[1, 2]] }],
    reading: "The marked cell is what a receipt points at: this row, this column, this law, this answer.",
    inGalo:
      "The receipt is GALO's deliverable. It is what a stranger replays, and it is the reason a decision can be argued with afterwards.",
  },
  Boundary: {
    panels: [{ law: "STAR", level: 3, cells: row(3, 0), tone: "warn" }],
    reading:
      "The table is complete and exact, and it still says nothing about anything outside itself. That silence is the boundary.",
    inGalo:
      "GALO publishes its boundaries as named lines. Past them we do not know, and the site says so rather than staying quiet.",
  },
  "Formal, current, and target layers": {
    panels: [
      { law: "PLUS", level: 3 },
      { law: "STAR", level: 3 },
    ],
    reading:
      "These tables are the formal layer. What the engine actually runs is narrower, and what is planned is narrower still in evidence.",
    inGalo:
      "Keeping the three apart is GALO's central editorial rule. A proof about the tables is never evidence about the running engine.",
  },
  "Symbol legend": {
    panels: [{ law: "PLUS", level: 3, headers: [0, 1, 2] }],
    reading:
      "Everything you need to read this grid is in the labels and the two symbols above it. There is no hidden notation.",
    inGalo: "The legend exists so that no GALO page requires prior notation. If a symbol is not in it, it is not used.",
  },
  "Residue class": {
    panels: [{ law: "PLUS", level: 3, cells: [[2, 2]] }],
    reading: "The marked cell answers P1, because four and one leave the same remainder when divided by three.",
    inGalo:
      "GALO positions are residue classes underneath their names. That is what makes the wrap-around exact instead of approximate.",
  },
  "Signature, arity, and constant": {
    panels: [{ law: "PLUS", level: 3, cells: [[1, 2]], headers: [0] }],
    reading: "Two inputs per cell is the arity. Two laws plus the named P0 is the whole signature.",
    inGalo:
      "GALO's signature is fixed by the release. Nothing can be added to it at runtime, which is what makes the universe enumerable.",
  },
  "Magma, semigroup, monoid, and group": {
    panels: [
      { law: "PLUS", level: 3 },
      { law: "STAR", level: 3 },
    ],
    reading:
      "The first table is a group. The second is only a magma, because it fails associativity and has no two-sided identity.",
    inGalo:
      "GALO deliberately keeps the weaker structure. The site names it precisely so that stronger theorems are not borrowed by accident.",
  },
  Closure: {
    panels: [{ law: "PLUS", level: 3 }],
    reading: "Every answer in the grid is itself one of the row labels. Nothing new ever appears.",
    inGalo: "Closure is why GALO cannot invent a state. It is the property that makes the complete check finite.",
  },
  Associativity: {
    panels: [
      {
        law: "STAR",
        level: 3,
        cells: [
          [1, 0],
          [0, 1],
        ],
        tone: "warn",
      },
    ],
    reading:
      "The two marked cells are the two bracketings of the same three operands, and they disagree. One counterexample settles it.",
    inGalo:
      "GALO does not assume associativity anywhere. Where a proof needs it, the proof states which law it is using.",
  },
  Commutativity: {
    panels: [
      {
        law: "STAR",
        level: 3,
        cells: [
          [0, 1],
          [1, 0],
        ],
        tone: "warn",
      },
    ],
    reading: "Swap the two operands and compare the marked cells. They differ, so order matters.",
    inGalo:
      "Because order matters, GALO records which operand was on the left. That is half of what a typed coordinate is for.",
  },
  "Identity element": {
    panels: [{ law: "PLUS", level: 3, cells: [...row(3, 0), ...column(3, 0)] }],
    reading: "The marked row and column repeat the labels unchanged. P0 leaves everything alone from either side.",
    inGalo:
      "P0 is a two-sided identity for PLUS and not for STAR. Assuming otherwise is the single most common misreading of GALO.",
  },
  "Inverse and generator": {
    panels: [
      {
        law: "PLUS",
        level: 3,
        cells: [
          [1, 2],
          [2, 1],
        ],
      },
    ],
    reading:
      "Both marked cells answer P0, so P1 and P2 undo each other. And stepping by P1 repeatedly visits every label.",
    inGalo:
      "One generator is enough to reach every GALO position under PLUS. Reachability is therefore never the interesting question.",
  },
  "Standard left and right translation": {
    panels: [
      { law: "PLUS", level: 3, cells: row(3, 1) },
      { law: "PLUS", level: 3, cells: column(3, 1) },
    ],
    reading: "Fix P1 on the left and you get the marked row. Fix it on the right and you get the marked column.",
    inGalo:
      "GALO treats these as different operations, because the operand role is part of the address the receipt points at.",
  },
  "Image of a function": {
    panels: [{ law: "STAR", level: 3, cells: row(3, 0), tone: "warn" }],
    reading: "Collect the distinct answers a fixed left operand can produce. The marked row produces exactly one.",
    inGalo:
      "The size of that collection tells GALO how much a step can still distinguish afterwards. A shrinking image means information was dropped.",
  },
  "Function, injection, surjection, and bijection": {
    panels: [{ law: "PLUS", level: 3, cells: row(3, 1) }],
    reading: "The marked row hits every label exactly once, so it is a bijection. The same row in STAR would not be.",
    inGalo:
      "GALO's relabellings must be bijections, otherwise two positions would collapse into one and the record would stop being exact.",
  },
  "Divisibility and element order": {
    panels: [{ law: "PLUS", level: 4, headers: [2] }],
    reading: "Step by the marked label repeatedly: P2, P0, P2, P0. It returns after two steps, not four.",
    inGalo:
      "Order decides how quickly a GALO position cycles. It is also what decides which levels can be embedded in which.",
  },
  "Unit group and Euler totient": {
    panels: [{ law: "PLUS", level: 7, headers: [1, 2, 3, 4, 5, 6] }],
    reading:
      "At level seven every label except P0 is marked, because seven is prime and everything below it is coprime to it.",
    inGalo:
      "The count of marked labels is exactly how many lawful relabellings GALO has at that level. Prime levels have the most.",
  },
  "Catalan number and bracket recurrence": {
    panels: [
      {
        law: "STAR",
        level: 3,
        cells: [
          [1, 0],
          [0, 1],
        ],
        tone: "warn",
      },
    ],
    reading: "Three operands can be bracketed two ways, four can be bracketed five ways, and the counts keep growing.",
    inGalo:
      "Because bracketing matters in GALO, the number of distinct programs of a given length is this count and not one.",
  },
  "Equivalence relation and quotient": {
    panels: [{ law: "PLUS", level: 4, headers: [0, 2] }],
    reading: "Put the marked labels in one bucket and the others in a second. The table still works on buckets.",
    inGalo:
      "A quotient is a coarser GALO state that is still lawful. It is the formal version of deliberately looking at less.",
  },
  Endomorphism: {
    panels: [
      { law: "PLUS", level: 3 },
      { law: "PLUS", level: 3 },
    ],
    reading: "A lawful map from the table to itself. It need not be reversible, so it may fold labels together.",
    inGalo:
      "Endomorphisms are how GALO models losing detail without leaving the level. Automorphisms are the reversible ones among them.",
  },
  "Isomorphism versus literal equality": {
    panels: [
      { law: "PLUS", level: 3 },
      { law: "PLUS", level: 3 },
    ],
    reading:
      "Two tables can behave identically while their labels differ. Same structure is not the same as same names.",
    inGalo:
      "GALO says isomorphic when it means it. Claiming equality where only isomorphism holds would quietly overstate a result.",
  },
  "Torsor and holomorph": {
    panels: [{ law: "PLUS", level: 3 }],
    reading: "Without a marked starting label, the table has no centre. Every position looks like every other.",
    inGalo:
      "PLUS alone gives GALO no natural origin. STAR supplies one, and that is precisely what the second law is for.",
  },
  "Five L3 ordered-pair orbits": {
    panels: [{ law: "PLUS", level: 3, cells: [[0, 0]] }],
    reading: "Nine ordered pairs, and the symmetries fold them into five groups. The marked cell is a group of one.",
    inGalo:
      "Five is the honest number of distinct situations GALO has at this level. Nine is the number of names for them.",
  },
  "Current V4 step-by-step replay": {
    panels: [{ law: "PLUS", level: 3, cells: [[1, 2]] }],
    reading:
      "One accepted request, one marked cell, one recorded answer. That is a complete run of the engine that exists today.",
    inGalo:
      "This is the whole of GALO's shipped behaviour: one bounded step, then a stop. Everything larger is written architecture.",
  },
};

export function termSlug(term: string): string {
  return term
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const termSlugs: readonly string[] = conceptLessons.map((lesson) => termSlug(lesson.term));

export const termBySlug = new Map(conceptLessons.map((lesson) => [termSlug(lesson.term), lesson.term]));

export const termPagesTranslationKeys = [
  ...new Set(Object.values(termPages).flatMap((page) => [page.reading, page.inGalo])),
] as const;

/** Which branch of mathematics the word belongs to. */
export type Discipline =
  | "Universal algebra"
  | "Group theory"
  | "Number theory"
  | "Combinatorics"
  | "Sets, maps, and relations"
  | "Project convention";

/**
 * How the word on this page relates to the word as mathematicians use it. Several
 * of GALO's terms are project coinages, and an academic reader is entitled to
 * know which ones before reading any further.
 */
export type Standing =
  | "Standard term, standard meaning"
  | "Standard term, narrowed to this setting"
  | "Project term, not standard mathematics";

export type TermAcademic = {
  discipline: Discipline;
  standing: Standing;
  /** Formal statement, kept untranslated and left-to-right in every locale. */
  formal: string;
  /** A rigorous statement of the definition, in the register a referee expects. */
  academic: string;
};

export const termAcademics: Record<string, TermAcademic> = {
  Carrier: {
    discipline: "Universal algebra",
    standing: "Standard term, standard meaning",
    formal: "Q_n = {P_0, …, P_(n−1)},  |Q_n| = n,  n ∈ {1, …, 7}",
    academic:
      "The carrier (underlying set) of an algebraic structure is the set on which its operations are defined. Here it is the finite set Q_n of cardinality n, indexed by the residues 0 through n−1. An algebra is the pair (Q_n, {⊕_n, ★_n}); statements about the algebra are statements about that pair, never about the carrier alone.",
  },
  Pole: {
    discipline: "Project convention",
    standing: "Project term, not standard mathematics",
    formal: "Q_n ≅ Z/nZ,  P_i ↦ i",
    academic:
      "A project name for an element of the carrier. The label P_i is in bijective correspondence with the residue class i modulo n, so the labelling carries no order, magnitude, or metric: P_2 is not a larger object than P_1, and no expression on this site treats it as one.",
  },
  Level: {
    discipline: "Universal algebra",
    standing: "Project term, not standard mathematics",
    formal: "n ↦ (Q_n, ⊕_n, ★_n),  n = 1, …, 7",
    academic:
      "A project name for the index n of the family, equivalently for the order of the carrier. The seven levels form a family of algebras rather than a chain of subalgebras: an inclusion between two of them exists only when the associated structure-preserving map does, which is a separate question settled by divisibility.",
  },
  "Binary operation": {
    discipline: "Universal algebra",
    standing: "Standard term, standard meaning",
    formal: "∘ : Q_n × Q_n → Q_n",
    academic:
      "A map from the Cartesian square of the carrier into the carrier, hence total and single-valued by definition. Totality is what makes the Cayley table complete, and single-valuedness is what makes the entry at a given row and column unique. Both laws of the signature are binary operations in exactly this sense.",
  },
  "Modulo n": {
    discipline: "Number theory",
    standing: "Standard term, standard meaning",
    formal: "a ≡ b (mod n) ⇔ n ∣ (a − b)",
    academic:
      "Congruence modulo n is the equivalence relation on Z whose classes are the residues 0, …, n−1. The quotient ring Z/nZ inherits a well-defined addition, and it is that addition which the first law realises. Finiteness of Q_n is a consequence of passing to the quotient, not an additional stipulation.",
  },
  "Cayley table": {
    discipline: "Universal algebra",
    standing: "Standard term, standard meaning",
    formal: "T[i][j] = P_i ∘ P_j,  |T| = n²",
    academic:
      "The multiplication table of a finite magma: the n × n array whose (i, j) entry is the value of the operation on the ordered pair (P_i, P_j). Because the operation is total and the carrier is finite, the table determines the structure completely, and any property expressible in the signature can in principle be decided by exhaustive inspection of n² entries.",
  },
  PLUS: {
    discipline: "Group theory",
    standing: "Project term, not standard mathematics",
    formal: "PLUS_n(P_i, P_j) = P_((i+j) mod n)",
    academic:
      "A project name for the group operation of the cyclic group Z/nZ transported onto Q_n along the labelling. The reduct (Q_n, ⊕_n) is therefore an abelian group of order n generated by P_1, and every group-theoretic statement about cyclic groups applies to it verbatim.",
  },
  STAR: {
    discipline: "Universal algebra",
    standing: "Project term, not standard mathematics",
    formal: "★_n(P_i, P_j) = P_0  (i = 0);  P_((i+j) mod n)  (i ≠ 0)",
    academic:
      "A project name for a binary operation obtained from ⊕_n by overriding the row indexed 0. The resulting structure (Q_n, ★_n) is a magma which for n ≥ 2 is neither associative nor commutative and possesses no two-sided identity; it is the deviation from the group law that carries all of the asymmetry the project relies on.",
  },
  "Left zero": {
    discipline: "Universal algebra",
    standing: "Standard term, standard meaning",
    formal: "∀ y ∈ Q_n : P_0 ★ y = P_0",
    academic:
      "An element z is a left zero (left absorbing element) when z ∘ y = z for every y in the carrier. For n ≥ 2 the element P_0 is the unique left zero of ★_n, and ⊕_n has none. Uniqueness follows immediately: two left zeros z and z′ satisfy z = z ∘ z′ = z′.",
  },
  "Right-neutral element": {
    discipline: "Universal algebra",
    standing: "Standard term, standard meaning",
    formal: "∀ x ∈ Q_n : x ★ P_0 = x;   ∃ x ∈ Q_n : P_0 ★ x ≠ x",
    academic:
      "An element e is right neutral when x ∘ e = x for every x. For ★_n the element P_0 is right neutral and simultaneously a left zero, so it is not a two-sided identity for n ≥ 2 — the two one-sided conditions are satisfied by the same element in opposite directions, which is precisely why the structure is not a monoid.",
  },
  "Source state": {
    discipline: "Project convention",
    standing: "Project term, not standard mathematics",
    formal: "z = x ∘ y,  x ∈ Q_n,  ∘ ∈ {⊕_n, ★_n}",
    academic:
      "A project name for the left argument of the operation in the intended reading of a step. Mathematically it is simply the first coordinate of the ordered pair; the name records the operational role the project assigns to it and carries no additional algebraic content.",
  },
  "Active pole": {
    discipline: "Project convention",
    standing: "Project term, not standard mathematics",
    formal: "z = x ∘ y,  y ∈ Q_n,  ∘ ∈ {⊕_n, ★_n}",
    academic:
      "A project name for the right argument and, by extension, for the value of the operation on the pair. The distinction between the two argument positions is not algebraic — both are elements of Q_n — but it is recorded, because the operations are non-commutative and the ordered pair is therefore not recoverable from the unordered one.",
  },
  "Typed coordinate": {
    discipline: "Project convention",
    standing: "Project term, not standard mathematics",
    formal: "(n, ∘, r, x, y),  ∘ ∈ {⊕, ★},  r ∈ {L, R}",
    academic:
      "A project-defined index consisting of a level, a law, an operand-role tag, and an ordered pair. It is not an algebraic invariant: two distinct typed coordinates may evaluate to the same element of Q_n. Counting typed coordinates therefore counts labelled records, not equivalence classes of behaviour.",
  },
  "Typed catalogue count": {
    discipline: "Combinatorics",
    standing: "Project term, not standard mathematics",
    formal: "Σ_(n=1)^7 n² = 140;   140 × 2 × 2 = 560",
    academic:
      "An elementary enumeration of the labelled index set defined above: the number of ordered pairs summed over the family, multiplied by the number of laws and of role tags. The figure is a cardinality of a syntactic set. It bounds no complexity measure and expresses no capability claim.",
  },
  Rank: {
    discipline: "Sets, maps, and relations",
    standing: "Standard term, narrowed to this setting",
    formal: "rank(T) = |Im(T)|, where T : Q_n → Q_n",
    academic:
      "For a self-map of a finite set, the rank is the cardinality of its image. Fixing the left argument of a law yields such a map, and its rank measures how many elements remain distinguishable after one application. Rank is non-increasing under composition, which is the precise sense in which information can only be lost.",
  },
  "Reduct and expansion": {
    discipline: "Universal algebra",
    standing: "Standard term, standard meaning",
    formal: "(Q_n, ⊕_n, ★_n) ↾ {⊕_n} = (Q_n, ⊕_n)",
    academic:
      "A reduct is obtained by deleting operations from the signature while keeping the carrier; an expansion is the converse. Truth is not preserved upwards: a sentence valid in the reduct need not be valid in the expansion, because the expansion admits terms the reduct cannot form. Every result on this site therefore names the signature it was proved over.",
  },
  Composition: {
    discipline: "Universal algebra",
    standing: "Standard term, standard meaning",
    formal: "t ::= P_i | (t ∘ t),  ∘ ∈ {⊕_n, ★_n}",
    academic:
      "The formation of terms by substituting the value of one operation into an argument of another. Since ★_n is non-associative, distinct parse trees over the same operand sequence may denote distinct elements, and a term is therefore individuated by its tree rather than by its leaves.",
  },
  Nonassociative: {
    discipline: "Universal algebra",
    standing: "Standard term, standard meaning",
    formal: "(P_1 ★ P_0) ★ P_1 = P_2 ≠ P_1 = P_1 ★ (P_0 ★ P_1)",
    academic:
      "An operation is associative when (x ∘ y) ∘ z = x ∘ (y ∘ z) holds identically. A single counterexample refutes the identity, and the triple displayed above supplies one at every level n ≥ 2. Consequently (Q_n, ★_n) is a magma and not a semigroup, and no theorem requiring associativity may be invoked for it.",
  },
  "Zero-prefix rule": {
    discipline: "Universal algebra",
    standing: "Project term, not standard mathematics",
    formal: "P_0 ★ y = P_0  ⇒  (…((P_0 ★ y_1) ★ y_2)… ★ y_k) = P_0",
    academic:
      "A derived statement, not a further axiom: it follows from P_0 being a left zero that any left-normed term whose leftmost leaf is P_0 evaluates to P_0 regardless of the remaining operands. The rule is stated separately only because it is the form in which the fact is used.",
  },
  "Stable subset": {
    discipline: "Universal algebra",
    standing: "Standard term, standard meaning",
    formal: "S ⊆ Q_n closed:  ∀ x, y ∈ S : x ∘ y ∈ S",
    academic:
      "A subset closed under all operations of the signature; equivalently, the carrier of a subalgebra. Closed subsets form a lattice under intersection, and the closure of a set is the least closed subset containing it. For ⊕_n the closed subsets are exactly the subgroups, one for each divisor of n.",
  },
  Congruence: {
    discipline: "Universal algebra",
    standing: "Standard term, standard meaning",
    formal: "θ ⊆ Q_n × Q_n :  x θ x′,  y θ y′  ⇒  (x ∘ y) θ (x′ ∘ y′)",
    academic:
      "An equivalence relation compatible with every operation of the signature. Congruences are exactly the kernels of homomorphisms, and the quotient Q_n/θ carries a well-defined induced structure. The congruence lattice of the full expansion is trivial for n prime, which is why coarsening the state is not generally available.",
  },
  Automorphism: {
    discipline: "Group theory",
    standing: "Standard term, standard meaning",
    formal: "Aut(Q_n) = {σ ∈ Sym(Q_n) : σ(x ∘ y) = σ(x) ∘ σ(y)}",
    academic:
      "A bijection of the carrier onto itself that commutes with every operation. The automorphisms form a group under composition. For the full expansion the group is isomorphic to the unit group U(n) = (Z/nZ)^×, acting by multiplication of indices; the constant P_0 is fixed by every element, which is what rules out the additive translations.",
  },
  "Group action": {
    discipline: "Group theory",
    standing: "Standard term, standard meaning",
    formal: "· : G × X → X,  e · x = x,  (gh) · x = g · (h · x)",
    academic:
      "A homomorphism from a group into the symmetric group of a set. Here Aut(Q_n) acts on Q_n and, diagonally, on ordered pairs. The orbit–stabiliser theorem then gives |G| = |Orb(x)| · |Stab(x)| for every x, which is the identity all orbit counts on this site reduce to.",
  },
  Orbit: {
    discipline: "Group theory",
    standing: "Standard term, standard meaning",
    formal: "Orb(x) = {g · x : g ∈ G};  orbits partition X",
    academic:
      "The set of images of a point under the whole group. Orbits are the classes of an equivalence relation and therefore partition the set acted upon. Two elements in the same orbit are indistinguishable by any property invariant under the action, so orbits — not labels — are the correct objects to enumerate.",
  },
  Stabilizer: {
    discipline: "Group theory",
    standing: "Standard term, standard meaning",
    formal: "Stab(x) = {g ∈ G : g · x = x} ≤ G",
    academic:
      "The subgroup of elements fixing a given point. Stabilisers of points in one orbit are conjugate, and by orbit–stabiliser the index of the stabiliser equals the orbit length. The element P_0 has full stabiliser, since every automorphism of the expansion fixes the named constant.",
  },
  "Burnside's lemma": {
    discipline: "Combinatorics",
    standing: "Standard term, standard meaning",
    formal: "|X/G| = (1/|G|) Σ_(g ∈ G) |Fix(g)|",
    academic:
      "The orbit-counting lemma, a corollary of orbit–stabiliser obtained by double counting the set of pairs (g, x) with g · x = x. It converts an orbit count into an average of fixed-point counts, which is the form in which the counts published here are computed and can be independently recomputed.",
  },
  "Affine torsor symmetry": {
    discipline: "Group theory",
    standing: "Standard term, narrowed to this setting",
    formal: "x ↦ ux + v,  u ∈ U(n), v ∈ Z/nZ;  Hol(Z/nZ) = Z/nZ ⋊ U(n)",
    academic:
      "The affine group of Z/nZ, equal to the holomorph of the cyclic group, acts on the additive reduct by structure-preserving maps. Adjoining the constant P_0 to the signature forces v = 0, so the automorphism group of the expansion is the point stabiliser U(n) rather than the full affine group.",
  },
  "Inversion orbit": {
    discipline: "Group theory",
    standing: "Standard term, narrowed to this setting",
    formal: "σ_(−1) : P_i ↦ P_((−i) mod n),  σ_(−1) ∈ Aut",
    academic:
      "The orbit structure induced by the order-two automorphism given by index negation, which exists for every n ≥ 3. Its orbits have length two except at the fixed points of the involution, namely P_0 and, when n is even, the element of index n/2.",
  },
  "Quadratic-residue block": {
    discipline: "Number theory",
    standing: "Standard term, standard meaning",
    formal: "QR(p) = {x² mod p : x ≢ 0},  |QR(p)| = (p−1)/2",
    academic:
      "For an odd prime p, the non-zero squares form an index-two subgroup of the unit group, and multiplication by a fixed residue either preserves or interchanges the two cosets according to the Legendre symbol. The block structure of the action follows, and it is a property of the modulus rather than of any design decision.",
  },
  "CRT boundary": {
    discipline: "Number theory",
    standing: "Standard term, standard meaning",
    formal: "gcd(a, b) = 1 ⇒ Z/abZ ≅ Z/aZ × Z/bZ",
    academic:
      "The Chinese remainder theorem gives a ring isomorphism whenever the moduli are coprime, so composite levels decompose as direct products while prime levels are indecomposable. The distinction is a hard limit on what a single level can express and is not affected by any choice made in the project.",
  },
  Character: {
    discipline: "Number theory",
    standing: "Standard term, standard meaning",
    formal: "χ : Z/nZ → C^×,  χ(a + b) = χ(a) χ(b)",
    academic:
      "A homomorphism from the additive group into the multiplicative group of the complex numbers. The characters of a finite abelian group form a dual group of the same order, and orthogonality of characters supplies a second, independent route to counts obtained combinatorially.",
  },
  "Fibrewise aggregate": {
    discipline: "Sets, maps, and relations",
    standing: "Standard term, standard meaning",
    formal: "Q_n = ⨆_(z ∈ Q_n) f^(−1)(z),  Σ_z |f^(−1)(z)| = n²",
    academic:
      "Summation over the fibres of a map. Since the fibres of a function partition its domain, a total computed fibrewise is exact and admits decomposition back into its parts. Aggregates published on this site are computed this way so that any total can be audited against its summands.",
  },
  Homomorphism: {
    discipline: "Universal algebra",
    standing: "Standard term, standard meaning",
    formal: "f : Q_m → Q_n,  f(x ∘_m y) = f(x) ∘_n f(y),  ∀ ∘",
    academic:
      "A map preserving every operation of the signature. Composites of homomorphisms are homomorphisms, and the image of a homomorphism is a closed subset of the codomain. Preservation is required for all laws simultaneously; a map preserving ⊕ but not ★ is not a homomorphism of the expansion.",
  },
  "Zero homomorphism": {
    discipline: "Universal algebra",
    standing: "Standard term, standard meaning",
    formal: "f ≡ P_0;   f ∈ Hom(Q_m, Q_n)  ∀ m, n",
    academic:
      "The constant map onto the named element. It preserves both laws trivially, hence Hom(Q_m, Q_n) is non-empty for every ordered pair of levels. Consequently the statement that two levels admit no homomorphism is false in general; the substantive question is whether a non-constant one exists.",
  },
  Embedding: {
    discipline: "Universal algebra",
    standing: "Standard term, standard meaning",
    formal: "injective homomorphism;  Q_m ↪ Q_n ⇔ m ∣ n",
    academic:
      "An injective homomorphism, equivalently an isomorphism onto a subalgebra of the codomain. For the additive reducts this is Lagrange's criterion for cyclic groups: a copy of Z/mZ sits inside Z/nZ exactly when m divides n, and the subgroup realising it is unique.",
  },
  Receipt: {
    discipline: "Project convention",
    standing: "Project term, not standard mathematics",
    formal: "⟨check_id, scope, status, work_ledger⟩",
    academic:
      "An engineering artefact rather than a mathematical object: a record sufficient to reproduce a bounded execution. It has no algebraic content, and no theorem on this site depends on it. It is listed among the concepts because the project's evidence claims are stated in terms of it.",
  },
  Boundary: {
    discipline: "Project convention",
    standing: "Project term, not standard mathematics",
    formal: "S ⊆ U;   ⊢ φ(x)  ⟺  x ∈ S",
    academic:
      "A publication convention marking the limit of an asserted claim. In logical terms it is the explicit restriction of a quantifier: assertions are made over a stated domain, and nothing is asserted outside it. The convention exists because unrestricted readings of restricted results are the project's main misuse risk.",
  },
  "Formal, current, and target layers": {
    discipline: "Project convention",
    standing: "Project term, not standard mathematics",
    formal: "FORMAL ⊬ CURRENT ⊬ TARGET",
    academic:
      "A separation of three distinct kinds of assertion: theorems about the algebras, verified properties of a running implementation, and specified but unimplemented architecture. None entails another. Conflating them is a category error, and the site is organised to make the error visible rather than convenient.",
  },
  "Symbol legend": {
    discipline: "Project convention",
    standing: "Project term, not standard mathematics",
    formal: "⊕, ★, P_i, Q_n, L_n",
    academic:
      "The notation table, understood as a declared object language: a finite list of symbols together with their intended readings. It is stated once so that every page can be read without appeal to an external convention, and it is closed — a symbol absent from the legend does not occur in the published text. Closure is what makes a claim on this site checkable without having to guess what a mark was meant to denote.",
  },
  "Residue class": {
    discipline: "Number theory",
    standing: "Standard term, standard meaning",
    formal: "[a]_n = {a + kn : k ∈ Z};  Z/nZ = {[0]_n, …, [n−1]_n}",
    academic:
      "The equivalence class of an integer under congruence modulo n. The classes partition Z and inherit well-defined addition and multiplication, making Z/nZ a commutative ring. Elements of the carrier are identified with these classes, which is what makes the wrap-around an identity rather than a truncation.",
  },
  "Signature, arity, and constant": {
    discipline: "Universal algebra",
    standing: "Standard term, standard meaning",
    formal: "Σ = {⊕ (2), ★ (2), P_0 (0)}",
    academic:
      "A signature is a set of operation symbols with declared arities; a constant is an operation of arity zero. The signature fixes which terms are well formed and therefore which statements are expressible at all. Naming P_0 as a constant is what makes it available to automorphism conditions.",
  },
  "Magma, semigroup, monoid, and group": {
    discipline: "Universal algebra",
    standing: "Standard term, standard meaning",
    formal: "Mag ⊃ Sgr ⊃ Mon ⊃ Grp",
    academic:
      "The standard hierarchy: closure alone gives a magma; adding associativity gives a semigroup; a two-sided identity gives a monoid; inverses give a group. The additive reduct is an abelian group, whereas the second law yields only a magma for n ≥ 2. Classifying precisely prevents the accidental import of stronger theorems.",
  },
  Closure: {
    discipline: "Universal algebra",
    standing: "Standard term, standard meaning",
    formal: "∀ x, y ∈ Q_n : x ∘ y ∈ Q_n",
    academic:
      "The requirement that the operation not leave the carrier — already implied by writing it as a map into Q_n. Closure over a finite carrier is what makes exhaustive verification a terminating procedure rather than an unbounded search.",
  },
  Associativity: {
    discipline: "Universal algebra",
    standing: "Standard term, standard meaning",
    formal: "(x ∘ y) ∘ z = x ∘ (y ∘ z),  ∀ x, y, z ∈ Q_n",
    academic:
      "A universally quantified identity. Where it holds, bracketing may be omitted and the generalised associative law licenses any parenthesisation of a product. It holds for ⊕_n and fails for ★_n, so bracket structure is semantically significant in the expansion.",
  },
  Commutativity: {
    discipline: "Universal algebra",
    standing: "Standard term, standard meaning",
    formal: "x ∘ y = y ∘ x,  ∀ x, y ∈ Q_n",
    academic:
      "A universally quantified identity in the two arguments. It holds for ⊕_n, so the additive reduct is abelian, and fails for ★_n at every level n ≥ 2. Failure is what makes the ordered pair, rather than the unordered pair, the correct index of a step.",
  },
  "Identity element": {
    discipline: "Universal algebra",
    standing: "Standard term, standard meaning",
    formal: "e ∘ x = x ∘ e = x;  unique when it exists",
    academic:
      "A two-sided identity is neutral from both sides, and it is unique whenever it exists: two identities e and e′ satisfy e = e ∘ e′ = e′. P_0 is a two-sided identity for ⊕_n; for ★_n it is right neutral only, so ★_n has no identity for n ≥ 2.",
  },
  "Inverse and generator": {
    discipline: "Group theory",
    standing: "Standard term, standard meaning",
    formal: "x ⊕ x^(−1) = P_0;  ⟨P_1⟩ = Q_n",
    academic:
      "In a group every element has a unique inverse, and a generator is an element whose cyclic subgroup is the whole group. Q_n under ⊕_n is generated by P_1, so the additive reduct is cyclic and reachability of one element from another is never an obstruction.",
  },
  "Standard left and right translation": {
    discipline: "Group theory",
    standing: "Standard term, standard meaning",
    formal: "L_a(x) = a ∘ x,  R_a(x) = x ∘ a",
    academic:
      "The maps obtained by fixing one argument. In a group both are bijections, which is the content of Cayley's theorem for the additive reduct. For the second law the left translation by P_0 is constant, so it is not injective and the corresponding row of the table degenerates.",
  },
  "Image of a function": {
    discipline: "Sets, maps, and relations",
    standing: "Standard term, standard meaning",
    formal: "Im(f) = {f(x) : x ∈ dom f} ⊆ codom f",
    academic:
      "The set of values actually attained. A map is surjective exactly when its image is the whole codomain, and for maps of a finite set into itself injectivity, surjectivity, and bijectivity coincide — which is why a non-injective translation is immediately detectable as a shrinking image.",
  },
  "Function, injection, surjection, and bijection": {
    discipline: "Sets, maps, and relations",
    standing: "Standard term, standard meaning",
    formal: "injective: f(x) = f(y) ⇒ x = y;  surjective: Im(f) = codom f",
    academic:
      "The standard classification of maps. On a finite set of fixed cardinality the three notions collapse: a self-map is injective if and only if it is surjective if and only if it is bijective. Automorphisms must be bijections, since a non-injective relabelling would identify two distinct elements.",
  },
  "Divisibility and element order": {
    discipline: "Group theory",
    standing: "Standard term, standard meaning",
    formal: "ord(P_i) = n / gcd(i, n);  ord(x) ∣ |G|",
    academic:
      "The order of an element is the least positive k with k copies of it summing to the identity. By Lagrange it divides the group order, and in the cyclic group of order n the element of index i has order n/gcd(i, n). Generators are exactly the indices coprime to n.",
  },
  "Unit group and Euler totient": {
    discipline: "Number theory",
    standing: "Standard term, standard meaning",
    formal: "U(n) = (Z/nZ)^×,  |U(n)| = φ(n)",
    academic:
      "The multiplicative group of residues coprime to n, of order given by Euler's totient function. Since Aut of the expansion is isomorphic to U(n), the totient counts the structure-preserving relabellings available at each level, and it is maximal relative to n precisely when n is prime.",
  },
  "Catalan number and bracket recurrence": {
    discipline: "Combinatorics",
    standing: "Standard term, standard meaning",
    formal: "C_k = binom(2k, k)/(k+1);  C_(k+1) = Σ_(i=0)^k C_i C_(k−i)",
    academic:
      "The Catalan numbers count the parenthesisations of a sequence of k+1 operands, equivalently the binary trees with k internal nodes. Because the second law is non-associative, distinct parenthesisations may denote distinct values, so this count bounds the number of syntactically distinct terms of a given length.",
  },
  "Equivalence relation and quotient": {
    discipline: "Sets, maps, and relations",
    standing: "Standard term, standard meaning",
    formal: "reflexive, symmetric, transitive;  X/∼ = {[x] : x ∈ X}",
    academic:
      "An equivalence relation partitions its domain, and the quotient is the set of classes. A quotient of an algebra carries a well-defined induced structure exactly when the relation is a congruence; without that compatibility the coarser view is a set-level construction only and proves nothing about the operations.",
  },
  Endomorphism: {
    discipline: "Universal algebra",
    standing: "Standard term, standard meaning",
    formal: "End(Q_n) = Hom(Q_n, Q_n);  Aut(Q_n) = End(Q_n) ∩ Sym(Q_n)",
    academic:
      "A homomorphism from a structure to itself. Endomorphisms form a monoid under composition, and the automorphisms are exactly its invertible elements. An endomorphism need not be injective, so it may collapse distinct elements while still preserving both laws.",
  },
  "Isomorphism versus literal equality": {
    discipline: "Universal algebra",
    standing: "Standard term, standard meaning",
    formal: "A ≅ B ⇔ ∃ bijective homomorphism A → B",
    academic:
      "Isomorphism is a bijective homomorphism and is strictly weaker than identity of objects: isomorphic structures satisfy the same sentences of the signature while remaining distinct as sets. Reporting an isomorphism as an equality would overstate the result, so the site uses the word only in its exact sense.",
  },
  "Torsor and holomorph": {
    discipline: "Group theory",
    standing: "Standard term, standard meaning",
    formal: "Hol(G) = G ⋊ Aut(G);   ∀ x, y ∈ X  ∃! g : g · x = y",
    academic:
      "A torsor over a group is a set with a free and transitive action but no preferred base point; the holomorph is the semidirect product of the group with its automorphism group. The additive reduct is a torsor under translation, and naming the constant P_0 in the signature is exactly what selects a base point and reduces the symmetry group.",
  },
  "Five L3 ordered-pair orbits": {
    discipline: "Combinatorics",
    standing: "Standard term, narrowed to this setting",
    formal: "|X| = 9, |G| = 2, Fix(id) = 9, Fix(σ) = 1;  (9+1)/2 = 5",
    academic:
      "A worked application of the orbit-counting lemma to the diagonal action of Aut on ordered pairs at level three. The automorphism group has order two, the identity fixes all nine pairs and the involution fixes one, so the number of orbits is five. Restoring the four role tags multiplies this to twenty.",
  },
  "Current V4 step-by-step replay": {
    discipline: "Project convention",
    standing: "Project term, not standard mathematics",
    formal: "⟨committed 1,204;  executable 880;  frontier 440;  arity 2;  route_depth 1⟩",
    academic:
      "A description of a software release, not a mathematical statement. The counts are cardinalities of declared finite sets fixed by the release contract, and they are reported for auditability. No theorem in this glossary depends on any of them.",
  },
};

export const termAcademicTranslationKeys = [
  ...new Set([...Object.values(termAcademics).flatMap((entry) => [entry.discipline, entry.standing, entry.academic])]),
] as const;
