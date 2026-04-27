import { formatCurrency } from "../../core/formatting/currency";
import type { TenantSectionProps } from "../../core/ui/ui.types";

export function OrderListSection({ tenant }: TenantSectionProps) {
  const { catalog, theme } = tenant;

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing.lg,
      }}
    >
      {catalog.products.map((product) => (
        <article
          key={product.id}
          style={{
            background: product.recommended
              ? theme.colors.surfaceAlt
              : theme.colors.surface,
            padding: theme.spacing.lg,
            borderRadius: theme.radius.lg,
            border: `1px solid ${theme.colors.border}`,
          }}
        >
          {product.badge && <p>{product.badge}</p>}

          <h2>{product.name}</h2>

          <p style={{ color: theme.colors.textMuted }}>
            {product.description}
          </p>

          {product.valueMessage && (
            <p style={{ color: theme.colors.textMuted }}>
              {product.valueMessage}
            </p>
          )}

          <strong>
            {formatCurrency(product.price, product.currency)}
          </strong>
        </article>
      ))}
    </section>
  );
}