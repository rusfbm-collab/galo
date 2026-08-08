/**
 * Where GALO sits among the other attempts to build artificial intelligence.
 *
 * Nine families, named rather than gestured at, because a reader who works in
 * this field will ask about them by name and a reader who does not deserves to
 * know they exist. Every row describes how a family is built and what an
 * outsider can check afterwards. No row says one family answers better than
 * another: none of that has been measured here, and repeating a benchmark from
 * somebody else's paper would be borrowing evidence we did not produce.
 *
 * The relation column is written to be uncomfortable where it should be. Eight
 * of the nine families are shipped, used, and evaluated by people outside their
 * own teams. GALO is not, and the table says so in the same breath as the
 * architectural point.
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
    family: "Knowledge graphs and ontologies",
    examples: "Cyc, Wikidata, OWL and RDF reasoners, enterprise knowledge graphs",
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

export const landscapeTranslationKeys = [
  ...landscapeRows.flatMap((row) => [row.family, row.examples, row.decidedBy, row.checkable, row.relation]),
  ...landscapeStanding.flatMap((row) => [row.they, row.us]),
  ...landscapeVerdicts.flatMap((row) => [row.question, row.answer]),
] as const;
