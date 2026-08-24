/**
 * Where GALO sits among the classes of system it gets compared with.
 *
 * The landscape table further down the comparison page is organised by named
 * families and by the products a reader has heard of. This one is organised by
 * class, along a single axis: who owns the verdict, what the world state is,
 * how a change is handled, and what replays afterwards. Brands appear only as
 * landmarks — the comparison is between kinds of system, not between companies.
 *
 * Two rules for every row. The strength column is written generously and
 * truthfully, because a comparison that only ever runs one way is not worth
 * printing. And the GALO row carries its own limits rather than ending on a
 * flourish: it is the only row here that nobody outside the team has run.
 */

export type ComparisonClass = {
  /** The class, named as a class rather than as a product. */
  approach: string;
  /** Products a reader is likely to have met, as landmarks only. */
  landmarks: string;
  /** What the class is good at, stated without hedging. */
  strength: string;
  /** Where the authority for an outcome sits inside it. */
  authority: string;
  /** What happens when something has to change. */
  change: string;
  /** How GALO differs — a difference, never a ranking. */
  contrast: string;
  /** The GALO row is rendered differently and carries its own boundary. */
  isGalo?: boolean;
};

export const comparisonClasses: readonly ComparisonClass[] = [
  {
    approach: "Foundation and language models",
    landmarks: "GPT-class assistants, open-weight models",
    strength: "Fluency across an enormous range of tasks, with no schema written first.",
    authority: "Fitted parameters, plus the prompt and the retrieved context.",
    change: "A new prompt, a fine-tune, or a new model. The unit of change is the whole object.",
    contrast: "A learned ranking is allowed here. The verdict is not: it belongs to declared state and a verifier.",
  },
  {
    approach: "Retrieval and agent stacks",
    landmarks: "Tool-calling loops, graph-structured agent orchestration, enterprise assistants",
    strength: "Tools, retrieval and workflow in production today, at a scale this project is nowhere near.",
    authority: "The prompt, a memory store, and the code that decides which tools exist.",
    change: "A trace of the calls made. The calls not made are usually nowhere.",
    contrast: "The unit here is a versioned decision transaction that somebody else can replay.",
  },
  {
    approach: "Knowledge graphs",
    landmarks: "Property-graph stores, enterprise knowledge graphs, RDF and OWL reasoners",
    strength: "Entities and relations explicit, quotable, and readable in the ordinary sense.",
    authority: "The graph, and the reasoner over it.",
    change: "An edit to the store. What one edit may touch is a matter of process.",
    contrast: "The Atlas is not an edge store acting as law, and the permitted set closes before the run.",
  },
  {
    approach: "Symbolic knowledge bases",
    landmarks: "Cyc and comparable large hand-built ontologies",
    strength: "Explicit inference over broad knowledge, with an audit trail, sustained for decades.",
    authority: "A shared knowledge base and a logic engine.",
    change: "Breadth is the achievement and the standing cost: a general base must be kept current.",
    contrast: "Not a second global common-sense base. Change-assurance on one local, versioned decision state.",
  },
  {
    approach: "Neuro-symbolic hybrids",
    landmarks: "Neural components composed with rule, logic or constraint layers",
    strength: "Both halves in one system, reaching what neither half reaches alone.",
    authority: "Split between network and symbolic layer, and the split falls differently in each.",
    change: "Depends which half was wrong, and the record does not always say.",
    contrast: "Here the split is the design and it is written down: the learned part never owns the verdict.",
  },
  {
    approach: "Predictive world models",
    landmarks: "Learned dynamics models, joint-embedding predictive architectures",
    strength: "Dynamics learned from observation, good enough to plan against.",
    authority: "A latent model of how the world moves.",
    change: "Retraining, like any fitted model.",
    contrast:
      "The phrase means something else here: a declared decision state, not a latent predictor of the next frame.",
  },
  {
    approach: "Causal stacks",
    landmarks: "Causal graphs, structural models, intervention tooling",
    strength: "Interventions rather than correlation alone, with the assumptions stated.",
    authority: "The causal graph and its declared assumptions.",
    change: "A changed assumption changes the graph, and the consequences are worked out by hand.",
    contrast: "A local frame can carry that shape; the loop around it is what is on offer here.",
  },
  {
    approach: "Formal methods and provers",
    landmarks: "Model checkers, theorem provers, verified compilers and kernels",
    strength: "Guarantees stronger than anything else here, inside a stated domain.",
    authority: "A specification, and a proof a small kernel accepts.",
    change: "A new proof obligation, discharged offline before anything runs.",
    contrast: "A runtime for decisions being taken now, claiming far less than a prover does.",
  },
  {
    approach: "Governance and policy layers",
    landmarks: "Model-governance platforms, guardrail and policy layers",
    strength: "Controls and policy over the models an organisation already runs, replacing none.",
    authority: "Policy over another engine's outputs.",
    change: "The policy versions independently of the model.",
    contrast: "The substrate rather than a wrapper: the state and the permitted set are its own.",
  },
  {
    approach: "GALO",
    landmarks: "This project",
    strength: "A declared decision state with a receipt that replays. Narrow on purpose.",
    authority: "Declared state and a frozen verifier. Learning may reorder the search, not admit the result.",
    change: "A named edit to a named entry, carrying the receipt that authorised it.",
    contrast:
      "The only row here that nobody outside the team has run. Partner-controlled industrial validity is not proven, and production autonomy is not authorised.",
    isGalo: true,
  },
];

export const comparisonClassesLead =
  "Most alternative-AI stories improve one layer: better retrieval, more rules, a larger ontology, a governance wrapper, or a predictive world model. The bet here is a different one — keep the decision state explicit, stop the learned part from owning the verdict, and make the effect of a change locally revisable and replayable. Every row below is a class of system rather than a company, and the products are named only as landmarks.";

export const comparisonClassesBoundary =
  "This is architectural positioning, not a claim of universal superiority. Nothing on this site has been measured against any of these classes, and no row says one of them answers better than another. Partner-controlled industrial validity is not proven, and production autonomy is not authorised.";

export const comparisonClassesTranslationKeys = [
  comparisonClassesLead,
  comparisonClassesBoundary,
  ...comparisonClasses.flatMap((row) => [
    row.approach,
    row.landmarks,
    row.strength,
    row.authority,
    row.change,
    row.contrast,
  ]),
] as const;
