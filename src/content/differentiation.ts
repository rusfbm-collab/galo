/**
 * What GALO is not, said on the front page instead of left to be inferred.
 *
 * The rest of the home page is written for a reader who wants to know what is
 * built and what is not. It answers that well and it is not being changed here.
 * What it did not answer is the question a specialist asks in the first ten
 * seconds — is this another language model, another graph, another Cyc, another
 * governance wrapper — and until now the answer was only reachable through the
 * theory and comparison chapters.
 *
 * One block, four assumptions and a summary line, because the earlier version
 * said the same thing twice: three cards and then a four-line strip repeating
 * them. Every row here gives the same reason in a different vocabulary, and the
 * reason is the last line of the hero: the learned part may propose and rank,
 * and never admits the result.
 *
 * Rule for every string in this file: it says what this is not, and names where
 * the authority for a decision sits. It does not say GALO answers better than
 * any of these families. That has not been measured, it is not claimed, and the
 * boundary at the end of the section says so in the same breath.
 */

/**
 * Four lines under the hero lead. Short enough to be read standing up, and each
 * one is a negative rather than a promise.
 */
export const heroDifferentiators: readonly string[] = [
  "Not a neural net as authority.",
  "Not a knowledge graph as the world model.",
  "Not a global common-sense knowledge base.",
  "Learning may rank candidates; the verifier owns the verdict.",
];

export type NotThis = {
  /** The assumption, named as the reader arrives with it. */
  taken: string;
  /** Why it does not hold, in one sentence about where authority sits. */
  answer: string;
};

/**
 * The four things this project is most often taken for, in the order a reader
 * is likely to reach them. Each is answered once, without arguing that the
 * other family is worse at anything.
 */
export const whatThisIsNot: readonly NotThis[] = [
  {
    taken: "Taken for a language model",
    answer: "Learned search can reorder work. It cannot rewrite the final admitted decision.",
  },
  {
    taken: "Taken for a knowledge graph",
    answer: "The canonical Atlas is typed state, frames and routes — not an edge store as law.",
  },
  {
    taken: "Taken for another Cyc",
    answer:
      "Cyc proved demand for explicit reasoning. GALO sells change-assurance on versioned decisions, not a decades-wide ontology.",
  },
  {
    taken: "Taken for a governance wrapper",
    answer:
      "A wrapper constrains what another engine already produced. Here the state and the permitted set belong to the engine itself.",
  },
];

/** The row that closes the block: the same four answers, stated positively. */
export const whatThisIs =
  "Versioned decision state, learning that does not own the verdict, local revision, and a receipt that replays.";

/**
 * The line that keeps the section from becoming a boast. Difference is not
 * superiority, and the separation the rows describe is a property of the design
 * rather than of a running learning system.
 */
export const differentiationBoundary =
  "None of this says GALO answers better than any of those families — that has not been measured and is not claimed here. It says the object is a different kind of thing, and the difference is where the authority for a decision sits. In the frozen release the question does not even arise, because that release performs no learning at all: a system that both learns and admits under a verifier is specified, not shipped.";

export const differentiationTranslationKeys = [
  ...heroDifferentiators,
  ...whatThisIsNot.flatMap((row) => [row.taken, row.answer]),
  whatThisIs,
  differentiationBoundary,
] as const;
