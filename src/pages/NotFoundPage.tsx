import { ArrowLeft, ArrowRight, FileSearch } from "lucide-react";
import { PageShell } from "../components/layout/PageShell";
import { siteMap } from "../content/navigation";
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
          </div>
        </div>
      </section>

      {/* A dead end is the one place a complete list of the site is worth more
          than two buttons. */}
      <section className="section section--white">
        <div className="shell">
          <p className="eyebrow eyebrow--teal">{t("EVERY PAGE ON THIS SITE")}</p>
          <h2 className="not-found__heading">{t("Whatever you were looking for, it is one of these.")}</h2>
          <nav className="not-found__map" aria-label={t("All pages")}>
            {siteMap.map((group) => (
              <div key={group.title}>
                <h3>{t(group.title)}</h3>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <a href={href(link.href)}>
                        <strong>
                          {t(link.label)} <ArrowRight className="directional-icon" size={15} aria-hidden="true" />
                        </strong>
                        <span>{t(link.hint)}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </section>
    </PageShell>
  );
}
