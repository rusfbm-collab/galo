import { useId } from "react";
import { useI18n } from "../../i18n/I18nContext";

const WIDTH = 640;
const HEIGHT = 234;

/** Exact register names, kept untranslated and left-to-right in every locale. */
const carriedValues = ["position", "boundary", "ledger"];
const droppedValues = ["weights", "preference"];

/**
 * What crosses the line between one thought and the next. Three registers do;
 * two things that a trained system would carry deliberately do not.
 */
export function ThinkingMemoryFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();

  return (
    <figure className="galo-figure galo-figure--memory">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("WHAT CROSSES INTO THE NEXT THOUGHT")}</span>
        <strong>{t("Three registers are carried forward. Two familiar ones are not.")}</strong>
        <span className="galo-figure__note">
          {t(
            "Everything the engine still holds after a run can be printed out in full. That is what makes a later disagreement resolvable: two runs can be compared register by register instead of being argued about.",
          )}
        </span>
      </figcaption>

      <div className="galo-memory__bands">
        <span className="galo-memory__band-tag">{t("carried across runs")}</span>
        <span className="galo-memory__band-tag is-dropped">{t("never carried, and never accumulated")}</span>
      </div>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("Carried and non-carried state between two runs")}</title>
          <desc id={descriptionId}>
            {t(
              "An upper band with three solid boxes labelled position, boundary, and ledger, and a lower band drawn with a dashed border containing two boxes labelled weights and preference, each marked with a cross.",
            )}
          </desc>

          <g className="galo-memory__band">
            <rect x="14" y="16" width={WIDTH - 28} height="82" rx="18" />
          </g>
          {carriedValues.map((value, index) => (
            <g key={value} className="galo-memory__node">
              <rect x={32 + index * 194} y={38} width="176" height="40" rx="11" />
              <text x={32 + index * 194 + 88} y={58} dominantBaseline="central" textAnchor="middle" direction="ltr">
                {value}
              </text>
            </g>
          ))}

          <g className="galo-memory__band is-dropped">
            <rect x="14" y="118" width={WIDTH - 28} height="82" rx="18" />
          </g>
          {droppedValues.map((value, index) => (
            <g key={value} className="galo-memory__node is-dropped">
              <rect x={32 + index * 194} y={140} width="176" height="40" rx="11" />
              <text x={32 + index * 194 + 88} y={160} dominantBaseline="central" textAnchor="middle" direction="ltr">
                {value}
              </text>
              <text
                className="galo-memory__cross"
                x={32 + index * 194 + 18}
                y={160}
                dominantBaseline="central"
                textAnchor="middle"
                direction="ltr"
              >
                ✗
              </text>
            </g>
          ))}
          <text className="galo-memory__zero" x={WIDTH - 32} y="164" textAnchor="end" direction="ltr">
            learning_writes = 0
          </text>

          <text className="galo-memory__foot" x="14" y={HEIGHT - 8}>
            {t("two runs of the same release are bounded identically")}
          </text>
        </svg>
      </div>
    </figure>
  );
}
