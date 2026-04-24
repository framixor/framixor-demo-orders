// src/core/tenant/tenant.types.ts
import type { Language, TranslationDictionary } from "../i18n/i18n.types";

export type CurrencyCode = "USD" | "BRL";

export type TenantIdentity = {
  id: string;
  slug: string;
};

export type BusinessContract = {
  name: string;

  contact: {
    email: string;
  };

  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaLabel: string;
  };

  featuredProduct: {
    name: string;
    price: number;
    currency: CurrencyCode;
    description: string;
  };

  orderingRules: {
    pickup: string;
    shipping: string;
  };
};

export type ThemeContract = {
  colors: {
    background: string;
    foreground: string;
    primary: string;
    primaryForeground: string;
    muted: string;
    surface: string;
    surfaceAlt: string;
    border: string;
    textMuted: string;
  };
  radius: {
    sm: string;
    md: string;
    lg: string;
  };
  spacing: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
};

export type TenantContract = TenantIdentity & {
  business: BusinessContract;
  theme: ThemeContract;
  translations: Record<Language, TranslationDictionary>;
};