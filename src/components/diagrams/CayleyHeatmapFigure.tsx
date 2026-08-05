import { useState } from "react";
import { buildCayleyTable, type GaloLevel, type GaloOperation } from "../../content/mathematics";
import { useI18n } from "../../i18n/I18nContext";

const selectableLevels: readonly GaloLevel[] = [2, 3, 4, 5, 6, 7];
const RAMP_STEPS = 7;

function rampIndex(result: number, level: number) {
  if (level <= 1) return 0;
  return Math.round((result / (level - 1)) * (RAMP_STEPS - 1));
}

function HeatTable({
  operation,
  level,
  caption,
  resetLabel,
}: {
  operation: GaloOperation;
  level: GaloLevel;
  caption: string;
  resetLabel: string;
}) {
  const table = buildCayleyTable(operation, level);

  return (
    <div className="galo-heat__table-wrap">
      <table className="galo-heat__table" dir="ltr">
        <caption>{caption}</caption>
        <thead>
          <tr>
            <th scope="col">{operation === "PLUS" ? "+" : "★"}</th>
            {table.map((_, column) => (
              <th key={`head-${column}`} scope="col">
                P{column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.map((row, rowIndex) => {
            const isResetRow = operation === "STAR" && rowIndex === 0;
            return (
              <tr key={`row-${rowIndex}`} className={isResetRow ? "is-reset-row" : undefined}>
                <th scope="row">
                  P{rowIndex}
                  {isResetRow && <span className="galo-heat__reset-tag">{resetLabel}</span>}
                </th>
                {row.map((cell) => (
                  <td
                    key={`cell-${cell.left}-${cell.right}`}
                    className={`galo-heat__cell galo-heat__cell--${rampIndex(cell.result, level)}`}
                  >
                    P{cell.result}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Both complete finite tables rendered as a colour field so the STAR reset row is
 * visible as a shape before any formula is read.
 */
export function CayleyHeatmapFigure() {
  const { t } = useI18n();
  const [level, setLevel] = useState<GaloLevel>(3);

  return (
    <figure className="galo-figure galo-figure--heat">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("BOTH COMPLETE TABLES AT A GLANCE")}</span>
        <strong>{t("Colour the cells and the reset row becomes a shape you can see.")}</strong>
        <span className="galo-figure__note">
          {t(
            "Each cell is shaded by the position it produces: light for P0, dark for the highest position at that level. The PLUS field is symmetric across its diagonal; the STAR field carries one flat band along its first row.",
          )}
        </span>
      </figcaption>

      <div className="galo-heat__controls" role="group" aria-label={t("Level for both coloured tables")}>
        <span>{t("Level")}</span>
        {selectableLevels.map((option) => (
          <button
            key={option}
            type="button"
            className={option === level ? "is-active" : undefined}
            aria-pressed={option === level}
            onClick={() => setLevel(option)}
          >
            <bdi dir="ltr">L{option}</bdi>
          </button>
        ))}
      </div>

      <div className="galo-heat__grid">
        <HeatTable
          operation="PLUS"
          level={level}
          caption={t("PLUS field at L{level}", { level })}
          resetLabel={t("reset row")}
        />
        <HeatTable
          operation="STAR"
          level={level}
          caption={t("STAR field at L{level}", { level })}
          resetLabel={t("reset row")}
        />
      </div>

      <div className="galo-heat__legend">
        <span>{t("Position produced")}</span>
        <div className="galo-heat__ramp" aria-hidden="true">
          {Array.from({ length: RAMP_STEPS }, (_, step) => (
            <i key={step} className={`galo-heat__cell--${step}`} />
          ))}
        </div>
        <small dir="ltr">P0 → P{level - 1}</small>
      </div>

      <p className="galo-figure__note galo-figure__note--boundary">
        {t(
          "Colour is a reading aid only. Every cell also carries its exact label, and a higher position is not a larger, better, or more certain value.",
        )}
      </p>
    </figure>
  );
}
