import { useId } from "react";
import { useI18n } from "../../i18n/I18nContext";

const WIDTH = 660;
const HEIGHT = 250;

const LANE_X = 20;
const LANE_WIDTH = 620;
const LANE_HEIGHT = 78;
const TOP_LANE_Y = 26;
const BOTTOM_LANE_Y = 146;

const BOX_WIDTH = 176;
const BOX_HEIGHT = 34;

/**
 * Where the authority sits, drawn as the one boundary it is.
 *
 * The upper lane may propose and reorder as much as it likes; the lower lane is
 * the only one that may say yes, and it is also allowed to say no. The line
 * between them is drawn as a wall with one gate rather than as an arrow, because
 * an arrow would suggest the proposal carries weight across it. It does not: what
 * crosses is a candidate, and what comes back is a verdict.
 */
export function TwoRolesFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();
  const arrowId = useId();

  const proposals = ["candidate", "candidate", "candidate"];
  const verdicts = [
    { label: "ADMIT", tone: "is-admit" },
    { label: "REFUSE", tone: "is-refuse" },
    { label: "NOT YET", tone: "is-hold" },
  ];

  return (
    <figure className="galo-figure galo-figure--authority-line">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("THE ONE BOUNDARY THAT MATTERS")}</span>
        <strong>{t("The part that learns proposes. A different part decides, and may decline.")}</strong>
        <span className="galo-figure__note">
          {t(
            "This is the sceptical crux, so it is on the page rather than three screens down. Everything above the line can be wrong without the answer being wrong, because nothing above the line is allowed to sign anything. Everything below the line is fixed by the release and behaves identically on two runs.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("Learning proposes above the line; the check decides below it")}</title>
          <desc id={descriptionId}>
            {t(
              "Two lanes with a solid line between them. The upper lane, learning and search, holds three candidates and may reorder them. The lower lane, law and checking, returns one of three verdicts: admit, refuse, or not yet. Only candidates cross downward, and only verdicts come back.",
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
          {proposals.map((proposal, index) => (
            <g key={index} className="galo-lanes__chip">
              <rect
                x={LANE_X + 18 + index * (BOX_WIDTH + 16)}
                y={TOP_LANE_Y + 36}
                width={BOX_WIDTH}
                height={BOX_HEIGHT}
                rx="8"
              />
              <text x={LANE_X + 18 + index * (BOX_WIDTH + 16) + BOX_WIDTH / 2} y={TOP_LANE_Y + 58} textAnchor="middle">
                {t(proposal)}
              </text>
            </g>
          ))}

          {/* A wall with one gate, not an arrow: a proposal carries no weight across it. */}
          <line className="galo-lanes__wall" x1={LANE_X} y1="124" x2={LANE_X + LANE_WIDTH} y2="124" />
          <text className="galo-lanes__gate" x={WIDTH / 2} y="118" textAnchor="middle">
            {t("only a candidate crosses, never a conclusion")}
          </text>
          <path
            className="galo-lanes__cross"
            d={`M${LANE_X + 106} ${TOP_LANE_Y + 70} V ${BOTTOM_LANE_Y - 4}`}
            markerEnd={`url(#${arrowId})`}
          />

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
              {t("the only part that may say yes")}
            </text>
          </g>
          {verdicts.map((verdict, index) => (
            <g key={verdict.label} className={`galo-lanes__verdict ${verdict.tone}`}>
              <rect
                x={LANE_X + 18 + index * (BOX_WIDTH + 16)}
                y={BOTTOM_LANE_Y + 36}
                width={BOX_WIDTH}
                height={BOX_HEIGHT}
                rx="8"
              />
              <text
                x={LANE_X + 18 + index * (BOX_WIDTH + 16) + BOX_WIDTH / 2}
                y={BOTTOM_LANE_Y + 58}
                textAnchor="middle"
                direction="ltr"
              >
                {verdict.label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <div className="galo-figure__legend">
        <span>{t("Learning can make the search cheaper. It cannot make the answer right.")}</span>
        <span>{t("A refusal is an outcome with a named cause, not a failure to produce output.")}</span>
      </div>
    </figure>
  );
}
