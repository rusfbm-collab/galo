export type EvidenceStatus =
  "PASS" | "BOUNDARY" | "BLOCKED" | "NOT IMPLEMENTED" | "NOT PROVEN" | "NOT STARTED" | "NOT PRESENT" | "NOT CLAIMED";

export const releaseEvidence = {
  release: "R5B6A1_3",
  currentApi: "R5B6A1_3_CURRENT_V4",
  status: "READY_NOT_DUAL_MINOR_SEALED_WITH_DISCLOSED_BOUNDARIES",
  archiveFingerprint: "64506fbf19caac52fb8c44cebcc3fc4f8f1cfae959a5e75db3e63e3073716de9",
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
  layers: [
    {
      name: "Formal mathematics",
      detail:
        "The L1–L7 PLUS/STAR families, 560 oriented typed coordinates, transformations, symmetries, and cross-level homomorphisms.",
    },
    {
      name: "Compatibility and audit layer",
      detail:
        "Stored replays and legacy modules retained for comparison. Their APIs and historical experiments are not automatically current runtime capabilities.",
    },
    {
      name: "Current V4 runtime",
      detail:
        "A binary, one-step L2–L7 execution slice with two closed source patterns and four executable action kinds; L1 is control-only.",
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
      detail: "The selector accepts two fixed source patterns, not arbitrary natural-language observations.",
    },
    {
      label: "External outcome and operational gain",
      status: "NOT PROVEN" as EvidenceStatus,
      detail:
        "Internal work-unit accounting is not a speedup, causal outcome, customer value, or external gain result.",
    },
    {
      label: "Persistent policy",
      status: "NOT STARTED" as EvidenceStatus,
      detail: "Current V4 performs no policy update; historical research artifacts are a separate audit record.",
    },
    {
      label: "Current trained World Atlas",
      status: "NOT PRESENT" as EvidenceStatus,
      detail: "Current V4 performs zero Atlas learning writes and does not contain a trained Atlas.",
    },
    {
      label: "General AI",
      status: "NOT CLAIMED" as EvidenceStatus,
      detail: "Finite formal verification does not establish general intelligence.",
    },
  ],
} as const;
