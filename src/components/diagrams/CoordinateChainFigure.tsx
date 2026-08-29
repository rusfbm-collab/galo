import { useId } from "react";
import {
  canonicalTypedCellCount,
  galoActionFamilies,
  galoLevels,
  rawCellsPerOperator,
  rawLawCellCount,
} from "../../content/mathematics";
import { useI18n } from "../../i18n/I18nContext";

const WIDTH = 660;
const HEIGHT = 132;
const NODE_W = 128;
const NODE_H = 54;
const GAP = 42;

/**
 * How 140 becomes 560, and why 556 is a different number.
 *
 * The section gives the chain as four formulas. A formula answers "what is
 * multiplied"; it does not answer "by what, and why that". Each arrow here
 * carries its own multiplier and the one-line reason for it, and the last step
 * is a subtraction rather than a product — which is exactly the step a reader
 * skims past when it is written only as an equation.
 *
 * Every number is imported and re-derived, never typed in, so a change in the
 * level set fails the build instead of leaving a stale figure on the page.
 */
export function CoordinateChainFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();
  const arrowId = useId();

  const activeRuntimeCells = canonicalTypedCellCount - galoActionFamilies.length;

  const steps = [
    {
      value: String(rawCellsPerOperator),
      label: "Ordered pairs",
      why: "One pole from the level on each table axis, summed over the seven levels.",
    },
    {
      value: String(rawLawCellCount),
      label: "Law cells",
      why: "Each pair is read under two laws. PLUS and STAR are separate tables over the same pairs, not one table with a flag.",
      multiplier: "× 2 laws",
    },
    {
      value: String(canonicalTypedCellCount),
      label: "Typed coordinates",
      why: "Each law cell is read under two operand orientations. This is the address space, and it is where counting stops for the formal kernel.",
      multiplier: "× 2 roles",
    },
    {
      value: String(activeRuntimeCells),
      label: "Active at runtime",
      why: "The four degenerate cells at the single-pole level are addresses that carry no choice. They are subtracted rather than quietly dropped, which is why this number is not a product of anything.",
      multiplier: "− 4 degenerate",
    },
  ];

  return (
    <figure className="galo-figure galo-figure--chain">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("WHERE EACH NUMBER COMES FROM")}</span>
        <strong>{t("Two multiplications and one subtraction, in that order.")}</strong>
        <span className="galo-figure__note">
          {t(
            "The chain is short enough to check by hand, which is the point of publishing it as a chain rather than as a total. Two of the three steps are multiplications by two, and the last one is not a multiplication at all — it removes the addresses at the degenerate level, where a pair exists but no choice does.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("A chain of four counts joined by three labelled arrows")}</title>
          <desc id={descriptionId}>
            {t(
              "Four boxes in a row holding the ordered-pair count, the law-cell count, the typed-coordinate count and the active runtime count. Three arrows join them, labelled times two laws, times two roles, and minus four degenerate cells.",
            )}
          </desc>
          <defs>
            <marker id={arrowId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" fill="var(--chart-neutral-strong)" />
            </marker>
          </defs>

          {steps.map((step, index) => {
            const x = 14 + index * (NODE_W + GAP);
            return (
              <g
                key={step.label}
                className={index === steps.length - 1 ? "galo-chain2__node is-last" : "galo-chain2__node"}
              >
                <rect x={x} y="34" width={NODE_W} height={NODE_H} rx="12" />
                <text
                  className="galo-chain2__value"
                  x={x + NODE_W / 2}
                  y="61"
                  dominantBaseline="central"
                  textAnchor="middle"
                  direction="ltr"
                >
                  {step.value}
                </text>
                {index < steps.length - 1 && (
                  <>
                    <path
                      className="galo-chain2__link"
                      d={`M${x + NODE_W} 61 H ${x + NODE_W + GAP - 8}`}
                      markerEnd={`url(#${arrowId})`}
                    />
                    <text
                      className="galo-chain2__multiplier"
                      x={x + NODE_W + GAP / 2}
                      y="26"
                      textAnchor="middle"
                      direction="ltr"
                    >
                      {steps[index + 1]!.multiplier}
                    </text>
                  </>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      <ol className="galo-figure__stage-notes">
        {steps.map((step) => (
          <li key={step.label}>
            <strong dir="ltr">{step.value}</strong>
            <span>
              <b>{t(step.label)}</b>
              {t(step.why)}
            </span>
          </li>
        ))}
      </ol>

      <p className="galo-figure__foot">
        {t(
          "These are addresses in a catalogue, not concepts and not things the engine visits. One published prediction runs a route of typed steps through a few of them; the catalogue is what the route is allowed to address, and the difference between the two numbers is deliberate.",
        )}
      </p>

      <p className="sr-only">{t("Levels counted: {levels}.", { levels: galoLevels.join(", ") })}</p>
    </figure>
  );
}
