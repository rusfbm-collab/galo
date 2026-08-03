export type ClaimStatus = "architecture" | "implemented" | "bounded" | "in-development" | "not-proven";

export type Claim = {
  id: string;
  publicCopy: string;
  status: ClaimStatus;
  source: string;
  allowedPlacements: string[];
  forbiddenVariants: string[];
};

export const claims: Claim[] = [
  {
    id: "C01_STANDALONE_ARCHITECTURE",
    publicCopy:
      "GALO is a standalone research architecture for explicit world state and bounded, replayable execution.",
    status: "architecture",
    source: "Current theory reference",
    allowedPlacements: ["hero", "architecture", "footer"],
    forbiddenVariants: ["fully autonomous world-model system"],
  },
  {
    id: "C02_FROZEN_560_KERNEL",
    publicCopy: "The frozen L1–L7 kernel contains 560 formal transition records.",
    status: "implemented",
    source: "Frozen kernel capability registry",
    allowedPlacements: ["evidence", "home"],
    forbiddenVariants: ["560 meanings", "560 forms of intelligence"],
  },
  {
    id: "C03_EXPLICIT_WORLD_ATLAS",
    publicCopy: "The architecture specifies a versioned World Atlas; a trained Atlas is not present.",
    status: "architecture",
    source: "Theory and current release status",
    allowedPlacements: ["architecture", "roadmap", "evidence"],
    forbiddenVariants: ["Atlas already learns", "trained World Atlas"],
  },
  {
    id: "C04_TYPED_EXECUTION",
    publicCopy: "Current bounded actions use typed execution contracts and receipts.",
    status: "bounded",
    source: "Current capability registry",
    allowedPlacements: ["architecture", "receipt", "evidence"],
    forbiddenVariants: ["arbitrary observations become verified programs"],
  },
  {
    id: "C05_UNIVERSE_BOUND_ONE_SHOT_EXECUTION",
    publicCopy: "Executable handles are bound to membership in a committed finite universe and are single-use.",
    status: "implemented",
    source: "Direct machine selfcheck",
    allowedPlacements: ["receipt", "evidence", "home"],
    forbiddenVariants: ["valid actions in the real world", "multi-step autonomy"],
  },
  {
    id: "C06_RECEIPT_DERIVED_WORK",
    publicCopy: "Work accounting is reconstructed from execution receipts within the current occurrence scope.",
    status: "implemented",
    source: "Direct machine selfcheck",
    allowedPlacements: ["receipt", "evidence"],
    forbiddenVariants: ["proves real-world causal efficiency"],
  },
  {
    id: "C07_PERSISTENT_LEARNING_NOT_STARTED",
    publicCopy: "Persistent policy learning has not started.",
    status: "not-proven",
    source: "Current release status",
    allowedPlacements: ["hero", "boundaries", "evidence", "footer"],
    forbiddenVariants: ["learns continuously", "persistent learning works"],
  },
  {
    id: "C08_TRAINED_ATLAS_NOT_PRESENT",
    publicCopy: "A trained Atlas is not present.",
    status: "not-proven",
    source: "Current release status",
    allowedPlacements: ["hero", "architecture", "boundaries", "evidence"],
    forbiddenVariants: ["trained Atlas exists"],
  },
  {
    id: "C09_EXTERNAL_GAIN_NOT_PROVEN",
    publicCopy: "External operational gain is not proven.",
    status: "not-proven",
    source: "Current claim registry",
    allowedPlacements: ["boundaries", "evidence", "footer"],
    forbiddenVariants: ["external advantage proven", "customer-proven"],
  },
  {
    id: "C10_GENERAL_AI_NOT_CLAIMED",
    publicCopy: "General AI is not claimed.",
    status: "not-proven",
    source: "Current release status",
    allowedPlacements: ["hero", "boundaries", "evidence", "footer"],
    forbiddenVariants: ["AGI achieved", "human-level", "LLM killer"],
  },
];
