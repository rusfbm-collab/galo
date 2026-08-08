import { towerCounts } from "../../content/mathematics";
import { useI18n } from "../../i18n/I18nContext";

const BLOCK_HEIGHT = 24;
const BLOCK_GAP = 5;
const TOWER_WIDTH = 46;
const TOWER_GAP = 20;
const BASELINE = 236;
const LEFT = 22;

/**
 * The seven levels, drawn as what they are: seven towers, each one block taller
 * than the one before it, because level L_n declares exactly n states. The block
 * at the foot of every tower is P0 — the one state that exists at every level.
 *
 * Heights are not decorative. Tower n has n blocks because the level has n poles,
 * and the block counts come straight from `towerCounts` rather than being drawn by eye.
 */
export function StateTowers() {
  const { t } = useI18n();

  const width = LEFT * 2 + towerCounts.length * TOWER_WIDTH + (towerCounts.length - 1) * TOWER_GAP;

  return (
    <svg
      className="hero-towers"
      viewBox={`0 0 ${width} ${BASELINE + 34}`}
      role="img"
      aria-labelledby="hero-towers-title hero-towers-desc"
    >
      <title id="hero-towers-title">{t("Seven levels drawn as seven towers of increasing height")}</title>
      <desc id="hero-towers-desc">
        {t(
          "Seven towers side by side, one per level. Tower L1 is one block tall and tower L7 is seven blocks tall, because level n declares exactly n states. The bottom block of every tower is P0, the state that exists at every level.",
        )}
      </desc>

      <line x1={LEFT - 8} y1={BASELINE} x2={width - LEFT + 8} y2={BASELINE} className="hero-towers__ground" />

      {towerCounts.map((row, index) => {
        const x = LEFT + index * (TOWER_WIDTH + TOWER_GAP);
        return (
          <g key={row.level}>
            {Array.from({ length: row.poles }, (_, block) => {
              const y = BASELINE - (block + 1) * BLOCK_HEIGHT - block * BLOCK_GAP;
              const isFloor = block === 0;
              return (
                <rect
                  key={block}
                  x={x}
                  y={y}
                  width={TOWER_WIDTH}
                  height={BLOCK_HEIGHT}
                  rx={5}
                  className={isFloor ? "hero-towers__block is-floor" : "hero-towers__block"}
                />
              );
            })}
            <text
              x={x + TOWER_WIDTH / 2}
              y={BASELINE - BLOCK_HEIGHT / 2 + 4}
              className="hero-towers__pole"
              direction="ltr"
            >
              P0
            </text>
            <text x={x + TOWER_WIDTH / 2} y={BASELINE + 22} className="hero-towers__level" direction="ltr">
              {`L${row.level}`}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
