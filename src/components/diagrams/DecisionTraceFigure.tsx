import { useId } from "react";
import { useI18n } from "../../i18n/I18nContext";

const WIDTH = 660;
const HEIGHT = 214;
const STEPS = [90, 200, 310, 420];

const lanes = [
  { id: "implicit", y: 56, terminal: "?" },
  { id: "declared", y: 148, terminal: "✓" },
] as const;

const laneNotes = [
  {
    id: "implicit",
    title: "The decision left no declared record",
    text: "The action happened and was logged. What was permitted at that moment, and why this option rather than another, has to be rebuilt from memory, from code that has since changed, and from people who have moved on.",
  },
  {
    id: "declared",
    title: "The decision wrote its own record",
    text: "The state, the permitted set, the ordering input, and the executed action are all in one record. Answering the question is reading a document, not running an investigation.",
  },
] as const;

/**
 * The business framing, with no mathematics in it: the difference between the two
 * lanes only appears months later, when somebody asks why.
 */
export function DecisionTraceFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();
  const arrowId = useId();

  return (
    <figure className="galo-figure galo-figure--trace">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("THE COST APPEARS LATER, NOT AT THE TIME")}</span>
        <strong>{t("Two identical decisions. The difference shows up when somebody asks why.")}</strong>
        <span className="galo-figure__note">
          {t(
            "Both lanes decide and act, and on the day nobody can tell them apart. Six months later one of them can be answered by reading a record and the other one starts an investigation whose cost nobody budgeted.",
          )}
        </span>
      </figcaption>

      <div className="galo-trace__lanes">
        <span className="galo-trace__lane-tag">{t("no declared record")}</span>
        <span className="galo-trace__lane-tag is-declared">{t("declared record")}</span>
      </div>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("Two decision lanes ending in a question mark and in a record")}</title>
          <desc id={descriptionId}>
            {t(
              "Two horizontal lanes with four numbered stops each: the situation, the decision, the action, and the question asked months later. The upper lane ends at a question mark; the lower lane ends at a record that can be read.",
            )}
          </desc>
          <defs>
            <marker id={arrowId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" fill="var(--chart-neutral-strong)" />
            </marker>
          </defs>

          {lanes.map((lane) => (
            <g key={lane.id} className={`galo-trace__lane is-${lane.id}`}>
              {STEPS.map((x, index) => (
                <g key={x} className="galo-trace__node">
                  <circle cx={x} cy={lane.y} r="21" />
                  <text x={x} y={lane.y} dominantBaseline="central" textAnchor="middle" direction="ltr">
                    {String(index + 1)}
                  </text>
                  {index < STEPS.length - 1 && (
                    <path
                      className="galo-trace__link"
                      d={`M${x + 23} ${lane.y} H ${STEPS[index + 1]! - 27}`}
                      markerEnd={`url(#${arrowId})`}
                    />
                  )}
                </g>
              ))}
              <path
                className="galo-trace__link"
                d={`M443 ${lane.y} H ${WIDTH - 154}`}
                markerEnd={`url(#${arrowId})`}
              />
              <g className="galo-trace__terminal">
                <rect x={WIDTH - 146} y={lane.y - 24} width="126" height="48" rx="13" />
                <text
                  x={WIDTH - 83}
                  y={lane.y}
                  dominantBaseline="central"
                  textAnchor="middle"
                  direction="ltr"
                >
                  {lane.terminal}
                </text>
              </g>
            </g>
          ))}

          <line className="galo-trace__divider" x1="20" y1="102" x2={WIDTH - 20} y2="102" />

          <text className="galo-trace__step-label" x="90" y={HEIGHT - 8} textAnchor="middle">
            {t("situation")}
          </text>
          <text className="galo-trace__step-label" x="200" y={HEIGHT - 8} textAnchor="middle">
            {t("decision")}
          </text>
          <text className="galo-trace__step-label" x="310" y={HEIGHT - 8} textAnchor="middle">
            {t("action")}
          </text>
          <text className="galo-trace__step-label" x="430" y={HEIGHT - 8} textAnchor="middle">
            {t("questioned later")}
          </text>
        </svg>
      </div>

      <div className="galo-figure__pair galo-figure__pair--prose">
        {laneNotes.map((note) => (
          <p key={note.id} className={note.id === "declared" ? "is-declared" : undefined}>
            <strong>{t(note.title)}</strong>
            <span>{t(note.text)}</span>
          </p>
        ))}
      </div>
    </figure>
  );
}
