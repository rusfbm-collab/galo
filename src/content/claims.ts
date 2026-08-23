export type ClaimStatus =
  | "architecture"
  | "implemented"
  | "bounded"
  | "in-development"
  | "not-proven"
  | "not-started"
  | "not-present"
  | "not-claimed";

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
    id: "C01B_WEIGHT_FREE_LEARNED_STATE",
    publicCopy:
      "The engine holds no trainable parameter tensor and performs no gradient or backpropagation step. Its learned state is explicit: counters, discrete orders, relation frames, written-out routes, proven structures and receipts.",
    status: "architecture",
    source: "Static scan of the active import closure, run by the project",
    allowedPlacements: ["hero", "architecture", "evidence", "home"],
    forbiddenVariants: [
      // The scan is static and ours; neither fact may be dropped in a shorter retelling.
      "independently certified weight-free",
      "audited weight-free",
      "no neural component anywhere in the product",
    ],
  },
  {
    id: "C02_FROZEN_560_KERNEL",
    publicCopy: "The formal L1–L7 kernel contains 560 oriented typed transition coordinates.",
    status: "implemented",
    source: "Frozen kernel capability registry",
    allowedPlacements: ["evidence", "home"],
    forbiddenVariants: ["560 raw Cayley cells", "560 meanings", "560 forms of intelligence"],
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
    publicCopy: "Persistent policy learning in the frozen V4 release runtime has not started.",
    status: "not-started",
    source: "Current release status",
    allowedPlacements: ["hero", "boundaries", "evidence", "footer"],
    forbiddenVariants: ["learns continuously", "persistent learning works"],
  },
  {
    id: "C08_TRAINED_ATLAS_NOT_PRESENT",
    publicCopy: "A current trained Atlas is not present.",
    status: "not-present",
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
    status: "not-claimed",
    source: "Current release status",
    allowedPlacements: ["hero", "boundaries", "evidence", "footer"],
    forbiddenVariants: ["AGI achieved", "human-level", "LLM killer"],
  },
  {
    id: "C11_DETERMINISTIC_TWO_PATTERN_SELECTOR",
    publicCopy: "Current V4 uses a deterministic selector for exactly two fixed source patterns.",
    status: "bounded",
    source: "Current V4 direct selfcheck",
    allowedPlacements: ["evidence", "receipt"],
    forbiddenVariants: ["learned selector", "semantic reasoner", "arbitrary observations"],
  },
  {
    id: "C12_RELEASE_PINNED_SAMPLE_INTEGRITY",
    publicCopy: "The bundled finite sample verifies against a release-pinned public key.",
    status: "bounded",
    source: "Current V4 release contract",
    allowedPlacements: ["evidence"],
    forbiddenVariants: ["independent external source proven", "external truth authenticated"],
  },
  {
    id: "C13_STORED_FULL_NOT_FRESH",
    publicCopy: "The 1,366/1,366 FULL result is stored release evidence; fresh FULL was not run in this review.",
    status: "bounded",
    source: "Stored FULL terminal receipt and fresh replay log",
    allowedPlacements: ["evidence"],
    forbiddenVariants: ["fresh FULL 1,366", "fresh FULL passed"],
  },
  {
    id: "C14_GENERAL_PURPOSE_ARCHITECTURE",
    publicCopy:
      "GALO is designed as a domain-general world-model, reasoning, learning and replay architecture. General-purpose architecture, not general intelligence.",
    status: "architecture",
    source: "V67 claim matrix",
    allowedPlacements: ["hero", "evidence", "industry"],
    forbiddenVariants: ["General AI achieved"],
  },
  {
    id: "C15_INDUSTRIAL_WEDGE",
    publicCopy:
      "The first commercial product is a bounded industrial decision-assurance evaluation. There is no customer, no signed pipeline and no revenue.",
    status: "in-development",
    source: "V67 business model memorandum",
    allowedPlacements: ["industry", "investors", "hub71"],
    forbiddenVariants: ["validated ROI", "existing industrial customer"],
  },
  {
    id: "C16_SCOPED_SYNTHETIC_LEARNING",
    publicCopy:
      "V65 synthetic Engine and Atlas learning reduced full cognitive work by 60.9% at exact terminal parity, inside a frozen synthetic scope.",
    status: "bounded",
    source: "V65 preregistered synthetic run",
    allowedPlacements: ["evidence"],
    forbiddenVariants: ["industrial validation", "production improvement"],
  },
  {
    id: "C17_PUBLIC_BENCHMARK_RESULTS",
    publicCopy:
      "Against the identical system with its learning switched off: SIGMORPHON 2022 66.4% less work on the complete official test of 57,755 words at F1 0.759; UMLS 58.5% keyed and 66.6% keyless, CI95; Kinship 57.4% and 64.0%; WN18RR 30.7% and 43.4%; Nations a typed refusal under seal.",
    status: "bounded",
    source: "V75-V78 sealed public-corpus archive",
    allowedPlacements: ["evidence"],
    forbiddenVariants: ["universal strongest-baseline superiority"],
  },
  {
    id: "C18_PARTNER_VALIDITY_NOT_PROVEN",
    publicCopy: "Partner-controlled industrial validity is not proven.",
    status: "not-proven",
    source: "V67 claim matrix",
    allowedPlacements: ["hero", "evidence", "industry"],
    forbiddenVariants: ["General AI achieved"],
  },
  {
    id: "C19_PRODUCTION_AUTONOMY_NOT_AUTHORIZED",
    publicCopy: "Production autonomy is not authorized and functional-safety certification is not claimed.",
    status: "not-claimed",
    source: "V67 industrial-autonomy boundary",
    allowedPlacements: ["evidence", "industry"],
    forbiddenVariants: ["certified control system"],
  },
  {
    id: "C20_ABOVE_EXISTING_CONTROL_SYSTEMS",
    publicCopy:
      "GALO is designed to sit above existing digital twins, SCADA systems, PLCs, robot controllers and safety interlocks, and replaces none of them.",
    status: "architecture",
    source: "V67 technical evidence memorandum",
    allowedPlacements: ["industry", "architecture"],
    forbiddenVariants: ["replaces the digital twin", "direct robot control"],
  },
];
