// src/core/tenant/tenant.types.ts

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
  };
};

export type TenantContract = TenantIdentity & {
  business: BusinessContract;
  theme: ThemeContract;
};