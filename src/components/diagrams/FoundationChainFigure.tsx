import { useId } from "react";
import { useI18n } from "../../i18n/I18nContext";

const layers = [
  { key: "table", label: "Cayley table", note: "one filled cell per input pair", tone: "base" },
  { key: "coordinate", label: "Typed coordinate", note: "the cell plus the roles of its inputs", tone: "base" },
  { key: "program", label: "Bracketed program", note: "cells composed into an explicit tree", tone: "mid" },
  { key: "selection", label: "Bounded selection", note: "a declared filter chain over a finite universe", tone: "mid" },
  { key: "receipt", label: "Execution receipt", note: "what ran, in what scope, with what status", tone: "top" },
  { key: "evidence", label: "Published evidence", note: "counts and boundaries anyone can recompute", tone: "top" },
] as const;

const WIDTH = 640;
const ROW = 52;
const HEIGHT = ROW * layers.length + 24;

/**
 * The spine of the whole project: every published artefact is a layer resting on
 * one finite Cayley table, and nothing skips a layer.
 */
export function FoundationChainFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();
  const arrowId = useId();

  return (
    <figure className="galo-figure galo-figure--chain">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("THE WHOLE PROJECT RESTS ON ONE OBJECT")}</span>
        <strong>{t("Every number published on this site traces back to a finite table.")}</strong>
        <span className="galo-figure__note">
          {t(
            "Read the stack from the bottom. Each layer only adds what the layer beneath it can already support, and no layer may be quoted as if it were a higher one.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("Layer stack from the Cayley table to published evidence")}</title>
          <desc id={descriptionId}>
            {t(
              "Six stacked bars read from the bottom upward: the Cayley table, the typed coordinate, the bracketed program, the bounded selection, the execution receipt, and the published evidence. An arrow runs upward through all of them.",
            )}
          </desc>
          <defs>
            <marker id={arrowId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" fill="var(--chart-neutral-strong)" />
            </marker>
          </defs>

          <path className="galo-chain__spine" d={`M28 ${HEIGHT - 16} V 26`} markerEnd={`url(#${arrowId})`} />

          {[...layers].reverse().map((layer, index) => {
            const y = 12 + index * ROW;
            return (
              <g key={layer.key} className={`galo-chain__layer is-${layer.tone}`}>
                <rect x="46" y={y} width={WIDTH - 62} height={ROW - 12} rx="10" />
                <text className="galo-chain__label" x="66" y={y + 18}>
                  {t(layer.label)}
                </text>
                <text className="galo-chain__note" x="66" y={y + 33}>
                  {t(layer.note)}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="galo-figure__pair">
        <p>
          <strong>{t("Reading upward")}</strong>
          <span>{t("Each layer is built only from what the layer below has already established.")}</span>
        </p>
        <p>
          <strong>{t("Reading downward")}</strong>
          <span>{t("Any published figure can be followed back down to the exact table cells it came from.")}</span>
        </p>
      </div>
    </figure>
  );
}
