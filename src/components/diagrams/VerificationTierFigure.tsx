import { useId } from "react";
import { verificationTiers } from "../../content/audit";
import { useI18n } from "../../i18n/I18nContext";

const WIDTH = 660;
const ROW_HEIGHT = 52;
const HEIGHT = ROW_HEIGHT * 4 + 34;
const MAX_BAR = 520;
const reach = [520, 400, 250, 120];

/**
 * How far each kind of evidence reaches. The bar length is who can establish the
 * claim, not how important it is: the shortest bar is the tier where the honest
 * answer is that nobody can establish it from this site.
 */
export function VerificationTierFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();

  return (
    <figure className="galo-figure galo-figure--tiers">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("HOW FAR EACH KIND OF EVIDENCE REACHES")}</span>
        <strong>{t("Four tiers, and the fourth one is the honest answer more often than anybody likes.")}</strong>
        <span className="galo-figure__note">
          {t(
            "The bar length is not importance. It is how far the claim travels without trust: how many people, with what access, could establish it for themselves. A claim in the bottom tier is not weak — it is simply not something this site can settle.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("Four verification tiers drawn as bars of decreasing reach")}</title>
          <desc id={descriptionId}>
            {t(
              "Four horizontal bars. The longest is recomputed in the page you are reading, then reproducible from the published source, then recorded earlier and republished, and the shortest is not verifiable from this site at all.",
            )}
          </desc>

          {verificationTiers.map((tier, index) => {
            const y = 14 + index * ROW_HEIGHT;
            const width = reach[index] ?? MAX_BAR;
            return (
              <g key={tier.code} className={`galo-tier__row is-${tier.code.toLowerCase()}`}>
                <rect x="14" y={y} width={width} height={ROW_HEIGHT - 16} rx="9" />
                <text className="galo-tier__code" x="28" y={y + 22} dominantBaseline="central" direction="ltr">
                  {tier.code}
                </text>
                <text className="galo-tier__tag" x="66" y={y + 22} dominantBaseline="central" direction="ltr">
                  {tier.tag}
                </text>
              </g>
            );
          })}

          <text className="galo-tier__foot" x="14" y={HEIGHT - 6}>
            {t("longer bar = more people can establish it without trusting us")}
          </text>
        </svg>
      </div>
    </figure>
  );
}
