import { useId } from "react";
import { useI18n } from "../../i18n/I18nContext";

const WIDTH = 660;
const HEIGHT = 220;

const cases = [
  { label: "case A", index: 0 },
  { label: "case B", index: 1 },
  { label: "case C", index: 2 },
  { label: "case D", index: 3 },
] as const;

/**
 * What a level actually buys. Four cases that a four-position level tells apart
 * collapse into two when the same cases are carried into a two-position level.
 */
export function ResolutionLossFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();
  const arrowId = useId();

  return (
    <figure className="galo-figure galo-figure--resolution">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("WHAT A LEVEL ACTUALLY BUYS")}</span>
        <strong>{t("A coarser level does not lie. It stops being able to tell two cases apart.")}</strong>
        <span className="galo-figure__note">
          {t(
            "Four situations that L4 keeps separate collapse into two when they are carried down into L2. Nothing becomes wrong; a distinction simply stops existing, and any decision that depended on it can no longer be made.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("Four cases at L4 collapsing into two at L2")}</title>
          <desc id={descriptionId}>
            {t(
              "On the left, four separately labelled positions at L4. Arrows carry them into L2 on the right, where the first and third arrive at the same position and the second and fourth arrive at the other.",
            )}
          </desc>
          <defs>
            <marker id={arrowId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" fill="var(--chart-neutral-strong)" />
            </marker>
          </defs>

          <text className="galo-resolution__title" x="70" y="26" textAnchor="middle" direction="ltr">
            L4
          </text>
          <text className="galo-resolution__title" x={WIDTH - 90} y="26" textAnchor="middle" direction="ltr">
            L2
          </text>

          {cases.map((item, index) => {
            const y = 52 + index * 40;
            const target = index % 2 === 0 ? 92 : 152;
            return (
              <g key={item.label} className={`galo-resolution__row is-${index % 2 === 0 ? "even" : "odd"}`}>
                <rect x="26" y={y - 15} width="88" height="30" rx="9" />
                <text x="70" y={y} dominantBaseline="central" textAnchor="middle" direction="ltr">
                  P{index}
                </text>
                <text className="galo-resolution__case" x="128" y={y} dominantBaseline="central">
                  {t(item.label)}
                </text>
                <path
                  className="galo-resolution__link"
                  d={`M262 ${y} C 380 ${y}, 400 ${target}, ${WIDTH - 142} ${target}`}
                  markerEnd={`url(#${arrowId})`}
                />
              </g>
            );
          })}

          <g className="galo-resolution__target">
            <rect x={WIDTH - 134} y="77" width="88" height="30" rx="9" />
            <text x={WIDTH - 90} y="92" dominantBaseline="central" textAnchor="middle" direction="ltr">
              P0
            </text>
          </g>
          <g className="galo-resolution__target is-odd">
            <rect x={WIDTH - 134} y="137" width="88" height="30" rx="9" />
            <text x={WIDTH - 90} y="152" dominantBaseline="central" textAnchor="middle" direction="ltr">
              P1
            </text>
          </g>

          <text className="galo-resolution__foot" x="26" y={HEIGHT - 14}>
            {t("four cases kept apart")}
          </text>
          <text className="galo-resolution__foot" x={WIDTH - 240} y={HEIGHT - 14}>
            {t("two cases remain")}
          </text>
        </svg>
      </div>

      <div className="galo-figure__pair">
        <p>
          <strong>{t("Why not always use the finest level")}</strong>
          <span>
            {t(
              "More positions means more coordinates to declare, check, and maintain. The cost is real, so the level is chosen rather than maximised.",
            )}
          </span>
        </p>
        <p>
          <strong>{t("What is not claimed")}</strong>
          <span>
            {t(
              "Choosing the level automatically from the situation is target architecture. The current engine does not select a level in response to an observation.",
            )}
          </span>
        </p>
      </div>
    </figure>
  );
}
