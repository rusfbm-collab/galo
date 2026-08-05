/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, type ReactNode } from "react";
import { translations } from "./translations";

export const locales = ["en", "ru", "zh", "ar"] as const;
export type Locale = (typeof locales)[number];
export type PageRoute =
  | "/"
  | "/investors"
  | "/audit"
  | "/theory"
  | "/thinking"
  | "/vs-llm"
  | "/math"
  | "/symmetry"
  | "/evidence"
  | "/privacy"
  | "/404";

export const localeConfig: Record<
  Locale,
  { label: string; htmlLang: string; direction: "ltr" | "rtl"; prefix: string }
> = {
  en: { label: "English", htmlLang: "en", direction: "ltr", prefix: "" },
  ru: { label: "Русский", htmlLang: "ru", direction: "ltr", prefix: "/ru" },
  zh: { label: "中文", htmlLang: "zh-CN", direction: "ltr", prefix: "/zh" },
  ar: { label: "العربية", htmlLang: "ar", direction: "rtl", prefix: "/ar" },
};

type Values = Record<string, string | number>;

type I18nValue = {
  locale: Locale;
  direction: "ltr" | "rtl";
  t: (source: string, values?: Values) => string;
  href: (canonicalHref: string) => string;
  languageHref: (targetLocale: Locale) => string;
};

const I18nContext = createContext<I18nValue | null>(null);
const missingTranslationKeys = new Map<Locale, Set<string>>();

export function resetMissingTranslations() {
  missingTranslationKeys.clear();
}

export function getMissingTranslations() {
  return Object.fromEntries(
    [...missingTranslationKeys.entries()].map(([locale, keys]) => [locale, [...keys].sort()]),
  ) as Partial<Record<Locale, string[]>>;
}

function isLocale(value: string | undefined): value is Exclude<Locale, "en"> {
  return value === "ru" || value === "zh" || value === "ar";
}

export function parseLocalizedPath(pathname: string): { locale: Locale; route: PageRoute; rawRoute: string } {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  const segments = normalized.split("/").filter(Boolean);
  const locale: Locale = isLocale(segments[0]) ? segments[0] : "en";
  const routeSegments = locale === "en" ? segments : segments.slice(1);
  const rawRoute = routeSegments.length ? `/${routeSegments.join("/")}` : "/";
  const route: PageRoute =
    rawRoute === "/" ||
    rawRoute === "/investors" ||
    rawRoute === "/audit" ||
    rawRoute === "/theory" ||
    rawRoute === "/thinking" ||
    rawRoute === "/vs-llm" ||
    rawRoute === "/math" ||
    rawRoute === "/symmetry" ||
    rawRoute === "/evidence" ||
    rawRoute === "/privacy"
      ? rawRoute
      : "/404";

  return { locale, route, rawRoute };
}

export function localizedPath(locale: Locale, canonicalHref: string): string {
  if (/^(?:[a-z]+:|\/\/)/i.test(canonicalHref)) return canonicalHref;

  const prefix = localeConfig[locale].prefix;
  if (canonicalHref.startsWith("#")) return `${prefix || "/"}${canonicalHref}`;

  const [pathPart = "/", hash] = canonicalHref.split("#", 2);
  const normalizedPath = pathPart === "/" ? "" : `/${pathPart.replace(/^\/+|\/+$/g, "")}`;
  const localized = `${prefix}${normalizedPath}` || "/";
  return hash ? `${localized}#${hash}` : localized;
}

export function switchLocalePath(targetLocale: Locale, pathname: string, hash: string): string {
  const { rawRoute } = parseLocalizedPath(pathname);
  return `${localizedPath(targetLocale, rawRoute)}${hash}`;
}

export function I18nProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  const value = useMemo<I18nValue>(() => {
    const dictionary = translations[locale];
    const t = (source: string, values?: Values) => {
      const hasTranslation = locale === "en" || Object.hasOwn(dictionary, source);
      if (!hasTranslation) {
        const missing = missingTranslationKeys.get(locale) ?? new Set<string>();
        missing.add(source);
        missingTranslationKeys.set(locale, missing);
      }
      const translated = hasTranslation ? (dictionary[source] ?? source) : source;
      if (!values) return translated;
      return Object.entries(values).reduce(
        (result, [key, replacement]) => result.replaceAll(`{${key}}`, String(replacement)),
        translated,
      );
    };

    return {
      locale,
      direction: localeConfig[locale].direction,
      t,
      href: (canonicalHref) => localizedPath(locale, canonicalHref),
      languageHref: (targetLocale) => switchLocalePath(targetLocale, window.location.pathname, window.location.hash),
    };
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const value = useContext(I18nContext);
  if (!value) throw new Error("useI18n must be used within I18nProvider");
  return value;
}
