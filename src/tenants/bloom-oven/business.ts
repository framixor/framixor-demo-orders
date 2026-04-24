// src/tenants/bloom-oven/business.ts
import type { BusinessContract } from "../../core/tenant/tenant.types";

export const bloomOvenBusiness = {
  name: "The Bloom Oven",
  contact: {
    email: "thebloomoven@gmail.com",
  },
  hero: {
    eyebrow: "Freshly baked weekly",
    title: "Small-batch gluten-free cookies",
    subtitle:
      "Premium cookies baked in limited batches, with pickup and shipping options.",
    ctaLabel: "Start an order",
  },
  featuredProduct: {
    name: "6-cookie box",
    price: 42,
    currency: "USD",
    description:
      "Includes chocolate chip, red velvet, and pistachio — two of each.",
  },
  orderingRules: {
    pickup: "No minimum order for pickup.",
    shipping: "Minimum $20 product order for shipping. Shipping paid at checkout.",
  },
} satisfies BusinessContract;