import { useId } from "react";
import { useI18n } from "../../i18n/I18nContext";

const WIDTH = 640;
const HEIGHT = 250;

/**
 * The preservation equation drawn as a commuting square, once where it closes and
 * once where it does not. This is the single picture behind every level-transfer
 * claim on the site.
 */
export function CommutingSquareFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();
  const arrowId = useId();
  const failId = useId();

  const square = (offsetX: number, ok: boolean) => {
    const left = offsetX + 40;
    const right = offsetX + 230;
    const top = 76;
    const bottom = 176;
    const marker = ok ? arrowId : failId;
    return (
      <g className={ok ? "galo-square is-ok" : "galo-square is-fail"}>
        <text className="galo-square__title" x={offsetX + 135} y="48" textAnchor="middle">
          {ok ? t("closes: L2 into L4") : t("does not close: L3 into L5")}
        </text>

        <text className="galo-square__corner" x={left} y={top} textAnchor="middle" direction="ltr">
          {ok ? "(P1, P1)" : "(P1, P2)"}
        </text>
        <text className="galo-square__corner" x={right} y={top} textAnchor="middle" direction="ltr">
          {ok ? "P0" : "P0"}
        </text>
        <text className="galo-square__corner" x={left} y={bottom} textAnchor="middle" direction="ltr">
          {ok ? "(P2, P2)" : "(fP1, fP2)"}
        </text>
        <text className="galo-square__corner" x={right} y={bottom} textAnchor="middle" direction="ltr">
          {ok ? "P0" : "P3"}
        </text>

        <path
          className="galo-square__edge"
          d={`M${left + 34} ${top - 5} H ${right - 26}`}
          markerEnd={`url(#${marker})`}
        />
        <path
          className="galo-square__edge"
          d={`M${left + 34} ${bottom - 5} H ${right - 26}`}
          markerEnd={`url(#${marker})`}
        />
        <path
          className="galo-square__edge"
          d={`M${left} ${top + 10} V ${bottom - 22}`}
          markerEnd={`url(#${arrowId})`}
        />
        <path
          className="galo-square__edge"
          d={`M${right} ${top + 10} V ${bottom - 22}`}
          markerEnd={`url(#${arrowId})`}
        />

        <text
          className="galo-square__edge-label"
          x={(left + right) / 2}
          y={top - 12}
          textAnchor="middle"
          direction="ltr"
        >
          ⊕
        </text>
        <text
          className="galo-square__edge-label"
          x={(left + right) / 2}
          y={bottom - 12}
          textAnchor="middle"
          direction="ltr"
        >
          ⊕
        </text>
        <text
          className="galo-square__edge-label"
          x={left - 16}
          y={(top + bottom) / 2}
          textAnchor="middle"
          direction="ltr"
        >
          f
        </text>
        <text
          className="galo-square__edge-label"
          x={right + 16}
          y={(top + bottom) / 2}
          textAnchor="middle"
          direction="ltr"
        >
          f
        </text>

        <text
          className={ok ? "galo-square__verdict is-ok" : "galo-square__verdict is-fail"}
          x={offsetX + 135}
          y="212"
          textAnchor="middle"
          direction="ltr"
        >
          {ok ? "P0 = P0" : "P0 ≠ P3"}
        </text>
      </g>
    );
  };

  return (
    <figure className="galo-figure galo-figure--square">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("ONE PICTURE BEHIND EVERY LEVEL TRANSFER")}</span>
        <strong>{t("Compute first and then translate, or translate first and then compute.")}</strong>
        <span className="galo-figure__note">
          {t(
            "Take two positions. Go right along the top: combine them, then translate the result. Go down and along the bottom: translate each one, then combine. A lawful map is exactly one where both routes land on the same position.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("Two commuting squares, one closing and one failing")}</title>
          <desc id={descriptionId}>
            {t(
              "Two squares. In the left square both routes reach P0, so the map is lawful. In the right square the top route reaches P0 and the bottom route reaches P3, so the candidate map is rejected.",
            )}
          </desc>
          <defs>
            <marker id={arrowId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" fill="var(--chart-neutral-strong)" />
            </marker>
            <marker id={failId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" fill="var(--chart-2)" />
            </marker>
          </defs>
          {square(20, true)}
          <line className="galo-square__split" x1={WIDTH / 2} y1="28" x2={WIDTH / 2} y2={HEIGHT - 24} />
          {square(WIDTH / 2 + 20, false)}
        </svg>
      </div>

      <div className="galo-figure__pair">
        <p>
          <strong dir="ltr">L2 → L4</strong>
          <span>
            {t(
              "Both routes agree on every input pair and in all four typed families, so the map is admitted and the transfer is lawful.",
            )}
          </span>
        </p>
        <p>
          <strong dir="ltr">L3 → L5</strong>
          <span>
            {t(
              "One disagreeing pair is enough to reject the candidate. The zero map still closes the square, because it sends both routes to P0.",
            )}
          </span>
        </p>
      </div>
    </figure>
  );
}
