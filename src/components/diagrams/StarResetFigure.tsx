import { useId } from "react";
import { useI18n } from "../../i18n/I18nContext";

/**
 * PLUS and STAR side by side. The only structural difference is the single
 * question STAR asks about its raw-left operand before it adds anything.
 */
export function StarResetFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();
  const arrowId = useId();

  return (
    <figure className="galo-figure galo-figure--star">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("THE ONE CLAUSE THAT SEPARATES STAR FROM PLUS")}</span>
        <strong>{t("PLUS always adds. STAR asks one question first.")}</strong>
        <span className="galo-figure__note">
          {t(
            "Only the left input is examined, and only before the addition. Everything that looks strange about STAR — no identity element, no commutativity, no associativity — follows from this single branch.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox="0 0 640 300" role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("Comparison of the PLUS and STAR evaluation paths")}</title>
          <desc id={descriptionId}>
            {t(
              "The upper lane shows PLUS taking two inputs straight into cyclic addition. The lower lane shows STAR routing the same two inputs through one decision: if the raw-left input is P0 the answer is P0, otherwise the same cyclic addition runs.",
            )}
          </desc>
          <defs>
            <marker id={arrowId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" fill="var(--chart-neutral-strong)" />
            </marker>
          </defs>

          <g className="galo-flow__lane">
            <text className="galo-flow__lane-label" x="8" y="26" direction="ltr">
              PLUS
            </text>

            <g className="galo-flow__node">
              <rect x="8" y="44" width="132" height="56" rx="14" />
              <text x="74" y="66" textAnchor="middle">
                {t("raw left")}
              </text>
              <text className="galo-flow__mono" x="74" y="86" textAnchor="middle" direction="ltr">
                P_i
              </text>
            </g>
            <g className="galo-flow__node">
              <rect x="8" y="112" width="132" height="56" rx="14" />
              <text x="74" y="134" textAnchor="middle">
                {t("raw right")}
              </text>
              <text className="galo-flow__mono" x="74" y="154" textAnchor="middle" direction="ltr">
                P_j
              </text>
            </g>

            <path className="galo-flow__link" d="M140 72 H 196 V 106" markerEnd={`url(#${arrowId})`} />
            <path className="galo-flow__link" d="M140 140 H 196 V 114" markerEnd={`url(#${arrowId})`} />

            <g className="galo-flow__node galo-flow__node--operation">
              <rect x="208" y="78" width="252" height="56" rx="14" />
              {/* The label is a full phrase and runs to 35 characters in Russian,
                  so it gets its own smaller size rather than a wider canvas. */}
              <text className="galo-flow__node-label" x="334" y="100" textAnchor="middle">
                {t("add the indices, then wrap")}
              </text>
              <text className="galo-flow__mono" x="334" y="120" textAnchor="middle" direction="ltr">
                (i+j) mod n
              </text>
            </g>

            <path className="galo-flow__link" d="M460 106 H 470" markerEnd={`url(#${arrowId})`} />

            <g className="galo-flow__node galo-flow__node--result">
              <rect x="482" y="78" width="150" height="56" rx="14" />
              <text x="557" y="100" textAnchor="middle">
                {t("one result")}
              </text>
              <text className="galo-flow__mono" x="557" y="120" textAnchor="middle" direction="ltr">
                P_k
              </text>
            </g>
          </g>

          <line className="galo-flow__divider" x1="8" y1="186" x2="632" y2="186" />

          <g className="galo-flow__lane">
            <text className="galo-flow__lane-label" x="8" y="212" direction="ltr">
              STAR
            </text>

            <g className="galo-flow__node">
              <rect x="8" y="226" width="132" height="52" rx="14" />
              <text x="74" y="248" textAnchor="middle">
                {t("raw left")}
              </text>
              <text className="galo-flow__mono" x="74" y="266" textAnchor="middle" direction="ltr">
                P_i
              </text>
            </g>

            <path className="galo-flow__link" d="M140 252 H 176" markerEnd={`url(#${arrowId})`} />

            <g className="galo-flow__decision">
              <path d="M256 218 L 320 252 L 256 286 L 192 252 Z" />
              <text x="256" y="248" textAnchor="middle">
                {t("left input")}
              </text>
              <text className="galo-flow__mono" x="256" y="266" textAnchor="middle" direction="ltr">
                = P0 ?
              </text>
            </g>

            <path
              className="galo-flow__link galo-flow__link--reset"
              d="M320 240 H 370 V 226"
              markerEnd={`url(#${arrowId})`}
            />
            <text className="galo-flow__branch" x="330" y="234">
              {t("yes")}
            </text>
            <path className="galo-flow__link" d="M320 266 H 370 V 286" markerEnd={`url(#${arrowId})`} />
            <text className="galo-flow__branch" x="330" y="282">
              {t("no")}
            </text>

            <g className="galo-flow__node galo-flow__node--reset">
              <rect x="382" y="196" width="250" height="42" rx="12" />
              <text className="galo-flow__node-label" x="396" y="222">
                {t("reset")}
              </text>
              <text className="galo-flow__mono" x="620" y="222" textAnchor="end" direction="ltr">
                = P0
              </text>
            </g>
            <g className="galo-flow__node galo-flow__node--operation">
              <rect x="382" y="256" width="250" height="42" rx="12" />
              <text className="galo-flow__node-label" x="396" y="282">
                {t("add as usual")}
              </text>
              <text className="galo-flow__mono" x="620" y="282" textAnchor="end" direction="ltr">
                (i+j) mod n
              </text>
            </g>
          </g>
        </svg>
      </div>

      <div className="galo-figure__pair">
        <p>
          <strong dir="ltr">PLUS</strong>
          <span>{t("Both inputs are treated the same way, so swapping them cannot change the result.")}</span>
        </p>
        <p>
          <strong dir="ltr">STAR</strong>
          <span>{t("Only the left input can trigger the reset, so swapping the inputs can change the result.")}</span>
        </p>
      </div>
    </figure>
  );
}
