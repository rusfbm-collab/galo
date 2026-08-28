/**
 * The assessment dossier.
 *
 * This file is written for one reader: somebody who has to decide whether the
 * project is worth a meeting, and who has read enough decks to discount every
 * adjective in them.
 *
 * Three rules govern every string here.
 *
 * 1. No sentence describes any named programme, its criteria, or its
 *    incentives. Nothing in this project can verify those, and stating them
 *    second-hand would be exactly the unseriousness this page exists to avoid.
 * 2. No affiliation, selection, endorsement, or introduction is implied.
 *    The statement below is enforced by the claim checker.
 * 3. Every commitment carries the observation that would show it failed. A
 *    milestone without a failure condition is a wish.
 */

/** What an assessing party can conclude about a line, stated as a status. */
export type AssessmentStatus = "ESTABLISHED" | "PARTIAL" | "NOT ESTABLISHED" | "NONE" | "NOT DISCLOSED";

export type AssessmentRow = {
  dimension: string;
  answerToday: string;
  status: AssessmentStatus;
  /** Where on this site the answer can be checked, or null when it cannot. */
  whereToCheck: string | null;
};

/**
 * Eleven lines an assessor works through. Six of them are negative, and they
 * are not placed last.
 */
export const assessmentTable: readonly AssessmentRow[] = [
  {
    dimension: "A running artefact exists",
    answerToday:
      "A release exists and reproduces. Fresh STATIC and FAST replays pass on a standard CPython 3.12.13 interpreter, and 1,366 of 1,366 stored FULL checks are recorded across 131 modules.",
    status: "ESTABLISHED",
    whereToCheck: "/evidence",
  },
  {
    dimension: "The mathematics is stated and checkable",
    answerToday:
      "Six numbered definitions and eleven numbered propositions with complete proofs. The test suite re-derives every published count on each build, so a wrong number fails the build rather than reaching the page.",
    status: "ESTABLISHED",
    whereToCheck: "/math",
  },
  {
    dimension: "Delivery in Arabic",
    answerToday:
      "Built, not scheduled. The site runs in English, Russian, Chinese and Arabic with right-to-left layout, and a test fails the build if a rendered string is missing its translation. It is a website. No product has been deployed, and we claim nothing beyond that.",
    status: "ESTABLISHED",
    whereToCheck: "/audit#what-you-can-check",
  },
  {
    dimension: "Independent verification",
    answerToday:
      "None. Every check published on this site was run by the project on its own work. This is the single largest gap in the dossier, and the second milestone below exists only to close it.",
    status: "NOT ESTABLISHED",
    whereToCheck: "/audit#limits",
  },
  {
    dimension: "External operational gain",
    answerToday:
      "Not measured. No benchmark, customer outcome, or operational comparison exists, in any deployment, run by anyone. No figure is available to quote because none was produced.",
    status: "NOT ESTABLISHED",
    whereToCheck: "/investors#one-minute",
  },
  {
    dimension: "Customer, pilot, or letter of intent",
    answerToday: "None of the three. Nothing signed, nothing verbal, nothing in negotiation.",
    status: "NONE",
    whereToCheck: "/investors#state-of-play",
  },
  {
    dimension: "Revenue",
    answerToday: "None. The project has never invoiced anyone.",
    status: "NONE",
    whereToCheck: "/investors#state-of-play",
  },
  {
    dimension: "Capital raised",
    answerToday:
      "None. No angel round, no grant, no accelerator cheque, no convertible. The work to date was self-funded.",
    status: "NONE",
    whereToCheck: "/investors#state-of-play",
  },
  {
    dimension: "Operating company",
    answerToday:
      "Not incorporated. Incorporation is the first milestone below rather than a completed step, and until it happens there is no entity to contract with.",
    status: "NOT ESTABLISHED",
    whereToCheck: null,
  },
  {
    dimension: "Team",
    answerToday:
      "Founder only. Two first hires are named in the plan below and neither has been made, so every engineering statement on this site is the work of one person.",
    status: "PARTIAL",
    whereToCheck: "/#founder",
  },
  {
    dimension: "Ownership of the intellectual property",
    answerToday:
      "Not published on this site. Assignment records and the ownership position are provided directly to an assessing party on request.",
    status: "NOT DISCLOSED",
    whereToCheck: null,
  },
] as const;

export type RegionFit = {
  claim: string;
  mechanism: string;
  /** What the claim above does not reach. Always present. */
  limit: string;
};

/** Why the work is shaped like the region's problems, with the limit attached. */
export const regionFit: readonly RegionFit[] = [
  {
    claim: "A decision somebody can be made to answer for",
    mechanism:
      "Because the set of things the engine could have done is declared before it runs, a record can name the exact coordinate that was taken and the exact ones that were available. That is the form an answer has to have when a supervisor, a court, or a counterparty asks why six months later.",
    limit:
      "No regulator, supervisory authority, or standards body has reviewed any of this, and no regulated deployment exists. The shape of the answer is established; its acceptance by anyone is not.",
  },
  {
    claim: "Arabic is already shipped, not scheduled",
    mechanism:
      "The whole site is delivered in Arabic with right-to-left layout, with mathematical notation isolated so it stays readable, and the build fails if a single rendered string lacks its translation. An assessor can check this in one click by switching the language.",
    limit:
      "A localized website is not a localized product. It shows that the discipline exists and is enforced, not that any Arabic-language deployment has been made.",
  },
  {
    claim: "The shipped release is untrained, so deploying it moves no corpus",
    mechanism:
      "The current release performs no learning: Atlas semantic reads, rank effects, and learning writes are all zero, and the artefact is a declared table rather than a fitted model, so there is no training corpus behind it to move, host, or lose. The sealed prototype line does hold trained Atlases — a separate artefact, and not the one that would be deployed.",
    limit:
      "This is a property of the current release described by its own selfchecks, not a data-residency certification and not a security review. Neither has been carried out by anyone.",
  },
  {
    claim: "Replay runs on an ordinary interpreter",
    mechanism:
      "The published replays ran on a standard CPython 3.12.13 interpreter, with no specialised hardware anywhere in the loop, because a replay enumerates a finite set instead of making an inference pass.",
    limit:
      "No timing, cost, throughput, or efficiency figure has been measured, and none is claimed. That a thing runs is not a statement about what it costs to run.",
  },
] as const;

export type Milestone = {
  window: string;
  deliverable: string;
  /** The observation that would show this milestone was missed. */
  wouldFailIf: string;
};

/**
 * Twelve months, stated so that an assessor can come back and mark each line.
 * The failure condition is the point: it is what turns a plan into a testable
 * commitment.
 */
export const twelveMonths: readonly Milestone[] = [
  {
    window: "Months 0–3",
    deliverable: "Incorporate the operating company in ADGM and complete twenty-five industrial discovery interviews.",
    wouldFailIf:
      "No incorporated entity exists at the end of the quarter, or fewer than twenty-five industrial interviews were held.",
  },
  {
    window: "Months 0–6",
    deliverable:
      "Have the mathematics re-derived and attacked by somebody outside the project, and publish the result unedited.",
    wouldFailIf:
      "The re-derivation is carried out by the project, or is carried out externally and then not published because it went badly.",
  },
  {
    window: "Months 3–9",
    deliverable: "Hire a systems engineer and a research and evaluation engineer, both full-time.",
    wouldFailIf: "Fewer than two full-time technical people are employed at month nine.",
  },
  {
    window: "Months 6–12",
    deliverable:
      "Run one bounded industrial decision-assurance evaluation on a partner's own data, read-only and advisory, with the success condition agreed in writing before the run.",
    wouldFailIf:
      "The success condition is written after the results are seen, the data used is ours rather than a partner's, or the run touches anything beyond read access.",
  },
  {
    window: "Months 9–12",
    deliverable: "Publish the first measurement of external operational effect, whatever it turns out to be.",
    wouldFailIf: "A measurement is produced and only a favourable one reaches the public record.",
  },
] as const;

/** What an ecosystem is being asked for, in the plainest terms available. */
export const askedFor: readonly string[] = [
  "Two design partners in industrial digital twins, plant operations or autonomous systems, able to define a bounded evaluation on their own data with a success condition they write themselves.",
  "Compute and simulation capacity for a private evaluation, independent replay and physical-AI validation.",
  "Company building: an ADGM entity, the founding technical hires, contracts, and the path to seed readiness.",
  "Technical reviewers with an interest in attacking the mathematics and the evaluation design rather than confirming them.",
  "The time to be measured against the milestones above, and to be dropped if they are missed.",
] as const;

/** What is deliberately not being asked for, so it cannot be read into the rest. */
export const notAskedFor: readonly string[] = [
  "A public endorsement, a logo, or a quotation to reuse in future material.",
  "An introduction that would be presented anywhere as validation of the technical claims.",
  "A customer commitment made on our behalf, or pressure applied to anyone to run a pilot.",
  "Anybody's signature on a claim that this site has not itself established.",
  "An exception to the admission gate for a partner who does not meet it, however willing they are to sign.",
] as const;

export type HardQuestion = {
  question: string;
  answerToday: string;
};

/** The six questions a serious assessor asks, with the answers as they stand. */
export const hardQuestions: readonly HardQuestion[] = [
  {
    question: "What has actually been proved?",
    answerToday:
      "Properties of a finite algebraic structure, each with a complete proof re-derived by the test suite: the two laws, the one-sided roles of the distinguished element, the count of 560 oriented typed coordinates, which levels map into which, and how many lawful relabellings each level has. Nothing about the world, nothing about usefulness, and nothing about anybody's operations.",
  },
  {
    question: "Does any of this help anyone?",
    answerToday:
      "Unknown, and stated as unknown everywhere it could be misread. Nothing has been measured against any alternative or against doing nothing at all. Anyone claiming otherwise on our behalf would be going beyond what this project can support.",
  },
  {
    question: "Why would a finite algebra matter when language models exist?",
    answerToday:
      "Because they answer different questions. A language model proposes; a declared finite layer decides what it is allowed to admit and writes down why. No head-to-head evaluation of the two has been run, and this project does not claim one would favour it.",
  },
  {
    question: "Who has checked this?",
    answerToday:
      "Nobody outside the project. Every replay, every proof re-derivation, and every published count was produced by the same party that benefits from them being right. That is the honest description of the evidence base today.",
  },
  {
    question: "What would make the founder stop?",
    answerToday:
      "A bounded evaluation on a partner's data, with the success condition agreed in writing beforehand, that comes back negative — published as it came back. That is what the fourth and fifth milestones are for.",
  },
  {
    question: "What is the fastest way to disprove the technical claim?",
    answerToday:
      "Take one published count and recompute it, or take one proposition and look for a counterexample. If 560 is wrong, or a proposition fails at any level, the foundation is wrong and nothing built on it survives. The whole index is small enough to check by hand.",
  },
] as const;

export type WithheldFact = {
  fact: string;
  status: "NOT DISCLOSED" | "NOT APPLICABLE";
  availability: string;
};

/** Facts an assessor will want that are deliberately not on a public website. */
export const notPublishedHere: readonly WithheldFact[] = [
  {
    fact: "Founder identity documents, education, and employment history",
    status: "NOT DISCLOSED",
    availability: "Provided directly to an assessing party on request.",
  },
  {
    fact: "Intellectual-property assignment and ownership position",
    status: "NOT DISCLOSED",
    availability: "Provided directly to an assessing party on request, under a mutual non-disclosure agreement.",
  },
  {
    fact: "Capitalisation table",
    status: "NOT APPLICABLE",
    availability: "No capital has been raised and there are no external shareholders, so there is nothing to show.",
  },
  {
    fact: "Financial statements",
    status: "NOT APPLICABLE",
    availability: "No operating company has been incorporated and no revenue has been recognised.",
  },
] as const;

/**
 * Enforced by `scripts/check-claims.mjs` in all four languages. It is a required
 * boundary, not a decorative one: no build can ship without it.
 */
export const nonAffiliation =
  "This dossier was prepared by the project itself, for assessment by somebody outside it. It reports no decision, no relationship, and no outcome, and nothing on it should be read as one." as const;

export const programmeTranslationKeys = [
  ...assessmentTable.flatMap((row) => [row.dimension, row.answerToday]),
  ...regionFit.flatMap((row) => [row.claim, row.mechanism, row.limit]),
  ...twelveMonths.flatMap((row) => [row.window, row.deliverable, row.wouldFailIf]),
  ...askedFor,
  ...notAskedFor,
  ...hardQuestions.flatMap((row) => [row.question, row.answerToday]),
  ...notPublishedHere.flatMap((row) => [row.fact, row.availability]),
  nonAffiliation,
] as const;
