/**
 * The GALO / language-model comparison.
 *
 * The comparison is about what kind of guarantee each object can give, not about
 * which one is better. Every row states a property, and the breadth row states
 * plainly that a language model is vastly wider than the current GALO engine.
 * No benchmark, accuracy, or performance comparison is claimed anywhere here.
 */

export type ComparisonRow = {
  dimension: string;
  model: string;
  galo: string;
};

export const comparisonRows: readonly ComparisonRow[] = [
  {
    dimension: "What the state is",
    model:
      "A long vector of learned numbers. It is real and it determines behaviour, but no part of it carries a name a person can point at.",
    galo: "One named position from a list declared in advance. It can be printed, quoted in a record, and compared with the same position from an earlier run.",
  },
  {
    dimension: "Where behaviour comes from",
    model:
      "Parameters fitted to a training corpus. The rule that produced a particular output was never written down by anyone; it was learned.",
    galo: "A table written out before anything runs. The rule that produced an output is a specific cell somebody can open and read.",
  },
  {
    dimension: "Size of the space",
    model:
      "Astronomically large and open-ended. Enumerating it is not merely expensive, it is not a meaningful operation.",
    galo: "1,204 declared candidates, of which 880 are executable. Enumerating the whole space is an ordinary operation that runs on every build.",
  },
  {
    dimension: "How you check it",
    model:
      "Run sample inputs and measure aggregate behaviour. A passing evaluation is evidence about the sample, not about every input.",
    galo: "Inspect every entry. The check either passes on all of them or fails on one you can name and open.",
  },
  {
    dimension: "The same input twice",
    model: "May differ. Sampling, numerical precision, batching, and model versioning can all move the output.",
    galo: "Identical by construction. The result is a table lookup, and the ordering of candidates comes from a hash rather than a preference.",
  },
  {
    dimension: "What it accepts",
    model:
      "Arbitrary natural language, images, and code. This is the enormous practical advantage of a language model.",
    galo: "Two fixed source patterns in the current engine. Widening this contract is named open work, not a solved problem.",
  },
  {
    dimension: "What it produces",
    model: "A plausible continuation, together with a probability the system assigned to it.",
    galo: "One named position and a machine-readable record of what was checked, what ran, and where it stopped.",
  },
  {
    dimension: "Correcting one mistake",
    model:
      "Retrain, fine-tune, or change the prompt. Each of those can move behaviour on inputs nobody was looking at.",
    galo: "Change one declared entry. The blast radius is the entries that depend on it, and that dependency is written down.",
  },
  {
    dimension: "Explaining a step",
    model: "An explanation is generated after the fact and is not guaranteed to be the reason the output appeared.",
    galo: "The record names the exact coordinate that fired. The explanation is the mechanism, not a description of it.",
  },
  {
    dimension: "Breadth today",
    model: "Enormous. A language model handles open-ended tasks across nearly every domain of written knowledge.",
    galo: "Very narrow. A binary, one-step slice with no language understanding at all. This is the honest shape of the trade.",
  },
];

export type StrengthEntry = {
  title: string;
  text: string;
};

export const modelStrengths: readonly StrengthEntry[] = [
  {
    title: "Language and meaning",
    text: "It reads an ambiguous sentence, resolves what was probably meant, and answers in kind. Nothing in the GALO kernel does this.",
  },
  {
    title: "Breadth without configuration",
    text: "It works on a domain nobody prepared for it. A declared finite universe has to be declared first.",
  },
  {
    title: "Generalisation",
    text: "It transfers patterns from training to inputs never seen. A table applies only where its entries were written.",
  },
  {
    title: "Fluent output",
    text: "It produces text a person can read directly. GALO produces positions and records that need an interface around them.",
  },
];

export const galoStrengths: readonly StrengthEntry[] = [
  {
    title: "Exhaustive checking",
    text: "The whole state space is small enough to inspect entry by entry, so a check covers every case rather than a sample of them.",
  },
  {
    title: "Exact replay",
    text: "A record is enough to reproduce the run on another machine and compare cell by cell, without access to the original system.",
  },
  {
    title: "Addressable state",
    text: "Every step has a coordinate, so a disagreement can be located at one address instead of argued about in the aggregate.",
  },
  {
    title: "Bounded correction",
    text: "One entry can be changed without moving behaviour on unrelated inputs, because the dependencies are declared rather than learned.",
  },
];

export type Misreading = {
  claim: string;
  correction: string;
};

export const comparisonMisreadings: readonly Misreading[] = [
  {
    claim: "GALO is a replacement for a language model.",
    correction:
      "It is not. The current engine does not read language, does not answer questions, and does not generate text. The two are different classes of object with different guarantees.",
  },
  {
    claim: "GALO is more accurate than a language model.",
    correction:
      "No such comparison is claimed. No head-to-head evaluation has been run, and none is reported anywhere on this site. Accuracy on an open task is not a property the current engine has at all.",
  },
  {
    claim: "A finite table can never scale to real problems.",
    correction:
      "This is the honest open question, and it is listed as work in progress rather than answered. What is settled is that the declared universe can be widened by declaration; what is not settled is how far that goes before it stops being practical.",
  },
  {
    claim: "This is just a rule engine with extra vocabulary.",
    correction:
      "The kernel is a finite algebra with proved structure, and the current runtime is a bounded slice of it. Whether the whole architecture amounts to more than a rule engine is decided by the target world-model loop, which is specified and not implemented.",
  },
  {
    claim: "The two cannot be used together.",
    correction:
      "The architecture describes a composition in which a model proposes and the verified layer admits, executes, and records. That composition is a written design with named preconditions; it is not a shipped capability.",
  },
];

export const compositionSteps = [
  {
    number: "01",
    actor: "model",
    title: "A model proposes",
    text: "An open-ended system reads the situation and suggests a candidate action in a form the contract accepts.",
    status: "TARGET",
  },
  {
    number: "02",
    actor: "galo",
    title: "The verified layer admits or refuses",
    text: "The candidate is checked against a declared finite universe. Anything outside it is refused with a named reason rather than approximated.",
    status: "CURRENT V4",
  },
  {
    number: "03",
    actor: "galo",
    title: "One bounded action executes",
    text: "The admitted candidate is bound to a single use and executed inside the declared scope.",
    status: "CURRENT V4",
  },
  {
    number: "04",
    actor: "galo",
    title: "A record is written",
    text: "What was checked, what ran, and where it stopped are written into a record that can be replayed by someone else.",
    status: "CURRENT V4",
  },
  {
    number: "05",
    actor: "model",
    title: "The proposal is revised",
    text: "A refusal carries its reason, so the proposing system can revise rather than retry blindly.",
    status: "TARGET",
  },
] as const;

export const comparisonTranslationKeys = [
  ...new Set([
    ...comparisonRows.flatMap((row) => [row.dimension, row.model, row.galo]),
    ...modelStrengths.flatMap((entry) => [entry.title, entry.text]),
    ...galoStrengths.flatMap((entry) => [entry.title, entry.text]),
    ...comparisonMisreadings.flatMap((entry) => [entry.claim, entry.correction]),
    ...compositionSteps.flatMap((entry) => [entry.title, entry.text]),
  ]),
] as const;
