/**
 * The fourteen tables, and why fourteen small tables are enough to reason with.
 *
 * The mathematics page shows one table at a time in an explorer and derives
 * counts from them. What it never does is put all fourteen on one screen and
 * answer the question a reader actually arrives with: these are addition tables
 * for tiny sets — where does anything rich come from?
 *
 * That question has a real answer and it is not "they are big". They are not
 * big. The answer is that two laws were chosen out of an astronomical space and
 * then frozen, that one of them never loses information and the other loses it
 * on purpose, that the order of application changes the result so a program has
 * to be a tree, and that one pole can end a line of reasoning outright. This
 * module carries that argument and the worked traces that let a reader check
 * every step of it by hand.
 *
 * Rules for every string here. No number is written down that the mathematics
 * module can compute — the traces, the counts and the verdicts are all derived,
 * so a change to the laws moves this page instead of leaving it stale. Nothing
 * here claims the two chosen laws are the best ones; the claim is only that they
 * are fixed in advance and that anybody can count what they were chosen out of.
 */

import { applyGaloOperation, galoLevels, type GaloLevel, type GaloOperation } from "./mathematics";

export const cayleyEyebrow = "THE FOURTEEN TABLES";

export const cayleyHeadline = "Every step the engine can take is one cell in one of these tables.";

export const cayleyLead =
  "A Cayley table is the whole of a finite operation written out: one row and one column per element, and in every cell the element the operation returns. There is nothing hidden in it, because there is nowhere for anything to hide — a table with n rows has exactly n² cells and every one of them is filled in. GALO declares two such tables at each of seven levels, freezes them, and derives everything else from them. This page prints all fourteen, traces a worked calculation through each one, and then answers the question a reader is entitled to ask: where does anything rich come from, if the pieces are this small?";

export const cayleyLeadBoundary =
  "These tables are mathematics, not a result. They say exactly what the engine's steps are and nothing at all about whether the engine is useful to anybody.";

/* --------------------------------------------------- reading one table ---- */

export const readingEyebrow = "HOW TO READ ONE";

export const readingHeadline = "Row, column, cell. There is no third step.";

export const readingBody =
  "Take the left operand down the side and the right operand along the top; the cell where they meet is the result. That is the entire lookup, and it is why a step of GALO can be checked by a person with a printout and no software. The traces below each table do exactly that, one line at a time, so a reader who disagrees with a number can point at the line where the disagreement starts.";

export type ReadingStep = {
  number: string;
  title: string;
  text: string;
};

export const readingSteps: readonly ReadingStep[] = [
  {
    number: "01",
    title: "Find the row",
    text: "The left operand names the row. Under the site's naming this is the pole the run is standing on, and under STAR it is the one that decides whether the rest of the lookup happens at all.",
  },
  {
    number: "02",
    title: "Find the column",
    text: "The right operand names the column. This is the pole supplied to the step — the one an admitted candidate brought with it.",
  },
  {
    number: "03",
    title: "Read the cell",
    text: "The value in the cell is the result, and it is a member of the same set the operands came from. Nothing is rounded, nothing is sampled, and there is no second-best answer to fall back on.",
  },
];

/* ------------------------------------------------------- worked traces ---- */

export type TraceLine = {
  /** The expression as it stands after this line of the calculation. */
  expression: string;
  /** Why this line follows from the previous one. */
  because: string;
};

export type TableTrace = {
  /** A short name for what this trace demonstrates. */
  label: string;
  left: number;
  right: number;
  result: number;
  lines: readonly TraceLine[];
};

/**
 * The script for one PLUS lookup: add the two operands and wrap.
 *
 * There is one rule and no branch, which is the whole character of this law and
 * the reason the trace is three lines regardless of level.
 */
function plusTrace(level: GaloLevel, left: number, right: number): TableTrace {
  const sum = left + right;
  const result = applyGaloOperation("PLUS", level, left, right);
  return {
    label: sum >= level ? "a step that wraps past the end" : "a step inside the range",
    left,
    right,
    result,
    lines: [
      { expression: `P${left} ⊕ P${right}`, because: "Row {left}, column {right}." },
      {
        expression: `(${left} + ${right}) mod ${level}`,
        because: "PLUS at this level is addition modulo the size of the carrier.",
      },
      {
        expression: `${sum} mod ${level} = ${result}`,
        because:
          sum >= level
            ? "The sum ran past the last pole, so it wraps to the front. Nothing is lost in wrapping: the step can be undone by subtracting."
            : "The sum is already inside the carrier, so the wrap changes nothing here.",
      },
    ],
  };
}

/**
 * The script for one STAR lookup, in the two forms it can take.
 *
 * STAR asks a question before it computes, and which answer it gets decides
 * whether anything is computed at all. That branch is the whole difference
 * between the two laws, so it is drawn rather than described.
 */
function starTrace(level: GaloLevel, left: number, right: number): TableTrace {
  const result = applyGaloOperation("STAR", level, left, right);
  const absorbing = left === 0;
  const sum = left + right;
  return {
    label: absorbing ? "the row that ends the line" : "the row that steps on",
    left,
    right,
    result,
    lines: absorbing
      ? [
          { expression: `P${left} ★ P${right}`, because: "Row {left}, column {right}." },
          { expression: "left operand is P0?", because: "STAR asks this before it computes anything." },
          {
            expression: `yes → P0`,
            because:
              "P0 absorbs from the left. Whatever the column holds, the answer is P0, and the column was never consulted — which is how a single step can close a line of reasoning rather than continue it.",
          },
        ]
      : [
          { expression: `P${left} ★ P${right}`, because: "Row {left}, column {right}." },
          { expression: "left operand is P0?", because: "STAR asks this before it computes anything." },
          {
            expression: `no → (${left} + ${right}) mod ${level}`,
            because:
              "Outside the absorbing row STAR agrees with PLUS, which is why the two tables differ in exactly one row and nowhere else.",
          },
          { expression: `${sum} mod ${level} = ${result}`, because: "The same wrap as before, on the same carrier." },
        ],
  };
}

/**
 * Operands chosen so each trace shows something: a wrap where a wrap is
 * possible, and at the degenerate level the fact that there is nothing to
 * choose. Derived rather than listed, so adding a level cannot leave a hole.
 */
function plusOperands(level: GaloLevel): [number, number] {
  // The last pole plus one wraps to the first at every level above the
  // degenerate one, so the modulus is visible in the trace rather than implied.
  if (level === 1) return [0, 0];
  return [level - 1, 1];
}

function starOperands(level: GaloLevel): [number, number] {
  // Chosen so the stepping row lands somewhere other than P0. If both traces
  // ended on P0 a reader could not tell the two rules apart from the results.
  if (level === 1) return [0, 0];
  if (level === 2) return [1, 0];
  return [level - 1, 2];
}

export type TableEntry = {
  operation: GaloOperation;
  level: GaloLevel;
  /** What this particular table does that its neighbours do not. */
  reading: string;
  /** One trace for PLUS; two for STAR, because STAR has two rules. */
  traces: readonly TableTrace[];
};

const plusReadings: Record<number, string> = {
  1: "One pole, one cell, one possible answer. Nothing can be decided here, which is why this level carries control rather than content.",
  2: "The smallest table where a step can do something: P1 flips to P0 and back. This is a switch, and it is already enough to record a binary distinction.",
  3: "The first level where the wrap is visible in more than one place. Every row is the row above it shifted by one, which is what a cyclic group looks like written out.",
  4: "Even size, so the carrier splits cleanly in half and a step of two lands you exactly opposite. That halving is what makes the level-2 map into this one possible.",
  5: "Prime size, so every non-zero pole generates the whole carrier by repetition. There is no proper sub-cycle to get stuck in.",
  6: "The richest of the seven for structure: six splits by two and by three, so this level contains copies of both smaller cycles at once.",
  7: "Prime again, and the largest declared. Every non-zero step reaches everything, and nothing between the poles is left unreachable.",
};

const starReadings: Record<number, string> = {
  1: "The absorbing row is the only row, so at this level STAR and PLUS are the same one-cell table. The difference between the laws needs at least two poles to exist.",
  2: "The first table where the two laws part company: row P0 is flattened to P0 while row P1 still steps. One row lost, one row kept.",
  3: "Two rows step and one absorbs. From here on the table is not a group table at all — it has no two-sided identity and it cannot be undone.",
  4: "Three quarters of the table behaves like addition and one quarter of it does not. That asymmetry is what carries information: knowing the answer was P0 tells you something about the row.",
  5: "Four stepping rows against one absorbing row. The rank of a fixed-operand map drops by exactly one, and the poles that collapse together become indistinguishable from that step on.",
  6: "Six poles, one absorbing row, and both sub-cycles from the smaller levels still visible in the rest of the table.",
  7: "The largest declared table, and still only one row differs from PLUS. Almost all of the richness comes from that single row being there at all.",
};

export const cayleyTableEntries: readonly TableEntry[] = [
  ...galoLevels.map((level): TableEntry => {
    const [left, right] = plusOperands(level);
    return {
      operation: "PLUS",
      level,
      reading: plusReadings[level]!,
      traces: [plusTrace(level, left, right)],
    };
  }),
  ...galoLevels.map((level): TableEntry => {
    const [left, right] = starOperands(level);
    return {
      operation: "STAR",
      level,
      reading: starReadings[level]!,
      // The absorbing row first: it is the rule a reader has to meet to
      // understand why this table is not just addition again.
      traces: level === 1 ? [starTrace(level, 0, 0)] : [starTrace(level, 0, right), starTrace(level, left, right)],
    };
  }),
];

/* ------------------------------------------------- why this is not thin ---- */

export const richnessEyebrow = "WHY THIS IS RICH AND NOT JUST ARITHMETIC";

export const richnessHeadline = "Small tables, chosen and frozen, do more work than large ones left open.";

export const richnessLead =
  "The reasonable first reaction to these tables is that they are too small to matter. The size is not what does the work. Six properties are, and each one can be checked against the tables printed above rather than taken on trust.";

export type RichnessClaim = {
  number: string;
  claim: string;
  /** The mechanism, in one paragraph a first-time reader can follow. */
  mechanism: string;
  /** Where in the tables above a reader can see it for themselves. */
  check: string;
};

export const richnessClaims: readonly RichnessClaim[] = [
  {
    number: "01",
    claim: "Nothing composed ever leaves the set",
    mechanism:
      "Every cell of every table holds a member of the same carrier the operands came from. That is closure, and it is what makes a chain of steps finite in principle: a run can compose forever and never produce a value that has to be interpreted, approximated or rounded back in. There is no state outside the table for anything to fall into.",
    check:
      "Read any row of any table above and check that every entry is one of the poles named on its own axis. That is the whole of the property, and it holds in all fourteen.",
  },
  {
    number: "02",
    claim: "Two tables were chosen out of an astronomical space, and then frozen",
    mechanism:
      "Nothing forces a table to be addition. Every one of the n² cells could independently hold any of the n poles, so at level 7 there are 7⁴⁹ possible tables — past 10⁴¹. GALO declares two per level and freezes them before anything runs. The richness is not in the tables being large; it is in the choice being made once, in public, and never adjusted afterwards to fit a result.",
    check:
      "The count of possible tables per level is printed beside each one. Compare it to the two that were declared, and note that the comparison is the argument: a system that could pick its table after seeing the data would have no claim to make.",
  },
  {
    number: "03",
    claim: "One law never loses information; the other loses it on purpose",
    mechanism:
      "Fix one operand of PLUS and you get a permutation of the carrier — every pole lands somewhere different, so the step can always be undone and nothing has been decided. Fix one operand of STAR and poles collapse together. That collapse is the informative part: a step that can merge two possibilities is a step that can rule one out. A system with only the first law could never narrow anything; a system with only the second could never be reversed.",
    check:
      "Take any row of a PLUS table and confirm every entry appears exactly once. Then take row P0 of the STAR table beside it and confirm every entry is the same. Two rows, two completely different behaviours, on the same carrier.",
  },
  {
    number: "04",
    claim: "The order of application changes the answer, so a program is a tree",
    mechanism:
      "PLUS is associative: bracket three operands either way and the result is the same, so the brackets are decoration. STAR is not. Under STAR, (a ★ b) ★ c and a ★ (b ★ c) can land on different poles, which means a list of operands does not name a result — only a tree does. That is why the syntax tree is carried in the record rather than reconstructed, and why a stranger can rebuild the arithmetic exactly.",
    check:
      "Pick three poles at level 6 and evaluate both bracketings against the tables above. Where the left bracketing passes through P0 and the right one does not, the two answers differ, and the difference is visible in two lookups.",
  },
  {
    number: "05",
    claim: "One pole can end a line of reasoning outright",
    mechanism:
      "P0 absorbs from the left under STAR: whatever the column holds, the answer is P0 and the column is never consulted. In an algebra that is one row of a table. In a run it is a terminal — a step that closes a branch rather than continuing it, in a way that is decided by the declared law rather than by a heuristic that stopped early.",
    check:
      "Compare row P0 of any STAR table with row P0 of the PLUS table at the same level. One is flat and the other is a permutation, and that single row is where almost all of the difference between the two towers lives.",
  },
  {
    number: "06",
    claim: "The seven levels interlock, and the joins have real obstructions",
    mechanism:
      "The levels are not seven copies of one idea. A map from one level into another has to send P0 to P0 and commute with both laws, and that is only possible when the sizes divide: level 2 embeds into 4 and 6, level 3 into 6, and level 3 into 5 not at all. So the tower has a shape, some pairs are joined and others are provably not, and a claim that transports across a join that does not exist fails rather than degrades.",
    check:
      "Level 3 has 3 poles and level 5 has 5; no scaled map carries the first into the second, and the site publishes that as a boundary rather than as an approximation.",
  },
];

export const richnessClose =
  "Fourteen tables, two operand orientations and seven levels give 560 typed coordinates — the whole address space a prediction is allowed to route through. The tables are small on purpose. What they buy is that the space they generate is finite, declared in advance, and checkable by a person with a printout.";

export const cayleyTranslationKeys = [
  cayleyEyebrow,
  cayleyHeadline,
  cayleyLead,
  cayleyLeadBoundary,
  readingEyebrow,
  readingHeadline,
  readingBody,
  ...readingSteps.flatMap((step) => [step.title, step.text]),
  ...cayleyTableEntries.flatMap((entry) => [
    entry.reading,
    ...entry.traces.flatMap((trace) => [trace.label, ...trace.lines.map((line) => line.because)]),
  ]),
  richnessEyebrow,
  richnessHeadline,
  richnessLead,
  ...richnessClaims.flatMap((claim) => [claim.claim, claim.mechanism, claim.check]),
  richnessClose,
] as const;
