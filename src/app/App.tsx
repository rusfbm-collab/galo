import { useEffect } from "react";
import { AuditPage } from "../pages/AuditPage";
import { Hub71Page } from "../pages/Hub71Page";
import { IndustryPage } from "../pages/IndustryPage";
import { ComparisonPage } from "../pages/ComparisonPage";
import { EvidencePage } from "../pages/EvidencePage";
import { HomePage } from "../pages/HomePage";
import { InvestorsPage } from "../pages/InvestorsPage";
import { MathematicsPage } from "../pages/MathematicsPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { PlainWordsPage } from "../pages/PlainWordsPage";
import { PrivacyPage } from "../pages/PrivacyPage";
import { SymmetryPage } from "../pages/SymmetryPage";
import { TermPage } from "../pages/TermPage";
import { TheoryPage } from "../pages/TheoryPage";
import { ThinkingPage } from "../pages/ThinkingPage";
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
import { termBySlug } from "../content/termPages";

const metadata: Record<PageRoute, { title: string; description: string }> = {
  "/": {
    title: "GALO AI — A Verifiable World Model for Private AI and Industrial Autonomy",
    description:
      "A general-purpose verifiable world-model and autonomy architecture, with industrial decision assurance as its first product. Scoped learning results are published together with their negatives; partner-controlled validity is not proven and production autonomy is not authorised.",
  },
  "/evidence": {
    title: "Evidence — GALO AI",
    description:
      "Inspect GALO's implemented bounded mechanics, immutable release fingerprint, public claim matrix, and disclosed research boundaries.",
  },
  "/simple": {
    title: "GALO AI in Plain Words — No Jargon, No Formulas",
    description:
      "GALO explained the way you would explain it to a friend: the everyday situation it addresses, what it actually does, why a table, what that buys you, and what we cannot yet promise.",
  },
  "/investors": {
    title: "GALO AI for Investors — What Exists, What Does Not, and How to Check",
    description:
      "A non-technical account of GALO: the problem in business terms, where a declared layer would sit, what runs today, six risks with their tests, and a diligence path a reader can run without us.",
  },
  "/audit": {
    title: "GALO AI for Auditors — What an Outsider Can Actually Verify",
    description:
      "Four tiers of verifiability, the five slots of every published claim, how to read a status without being misled, eight reviewer questions, a five-step reproduction, and the limits of this site.",
  },
  "/hub71": {
    title: "GALO AI Application Dossier — Assessment Lines, Milestones, and Limits",
    description:
      "An application dossier prepared for assessment: twelve lines of the current state with six of them negative, four regional-fit claims with their limits, twelve months of commitments each with a failure condition, and the six questions we expect to be pressed on. No affiliation with Hub71 is claimed or implied.",
  },
  "/industry": {
    title: "GALO AI for Industry — Decision Assurance Around Existing Digital Twins",
    description:
      "The first commercial product: a bounded, read-only, advisory evaluation on one industrial workflow. Where GALO sits above a digital twin, the seven steps of an evaluated decision, the autonomy ladder with its gates, and planning price hypotheses that are not a price list.",
  },
  "/theory": {
    title: "GALO Theory for Beginners — From States to Verified Execution",
    description:
      "Understand GALO step by step: finite states, PLUS and STAR, typed transitions, 560 coordinates, programs, symmetries, level maps, runtime scope, and evidence boundaries.",
  },
  "/thinking": {
    title: "How GALO Thinks — The Route an Episode Travels",
    description:
      "The GALO reasoning route: seven phases and two lawful exits, where an episode is allowed to stop, one bounded step of the frozen release with its exact values, what survives an episode, and what the published results did not measure.",
  },
  "/vs-llm": {
    title: "GALO AI and Language Models — What Is Actually Different",
    description:
      "How GALO differs from a language model — state, checking, replay, correction, breadth — and where it stands against twelve named families of system that are also trying to build artificial intelligence.",
  },
  "/math": {
    title: "GALO Mathematics — PLUS and STAR Cayley Tables",
    description:
      "Explore the finite PLUS and STAR Cayley tables, exact formulas, execution orientations, and disclosed limits of the GALO formal kernel.",
  },
  "/symmetry": {
    title: "GALO Symmetry — Automorphisms, Orbits, and Burnside",
    description:
      "Explore the distinct PLUS and STAR symmetry layers, unit automorphisms, affine boundaries, orbits, stabilizers, Burnside counts, and cross-level homomorphisms.",
  },
  "/term": {
    title: "GALO AI Term — What It Means in the Tables",
    description:
      "One GALO concept explained on a live Cayley table from the tower: where to look, what the word refers to inside GALO, and the complete seven-part definition.",
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
    // A term page is one route with many paths, so its canonical and its language
    // alternates have to use the path actually being read.
    const canonicalRoute = route === "/404" || route === "/term" ? rawRoute : route;
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
  const { locale, route, rawRoute, slug } = parseLocalizedPath(window.location.pathname);

  return (
    <I18nProvider locale={locale}>
      <DocumentMetadata route={route} rawRoute={rawRoute} />
      {route === "/" && <HomePage />}
      {route === "/simple" && <PlainWordsPage />}
      {route === "/investors" && <InvestorsPage />}
      {route === "/audit" && <AuditPage />}
      {route === "/hub71" && <Hub71Page />}
      {route === "/industry" && <IndustryPage />}
      {route === "/theory" && <TheoryPage />}
      {route === "/thinking" && <ThinkingPage />}
      {route === "/vs-llm" && <ComparisonPage />}
      {route === "/math" && <MathematicsPage />}
      {route === "/symmetry" && <SymmetryPage />}
      {route === "/evidence" && <EvidencePage />}
      {route === "/term" && <TermPage term={slug ? (termBySlug.get(slug) ?? null) : null} />}
      {route === "/privacy" && <PrivacyPage />}
      {route === "/404" && <NotFoundPage />}
    </I18nProvider>
  );
}
