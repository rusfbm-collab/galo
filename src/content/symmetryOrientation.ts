/**
 * The opening of the symmetry chapter, written for the reader the rest of it
 * loses.
 *
 * The chapter that follows is about automorphism groups, orbits, stabilizers
 * and cross-level maps, and it is written in the notation those things are
 * normally written in. That is the right register for a reviewer checking the
 * work, and the wrong one for everybody else — a reader who does not already
 * know what an automorphism is cannot start there, and until now this page gave
 * them nowhere else to start.
 *
 * Rule for every string in this file: no symbol, no operation, no term that is
 * not explained in the same sentence. One idea — a renaming that leaves the
 * rules where they were — carried far enough that the formal sections below
 * read as detail rather than as a different subject.
 */

export type SymmetryBasic = {
  number: string;
  title: string;
  plain: string;
};

/**
 * The whole idea in four steps. Nothing here is specific to this project: this
 * is what the word means anywhere it is used, said without notation.
 */
export const symmetryBasics: readonly SymmetryBasic[] = [
  {
    number: "01",
    title: "Start by renaming everything",
    plain:
      "Take the positions the system can be in and give them new names, by one fixed rule applied to all of them at once. Nothing about the system changes while you do this — you are relabelling the boxes, not moving what is inside them.",
  },
  {
    number: "02",
    title: "Then redo the tables and compare",
    plain:
      "Work out the whole table of results again using the new names, and lay it next to the original. Either it comes out identical, cell for cell, or somewhere a cell has moved. There is no third outcome, and finding out is counting rather than judgement.",
  },
  {
    number: "03",
    title: "If nothing moved, the renaming was a symmetry",
    plain:
      "A renaming that leaves every rule exactly where it was is a symmetry. One that moves even a single cell is not, and the single cell is enough — this is the rare kind of question where one counterexample settles it completely.",
  },
  {
    number: "04",
    title: "What that is worth",
    plain:
      "Two situations related by a symmetry have the same shape, so anything proved about one holds for the other and does not have to be checked twice. That is the whole payoff, and the rest of this chapter is care about when it applies.",
  },
] as const;

export type SymmetryCheck = {
  /** The renaming rule, in words. */
  rule: string;
  /** One cell before the renaming, in words rather than notation. */
  before: string;
  /** The same cell after it. */
  after: string;
  verdict: string;
  isSymmetry: boolean;
};

/**
 * Two renamings, worked. One survives and one does not, and the one that fails
 * is shown failing on a specific cell rather than described as failing.
 */
export const symmetryWorkedChecks: readonly SymmetryCheck[] = [
  {
    rule: "At level five, rename every position by doubling its number and wrapping round: the first stays first, the second becomes the third, the third becomes the fifth, and so on.",
    before: "In the original table, combining the second position with the fourth lands on the fifth.",
    after:
      "After the renaming those two are the third and the second, and combining them lands on the fifth as well — the same place the original answer was renamed to.",
    verdict:
      "Every one of the twenty-five cells behaves like that, in both tables. Nothing moved, so this renaming is a symmetry.",
    isSymmetry: true,
  },
  {
    rule: "At the same level, shift every position up by one instead: the first becomes the second, the second becomes the third, and the last wraps round to the front.",
    before:
      "The first position is the one both rules treat as special — it is the starting point, and the second of the two rules has a clause that applies only to it.",
    after:
      "After the shift, the position sitting in that special slot is a different one, and the clause now fires on it.",
    verdict:
      "That is a cell that moved, so this renaming is not a symmetry. It is a perfectly good shuffle — it simply does not preserve the rules, which is the only thing being asked.",
    isSymmetry: false,
  },
] as const;

export type SymmetryLimit = {
  claim: string;
  correction: string;
};

/**
 * The three readings this chapter is most often given and does not support. The
 * formal sections state these in their own vocabulary; here they are in words.
 */
export const symmetryLimits: readonly SymmetryLimit[] = [
  {
    claim: "Same shape means the same thing.",
    correction:
      "It does not. A symmetry says two situations are structurally interchangeable. It says nothing about where either came from, who is allowed to act on it, or what it means — and none of those travel along with the renaming.",
  },
  {
    claim: "These symmetries are the symmetries of something physical.",
    correction:
      "They are not. Everything here is a statement about a finite table of names. Nothing in it refers to space, time, direction, or any physical quantity, and a formula resembling one from physics is a resemblance rather than a claim.",
  },
  {
    claim: "Counting the shapes is the same as counting what matters.",
    correction:
      "Two situations can share a shape and still have to be treated separately, because the record keeps what the shape does not: which of them actually happened, and under what authority. Grouping by shape is a way to organise checking, not a way to merge records.",
  },
] as const;

export const symmetryOrientationTranslationKeys = [
  ...symmetryBasics.flatMap((entry) => [entry.title, entry.plain]),
  ...symmetryWorkedChecks.flatMap((entry) => [entry.rule, entry.before, entry.after, entry.verdict]),
  ...symmetryLimits.flatMap((entry) => [entry.claim, entry.correction]),
] as const;
