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
