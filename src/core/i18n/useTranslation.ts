// src/core/i18n/useTranslation.ts

import { useTenant } from "../tenant/useTenant";
import type { Language } from "./i18n.types";

const DEFAULT_LANGUAGE: Language = "en";

function resolveLanguageFromUrl(): Language {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get("lang");

  if (lang === "en" || lang === "pt" || lang === "es") {
    return lang;
  }

  return DEFAULT_LANGUAGE;
}

export function useTranslation() {
  const tenant = useTenant();
  const language = resolveLanguageFromUrl();

  return {
    language,
    t: tenant.translations[language],
  };
}