/**
 * One picture per term in the theory chapter.
 *
 * The concept cards answer seven questions in words and hold up well, but a
 * reader meeting "left zero" or "typed coordinate" for the first time is being
 * asked to build the picture themselves out of a sentence. For an algebra that
 * is genuinely small enough to draw, that is a wasted opportunity: the object
 * fits on the screen, so it should be on the screen.
 *
 * Twenty terms could mean twenty bespoke diagrams and twenty ways to drift. It
 * does not, because these terms are about three things — a set of poles, a
 * table, or an ordered arrangement of named parts — so three renderers cover
 * all of them. Every table figure is built from the same laws the rest of the
 * site computes with, so a picture cannot disagree with the definition beside
 * it.
 *
 * Rules for every string here. The caption says what the picture shows, not
 * what the term means; the definition is already in the card, and repeating it
 * under the drawing would be two versions of one sentence to keep in step.
 */

import { galoLevels, type GaloLevel, type GaloOperation } from "./mathematics";

/** Which part of a Cayley table the drawing is pointing at. */
export type TableHighlight =
  | { kind: "none" }
  | { kind: "cell"; row: number; column: number }
  | { kind: "row"; row: number }
  | { kind: "column"; column: number };

export type TermFigureSpec =
  /** A Cayley table with one region marked. */
  | {
      kind: "table";
      operation: GaloOperation;
      level: GaloLevel;
      highlight: TableHighlight;
      caption: string;
    }
  /**
   * One or more rows of poles. Marks are per-pole so the same renderer draws a
   * carrier, a single named pole, a partition into blocks, and the ladder of
   * levels.
   */
  | {
      kind: "poles";
      rows: readonly { label: string; size: number; marks?: Readonly<Record<number, string>> }[];
      caption: string;
    }
  /**
   * Named parts in an order. `arrow` reads as a pipeline, `stack` as layers,
   * and `pair` as a list of name/value rows.
   */
  | {
      kind: "flow";
      layout: "arrow" | "stack" | "pair";
      nodes: readonly { value: string; label: string }[];
      caption: string;
    };

/**
 * Level 5 is the default table to draw: large enough that a row is visibly a
 * permutation and small enough to read at a glance on a phone.
 */
const DRAWN_LEVEL: GaloLevel = 5;

export const termFigures: Readonly<Record<string, TermFigureSpec>> = {
  Carrier: {
    kind: "poles",
    rows: [{ label: "Q_5", size: 5 }],
    caption: "The carrier of level 5, drawn in full. Five poles, and there is nothing else in the set.",
  },

  Pole: {
    kind: "poles",
    rows: [{ label: "Q_5", size: 5, marks: { 2: "is-marked" } }],
    caption:
      "One pole out of the five. It is a position with a name, not a quantity — P2 is not larger than P1, it is simply somewhere else.",
  },

  Level: {
    kind: "poles",
    rows: galoLevels.map((level) => ({ label: `Q_${level}`, size: level })),
    caption:
      "Seven levels, drawn at their real sizes. A level is fixed by how many poles it holds, and nothing at one level can enter the table of another without a declared map.",
  },

  "Binary operation": {
    kind: "table",
    operation: "PLUS",
    level: DRAWN_LEVEL,
    highlight: { kind: "cell", row: 3, column: 4 },
    caption:
      "Two operands in, one result out. The marked cell is where row P3 and column P4 meet, and the value there is the whole of what the operation returns.",
  },

  "Modulo n": {
    kind: "poles",
    rows: [{ label: "3 ⊕ 4", size: 5, marks: { 3: "is-from", 4: "is-step", 2: "is-marked" } }],
    caption:
      "Counting four places on from P3 runs past the end of the carrier and continues from the front, landing on P2. That wrap is the whole of the modulus.",
  },

  "Cayley table": {
    kind: "table",
    operation: "PLUS",
    level: DRAWN_LEVEL,
    highlight: { kind: "none" },
    caption:
      "The operation written out with nothing left implicit: one row and one column per pole, and every one of the twenty-five cells filled in.",
  },

  PLUS: {
    kind: "table",
    operation: "PLUS",
    level: DRAWN_LEVEL,
    highlight: { kind: "row", row: 2 },
    caption:
      "Every row of a PLUS table holds each pole exactly once. Fix the left operand and the step is a relabelling of the carrier: nothing is merged, so nothing is lost.",
  },

  STAR: {
    kind: "table",
    operation: "STAR",
    level: DRAWN_LEVEL,
    highlight: { kind: "row", row: 0 },
    caption:
      "The same carrier under the second law. Four rows behave exactly as PLUS does; the marked one does not, and that single row is the whole difference between the two towers.",
  },

  "Left zero": {
    kind: "table",
    operation: "STAR",
    level: DRAWN_LEVEL,
    highlight: { kind: "row", row: 0 },
    caption:
      "P0 on the left absorbs whatever it meets: the entire row is P0, so the column was never consulted. This is what lets one step end a line of reasoning.",
  },

  "Right-neutral element": {
    kind: "table",
    operation: "STAR",
    level: DRAWN_LEVEL,
    highlight: { kind: "column", column: 0 },
    caption:
      "Read down the P0 column and every entry is the pole it started from — except the first. Neutral on one side and absorbing on the other is exactly why this is not a group.",
  },

  "Source state": {
    kind: "table",
    operation: "PLUS",
    level: DRAWN_LEVEL,
    highlight: { kind: "row", row: 3 },
    caption:
      "The source is the pole the run is standing on, and it names the row. Everything the step can reach from here is in this one line of the table.",
  },

  "Active pole": {
    kind: "table",
    operation: "PLUS",
    level: DRAWN_LEVEL,
    highlight: { kind: "column", column: 3 },
    caption:
      "The active pole is what an admitted candidate supplies, and it names the column. Hold it still and the whole table collapses to this one strip.",
  },

  "Typed coordinate": {
    kind: "flow",
    layout: "pair",
    nodes: [
      { value: "L5", label: "which level, and so which carrier" },
      { value: "STAR_LEFT", label: "which law, and which axis the source occupies" },
      { value: "P3", label: "the source pole" },
      { value: "P4", label: "the active pole" },
    ],
    caption:
      "An address in four parts. Give all four and exactly one cell of one table is named; leave any of them out and nothing is named at all.",
  },

  "Typed catalogue count": {
    kind: "flow",
    layout: "arrow",
    nodes: [
      { value: "140", label: "ordered pairs of poles, summed over seven levels" },
      { value: "280", label: "× two laws" },
      { value: "560", label: "× two operand orientations" },
    ],
    caption:
      "Two multiplications and nothing else. The catalogue is what an address may point at, and it is arrived at rather than declared.",
  },

  Receipt: {
    kind: "flow",
    layout: "pair",
    nodes: [
      { value: "what was asked", label: "the row that was read, and the split it came from" },
      { value: "what was possible", label: "the closed set of answers, digested in advance" },
      { value: "what was taken", label: "the published outcome, or the boundary that replaced it" },
      { value: "why it was allowed", label: "the three conditions, each recorded as met or missing" },
    ],
    caption:
      "One record per evaluated row, written whether the row was answered or refused. A row cannot leave the denominator by producing nothing.",
  },

  Boundary: {
    kind: "flow",
    layout: "arrow",
    nodes: [
      { value: "one row", label: "read from the sealed split" },
      { value: "three conditions", label: "the right to answer, a learned structure, a typed route" },
      { value: "answer · or · boundary", label: "all three held, or one did not and the cause is named" },
    ],
    caption:
      "A boundary is an outcome, not an absence of one. It says which of the three conditions was missing, which is a thing a reader can argue with.",
  },

  "Formal, current, and target layers": {
    kind: "flow",
    layout: "stack",
    nodes: [
      { value: "FORMAL", label: "the tables and everything derived from them — true on paper, independent of any run" },
      {
        value: "CURRENT",
        label: "what the public runs exercise — a bounded step, measured and published with its scope",
      },
      {
        value: "TARGET",
        label: "the wider loop the architecture is built around — declared, and not in the measured path",
      },
    ],
    caption:
      "Three layers that are never blended. A claim carries the label of the layer it belongs to, so nothing borrows the standing of a layer below it.",
  },

  "Symbol legend": {
    kind: "flow",
    layout: "pair",
    nodes: [
      { value: "Q_n", label: "the carrier at level n" },
      { value: "P_i", label: "the pole at position i" },
      { value: "⊕", label: "PLUS, addition modulo the level" },
      { value: "★", label: "STAR, the same addition with an absorbing first row" },
    ],
    caption: "Four symbols carry almost every formal line on this page. Nothing on the site uses a fifth silently.",
  },

  "Residue class": {
    kind: "poles",
    rows: [
      {
        label: "Q_6 mod 3",
        size: 6,
        marks: { 0: "is-block-a", 3: "is-block-a", 1: "is-block-b", 4: "is-block-b", 2: "is-block-c", 5: "is-block-c" },
      },
    ],
    caption:
      "Six poles sorted into three blocks by what they leave on division by three. Under PLUS the blocks behave as one; under STAR the block holding P0 does not.",
  },

  "One evaluated row, step by step": {
    kind: "flow",
    layout: "arrow",
    nodes: [
      { value: "01", label: "read one row from the split that was sealed until now" },
      { value: "02", label: "the answer set, the learned state and the policy are already frozen" },
      { value: "03", label: "rank the whole answer set; the ranking alone is never published" },
      { value: "04", label: "buy the three rights, or the row ends as a boundary" },
      { value: "05", label: "run the typed route against the frozen tables" },
      { value: "06", label: "write one receipt, either way" },
    ],
    caption:
      "The protocol one evaluated row travels. Every step is either taken or refused by a rule that was written down before the split was opened.",
  },
};

export const termFigureTranslationKeys = Object.values(termFigures).flatMap((spec) => {
  const captions = [spec.caption];
  if (spec.kind === "flow") return [...captions, ...spec.nodes.map((node) => node.label)];
  return captions;
});
