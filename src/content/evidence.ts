export type EvidenceStatus =
  "PASS" | "BOUNDARY" | "NOT IMPLEMENTED" | "NOT PROVEN" | "NOT STARTED" | "NOT PRESENT" | "NOT CLAIMED";

export const releaseEvidence = {
  status: "READY_NOT_TRAINED_WITH_DISCLOSED_BOUNDARIES",
  archiveFingerprint: "03aebd6bdfe13ded06863d3cc2cca4280c9dd0d67285df312c1856b13594d62f",
  freshReplay: {
    static: "PASS",
    fast: "PASS",
    full: "NOT_COMPLETED",
  },
  metrics: [
    {
      value: "560",
      label: "Formal transition records",
      detail: "Frozen L1–L7 kernel. An execution alphabet, not semantic concepts.",
    },
    {
      value: "1,204",
      label: "Committed candidate records",
      detail: "Across 756 coverage cells in the declared binary, one-step scope.",
    },
    {
      value: "1,277 / 1,277",
      label: "Stored regression checks",
      detail: "Passed in the declared release environment; not an intelligence metric.",
    },
  ],
  current: [
    "Finite committed candidate universe",
    "Universe-membership-bound executable handles",
    "Single-use execution with bounded budget",
    "Atomic candidate and budget rollback",
    "Receipt-derived occurrence work accounting",
    "Deterministic replay within the declared formal scope",
  ],
  boundaries: [
    { label: "Authenticated external-source provenance", status: "NOT IMPLEMENTED" as EvidenceStatus },
    { label: "Observation-conditioned structural reasoning", status: "NOT IMPLEMENTED" as EvidenceStatus },
    { label: "Oracle-free action selection", status: "NOT PROVEN" as EvidenceStatus },
    { label: "External operational gain", status: "NOT PROVEN" as EvidenceStatus },
    { label: "Persistent policy learning", status: "NOT STARTED" as EvidenceStatus },
    { label: "Trained World Atlas", status: "NOT PRESENT" as EvidenceStatus },
    { label: "General AI", status: "NOT CLAIMED" as EvidenceStatus },
  ],
} as const;
