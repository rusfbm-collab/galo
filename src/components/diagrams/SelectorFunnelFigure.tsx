import { useId } from "react";
import { useI18n } from "../../i18n/I18nContext";

const stages = [
  {
    value: "1,204",
    weight: 1204,
    label: "Committed descriptors",
    detail: "The complete finite universe the release commits to before anything runs.",
  },
  {
    value: "880",
    weight: 880,
    label: "Executable descriptors",
    detail: "Only four declared action kinds are executable; the rest stay inert.",
  },
  {
    value: "440",
    weight: 440,
    label: "Pattern frontier",
    detail: "One of the two accepted source patterns selects one parity half.",
  },
  {
    value: "1",
    weight: 40,
    label: "One bound handle",
    detail: "A hash-derived order picks one candidate and binds it to a single use.",
  },
  {
    value: "1",
    weight: 40,
    label: "One recorded receipt",
    detail: "The bounded action and its work units are written into a replayable record.",
  },
] as const;

/**
 * The label sits to the right of its bar, so the widest bar decides how much
 * room the longest label gets. "Committed descriptors" is two long words in
 * Russian and three in Arabic, and at the old 620/420 it ran off the viewBox
 * and was clipped mid-word.
 */
const WIDTH = 700;
const ROW_HEIGHT = 54;
const HEIGHT = ROW_HEIGHT * stages.length + 16;
const MAX_BAR = 380;
const MIN_BAR = 44;
const maximumWeight = stages[0].weight;

/**
 * The current runtime narrowing pipeline: a declared filter chain, not a ranking
 * produced by preference, learning, or Atlas state.
 */
export function SelectorFunnelFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();

  return (
    <figure className="galo-figure galo-figure--funnel">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("HOW THE CURRENT ENGINE NARROWS ITS CHOICES")}</span>
        <strong>{t("From 1,204 declared candidates down to one recorded action.")}</strong>
        <span className="galo-figure__note">
          {t(
            "Every narrowing step is a filter written into the release contract. No step consults a learned preference, a probability, or Atlas state — the ordering comes from a hash and can be replayed exactly.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("Narrowing pipeline of the current runtime")}</title>
          <desc id={descriptionId}>
            {t(
              "Five stacked bars of decreasing width labelled 1,204 committed descriptors, 880 executable descriptors, 440 candidates on one pattern frontier, one bound handle, and one recorded receipt.",
            )}
          </desc>

          {stages.map((stage, index) => {
            const width = Math.max(MIN_BAR, (stage.weight / maximumWeight) * MAX_BAR);
            const y = 8 + index * ROW_HEIGHT;
            const isTerminal = index >= 3;
            return (
              <g key={stage.label} className={isTerminal ? "galo-funnel__row is-terminal" : "galo-funnel__row"}>
                <rect x="8" y={y} width={width} height={ROW_HEIGHT - 14} rx="8" />
                <text className="galo-funnel__value" x="24" y={y + 25} direction="ltr">
                  {stage.value}
                </text>
                <text className="galo-funnel__label" x={width + 24} y={y + 25}>
                  {t(stage.label)}
                </text>
                {index < stages.length - 1 && (
                  <path className="galo-funnel__link" d={`M18 ${y + ROW_HEIGHT - 14} V ${y + ROW_HEIGHT}`} />
                )}
              </g>
            );
          })}
        </svg>
      </div>

      <ol className="galo-figure__stage-notes">
        {stages.map((stage) => (
          <li key={stage.label}>
            <strong dir="ltr">{stage.value}</strong>
            <span>
              <b>{t(stage.label)}</b>
              {t(stage.detail)}
            </span>
          </li>
        ))}
      </ol>

      <p className="galo-figure__note galo-figure__note--boundary">
        {t(
          "The last two bars are drawn at a readable minimum width. They stand for one candidate and one record, not for a proportional quantity.",
        )}
      </p>
    </figure>
  );
}
