import { useId } from "react";
import { engineCycle } from "../../content/engineTour";
import { useI18n } from "../../i18n/I18nContext";

const WIDTH = 660;
const HEIGHT = 296;

const STEP_HEIGHT = 30;
const ROW_STEP = 38;
const TOP = 24;
const INDEX_X = 20;
const CHIP_X = 46;
const CHIP_WIDTH = 380;

/** The three conditions that hang off step five, drawn where the reader meets it. */
const CONDITION_X = CHIP_X + CHIP_WIDTH + 26;
const CONDITION_WIDTH = 208;
const CONDITION_HEIGHT = 19;
const CONDITION_GAP = 4;

/**
 * One turn of the engine, in ordinary words.
 *
 * Deliberately a chain and not a wheel: the last step is a record, not a return
 * to the first, and drawing a closed loop would suggest the engine runs itself in
 * circles until satisfied. The two steps that can end the turn early — the check
 * and the "not yet" — are marked, because a reader who misses them takes away a
 * machine that always answers.
 *
 * The cards under this figure carry every step's explanation, so repeating the
 * labels here would earn nothing. What the drawing adds is the fan at step five:
 * the check is not one test but three, and all three have to hold. That is the
 * fact the shape can show and a list cannot.
 */
export function EngineCycleFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();
  const arrowId = useId();

  const conditions = ["the right to answer", "a learned structure", "a typed program that ran"];

  return (
    <figure className="galo-figure galo-figure--cycle">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("ONE TURN, IN ORDINARY WORDS")}</span>
        <strong>{t("Seven steps, and two of them are allowed to end it.")}</strong>
        <span className="galo-figure__note">
          {t(
            "Nothing in this chain names a component. It is the shape of one turn: something arrives, the system works out what it touches, what may still be done about it, and whether the result may be admitted — then writes down enough for somebody else to walk the same path.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("The seven steps of one turn of the engine")}</title>
          <desc id={descriptionId}>
            {t(
              "Seven numbered bars stacked top to bottom and joined by short arrows, running from something arriving to a record somebody else can repeat. The fifth and sixth bars are marked, because either of them can end the turn without an answer. The fifth fans out to the right into three smaller boxes — the right to answer, a learned structure, and a typed program that ran — joined by and rather than or.",
            )}
          </desc>

          <defs>
            <marker id={arrowId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" fill="var(--chart-neutral-strong)" />
            </marker>
          </defs>

          {engineCycle.map((step, index) => {
            const y = TOP + index * ROW_STEP;
            // The check and the "not yet" are the two places a turn can stop.
            const canStop = index === 4 || index === 5;
            return (
              <g key={step.number} className={`galo-cycle__step${canStop ? " can-stop" : ""}`}>
                <text className="galo-cycle__index" x={INDEX_X} y={y + 20} direction="ltr">
                  {step.number}
                </text>
                <rect x={CHIP_X} y={y} width={CHIP_WIDTH} height={STEP_HEIGHT} rx="8" />
                <text className="galo-cycle__label" x={CHIP_X + 16} y={y + 20}>
                  {t(step.label)}
                </text>
              </g>
            );
          })}

          {/* Step five fans out: three conditions, joined by and, all required. */}
          {conditions.map((condition, index) => {
            const centre = TOP + 4 * ROW_STEP + STEP_HEIGHT / 2;
            const total = conditions.length * CONDITION_HEIGHT + (conditions.length - 1) * CONDITION_GAP;
            const y = centre - total / 2 + index * (CONDITION_HEIGHT + CONDITION_GAP);
            return (
              <g key={condition} className="galo-cycle__condition">
                <path
                  className="galo-cycle__fan"
                  d={`M${CHIP_X + CHIP_WIDTH} ${centre} C ${CONDITION_X - 12} ${centre}, ${CONDITION_X - 12} ${y + CONDITION_HEIGHT / 2}, ${CONDITION_X} ${y + CONDITION_HEIGHT / 2}`}
                />
                <rect x={CONDITION_X} y={y} width={CONDITION_WIDTH} height={CONDITION_HEIGHT} rx="6" />
                <text x={CONDITION_X + CONDITION_WIDTH / 2} y={y + 13} textAnchor="middle">
                  {t(condition)}
                </text>
              </g>
            );
          })}
          <text
            className="galo-cycle__conjunction"
            x={CONDITION_X + CONDITION_WIDTH / 2}
            y={TOP + 4 * ROW_STEP + STEP_HEIGHT / 2 + 40}
            textAnchor="middle"
          >
            {t("all three, or a boundary")}
          </text>

          {engineCycle.slice(0, -1).map((step, index) => (
            <path
              key={`link-${step.number}`}
              className="galo-cycle__link"
              d={`M${CHIP_X + 22} ${TOP + index * ROW_STEP + STEP_HEIGHT} V ${TOP + (index + 1) * ROW_STEP - 3}`}
              markerEnd={`url(#${arrowId})`}
            />
          ))}
        </svg>
      </div>

      <div className="galo-figure__legend">
        <span>
          <i className="galo-cycle__key" aria-hidden="true" />
          {t("marked: a step that may end the turn without an answer")}
        </span>
        <span>{t("A chain, not a wheel. The turn ends on a record rather than starting again.")}</span>
      </div>
    </figure>
  );
}
