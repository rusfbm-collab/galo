import { Check, RefreshCw } from "lucide-react";
import { useI18n } from "../../i18n/I18nContext";

export function LocalRevision() {
  const { t } = useI18n();

  return (
    <figure className="local-revision" aria-labelledby="local-revision-title">
      <figcaption id="local-revision-title">
        <span>{t("ARCHITECTURE PRINCIPLE")}</span>
        {t("Local revision, not global reset")}
      </figcaption>
      <div className="local-revision__cards">
        <div className="hypothesis-card hypothesis-card--stable">
          <Check size={16} aria-hidden="true" />
          <span>{t("Map A")}</span>
          <strong>{t("unchanged")}</strong>
        </div>
        <div className="hypothesis-card hypothesis-card--revised">
          <RefreshCw size={16} aria-hidden="true" />
          <span>{t("Map B")}</span>
          <strong>{t("counterexample applied")}</strong>
        </div>
        <div className="hypothesis-card hypothesis-card--stable">
          <Check size={16} aria-hidden="true" />
          <span>{t("Map C")}</span>
          <strong>{t("unchanged")}</strong>
        </div>
      </div>
      <p>{t("Designed behaviour. External validation remains a target milestone.")}</p>
    </figure>
  );
}
