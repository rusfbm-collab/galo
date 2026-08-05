import { buildCanonicalTypedCell, galoActionFamilies } from "../../content/mathematics";
import { useI18n } from "../../i18n/I18nContext";

const SOURCE = 0;
const ACTIVE = 2;
const LEVEL = 3;

const cells = galoActionFamilies.map((family) => buildCanonicalTypedCell(LEVEL, family, SOURCE, ACTIVE));

/**
 * Where the two semantic roles land on the two table axes, and what that costs.
 * PLUS reaches the same target either way; STAR does not, and the figure shows
 * both facts on one worked example.
 */
export function RoleOrientationFigure() {
  const { t } = useI18n();

  return (
    <figure className="galo-figure galo-figure--roles">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("WHERE THE TWO ROLES SIT ON THE TABLE")}</span>
        <strong>{t("The law is fixed; the orientation decides which role picks the row.")}</strong>
        <span className="galo-figure__note">
          {t(
            "One worked example, source P0 and active P2 at L3, run through all four families. PLUS lands on the same position both ways because it is commutative. STAR does not, because only the row operand can trigger the reset.",
          )}
        </span>
      </figcaption>

      <div className="galo-roles">
        {cells.map((cell) => {
          const isReset = cell.operation === "STAR" && cell.leftOperand === 0;
          return (
            <article key={cell.family} className={isReset ? "galo-roles__card is-reset" : "galo-roles__card"}>
              <h4 dir="ltr">{cell.family}</h4>

              <div className="galo-roles__axes">
                <div>
                  <span>{t("row")}</span>
                  <strong dir="ltr">P{cell.leftOperand}</strong>
                  <small>{cell.orientation === "LEFT" ? t("source") : t("active")}</small>
                </div>
                <div>
                  <span>{t("column")}</span>
                  <strong dir="ltr">P{cell.rightOperand}</strong>
                  <small>{cell.orientation === "LEFT" ? t("active") : t("source")}</small>
                </div>
              </div>

              <div className="galo-roles__result">
                <span>{t("cell")}</span>
                <strong dir="ltr">P{cell.target}</strong>
              </div>

              <code dir="ltr">{cell.cellId}</code>
              {isReset && <p className="galo-roles__flag">{t("row operand is P0, so the reset branch fires")}</p>}
            </article>
          );
        })}
      </div>

      <div className="galo-figure__pair">
        <p>
          <strong dir="ltr">PLUS_LEFT vs PLUS_RIGHT</strong>
          <span>
            {t(
              "Same target, different records. The coordinates stay distinct because they carry different provenance into the receipt.",
            )}
          </span>
        </p>
        <p>
          <strong dir="ltr">STAR_LEFT vs STAR_RIGHT</strong>
          <span>
            {t(
              "Different targets. Swapping which role occupies the row decides whether the reset branch is entered at all.",
            )}
          </span>
        </p>
      </div>
    </figure>
  );
}
