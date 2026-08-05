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
    goal: "No terms, no formulas. An everyday situation, what we do about it, and what we cannot promise yet.",
    minutes: "10m",
    stops: [
      { href: "/simple#story", label: "The situation it all starts from" },
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

export const investorBriefing: readonly PlainAnswer[] = [
  {
    question: "What is actually being built?",
    answer:
      "A way for a decision-making system to hold its state in a small, named, completely written-out table instead of inside an opaque model.",
    detail:
      "Because the table is finite and written down in advance, every step the system takes has an address, a result, and a record. There is no hidden remainder that only the model knows about.",
  },
  {
    question: "Why does a table matter?",
    answer: "A finite table can be checked completely. A model cannot.",
    detail:
      "Checking a table is not sampling or testing: every entry is inspected, and the check either passes on all of them or fails on a named one. That is what makes a claim about this layer arguable by someone who does not trust us.",
  },
  {
    question: "Where is the commercial value?",
    answer:
      "In long-running and regulated work, the expensive failure is not a wrong answer — it is a wrong answer nobody can trace.",
    detail:
      "GALO is built so the trace is the product: what state the system was in, which rule fired, what it was allowed to do, and what it recorded. That is the artefact a reviewer, an auditor, or a counterparty can actually examine.",
  },
  {
    question: "What works today?",
    answer:
      "A running engine over a fully enumerated finite universe, producing a machine-readable record for every run.",
    detail:
      "It is narrow on purpose: two fixed input patterns, one step per run, no learning. Everything inside that boundary is checked on every build; nothing outside it is claimed.",
  },
  {
    question: "What does not work yet?",
    answer: "Learning, a trained world model, and any measured result outside our own accounting.",
    detail:
      "These are stated as open work with named preconditions, not implied as done. The evidence page lists each one and the milestone it has actually reached.",
  },
  {
    question: "What would change your mind?",
    answer:
      "A bounded, partner-owned problem where explicit state and exact replay can be measured against an ordinary baseline.",
    detail:
      "That evaluation has not been run. Until it is, no claim about external gain appears anywhere on this site, and the numbers published here describe internal structure only.",
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
