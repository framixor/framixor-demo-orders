import type { CatalogContract } from "../../core/catalog/catalog.types";

export const bloomOvenCatalog = {
  flavors: [
    {
      id: "chocolate-chip",
      name: "Chocolate Chip",
    },
    {
      id: "red-velvet",
      name: "Red Velvet",
    },
    {
      id: "pistachio",
      name: "Pistachio",
    },
  ],

  products: [
    {
      id: "cookie-box-6",
      name: "6-cookie box",
      type: "bundle",
      price: 42,
      currency: "USD",
      description:
        "Includes 6 cookies. Choose your preferred mix from our available flavors.",
      recommended: true,
      badge: "Best value",
      valueMessage:
        "Better value than ordering individual cookies — ideal for gifting, sharing, or trying multiple flavors.",
      flavorSelection: {
        required: true,
        totalUnits: 6,
        allowedFlavorIds: ["chocolate-chip", "red-velvet", "pistachio"],
      },
    },
    {
      id: "single-cookie",
      name: "Single cookie",
      type: "single",
      price: 8,
      currency: "USD",
      description:
        "Choose one freshly baked gluten-free cookie from the available flavors.",
      recommended: false,
      flavorSelection: {
        required: true,
        totalUnits: 1,
        allowedFlavorIds: ["chocolate-chip", "red-velvet", "pistachio"],
      },
    },
  ],
} satisfies CatalogContract;