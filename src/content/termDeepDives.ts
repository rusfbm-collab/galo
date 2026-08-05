import { conceptLessons } from "./theory";

export type TermDeepDive = {
  term: string;
  inOneLine: string;
  picture: string;
  whyGalo: string;
  whereYouMeetIt: string;
  related: readonly string[];
};

/**
 * A plain-language layer in front of the seven-part concept lesson. Each entry
 * answers the four questions a first-time reader actually asks before the exact
 * definition becomes readable.
 */
export const termDeepDives: readonly TermDeepDive[] = [
  {
    term: "Pole",
    inOneLine: "A pole is one named position a level is allowed to be in — nothing more and nothing less.",
    picture:
      "Think of the floor indicator in a lift. Floor 2 is a position, not a quantity of anything; it only tells you where the lift is right now.",
    whyGalo:
      "GALO refuses to hide its state inside an opaque vector. If a state can be named, it can be printed into a receipt, compared with an earlier run, and disputed by a reviewer who does not trust you.",
    whereYouMeetIt:
      "Every table cell, every typed coordinate, and every recorded receipt on this site is written in poles.",
    related: ["Carrier", "Level", "Typed coordinate"],
  },
  {
    term: "Level",
    inOneLine: "A level fixes how many distinct positions exist: L3 has three, L7 has seven.",
    picture:
      "It is the difference between a three-way switch and a seven-position dial. The dial is not cleverer; it simply has more positions to tell apart.",
    whyGalo:
      "Resolution should be a decision, not an accident. Writing the level down turns the need for a finer distinction into a statement that someone else can check.",
    whereYouMeetIt:
      "Levels L1 through L7 appear in every table, in the 560-coordinate count, and in the rules for moving between levels.",
    related: ["Pole", "Carrier", "Modulo n"],
  },
  {
    term: "Modulo n",
    inOneLine: "Modulo n means counting that wraps: after the last position you are back at the first.",
    picture: "A clock face. Four hours after ten o'clock is two o'clock, because the count wraps at twelve.",
    whyGalo:
      "Wraparound keeps every calculation inside the declared finite set. No operation can produce a state that was not declared in advance, so the space of outcomes stays closed.",
    whereYouMeetIt:
      "It drives PLUS, it drives the non-reset rows of STAR, and it is the wrap you can see in the dial illustration.",
    related: ["PLUS", "Residue class", "Level"],
  },
  {
    term: "PLUS",
    inOneLine: "PLUS takes two positions and rotates the first one forward by the index of the second.",
    picture:
      "Turning a combination dial: start where you are, advance the number of clicks named by the second input, and read where you stopped.",
    whyGalo:
      "PLUS is the well-behaved half of the kernel. It is associative, commutative and reversible, which makes it safe to reason about in bulk and a fair baseline for judging STAR.",
    whereYouMeetIt:
      "PLUS fills the symmetric Cayley table, defines the cyclic structure of each level, and anchors every symmetry argument.",
    related: ["STAR", "Cayley table", "Modulo n"],
  },
  {
    term: "STAR",
    inOneLine:
      "STAR behaves exactly like PLUS, except that a raw-left P0 forces the answer to P0 before any addition happens.",
    picture:
      "A machine with a safety latch on the left slot. Drop P0 into that slot and the machine stops at P0, whatever sits in the other slot.",
    whyGalo:
      "One asymmetric clause removes commutativity, associativity and the identity element at once. GALO keeps it because a reset that only one side can trigger is exactly what a controlled, revisable state needs.",
    whereYouMeetIt:
      "The flat P0 row in the STAR table, the zero-prefix rule, and most of the boundaries on this site follow from this single clause.",
    related: ["PLUS", "Left zero", "Right-neutral element"],
  },
  {
    term: "Left zero",
    inOneLine: "A left zero decides the answer whenever it sits in the left slot.",
    picture: "A cancel button. Once it is pressed, whatever else was typed no longer matters.",
    whyGalo:
      "It gives the kernel a way to halt a chain that the other operand cannot override. That is the algebraic seed of a reset.",
    whereYouMeetIt:
      "P0 is the unique left zero of STAR at every level n≥2, which is why the whole P0 row of a STAR table is constant.",
    related: ["STAR", "Right-neutral element", "Identity element"],
  },
  {
    term: "Right-neutral element",
    inOneLine: "A right-neutral element changes nothing when it sits in the right slot.",
    picture: "Advancing by zero steps: you stay exactly where you already were.",
    whyGalo:
      "It is the half of an identity that STAR genuinely has. Naming it precisely blocks the much stronger and false claim that STAR has an identity element.",
    whereYouMeetIt:
      "P0 is the unique right-neutral element of STAR; together with the left-zero property it is why STAR has no two-sided identity.",
    related: ["Left zero", "Identity element", "STAR"],
  },
  {
    term: "Typed coordinate",
    inOneLine:
      "A typed coordinate is the full address of one transition: level, law family, source role, and active role.",
    picture:
      "A postal address. The same street number in a different city is a different place, however identical the number looks.",
    whyGalo:
      "Two transitions can land on the same result for completely different reasons. Keeping the address means the reason survives into the record instead of being averaged away.",
    whereYouMeetIt:
      "Identifiers such as L3:STAR_LEFT:P0:P2, the 560-coordinate count, and the guided transition laboratory.",
    related: ["Source state", "Active pole", "Typed catalogue count"],
  },
  {
    term: "Cayley table",
    inOneLine: "A Cayley table lists the result of a two-input rule for every possible pair of inputs.",
    picture: "The times table you already know, but written for any two-input rule instead of multiplication.",
    whyGalo:
      "A finite table can be checked exhaustively. Nothing has to be trusted, sampled or estimated: every cell is either right or wrong, and the site regenerates them rather than quoting them.",
    whereYouMeetIt: "The L3 tables, the coloured field illustration, and the table channel of every glossary entry.",
    related: ["Binary operation", "PLUS", "STAR"],
  },
  {
    term: "Automorphism",
    inOneLine: "An automorphism is a reversible renaming of every position that leaves every rule intact.",
    picture:
      "Relabelling the keys and the locks of a building at the same time. Every key still opens exactly the door it opened before.",
    whyGalo:
      "It separates distinctions that are structural from distinctions that are only a naming convention — an honesty check on what the mathematics really says.",
    whereYouMeetIt:
      "The unit multipliers, the eighteen same-level automorphisms summed over L1–L7, and the whole symmetry chapter.",
    related: ["Group action", "Orbit", "Unit group and Euler totient"],
  },
  {
    term: "Orbit",
    inOneLine: "An orbit collects everything one object can be turned into by the allowed symmetries.",
    picture:
      "The seats you can reach by rotating a round table. Reachable seats form one group; the seats you can never reach form another.",
    whyGalo:
      "Counting orbits counts genuinely different cases instead of counting relabellings of the same case, so a structural total does not get inflated by naming choices.",
    whereYouMeetIt: "The two L3 pole orbits, the 224 typed orbits across the tower, and the Burnside average.",
    related: ["Automorphism", "Stabilizer", "Burnside's lemma"],
  },
  {
    term: "Homomorphism",
    inOneLine:
      "A homomorphism translates positions from one level to another so that every rule still holds after the translation.",
    picture:
      "A faithful translator. If the original sentence was a question, the translated sentence is still a question.",
    whyGalo:
      "Moving information between levels is exactly where silent corruption would happen. The preservation equation turns that move into something a machine can check cell by cell.",
    whereYouMeetIt: "The L2→L4 pass, the L3→L5 rejection, and the zero map that exists between every pair of levels.",
    related: ["Embedding", "Zero homomorphism", "Divisibility and element order"],
  },
  {
    term: "Embedding",
    inOneLine: "An embedding is a homomorphism that also keeps distinct positions distinct.",
    picture:
      "Fitting a small cog inside a large one. It meshes only when the teeth line up exactly; otherwise it does not fit at all.",
    whyGalo:
      "It is the exact condition for carrying a finer state into a coarser system without quietly losing a distinction that a decision depended on.",
    whereYouMeetIt:
      "The divisibility rule, the level-transfer illustration, and the rejected same-index candidate from L3 to L5.",
    related: ["Homomorphism", "Zero homomorphism", "Level"],
  },
  {
    term: "Receipt",
    inOneLine: "A receipt is the machine-readable record of what one bounded run checked, executed and concluded.",
    picture:
      "A laboratory notebook page: which experiment, which inputs, which result — written down while it happened.",
    whyGalo:
      "A claim without a receipt cannot be re-run by somebody who does not trust the person making it. GALO treats that as a defect in the claim, not a detail of the paperwork.",
    whereYouMeetIt:
      "The recorded walkthrough on the home page, the work ledger, and every check identifier shown on this site.",
    related: ["Boundary", "Formal, current, and target layers"],
  },
  {
    term: "Boundary",
    inOneLine:
      "A boundary is an explicit statement that a stronger conclusion is not available yet, together with the reason.",
    picture: "A sign saying the bridge ends here — not a detour sign pretending the road continues.",
    whyGalo:
      "The fastest way to lose a technical reader is to blur the edge of the evidence. Marking the edge is what makes everything inside it worth reading.",
    whereYouMeetIt:
      "Every BOUNDARY status, the open-boundaries column, and the status field of the public claim matrix.",
    related: ["Receipt", "Formal, current, and target layers"],
  },
  {
    term: "Formal, current, and target layers",
    inOneLine:
      "Three separate things: the mathematics that is settled, the engine that runs today, and the architecture still being built.",
    picture:
      "A finished blueprint, a working prototype on the bench, and the machine the bench is aiming at. Three real objects in three different states.",
    whyGalo:
      "Most confusion about a research system comes from quoting one layer while the reader assumes another. Keeping them apart is the reason this site exists in its current form.",
    whereYouMeetIt:
      "The four tracks on the evidence page, the FORMAL / CURRENT V4 / TARGET tags, and the claim matrix.",
    related: ["Receipt", "Boundary", "Current V4 step-by-step replay"],
  },
  {
    term: "Carrier",
    inOneLine:
      "A carrier is the complete list of positions that exist at one level; nothing outside the list is allowed.",
    picture: "The seat list of one small carousel. If a seat is not on the list, nobody can sit there.",
    whyGalo:
      "Declaring the whole set up front is what makes exhaustive checking possible: there is no long tail of states that nobody ever enumerated.",
    whereYouMeetIt: "The row and column headers of every table, and the size n that every level formula refers to.",
    related: ["Pole", "Level", "Binary operation"],
  },
  {
    term: "Residue class",
    inOneLine: "A residue class is the whole family of integers that land on the same position after wrapping.",
    picture:
      "Every moment the clock hand points at three: three today, three next week, fifteen hundred hours. One mark, many moments.",
    whyGalo:
      "It explains how a label can carry exact arithmetic without pretending to be a quantity. The label stands for a class, not for a size.",
    whereYouMeetIt: "The correspondence between P_i and the remainder i, and every wraparound in the tables.",
    related: ["Modulo n", "Pole", "Level"],
  },
  {
    term: "Binary operation",
    inOneLine: "A binary operation turns exactly two inputs into exactly one output, with no gaps and no choices.",
    picture: "A vending machine with two slots. The same two coins give the same item, every single time.",
    whyGalo:
      "Determinism is not a nice-to-have here. Replay only means something if identical inputs always produce an identical output.",
    whereYouMeetIt: "PLUS and STAR are both binary operations, which is why each one fills a complete square table.",
    related: ["Cayley table", "Closure", "PLUS"],
  },
  {
    term: "Closure",
    inOneLine: "Closure means the operation can never send you outside the declared set of positions.",
    picture: "A board game in which no legal move can ever push a piece off the board.",
    whyGalo:
      "Without closure the finite universe would leak, and no exhaustive check over it could be trusted afterwards.",
    whereYouMeetIt: "Every cell of every table holds a position from the same level. That is closure, made visible.",
    related: ["Binary operation", "Carrier", "Magma, semigroup, monoid, and group"],
  },
  {
    term: "Commutativity",
    inOneLine: "Commutativity asks whether swapping the two inputs leaves the result unchanged.",
    picture: "Socks then shoes is not the same as shoes then socks. Some orders matter and some do not.",
    whyGalo:
      "PLUS commutes and STAR does not. That single difference is what makes role placement a real decision instead of bookkeeping.",
    whereYouMeetIt: "The PLUS table is mirror-symmetric across its diagonal; the STAR table visibly is not.",
    related: ["Associativity", "PLUS", "STAR"],
  },
  {
    term: "Identity element",
    inOneLine: "An identity element leaves every input unchanged, and it must do so from both sides.",
    picture: "Adding nothing to a shopping basket. The basket is unchanged whichever side you add the nothing on.",
    whyGalo:
      "Claiming an identity where only a one-sided version exists is exactly the kind of small overstatement this project is built to catch.",
    whereYouMeetIt: "PLUS has one; STAR has none for n≥2, and the complete non-existence proof is on the theory page.",
    related: ["Left zero", "Right-neutral element", "Magma, semigroup, monoid, and group"],
  },
  {
    term: "Magma, semigroup, monoid, and group",
    inOneLine: "Four names for how many good properties an operation actually has, from fewest to most.",
    picture: "A checklist you climb: each rung keeps every requirement below it and adds one more.",
    whyGalo: "Naming the exact rung stops a weaker structure from being described with a stronger word by accident.",
    whereYouMeetIt: "PLUS reaches the top rung; STAR stops on the first one, and the site says so wherever it matters.",
    related: ["Closure", "Associativity", "Identity element"],
  },
  {
    term: "Source state",
    inOneLine: "The source is the position a transition starts from, tracked as a named role rather than as a slot.",
    picture: "On a delivery record the sender stays the sender, even when the form rearranges its fields.",
    whyGalo:
      "Roles survive rearrangement and slots do not. Keeping the role is how provenance stays attached to a result.",
    whereYouMeetIt: "The third field of every typed coordinate, and the LEFT/RIGHT switch in the guided laboratory.",
    related: ["Active pole", "Typed coordinate", "Pole"],
  },
  {
    term: "Active pole",
    inOneLine: "The active pole is the position applied to the source: the instruction rather than the starting point.",
    picture: "On a combination lock the source is where the dial stands and the active pole is how far you turn it.",
    whyGalo:
      "Separating what is being changed from what is doing the changing is the smallest workable model of an action.",
    whereYouMeetIt: "The fourth field of every typed coordinate, and the second control in the guided laboratory.",
    related: ["Source state", "Typed coordinate", "STAR"],
  },
  {
    term: "Standard left and right translation",
    inOneLine: "Fix one input of a two-input rule and what remains is a one-input map through the table.",
    picture: "Lock one dial of a combination lock and turn only the other: you trace a single line of outcomes.",
    whyGalo:
      "Most questions about what a step can reach are questions about these fixed slices, so the site names them precisely, including where the naming inverts.",
    whereYouMeetIt:
      "The ranks computed at L3 with the active pole fixed, and the warning that the interface name and the algebraic name point opposite ways.",
    related: ["Rank", "Image of a function", "Active pole"],
  },
  {
    term: "Rank",
    inOneLine: "Rank counts how many different destinations a fixed one-input map can actually reach.",
    picture: "A bus route with ten stops printed on the timetable but only four it ever really calls at.",
    whyGalo:
      "It measures how much a step can still distinguish. A drop in rank is a loss of resolution you can see and count.",
    whereYouMeetIt: "The L3 comparison where one orientation reaches two positions and the other reaches all three.",
    related: ["Standard left and right translation", "Image of a function", "STAR"],
  },
  {
    term: "Typed catalogue count",
    inOneLine:
      "The 560 figure is one exhaustive count of addresses: input pairs first, then laws, then role placements.",
    picture: "Counting a warehouse by aisle, then shelf, then bin. Three independent multiplications, one total.",
    whyGalo: "A number anyone can recount from the definitions cannot quietly drift into being a marketing figure.",
    whereYouMeetIt: "The per-level bar chart, and the 140 to 280 to 560 to 556 chain printed beneath it.",
    related: ["Typed coordinate", "Level", "Cayley table"],
  },
  {
    term: "Signature, arity, and constant",
    inOneLine: "A signature lists the operations a structure offers and how many inputs each one takes.",
    picture: "The button panel of a machine: two two-handed levers and one fixed marked position.",
    whyGalo:
      "Comparing two structures only means something once both are described with the same vocabulary of operations.",
    whereYouMeetIt: "The shorthand (2,2,0) for the full algebra: PLUS, STAR, and the named constant P0.",
    related: ["Binary operation", "Magma, semigroup, monoid, and group", "Reduct and expansion"],
  },
  {
    term: "Composition",
    inOneLine: "Composition feeds the output of one step into the input of the next, forming a tree of steps.",
    picture: "A recipe in which the contents of one bowl become an ingredient in the next bowl.",
    whyGalo:
      "A single step is one cell; a plan is a tree. Writing the tree down is what turns a sequence of actions into something auditable.",
    whereYouMeetIt:
      "The two bracketed L3 programs, and the boundary stating that the current engine executes one step and not a tree.",
    related: ["Nonassociative", "Catalan number and bracket recurrence", "Zero-prefix rule"],
  },
  {
    term: "Nonassociative",
    inOneLine: "Nonassociative means the brackets matter: regrouping the same inputs can change the answer.",
    picture: "Ordinary subtraction does it too. Eight minus three minus two is not eight minus one.",
    whyGalo:
      "If brackets change the outcome, a plan cannot be stored as a flat list. The structure has to be written down and carried.",
    whereYouMeetIt: "The pair of L3 trees that return P2 and P1 from the very same three inputs.",
    related: ["Associativity", "Composition", "STAR"],
  },
  {
    term: "Associativity",
    inOneLine: "Associativity is permission to move the brackets while keeping the input order fixed.",
    picture: "Stacking boxes: taping the first two together first or the last two first leaves the same stack.",
    whyGalo:
      "It is the property that lets long chains be evaluated in any convenient order, and precisely the property STAR gives up.",
    whereYouMeetIt: "PLUS has it at every level; the STAR counterexample is worked out in full on the theory page.",
    related: ["Commutativity", "Nonassociative", "PLUS"],
  },
  {
    term: "Zero-prefix rule",
    inOneLine: "In a left-to-right STAR chain, once a running prefix reaches P0 every later value stays P0.",
    picture: "A latch that clicks shut. Nothing further down the line can unlatch it.",
    whyGalo:
      "It shows that history matters: a final total tells you nothing about whether the chain already reset along the way.",
    whereYouMeetIt: "The worked L5 chain where the ordinary sum and the STAR result disagree.",
    related: ["Left zero", "Composition", "STAR"],
  },
  {
    term: "Catalan number and bracket recurrence",
    inOneLine: "Catalan numbers count how many different bracketings a fixed row of inputs admits.",
    picture: "The number of ways to pair up parentheses along a line without any pair ever crossing another.",
    whyGalo:
      "It puts an exact size on the space of possible plans, so plan structure becomes a counted object instead of a vague one.",
    whereYouMeetIt: "The 1, 2, 5, 14 progression for two, three, four, and five operands.",
    related: ["Composition", "Nonassociative"],
  },
  {
    term: "Group action",
    inOneLine: "A group action is a full set of reversible moves together with the rule for combining them.",
    picture: "The rotations of a dial, plus the fact that performing two rotations is itself a rotation.",
    whyGalo:
      "A symmetry claim only means something once the acting set is declared. Naming the action is what keeps orbit counts honest.",
    whereYouMeetIt: "The unit multipliers acting at each level, and the two-element action at L3.",
    related: ["Automorphism", "Orbit", "Stabilizer"],
  },
  {
    term: "Stabilizer",
    inOneLine: "The stabilizer of an object is the set of moves that leave it exactly where it was.",
    picture: "The rotations of a square that leave one particular corner in place.",
    whyGalo:
      "Orbit size multiplied by stabilizer size gives the size of the whole group, which turns counting into arithmetic instead of guesswork.",
    whereYouMeetIt: "The L3 check where only the identity fixes P1, matching its two-element orbit.",
    related: ["Orbit", "Group action", "Burnside's lemma"],
  },
  {
    term: "Burnside's lemma",
    inOneLine: "Burnside counts distinct cases by averaging how many objects each move leaves untouched.",
    picture:
      "Counting genuinely different bead necklaces by asking, for each rotation, how many arrangements it leaves alone.",
    whyGalo:
      "It gives a second and independent route to a structural count, so the site can publish two derivations that are required to agree.",
    whereYouMeetIt: "The average of three and one at L3, and the 224 typed orbits reconstructed twice over.",
    related: ["Orbit", "Stabilizer", "Group action"],
  },
  {
    term: "Zero homomorphism",
    inOneLine: "The zero homomorphism sends every position to P0, and it exists between every pair of levels.",
    picture: "A translator who answers every question with the same single word. Perfectly consistent, and useless.",
    whyGalo:
      "It is why saying that no map exists is almost always the wrong statement. What fails is a map that keeps distinctions.",
    whereYouMeetIt: "The correction printed beside the L3 to L5 rejection, and the empty cells of the transfer matrix.",
    related: ["Homomorphism", "Embedding", "Boundary"],
  },
  {
    term: "Divisibility and element order",
    inOneLine: "Order is how many steps it takes to return to the start, and it has to divide the size of the level.",
    picture: "A gear with three teeth meshes cleanly into one with six, but never into one with five.",
    whyGalo:
      "It converts a question about carrying state between levels into a fact about numbers that can be checked in one line.",
    whereYouMeetIt:
      "The rule that a nonzero embedding from one level into another exists exactly when the sizes divide.",
    related: ["Embedding", "Homomorphism", "Level"],
  },
  {
    term: "Current V4 step-by-step replay",
    inOneLine: "The whole current engine written out as one worked pass, from accepted input to recorded receipt.",
    picture:
      "A sealed card catalogue: recognise one of two request cards, discard the forbidden card types, pick one shelf, sort reproducibly, and use one card once.",
    whyGalo:
      "It is the single place where every published runtime number appears in the order the engine actually applies them.",
    whereYouMeetIt: "The narrowing illustration, the descriptor arithmetic table, and the current-scope ledger.",
    related: ["Formal, current, and target layers", "Receipt", "Boundary"],
  },
];

export const termDeepDiveFields = ["inOneLine", "picture", "whyGalo", "whereYouMeetIt"] as const;

export const termDeepDiveByTerm = new Map(termDeepDives.map((entry) => [entry.term, entry]));

export const termLessonByTerm = new Map(conceptLessons.map((lesson) => [lesson.term, lesson]));

export const termChapterLabel = {
  theory: "Theory chapter",
  mathematics: "Mathematics chapter",
  symmetry: "Symmetry chapter",
} as const;

export const termUiTranslationKeys = [
  "Key terms in this section",
  "Every term opens a detailed explanation.",
  "Detailed explanation",
  "In one line",
  "A picture you already know",
  "Why GALO needs it",
  "Where you meet it on this site",
  "Complete definition and two independent checks",
  "Related terms",
  "Close the explanation",
  "COMPLETE TERM INDEX",
  "Open any of the 59 terms and read it in full.",
  "Every entry is written the same way, so a term you already know teaches you how to read the ones you do not.",
  "Theory chapter",
  "Mathematics chapter",
  "Symmetry chapter",
] as const;

export const termTranslationKeys = [
  ...new Set(
    termDeepDives.flatMap((entry) => termDeepDiveFields.map((field) => entry[field])).concat(termUiTranslationKeys),
  ),
] as const;
