/**
 * The non-technical entry point.
 *
 * Everything here is written for a reader who will never open the mathematics:
 * what the thing is, what it would be for, what exists today, what does not, and
 * how to check the difference without taking anybody's word for it. No number in
 * this file may describe traction, revenue, a customer, or a measured external
 * result, because none of those exists.
 */

export const oneMinute = {
  what: "GALO is a general-purpose architecture for keeping a decision system's state, its permitted actions and the route it took explicit, rather than inside a model nobody can open. The first thing it is sold as is much narrower: decision assurance around the digital twins and operational systems an industrial plant already runs.",
  forWhom:
    "It is aimed at work where the expensive failure is not a wrong answer but a wrong answer nobody can trace: industrial operations, regulated processes, long-running automation, and anything a reviewer has to sign. Industry comes first because the cost of ambiguity is already counted there.",
  whyNow:
    "Software is being handed decisions faster than the reasoning behind those decisions can be governed, and the usual answer — more logging — records what happened without recording what was allowed.",
} as const;

export type FactChip = {
  /** Untranslated machine value shown as-is in every locale. */
  value: string;
  label: string;
  note: string;
};

export const oneMinuteFacts: readonly FactChip[] = [
  {
    value: "3",
    label: "public corpora it has been run on",
    note: "Relation labelling on two of them and word inflection on the third. That is the honest size of it: narrow, public, and nobody's production data.",
  },
  {
    value: "2,275",
    label: "questions asked, and receipts written",
    note: "One machine-readable record per row, answered or refused, which is what makes a full check possible instead of a sample.",
  },
  {
    value: "322",
    label: "questions it declined to answer",
    note: "Fourteen per cent of them, and on one corpus every single row. A system allowed to refuse can flatter itself by answering less, so the refusals are published in the same table as the accuracy rather than under it.",
  },
  {
    value: "0",
    label: "results produced under a partner's control",
    note: "On public corpora the system needs 57-67% less computation than the identical system with its learning switched off, and one benchmark it refused to learn is published with the rest. No partner has run any of it on their own data with their own evaluator, and no operational gain has been measured anywhere. That number is zero and is printed here on purpose.",
  },
];

export type ProblemCard = {
  number: string;
  title: string;
  text: string;
  cost: string;
};

export const businessProblem: readonly ProblemCard[] = [
  {
    number: "01",
    title: "A wrong answer is cheap. An untraceable one is not.",
    text: "When an automated decision is questioned months later, the cost is almost never the decision itself. It is the reconstruction: finding what the system knew, what it was permitted to do, and why it chose what it chose.",
    cost: "Paid in senior time, in delay, and occasionally in a settlement that had to be reached because nobody could show the alternative.",
  },
  {
    number: "02",
    title: "Logs record what happened, not what was allowed.",
    text: "A log line proves an action occurred. It rarely proves that the action was inside a boundary somebody declared beforehand, which is the thing a reviewer actually needs to establish.",
    cost: "Every review starts by rebuilding the boundary from memory, and two honest people can rebuild it differently.",
  },
  {
    number: "03",
    title: "A probability is not something a reviewer can argue with.",
    text: "If the answer to why did it do that is a distribution over possibilities, the conversation has nowhere to go. There is no specific place to point at and disagree.",
    cost: "Disputes become unresolvable rather than expensive, which is worse: they end in policy instead of in a fix.",
  },
  {
    number: "04",
    title: "Correcting one belief should not mean retraining everything.",
    text: "In a fitted model, a single wrong belief has no address. Changing it means changing the whole object and hoping nothing else moved.",
    cost: "Corrections get deferred, and the system carries known errors because the cost of fixing one of them is the cost of fixing all of them.",
  },
];

export type FitScenario = {
  sector: string;
  situation: string;
  whatWouldChange: string;
};

/**
 * Deliberately hypothetical. None of these is a deployment, a pilot, a customer,
 * or a conversation; each one is a description of where a layer of this shape
 * would sit if the open work were finished.
 */
export const whereItFits: readonly FitScenario[] = [
  {
    sector: "Regulated back-office operations",
    situation:
      "An automated step touches a customer's money or eligibility, and a supervisor has to be able to reconstruct it two years later.",
    whatWouldChange:
      "The reconstruction stops being an investigation. The state, the permitted set, and the chosen action are already written down in a form a second party can replay.",
  },
  {
    sector: "Industrial and physical control",
    situation:
      "A controller may take one of a small number of physical actions, and taking a forbidden one is not recoverable by apologising.",
    whatWouldChange:
      "Membership in the permitted set becomes a property of the layer rather than a hope about the model, and an attempt outside it is refused and recorded instead of executed.",
  },
  {
    sector: "Long-running agent automation",
    situation:
      "An agent runs unattended for weeks, and its behaviour drifts because everything it did quietly changed what it does next.",
    whatWouldChange:
      "The state carried between runs would be three named registers that can be printed and compared, so drift becomes something you measure rather than something you notice late.",
  },
  {
    sector: "Model governance and assurance",
    situation:
      "An organisation already runs capable models and needs to show a regulator which decisions were bounded and by what.",
    whatWouldChange:
      "The open-ended system keeps proposing; the declared layer keeps the part that has to be defensible, and the boundary between them is written rather than argued.",
  },
];

export type StageFact = {
  question: string;
  answer: string;
  /** Untranslated one-word marker rendered as a chip. */
  marker: "YES" | "NO" | "PARTIAL" | "NOT DISCLOSED";
};

export const stageFacts: readonly StageFact[] = [
  {
    question: "What stage is this?",
    answer:
      "Pre-seed research. No revenue, no funds raised, no customer, no pilot, and no letter of intent — none of those is claimed anywhere on this site.",
    marker: "NO",
  },
  {
    question: "Is there something running?",
    answer:
      "Yes, and it is narrow on purpose: three fixed public corpora, two task shapes, a closed set of possible answers, and a refusal on every row that did not earn all three rights. It learns from a training split and evaluates a held-out one; it does not take arbitrary text and it has never run on anybody else's data.",
    marker: "YES",
  },
  {
    question: "Is there a product?",
    answer:
      "No. There is a finished formal kernel, a running engine slice built on it, and a written architecture for the parts that do not exist yet.",
    marker: "NO",
  },
  {
    question: "Has anyone outside the project verified it?",
    answer:
      "No. Every published number is recomputed by this site's own build. Independent re-checking is the milestone two of the four work tracks have not reached.",
    marker: "NO",
  },
  {
    question: "Is any of it measured against an alternative?",
    answer:
      "Yes, against itself. Every published figure compares the engine with the identical engine with its learning switched off, on preregistered public corpora, and the run that refused to learn is published with the others. Nothing has been measured against a system in operational use, and no operational gain has been measured anywhere.",
    marker: "PARTIAL",
  },
  {
    question: "Who has done the work so far?",
    answer: "It is founder-led. Team size, employment history, and legal structure are not disclosed on this site.",
    marker: "NOT DISCLOSED",
  },
  {
    question: "Who owns the intellectual property?",
    answer: "Not disclosed on this site. Treat it as an open diligence item rather than as a settled one.",
    marker: "NOT DISCLOSED",
  },
  {
    question: "What is the next block of work?",
    answer:
      "One bounded, read-only industrial decision-assurance evaluation on a partner's own data, alongside widening the accepted input contract, adding multi-step trajectories, and closing the named evidence gates.",
    marker: "PARTIAL",
  },
];

export type RiskEntry = {
  code: string;
  risk: string;
  whyItMatters: string;
  settledBy: string;
};

export const riskRegister: readonly RiskEntry[] = [
  {
    code: "R1",
    risk: "The narrow scope may never widen.",
    whyItMatters:
      "Everything checkable today is checkable because the scope is tiny. If the contract cannot be widened without losing that property, the interesting version never arrives.",
    settledBy:
      "Watch the accepted input contract. If it is still exactly two fixed patterns after the next block of work, the concern is real.",
  },
  {
    code: "R2",
    risk: "Exhaustive checking may not survive scale.",
    whyItMatters:
      "An answer set of a hundred-odd outcomes can be enumerated and digested. A set several orders larger may not be, and the guarantee is only as good as the enumeration.",
    settledBy:
      "Ask what the universe size would be for a realistic contract, and whether the check is still exhaustive at that size or quietly becomes sampling.",
  },
  {
    code: "R3",
    risk: "The value may be real and still unpriceable.",
    whyItMatters:
      "Traceability is bought reluctantly. Organisations pay for it after an incident and not before, which makes the sales motion slow even when the technology works.",
    settledBy:
      "Find one operator who already pays for reconstruction today, and check whether the cost they carry is large enough to move a budget.",
  },
  {
    code: "R4",
    risk: "An ordinary system with good records may capture most of the benefit.",
    whyItMatters:
      "If careful engineering with disciplined logging gets a reviewer eighty per cent of the way, the remaining twenty per cent has to be worth a different architecture.",
    settledBy:
      "Define one bounded problem, then have both approaches answer the same reviewer question and compare what each can actually show.",
  },
  {
    code: "R5",
    risk: "Key-person concentration.",
    whyItMatters:
      "The work to date is founder-led, and the mathematics, the engine, and the claim discipline all sit with the same person.",
    settledBy:
      "Ask what a second person would have to read to become productive, and how long that took the last time somebody tried.",
  },
  {
    code: "R6",
    risk: "Nothing here has been checked by anyone outside the project.",
    whyItMatters:
      "Self-recomputation is honest but it is not independence. Every number on this site is regenerated by code the project wrote.",
    settledBy:
      "Recompute one published count yourself from the stated laws. It is an afternoon of work, and it is the cheapest disproof available.",
  },
];

export type DiligenceStep = {
  number: string;
  /** Untranslated time box, e.g. 30m. */
  timeBox: string;
  step: string;
  outcome: string;
};

export const diligenceSteps: readonly DiligenceStep[] = [
  {
    number: "01",
    timeBox: "30m",
    step: "Read the plain-language briefing and the thinking schemes, and nothing else.",
    outcome: "You will know what the object is and what it is not, without meeting a single formula.",
  },
  {
    number: "02",
    timeBox: "1h",
    step: "Pick one published count and recompute it yourself from the stated laws.",
    outcome:
      "Either the number reproduces or it does not. This is the single cheapest way to find out whether the discipline is real.",
  },
  {
    number: "03",
    timeBox: "30m",
    step: "Open the evidence page and sort every line into PASS, BOUNDARY, and NOT PROVEN.",
    outcome:
      "You will see the exact shape of what is being claimed, and you will notice that the not-proven column is long and published.",
  },
  {
    number: "04",
    timeBox: "1h",
    step: "Ask for the release archive and check its fingerprint against the one published here.",
    outcome: "You will know whether the artefact you were sent is the artefact the site describes.",
  },
  {
    number: "05",
    timeBox: "1d",
    step: "Run the stored replay yourself and compare the receipts field by field.",
    outcome:
      "You will have reproduced a recorded decision without trusting anybody, which is the property the whole design exists to provide.",
  },
  {
    number: "06",
    timeBox: "1w",
    step: "Define one bounded problem you own, and write down the measurement before anyone runs it.",
    outcome:
      "This is the missing evidence. Until such a test is specified and run, no claim about external value can be made in either direction.",
  },
];

export const investorNotClaimed = [
  "No revenue, no funds raised, no customer, no pilot, and no letter of intent.",
  "No benchmark result produced under a partner's control, and no accuracy, speed or cost comparison against a system in operational use.",
  "No measured operational gain inside or outside the project.",
  "No learning in the released kernel; where a prototype does learn, the results are scoped to synthetic tasks and public benchmarks and are published with their negatives.",
  "No independent verification by any party outside the project.",
  "No claim about general intelligence, production autonomy, or functional-safety certification.",
] as const;

export const investorsTranslationKeys = [
  ...new Set([
    oneMinute.what,
    oneMinute.forWhom,
    oneMinute.whyNow,
    ...oneMinuteFacts.flatMap((fact) => [fact.label, fact.note]),
    ...businessProblem.flatMap((card) => [card.title, card.text, card.cost]),
    ...whereItFits.flatMap((entry) => [entry.sector, entry.situation, entry.whatWouldChange]),
    ...stageFacts.flatMap((entry) => [entry.question, entry.answer]),
    ...riskRegister.flatMap((entry) => [entry.risk, entry.whyItMatters, entry.settledBy]),
    ...diligenceSteps.flatMap((entry) => [entry.step, entry.outcome]),
    ...investorNotClaimed,
  ]),
] as const;
