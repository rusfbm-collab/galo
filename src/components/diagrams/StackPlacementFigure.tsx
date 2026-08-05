import { useId } from "react";
import { useI18n } from "../../i18n/I18nContext";

const WIDTH = 660;
const HEIGHT = 258;
const LAYER_X = 20;
const LAYER_WIDTH = WIDTH - 40;

const layers = [
  { id: "proposer", y: 18, tag: "open-ended", label: "Anything that proposes: a model, a rule engine, or a person" },
  { id: "verified", y: 100, tag: "declared", label: "The declared layer: admits, executes within a contract, records" },
  { id: "system", y: 182, tag: "of record", label: "The system that actually moves money, machinery, or a case file" },
] as const;

const LAYER_HEIGHT = 58;

/**
 * Where a layer of this shape would sit. It is not a replacement for either
 * neighbour: it is the part between them that has to be defensible.
 */
export function StackPlacementFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();
  const downId = useId();
  const upId = useId();

  return (
    <figure className="galo-figure galo-figure--stack">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("WHERE A LAYER LIKE THIS WOULD SIT")}</span>
        <strong>{t("Between the thing that proposes and the thing that cannot be undone.")}</strong>
        <span className="galo-figure__note">
          {t(
            "Nothing here replaces the layer above it or the layer below it. The claim is narrower and more boring than that: the middle band is the part a reviewer has to be able to argue with, so it is the part that is written out in advance.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("Three stacked layers with the declared layer in the middle")}</title>
          <desc id={descriptionId}>
            {t(
              "Three full-width bands. The top band is anything that proposes an action. The middle band, highlighted, admits or refuses the proposal, executes inside a contract, and writes a record. The bottom band is the system that carries out the consequence. Arrows run down from each band to the next and back up again.",
            )}
          </desc>
          <defs>
            <marker id={downId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" fill="var(--chart-neutral-strong)" />
            </marker>
            <marker id={upId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" fill="var(--chart-1)" />
            </marker>
          </defs>

          {layers.map((layer) => (
            <g key={layer.id} className={`galo-stack__layer is-${layer.id}`}>
              <rect x={LAYER_X} y={layer.y} width={LAYER_WIDTH} height={LAYER_HEIGHT} rx="14" />
              <text className="galo-stack__tag" x={LAYER_X + 18} y={layer.y + 22} direction="ltr">
                {layer.tag}
              </text>
              <text className="galo-stack__label" x={LAYER_X + 18} y={layer.y + 42}>
                {t(layer.label)}
              </text>
            </g>
          ))}

          <path className="galo-stack__down" d="M170 76 V 94" markerEnd={`url(#${downId})`} />
          <path className="galo-stack__down" d="M170 158 V 176" markerEnd={`url(#${downId})`} />
          <path className="galo-stack__up" d="M480 94 V 76" markerEnd={`url(#${upId})`} />
          <path className="galo-stack__up" d="M480 176 V 158" markerEnd={`url(#${upId})`} />

          <text className="galo-stack__edge" x="182" y="90">
            {t("proposes")}
          </text>
          <text className="galo-stack__edge" x="182" y="172">
            {t("one bounded action")}
          </text>
          <text className="galo-stack__edge is-up" x="468" y="90" textAnchor="end">
            {t("admitted or refused, with a reason")}
          </text>
          <text className="galo-stack__edge is-up" x="468" y="172" textAnchor="end">
            {t("receipt")}
          </text>

          <text className="galo-stack__foot" x={LAYER_X} y={HEIGHT - 8}>
            {t("only the middle band is described on this site")}
          </text>
        </svg>
      </div>
    </figure>
  );
}
