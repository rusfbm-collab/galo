import { useEffect, useRef, useState } from "react";
import { ArrowRight, Languages, Menu, X } from "lucide-react";
import { siteContent } from "../../content/site";
import { localeConfig, locales, parseLocalizedPath, useI18n, type Locale } from "../../i18n/I18nContext";
import { Logo } from "./Logo";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const { href, languageHref, locale, t } = useI18n();
  const currentRoute = parseLocalizedPath(window.location.pathname).route;

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        {t("Skip to content")}
      </a>
      <div className="shell site-header__inner">
        <a className="site-header__brand" href={href("/")} aria-label={t("GALO AI home")}>
          <Logo inverted />
        </a>
        <nav className="site-header__desktop" aria-label={t("Primary navigation")}>
          {siteContent.navigation.map((item) => (
            <a
              key={item.label}
              href={href(item.href)}
              aria-current={!item.href.includes("#") && currentRoute === item.href ? "page" : undefined}
            >
              {t(item.label)}
            </a>
          ))}
        </nav>
        <label className="language-switcher">
          <Languages size={16} aria-hidden="true" />
          <span className="sr-only">{t("Language")}</span>
          <select
            aria-label={t("Language")}
            value={locale}
            onChange={(event) => {
              const nextLocale = event.target.value as Locale;
              window.localStorage.setItem("galo.locale", nextLocale);
              window.location.assign(languageHref(nextLocale));
            }}
          >
            {locales.map((item) => (
              <option key={item} value={item}>
                {localeConfig[item].label}
              </option>
            ))}
          </select>
        </label>
        <a className="button button--small button--light site-header__cta" href={href("/#evaluation")}>
          {t("Request evaluation")} <ArrowRight className="directional-icon" size={16} aria-hidden="true" />
        </a>
        <button
          ref={menuButtonRef}
          className="icon-button site-header__menu"
          type="button"
          aria-label={isOpen ? t("Close navigation") : t("Open navigation")}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {isOpen && (
        <div id="mobile-navigation" className="mobile-nav mobile-nav--open">
          <nav className="shell" aria-label={t("Mobile navigation")}>
            {siteContent.navigation.map((item) => (
              <a
                key={item.label}
                href={href(item.href)}
                aria-current={!item.href.includes("#") && currentRoute === item.href ? "page" : undefined}
                onClick={() => setIsOpen(false)}
              >
                {t(item.label)}
              </a>
            ))}
            <a className="button button--primary" href={href("/#evaluation")} onClick={() => setIsOpen(false)}>
              {t("Request evaluation")} <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
