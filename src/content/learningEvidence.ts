/**
 * The sealed V75-V78 learning line.
 *
 * This replaces the V65-V67 numbers the site used to publish. Three things
 * changed and all three are stated rather than quietly swapped: the results got
 * substantially stronger, one benchmark that used to read as a flat negative
 * now learns, and one benchmark that used to read as unmeasurable now refuses
 * under seal instead. The superseded numbers stay in the archive; the site says
 * where they went rather than deleting them from the record.
 *
 * The comparator is the thing to read first. Every percentage below is measured
 * against the identical system with its learned volume detached — same engine,
 * same schema, same candidate universe, same budget. That is what makes the
 * saving a statement about learning rather than about search size.
 *
 * What has not moved: the frozen R5B6A1_3 kernel release still performs no
 * policy update at all, no partner has run any of this on their own data, and
 * nothing here authorises a command to a plant.
 */

export type LearningStatus = "SUPPORTED, SEALED" | "SUPPORTED, SCOPED" | "TYPED REFUSAL, SEALED";

export type LearningResult = {
  task: string;
  headline: string;
  status: LearningStatus;
  establishes: string;
  boundary: string;
};

/**
 * Ordered by what a reader should meet first rather than by campaign number:
 * natural language leads, the synthetic anchor that started the line comes last.
 */
export const learningResults: readonly LearningResult[] = [
  {
    task: "SIGMORPHON 2022",
    headline: "66.4% less work on the complete official test — 57,755 words, F1 0.759",
    status: "SUPPORTED, SEALED",
    establishes:
      "The result closest to ordinary language, and the one where the saving cannot be explained away as a shrinking candidate list. The whole official test was run rather than a slice, and 38.2% of words needed more than one check, so the reduction is measuring learning rather than search size.",
    boundary:
      "English word segmentation, run by us on a public corpus. It is not an industrial workflow and not a partner-controlled result.",
  },
  {
    task: "UMLS",
    headline: "58.5% less work with the key, 66.6% with it withheld, CI95",
    status: "SUPPORTED, SEALED",
    establishes:
      "A learning effect on a public benchmark, with the confidence interval computed on families the system never saw in training. The harder task — the one where the lookup key is withheld and the run works from packaged memory — is the one where the saving is larger.",
    boundary:
      "This is also where the previous release's stated limit fell: on the same episodes the campaign beats our own strongest tower comparator by a paired 27.2%, CI95. It is not superiority over every baseline, and that was tested rather than left open — given a full refit, the strongest counting baseline beats the tower tail on every external corpus. Both results are on the record.",
  },
  {
    task: "Kinship",
    headline: "57.4% less work with the key, 64.0% with it withheld, CI95",
    status: "SUPPORTED, SEALED",
    establishes:
      "That a benchmark which produced nothing under the earlier loop is learnable under the sealed one. The structure was there; the previous mechanism could not find it.",
    boundary:
      "The earlier contour measured a 0% advantage on this same benchmark, and that reading stays in the archive rather than being dropped. A result that changes when the mechanism changes is a fact about the mechanism, not a correction to the record.",
  },
  {
    task: "WN18RR",
    headline: "30.7% less work with the key, 43.4% with it withheld, CI95",
    status: "SUPPORTED, SEALED",
    establishes:
      "The same effect on a second knowledge-graph benchmark, with both campaigns reported rather than the better one.",
    boundary:
      "A corpus that has been publicly available for years and may have been seen before. Fresh partner-controlled validity is a different question and is not answered here.",
  },
  {
    task: "Nations",
    headline: "A typed refusal, under seal, on both campaigns",
    status: "TYPED REFUSAL, SEALED",
    establishes:
      "That the system declares a dataset unlearnable instead of producing a number. This is the control that is allowed to fail, and it failed in the way it was designed to: by refusing rather than by fitting.",
    boundary:
      "No positive claim and no negative claim can be built on it. A refusal says the method declined to answer, which is not the same as evidence that there was nothing to find.",
  },
  {
    task: "V65 synthetic Engine + Atlas",
    headline: "60.9% less full cognitive work, at exact terminal parity",
    status: "SUPPORTED, SCOPED",
    establishes:
      "The original end-to-end result, on a frozen synthetic task, with a receipt Atlas and a comparator sharing the same engine. It is the anchor the later work was built from.",
    boundary:
      "Synthetic L3-L7 tasks, superseded in scope by the sealed public-corpus results above. Nothing industrial, and nothing about an operating plant.",
  },
];

/**
 * The single executable carrier. Earlier steps of the line had working archives
 * of their own; those are out of circulation, and naming this one is what stops
 * a number on this site from being traced to an artefact nobody ships any more.
 */
export const sealedArchive = {
  label: "Programme archive of record",
  sha256: "eb81fa17c11ca9cb1658edeaf72b104bdbeef5de3818449a0159dd42308fd279",
  note: "Every learning figure on this page comes from this archive and no other. The frozen kernel release is a separate carrier with its own fingerprint, and the two are never blended.",
} as const;

export type SealedReplay = {
  label: string;
  value: string;
  detail: string;
};

/**
 * What makes the numbers above checkable rather than merely stated. This is the
 * strongest property of the current evidence line, and the one a reviewer can
 * exercise without asking us for anything.
 */
export const sealedReplay: readonly SealedReplay[] = [
  {
    label: "Sealed experiments",
    value: "6",
    detail:
      "Each campaign ships its preregistration, its result and its record of attempts, so the order — commit first, reveal second — is visible rather than asserted.",
  },
  {
    label: "Independent audit checks",
    value: "18 / 18",
    detail:
      "One command runs the whole audit, including six bit-exact replays and a standing gate that the engine still reproduces its own seals.",
  },
  {
    label: "Files under one digest",
    value: "1,307",
    detail:
      "The archive is addressed by a single SHA-256, so the version a reviewer runs is provably the version the numbers came from.",
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
      "Every result above is on a public corpus or a synthetic task, run by us. No partner has run one of these on their own data with their own evaluator, and that is the next required step.",
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
      "Two secondary measurements point at it and neither settles it: the learned operation behaves associatively under seal, and it embeds into the Cayley laws well above a calibrated null in development, where a seal is still the next step. That the tower uniquely beats a matched alternative is not claimed, and is not what either measurement tests.",
  },
  {
    label: "General AI",
    status: "NOT PROVEN",
    detail:
      "A general-purpose architecture is a design intention. General intelligence would need broad perception, transfer, planning and grounding well beyond any evidence here.",
  },
];

export const learningEvidenceTranslationKeys = [
  sealedArchive.label,
  sealedArchive.note,
  ...learningResults.flatMap((row) => [row.task, row.headline, row.establishes, row.boundary]),
  ...sealedReplay.flatMap((row) => [row.label, row.detail]),
  ...learningContract,
  ...learningBoundaries.flatMap((row) => [row.label, row.detail]),
] as const;
