import type { Locale } from "./I18nContext";
import { ar } from "./locales/ar";
import { ru } from "./locales/ru";
import { zh } from "./locales/zh";

export type TranslationDictionary = Record<string, string>;

export const translations: Record<Locale, TranslationDictionary> = {
  en: {},
  ru,
  zh,
  ar,
};
