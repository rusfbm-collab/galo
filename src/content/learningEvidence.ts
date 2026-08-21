/**
 * The V65–V67 learning line, with its negatives kept.
 *
 * This is a change from what this site used to say. The frozen R5B6A1_3 kernel
 * release still performs no learning at all — that has not moved. Alongside it
 * there is now a receipt-native Engine and Atlas prototype with scoped learning
 * results on synthetic tasks and public benchmarks. Both statements are true at
 * once, and this file exists so that neither is used to imply the other.
 *
 * Every row carries its own boundary, and the two results that did not work are
 * in the same table as the four that did, in the same style. A benchmark line
 * that only reports its wins is not evidence.
 */

export type LearningStatus =
  "SUPPORTED, SCOPED" | "SUPPORTED VS PREREGISTERED BASELINE" | "NOT SUPPORTED" | "NOT IDENTIFIABLE";

export type LearningResult = {
  task: string;
  headline: string;
  status: LearningStatus;
  establishes: string;
  boundary: string;
};

export const learningResults: readonly LearningResult[] = [
  {
    task: "V65 synthetic Engine + Atlas",
    headline: "60.9% less full cognitive work, at exact terminal parity",
    status: "SUPPORTED, SCOPED",
    establishes:
      "End-to-end learning inside one scope, with a receipt Atlas and a comparator that shares the same engine.",
    boundary: "Synthetic L3–L7 tasks. Nothing industrial, and nothing about an operating plant.",
  },
  {
    task: "UMLS",
    headline: "49.7% less work than the preregistered global-frequency baseline",
    status: "SUPPORTED VS PREREGISTERED BASELINE",
    establishes: "An operational Atlas effect on a public benchmark, measured against a baseline fixed in advance.",
    boundary: "A stronger equal-information comparator was not beaten. This is not universal superiority.",
  },
  {
    task: "WN18RR",
    headline: "7.17% less work, CI95 5.82–8.55%",
    status: "SUPPORTED, SCOPED",
    establishes:
      "A small positive work effect on a public benchmark, with the interval published rather than the point alone.",
    boundary: "A previously exposed corpus. Fresh partner-controlled validity is a different question.",
  },
  {
    task: "JF17K-3",
    headline: "1.34% fewer candidate checks",
    status: "SUPPORTED, SCOPED",
    establishes: "A Q0 ranking signal on n-ary relations.",
    boundary: "Candidate checks are not full cognitive work, and this is not a production improvement.",
  },
  {
    task: "Kinship",
    headline: "0% work advantage",
    status: "NOT SUPPORTED",
    establishes: "Nothing. The negative is retained in the archive rather than dropped.",
    boundary: "There is no reading of this result that is positive, and none is offered.",
  },
  {
    task: "Nations",
    headline: "No identifiable independent effect",
    status: "NOT IDENTIFIABLE",
    establishes: "That the heldout effect could not be computed on this task at all.",
    boundary: "Neither a positive nor a negative claim can be made from it.",
  },
];

/** The eight conditions a work-reduction claim has to satisfy to be made at all. */
export const learningContract: readonly string[] = [
  "The policy updates and the Atlas updates are both recorded.",
  "The route is committed before anything is revealed.",
  "The heldout set is frozen and stays frozen.",
  "The terminal result must be identical, not merely comparable.",
  "Less actual work, measured against the same mechanism rather than a weaker one.",
  "No oracle leak: the evaluator outcome is signed outside the engine.",
  "Candidate membership and terminal semantics stay equal across the arms.",
  "The whole run replays directly from a fresh root.",
];

export type LearningBoundary = {
  label: string;
  status: string;
  detail: string;
};

/** What the results above do not establish — the part that decides how they may be quoted. */
export const learningBoundaries: readonly LearningBoundary[] = [
  {
    label: "Partner-controlled validity",
    status: "NOT PROVEN",
    detail:
      "Every result so far is on synthetic tasks or public benchmarks. No partner has run one of these on their own data with their own evaluator, and that is the next required step.",
  },
  {
    label: "Industrial and production autonomy",
    status: "NOT AUTHORIZED",
    detail:
      "Nothing here authorises a command to a plant, a controller or a robot. The roadmap is advisory first, then simulation, and every rung above that is gated.",
  },
  {
    label: "Functional-safety certification",
    status: "NOT CLAIMED",
    detail: "No certification exists, none is applied for, and none is implied by any number on this site.",
  },
  {
    label: "Customers, letters of intent, revenue",
    status: "NONE",
    detail:
      "There is no customer, no signed pipeline and no revenue. Planning prices are hypotheses for a conversation.",
  },
  {
    label: "Tower-specific advantage",
    status: "NOT PROVEN",
    detail:
      "That the L1–L7 tower beats a matched alternative is a research hypothesis. It is not offered as a reason to invest.",
  },
  {
    label: "General AI",
    status: "NOT PROVEN",
    detail:
      "A general-purpose architecture is a design intention. General intelligence would need broad perception, transfer, planning and grounding well beyond any evidence here.",
  },
];

export const learningEvidenceTranslationKeys = [
  ...learningResults.flatMap((row) => [row.task, row.headline, row.establishes, row.boundary]),
  ...learningContract,
  ...learningBoundaries.flatMap((row) => [row.label, row.detail]),
] as const;
