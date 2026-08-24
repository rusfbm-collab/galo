import { lawfulExits, routePhases } from "../../content/thinking";
import { useI18n } from "../../i18n/I18nContext";

const WIDTH = 400;
const HEIGHT = 344;

const CHIP_X = 14;
const CHIP_WIDTH = 300;
const CHIP_HEIGHT = 28;
const ROW_STEP = 40;
const ROW_TOP = 6;

/** The rail the two exits hang off, in the left gutter, collecting every phase. */
const RAIL_X = 334;
const SPINE_Y = 292;
const EXIT_Y = 302;
const EXIT_HEIGHT = 34;
const EXIT_WIDTH = 178;
const EXIT_X = [14, 208];

const rowY = (index: number) => ROW_TOP + index * ROW_STEP;

/**
 * The home-page figure: one episode, top to bottom, with the two lawful exits
 * hanging off a rail that touches every phase rather than only the last one.
 *
 * It replaces the seven towers, which drew the levels rather than the reasoning
 * and needed a caption denying that a taller tower meant a cleverer system. This
 * one carries the claim the page actually makes — a closed route, a counted
 * budget, and a stop that is an outcome — and the glosses come from the same
 * phase list the thinking page renders, so the two cannot drift apart.
 */
export function HeroReasoningRoute() {
  const { t } = useI18n();

  return (
    <svg
      className="hero-route"
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      role="img"
      aria-labelledby="hero-route-title hero-route-desc"
    >
      <title id="hero-route-title">{t("One episode of GALO reasoning, drawn from opening to seal")}</title>
      <desc id="hero-route-desc">
        {t(
          "Seven phases stacked top to bottom, from opening the possibilities to sealing the episode, each joined to the next by an arrow and carrying its technical code beside its plain name. A dashed rail runs down the right of all seven and ends in two boxes, one for a lawful run that needs more evidence and one for an invalid run, so either exit is reachable from any phase.",
        )}
      </desc>

      <defs>
        <marker
          id="hero-route-arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto"
        >
          <path d="M0 0 L10 5 L0 10 z" fill="rgba(122, 226, 208, 0.75)" />
        </marker>
      </defs>

      {/* The rail is drawn first so the chips sit on top of its stubs. */}
      {routePhases.map((phase, index) => (
        <path
          key={`stub-${phase.number}`}
          className="hero-route__rail"
          d={`M${CHIP_X + CHIP_WIDTH} ${rowY(index) + CHIP_HEIGHT / 2} H ${RAIL_X}`}
        />
      ))}
      <path
        className="hero-route__rail"
        d={`M${RAIL_X} ${rowY(0) + CHIP_HEIGHT / 2} V ${SPINE_Y} H ${EXIT_X[0]! + EXIT_WIDTH / 2}`}
      />
      {EXIT_X.map((x) => (
        <path
          key={`drop-${x}`}
          className="hero-route__rail"
          d={`M${x + EXIT_WIDTH / 2} ${SPINE_Y} V ${EXIT_Y - 6}`}
          markerEnd="url(#hero-route-arrow)"
        />
      ))}

      {routePhases.slice(0, -1).map((phase, index) => (
        <path
          key={`link-${phase.number}`}
          className="hero-route__link"
          d={`M${CHIP_X + 26} ${rowY(index) + CHIP_HEIGHT} V ${rowY(index + 1) - 4}`}
          markerEnd="url(#hero-route-arrow)"
        />
      ))}

      {routePhases.map((phase, index) => {
        const y = rowY(index);
        return (
          <g key={phase.number} className="hero-route__phase">
            <rect x={CHIP_X} y={y} width={CHIP_WIDTH} height={CHIP_HEIGHT} rx="9" />
            <text className="hero-route__name" x={CHIP_X + 12} y={y + 18}>
              {t(phase.publicName)}
            </text>
            <text
              className="hero-route__gloss"
              x={CHIP_X + CHIP_WIDTH - 12}
              y={y + 18}
              textAnchor="end"
              direction="ltr"
            >
              {phase.name}
            </text>
          </g>
        );
      })}

      {lawfulExits.map((exit, index) => (
        <g key={exit.terminal} className={`hero-route__exit${index === 1 ? " is-reject" : ""}`}>
          <rect x={EXIT_X[index]} y={EXIT_Y} width={EXIT_WIDTH} height={EXIT_HEIGHT} rx="8" />
          <text
            className="hero-route__exit-plain"
            x={EXIT_X[index]! + EXIT_WIDTH / 2}
            y={EXIT_Y + 15}
            textAnchor="middle"
          >
            {t(exit.plain)}
          </text>
          <text
            className="hero-route__exit-code"
            x={EXIT_X[index]! + EXIT_WIDTH / 2}
            y={EXIT_Y + 27}
            textAnchor="middle"
            direction="ltr"
          >
            {exit.terminal}
          </text>
        </g>
      ))}
    </svg>
  );
}
