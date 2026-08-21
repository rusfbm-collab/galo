/**
 * For a reader who does not work with artificial intelligence at all.
 *
 * Everything else on this site — including the plain-words page — quietly
 * assumes the reader knows what a model is, what training means, and why
 * anyone would care whether a program can explain itself. This file assumes
 * none of that.
 *
 * Rule for every string here: no term is used before it is explained, and no
 * sentence needs a second reading. Where a comparison is drawn with ordinary
 * AI systems, it describes how they are built, never how well they work.
 */

export type AiWord = {
  word: string;
  /** One sentence, in words a person uses out loud. */
  plain: string;
  /** Why this word turns up on this site at all. */
  whyHere: string;
};

/** The dozen words the rest of the site uses without stopping to explain. */
export const aiWords: readonly AiWord[] = [
  {
    word: "Model",
    plain:
      "A very large pile of numbers that a program uses to produce an answer. Nobody wrote those numbers by hand; they came out of a process, and no single one of them means anything on its own.",
    whyHere:
      "Almost every AI product you have used is one. GALO is not, and most of this site is about that difference.",
  },
  {
    word: "Training",
    plain:
      "Showing a program millions of examples and letting it adjust its own numbers until its answers usually look right. Nobody decides what any single number should be.",
    whyHere: "GALO does no training at all today. That is unusual enough that people assume it is a mistake.",
  },
  {
    word: "Large language model",
    plain:
      "A model trained on an enormous amount of text, which produces the next word over and over until a reply appears. ChatGPT and its relatives are these.",
    whyHere: "It is what most people mean by AI, so it is the thing we are constantly being compared with.",
  },
  {
    word: "Hallucination",
    plain:
      "When a program states something false with complete confidence, in the same tone it uses for things that are true. It is not lying; it has no way to tell the two apart.",
    whyHere: "This is the failure people fear most, and the reason 'why did it say that?' matters.",
  },
  {
    word: "Deterministic",
    plain: "Same question, same answer, every single time. A clock behaves that way; a dice roll does not.",
    whyHere: "GALO is deterministic. That is what lets somebody else repeat a decision and get exactly what we got.",
  },
  {
    word: "Reproducible",
    plain:
      "Somebody who does not trust you can run the same thing themselves and get the same result, without asking you for anything.",
    whyHere: "This is the property the whole project is organised around.",
  },
  {
    word: "Black box",
    plain:
      "A program whose insides can be looked at but not understood: you can see all the numbers and still not be able to say why it chose what it chose.",
    whyHere: "It is the ordinary state of affairs in AI, and the thing we are trying not to build.",
  },
  {
    word: "Audit trail",
    plain:
      "A written record complete enough that somebody who was not there can reconstruct what happened, and check it.",
    whyHere: "Every 'receipt' on this site is one of these.",
  },
  {
    word: "Benchmark",
    plain:
      "A standard set of tasks used to compare systems, the way a fixed route is used to compare cars. A number from one is only as good as the route it was measured on.",
    whyHere: "We have not run one. Where a site like this would normally show a chart, we say so instead.",
  },
  {
    word: "Agent",
    plain:
      "A program that does not just answer, but acts: books something, sends something, changes something. The consequences leave the screen.",
    whyHere: "When a program can act, 'why did it do that?' stops being an academic question.",
  },
  {
    word: "Inference",
    plain: "The moment a trained program actually produces an answer, as opposed to the time it spent being trained.",
    whyHere: "GALO has no equivalent step, because there is nothing trained to run.",
  },
  {
    word: "Open source",
    plain: "The instructions a program is built from are published, so anyone can read them and run them.",
    whyHere: "Publishing the mathematics is not the same as this, and we try never to blur the two.",
  },
] as const;

export type MisconceptionCard = {
  assumption: string;
  reality: string;
};

/** What a reader who arrives from ChatGPT will reasonably assume, and the answer. */
export const notWhatYouThink: readonly MisconceptionCard[] = [
  {
    assumption: "So it is another chatbot.",
    reality:
      "No. It does not write text, hold a conversation, or answer questions. Ask it something in words and nothing happens — it has no way to read a sentence.",
  },
  {
    assumption: "It must be trying to replace ChatGPT.",
    reality:
      "No. The two do different jobs and could sit next to each other: one proposes what to do, the other decides whether that is allowed and writes down why.",
  },
  {
    assumption: "It is smarter, or safer, or faster.",
    reality:
      "We have not measured any of that, so we say none of it. What we can say is narrower: this thing can be checked afterwards, and most cannot.",
  },
  {
    assumption: "It is already in use somewhere.",
    reality:
      "No. There is no customer, no pilot, and no deployment. What exists is a working piece of software and the mathematics under it.",
  },
] as const;

export type DecisionStep = {
  number: string;
  usual: string;
  here: string;
};

/**
 * The whole difference in three steps, with no vocabulary in either column.
 * The left column describes how ordinary AI is built, never how well it works.
 */
export const twoWaysToDecide: readonly DecisionStep[] = [
  {
    number: "01",
    usual: "The program is shown millions of examples until its answers usually look right.",
    here: "Somebody writes down every position the program is allowed to be in. There are not many, and the list is finished before anything runs.",
  },
  {
    number: "02",
    usual: "When a question arrives, an answer comes out of that pile of numbers.",
    here: "When something arrives, the program picks one entry from the written list. It cannot invent an entry that is not on it.",
  },
  {
    number: "03",
    usual:
      "Ask why later, and the honest answer is that the numbers came out that way. Nobody can point at the reason.",
    here: "Ask why later, and the record names which entry was picked and which others were available at that moment.",
  },
] as const;

export const aiBasicsTranslationKeys = [
  ...aiWords.flatMap((entry) => [entry.word, entry.plain, entry.whyHere]),
  ...notWhatYouThink.flatMap((entry) => [entry.assumption, entry.reality]),
  ...twoWaysToDecide.flatMap((entry) => [entry.usual, entry.here]),
] as const;
