import { formatCurrency } from "../../core/formatting/currency";
import type { TenantSectionProps } from "../../core/ui/ui.types";

export function FeaturedProductSection({ tenant }: TenantSectionProps) {
  const { business, theme } = tenant;
  const { featuredProduct } = business;

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
        {formatCurrency(featuredProduct.price, featuredProduct.currency)}
      </strong>
    </section>
  );
}