import { useId } from "react";
import { towerCounts } from "../../content/mathematics";
import { useI18n } from "../../i18n/I18nContext";

const WIDTH = 660;
const HEIGHT = 292;

const STEP_X = 16;
const STEP_WIDTH = 314;
const STEP_HEIGHT = 54;
const STEP_TOP = 30;
const STEP_STEP = 62;

const PANEL_X = 366;
const PANEL_Y = 30;
const PANEL_WIDTH = 278;
const PANEL_HEIGHT = 248;

/** The worked level is L3 everywhere on the theory page, so the frame uses it too. */
const WORKED = towerCounts[2]!;
const CELL = 12;
/** The page writes its laws as +₃ and ★₃, so the figure does too. */
const SUBSCRIPT = ["₀", "₁", "₂", "₃", "₄", "₅", "₆", "₇"];

const stepY = (index: number) => STEP_TOP + index * STEP_STEP;

/**
 * How a frame is assembled out of Cayley tables.
 *
 * A reader who has followed the tables still has no idea what a frame is, which
 * is the gap this fills: a frame is not a new kind of object bolted on top of the
 * algebra, it is the algebra plus three declarations — which level, which roles,
 * how many places. Everything inside it is a cell of the two frozen tables.
 *
 * The three numbers in the legend are the ones readers conflate: the level, the
 * arity, and the route length are independent, and nothing forces them to agree.
 */
export function FrameGenesisFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();
  const arrowId = useId();

  const steps = [
    {
      number: "01",
      title: "Pick a level",
      value: t("Q_{level} · {poles} positions", { level: WORKED.level, poles: WORKED.poles }),
    },
    {
      number: "02",
      title: "Take the two frozen laws at it",
      value: t("PLUS and STAR at L{level} · {pairs} addresses each", {
        level: WORKED.level,
        pairs: WORKED.orderedPairs,
      }),
    },
    {
      number: "03",
      title: "Read each cell with its roles",
      value: t("{cells} typed cells", { cells: WORKED.typedCells }),
    },
    { number: "04", title: "Declare how many places the scene has", value: t("k role slots") },
  ];

  return (
    <figure className="galo-figure galo-figure--frame">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("HOW A FRAME IS MADE OUT OF THE TABLES")}</span>
        <strong>{t("A frame is the two tables, plus three declarations about how to read them.")}</strong>
        <span className="galo-figure__note">
          {t(
            "Nothing new is invented at this step. A frame is a local scene in which a relation can be stated and checked, and everything inside it is a cell of the same two frozen tables — which is why a frame can be handed to somebody else and read the same way.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("Four declarations turning two Cayley tables into one frame")}</title>
          <desc id={descriptionId}>
            {t(
              "Four numbered steps down the left — choose a level, take its two frozen laws, read each cell with its roles, declare how many places the scene has — feeding into a panel on the right. The panel shows the carrier positions, the two tables drawn as grids, and the empty role slots that make up one frame.",
            )}
          </desc>

          <defs>
            <marker id={arrowId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" fill="var(--chart-neutral-strong)" />
            </marker>
          </defs>

          {steps.map((step, index) => {
            const y = stepY(index);
            return (
              <g key={step.number} className="galo-frame__step">
                <rect x={STEP_X} y={y} width={STEP_WIDTH} height={STEP_HEIGHT} rx="10" />
                <text className="galo-frame__index" x={STEP_X + 14} y={y + 22} direction="ltr">
                  {step.number}
                </text>
                <text className="galo-frame__step-title" x={STEP_X + 42} y={y + 22}>
                  {t(step.title)}
                </text>
                <text className="galo-frame__step-value" x={STEP_X + 42} y={y + 40}>
                  {step.value}
                </text>
              </g>
            );
          })}

          {steps.map((step, index) => (
            <path
              key={`feed-${step.number}`}
              className="galo-frame__feed"
              d={`M${STEP_X + STEP_WIDTH} ${stepY(index) + STEP_HEIGHT / 2} H ${PANEL_X - 10}`}
              markerEnd={index === 1 ? `url(#${arrowId})` : undefined}
            />
          ))}

          <rect
            className="galo-frame__panel"
            x={PANEL_X}
            y={PANEL_Y}
            width={PANEL_WIDTH}
            height={PANEL_HEIGHT}
            rx="14"
          />
          <text className="galo-frame__panel-title" x={PANEL_X + 18} y={PANEL_Y + 26} direction="ltr">
            FRAME
          </text>

          <text className="galo-frame__band" x={PANEL_X + 18} y={PANEL_Y + 52}>
            {t("CARRIER")}
          </text>
          {Array.from({ length: WORKED.poles }, (_, pole) => (
            <g key={`pole-${pole}`} className="galo-frame__pole">
              <rect x={PANEL_X + 18 + pole * 50} y={PANEL_Y + 60} width="42" height="20" rx="5" />
              <text x={PANEL_X + 39 + pole * 50} y={PANEL_Y + 74} textAnchor="middle" direction="ltr">
                {`P${pole}`}
              </text>
            </g>
          ))}

          <text className="galo-frame__band" x={PANEL_X + 18} y={PANEL_Y + 102}>
            {t("THE SAME TWO TABLES")}
          </text>
          {[
            { label: `+${SUBSCRIPT[WORKED.level]}`, x: PANEL_X + 18 },
            { label: `★${SUBSCRIPT[WORKED.level]}`, x: PANEL_X + 142 },
          ].map((table) => (
            <g key={table.label} className="galo-frame__table">
              <text className="galo-frame__table-label" x={table.x} y={PANEL_Y + 122} direction="ltr">
                {table.label}
              </text>
              {Array.from({ length: WORKED.poles }, (_, row) =>
                Array.from({ length: WORKED.poles }, (_, column) => (
                  <rect
                    key={`${row}-${column}`}
                    x={table.x + 34 + column * CELL}
                    y={PANEL_Y + 108 + row * CELL}
                    width={CELL - 2}
                    height={CELL - 2}
                    rx="2"
                  />
                )),
              )}
            </g>
          ))}

          <text className="galo-frame__band" x={PANEL_X + 18} y={PANEL_Y + 172}>
            {t("ROLE SLOTS")}
          </text>
          {[0, 1, 2].map((slot) => (
            <g key={`slot-${slot}`} className="galo-frame__slot">
              <rect x={PANEL_X + 18 + slot * 62} y={PANEL_Y + 180} width="54" height="22" rx="6" />
              <text x={PANEL_X + 45 + slot * 62} y={PANEL_Y + 195} textAnchor="middle" direction="ltr">
                {slot === 2 ? "k" : slot + 1}
              </text>
            </g>
          ))}

          <text className="galo-frame__foot" x={PANEL_X + 18} y={PANEL_Y + 228}>
            {t("Polarity is local to this frame.")}
          </text>
        </svg>
      </div>

      {/* One span per variable. The legend lays its children out as flex items, so
          a single span holding all three wraps letter by letter at narrow widths. */}
      <div className="galo-figure__legend">
        <span>
          <bdi dir="ltr">n</bdi> {t("is the level")}
        </span>
        <span>
          <bdi dir="ltr">k</bdi> {t("is the arity")}
        </span>
        <span>
          <bdi dir="ltr">m</bdi> {t("is the route length")}
        </span>
        <span>{t("Three independent numbers. Nothing makes them agree, and they are read apart everywhere.")}</span>
      </div>
    </figure>
  );
}
