import type { BusinessContract } from "../../core/tenant/tenant.types";

type FeaturedProductSectionProps = {
  featuredProduct: BusinessContract["featuredProduct"];
};

export function FeaturedProductSection({
  featuredProduct,
}: FeaturedProductSectionProps) {
  return (
    <section>
      <h2>{featuredProduct.name}</h2>
      <p>{featuredProduct.description}</p>
      <strong>
        ${featuredProduct.price} {featuredProduct.currency}
      </strong>
    </section>
  );
}