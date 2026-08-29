export type EvidenceStatus =
  "PASS" | "BOUNDARY" | "BLOCKED" | "NOT IMPLEMENTED" | "NOT PROVEN" | "NOT STARTED" | "NOT PRESENT" | "NOT CLAIMED";

export const workTrackMilestones = [
  "Specified",
  "Implemented",
  "Independently re-checked",
  "Externally validated",
] as const;

export const releaseEvidence = {
  /**
   * What the evidence on this site is evidence *of*. This used to be an internal
   * release code, which told a reader nothing and named a build rather than a
   * result. The public runs are the record now, so the record says so.
   */
  recordOfEvidence: "2,275 receipts across three public corpora",
  freshReplay: {
    static: "PASS",
    staticReceipt: "f00581021163a7236194517d0370cff3d836803804959fdf1adfb318cb4666ea",
    fast: "PASS",
    fastReceipt: "5046b87d78373c6f9b3f707923f3b00fc9c2f013ae23c3e4d41313413f47d456",
    full: "NOT COMPLETED",
  },
  /**
   * The three numbers that say how the architecture stands on the tables.
   *
   * This used to be a mixed set: an address count, a receipt count, and a
   * rebuild count. The last two are the public runs' own figures and are
   * published where those runs are described, so restating them here said
   * nothing twice. What belongs in this slot is the relation the rest of the
   * site rests on — a decision is a coordinate in a finite table written down
   * before anything ran, a prediction is a route through those coordinates, and
   * nothing fitted stands anywhere between the two.
   */
  metrics: [
    {
      value: "560",
      label: "Addresses the tables define",
      detail:
        "140 ordered pairs of poles × two laws × two operand orientations. Each one is a coordinate in a Cayley table, re-derived from the laws on every build rather than stored, so the address space cannot drift away from the mathematics it is supposed to be.",
    },
    {
      value: "84",
      label: "Typed steps one prediction runs",
      detail:
        "Three reading channels × seven levels × four action families. A prediction does not visit the catalogue; it walks one route through it, and every step of that route has to execute against the frozen tables before an answer may be published.",
    },
    {
      value: "0",
      label: "Fitted parameters in between",
      detail:
        "Nothing stands between the question and the table lookup. There is no weight to tune, so what an answer depends on is the tables, the learned structure that proposed it, and the route — and each of those three can be printed and disagreed with.",
    },
  ],
  current: [
    "Corpus files byte-identical to named upstream commits, checked by hash",
    "A set of possible answers closed from the training split before the test split is read",
    "One machine-readable receipt for every test row, answered or refused",
    "A learned state that is byte-identical before and after evaluation",
    "A cold rebuild from a fresh unpack, compared ledger by ledger",
    "A standard Python interpreter and its own standard library, and nothing else",
  ],
  tracks: [
    {
      name: "Mathematical foundation",
      state: "Finished and re-derived on every build",
      detail:
        "The L1–L7 PLUS/STAR families, 560 oriented typed coordinates, transformations, symmetries, and cross-level homomorphisms. Every count published here is recomputed from the laws rather than copied from a document.",
      next: "Extending the formal programming model beyond single-step composition.",
      reached: 3,
    },
    {
      name: "Compatibility and audit layer",
      state: "Kept for comparison, not shipped as capability",
      detail:
        "Stored replays and legacy modules retained for comparison. Their APIs and historical experiments are not automatically current runtime capabilities.",
      next: "Building explicit provenance bridges so older results can be compared without being merged.",
      reached: 2,
    },
    {
      name: "Engine running today",
      state: "Running on public corpora, and deliberately narrow",
      detail:
        "It learns a state from a training split, evaluates a held-out split read-only, and writes one receipt per row. The tasks are relation labelling and word inflection on three fixed public corpora — narrow on purpose, and nothing like an open-ended input contract.",
      next: "An end-to-end run where the full architecture, rather than a counting ranker, is in the measured path.",
      reached: 3,
    },
    {
      name: "Target world-model loop",
      state: "Specified, and not in the measured path",
      detail:
        "The explicit World Atlas, adaptive resolution and local revision are what the architecture is built around. The runs above measure a counting ranker under the admission law, not that loop, and the gap is published rather than glossed.",
      next: "Carrying it into a partner-controlled evaluation, which is the step none of the published work substitutes for.",
      reached: 2,
    },
  ],
  selector: [
    { value: "2,275", label: "Test rows evaluated", detail: "Across three public corpora" },
    { value: "1,953", label: "Rows answered", detail: "All three rights were bought" },
    { value: "322", label: "Rows refused", detail: "A boundary with a named cause" },
    { value: "SHA-256", label: "Every input pinned", detail: "Byte-identical to a named upstream commit" },
  ],
  workLedger: [
    { label: "Shared preparation", value: 1902 },
    { label: "Selector", value: 2852 },
    { label: "Baseline action", value: 24 },
    { label: "Treatment action", value: 24 },
    { label: "Outcome evaluation", value: 0 },
    { label: "Policy update", value: 0 },
  ],
  boundaries: [
    {
      label: "Arbitrary free-text semantic noninterference",
      status: "NOT PROVEN" as EvidenceStatus,
      detail:
        "The evaluated tasks are relation labelling and word inflection over declared schemas. Arbitrary natural-language input is outside the contract, not a solved case.",
    },
    {
      label: "Partner-controlled operational validity",
      status: "NOT PROVEN" as EvidenceStatus,
      detail:
        "Accuracy on a public corpus is not a speedup, a causal outcome, customer value, or an external gain result. No partner has run an evaluation on their own data with their own evaluator.",
    },
    {
      label: "The full architecture in the measured path",
      status: "NOT PROVEN" as EvidenceStatus,
      detail:
        "What the published runs measure is a counting ranker under the admission law. The wider loop the architecture is built around — adaptive resolution, local revision across a persistent Atlas — is not in that path, so its contribution is unestablished rather than demonstrated.",
    },
    {
      label: "Dataset redistribution chain",
      status: "BOUNDARY" as EvidenceStatus,
      detail:
        "Every corpus file is byte-identical to a named upstream commit, and that much is checked. The complete rights chain from each original source is only partly evidenced, and is published as partial rather than assumed.",
    },
    {
      label: "General AI",
      status: "NOT CLAIMED" as EvidenceStatus,
      detail: "Finite formal verification and three benchmark runs do not establish general intelligence.",
    },
  ],
} as const;
