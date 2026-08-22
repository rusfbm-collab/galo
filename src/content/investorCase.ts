/**
 * The investment case, as distinct from the due-diligence memo.
 *
 * The investor page was strong on honesty and weak on the thing an investor
 * actually has to decide: why this could become a company, what a cheque buys,
 * what would unlock the next round, and when the thesis is dead. The honesty is
 * not being traded away — the zeros stay large and the boundaries stay where
 * they are. What is added is the commercial reading of the same facts.
 *
 * No number in this file may describe traction, revenue, a customer, a signed
 * pipeline, or a measured external result, because none of those exists. The
 * twelve-month plan is conditional and says so; the kill criteria are written to
 * be used against the project rather than to reassure.
 */

/** The one status line that replaces four headline metrics in the hero. */
export const statusLine: readonly string[] = [
  "Working prototype",
  "Sealed public-benchmark learning",
  "0 partner-controlled results",
  "0 revenue",
  "0 letters of intent",
];

export type ThesisBlock = {
  /** The question an investor is actually asking. */
  heading: string;
  body: string;
};

/**
 * Four questions, in the order they get asked in a first meeting. This is the
 * block whose absence made the page read as a memo rather than as a case.
 */
export const investmentThesis: readonly ThesisBlock[] = [
  {
    heading: "Why this could become a company",
    body: "Enterprises are accumulating decisions taken by software, and the question they cannot answer is not what the model said. It is what happens after a source, a procedure or a threshold changes: which decisions are affected, which have to be re-checked, and why the ones left standing are still lawful. That question is asked by auditors, regulators and insurers, and today it is answered by people rereading logs.",
  },
  {
    heading: "Why GALO",
    body: "Four properties, and the bet is that they only work together: state that is written down rather than inferred, learning that may rank candidates and never admits the result, revision that touches the affected entry rather than the whole model, and a record somebody else can replay. Each exists separately elsewhere. The claim is about the combination, and it is a claim rather than a result.",
  },
  {
    heading: "Why this is not already everywhere",
    body: "It is not a wrapper over a language model, so it cannot be shipped as a feature by anyone who has one. It needs a different runtime, which is expensive to build and hard to sell before the pain is acute. The market currently buys fluency. Assurance under change becomes payable where the cost of an unexplainable decision is already on somebody's books — which is why the first product is industrial rather than general.",
  },
  {
    heading: "What an investor is buying",
    body: "Not an industrial AI product. A prototype at architecture grade, with sealed learning results on public corpora and its failures published, and the chance to carry it to the first evaluation run under a partner's control and the first paid pilot. If that evaluation does not happen, or happens and fails, the thesis is not confirmed and this page says so below.",
  },
];

export type FieldRow = {
  /** The class, not a company. */
  klass: string;
  /** What buyers of that class are paying for. */
  boughtFor: string;
  /** The difference, never a ranking. */
  difference: string;
  isGalo?: boolean;
};

/** Five lines, not an encyclopaedia. The long table lives on the comparison page. */
export const investorField: readonly FieldRow[] = [
  {
    klass: "Language models and agent stacks",
    boughtFor: "Speed and breadth of answer",
    difference: "Authority does not sit in the weights.",
  },
  {
    klass: "Knowledge graphs and rule engines",
    boughtFor: "Explicit structure a person can quote",
    difference: "Explicit too, but the decision transaction is the product rather than the store.",
  },
  {
    klass: "Symbolic knowledge bases",
    boughtFor: "Broad reusable knowledge and inference",
    difference: "No global ontology is being built here.",
  },
  {
    klass: "Governance and policy wrappers",
    boughtFor: "Control over a model somebody else runs",
    difference: "This is the substrate, not a wrapper around one.",
  },
  {
    klass: "GALO",
    boughtFor: "Assurance under change, with replay",
    difference: "Partner-controlled proof is still ahead, and that is the gap the next year is for.",
    isGalo: true,
  },
];

export type InvestableRisk = {
  code: string;
  risk: string;
  /** Why it kills the company rather than merely hurting it. */
  whyFatal: string;
  /** The observation that would settle it in either direction. */
  whatSettlesIt: string;
  /** Where it stands today, in the site's own status vocabulary. */
  statusToday: string;
};

/**
 * Six risks written as an investor needs them: fatal mechanism first, then the
 * observation that resolves it, then today's status. Two of them would end the
 * project rather than delay it.
 */
export const investableRisks: readonly InvestableRisk[] = [
  {
    code: "R1",
    risk: "Solo founder",
    whyFatal:
      "The mathematics, the engine and the claim discipline sit with one person. Illness, distraction or a competing offer stops all three at once, and nothing on this site would survive that without a second engineer.",
    whatSettlesIt:
      "A technical co-founder or principal engineer becoming productive on the kernel. Ask what a second person would have to read, and how long it took the last time somebody tried.",
    statusToday: "OPEN — first hire named in the plan, not made",
  },
  {
    code: "R2",
    risk: "No partner-controlled evidence",
    whyFatal:
      "Every number published here was produced by the project on its own data with its own evaluator. Self-recomputation is honest and it is not independence, and no amount of it converts into a purchase order.",
    whatSettlesIt:
      "One bounded evaluation on a partner's own data, with the success condition agreed in writing before the run, published as it comes back.",
    statusToday: "OPEN — this is the single largest gap",
  },
  {
    code: "R3",
    risk: "Deep tech without distribution",
    whyFatal:
      "Industrial buyers are reached through integrators, platform vendors and existing relationships. A correct architecture with no route to a plant floor is a paper, not a company.",
    whatSettlesIt:
      "A design partner who brings the workflow and the data, or a platform relationship that carries the first evaluations.",
    statusToday: "OPEN — no partner, no channel, no pipeline",
  },
  {
    code: "R4",
    risk: "Read as a science project",
    whyFatal:
      "The same discipline that makes this page trustworthy makes it easy to file under research. If buyers and investors read it as a mathematical memorandum, it never gets a budget line, however correct it is.",
    whatSettlesIt:
      "A first product a buyer can scope in one conversation, priced as a planning hypothesis, with a decision package at the end of it.",
    statusToday: "PARTIAL — the wedge is written; nobody has bought it",
  },
  {
    code: "R5",
    risk: "The industrial sales cycle is long",
    whyFatal:
      "Even a working evaluation can take three quarters to reach a signature in a regulated plant. A pre-seed runway does not obviously survive that, and the technology being right does not shorten it.",
    whatSettlesIt:
      "Find one operator already paying for reconstruction after incidents, and check whether that cost is large enough to move a budget this year rather than next.",
    statusToday: "OPEN — untested against a real procurement",
  },
  {
    code: "R6",
    risk: "The measured path is not the full path",
    whyFatal:
      "The learning results come from a counting ranker reading a learned volume. The tower, the typed routes and the verifier — the parts this site spends the most words on — are not in the measured path, so the saving is not yet evidence that the architecture is what produced it.",
    whatSettlesIt:
      "An end-to-end run where the full path carries the work and the advantage survives, under a comparator that shares the engine.",
    statusToday: "NOT ATTRIBUTED — published as a boundary on the evidence page",
  },
];

/** The single sentence that decides the thesis. */
export const thesisDeadline =
  "If nine to twelve months pass with no paid evaluation and no design partner, the thesis is not confirmed and should be treated as such rather than extended.";

export type PlanItem = {
  number: string;
  title: string;
  text: string;
};

/**
 * What the first twelve months would be spent on. Conditional on funding, and
 * written as work rather than as milestones that imply a result.
 */
export const fundedPlan: readonly PlanItem[] = [
  {
    number: "01",
    title: "A second engineer",
    text: "A technical co-founder or principal engineer, because every risk above gets worse while the work has one pair of hands.",
  },
  {
    number: "02",
    title: "One partner-owned evaluation",
    text: "A bounded, read-only, advisory run on a partner's own workflow, with the success condition written before the data is seen.",
  },
  {
    number: "03",
    title: "A path to a private pilot",
    text: "Whatever the evaluation shows, turned into a scoped pilot a plant can actually authorise, or an honest stop.",
  },
  {
    number: "04",
    title: "Runtime packaging and a security baseline",
    text: "The engine as something a partner's platform team can run inside their own boundary, rather than as a research tree.",
  },
  {
    number: "05",
    title: "Company setup where the work lands",
    text: "Incorporation and residency in Abu Dhabi, or wherever the first evaluation partner makes more sense.",
  },
];

/** The three observations that would say the plan was wrong. */
export const whatWouldMakeUsWrong: readonly string[] = [
  "Repeated outreach produces no interest in an external evaluation.",
  "The advantage fails once the run is under a partner's custody rather than ours.",
  "Execution help cannot be hired, and the work stays at one pair of hands.",
];

export const investorCaseTranslationKeys = [
  ...statusLine,
  ...investmentThesis.flatMap((block) => [block.heading, block.body]),
  ...investorField.flatMap((row) => [row.klass, row.boughtFor, row.difference]),
  ...investableRisks.flatMap((row) => [row.risk, row.whyFatal, row.whatSettlesIt, row.statusToday]),
  thesisDeadline,
  ...fundedPlan.flatMap((item) => [item.title, item.text]),
  ...whatWouldMakeUsWrong,
] as const;
