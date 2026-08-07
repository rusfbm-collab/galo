import { aiBasicsTranslationKeys } from "./aiBasics";

/**
 * The friendliest page on the site.
 *
 * Rule for every string in this file: a person with no technical background has
 * to understand it on the first read, out loud, without stopping. Short
 * sentences. No term that is not explained in the same breath. Nothing here may
 * claim more than the rest of the site claims — friendly is a matter of tone,
 * never of scope.
 */

export type StoryBeat = {
  number: string;
  line: string;
  detail: string;
};

/** Four beats of an ordinary situation everybody has been on one side of. */
export const openingStory: readonly StoryBeat[] = [
  {
    number: "01",
    line: "A program made a decision about you.",
    detail:
      "Your application was declined. A payment was held. A shipment was rerouted. Nobody typed that decision by hand — a piece of software made it, and it moved on to the next one.",
  },
  {
    number: "02",
    line: "Six months later, somebody asks why.",
    detail: "Maybe it is you. Maybe it is an inspector, a court, or your own boss. The question is always the same.",
  },
  {
    number: "03",
    line: "The person you ask opens the log.",
    detail:
      "The log says what happened: declined, at 14:32. It does not say what the program was allowed to do that day, or why it picked this option and not the other one.",
  },
  {
    number: "04",
    line: "So nobody can answer. Not because they are hiding something.",
    detail:
      "They genuinely do not know. The information was never written down, and by now the program has been updated twice and the people who built it have moved on.",
  },
];

export type PlainIdea = {
  title: string;
  text: string;
};

export const plainIdea: readonly PlainIdea[] = [
  {
    title: "We make the program write its options down first",
    text: "Before it does anything, it lists every action it is allowed to take. Not a description in words — an actual list. If something is not on the list, it cannot happen. Not because it is forbidden, but because there is nowhere for it to come from.",
  },
  {
    title: "Then it can only pick from that list",
    text: "The program does not invent a new option halfway through. It picks one of the ones already written down, and the reason it picked that one is recorded together with the choice.",
  },
  {
    title: "And every step leaves a note anyone can re-read",
    text: "Not a log line saying what happened. A note complete enough that a stranger can repeat the same steps a year later and land on exactly the same result, without asking us anything.",
  },
];

export type Comparison = {
  everyday: string;
  everydayText: string;
  ours: string;
  oursText: string;
};

export const timetableComparison: Comparison = {
  everyday: "Asking someone who travels a lot",
  everydayText:
    "You will usually get a good answer, and quickly. But if the answer turns out wrong, there is nothing to check — you can only ask again and hope.",
  ours: "Looking at the timetable",
  oursText:
    "The timetable is duller and much smaller. It covers only the trains that exist. But you can point at a line, and so can anybody who disagrees with you.",
};

export type ChangeCard = {
  title: string;
  text: string;
};

export const whatChanges: readonly ChangeCard[] = [
  {
    title: "You can check it",
    text: "Not sample it, not test it here and there — go through every possibility one by one, because there is a fixed number of them and the number is small enough to finish.",
  },
  {
    title: "You can repeat it",
    text: "Run the same thing on a different computer next year and get the same answer, down to the last character.",
  },
  {
    title: "You can argue about it properly",
    text: "If you disagree, you can point at the exact line you disagree with. That turns an argument into something that can actually end.",
  },
];

export type HonestLine = {
  line: string;
  detail: string;
};

/** The part most sites leave out. Written first, deliberately. */
export const honestAdmissions: readonly HonestLine[] = [
  {
    line: "It is small. Much smaller than it sounds.",
    detail:
      "Today the working part handles two kinds of request and takes one step at a time. That is genuinely all. Everything bigger is written down as a plan, and we say so wherever it comes up.",
  },
  {
    line: "Nobody outside the project has checked it yet.",
    detail:
      "All the numbers on this site are recalculated by our own code. That is honest, but it is not the same as independent — and we would rather you knew that from us.",
  },
  {
    line: "There is no product, no customer, and no money coming in.",
    detail: "No revenue, no investment raised, no pilot, no agreement with anybody. Research stage, and nothing else.",
  },
  {
    line: "It does not replace the chatbots you have used.",
    detail:
      "It cannot write, answer questions, or hold a conversation. It is a different kind of thing entirely, built for one narrow job.",
  },
  {
    line: "We have not measured that it helps anyone.",
    detail:
      "That test has not been run, by us or by anybody else. Until it is, we do not say the words — and you should treat anyone who does say them with suspicion.",
  },
];

export type Translation = {
  jargon: string;
  plain: string;
};

/** For readers who go on to the rest of the site and meet the vocabulary there. */
export const jargonTranslations: readonly Translation[] = [
  {
    jargon: "Cayley table",
    plain:
      "A table like the times table, but for a rule other than multiplication. Pick a row, pick a column, read the answer where they cross.",
  },
  {
    jargon: "Finite universe",
    plain:
      "The complete list of things the program is allowed to do, written before it starts. Nothing gets added to it later.",
  },
  {
    jargon: "Descriptor",
    plain: "One entry on that list. One possible action.",
  },
  {
    jargon: "State / position",
    plain: "Where the program currently stands. Like the square your piece is on in a board game.",
  },
  {
    jargon: "Level (L2, L3, … L7)",
    plain: "How many different squares there are. More squares means finer distinctions and more to keep track of.",
  },
  {
    jargon: "Receipt",
    plain:
      "The note left after a step: what was checked, what ran, what came out. The thing you would hand to somebody who asks.",
  },
  {
    jargon: "Replay",
    plain:
      "Doing the same thing again from the note and getting the same answer. If it comes out different, something is wrong and you know where to look.",
  },
  {
    jargon: "Boundary",
    plain:
      "An honest line saying where our claim stops. Past that line we do not know, and we say so instead of staying quiet.",
  },
  {
    jargon: "PASS / NOT PROVEN",
    plain:
      "Passed a specific check, or nobody has established it here. The second one does not mean it is false — it means nothing has been shown either way.",
  },
  {
    jargon: "Current V4 / Target",
    plain:
      "What runs today, versus what is only a plan. We keep them apart everywhere, because mixing them is how people get misled.",
  },
];

export const plainWordsTranslationKeys = [
  ...aiBasicsTranslationKeys,
  ...new Set([
    ...openingStory.flatMap((beat) => [beat.line, beat.detail]),
    ...plainIdea.flatMap((entry) => [entry.title, entry.text]),
    timetableComparison.everyday,
    timetableComparison.everydayText,
    timetableComparison.ours,
    timetableComparison.oursText,
    ...whatChanges.flatMap((entry) => [entry.title, entry.text]),
    ...honestAdmissions.flatMap((entry) => [entry.line, entry.detail]),
    ...jargonTranslations.flatMap((entry) => [entry.jargon, entry.plain]),
  ]),
] as const;
