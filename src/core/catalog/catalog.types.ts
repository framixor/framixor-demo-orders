export type CatalogProductType = "single" | "bundle";

export type CatalogFlavor = {
  id: string;
  name: string;
};

export type CatalogProduct = {
  id: string;
  name: string;
  type: CatalogProductType;
  price: number;
  currency: "USD" | "BRL";
  description: string;
  recommended?: boolean;
  badge?: string;
  valueMessage?: string;
  flavorSelection?: {
    required: boolean;
    totalUnits: number;
    allowedFlavorIds: string[];
  };
};

export type CatalogContract = {
  products: CatalogProduct[];
  flavors: CatalogFlavor[];
};