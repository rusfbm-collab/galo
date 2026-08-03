export type PublicClaimStatus = "architecture" | "implemented" | "bounded" | "in-development" | "not-proven";

export type PublicClaim = {
  id: string;
  publicCopy: string;
  status: PublicClaimStatus;
  source: string;
};

// Deliberately contains only publishable fields. Internal red-team variants stay
// in claims.ts and are never imported into the browser bundle.
export const publicClaims: PublicClaim[] = [
  {
    id: "C01_STANDALONE_ARCHITECTURE",
    publicCopy:
      "GALO is a standalone research architecture for explicit world state and bounded, replayable execution.",
    status: "architecture",
    source: "Current theory reference",
  },
  {
    id: "C02_FROZEN_560_KERNEL",
    publicCopy: "The frozen L1–L7 kernel contains 560 formal transition records.",
    status: "implemented",
    source: "Frozen kernel capability registry",
  },
  {
    id: "C03_EXPLICIT_WORLD_ATLAS",
    publicCopy: "The architecture specifies a versioned World Atlas; a trained Atlas is not present.",
    status: "architecture",
    source: "Theory and current release status",
  },
  {
    id: "C04_TYPED_EXECUTION",
    publicCopy: "Current bounded actions use typed execution contracts and receipts.",
    status: "bounded",
    source: "Current capability registry",
  },
  {
    id: "C05_UNIVERSE_BOUND_ONE_SHOT_EXECUTION",
    publicCopy: "Executable handles are bound to membership in a committed finite universe and are single-use.",
    status: "implemented",
    source: "Direct machine selfcheck",
  },
  {
    id: "C06_RECEIPT_DERIVED_WORK",
    publicCopy: "Work accounting is reconstructed from execution receipts within the current occurrence scope.",
    status: "implemented",
    source: "Direct machine selfcheck",
  },
  {
    id: "C07_PERSISTENT_LEARNING_NOT_STARTED",
    publicCopy: "Persistent policy learning has not started.",
    status: "not-proven",
    source: "Current release status",
  },
  {
    id: "C08_TRAINED_ATLAS_NOT_PRESENT",
    publicCopy: "A trained Atlas is not present.",
    status: "not-proven",
    source: "Current release status",
  },
  {
    id: "C09_EXTERNAL_GAIN_NOT_PROVEN",
    publicCopy: "External operational gain is not proven.",
    status: "not-proven",
    source: "Current claim registry",
  },
  {
    id: "C10_GENERAL_AI_NOT_CLAIMED",
    publicCopy: "General AI is not claimed.",
    status: "not-proven",
    source: "Current release status",
  },
];
