/**
 * Where GALO sits among the other attempts to build artificial intelligence.
 *
 * Thirteen families, named rather than gestured at, because a reader who works in
 * this field will ask about them by name and a reader who does not deserves to
 * know they exist. Every row describes how a family is built and what an
 * outsider can check afterwards. No row says one family answers better than
 * another: none of that has been measured here, and repeating a benchmark from
 * somebody else's paper would be borrowing evidence we did not produce.
 *
 * The relation column is written to be uncomfortable where it should be. Every
 * family here but this one is shipped, used, and evaluated by people outside the
 * team that built it. GALO is not, and the table says so in the same breath as
 * the architectural point.
 */

export type LandscapeRow = {
  family: string;
  /** Systems a reader is likely to have heard of, named plainly. */
  examples: string;
  /** What actually determines the outcome inside that family. */
  decidedBy: string;
  /** What somebody outside the building can verify after the fact. */
  checkable: string;
  /** Where GALO stands relative to it, including where it stands behind. */
  relation: string;
};

export const landscapeRows: readonly LandscapeRow[] = [
  {
    family: "Large language models",
    examples: "GPT, Claude, Gemini, Llama, Mistral, Qwen",
    decidedBy:
      "Parameters fitted to an enormous training corpus. The rule behind any single output was learned rather than written, so no person can point to it.",
    checkable:
      "Aggregate behaviour on benchmark suites, and whatever the provider chooses to publish about training and evaluation. Individual outputs are checked by inspection, not by construction.",
    relation:
      "A different class of object. These read language and answer open-ended questions; the GALO engine does neither, and is narrower than any of them by a very wide margin.",
  },
  {
    family: "Retrieval-augmented systems",
    examples: "Vector search over documents feeding a model — the pattern behind most enterprise assistants",
    decidedBy:
      "A search index chooses passages and a language model writes the answer. Retrieval is inspectable; the step from passage to wording is not.",
    checkable:
      "Which documents were retrieved, and whether the cited passage says what the answer claims. Not why the model wrote that particular sentence.",
    relation:
      "A citation shows where text came from. A receipt shows what was permitted and what was chosen. They answer different questions and are not substitutes.",
  },
  {
    family: "Agent frameworks and tool orchestration",
    examples: "LangChain, LlamaIndex, autonomous-agent loops, MCP tool servers",
    decidedBy:
      "A model plans and calls tools; the surrounding code decides which tools exist. Permission is usually expressed in the prompt and in the code around it.",
    checkable:
      "A trace of the calls that were made. The set of calls that were available but not made is typically not recorded anywhere.",
    relation:
      "The closest thing to a direct overlap in practice. GALO's difference is that the permitted set is declared, enumerated and closed before the run, and appears in the record next to the choice.",
  },
  {
    family: "Proof assistants",
    examples: "Lean and mathlib, Rocq (formerly Coq), Isabelle/HOL",
    decidedBy:
      "A person writes a proof and a small trusted kernel accepts or rejects it. Nothing is accepted that the kernel cannot check.",
    checkable:
      "Everything, to a standard nothing else in this table reaches. Anyone can re-run the checker on the same proof.",
    relation:
      "Stronger verification than GALO claims anywhere. They check statements in a formal language; they do not observe a situation, act under a budget, or produce an execution record.",
  },
  {
    family: "Solvers and model checkers",
    examples: "Z3, cvc5, TLA+, CBMC, and verified artefacts such as seL4 and CompCert",
    decidedBy:
      "A declared model and a decision procedure over it. The answer is a proof, a counterexample, or an honest failure to decide.",
    checkable:
      "The model, the property, and the counterexample. These are used in industry precisely because the result survives an audit.",
    relation:
      "The same instinct — decide inside something declared — applied to properties of programs rather than to actions taken at runtime. GALO's kernel is finite algebra and its runtime writes receipts.",
  },
  {
    family: "Learned proposer with a formal checker",
    examples: "AlphaZero, AlphaGeometry, AlphaProof, FunSearch and related work",
    decidedBy:
      "A learned component proposes candidates and a formal component admits or rejects them. Only admitted candidates count.",
    checkable:
      "The admitted result, against the checker's rules. The proposal step remains learned and is not itself checkable.",
    relation:
      "The nearest architectural relative, and the honest comparison hurts: this composition is exactly what GALO's target architecture describes, and these systems are built, published and evaluated while GALO's version is written down and not implemented.",
  },
  {
    family: "Digital-twin platforms",
    examples: "Plant and asset twins, telemetry integration, 3D context and simulation",
    decidedBy:
      "An explicit model of the plant, fed by telemetry, with simulation on top. What is where, what is happening, and what a scenario would look like.",
    checkable:
      "The asset model, the telemetry behind a reading, and what a simulated scenario produced. This is why the category exists.",
    relation:
      "The surface GALO is designed to read, not a thing to displace. A twin says what and where; the question GALO takes on is which explanations are still open, which check separates them, and what may lawfully be done next.",
  },
  {
    family: "Industrial analytics and predictive maintenance",
    examples: "Anomaly detection, failure forecasting, condition monitoring and domain models",
    decidedBy: "Models fitted to historical operating data, producing an alert, a score or a forecast.",
    checkable:
      "The alert can be checked against what happened next, and the model against the operating window it was trained on.",
    relation:
      "A prediction and a defensible decision are different products. GALO keeps the competing diagnoses alive, chooses the check that separates them, and records why an action was proposed at all.",
  },
  {
    family: "Ontology and operations platforms",
    examples: "Palantir-style operational ontologies, workflow and data-integration platforms",
    decidedBy: "A modelled ontology of the organisation, with workflows, governance and integration around it.",
    checkable:
      "Lineage through the platform's own model, to the extent that model records it, and whatever the organisation itself chooses to expose to an auditor.",
    relation:
      "A far broader product with far more integration behind it. GALO's hypothesis is narrower and more portable: lawful state transitions, an authority boundary the learner cannot cross, and replay that does not depend on the platform being present.",
  },
  {
    family: "Global common-sense knowledge bases",
    examples: "Cyc, and the decades of hand-curated axioms behind it",
    decidedBy:
      "A very large hand-built body of general knowledge, with an inference engine drawing conclusions from it. The ambition is breadth: enough of the world written down that a system stops needing to be told the obvious.",
    checkable:
      "Which axioms were used and what follows from them. The undertaking is decades old and the engineering behind it is far beyond anything here.",
    relation:
      "The comparison people reach for, and the one worth answering plainly: this is not a second attempt at that. Cyc proved there is demand for explicit reasoning. GALO is not trying to write the world down — it is trying to make one decision defensible after the fact, on a versioned record, at a scope small enough to enumerate.",
  },
  {
    family: "Knowledge graphs and ontologies",
    examples: "Wikidata, OWL and RDF reasoners, enterprise knowledge graphs",
    decidedBy:
      "Named facts and declared relations, with entailment computed by a reasoner. Everything has an identifier a person can quote.",
    checkable:
      "Which facts were present and which conclusions follow from them. The graph is readable in the ordinary sense of the word.",
    relation:
      "Explicit state, which GALO also wants. What is missing there is the execution side: a budget, a single-use handle, and a record of the action that followed.",
  },
  {
    family: "Cognitive architectures",
    examples: "Soar, ACT-R, Sigma, OpenCog Hyperon",
    decidedBy:
      "An explicit working memory and a decision cycle over declared production rules, designed to model how deliberation is structured.",
    checkable:
      "The rule that fired and the memory it fired on. Decades of published research sit behind these systems.",
    relation:
      "The same ambition, from an older tradition. GALO's contribution is not the ambition; it is a finite algebra with proved structure underneath it and receipts on top.",
  },
  {
    family: "Planners and rule engines",
    examples: "PDDL planners, Drools, DMN decision engines, credit and claims rulebooks",
    decidedBy:
      "Declared operators with preconditions and effects. A plan or a decision path can be printed and read line by line.",
    checkable: "Which rule fired and why it was eligible. This is why regulated industries have used them for decades.",
    relation:
      "The closest deployed relative of the current GALO slice, and the fairest challenge to it: what a rule engine does not give you is the algebraic structure, the level ladder, or the revision loop the architecture is built around — and those remain the part that is specified rather than shipped.",
  },
] as const;

export type StandingLine = {
  they: string;
  us: string;
};

/**
 * The part of the comparison that does not flatter us. Every family above has
 * these; the project does not, and saying so is the point of the section.
 */
export const landscapeStanding: readonly StandingLine[] = [
  {
    they: "Deployed and used by people outside the team that built them",
    us: "No customer, no pilot, no deployment. A working bounded prototype and the mathematics under it.",
  },
  {
    they: "Measured against public benchmarks, with results others can dispute",
    us: "No benchmark has been run. Where a chart would normally go, this site says that instead.",
  },
  {
    they: "Peer-reviewed publications and independent replication",
    us: "Internal proofs and a public site. No external review of the mathematics has taken place.",
  },
  {
    they: "Teams, funding, and years of engineering behind them",
    us: "Pre-seed and founder-led. This is a research architecture at an early stage, described as one.",
  },
] as const;

export type LandscapeVerdict = {
  question: string;
  answer: string;
};

/** The three questions a specialist asks after reading the table. */
export const landscapeVerdicts: readonly LandscapeVerdict[] = [
  {
    question: "Is any of this new?",
    answer:
      "The ingredients are not. Declared operators, explicit state, checkers admitting a proposer's candidates — each has a literature. What is claimed as ours is the specific kernel: a finite algebra whose levels, laws and symmetries are proved out, with typed execution and receipts sitting directly on it.",
  },
  {
    question: "Then why not use a rule engine?",
    answer:
      "For the slice that runs today, that is a fair question and the honest answer is that a rule engine would cover much of it. The argument for the algebra is about what comes next — the level ladder and local revision — and that argument is not yet backed by a running system.",
  },
  {
    question: "Who is closest to this?",
    answer:
      "The proposer-and-checker line of work. It shares the composition GALO's architecture describes, it is further along in every practical sense, and it is the comparison a reader should press us on rather than the comparison with chatbots.",
  },
] as const;

export type PlainNeighbour = {
  /** What the reader already knows, named without vocabulary. */
  what: string;
  /** How it works and where this sits next to it, in words used out loud. */
  plain: string;
};

/**
 * The same comparison for somebody who has never heard of any of it. Three
 * neighbours instead of thirteen families, no product names except the one everybody
 * has used, and the last one is the awkward one on purpose.
 */
export const plainNeighbours: readonly PlainNeighbour[] = [
  {
    what: "The chatbots you have already used",
    plain:
      "You type a question, it writes an answer. Ask it afterwards why it answered that way and it will write you a reason, but the reason is composed after the fact by the same machinery. GALO cannot read your sentence at all — it works on a short list of permitted moves and writes down which one it took.",
  },
  {
    what: "The rule books a bank already runs on",
    plain:
      "When a loan is declined, somewhere there is a rulebook and somebody can point at the rule that fired. That is the same instinct as this project, it is decades old, and it works. The fair question is what GALO adds — and the honest answer is that the part which adds something is the part that is not running yet.",
  },
  {
    what: "The proof checkers mathematicians use",
    plain:
      "Software that refuses to accept a proof it cannot check line by line. It is stricter than anything claimed here. It also never does anything: it checks statements, it does not decide, spend, or act. That is the gap this project is trying to stand in.",
  },
] as const;

export const landscapeTranslationKeys = [
  ...plainNeighbours.flatMap((row) => [row.what, row.plain]),
  ...landscapeRows.flatMap((row) => [row.family, row.examples, row.decidedBy, row.checkable, row.relation]),
  ...landscapeStanding.flatMap((row) => [row.they, row.us]),
  ...landscapeVerdicts.flatMap((row) => [row.question, row.answer]),
] as const;
