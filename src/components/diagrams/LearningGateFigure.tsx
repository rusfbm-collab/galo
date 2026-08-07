import { useId } from "react";
import { releaseEvidence } from "../../content/evidence";
import { useI18n } from "../../i18n/I18nContext";

const WIDTH = 660;
const HEIGHT = 240;

/**
 * What has to close before persistent learning could be switched on. Every
 * precondition and every status here is taken from the published boundary
 * register rather than restated, so the picture cannot drift away from the record.
 */
const openLabels = [
  "Persistent trusted manifest head",
  "Python process capability isolation",
  "CPython 3.13 replay",
  "Arbitrary free-text semantic noninterference",
];

const preconditions = openLabels.map((label, index) => {
  const boundary = releaseEvidence.boundaries.find((entry) => entry.label === label);
  if (!boundary) throw new Error(`Unknown published boundary: ${label}`);
  return { code: `B${index + 1}`, status: boundary.status, label: boundary.label, detail: boundary.detail };
});

export function LearningGateFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();
  const arrowId = useId();

  return (
    <figure className="galo-figure galo-figure--gatechain">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("WHAT HAS TO CLOSE FIRST")}</span>
        <strong>{t("Four open conditions stand between today and any persistent learning.")}</strong>
        <span className="galo-figure__note">
          {t(
            "Every row comes from the published boundary register with the status it really has. Not one is closed today. That is the reason persistent policy learning appears as not started, and not as coming soon.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("Four open preconditions leading to a closed gate")}</title>
          <desc id={descriptionId}>
            {t(
              "Four stacked rows, each with a code, an open status, and a name. Arrows from all four converge on a gate marked closed, and beyond the gate is persistent policy learning, marked as not started.",
            )}
          </desc>
          <defs>
            <marker id={arrowId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" fill="var(--chart-2)" />
            </marker>
          </defs>

          {preconditions.map((item, index) => {
            const y = 20 + index * 46;
            return (
              <g key={item.code} className="galo-gatechain__row">
                <rect x="14" y={y} width="330" height="36" rx="10" />
                <text className="galo-gatechain__code" x="28" y={y + 18} dominantBaseline="central" direction="ltr">
                  {item.code}
                </text>
                <text className="galo-gatechain__status" x="62" y={y + 18} dominantBaseline="central" direction="ltr">
                  {item.status}
                </text>
                <path
                  className="galo-gatechain__link"
                  d={`M344 ${y + 18} C 400 ${y + 18}, 410 118, 452 118`}
                  markerEnd={`url(#${arrowId})`}
                />
              </g>
            );
          })}

          <g className="galo-gatechain__gate">
            <rect x="460" y="86" width="80" height="64" rx="14" />
            <text x="500" y="118" dominantBaseline="central" textAnchor="middle" direction="ltr">
              CLOSED
            </text>
          </g>

          <path className="galo-gatechain__link is-blocked" d="M540 118 H 576" />
          <g className="galo-gatechain__target">
            <rect x="580" y="86" width="64" height="64" rx="14" />
            <text x="612" y="110" dominantBaseline="central" textAnchor="middle" direction="ltr">
              NOT
            </text>
            <text x="612" y="128" dominantBaseline="central" textAnchor="middle" direction="ltr">
              STARTED
            </text>
          </g>

          <text className="galo-gatechain__foot" x="14" y={HEIGHT - 10}>
            {t("no precondition is closed today, and none of them is scheduled here")}
          </text>
        </svg>
      </div>

      <ol className="galo-figure__stage-notes">
        {preconditions.map((item) => (
          <li key={item.code}>
            <strong dir="ltr">{item.code}</strong>
            <span>
              <b>
                {t(item.label)} · <bdi dir="ltr">{item.status}</bdi>
              </b>
              {t(item.detail)}
            </span>
          </li>
        ))}
      </ol>
    </figure>
  );
}
