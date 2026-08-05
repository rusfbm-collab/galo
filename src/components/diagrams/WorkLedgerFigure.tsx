import { useId } from "react";
import { releaseEvidence } from "../../content/evidence";
import { useI18n } from "../../i18n/I18nContext";

const WIDTH = 660;
const ROW_HEIGHT = 40;
const LABEL_WIDTH = 214;
const TRACK_WIDTH = 330;
const rows = releaseEvidence.workLedger;
const HEIGHT = ROW_HEIGHT * rows.length + 24;
const maximum = rows.reduce((peak, row) => Math.max(peak, row.value), 0);

/**
 * The receipt-derived work ledger as a magnitude chart. Two phases are exactly zero
 * in this release, and the chart shows that instead of hiding the rows.
 */
export function WorkLedgerFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();

  return (
    <figure className="galo-figure galo-figure--ledger">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("WHERE THE 4,802 COUNTED WORK UNITS COME FROM")}</span>
        <strong>{t("Two phases carry almost everything, and two phases are exactly zero.")}</strong>
        <span className="galo-figure__note">
          {t(
            "Outcome evaluation and policy update contribute nothing in this release because neither is implemented yet. Showing the empty rows is the point: they mark exactly where the next stage of work begins.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("Work units recorded per execution phase")}</title>
          <desc id={descriptionId}>
            {t(
              "A horizontal bar chart of six phases. Selector records 2,852 work units, shared preparation 1,902, baseline action 24, treatment action 24, and outcome evaluation and policy update record none.",
            )}
          </desc>

          {rows.map((row, index) => {
            const y = 12 + index * ROW_HEIGHT;
            const width = maximum > 0 ? (row.value / maximum) * TRACK_WIDTH : 0;
            const isEmpty = row.value === 0;
            return (
              <g key={row.label} className={isEmpty ? "galo-ledger__row is-empty" : "galo-ledger__row"}>
                <text className="galo-ledger__label" x={LABEL_WIDTH} y={y + 20} textAnchor="end">
                  {t(row.label)}
                </text>
                <line
                  className="galo-ledger__track"
                  x1={LABEL_WIDTH + 16}
                  y1={y + 16}
                  x2={LABEL_WIDTH + 16 + TRACK_WIDTH}
                  y2={y + 16}
                />
                {!isEmpty && (
                  <rect className="galo-ledger__bar" x={LABEL_WIDTH + 16} y={y + 6} width={width} height="20" rx="4" />
                )}
                <text
                  className="galo-ledger__value"
                  x={LABEL_WIDTH + 16 + (isEmpty ? 8 : width + 10)}
                  y={y + 21}
                  direction="ltr"
                >
                  {row.value.toLocaleString("en-US")}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="galo-figure__total">
        <span>{t("Physical total")}</span>
        <strong dir="ltr">4,802</strong>
        <code dir="ltr">1,902 + 2,852 + 24 + 24 = 4,802</code>
      </div>

      <p className="galo-figure__note galo-figure__note--boundary">
        {t(
          "This is an internal count of receipt work-unit IDs. It is not elapsed time, energy, cost, speedup, or any external result.",
        )}
      </p>
    </figure>
  );
}
