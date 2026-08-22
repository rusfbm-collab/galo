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
    strength: "Fluency across an enormous range of tasks, with no schema written in advance.",
    authority: "The fitted parameters, plus whatever the prompt and the retrieved context supply at the time.",
    change: "A correction is a new prompt, a fine-tune, or a new model. The unit of change is the whole object.",
    contrast:
      "GALO may use a learned ranking, but the verdict belongs to declared state and a verifier rather than to the parameters.",
  },
  {
    approach: "Retrieval and agent stacks",
    landmarks: "Tool-calling loops, graph-structured agent orchestration, enterprise assistants",
    strength:
      "Tools, retrieval and workflow wired together and running in production today, at a scale this project is nowhere near.",
    authority: "The prompt, a memory store, and the surrounding code that decides which tools exist at all.",
    change: "A trace records the calls that were made. The calls that were available and not taken are usually nowhere.",
    contrast:
      "The unit here is a versioned decision transaction: the permitted set, the choice made from it, and a receipt somebody else can replay.",
  },
  {
    approach: "Knowledge graphs",
    landmarks: "Property-graph stores, enterprise knowledge graphs, RDF and OWL reasoners",
    strength: "Entities and relations are explicit and quotable, and the graph is readable in the ordinary sense of the word.",
    authority: "The graph itself, and the reasoner drawing conclusions over it.",
    change: "An edit is an edit to the store. What one edit was permitted to touch is a matter of process around the graph.",
    contrast:
      "The Atlas is not an edge store acting as law. Typed state, frames, routes and receipts are the first-class objects, and the permitted set is closed before the run.",
  },
  {
    approach: "Symbolic knowledge bases",
    landmarks: "Cyc and comparable large hand-built ontologies",
    strength:
      "Explicit inference over broad general knowledge, with an audit trail, sustained across decades of engineering.",
    authority: "A shared knowledge base and a logic engine over it.",
    change: "Breadth is both the achievement and the standing cost: a general base has to be kept current to stay useful.",
    contrast:
      "GALO is not a second attempt at a global common-sense base. It offers change-assurance on a local, versioned decision state instead.",
  },
  {
    approach: "Neuro-symbolic hybrids",
    landmarks: "Neural components composed with rule, logic or constraint layers",
    strength: "Both halves in one system, reaching results that neither half reaches alone.",
    authority: "Split between the network and the symbolic layer, and where the split falls differs from system to system.",
    change: "It depends which half was wrong, and the record does not always say which.",
    contrast:
      "Here the split is the design and it is written down: the learned part may propose and rank, and never owns the terminal verdict.",
  },
  {
    approach: "Predictive world models",
    landmarks: "Learned dynamics models, joint-embedding predictive architectures",
    strength: "Dynamics learned from observation, good enough to plan against without a schema being written first.",
    authority: "A latent model of how the world moves.",
    change: "Retraining, on the same terms as any fitted model.",
    contrast:
      "The phrase means a different thing on this site. A world model here is a declared decision state, not a latent predictor of the next frame, and nothing in it is offered as a prediction of dynamics.",
  },
  {
    approach: "Causal stacks",
    landmarks: "Causal graphs, structural models, intervention tooling",
    strength: "Reasoning about interventions rather than only about correlation, with the assumptions stated openly.",
    authority: "The causal graph, and the assumptions declared alongside it.",
    change: "A changed assumption changes the graph, and the consequences are worked through by hand.",
    contrast:
      "A local frame can carry that shape. What is on offer here is the loop around it: commit, verify, revise locally, replay.",
  },
  {
    approach: "Formal methods and provers",
    landmarks: "Model checkers, theorem provers, verified compilers and kernels",
    strength: "Guarantees stronger than anything else in this table, inside a stated domain.",
    authority: "A specification, and a proof a small trusted kernel accepts.",
    change: "A changed specification is a new proof obligation, discharged offline before anything runs.",
    contrast:
      "This is a runtime for decisions being taken now, and it claims far less than a prover does about what it establishes.",
  },
  {
    approach: "Governance and policy layers",
    landmarks: "Model-governance platforms, guardrail and policy layers",
    strength: "Controls, logging and policy over the models an organisation already runs, without replacing any of them.",
    authority: "Policy applied to another engine's outputs.",
    change: "The policy versions independently of the model it wraps.",
    contrast:
      "GALO is the reasoning substrate rather than a wrapper: the state and the permitted set are its own, and the record is written from inside the run.",
  },
  {
    approach: "GALO",
    landmarks: "This project",
    strength: "A declared decision state with a receipt that replays. Small, and narrow on purpose.",
    authority: "Declared state and a frozen verifier. Learning may reorder the search; it does not admit the result.",
    change: "A revision is a named edit to a named entry, carrying the receipt that authorised it.",
    contrast:
      "The only row here that nobody outside the team has run. Partner-controlled industrial validity is not proven, and production autonomy is not authorised.",
    isGalo: true,
  },
];

export const comparisonClassesLead =
  "Most alternative-AI stories improve one layer: better retrieval, more rules, a larger ontology, a governance wrapper, or a predictive world model. The bet here is a different one — keep the decision state explicit, stop the learned part from owning the verdict, and make the effect of a change locally revisable and replayable. Every row below is a class of system rather than a company, and the products are named only as landmarks.";

export const comparisonClassesBoundary =
  "This is architectural positioning, not a claim of universal superiority. Nothing on this site has been measured against any of these classes, and no row says one of them answers better than another. Partner-controlled industrial validity is not proven, and production autonomy is not authorised.";

/** The same axis, cut to four lines for the home page. */
export const homeClassStrip: readonly string[] = [
  "Language models — fluency, without an explicit decision authority.",
  "Graphs and knowledge bases — explicit structure; the change transaction is not itself the product.",
  "Hybrids and governance layers — often composed around another engine.",
  "GALO — versioned decision state, learning that does not own the verdict, local revision, replay.",
];

export const comparisonClassesTranslationKeys = [
  comparisonClassesLead,
  comparisonClassesBoundary,
  ...homeClassStrip,
  ...comparisonClasses.flatMap((row) => [
    row.approach,
    row.landmarks,
    row.strength,
    row.authority,
    row.change,
    row.contrast,
  ]),
] as const;
