import { aiBasicsTranslationKeys } from "./aiBasics";

/**
 * The friendliest page on the site.
 *
 * Rule for every string in this file: a person with no technical background has
 * to understand it on the first read, out loud, without stopping. Short
 * sentences. No term that is not explained in the same breath. Nothing here may
 * claim more than the rest of the site claims — friendly is a matter of tone,
 * never of scope.
 *
 * The story is about change rather than about a single bad decision. That is
 * the situation the project is actually for: a rule or a source moves, and
 * somebody has to say afterwards which earlier conclusions are affected and why
 * the rest still stand.
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
    line: "An instruction, a procedure or a source of data changes.",
    detail:
      "Nothing dramatic. A threshold moves, a supplier is replaced, a rule is reworded. Work carries on as normal, and for a while nobody thinks about it.",
  },
  {
    number: "02",
    line: "A month later somebody asks which earlier conclusions are affected.",
    detail:
      "And why the ones still standing can be treated as correct. It may be an auditor, a regulator, a customer, or your own management. The question is the same every time.",
  },
  {
    number: "03",
    line: "The usual answer is short.",
    detail: "The system decided. Or: a specialist looked at it. Both are true, and neither is an answer to the question.",
  },
  {
    number: "04",
    line: "The trouble surfaces later.",
    detail:
      "You have to reconstruct not only the outcome but the grounds: what was known then, what was permitted, and why that route rather than another. It costs senior people's time, arguments, and repeated checks — a price that is rarely counted separately, and the most unpleasant one.",
  },
];

export type PlainIdea = {
  title: string;
  text: string;
};

/** Three things, said the way you would say them out loud. */
export const plainIdea: readonly PlainIdea[] = [
  {
    title: "It remembers what a decision was made of",
    text: "Not just the outcome. What was known, what was permitted at that moment, and which of the permitted things was chosen.",
  },
  {
    title: "If the inputs change, it helps you see what may be affected",
    text: "You look for the part that was actually touched, rather than reviewing everything again because nobody can tell which parts were.",
  },
  {
    title: "If the grounds are thin, it says so instead of guessing",
    text: "It does not fill the gap with something plausible. It says plainly that this cannot be decided now, and that refusal is written down like any other result.",
  },
];

export type UsualVsHere = {
  label: string;
  text: string;
};

/** How it usually goes, and how it goes here. Two blocks, no scorekeeping. */
export const usualVsHere: readonly UsualVsHere[] = [
  {
    label: "Usually",
    text: "A system is shown a great many examples, and while it looks at them it quietly adjusts millions of internal numbers until the answers come out about right. Those numbers are what it learned. None of them means anything on its own, so when you ask why, the honest reply is often that this is how it came out inside.",
  },
  {
    label: "Here",
    text: "There are no such numbers at all. What this system learns, it writes down: this thing is related to that one, this check is worth doing first, this structure held up and this one was contradicted. You can read the list, and you can cross one line out without disturbing the rest of it.",
  },
];

/** The second difference, which is the one the project is actually for. */
export const usualVsHereChange =
  "There is one more difference. When something changes, the usual route often means a large re-check. Here it is easier to look only for the part that was touched, and to show not just the result but the grounds it rests on.";

export type NotChatbotLine = string;

/** Not a chatbot — said without claiming to be better than one. */
export const notChatbot: readonly NotChatbotLine[] = [
  "GALO does not hold a conversation and does not write long answers in the usual sense. It sits perfectly well next to an ordinary chatbot: one proposes options, the other helps check which of them may be accepted and how that will be explained later.",
  "We are not saying it is cleverer, safer or faster. We simply have not measured that. We are saying something else: this work can be checked afterwards from the record. With most familiar systems that is hard to do.",
  "And the important part: there are no customers, no pilots and no deployments yet. There is a working programme and a clear set of rules it operates by.",
];

export type NeighbourNote = {
  neighbour: string;
  text: string;
};

/** The four things a reader is most likely to be thinking of. */
export const neighbourNotes: readonly NeighbourNote[] = [
  {
    neighbour: "Chatbots",
    text: "Good at talking to a person. Weaker at showing the hard boundary: what exactly was permitted at the moment of the decision.",
  },
  {
    neighbour: "Regulations and rulebooks",
    text: "They have recorded what is allowed for a long time. They help less when the world has changed and earlier conclusions need revisiting one by one.",
  },
  {
    neighbour: "Knowledge bases and reference systems",
    text: "They store facts and relations. They rarely close the whole loop: what changed, what it affected, and why the decision still holds.",
  },
  {
    neighbour: "Control layers over somebody else's AI",
    text: "They constrain a model that is already finished. GALO has a different job: the state of the decision and checking it are the main work rather than a wrapper around it.",
  },
];

/** Why the list has to be written first, in one image. */
export const fromTheList: readonly string[] = [
  "The easiest way to picture it is a notebook with every permitted action written out in advance.",
  "The system cannot invent a new line just because something looks similar. It chooses from what is already permitted, and leaves a record of having done so.",
  "That is exactly why you can come back later and check the decision against the trail rather than against somebody's memory.",
];

export type HaveNotLine = {
  line: string;
  detail: string;
};

/** What there is, and what there is not. The part most sites leave out. */
export const whatThereIs: readonly HaveNotLine[] = [
  {
    line: "A working programme",
    detail: "Narrow on purpose: it handles two kinds of request and takes one step at a time. That is genuinely all of it.",
  },
  {
    line: "A record you can reconstruct the decision from",
    detail: "Complete enough that a stranger can repeat the same steps a year later and land on the same result, without asking us anything.",
  },
  {
    line: "Learning that helps it search faster, and never gets the right to replace a rule",
    detail: "It may reorder the work. It cannot rewrite the decision that was finally admitted.",
  },
  {
    line: "Failures published next to the results that worked",
    detail: "One benchmark refused to be learned at all, and it is published beside the ones that were.",
  },
];

export const whatThereIsNot: readonly HaveNotLine[] = [
  {
    line: "A deployment at a real industrial site",
    detail: "Nobody is running this in production anywhere, and nothing on this site should be read as saying otherwise.",
  },
  {
    line: "Customers or pilots",
    detail: "No revenue, no investment raised, no pilot, no agreement with anybody. Research stage, and nothing else.",
  },
  {
    line: "A promise that it is cleverer than familiar AI",
    detail: "That comparison has not been run, by us or by anybody else, so the words are not used here.",
  },
  {
    line: "The right to operate equipment on its own",
    detail: "Nothing here authorises a command to a machine, a controller or a robot. The first mode is read-only and advisory.",
  },
];

/** The whole page in four sentences. */
export const inShort: readonly string[] = [
  "Ordinary AI learns by changing millions of hidden numbers. This one learns by changing things that are written down.",
  "GALO is not there to give you a good-looking answer.",
  "It is there for a different job: when rules or data change, find the decisions that are affected and show the grounds on which they are still permitted — or say honestly that the grounds are thin.",
  "Today it is a working prototype, not a finished deployment.",
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
  ...openingStory.flatMap((beat) => [beat.line, beat.detail]),
  ...plainIdea.flatMap((idea) => [idea.title, idea.text]),
  ...usualVsHere.flatMap((entry) => [entry.label, entry.text]),
  usualVsHereChange,
  ...notChatbot,
  ...neighbourNotes.flatMap((entry) => [entry.neighbour, entry.text]),
  ...fromTheList,
  ...whatThereIs.flatMap((entry) => [entry.line, entry.detail]),
  ...whatThereIsNot.flatMap((entry) => [entry.line, entry.detail]),
  ...inShort,
  ...jargonTranslations.flatMap((row) => [row.jargon, row.plain]),
  ...aiBasicsTranslationKeys,
] as const;
