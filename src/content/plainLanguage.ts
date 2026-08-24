/**
 * Non-technical entry layers.
 *
 * `readerPaths` routes each kind of reader to the three pages that answer their
 * question and no others. `investorBriefing` answers the questions a
 * non-technical reader asks first. `cayleyFoundation` explains, from the familiar
 * multiplication table upward, why a finite Cayley table is the object everything
 * else on this site is built on.
 */

export type ReaderPath = {
  audience: string;
  goal: string;
  /** Untranslated reading time. */
  minutes: string;
  stops: readonly { href: string; label: string }[];
};

export const readerPaths: readonly ReaderPath[] = [
  {
    audience: "I just want to know what this is",
    goal: "No terms, no formulas, and nothing about artificial intelligence you are expected to know already.",
    minutes: "12m",
    stops: [
      { href: "/simple#story", label: "Start here if AI is not your field" },
      { href: "/simple#idea", label: "What we actually do about it" },
      { href: "/simple#honest", label: "What we would rather tell you ourselves" },
    ],
  },
  {
    audience: "I am deciding whether this deserves an hour",
    goal: "What exists today, what does not, what could go wrong, and how to check us without asking us anything.",
    minutes: "15m",
    stops: [
      { href: "/investors#one-minute", label: "The whole idea in one minute" },
      { href: "/investors#risks", label: "Six risks and what would settle each one" },
      { href: "/investors#diligence", label: "A diligence path you can run yourself" },
    ],
  },
  {
    audience: "I came here to check, not to admire",
    goal: "Exactly what an outsider can establish here — and, just as plainly, what nobody can.",
    minutes: "25m",
    stops: [
      { href: "/audit#what-you-can-check", label: "Four tiers of verifiability" },
      { href: "/audit#eight-questions", label: "Eight questions, answered as they stand today" },
      { href: "/evidence", label: "The published record and its boundaries" },
    ],
  },
  {
    audience: "Show me the mechanism, then the proofs",
    goal: "Start from the table it is all built on, follow one decision end to end, then read the formal statements.",
    minutes: "60m",
    stops: [
      { href: "/theory#cayley-first", label: "Start with the table you already know" },
      { href: "/thinking", label: "One decision, drawn stage by stage" },
      { href: "/math#academic-analysis", label: "Numbered definitions and proofs" },
    ],
  },
];

export type PlainAnswer = {
  question: string;
  answer: string;
  detail: string;
};

/**
 * Six questions, in the order somebody outside the field asks them.
 *
 * These used to say the system does not learn, full stop, which stopped being
 * true the moment the page began describing a sealed research line that does.
 * The contradiction was not in the facts — it was in a vocabulary that let one
 * artefact borrow a sentence from another. Each answer here names which of the
 * three artefacts it is about.
 */
export const investorBriefing: readonly PlainAnswer[] = [
  {
    question: "What is GALO?",
    answer:
      "A weight-free AI architecture: it stores what it learned as explicit, versioned structures rather than as hidden model parameters.",
    detail:
      "There is no trainable parameter tensor in the engine and no gradient step. That is a statement about the kind of object it is, not about how well it performs.",
  },
  {
    question: "What does it learn?",
    answer: "Relations, reusable structures, search orders, and routes backed by the evidence that produced them.",
    detail:
      "Each of those can be printed, compared with the same item from an earlier run, and rolled back on its own. What it never learns is what counts as a lawful answer.",
  },
  {
    question: "Why does that matter?",
    answer:
      "Because when something changes, the decisions it actually affects can be named — instead of retraining everything or accepting an answer that quietly moved.",
    detail:
      "That is the whole commercial idea. In long-running and regulated work the expensive failure is rarely the wrong answer; it is the one nobody can reconstruct six months later.",
  },
  {
    question: "What is the first product?",
    answer: "Industrial decision assurance around the systems a company already operates.",
    detail:
      "Read-only and advisory, on one bounded workflow, with a frozen baseline and a decision package somebody else can replay. It is intended, not deployed.",
  },
  {
    question: "What works today?",
    answer:
      "A bounded public verifier exists and reproduces. Sealed research prototypes have measured weight-free learning inside declared scopes. No partner-controlled industrial deployment exists.",
    detail:
      "Those are three different artefacts and no result carries from one to another. The public release performs no learning at all; the sealed line is where every learning figure on this site comes from.",
  },
  {
    question: "What is not claimed?",
    answer:
      "General intelligence, production autonomy, partner-controlled validity, customer traction, and general superiority over language models.",
    detail:
      "None of those appears anywhere on this site, and each is listed on the evidence page with the observation that would settle it.",
  },
];

export type FoundationStep = {
  number: string;
  title: string;
  text: string;
  formal: string;
};

export const cayleyFoundation: readonly FoundationStep[] = [
  {
    number: "01",
    title: "A table of results for two inputs",
    text: "You already know one: the multiplication table. Choose a row, choose a column, read the cell. A Cayley table is the same idea applied to any rule that takes two inputs.",
    formal: "row × column → cell",
  },
  {
    number: "02",
    title: "A finite set of allowed positions",
    text: "GALO first declares how many positions exist. Three positions give a three-by-three table; seven give a seven-by-seven one. Nothing outside the declared list can ever appear.",
    formal: "Q_3 = {P0, P1, P2}",
  },
  {
    number: "03",
    title: "Two rules, filled in completely",
    text: "Two laws fill the same grid. PLUS moves around the ring. STAR does the same except that one input on the left resets the answer. Both tables are written out in full, not approximated.",
    formal: "PLUS_n, STAR_n : Q_n × Q_n → Q_n",
  },
  {
    number: "04",
    title: "An address for every cell",
    text: "A cell is recorded together with the roles of its two inputs, so two steps that end on the same result still keep different records. That address is what a receipt can point at.",
    formal: "L3:STAR_LEFT:P0:P2",
  },
  {
    number: "05",
    title: "Steps composed into a program",
    text: "The result of one cell can be the input of the next. Because STAR is order-sensitive, the bracketing is part of the program and has to be written down rather than assumed.",
    formal: "(P1★P0)★P1 ≠ P1★(P0★P1)",
  },
  {
    number: "06",
    title: "A record that can be replayed",
    text: "Each bounded run writes what it checked, what it executed, and where it stopped. Anyone with the record can run the same steps again and compare cell by cell.",
    formal: "check_id + scope + status + work ledger",
  },
];

export const cayleyWhyFinite = [
  {
    title: "Complete",
    text: "Every allowed pair of inputs has a row, a column, and one filled cell. There is no case the table forgot to cover.",
  },
  {
    title: "Exact",
    text: "A cell holds one named position, never a probability or a score. Two runs on the same inputs cannot differ.",
  },
  {
    title: "Checkable",
    text: "The whole table can be regenerated from the formula and compared entry by entry, so a disagreement points at a specific cell.",
  },
  {
    title: "Replayable",
    text: "Because the table is fixed and the order of steps is recorded, the same run can be reproduced later on a different machine.",
  },
] as const;

export const plainLanguageTranslationKeys = [
  ...new Set([
    ...readerPaths.flatMap((path) => [path.audience, path.goal, ...path.stops.map((stop) => stop.label)]),
    ...investorBriefing.flatMap((entry) => [entry.question, entry.answer, entry.detail]),
    ...cayleyFoundation.flatMap((entry) => [entry.title, entry.text]),
    ...cayleyWhyFinite.flatMap((entry) => [entry.title, entry.text]),
  ]),
] as const;
