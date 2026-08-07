import { useId } from "react";
import { buildCanonicalTypedCell, galoActionFamilies, type GaloActionFamily } from "../../content/mathematics";
import { useI18n } from "../../i18n/I18nContext";

const LEVEL = 3;
const SOURCE = 0;
const ACTIVE = 2;

const familyNotes: Record<GaloActionFamily, string> = {
  PLUS_LEFT: "Plain addition, with the source picking the row.",
  PLUS_RIGHT: "The roles swap axes. Addition does not notice, so the target is unchanged.",
  STAR_LEFT: "The source picks the row, and this source is the one row that resets.",
  STAR_RIGHT: "The active pole picks the row instead, so the reset row is never entered.",
};

const results = galoActionFamilies.map((family) => ({
  family,
  cell: buildCanonicalTypedCell(LEVEL, family, SOURCE, ACTIVE),
}));

const WIDTH = 700;
const HEIGHT = 262;
const HUB_X = 92;
const HUB_Y = HEIGHT / 2 - 26;
const CARD_X = 300;
const CARD_WIDTH = 232;
const CARD_HEIGHT = 44;
const CARD_GAP = 14;
const CARD_TOP = (HEIGHT - (CARD_HEIGHT * 4 + CARD_GAP * 3)) / 2;

/**
 * The same two positions, read four ways. This is the concrete answer to "why
 * does a log line need five fields": drop any one of them and the record no
 * longer determines its own result.
 */
export function TypedActionMeaningFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();

  return (
    <figure className="galo-figure galo-figure--typed">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("ONE PAIR OF POSITIONS, FOUR DIFFERENT RESULTS")}</span>
        <strong>{t("The two positions are not enough to know what happened. The type is the rest of the record.")}</strong>
        <span className="galo-figure__note">
          {t(
            "Below, the same source and active pole are read under each of the four declared action families. Two of the readings disagree with the other two. That is why a record carries level, law, and orientation alongside the pair — without them the line does not determine its own result, and an auditor is left reconstructing intent.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("One pair fanning out into four typed readings")}</title>
          <desc id={descriptionId}>
            {t(
              "A single box on the left holds the pair P0 and P2. Four curved connectors fan out to four labelled rows, one per action family. Three rows end on the target P2 and one row, STAR_LEFT, ends on P0.",
            )}
          </desc>

          <rect className="galo-typed__hub" x="16" y={HUB_Y} width={HUB_X + 40} height="52" rx="12" />
          <text className="galo-typed__hublabel" x={HUB_X - 20} y={HUB_Y + 20} textAnchor="middle" direction="ltr">
            L{LEVEL}
          </text>
          <text className="galo-typed__hubvalue" x={HUB_X - 20} y={HUB_Y + 40} textAnchor="middle" direction="ltr">
            (P{SOURCE}, P{ACTIVE})
          </text>

          {results.map(({ family, cell }, index) => {
            const y = CARD_TOP + index * (CARD_HEIGHT + CARD_GAP);
            const midY = y + CARD_HEIGHT / 2;
            const reset = cell.target === 0;
            return (
              <g key={family} className={reset ? "galo-typed__row is-reset" : "galo-typed__row"}>
                <path
                  className="galo-typed__link"
                  d={`M${HUB_X + 58} ${HUB_Y + 26} C ${HUB_X + 140} ${HUB_Y + 26}, ${CARD_X - 80} ${midY}, ${CARD_X - 8} ${midY}`}
                />
                <rect x={CARD_X} y={y} width={CARD_WIDTH} height={CARD_HEIGHT} rx="10" />
                <text className="galo-typed__family" x={CARD_X + 16} y={midY + 5} direction="ltr">
                  {family}
                </text>
                <text
                  className="galo-typed__target"
                  x={CARD_X + CARD_WIDTH + 78}
                  y={midY + 6}
                  textAnchor="end"
                  direction="ltr"
                >
                  → P{cell.target}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <ol className="galo-figure__stage-notes">
        {results.map(({ family, cell }) => (
          <li key={family}>
            <strong dir="ltr">P{cell.target}</strong>
            <span>
              <b dir="ltr">{family}</b>
              {t(familyNotes[family])}
            </span>
          </li>
        ))}
      </ol>

      <p className="galo-figure__note galo-figure__note--boundary">
        {t(
          "Every target above is recomputed from the law on render. If a law changed, the picture would change with it rather than keep agreeing with a caption written earlier.",
        )}
      </p>
    </figure>
  );
}
