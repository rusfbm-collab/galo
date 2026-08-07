import { useId } from "react";
import { canonicalTypedCellCount, towerCounts } from "../../content/mathematics";
import { useI18n } from "../../i18n/I18nContext";

const COLUMNS = 40;
const ROWS = Math.ceil(canonicalTypedCellCount / COLUMNS);
const CELL = 13;
const GAP = 3;
const PAD = 12;
const WIDTH = PAD * 2 + COLUMNS * CELL + (COLUMNS - 1) * GAP;
const HEIGHT = PAD * 2 + ROWS * CELL + (ROWS - 1) * GAP;

/** Which level each mark belongs to, so the seven bands are the real per-level counts. */
const levelOfMark = towerCounts.flatMap((row) => Array.from({ length: row.typedCells }, () => row.level));
const marks = Array.from({ length: canonicalTypedCellCount }, (_, index) => index);
const bandCounts = towerCounts.map((row) => row.typedCells).join(", ");

/**
 * The whole declared index, drawn one mark per coordinate. The point of the
 * picture is that it ends: a reader can see the last mark, which is what makes
 * reading all of them a finite task rather than a sampling decision.
 */
export function ObjectSizeFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();

  return (
    <figure className="galo-figure galo-figure--size">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("THE ENTIRE DECLARED INDEX, DRAWN IN FULL")}</span>
        <strong>{t("This is all of it. Every mark below is one coordinate, and there are no others.")}</strong>
        <span className="galo-figure__note">
          {t(
            "Most systems of this kind cannot be drawn, because there is no complete list to draw. Here the list is complete by construction, so the picture has an edge — and the edge is the whole argument for why a reviewer can read the index instead of sampling it.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("A grid of 560 marks, one per declared coordinate")}</title>
          <desc id={descriptionId}>
            {t(
              "A rectangular grid of 560 small squares arranged in 40 columns. The squares are shaded in seven bands, one per level of the tower, and the bands widen because each level contributes four times the square of its size.",
            )}
          </desc>
          {marks.map((index) => {
            const column = index % COLUMNS;
            const row = Math.floor(index / COLUMNS);
            // The band is the level the coordinate belongs to, so the widening
            // stripes are the real per-level counts rather than a decoration.
            const band = levelOfMark[index]! - 1;
            return (
              <rect
                key={index}
                className={`galo-size__mark is-band-${band}`}
                x={PAD + column * (CELL + GAP)}
                y={PAD + row * (CELL + GAP)}
                width={CELL}
                height={CELL}
                rx="3"
              />
            );
          })}
        </svg>
      </div>

      <p className="galo-figure__legend galo-figure__legend--bands">
        <span>{t("Marks per level, from L1 to L7")}</span>
        <bdi dir="ltr">{bandCounts}</bdi>
      </p>

      <div className="galo-figure__pair">
        <p>
          <strong dir="ltr">{canonicalTypedCellCount}</strong>
          <span>
            {t(
              "Oriented typed transition coordinates. The number is reached by counting each level and adding the counts, not by estimating.",
            )}
          </span>
        </p>
        <p>
          <strong dir="ltr">0</strong>
          <span>
            {t(
              "Coordinates outside this picture. A behaviour that is not one of these marks is not something the declared layer can do at all.",
            )}
          </span>
        </p>
      </div>

      <p className="galo-figure__note galo-figure__note--boundary">
        {t(
          "A small index is not a better index. It is a checkable one: the claim here is about what a reviewer can finish reading, not about capability.",
        )}
      </p>
    </figure>
  );
}
