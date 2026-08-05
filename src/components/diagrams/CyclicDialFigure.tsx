import { useId } from "react";
import { useI18n } from "../../i18n/I18nContext";

const SIZE = 300;
const CENTER = SIZE / 2;
const RADIUS = 104;
const NODE_RADIUS = 25;

function polePoint(index: number, level: number, radius = RADIUS) {
  const angle = (-90 + (360 * index) / level) * (Math.PI / 180);
  return { x: CENTER + radius * Math.cos(angle), y: CENTER + radius * Math.sin(angle) };
}

function stepArc(from: number, to: number, level: number, radius: number) {
  const start = polePoint(from, level, radius);
  const end = polePoint(to, level, radius);
  return `M ${start.x.toFixed(2)} ${start.y.toFixed(2)} A ${radius} ${radius} 0 0 1 ${end.x.toFixed(2)} ${end.y.toFixed(2)}`;
}

/**
 * One finite level drawn as a dial. Every pole is a named position and PLUS is the
 * forward rotation that wraps after the last position.
 */
export function CyclicDialFigure({
  level = 3,
  source = 1,
  active = 2,
}: {
  level?: number;
  source?: number;
  active?: number;
}) {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();
  const arrowId = useId();
  const highlightId = useId();

  const target = (source + active) % level;
  const walked = Array.from({ length: active }, (_, step) => (source + step) % level);

  return (
    <figure className="galo-figure galo-figure--dial">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("ONE LEVEL AS A DIAL")}</span>
        <strong>{t("A level is a ring of named positions, and PLUS is one forward turn.")}</strong>
        <span className="galo-figure__note">
          {t(
            "The ring below has exactly three positions. Moving forward past the last position returns to the first one — that is the whole meaning of wraparound.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${SIZE} ${SIZE}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("Cyclic dial of one level")}</title>
          <desc id={descriptionId}>
            {t(
              "A ring of labelled positions with a single forward arrow between neighbours. A highlighted path starts at the source position, advances one step per unit of the active position, and wraps past the last position onto the target.",
            )}
          </desc>
          <defs>
            <marker id={arrowId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" fill="var(--chart-neutral-strong)" />
            </marker>
            <marker
              id={highlightId}
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto"
            >
              <path d="M0 0 L10 5 L0 10 z" fill="var(--chart-1)" />
            </marker>
          </defs>

          <circle cx={CENTER} cy={CENTER} r={RADIUS} className="galo-dial__track" />

          {Array.from({ length: level }, (_, index) => (
            <path
              key={`step-${index}`}
              d={stepArc(index, (index + 1) % level, level, RADIUS)}
              className="galo-dial__step"
              markerEnd={`url(#${arrowId})`}
            />
          ))}

          {walked.map((index) => (
            <path
              key={`walk-${index}`}
              d={stepArc(index, (index + 1) % level, level, RADIUS)}
              className="galo-dial__walk"
              markerEnd={`url(#${highlightId})`}
            />
          ))}

          {Array.from({ length: level }, (_, index) => {
            const point = polePoint(index, level);
            const isSource = index === source;
            const isTarget = index === target;
            const state = isSource ? "is-source" : isTarget ? "is-target" : "";
            return (
              <g key={`pole-${index}`} className={`galo-dial__pole ${state}`.trim()}>
                <circle cx={point.x} cy={point.y} r={NODE_RADIUS} />
                <text x={point.x} y={point.y} dominantBaseline="central" textAnchor="middle" direction="ltr">
                  P{index}
                </text>
              </g>
            );
          })}

          <text className="galo-dial__centre" x={CENTER} y={CENTER - 8} textAnchor="middle" direction="ltr">
            L{level}
          </text>
          <text className="galo-dial__centre-sub" x={CENTER} y={CENTER + 14} textAnchor="middle" direction="ltr">
            mod {level}
          </text>
        </svg>

        <ol className="galo-figure__steps">
          <li>
            <span className="galo-swatch galo-swatch--source" aria-hidden="true" />
            <strong>{t("Start")}</strong>
            <code dir="ltr">P{source}</code>
          </li>
          <li>
            <span className="galo-swatch galo-swatch--walk" aria-hidden="true" />
            <strong>{t("Move forward")}</strong>
            <code dir="ltr">
              {active} {t("steps")}
            </code>
          </li>
          <li>
            <span className="galo-swatch galo-swatch--target" aria-hidden="true" />
            <strong>{t("Land on")}</strong>
            <code dir="ltr">P{target}</code>
          </li>
        </ol>
      </div>

      <p className="galo-figure__equation" dir="ltr">
        PLUS_{level}(P{source}, P{active}) = P_(({source}+{active}) mod {level}) = P{target}
      </p>
    </figure>
  );
}
