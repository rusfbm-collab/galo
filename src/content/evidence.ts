export type EvidenceStatus =
  "PASS" | "BOUNDARY" | "BLOCKED" | "NOT IMPLEMENTED" | "NOT PROVEN" | "NOT STARTED" | "NOT PRESENT" | "NOT CLAIMED";

export const workTrackMilestones = [
  "Specified",
  "Implemented",
  "Independently re-checked",
  "Externally validated",
] as const;

export const releaseEvidence = {
  release: "R5B6A1_3",
  currentApi: "R5B6A1_3_CURRENT_V4",
  status: "READY_NOT_DUAL_MINOR_SEALED_WITH_DISCLOSED_BOUNDARIES",
  freshReplay: {
    static: "PASS",
    staticReceipt: "f00581021163a7236194517d0370cff3d836803804959fdf1adfb318cb4666ea",
    fast: "PASS",
    fastReceipt: "5046b87d78373c6f9b3f707923f3b00fc9c2f013ae23c3e4d41313413f47d456",
    full: "NOT COMPLETED",
  },
  metrics: [
    {
      value: "560",
      label: "Oriented typed coordinates",
      detail:
        "140 ordered coordinates × two laws × two operand-role orientations; 556 are active across runtime L2–L7. These are not semantic concepts.",
    },
    {
      value: "1,204",
      label: "Committed candidate descriptors",
      detail:
        "880 are executable in current V4; each of the two fixed source patterns exposes a 440-candidate frontier.",
    },
    {
      value: "1,366 / 1,366",
      label: "Stored regression checks",
      detail: "Passed across 131 modules in the stored FULL receipt; this FULL result was not freshly replayed here.",
    },
  ],
  current: [
    "Bundled finite sample verified against a release-pinned public key",
    "Deterministic selector for exactly two fixed source patterns",
    "Finite-universe membership and single-use executable handles",
    "Process-local sequence, rollback, and revocation checks",
    "Receipt-derived phase and occurrence work accounting",
    "Zero Atlas semantic reads, rank effects, and learning writes",
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
      state: "Running, and deliberately narrow",
      detail:
        "A binary, one-step L2–L7 execution slice with two closed source patterns and four executable action kinds; L1 is control-only.",
      next: "Widening the accepted input contract and adding multi-step trajectories.",
      reached: 3,
    },
    {
      name: "Target world-model loop",
      state: "Running in a sealed prototype, not in the release",
      detail:
        "The explicit World Atlas, adaptive resolution, local revision and the learning loop run in a separate sealed prototype with trained Atlases of its own. None of it is in the shipped runtime, and the wider loop the architecture describes is still specified rather than built.",
      next: "Carrying it into a partner-controlled evaluation, which is the step none of the sealed work substitutes for.",
      reached: 2,
    },
  ],
  selector: [
    { value: "1,204", label: "Committed descriptors", detail: "Finite declared universe" },
    { value: "880", label: "Executable descriptors", detail: "Four allowed action kinds" },
    { value: "440", label: "Pattern frontier", detail: "Even or odd enumeration parity" },
    { value: "SHA-256", label: "Deterministic order", detail: "observation + candidate ID + ordinal" },
  ],
  workLedger: [
    { label: "Shared preparation", value: 1902 },
    { label: "Selector", value: 2852 },
    { label: "Baseline action", value: 24 },
    { label: "Treatment action", value: 24 },
    { label: "Outcome evaluation", value: 0 },
    { label: "Policy update", value: 0 },
  ],
  arithmetic: {
    parentStoredFull: 1277,
    newStoredChecks: 89,
    storedFull: 1366,
    physicalWorkTotal: 4802,
    wholeTowerUniverse: 1204,
    activeTypedCoordinates: 556,
    perLevelCoverageCells: 108,
    coverageCells: 756,
    selectedSourceModules: 324,
    excludedSourceModules: 21,
    allSourceModules: 345,
    generatedRuntimePolicyMarkers: 1,
    wheelInventory: 325,
  },
  boundaries: [
    {
      label: "Persistent trusted manifest head",
      status: "NOT IMPLEMENTED" as EvidenceStatus,
      detail: "Trust state is process-local; no persistent trusted head is implemented.",
    },
    {
      label: "Python process capability isolation",
      status: "NOT PROVEN" as EvidenceStatus,
      detail: "The current verification does not prove operating-system capability isolation for the Python process.",
    },
    {
      label: "CPython 3.13 replay",
      status: "BLOCKED" as EvidenceStatus,
      detail: "Blocked because the required runtime was unavailable; no pass is claimed.",
    },
    {
      label: "Arbitrary free-text semantic noninterference",
      status: "NOT PROVEN" as EvidenceStatus,
      detail: "The selector accepts two fixed source patterns. Arbitrary natural-language observations are refused.",
    },
    {
      label: "Partner-controlled operational validity",
      status: "NOT PROVEN" as EvidenceStatus,
      detail:
        "Internal work-unit accounting is not a speedup, a causal outcome, customer value or an external gain result. No partner has run an evaluation on their own data with their own evaluator.",
    },
    {
      label: "Persistent policy in this release",
      status: "NOT STARTED" as EvidenceStatus,
      detail:
        "The R5B6A1_3 release performs no policy update at all. The sealed V75–V78 Engine and Atlas line is a separate prototype with its own scoped learning evidence, published below with the benchmark it refused to learn.",
    },
    {
      label: "Trained World Atlas in the release",
      status: "NOT PRESENT" as EvidenceStatus,
      detail:
        "The shipped V4 runtime performs zero Atlas learning writes and carries no trained Atlas. The sealed prototype line has its own, and the two are never the same artefact.",
    },
    {
      label: "General AI",
      status: "NOT CLAIMED" as EvidenceStatus,
      detail: "Finite formal verification does not establish general intelligence.",
    },
  ],
} as const;
