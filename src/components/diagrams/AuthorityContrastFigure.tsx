import { useId } from "react";
import { useI18n } from "../../i18n/I18nContext";

const WIDTH = 660;
const HEIGHT = 282;

const NAME_X = 20;
const NAME_WIDTH = 190;
const ANSWER_X = 222;
const VOUCH_X = 442;
const SLOT_WIDTH = 190;
const SLOT_HEIGHT = 32;
const SIGN_X = 427;

const HEAD_Y = 34;
const ROW_TOP = 48;
const ROW_STEP = 44;

type Family = {
  name: string;
  examples: string;
  /** What actually produces the answer. */
  source: string;
  /** What a reader would have to accept for the answer to stand. */
  authority: string;
  isGalo?: boolean;
};

/**
 * Where the authority sits, across the five families a reader is most likely to
 * have in mind — Cyc among them, because it is the comparison people reach for.
 *
 * Rows rather than columns, because SVG text does not wrap and five columns
 * cannot hold "Symbolic knowledge bases" once it is translated. A row gives each
 * family the full width for its name and both of its slots.
 *
 * The figure makes one distinction and no ranking: in the first four the thing
 * that produces the answer and the thing that vouches for it are the same object,
 * so accepting the answer means accepting that object. In the fifth they are
 * separated. Nothing here says the fifth answers better — separation is an
 * architectural property, not a measured result, and the legend says so.
 */
export function AuthorityContrastFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();

  const families: readonly Family[] = [
    {
      name: "Language models",
      examples: "GPT-class systems",
      source: "Fitted weights",
      authority: "The weights",
    },
    {
      name: "Knowledge graphs",
      examples: "Wikidata, RDF stores",
      source: "Stored edges",
      authority: "The edge",
    },
    {
      name: "Symbolic knowledge bases",
      examples: "Cyc",
      source: "Hand-built axioms",
      authority: "The axiom set",
    },
    {
      name: "Policy wrappers",
      examples: "Guardrails over a model",
      source: "A model, then a filter",
      authority: "Still the model",
    },
    {
      name: "GALO",
      examples: "This project",
      source: "Learning proposes",
      authority: "A separate check",
      isGalo: true,
    },
  ];

  return (
    <figure className="galo-figure galo-figure--authority">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("WHERE THE AUTHORITY SITS")}</span>
        <strong>{t("In four of these, the thing that answers is also the thing you have to trust.")}</strong>
        <span className="galo-figure__note">
          {t(
            "Every family here is a serious body of work, and several are decades ahead in engineering. The figure draws one difference and nothing else: whether the part that produces an answer is the same part that vouches for it. Where they are the same object, accepting the answer means accepting that object.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("What carries the authority in five families of system")}</title>
          <desc id={descriptionId}>
            {t(
              "Five rows: language models, knowledge graphs, symbolic knowledge bases such as Cyc, policy wrappers over a model, and GALO. Each row names what produces the answer and what vouches for it, with a sign between them. The first four carry an equals sign because both are the same object; the last carries a not-equals sign because they are two.",
            )}
          </desc>

          <text className="galo-authority__head" x={ANSWER_X + SLOT_WIDTH / 2} y={HEAD_Y} textAnchor="middle">
            {t("ANSWERS")}
          </text>
          <text className="galo-authority__head" x={VOUCH_X + SLOT_WIDTH / 2} y={HEAD_Y} textAnchor="middle">
            {t("VOUCHES")}
          </text>

          {families.map((family, index) => {
            const y = ROW_TOP + index * ROW_STEP;
            return (
              <g key={family.name} className={`galo-authority__row${family.isGalo ? " is-galo" : ""}`}>
                <text className="galo-authority__name" x={NAME_X} y={y + 14}>
                  {t(family.name)}
                </text>
                <text className="galo-authority__examples" x={NAME_X} y={y + 28}>
                  {t(family.examples)}
                </text>

                <g className="galo-authority__slot">
                  <rect x={ANSWER_X} y={y} width={SLOT_WIDTH} height={SLOT_HEIGHT} rx="7" />
                  <text x={ANSWER_X + SLOT_WIDTH / 2} y={y + 21} textAnchor="middle">
                    {t(family.source)}
                  </text>
                </g>

                <text
                  className={`galo-authority__sign${family.isGalo ? " is-galo" : ""}`}
                  x={SIGN_X}
                  y={y + 23}
                  textAnchor="middle"
                  direction="ltr"
                >
                  {family.isGalo ? "≠" : "="}
                </text>

                <g className={`galo-authority__slot${family.isGalo ? " is-separate" : ""}`}>
                  <rect x={VOUCH_X} y={y} width={SLOT_WIDTH} height={SLOT_HEIGHT} rx="7" />
                  <text x={VOUCH_X + SLOT_WIDTH / 2} y={y + 21} textAnchor="middle">
                    {t(family.authority)}
                  </text>
                </g>

                {/* The line under the name column keeps the rows separable when a
                    translated family name runs onto the width of the slots. */}
                <line
                  className="galo-authority__rule"
                  x1={NAME_X}
                  y1={y + SLOT_HEIGHT + 6}
                  x2={NAME_X + NAME_WIDTH}
                  y2={y + SLOT_HEIGHT + 6}
                />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="galo-figure__legend">
        <span>{t("This is architectural positioning, not a claim of universal superiority.")}</span>
        <span>
          {t(
            "Cyc is the comparison most people reach for. It is not what this is: nobody here is writing the world down.",
          )}
        </span>
      </div>
    </figure>
  );
}
