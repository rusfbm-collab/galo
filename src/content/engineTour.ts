/**
 * The engine, explained to somebody who is not obliged to believe any of it.
 *
 * This route used to be an application dossier: it opened with an affiliation
 * disclaimer, then twelve assessment lines, then release codes. That is the right
 * material for an assessor who already knows what GALO is and the wrong material
 * for everyone else, and it left the page unable to answer the only question a
 * sceptic actually has — if I don't trust the brand, do I still understand the
 * machine?
 *
 * So the page now teaches the mechanism first and keeps the dossier as an
 * appendix. Rules for every string here: no formula, no release code, no internal
 * vocabulary on the first screen, and nothing that reads as a status label before
 * the thing it labels has been explained. Ordinary words, short sentences, and the
 * limits stated in the same voice as the mechanism rather than in a separate
 * register.
 */

/** The whole page in three sentences, before any diagram. */
export const oneMinute: readonly string[] = [
  "There is a state of the world the system currently treats as true.",
  "There is a set of permitted moves, and a move cannot be invented because something looked similar.",
  "Learning may suggest where to look first. It never gets to sign the verdict.",
];

export type CycleStep = {
  number: string;
  /** Four or five words, for the figure. */
  label: string;
  /** One ordinary sentence, for the card under it. */
  plain: string;
};

/**
 * One turn of the engine, in the words somebody would use out loud. No stage
 * here names a component: a reader who wants the component names has the
 * thinking page, and a reader who does not should still be able to follow.
 */
export const engineCycle: readonly CycleStep[] = [
  {
    number: "01",
    label: "Something comes in, or something changes",
    plain: "A request arrives, or a rule, a source or a threshold moves. Both enter the same way.",
  },
  {
    number: "02",
    label: "What does this touch",
    plain: "The system looks for the earlier conclusions this actually bears on, rather than re-checking everything.",
  },
  {
    number: "03",
    label: "Which explanations are still alive",
    plain:
      "Several readings of the situation may survive at once, and they are kept rather than narrowed by preference.",
  },
  {
    number: "04",
    label: "Which move is permitted",
    plain: "The candidates come from a list written in advance. Nothing outside that list can be taken.",
  },
  {
    number: "05",
    label: "Three conditions, all of them",
    plain:
      "The move is admitted only if the context has earned the right to answer, a learned structure stands behind it, and the typed program runs. Any one missing and the answer is refused.",
  },
  {
    number: "06",
    label: "An answer, a set of options, or not yet",
    plain:
      "If the grounds are thin, the honest output is that this cannot be settled now — and that is written down too.",
  },
  {
    number: "07",
    label: "A record somebody else can repeat",
    plain: "What was checked, what ran, what was refused, and what it cost. Enough for a stranger to walk it again.",
  },
];

export type EngineRole = {
  role: string;
  may: readonly string[];
  mayNot: readonly string[];
  /** The one line that matters if a reader remembers nothing else. */
  point: string;
};

/**
 * The sceptical crux of the whole design, and the reason it is not hidden three
 * screens down. These are two roles inside one path rather than two contours
 * running beside each other: neither can produce an answer on its own, and the
 * boundary between them is the product.
 */
export const engineRoles: readonly EngineRole[] = [
  {
    role: "Learning and search",
    may: [
      "Order the candidates",
      "Reach a lawful answer with fewer checks",
      "Reuse a structure it has proven before",
      "Withhold the right to answer at all",
    ],
    mayNot: ["Declare what is true", "Add a candidate nobody declared", "Change what counts as permitted"],
    point: "It cannot make the answer right — and without it there is no answer to check.",
  },
  {
    role: "Law and checking",
    may: ["Admit a move", "Refuse a move", "Stop and say the grounds are not enough"],
    mayNot: [
      "Fill a gap to produce an answer",
      "Be argued with by the part that learned",
      "Answer from the frozen laws alone when nothing was learned",
      "Change between two runs of the same release",
    ],
    point: "It is the only part allowed to say yes, and it is allowed to say no.",
  },
];

export type NotThis = {
  claim: string;
  answer: string;
};

/** Five things a reader arrives assuming, answered without scoring anybody. */
export const engineIsNot: readonly NotThis[] = [
  {
    claim: "A chatbot",
    answer: "It holds no conversation. It sits next to one perfectly well and does a different job.",
  },
  {
    claim: "One more neural network used as the source of truth",
    answer:
      "Learning exists here and never carries authority. The part that admits a result is not the part that learned.",
  },
  {
    claim: "A very large reference work",
    answer: "Nobody is writing the world down. The scope is small enough to be enumerated, on purpose.",
  },
  {
    claim: "A graph where an edge counts as a fact",
    answer:
      "A stored relation is not a verdict here. What is stored is the state of a decision and how it was reached.",
  },
  {
    claim: "A promise of general intelligence",
    answer: "Not claimed anywhere on this site, and the boundary is published rather than implied.",
  },
];

/** One situation, carried through. Deliberately the least dramatic one available. */
export const miniExample: readonly string[] = [
  "An instruction or a source is changed.",
  "The system does not rewrite everything it once concluded.",
  "It looks for which earlier conclusions the change actually touches.",
  "It shows which of them can still be treated as permitted, and on what grounds.",
  "And it names the ones that can no longer be confirmed, instead of leaving them standing quietly.",
];

export type CheckedItem = {
  title: string;
  detail: string;
  /** True when the line is an absence rather than a result. */
  missing?: boolean;
};

/**
 * Four lines, and the fourth is the one that matters most. No release codes, no
 * counts — the numbers live on the evidence page and this is a summary a reader
 * can hold.
 */
export const alreadyChecked: readonly CheckedItem[] = [
  {
    title: "A reproducible programme",
    detail:
      "One archive, one command, and the same results come back on a fresh unpack. Somebody else can run it without asking us anything.",
  },
  {
    title: "On public tasks, learning reduces the work at the same check",
    detail:
      "Measured against the identical system with its learned volume removed — same engine, same candidates, same budget. That comparator is what makes the number about learning rather than about search size.",
  },
  {
    title: "Refusals and failures are published",
    detail:
      "A benchmark that refused to be learned is published next to the ones that worked, and a withdrawn claim stays in the record rather than disappearing from it.",
  },
  {
    title: "No partner has run any of this on their own data",
    detail:
      "Every number was produced by the project, on its own data, with its own evaluator. That is honest and it is not independence, and it is the single largest gap.",
    missing: true,
  },
];

/** Written to be used against the project, not to reassure. */
export const whereToAttack: readonly string[] = [
  "There is no external industrial pilot, and no customer, letter of intent or revenue.",
  "One founder. The mathematics, the engine and the claim discipline sit with the same person.",
  "A strong mechanism on controlled tasks is not a demonstrated gain on a plant floor, and this page does not treat it as one.",
  "The measured path of the published results does not include the tower, the typed routes or the verifier, so their contribution is not established.",
  "“A new kind of AI” is a positioning claim until somebody outside runs it on their own workflow.",
];

export const engineTourTranslationKeys = [
  ...oneMinute,
  ...engineCycle.flatMap((step) => [step.label, step.plain]),
  ...engineRoles.flatMap((role) => [role.role, role.point, ...role.may, ...role.mayNot]),
  ...engineIsNot.flatMap((entry) => [entry.claim, entry.answer]),
  ...miniExample,
  ...alreadyChecked.flatMap((entry) => [entry.title, entry.detail]),
  ...whereToAttack,
] as const;
