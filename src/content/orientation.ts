/**
 * The opening of the theory chapter, written for the reader the rest of the
 * chapter loses: somebody who has to decide whether this is worth funding,
 * buying, or approving, and who will not work through the algebra to find out.
 *
 * Rule for every string in this file: no symbol, no operation, no term that is
 * not explained in the same sentence. The claims are the same claims made
 * elsewhere on the site — only the vocabulary changes.
 */

export type BridgeStep = {
  number: string;
  /** What has to be true, stated as a requirement rather than a result. */
  need: string;
  /** What that requirement forces. */
  follows: string;
  /** The tempting alternative, and the exact reason it does not work. */
  insteadOf: string;
};

/**
 * Why there is any mathematics on this site at all. Each step is forced by the
 * one above it, and each names the ordinary-looking alternative that fails.
 */
export const mathematicsBridge: readonly BridgeStep[] = [
  {
    number: "01",
    need: "Somebody has to be able to ask why, and get the same answer twice.",
    follows:
      "Not a plausible answer. The same answer — from the engineer today, from an auditor next year, and from whoever inherits the system after both of them have left.",
    insteadOf:
      "Keeping a longer log. A longer log records more of what happened. It still records nothing about what the program was allowed to do that day, which is the half of the question that matters.",
  },
  {
    number: "02",
    need: "So the list of things the program could have done has to exist before it runs.",
    follows:
      "Written down in advance, and complete: not the things it did, and not the things somebody remembers considering, but every option that was on the table at that moment.",
    insteadOf:
      "Reconstructing the list afterwards. A list assembled after the fact is an argument about the past. It can be made to fit whatever happened, which is exactly why nobody has to believe it.",
  },
  {
    number: "03",
    need: "A list written in advance has to be finite, and every entry has to have a name.",
    follows:
      "Finite, so that reading all of it is a task that ends. Named, so that two people reading the same record six months apart resolve it the same way.",
    insteadOf:
      "Describing each state in a sentence. A sentence has more than one reading, and the readings drift apart the moment the people who wrote it are no longer in the room.",
  },
  {
    number: "04",
    need: "A finite list of named things, plus one rule for combining two of them, is a table.",
    follows:
      "That table is the whole object. Everything else on this site — the counts, the receipts, the boundaries — is something read off it or proved about it.",
    insteadOf:
      "Nothing. This is the point where the requirements run out and the mathematics begins, and it is the only reason there is any mathematics here.",
  },
] as const;

export type PlainWord = {
  /** The term page this word links to; must exist in termPages. */
  term: string;
  plain: string;
  whereYouMeetIt: string;
};

/** The six words the rest of the chapter uses constantly and never re-explains. */
export const chapterVocabulary: readonly PlainWord[] = [
  {
    term: "Cayley table",
    plain:
      "A grid of ready answers. Pick a row, pick a column, read the cell where they cross. Nothing is worked out while you wait — every answer is already written in.",
    whereYouMeetIt: "Every grid in this chapter is one of these.",
  },
  {
    term: "Pole",
    plain:
      "One position out of a declared list, written P0, P1, P2 and so on. It is a name, not a quantity: P2 is not larger than P1, and no sentence on this site treats it as though it were.",
    whereYouMeetIt: "Anywhere a state is shown.",
  },
  {
    term: "Level",
    plain:
      "How many positions are available. Level three has three of them, level seven has seven. Choosing a level is choosing how many cases you are able to tell apart at all.",
    whereYouMeetIt: "Written L1 through L7.",
  },
  {
    term: "PLUS",
    plain:
      "The first of two rules for combining two positions. It counts forward and wraps around at the end, the way a clock face returns to twelve.",
    whereYouMeetIt: "The first of the two grids, everywhere they appear in pairs.",
  },
  {
    term: "STAR",
    plain:
      "The second rule. Identical to the first, with one exception: one position swallows everything. Start a step there and you finish there, whatever the other input was.",
    whereYouMeetIt: "The second grid, and the reason most of the interesting properties exist.",
  },
  {
    term: "Boundary",
    plain:
      "A sentence saying where a claim stops. When you meet one, it is not the project hedging — it is the edge of what was actually checked, written down so you do not have to guess it.",
    whereYouMeetIt: "At the end of most sections, in its own frame.",
  },
] as const;

export type Takeaway = {
  /** Something the reader will be able to say, in the first person. */
  claim: string;
  /** The operation that settles it, cheap enough to do while reading. */
  check: string;
  href: string;
};

/** What the chapter is for, stated as four sentences the reader will own. */
export const afterThisChapter: readonly Takeaway[] = [
  {
    claim: "Everything published here rests on one finite table, and I have looked at it.",
    check: "Open the two grids and read a single cell. That is the whole reading procedure, at every level.",
    href: "/theory#cayley-first",
  },
  {
    claim: "The number 560 is a count, not an estimate, and I know what it counts.",
    check: "Add the seven per-level numbers yourself. They are printed, and they come to 560.",
    href: "/theory#count-560",
  },
  {
    claim: "I can tell a theorem apart from a running system apart from a plan.",
    check: "Take any statement on this site and find which of the three shelves it was placed on.",
    href: "/theory#evidence-language",
  },
  {
    claim: "I know what this project does not claim, because it is listed rather than left out.",
    check: "Read the six non-claims. Every one of them begins with the word No.",
    href: "/investors#not-claimed",
  },
] as const;

export const orientationTranslationKeys = [
  ...mathematicsBridge.flatMap((step) => [step.need, step.follows, step.insteadOf]),
  ...chapterVocabulary.flatMap((entry) => [entry.plain, entry.whereYouMeetIt]),
  ...afterThisChapter.flatMap((entry) => [entry.claim, entry.check]),
] as const;
