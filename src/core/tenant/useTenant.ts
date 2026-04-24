// src/core/tenant/useTenant.ts

import { getTenant, isTenantSlug, type TenantSlug } from "./tenantRegistry";

const DEFAULT_TENANT_SLUG: TenantSlug = "bloom-oven";

function resolveTenantFromUrl(): TenantSlug {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("tenant");

  if (slug && isTenantSlug(slug)) {
    return slug;
  }

  return DEFAULT_TENANT_SLUG;
}

export function useTenant() {
  const slug = resolveTenantFromUrl();
  return getTenant(slug);
}