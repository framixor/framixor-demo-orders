import type {
  BusinessContract,
  ThemeContract,
} from "../../core/tenant/tenant.types";

type FeaturedProductSectionProps = {
  featuredProduct: BusinessContract["featuredProduct"];
  theme: ThemeContract;
};

export function FeaturedProductSection({
  featuredProduct,
  theme,
}: FeaturedProductSectionProps) {
  return (
    <section
      style={{
        background: theme.colors.surface,
        padding: theme.spacing.lg,
        borderRadius: theme.radius.lg,
        border: `1px solid ${theme.colors.border}`,
        marginBottom: theme.spacing.lg,
      }}
    >
      <h2>{featuredProduct.name}</h2>

      <p style={{ color: theme.colors.textMuted }}>
        {featuredProduct.description}
      </p>

      <strong>
        ${featuredProduct.price} {featuredProduct.currency}
      </strong>
    </section>
  );
}