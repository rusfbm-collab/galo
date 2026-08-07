import { useId } from "react";
import { useI18n } from "../../i18n/I18nContext";

const WIDTH = 640;
const HEIGHT = 236;
const BAR_X = 150;
const BAR_HEIGHT = 44;
const DECLARED_WIDTH = 300;

/**
 * Two ways of establishing that a system will not do a particular thing. The
 * figure is about method, not merit: exhausting a declared list terminates,
 * sampling an undeclared space does not.
 */
export function CheckCostFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();
  const fadeId = useId();

  return (
    <figure className="galo-figure galo-figure--cost">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("TWO WAYS TO ESTABLISH THAT SOMETHING CANNOT HAPPEN")}</span>
        <strong>{t("One of them finishes. The other one stops when the budget does.")}</strong>
        <span className="galo-figure__note">
          {t(
            "If the set of possible behaviours is written down in advance, ruling one out means reading a finite list to the end, and the reading either finds it or does not. If the set is not written down in advance, the same question can only be probed by trying cases, and the answer carries whatever confidence the number of tries supports.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("A bounded bar beside an unbounded one")}</title>
          <desc id={descriptionId}>
            {t(
              "Two horizontal bars. The upper bar is solid, ends at a marked edge, and is labelled as a complete enumeration of 560 coordinates. The lower bar has no right-hand edge and fades out, and is labelled as sampling that stops when the testing budget stops.",
            )}
          </desc>
          <defs>
            <linearGradient id={fadeId} x1="0" x2="1" y1="0" y2="0">
              <stop offset="0" stopColor="var(--chart-neutral-strong)" stopOpacity="0.55" />
              <stop offset="0.62" stopColor="var(--chart-neutral-strong)" stopOpacity="0.28" />
              <stop offset="1" stopColor="var(--chart-neutral-strong)" stopOpacity="0" />
            </linearGradient>
          </defs>

          <g className="galo-cost__row is-declared">
            <text className="galo-cost__tag" x="16" y="52" direction="ltr">
              560
            </text>
            <rect x={BAR_X} y="30" width={DECLARED_WIDTH} height={BAR_HEIGHT} rx="10" />
            <path className="galo-cost__edge" d={`M${BAR_X + DECLARED_WIDTH} 20 V 84`} />
            <text className="galo-cost__edgelabel" x={BAR_X + DECLARED_WIDTH + 12} y="57">
              {t("the list ends here")}
            </text>
          </g>

          <g className="galo-cost__row is-open">
            <text className="galo-cost__tag is-open" x="16" y="158" direction="ltr">
              ?
            </text>
            <rect
              x={BAR_X}
              y="136"
              width={WIDTH - BAR_X - 16}
              height={BAR_HEIGHT}
              rx="10"
              fill={`url(#${fadeId})`}
              stroke="none"
            />
            <path className="galo-cost__probe" d={`M${BAR_X + 40} 130 V 190`} />
            <path className="galo-cost__probe" d={`M${BAR_X + 118} 130 V 190`} />
            <path className="galo-cost__probe" d={`M${BAR_X + 214} 130 V 190`} />
            <text className="galo-cost__edgelabel is-open" x={BAR_X + 236} y="204">
              {t("sampling stops when the budget does")}
            </text>
          </g>
        </svg>
      </div>

      <div className="galo-figure__pair">
        <p>
          <strong>{t("Reading a declared list")}</strong>
          <span>
            {t(
              "Terminates. A reviewer can say the coordinate is absent because the whole index was read, and a second reviewer gets the same answer.",
            )}
          </span>
        </p>
        <p>
          <strong>{t("Probing an undeclared space")}</strong>
          <span>
            {t(
              "Does not terminate. A reviewer can say the behaviour was not observed in the cases tried, which is a different and weaker sentence.",
            )}
          </span>
        </p>
      </div>

      <p className="galo-figure__note galo-figure__note--boundary">
        {t(
          "This is a statement about how each claim is established, not about which system is more useful. A declared list can be small and still be the wrong list, and nothing here says otherwise.",
        )}
      </p>
    </figure>
  );
}
