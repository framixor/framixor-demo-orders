// src/core/tenant/tenantRegistry.ts

import { bloomOvenBusiness } from "../../tenants/bloom-oven/business";
import { bloomOvenCatalog } from "../../tenants/bloom-oven/catalog";
import { bloomOvenTheme } from "../../tenants/bloom-oven/theme";
import { bloomOvenTranslations } from "../../tenants/bloom-oven/translations";
import type { TenantContract } from "./tenant.types";

export const tenantRegistry = {
  "bloom-oven": {
    id: "bloom-oven",
    slug: "bloom-oven",
    business: bloomOvenBusiness,
    theme: bloomOvenTheme,
    translations: bloomOvenTranslations,
    catalog: bloomOvenCatalog,
  },
} satisfies Record<string, TenantContract>;

export type TenantSlug = keyof typeof tenantRegistry;

export function isTenantSlug(slug: string): slug is TenantSlug {
  return slug in tenantRegistry;
}

export function getTenant(slug: TenantSlug) {
  return tenantRegistry[slug];
}