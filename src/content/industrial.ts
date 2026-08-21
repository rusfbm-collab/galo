/**
 * The industrial wedge: what GALO is sold as first, and where that stops.
 *
 * Two levels are kept apart deliberately, because collapsing them is the
 * fastest way to say something false. The platform thesis is a general-purpose
 * verifiable world-model and autonomy architecture. The commercial wedge is
 * decision assurance around digital twins and operational systems that already
 * exist. The wedge funds and tests the architecture; it does not redefine it,
 * and it does not make the architecture proven.
 *
 * Everything here is design and roadmap. There is no customer, no pilot, no
 * revenue, and no authority over a physical process. The prices are planning
 * hypotheses for a design partner conversation, not a price list.
 */

export type WedgeLine = {
  label: string;
  value: string;
  detail: string;
};

/** The two levels, stated next to each other so neither can be read as the other. */
export const wedgeSeparation: readonly WedgeLine[] = [
  {
    label: "Platform thesis",
    value: "General-purpose verifiable world-model and autonomy architecture",
    detail:
      "One Atlas, typed programs, a learning contract and a replay contract, intended to hold across knowledge, science, industrial operations and autonomous missions. Domain changes the adapters and the sources; it does not change the evidence cycle.",
  },
  {
    label: "Commercial wedge",
    value: "Industrial decision assurance around existing digital twins",
    detail:
      "The first thing anybody would buy: a bounded, read-only, advisory evaluation on one industrial workflow, with a frozen baseline and a replayable decision package at the end.",
  },
  {
    label: "What the wedge is for",
    value: "It funds the architecture and tests it against real cost",
    detail:
      "Industry is chosen because the cost of ambiguity, downtime and an unsafe action is already measured there. A narrow market with measurable stakes falsifies an architecture faster than a broad one without them.",
  },
];

export type WorkflowStep = {
  number: string;
  title: string;
  partnerSystem: string;
  galoArtifact: string;
  control: string;
};

/** The seven steps of one evaluated decision, from the pilot blueprint. */
export const industrialWorkflow: readonly WorkflowStep[] = [
  {
    number: "01",
    title: "Observe",
    partnerSystem: "Digital twin, telemetry, work order, manual revision.",
    galoArtifact: "A public observation with a source digest and a declared scope.",
    control: "No gold diagnosis and no future outcome enters the policy input.",
  },
  {
    number: "02",
    title: "Propose",
    partnerSystem: "The partner's existing diagnostic rules and operating context.",
    galoArtifact: "A candidate diagnosis and a portfolio of candidate actions.",
    control: "Full candidate membership is preserved rather than pruned quietly.",
  },
  {
    number: "03",
    title: "Commit",
    partnerSystem: "The action space the partner has approved.",
    galoArtifact: "A committed route and Atlas state, written before anything is revealed.",
    control: "A duplicate or post-reveal commitment is rejected.",
  },
  {
    number: "04",
    title: "Reveal",
    partnerSystem: "Historical ground truth, or an independent expert judgement.",
    galoArtifact: "A signed evaluator outcome.",
    control: "The private key stays outside the engine.",
  },
  {
    number: "05",
    title: "Learn",
    partnerSystem: "TRAIN split only.",
    galoArtifact: "Policy and Atlas update receipts.",
    control: "The DEV and SEALED roots stay frozen.",
  },
  {
    number: "06",
    title: "Verify",
    partnerSystem: "The same data for every arm.",
    galoArtifact: "A terminal, safety and actual-work ledger.",
    control: "Same verdict, false accepts, and the search reduction are all reported.",
  },
  {
    number: "07",
    title: "Simulate",
    partnerSystem: "A digital-twin scenario, where one exists.",
    galoArtifact: "Counterfactual route and recovery evidence.",
    control: "No real actuation happens during an evaluation.",
  },
];

/** Read-only in, supervisory out: the layer GALO occupies and the ones it does not. */
export const integrationStack: readonly { tier: string; detail: string; owner: "partner" | "galo" | "boundary" }[] = [
  {
    tier: "Digital twin · SCADA · historian · MES · ERP · CMMS · manuals · sensors",
    detail: "Systems that already exist and stay in place. GALO reads them and replaces none of them.",
    owner: "partner",
  },
  { tier: "Read-only domain adapters", detail: "Structured observations with source custody.", owner: "galo" },
  { tier: "GALO World Atlas", detail: "Explicit, versioned state for the decision at hand.", owner: "galo" },
  {
    tier: "Competing local models and assumptions",
    detail: "Alternatives are kept while the evidence does not settle them.",
    owner: "galo",
  },
  { tier: "Learned proposal and search", detail: "Ranks what to check. Holds no verdict authority.", owner: "galo" },
  { tier: "Typed ProgramIR routes", detail: "The route is explicit and its work is counted.", owner: "galo" },
  { tier: "Verifier · PASS / REJECT / BOUNDARY", detail: "Recomputes, and refuses when it cannot.", owner: "galo" },
  {
    tier: "Human approval · twin simulation · supervisory gateway",
    detail: "Where a person or a simulation stands between the reasoning and the plant.",
    owner: "boundary",
  },
  {
    tier: "Existing PLC · robot controller · certified safety interlocks",
    detail: "Untouched. No current or proposed path writes to them directly.",
    owner: "partner",
  },
];

export type AutonomyStage = {
  code: string;
  title: string;
  role: string;
  gate: string;
  status: "runs today" | "roadmap" | "gated";
};

/** Advisory to robot missions, each rung with the evidence that would open it. */
export const autonomyLadder: readonly AutonomyStage[] = [
  {
    code: "A",
    title: "Advisory",
    role: "Rank diagnoses and actions, name the affected assets and the evidence. A person decides.",
    gate: "Partner-owned heldout data, work reduction at the same verdict, and zero false accepts.",
    status: "roadmap",
  },
  {
    code: "B",
    title: "Simulation",
    role: "Run counterfactual plans inside the partner's digital twin. No physical command leaves the system.",
    gate: "Simulation parity, scenario coverage, and recovery and boundary metrics.",
    status: "roadmap",
  },
  {
    code: "C",
    title: "Supervisory",
    role: "Issue a high-level recommendation or command through a separate approval gateway.",
    gate: "Shadow-mode reliability, a safety case, and an independent operational review.",
    status: "gated",
  },
  {
    code: "D",
    title: "Robotics mission layer",
    role: "Mission decomposition, constraints, route choice and recovery above the vendor's controller.",
    gate: "Hardware and software in the loop, certified interlocks, and regulator or partner approval.",
    status: "gated",
  },
  {
    code: "E",
    title: "Broader general-purpose reasoning",
    role: "Transfer across domains, long horizons and open tasks.",
    gate: "Independent cross-domain evidence. Not a marketing declaration.",
    status: "gated",
  },
];

export type OfferRung = {
  offer: string;
  price: string;
  duration: string;
  proof: string;
};

/**
 * Planning hypotheses for a design-partner conversation. Not a price list, not
 * a signed pipeline, and not revenue — the package labels them exactly that way
 * and so does this page.
 */
export const offerLadder: readonly OfferRung[] = [
  {
    offer: "Industrial decision-assurance evaluation",
    price: "AED 150k–300k",
    duration: "6–8 weeks",
    proof: "One bounded workflow, a frozen baseline, and a replay package.",
  },
  {
    offer: "Private site pilot",
    price: "AED 350k–750k",
    duration: "After a positive evaluation",
    proof: "An integrated Atlas and adapters running in operational shadow mode.",
  },
  {
    offer: "Annual runtime and Atlas licence",
    price: "AED 600k–1.8m per site per year",
    duration: "Annual",
    proof: "A stable deployment, support, assurance updates and new workflows.",
  },
  {
    offer: "Multi-site or fleet expansion",
    price: "Enterprise agreement, priced after discovery",
    duration: "Negotiated",
    proof: "Reusable adapters, partner evidence and rollout economics.",
  },
  {
    offer: "OEM or autonomy SDK",
    price: "Licence, support, and usage or site economics",
    duration: "Negotiated",
    proof: "Simulation and supervisory-control evidence.",
  },
];

export type FitLine = {
  criterion: string;
  why: string;
  disqualifier: string;
};

/** The admission gate. Publishing STOP_NOT_SUITABLE is part of the product. */
export const partnerFit: readonly FitLine[] = [
  {
    criterion: "Operational data already exists",
    why: "The evaluation needs bounded observations and outcomes that are revealed independently.",
    disqualifier: "No historian or SCADA, no asset hierarchy, no maintenance record, no versioned procedures.",
  },
  {
    criterion: "Delay already costs money",
    why: "Faster diagnosis and cheaper re-verification only pay where the delay is measured.",
    disqualifier: "No quantified downtime, review time or operational consequence.",
  },
  {
    criterion: "The workflow is connected",
    why: "Local revision and cross-system evidence matter when one change touches several things.",
    disqualifier: "Independent assets with no shared process worth speaking of.",
  },
  {
    criterion: "A person or a simulation holds authority",
    why: "It allows an advisory-first deployment that is safe by construction.",
    disqualifier: "A demand for immediate unsupervised control.",
  },
  {
    criterion: "There is somewhere to expand to",
    why: "One workflow should be able to grow into assets, sites, fleets and procedures.",
    disqualifier: "A one-off custom visualisation with no recurring assurance need.",
  },
];

export type EvaluationArm = {
  code: string;
  definition: string;
  isolates: string;
};

/** Seven arms, so that a positive result cannot be explained another way. */
export const evaluationArms: readonly EvaluationArm[] = [
  { code: "A0", definition: "The learned persistent GALO Atlas.", isolates: "Does learning reduce verified work?" },
  {
    code: "A1",
    definition: "The same engine, Atlas schema and capacity, with updates blocked.",
    isolates: "The causal same-mechanism comparator.",
  },
  {
    code: "A2",
    definition: "The partner's strongest rule engine or static deterministic ranking.",
    isolates: "Does GALO beat the operational incumbent?",
  },
  {
    code: "A3",
    definition: "Retrieval plus reranking, or the partner's own model workflow, with equal information.",
    isolates: "Does explicit state and replay add operational value?",
  },
  { code: "A4", definition: "Shuffled feedback.", isolates: "Does the result depend on genuine temporal learning?" },
  { code: "A5", definition: "A stale Atlas snapshot.", isolates: "Does the current state matter?" },
  { code: "A6", definition: "A post-reveal oracle, never promotable.", isolates: "An upper bound, and nothing else." },
];

export type PromotionGate = {
  metric: string;
  condition: string;
};

/** Preregistered, and the stop rule is written before the result is seen. */
export const promotionGates: readonly PromotionGate[] = [
  { metric: "Terminal parity", condition: "Exact equality for any arm that may be promoted." },
  { metric: "False accepts", condition: "Zero." },
  { metric: "Verified work", condition: "A0 against A1 down at least 15%, with the CI95 lower bound above 5%." },
  { metric: "Strong baseline", condition: "A0 must beat or materially complement A2 on a preregistered endpoint." },
  {
    metric: "Heldout integrity",
    condition: "DEV and SEALED state roots unchanged; no policy, Atlas or core promotion.",
  },
  { metric: "Pointwise harm", condition: "At most 1% of independent groups." },
  { metric: "Replay", condition: "Two fresh roots reproduce the semantic state, the outcomes and the ledgers." },
  {
    metric: "Economics",
    condition: "Reviewer hours, diagnosis time, routes re-checked and audit time, all measured.",
  },
];

export const stopRule =
  "If A0 does not beat A1 under the frozen contract, or if there is an oracle leak, a frozen write, candidate drift or a false accept, the result stays NOT_SUPPORTED on that scope. The protocol is not changed after the sealed set has been inspected.";

export const industrialTranslationKeys = [
  ...wedgeSeparation.flatMap((row) => [row.label, row.value, row.detail]),
  ...industrialWorkflow.flatMap((row) => [row.title, row.partnerSystem, row.galoArtifact, row.control]),
  ...integrationStack.flatMap((row) => [row.tier, row.detail]),
  ...autonomyLadder.flatMap((row) => [row.title, row.role, row.gate]),
  ...offerLadder.flatMap((row) => [row.offer, row.price, row.duration, row.proof]),
  ...partnerFit.flatMap((row) => [row.criterion, row.why, row.disqualifier]),
  ...evaluationArms.flatMap((row) => [row.definition, row.isolates]),
  ...promotionGates.flatMap((row) => [row.metric, row.condition]),
  stopRule,
] as const;
