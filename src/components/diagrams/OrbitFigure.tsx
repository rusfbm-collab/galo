import { useId } from "react";
import { useI18n } from "../../i18n/I18nContext";

/**
 * The L3 unit action drawn as a relabelling. Two orbits mean two genuinely
 * different cases, not two objects that happen to look alike.
 */
export function OrbitFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();
  const arrowId = useId();

  return (
    <figure className="galo-figure galo-figure--orbit">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("TWO ORBITS AT L3")}</span>
        <strong>{t("One allowed relabelling splits three positions into two different cases.")}</strong>
        <span className="galo-figure__note">
          {t(
            "At L3 exactly one non-trivial relabelling preserves both laws: it swaps P1 with P2 and leaves P0 where it is. Positions that can be exchanged this way belong to the same orbit.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox="0 0 620 240" role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("Orbits of the three L3 positions")}</title>
          <desc id={descriptionId}>
            {t(
              "P0 sits alone inside its own capsule with a self-loop. P1 and P2 sit together inside a second capsule joined by a double-headed arrow, because the allowed relabelling exchanges them.",
            )}
          </desc>
          <defs>
            <marker id={arrowId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" fill="var(--chart-2)" />
            </marker>
          </defs>

          <g className="galo-orbit__capsule galo-orbit__capsule--fixed">
            <rect x="24" y="52" width="192" height="140" rx="26" />
            <text x="120" y="82" textAnchor="middle">
              {t("orbit of size 1")}
            </text>
          </g>
          <g className="galo-orbit__node is-fixed">
            <circle cx="120" cy="136" r="30" />
            <text x="120" y="136" dominantBaseline="central" textAnchor="middle" direction="ltr">
              P0
            </text>
          </g>
          <path className="galo-orbit__loop" d="M143 117 A 24 24 0 1 1 143 155" markerEnd={`url(#${arrowId})`} />
          <text className="galo-orbit__note" x="120" y="212" textAnchor="middle">
            {t("every relabelling fixes it")}
          </text>

          <g className="galo-orbit__capsule galo-orbit__capsule--swapped">
            <rect x="264" y="52" width="332" height="140" rx="26" />
            <text x="430" y="82" textAnchor="middle">
              {t("orbit of size 2")}
            </text>
          </g>
          <g className="galo-orbit__node is-swapped">
            <circle cx="340" cy="136" r="30" />
            <text x="340" y="136" dominantBaseline="central" textAnchor="middle" direction="ltr">
              P1
            </text>
          </g>
          <g className="galo-orbit__node is-swapped">
            <circle cx="520" cy="136" r="30" />
            <text x="520" y="136" dominantBaseline="central" textAnchor="middle" direction="ltr">
              P2
            </text>
          </g>
          <path className="galo-orbit__swap" d="M374 122 H 486" markerEnd={`url(#${arrowId})`} />
          <path className="galo-orbit__swap" d="M486 150 H 374" markerEnd={`url(#${arrowId})`} />
          <text className="galo-orbit__note" x="430" y="212" textAnchor="middle">
            {t("exchanged by the relabelling u=2")}
          </text>
        </svg>
      </div>

      <div className="galo-figure__counter">
        <div>
          <span>{t("Identity leaves fixed")}</span>
          <strong dir="ltr">3</strong>
        </div>
        <div>
          <span>{t("The swap leaves fixed")}</span>
          <strong dir="ltr">1</strong>
        </div>
        <div className="is-result">
          <span>{t("Average number of fixed positions")}</span>
          <strong dir="ltr">(3+1)/2 = 2</strong>
        </div>
      </div>

      <p className="galo-figure__note galo-figure__note--boundary">
        {t(
          "Belonging to one orbit means the structure cannot tell the two positions apart. It does not merge their meaning, their provenance, their permissions, or their consequences.",
        )}
      </p>
    </figure>
  );
}
