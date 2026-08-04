import { ArrowLeft, FileSearch } from "lucide-react";
import { PageShell } from "../components/layout/PageShell";
import { useI18n } from "../i18n/I18nContext";

export function NotFoundPage() {
  const { href, t } = useI18n();

  return (
    <PageShell>
      <section className="simple-page simple-page--404">
        <div className="shell simple-page__inner">
          <FileSearch className="simple-page__icon" size={38} aria-hidden="true" />
          <p className="eyebrow">404 / BOUNDARY</p>
          <h1>{t("Page not found.")}</h1>
          <p>{t("The requested page is outside the current site boundary.")}</p>
          <div className="simple-page__actions">
            <a className="button button--primary" href={href("/")}>
              <ArrowLeft className="directional-icon" size={17} aria-hidden="true" /> {t("Return home")}
            </a>
            <a className="button button--ghost" href={href("/evidence")}>
              {t("View evidence")}
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
