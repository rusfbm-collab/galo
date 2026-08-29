import { useId } from "react";
import { buildScaledTowerMorphism, isStrongOperatorMorphism } from "../../content/mathematics";
import { useI18n } from "../../i18n/I18nContext";

const WIDTH = 660;
const HEIGHT = 200;

/**
 * The square a cross-level map has to close, and one that does not.
 *
 * The section states the preservation contract as an equation. The equation is
 * exact and completely inert on the page: a reader who does not already think in
 * commuting squares reads it as a formality. Drawn, it is one obvious question —
 * combine first and then map, or map first and then combine, and do the two
 * routes end in the same place — with a worked pair that closes and a worked pair
 * that does not.
 *
 * Both verdicts are computed on every build, so the figure cannot outlive the
 * property it claims.
 */
const CASES = [
  { source: 2 as const, target: 6 as const },
  { source: 3 as const, target: 5 as const },
];

export function MorphismTestFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();
  const arrowId = useId();

  const worked = CASES.map(({ source, target }) => {
    // Where the levels do not divide there is no scaled map to test at all, which
    // is a stronger statement than a map that fails its checks. Both outcomes are
    // published; neither is rounded up into "mostly compatible".
    const mapping = buildScaledTowerMorphism(source, target);
    return {
      source,
      target,
      mapping,
      holds: mapping !== null && isStrongOperatorMorphism(source, target, mapping),
    };
  });

  return (
    <figure className="galo-figure galo-figure--morphism">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("TWO ROUTES, AND WHETHER THEY MEET")}</span>
        <strong>
          {t("Combine then map, or map then combine. A lawful transport is one where it makes no difference.")}
        </strong>
        <span className="galo-figure__note">
          {t(
            "Two levels have different carriers, so a state from one cannot enter the other's table directly. A declared map is what bridges them, and it earns the name only if the square below closes for every typed family: whichever route you take around it, you arrive at the same pole. A map that closes for one family and not another is not a partial success — it is a map whose failures have to be listed.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("A commuting square between two levels")}</title>
          <desc id={descriptionId}>
            {t(
              "A square with a pair of source poles at the top left, their combination at the bottom left, their images at the top right, and the combination of the images at the bottom right. Two arrows go down and two go across, and the question is whether the two paths reach the same pole.",
            )}
          </desc>
          <defs>
            <marker id={arrowId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" fill="var(--chart-neutral-strong)" />
            </marker>
          </defs>

          <g className="galo-morphism__node">
            <rect x="90" y="30" width="184" height="44" rx="11" />
            <text x="182" y="52" dominantBaseline="central" textAnchor="middle" direction="ltr">
              (P_s, P_a) at n
            </text>
          </g>
          <g className="galo-morphism__node">
            <rect x="386" y="30" width="184" height="44" rx="11" />
            <text x="478" y="52" dominantBaseline="central" textAnchor="middle" direction="ltr">
              (φP_s, φP_a) at m
            </text>
          </g>
          <g className="galo-morphism__node">
            <rect x="90" y="128" width="184" height="44" rx="11" />
            <text x="182" y="150" dominantBaseline="central" textAnchor="middle" direction="ltr">
              F_n(P_s, P_a)
            </text>
          </g>
          <g className="galo-morphism__node is-target">
            <rect x="386" y="128" width="184" height="44" rx="11" />
            <text x="478" y="150" dominantBaseline="central" textAnchor="middle" direction="ltr">
              F_m(φP_s, φP_a)
            </text>
          </g>

          <path className="galo-morphism__edge" d="M274 52 H 378" markerEnd={`url(#${arrowId})`} />
          <path className="galo-morphism__edge" d="M182 74 V 120" markerEnd={`url(#${arrowId})`} />
          <path className="galo-morphism__edge" d="M478 74 V 120" markerEnd={`url(#${arrowId})`} />
          <path className="galo-morphism__edge" d="M274 150 H 378" markerEnd={`url(#${arrowId})`} />

          <text className="galo-morphism__edge-label" x="326" y="42" textAnchor="middle" direction="ltr">
            φ
          </text>
          <text className="galo-morphism__edge-label" x="326" y="140" textAnchor="middle" direction="ltr">
            φ
          </text>
          <text className="galo-morphism__edge-label" x="166" y="100" textAnchor="end" direction="ltr">
            F_n
          </text>
          <text className="galo-morphism__edge-label" x="494" y="100" direction="ltr">
            F_m
          </text>

          <text className="galo-morphism__question" x={WIDTH / 2} y="190" textAnchor="middle" direction="ltr">
            =?
          </text>
        </svg>
      </div>

      <ol className="galo-figure__stage-notes">
        {worked.map((entry) => (
          <li key={`${entry.source}-${entry.target}`}>
            <strong dir="ltr">
              L{entry.source} → L{entry.target}
            </strong>
            <span>
              <b>
                <bdi dir="ltr">
                  {entry.mapping ? `φ = [${entry.mapping.join(", ")}]` : "φ = none"} ·{" "}
                  {entry.holds ? "closes" : "does not close"}
                </bdi>
              </b>
              {t(
                entry.holds
                  ? "The target level is a multiple of the source, the scaled map carries P0 to P0, and the square closes for all four typed families. This one may be relied on."
                  : "The levels do not divide, so no scaled map exists to test. That is recorded as a boundary rather than reported as a near miss: there is nothing here that almost worked.",
              )}
            </span>
          </li>
        ))}
      </ol>

      <p className="galo-figure__foot">
        {t(
          "A shared label buys nothing here. Two levels may both have a pole called P0 and still admit no lawful transport between them, which is why the map is declared, tested family by family, and published with whatever it loses.",
        )}
      </p>
    </figure>
  );
}
