import { useId } from "react";
import { canonicalTypedCellCount, declaredTableCount, galoLevels, tableCountDisplay } from "../../content/mathematics";
import { useI18n } from "../../i18n/I18nContext";

const WIDTH = 660;
const HEIGHT = 322;

const ROW_TOP = 58;
const ROW_STEP = 27;
const LABEL_X = 22;
const BAR_X = 60;
const BAR_MAX = 452;
const BAR_HEIGHT = 15;
const COUNT_X = 640;

/** Digits, not values: 10^41 against 10^1 on a linear axis would be one bar and six slivers. */
const digitsOf = (level: (typeof galoLevels)[number]) => tableCountDisplay(level).exponent + 1;
const MAX_DIGITS = Math.max(...galoLevels.map(digitsOf));

/**
 * How large the space of possible tables is, and how small the declared choice is.
 *
 * Every one of the n² cells in an n × n table may hold any of the n elements, so
 * there are n^(n²) tables to choose from at level n. The bars are drawn by digit
 * count rather than by value, because on a linear axis 10^41 next to 10^1 is one
 * bar and six invisible slivers — and the growth is the subject.
 *
 * The claim this figure makes is about enumerability, not about quality. GALO
 * declares two tables per level and freezes them; the figure says what that
 * choice was made out of, not that it was the best choice available.
 */
export function TableSpaceFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();

  return (
    <figure className="galo-figure galo-figure--table-space">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("HOW MANY TABLES THERE ARE, AND HOW MANY ARE DECLARED")}</span>
        <strong>{t("Past 10^41 to choose from at L7. Two are declared, and then frozen.")}</strong>
        <span className="galo-figure__note">
          {t(
            "Each of the n × n cells may hold any of the n positions, so a level of size n has n^(n²) possible tables. The bars count digits rather than values, because the growth is the subject: by L5 the space is past anything anyone could enumerate, and it keeps going.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>
            {t("The number of possible tables at each level, against the two that are declared")}
          </title>
          <desc id={descriptionId}>
            {t(
              "Seven horizontal bars, one per level, whose lengths follow the number of digits in the count of possible tables. Level 1 has one table, level 3 has 19,683, level 7 has more than 10 to the 41st. A short bar underneath marks the fourteen tables GALO actually declares.",
            )}
          </desc>

          <text className="galo-table-space__head" x={LABEL_X} y={22} direction="ltr">
            {t("POSSIBLE TABLES")}
          </text>
          <text className="galo-table-space__head" x={COUNT_X} y={22} textAnchor="end" direction="ltr">
            n^(n²)
          </text>
          <line className="galo-table-space__rule" x1={LABEL_X} y1={34} x2={COUNT_X} y2={34} />

          {galoLevels.map((level, index) => {
            const y = ROW_TOP + index * ROW_STEP;
            const width = Math.max(3, (digitsOf(level) / MAX_DIGITS) * BAR_MAX);
            const display = tableCountDisplay(level);
            return (
              <g key={level} className="galo-table-space__row">
                <text className="galo-table-space__level" x={LABEL_X} y={y + 12} direction="ltr">
                  {`L${level}`}
                </text>
                <rect x={BAR_X} y={y} width={width} height={BAR_HEIGHT} rx="3" />
                <text className="galo-table-space__count" x={COUNT_X} y={y + 12} textAnchor="end" direction="ltr">
                  {display.exact ?? `${display.mantissa} × 10^${display.exponent}`}
                </text>
              </g>
            );
          })}

          <line
            className="galo-table-space__rule"
            x1={LABEL_X}
            y1={ROW_TOP + galoLevels.length * ROW_STEP + 8}
            x2={COUNT_X}
            y2={ROW_TOP + galoLevels.length * ROW_STEP + 8}
          />

          {/* Two lines rather than one: the label sits above the note, so a longer
              word in another language cannot run into it. */}
          <g className="galo-table-space__declared">
            <rect x={LABEL_X} y={ROW_TOP + galoLevels.length * ROW_STEP + 22} width="8" height="11" rx="2" />
            <text className="galo-table-space__level" x={LABEL_X + 16} y={ROW_TOP + galoLevels.length * ROW_STEP + 32}>
              {t("DECLARED")}
            </text>
            <text
              className="galo-table-space__declared-note"
              x={LABEL_X + 16}
              y={ROW_TOP + galoLevels.length * ROW_STEP + 52}
            >
              {t("PLUS and STAR at every level — {tables} tables, {cells} typed cells, frozen before anything runs", {
                tables: declaredTableCount,
                cells: canonicalTypedCellCount,
              })}
            </text>
          </g>
        </svg>
      </div>

      <div className="galo-figure__legend">
        <span>{t("Bars follow digit count, not value.")}</span>
        <span>
          {t("Nothing here says the two declared laws are the best two. It says what they were declared out of.")}
        </span>
      </div>
    </figure>
  );
}
