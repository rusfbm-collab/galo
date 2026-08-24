import { useId } from "react";
import { lawfulExits, routePhases } from "../../content/thinking";
import { useI18n } from "../../i18n/I18nContext";

const WIDTH = 660;
const HEIGHT = 300;
const NODE_WIDTH = 190;
const NODE_HEIGHT = 52;
const COLUMNS = [42, 252, 462];
const ROWS = [22, 104, 186];
const EXIT_Y = 256;
const EXIT_X = [42, 352];
const EXIT_WIDTH = 296;
const EXIT_HEIGHT = 34;
/** The rail the two exits hang off, drawn down the left gutter. */
const RAIL_X = 22;
const SPINE_Y = EXIT_Y - 16;

/**
 * The closed phase set, plus the two lawful exits drawn underneath it rather
 * than at the end of the chain — either one is reachable from any phase, which
 * is the whole reason a stop here is an outcome instead of a failure.
 */
export function ThoughtPipelineFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();
  const arrowId = useId();

  return (
    <figure className="galo-figure galo-figure--pipeline">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("ONE EPISODE, FROM OPENING TO SEAL")}</span>
        <strong>{t("Seven phases, and two ways out that are not the seventh.")}</strong>
        <span className="galo-figure__note">
          {t(
            "Each phase answers one question and hands one object to the next. The phase set is closed, so there is no unnamed state to fall into: an episode is either in one of the seven or on one of the two exits, and the exits are reachable from any phase rather than only from the end.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("The seven phases of one GALO episode and its two lawful exits")}</title>
          <desc id={descriptionId}>
            {t(
              "Seven numbered boxes laid out in three rows and joined by arrows in reading order, from opening the candidate space through to sealing the episode. Below them sit two wider boxes marked BOUNDARY and REJECT, drawn dashed, reachable from any of the seven.",
            )}
          </desc>
          <defs>
            <marker id={arrowId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" fill="var(--chart-neutral-strong)" />
            </marker>
          </defs>

          {routePhases.map((phase, index) => {
            const column = index % 3;
            const row = Math.floor(index / 3);
            const x = COLUMNS[column]!;
            const y = ROWS[row]!;
            return (
              <g key={phase.number} className="galo-pipeline__node">
                <rect x={x} y={y} width={NODE_WIDTH} height={NODE_HEIGHT} rx="12" />
                <text className="galo-pipeline__index" x={x + 16} y={y + 32} direction="ltr">
                  {phase.number}
                </text>
                <text className="galo-pipeline__value" x={x + 46} y={y + 32} direction="ltr">
                  {phase.name}
                </text>
              </g>
            );
          })}

          {routePhases.slice(0, -1).map((phase, index) => {
            const column = index % 3;
            const row = Math.floor(index / 3);
            const y = ROWS[row]!;
            const d =
              column < 2
                ? `M${COLUMNS[column]! + NODE_WIDTH} ${y + NODE_HEIGHT / 2} H ${COLUMNS[column + 1]! - 8}`
                : `M${COLUMNS[2]! + NODE_WIDTH / 2} ${y + NODE_HEIGHT} V ${y + NODE_HEIGHT + 14} H ${COLUMNS[0]! + NODE_WIDTH / 2} V ${ROWS[row + 1]! - 8}`;
            return (
              <path key={`link-${phase.number}`} className="galo-pipeline__link" d={d} markerEnd={`url(#${arrowId})`} />
            );
          })}

          {lawfulExits.map((exit, index) => {
            const x = EXIT_X[index]!;
            return (
              <g key={exit.terminal} className="galo-pipeline__node is-target">
                <rect x={x} y={EXIT_Y} width={EXIT_WIDTH} height={EXIT_HEIGHT} rx="10" />
                <text className="galo-pipeline__value" x={x + 16} y={EXIT_Y + 22} direction="ltr">
                  {exit.terminal}
                </text>
                <text
                  className="galo-pipeline__status"
                  x={x + EXIT_WIDTH - 14}
                  y={EXIT_Y + 22}
                  textAnchor="end"
                  direction="ltr"
                >
                  {t(index === 0 ? "lawful, unsettled" : "unlawful, refused")}
                </text>
              </g>
            );
          })}

          {/* Every phase can leave onto either exit, so the rail collects all three
              rows rather than hanging off the last box. */}
          {ROWS.map((y) => (
            <path
              key={`rail-${y}`}
              className="galo-pipeline__link is-target"
              d={`M${COLUMNS[0]!} ${y + NODE_HEIGHT / 2} H ${RAIL_X}`}
            />
          ))}
          <path
            className="galo-pipeline__link is-target"
            d={`M${RAIL_X} ${ROWS[0]! + NODE_HEIGHT / 2} V ${SPINE_Y} H ${EXIT_X[1]! + EXIT_WIDTH / 2}`}
          />
          {EXIT_X.map((x) => (
            <path
              key={`drop-${x}`}
              className="galo-pipeline__link is-target"
              d={`M${x + EXIT_WIDTH / 2} ${SPINE_Y} V ${EXIT_Y - 8}`}
              markerEnd={`url(#${arrowId})`}
            />
          ))}
        </svg>
      </div>

      <div className="galo-figure__legend galo-pipeline__legend">
        <span>
          <i className="galo-pipeline__key" aria-hidden="true" />
          {t("solid: a phase of the route")}
        </span>
        <span>
          <i className="galo-pipeline__key is-target" aria-hidden="true" />
          {t("dashed: a lawful exit, reachable from any phase")}
        </span>
      </div>
    </figure>
  );
}
