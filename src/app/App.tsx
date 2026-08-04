import { useEffect } from "react";
import { EvidencePage } from "../pages/EvidencePage";
import { HomePage } from "../pages/HomePage";
import { MathematicsPage } from "../pages/MathematicsPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { PrivacyPage } from "../pages/PrivacyPage";
import {
  I18nProvider,
  localeConfig,
  locales,
  localizedPath,
  parseLocalizedPath,
  useI18n,
  type PageRoute,
} from "../i18n/I18nContext";
import { siteContent } from "../content/site";
import { publicContact } from "../content/contact";

const metadata: Record<PageRoute, { title: string; description: string }> = {
  "/": {
    title: "GALO AI — Explicit World State and Replayable Execution",
    description:
      "GALO is a standalone research architecture for explicit world state, typed execution, and receipt-backed replay.",
  },
  "/evidence": {
    title: "Evidence — GALO AI",
    description:
      "Inspect GALO's implemented bounded mechanics, immutable release fingerprint, public claim matrix, and disclosed research boundaries.",
  },
  "/math": {
    title: "GALO Mathematics — PLUS and STAR Cayley Tables",
    description:
      "Explore the finite PLUS and STAR Cayley tables, exact formulas, execution orientations, and disclosed limits of the GALO formal kernel.",
  },
  "/privacy": {
    title: "Privacy — GALO AI",
    description: "How the static GALO AI website handles data, cookies, analytics, and external contact links.",
  },
  "/404": {
    title: "Page not found — GALO AI",
    description: "The requested page is outside the current GALO AI site boundary.",
  },
};

function upsertMeta(selector: string, attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.append(element);
  }
  element.content = content;
}

function DocumentMetadata({ route, rawRoute }: { route: PageRoute; rawRoute: string }) {
  const { locale, t } = useI18n();

  useEffect(() => {
    const config = localeConfig[locale];
    const page = metadata[route];
    const canonicalRoute = route === "/404" ? rawRoute : route;
    const canonicalPath = localizedPath(locale, canonicalRoute);
    const canonicalUrl = new URL(canonicalPath, siteContent.canonicalUrl).toString();
    const title = t(page.title);
    const description = t(page.description);

    document.documentElement.lang = config.htmlLang;
    document.documentElement.dir = config.direction;
    document.title = title;
    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[property="og:title"]', "property", "og:title", title);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    upsertMeta('meta[property="og:locale"]', "property", "og:locale", config.htmlLang.replace("-", "_"));

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.append(canonical);
    }
    canonical.href = canonicalUrl;

    document.head.querySelectorAll('link[rel="alternate"][data-galo-locale]').forEach((node) => node.remove());
    for (const alternateLocale of locales) {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = localeConfig[alternateLocale].htmlLang;
      link.href = new URL(localizedPath(alternateLocale, canonicalRoute), siteContent.canonicalUrl).toString();
      link.dataset.galoLocale = alternateLocale;
      document.head.append(link);
    }
    const defaultLink = document.createElement("link");
    defaultLink.rel = "alternate";
    defaultLink.hreflang = "x-default";
    defaultLink.href = new URL(localizedPath("en", canonicalRoute), siteContent.canonicalUrl).toString();
    defaultLink.dataset.galoLocale = "default";
    document.head.append(defaultLink);

    const structuredData = document.getElementById("galo-structured-data");
    if (structuredData) {
      structuredData.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "GALO AI",
        url: siteContent.canonicalUrl,
        email: publicContact.evaluationEmail,
        description: t("Founder-led research architecture for explicit world state and bounded, replayable execution."),
      });
    }
  }, [locale, rawRoute, route, t]);

  return null;
}

export function App() {
  const { locale, route, rawRoute } = parseLocalizedPath(window.location.pathname);

  return (
    <I18nProvider locale={locale}>
      <DocumentMetadata route={route} rawRoute={rawRoute} />
      {route === "/" && <HomePage />}
      {route === "/math" && <MathematicsPage />}
      {route === "/evidence" && <EvidencePage />}
      {route === "/privacy" && <PrivacyPage />}
      {route === "/404" && <NotFoundPage />}
    </I18nProvider>
  );
}
