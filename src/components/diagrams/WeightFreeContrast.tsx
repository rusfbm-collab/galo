import { useId } from "react";
import { useI18n } from "../../i18n/I18nContext";
import { galoPath, neuralPath, weightFreeLine } from "../../content/weightFree";

const WIDTH = 660;
const HEIGHT = 326;

const COL_WIDTH = 296;
const LEFT_X = 16;
const RIGHT_X = 348;
const DIVIDER_X = 330;

const HEAD_Y = 26;
const ROW_TOP = 44;
const BOX_HEIGHT = 54;
const ROW_STEP = 68;

/** The step where the two paths stop being the same shape. */
const DIVERGENCE = 2;

/**
 * The one picture the home page owes a reader who has never met this project:
 * what the two kinds of system actually keep.
 *
 * Both columns are four steps and both start from data, so the eye has nothing
 * to read into the shape. The difference lands on the third row and nowhere
 * else — one column stores numbers nobody named, the other stores objects that
 * were named before they were stored. The row is marked in both columns so the
 * contrast is a comparison rather than a verdict.
 *
 * Four rows of one short line each, because SVG text does not wrap and a
 * translated label has to clear its own box. Everything longer than a label —
 * the summary line, the scope — is HTML underneath, where it can wrap.
 */
export function WeightFreeContrast() {
  const { direction, t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();

  // The site draws every SVG left-to-right so anchored labels stay inside their
  // boxes. Here the order carries the argument — the familiar column, then the
  // one being introduced — so under RTL the columns swap sides and an Arabic
  // reader still meets them in that order.
  const familiarX = direction === "rtl" ? RIGHT_X : LEFT_X;
  const galoX = direction === "rtl" ? LEFT_X : RIGHT_X;

  const columns = [
    { key: "neural", head: "NEURAL AI", steps: neuralPath, isGalo: false, x: familiarX },
    { key: "galo", head: "GALO", steps: galoPath, isGalo: true, x: galoX },
  ] as const;

  return (
    <figure className="galo-figure galo-figure--weight-free">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("TWO KINDS OF LEARNING")}</span>
        <strong>{t(weightFreeLine)}</strong>
        <span className="galo-figure__note">
          {t(
            "Both paths begin with data and end with an answer. They differ in one place: what the system keeps in between. A weight is a number that came out of training and carries no name; a structure is something that was named, checked, and written down before it was kept.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("What each kind of system keeps between data and answer")}</title>
          <desc id={descriptionId}>
            {t(
              "Two columns of four boxes joined downward by arrows. The neural column runs from data to training to hidden numerical weights to a probabilistic answer. The GALO column runs from data and experience to explicit objects and relations to verified structures and routes to a reproducible answer. The third box in each column is marked, because that is the only step where the two differ.",
            )}
          </desc>

          <line className="galo-wf__divider" x1={DIVIDER_X} y1="10" x2={DIVIDER_X} y2={HEIGHT - 12} />

          {columns.map((column) => {
            const x = column.x;
            return (
              <g key={column.key} className={column.isGalo ? "galo-wf__col is-galo" : "galo-wf__col"}>
                <text className="galo-wf__head" x={x + COL_WIDTH / 2} y={HEAD_Y} textAnchor="middle" direction="ltr">
                  {t(column.head)}
                </text>

                {column.steps.map((step, index) => {
                  const y = ROW_TOP + index * ROW_STEP;
                  const marked = index === DIVERGENCE;
                  return (
                    <g key={step} className={marked ? "galo-wf__step is-marked" : "galo-wf__step"}>
                      <rect x={x} y={y} width={COL_WIDTH} height={BOX_HEIGHT} rx="10" />
                      <text
                        className="galo-wf__label"
                        x={x + COL_WIDTH / 2}
                        y={y + BOX_HEIGHT / 2}
                        dominantBaseline="central"
                        textAnchor="middle"
                      >
                        {t(step)}
                      </text>
                      {index < column.steps.length - 1 && (
                        <path
                          className="galo-wf__flow"
                          d={`M${x + COL_WIDTH / 2} ${y + BOX_HEIGHT} v 8 m -5 -4 l 5 4 l 5 -4`}
                        />
                      )}
                    </g>
                  );
                })}
              </g>
            );
          })}
        </svg>
      </div>

      <div className="galo-figure__legend">
        <span>{t("marked: the one step where the two differ")}</span>
        <span>{t("Millions of numbers, none of them named")}</span>
        <span>{t("A list short enough to print, every item named")}</span>
      </div>
    </figure>
  );
}
