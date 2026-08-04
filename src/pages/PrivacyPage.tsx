import { ArrowLeft, LockKeyhole } from "lucide-react";
import { PageShell } from "../components/layout/PageShell";
import { useI18n } from "../i18n/I18nContext";

export function PrivacyPage() {
  const { href, t } = useI18n();

  return (
    <PageShell>
      <section className="simple-page">
        <div className="shell simple-page__inner">
          <a className="back-link back-link--dark" href={href("/")}>
            <ArrowLeft className="directional-icon" size={16} aria-hidden="true" /> {t("Home")}
          </a>
          <LockKeyhole className="simple-page__icon" size={34} aria-hidden="true" />
          <p className="eyebrow">{t("PRIVACY")}</p>
          <h1>{t("A quiet, static website by default.")}</h1>
          <p>
            {t(
              "GALO does not intentionally collect personal data through forms, analytics, advertising trackers, or cookies on this website.",
            )}
          </p>
          <p>
            {t(
              "The hosting provider may process technical request logs for security and service delivery. If you choose an external email, Telegram, or social link after one is published, you leave this website and the destination service’s terms and privacy practices apply.",
            )}
          </p>
          <p>{t("Please do not send sensitive information through public channels.")}</p>
          <div className="privacy-facts">
            <span>{t("No analytics")}</span>
            <span>{t("No cookies")}</span>
            <span>{t("No forms")}</span>
            <span>{t("No user accounts")}</span>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
