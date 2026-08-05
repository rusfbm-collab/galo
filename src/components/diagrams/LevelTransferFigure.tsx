import { canonicalScaledEmbeddings, galoLevels } from "../../content/mathematics";
import { useI18n } from "../../i18n/I18nContext";

const embeddingKeys = new Set(
  canonicalScaledEmbeddings
    .filter(({ sourceLevel }) => sourceLevel >= 2)
    .map(({ sourceLevel, targetLevel }) => `${sourceLevel}:${targetLevel}`),
);

/**
 * Which levels can carry a distinction into which other level. A nonzero embedding
 * exists exactly when the source level divides the target level.
 */
export function LevelTransferFigure() {
  const { t } = useI18n();
  const sourceLevels = galoLevels.filter((level) => level >= 2);

  return (
    <figure className="galo-figure galo-figure--transfer">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("WHICH LEVELS CAN CARRY INFORMATION INTO WHICH")}</span>
        <strong>{t("A distinction survives a level change only when the levels divide.")}</strong>
        <span className="galo-figure__note">
          {t(
            "Read a row as the level you are coming from and a column as the level you are going to. A filled cell means a nonzero embedding exists, so distinct positions stay distinct after the move.",
          )}
        </span>
      </figcaption>

      <div className="galo-transfer__wrap" role="region" aria-label={t("Level transfer matrix")} tabIndex={0}>
        <table className="galo-transfer" dir="ltr">
          <caption>{t("Nonzero embeddings between the active levels")}</caption>
          <thead>
            <tr>
              <th scope="col">
                <span className="galo-transfer__corner">
                  <b>{t("to level")}</b>
                  <i>{t("from level")}</i>
                </span>
              </th>
              {sourceLevels.map((target) => (
                <th key={`col-${target}`} scope="col">
                  L{target}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sourceLevels.map((source) => (
              <tr key={`row-${source}`}>
                <th scope="row">L{source}</th>
                {sourceLevels.map((target) => {
                  const exists = embeddingKeys.has(`${source}:${target}`);
                  return (
                    <td key={`cell-${source}-${target}`} className={exists ? "is-embedding" : "is-zero-only"}>
                      <span className="sr-only">{exists ? t("nonzero embedding exists") : t("zero map only")}</span>
                      <span aria-hidden="true">{exists ? "●" : "·"}</span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="galo-figure__legend">
        <span>
          <i className="galo-swatch galo-swatch--series-1" aria-hidden="true" />
          {t("nonzero embedding exists")}
        </span>
        <span>
          <i className="galo-swatch galo-swatch--empty" aria-hidden="true" />
          {t("zero map only")}
        </span>
      </div>

      <div className="galo-figure__pair">
        <p>
          <strong dir="ltr">L2 → L4</strong>
          <span>{t("Two divides four, so the two positions of L2 can sit inside L4 without collapsing.")}</span>
        </p>
        <p>
          <strong dir="ltr">L3 → L5</strong>
          <span>
            {t(
              "Three does not divide five, so no nonzero embedding exists. The zero map still exists, and it sends every position to P0.",
            )}
          </span>
        </p>
      </div>
    </figure>
  );
}
