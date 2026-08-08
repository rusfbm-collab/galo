import { useId } from "react";
import { starIndex, type GaloLevel } from "../../content/mathematics";
import { useI18n } from "../../i18n/I18nContext";

const LEVEL: GaloLevel = 3;
const A = 1;
const B = 0;
const C = 1;

/** Both bracketings of the same three inputs, evaluated by the kernel. */
const leftInner = starIndex(LEVEL, A, B);
const leftResult = starIndex(LEVEL, leftInner, C);
const rightInner = starIndex(LEVEL, B, C);
const rightResult = starIndex(LEVEL, A, rightInner);

const WIDTH = 640;
const HEIGHT = 250;
const NODE = 46;
const ROW_ONE = 62;
const ROW_TWO = 158;

function Chain({
  y,
  bracket,
  inner,
  result,
  innerLabel,
}: {
  y: number;
  bracket: string;
  inner: number;
  result: number;
  innerLabel: string;
}) {
  const startX = 168;
  const stepX = 138;

  return (
    <g>
      <text className="galo-assoc__bracket" x={16} y={y + NODE / 2 + 5} direction="ltr">
        {bracket}
      </text>

      <rect className="galo-assoc__node" x={startX} y={y} width={NODE * 2} height={NODE} rx={10} />
      <text className="galo-assoc__value" x={startX + NODE} y={y + NODE / 2 + 6} textAnchor="middle" direction="ltr">
        {`P${inner}`}
      </text>
      <text className="galo-assoc__step" x={startX + NODE} y={y - 10} textAnchor="middle" direction="ltr">
        {innerLabel}
      </text>

      <line
        className="galo-assoc__arrow"
        x1={startX + NODE * 2 + 8}
        y1={y + NODE / 2}
        x2={startX + stepX + NODE - 8}
        y2={y + NODE / 2}
      />

      <rect
        className="galo-assoc__node is-result"
        x={startX + stepX + NODE}
        y={y}
        width={NODE * 2}
        height={NODE}
        rx={10}
      />
      <text
        className="galo-assoc__value"
        x={startX + stepX + NODE * 2}
        y={y + NODE / 2 + 6}
        textAnchor="middle"
        direction="ltr"
      >
        {`P${result}`}
      </text>
    </g>
  );
}

/**
 * One triple is enough. STAR is not associative, and rather than say so this
 * evaluates both bracketings of the same three inputs through the kernel and
 * lets the two answers stand next to each other. The witness is the smallest
 * one at L3; the same shape fails at every level above it.
 */
export function AssociativityFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();

  return (
    <figure className="galo-figure galo-figure--assoc">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("ONE TRIPLE, TWO ANSWERS")}</span>
        <strong>{t("Move the brackets and STAR gives a different position.")}</strong>
        <span className="galo-figure__note">
          {t(
            "Take the same three inputs in the same order and only change which pair is combined first. Under PLUS the answer would not move. Under STAR it does, and that single fact is what stops STAR from being a semigroup.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("The same three inputs bracketed two ways at L3")}</title>
          <desc id={descriptionId}>
            {t(
              "Two rows. The upper row combines P1 with P0 first, giving P1, and then combines that with P1 to reach P2. The lower row combines P0 with P1 first, giving P0, and then combines P1 with that to reach P1. The two rows end on different positions.",
            )}
          </desc>

          <Chain
            y={ROW_ONE}
            bracket={`(P${A} ★ P${B}) ★ P${C}`}
            inner={leftInner}
            result={leftResult}
            innerLabel={`P${A} ★ P${B}`}
          />
          <Chain
            y={ROW_TWO}
            bracket={`P${A} ★ (P${B} ★ P${C})`}
            inner={rightInner}
            result={rightResult}
            innerLabel={`P${B} ★ P${C}`}
          />

          <text className="galo-assoc__verdict" x={WIDTH - 16} y={HEIGHT - 22} textAnchor="end" direction="ltr">
            {`P${leftResult} ≠ P${rightResult}`}
          </text>
        </svg>
      </div>

      <ol className="galo-chain">
        <li>
          <code dir="ltr">{`P${A} ★ P${B} = P${leftInner}`}</code>
          <span>{t("the left input is not P0, so the reset clause does not fire and the two are added")}</span>
        </li>
        <li>
          <code dir="ltr">{`P${B} ★ P${C} = P${rightInner}`}</code>
          <span>{t("here the left input is P0, so the clause fires and the right input is discarded")}</span>
        </li>
        <li>
          <code dir="ltr">{`P${leftResult} ≠ P${rightResult}`}</code>
          <span>{t("the same three inputs, two bracketings, two positions")}</span>
        </li>
      </ol>

      <p className="galo-figure__note galo-figure__note--boundary">
        {t(
          "A single counterexample settles this permanently: no later result can make STAR associative. What it does not settle is anything about PLUS, which is associative at every level and is checked separately.",
        )}
      </p>
    </figure>
  );
}
