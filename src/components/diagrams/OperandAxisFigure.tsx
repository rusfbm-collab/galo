import { useId } from "react";
import { galoActionFamilies } from "../../content/mathematics";
import { useI18n } from "../../i18n/I18nContext";

const WIDTH = 660;
const HEIGHT = 250;
const CELL_W = 250;
const CELL_H = 82;
const GRID_X = 132;
const GRID_Y = 58;

/**
 * Why four families and not two, or eight.
 *
 * The orientation is the part readers reliably get wrong: they take LEFT and
 * RIGHT for a third and fourth law. They are not. Two laws times two answers to
 * the question "which axis does the source occupy" gives four families, and the
 * grid makes that a piece of arithmetic instead of a definition to accept.
 */
const meanings: Record<string, { axis: string; reads: string }> = {
  PLUS_LEFT: { axis: "source on the row", reads: "The source is the pole the run is at; the active pole is supplied." },
  PLUS_RIGHT: { axis: "source on the column", reads: "The same law, with the two roles exchanged across the axes." },
  STAR_LEFT: { axis: "source on the row", reads: "Where P0 absorbs, and where a step can collapse the carrier." },
  STAR_RIGHT: {
    axis: "source on the column",
    reads: "A different map from STAR_LEFT, not the same one read backwards.",
  },
};

export function OperandAxisFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();

  return (
    <figure className="galo-figure galo-figure--axes">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("WHY FOUR FAMILIES AND NOT TWO")}</span>
        <strong>{t("Two laws, times two answers to one question, gives four.")}</strong>
        <span className="galo-figure__note">
          {t(
            "LEFT and RIGHT are not a third and fourth law. They answer a single question about a table that has already been fixed: which axis does the pole the run is standing on occupy, and which axis does the pole supplied to it occupy. Under a commutative law the answer would not matter; under STAR it decides the result.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("A two by two grid of laws against operand orientations")}</title>
          <desc id={descriptionId}>
            {t(
              "A grid with two rows labelled PLUS and STAR and two columns labelled LEFT and RIGHT. The four cells are the four typed action families, each naming which table axis the source pole occupies.",
            )}
          </desc>

          {["LEFT", "RIGHT"].map((orientation, column) => (
            <text
              key={orientation}
              className="galo-axes__head"
              x={GRID_X + column * (CELL_W + 8) + CELL_W / 2}
              y={GRID_Y - 16}
              textAnchor="middle"
              direction="ltr"
            >
              {orientation}
            </text>
          ))}

          {["PLUS", "STAR"].map((operation, row) => (
            <text
              key={operation}
              className="galo-axes__head"
              x={GRID_X - 18}
              y={GRID_Y + row * (CELL_H + 8) + CELL_H / 2}
              dominantBaseline="central"
              textAnchor="end"
              direction="ltr"
            >
              {operation}
            </text>
          ))}

          {galoActionFamilies.map((family) => {
            const [operation, orientation] = family.split("_");
            const row = operation === "PLUS" ? 0 : 1;
            const column = orientation === "LEFT" ? 0 : 1;
            const x = GRID_X + column * (CELL_W + 8);
            const y = GRID_Y + row * (CELL_H + 8);
            return (
              <g key={family} className={`galo-axes__cell is-${operation!.toLowerCase()}`}>
                <rect x={x} y={y} width={CELL_W} height={CELL_H} rx="12" />
                <text className="galo-axes__family" x={x + 16} y={y + 30} direction="ltr">
                  {family}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <ol className="galo-figure__stage-notes galo-figure__stage-notes--wide">
        {galoActionFamilies.map((family) => (
          <li key={family}>
            <strong dir="ltr">{family}</strong>
            <span>
              <b>{t(meanings[family]!.axis)}</b>
              {t(meanings[family]!.reads)}
            </span>
          </li>
        ))}
      </ol>

      <p className="galo-figure__foot">
        {t(
          "Four families and no fifth. A run that asked for an orientation outside this set would be asking for a table axis that does not exist, which is refused rather than approximated.",
        )}
      </p>
    </figure>
  );
}
