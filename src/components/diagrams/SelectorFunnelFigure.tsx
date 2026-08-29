import { useId } from "react";
import { useI18n } from "../../i18n/I18nContext";

/**
 * One question, from the closed answer set down to a published prediction.
 *
 * This drew the superseded release's descriptor arithmetic — 1,204 committed,
 * 880 executable, 440 on one pattern. That artefact accepted two fixed input
 * patterns and learned nothing, and restating its counts as the current shape
 * of a decision would be the plainest kind of stale claim. The bars now count
 * what the current artefact actually narrows: a closed set of possible answers,
 * a ranking over it, the three rights that have to be bought, and the one
 * prediction that survives — or the boundary that replaces it.
 *
 * The last two bars are drawn at a readable minimum width. They stand for one
 * decision and one record, not for a proportional quantity.
 */
const stages = [
  {
    value: "122",
    weight: 1220,
    label: "Possible answers, closed in advance",
    detail: "Every distinct outcome the training split contained, frozen and digested before the test split is read.",
  },
  {
    value: "122",
    weight: 1220,
    label: "Ranked for this question",
    detail: "Counting memory orders the whole set. The ordering is recorded and is never published on its own.",
  },
  {
    value: "3",
    weight: 420,
    label: "Rights that have to be bought",
    detail: "The right to answer, a learned structure behind the proposal, and a typed program that runs.",
  },
  {
    value: "1",
    weight: 60,
    label: "One published prediction, or none",
    detail: "All three held and the top-ranked outcome is published; any one missing and a boundary replaces it.",
  },
  {
    value: "1",
    weight: 60,
    label: "One receipt, either way",
    detail: "Answered or refused, the row leaves a machine-readable record with its cause named.",
  },
] as const;

/**
 * The label sits to the right of its bar, so the widest bar decides how much
 * room the longest label gets. "Possible answers, closed in advance" is six
 * words in Russian, and at a 380 bar it ran six pixels off the viewBox and was
 * clipped mid-word. The bar is sized so the longest translation still clears
 * the right edge; the bars are relative to each other, not to the canvas.
 */
const WIDTH = 700;
const ROW_HEIGHT = 54;
const HEIGHT = ROW_HEIGHT * stages.length + 16;
const MAX_BAR = 352;
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
        <span className="galo-figure__eyebrow">{t("HOW ONE QUESTION NARROWS TO ONE ANSWER")}</span>
        <strong>{t("From a closed set of possible answers to one published prediction, or none.")}</strong>
        <span className="galo-figure__note">
          {t(
            "The first two bars are the same width on purpose: ranking narrows nothing, it only orders. What narrows is the third bar, where three separate rights have to be bought before any of the ranking may be published — and where most questions stop. The counts are from the largest of the three public runs.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("How one question narrows to one published answer")}</title>
          <desc id={descriptionId}>
            {t(
              "Five stacked bars. The first two are equal width, labelled 122 possible answers closed in advance and 122 ranked for this question. The third is much shorter, labelled three rights that have to be bought. The last two are short and fixed, labelled one published prediction or none, and one receipt either way.",
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
