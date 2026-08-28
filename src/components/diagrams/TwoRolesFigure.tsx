import { useId } from "react";
import { useI18n } from "../../i18n/I18nContext";

const WIDTH = 660;
const HEIGHT = 300;

const LANE_X = 20;
const LANE_WIDTH = 620;
const LANE_HEIGHT = 86;
const TOP_LANE_Y = 24;
const BOTTOM_LANE_Y = 190;

const BOX_WIDTH = 190;
const BOX_HEIGHT = 38;
const BOX_GAP = 16;
const WALL_Y = 140;

const boxX = (index: number) => LANE_X + 18 + index * (BOX_WIDTH + BOX_GAP);

/**
 * Where the authority sits, drawn as the one boundary it is — and, since the
 * theory correction, drawn as a boundary that is crossed by three things rather
 * than one.
 *
 * The earlier version of this figure sent a single candidate down through a wall
 * and let the lower lane decide. That read as two contours facing off, with the
 * lower one holding all the power, and it is wrong in a way that flatters the
 * design: the lower lane cannot sign either. An answer exists only when the
 * upper lane also produced the right to give one and a structure that stands
 * behind it. So three things cross, the verdict box says so, and refusing when
 * any of them is missing is drawn as the ordinary outcome it is.
 *
 * The line is still a wall rather than an arrow: what crosses is evidence of
 * having earned something, never a conclusion.
 */
export function TwoRolesFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();
  const arrowId = useId();

  const crossings = [
    { label: "a candidate", note: "ranked, unsigned" },
    { label: "the right to answer", note: "earned out of sample" },
    { label: "a learned structure", note: "formed from evidence" },
  ];

  return (
    <figure className="galo-figure galo-figure--authority-line">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("THE ONE BOUNDARY THAT MATTERS")}</span>
        <strong>{t("The part that learns may not sign. The part that checks may not sign alone.")}</strong>
        <span className="galo-figure__note">
          {t(
            "This is the sceptical crux, so it is on the page rather than three screens down. Everything above the line can be wrong without the answer being wrong, because nothing above the line is allowed to sign anything. But nothing below the line can sign on its own either: three things have to arrive from above before an answer is even possible, and everything below is fixed by the release and behaves identically on two runs.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("Three things cross the line before the check may admit anything")}</title>
          <desc id={descriptionId}>
            {t(
              "Two lanes with a solid line between them. The upper lane, learning and search, holds three things it can produce: a ranked candidate, the right to answer, and a learned structure. All three cross the line downward. The lower lane, law and checking, admits only when all three arrived and its own typed program passes; otherwise it returns a boundary. Only verdicts come back upward.",
            )}
          </desc>

          <defs>
            <marker id={arrowId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" fill="var(--chart-neutral-strong)" />
            </marker>
          </defs>

          <g className="galo-lanes__lane">
            <rect x={LANE_X} y={TOP_LANE_Y} width={LANE_WIDTH} height={LANE_HEIGHT} rx="14" />
            <text className="galo-lanes__lane-name" x={LANE_X + 18} y={TOP_LANE_Y + 26}>
              {t("LEARNING AND SEARCH")}
            </text>
            <text className="galo-lanes__lane-note" x={LANE_X + LANE_WIDTH - 18} y={TOP_LANE_Y + 26} textAnchor="end">
              {t("may reorder · may not sign")}
            </text>
          </g>
          {crossings.map((crossing, index) => (
            <g key={crossing.label} className="galo-lanes__chip">
              <rect x={boxX(index)} y={TOP_LANE_Y + 34} width={BOX_WIDTH} height={BOX_HEIGHT} rx="8" />
              <text x={boxX(index) + BOX_WIDTH / 2} y={TOP_LANE_Y + 50} textAnchor="middle">
                {t(crossing.label)}
              </text>
              <text
                className="galo-lanes__chip-note"
                x={boxX(index) + BOX_WIDTH / 2}
                y={TOP_LANE_Y + 63}
                textAnchor="middle"
              >
                {t(crossing.note)}
              </text>
            </g>
          ))}

          {/* A wall with three gates, not an arrow: none of these carries a conclusion. */}
          <line className="galo-lanes__wall" x1={LANE_X} y1={WALL_Y} x2={LANE_X + LANE_WIDTH} y2={WALL_Y} />
          {/* The three crossings pass straight through this label, so it is cut
              out of them rather than drawn over them. */}
          <rect className="galo-lanes__gate-plate" x={WIDTH / 2 - 116} y={WALL_Y - 17} width="232" height="15" />
          <text className="galo-lanes__gate" x={WIDTH / 2} y={WALL_Y - 6} textAnchor="middle">
            {t("all three cross, and none of them is a conclusion")}
          </text>
          {crossings.map((crossing, index) => (
            <path
              key={`cross-${crossing.label}`}
              className="galo-lanes__cross"
              d={`M${boxX(index) + BOX_WIDTH / 2} ${TOP_LANE_Y + LANE_HEIGHT} V ${BOTTOM_LANE_Y - 4}`}
              markerEnd={`url(#${arrowId})`}
            />
          ))}

          <g className="galo-lanes__lane is-law">
            <rect x={LANE_X} y={BOTTOM_LANE_Y} width={LANE_WIDTH} height={LANE_HEIGHT} rx="14" />
            <text className="galo-lanes__lane-name" x={LANE_X + 18} y={BOTTOM_LANE_Y + 26}>
              {t("LAW AND CHECKING")}
            </text>
            <text
              className="galo-lanes__lane-note"
              x={LANE_X + LANE_WIDTH - 18}
              y={BOTTOM_LANE_Y + 26}
              textAnchor="end"
            >
              {t("may say yes only if all three arrived")}
            </text>
          </g>

          <g className="galo-lanes__verdict is-admit">
            <rect x={boxX(0)} y={BOTTOM_LANE_Y + 34} width={BOX_WIDTH} height={BOX_HEIGHT} rx="8" />
            <text x={boxX(0) + BOX_WIDTH / 2} y={BOTTOM_LANE_Y + 50} textAnchor="middle" direction="ltr">
              ADMIT
            </text>
            <text
              className="galo-lanes__chip-note"
              x={boxX(0) + BOX_WIDTH / 2}
              y={BOTTOM_LANE_Y + 63}
              textAnchor="middle"
            >
              {t("all three, and the program ran")}
            </text>
          </g>
          <g className="galo-lanes__verdict is-hold">
            <rect x={boxX(1)} y={BOTTOM_LANE_Y + 34} width={BOX_WIDTH * 2 + BOX_GAP} height={BOX_HEIGHT} rx="8" />
            <text
              x={boxX(1) + (BOX_WIDTH * 2 + BOX_GAP) / 2}
              y={BOTTOM_LANE_Y + 50}
              textAnchor="middle"
              direction="ltr"
            >
              BOUNDARY
            </text>
            <text
              className="galo-lanes__chip-note"
              x={boxX(1) + (BOX_WIDTH * 2 + BOX_GAP) / 2}
              y={BOTTOM_LANE_Y + 63}
              textAnchor="middle"
            >
              {t("any one missing, and the cause is named")}
            </text>
          </g>
        </svg>
      </div>

      <div className="galo-figure__legend">
        <span>{t("Learning cannot make the answer right, and without it there is nothing to check.")}</span>
        <span>{t("A refusal is an outcome with a named cause, not a failure to produce output.")}</span>
      </div>
    </figure>
  );
}
