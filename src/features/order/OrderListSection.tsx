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
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing.md,
            background: product.recommended
              ? theme.colors.surfaceAlt
              : theme.colors.surface,
            padding: theme.spacing.lg,
            borderRadius: theme.radius.lg,
            border: `1px solid ${theme.colors.border}`,
          }}
        >
          {product.badge && (
            <div style={{ display: "flex" }}>
              <span
                style={{
                  background: theme.colors.primary,
                  color: theme.colors.primaryForeground,
                  padding: theme.spacing.sm,
                  borderRadius: theme.radius.sm,
                }}
              >
                <small>
                  <strong>{product.badge}</strong>
                </small>
              </span>
            </div>
          )}

          <header
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: theme.spacing.md,
            }}
          >
            <h2 style={{ margin: 0, color: theme.colors.foreground }}>
              {product.name}
            </h2>
            <strong style={{ color: theme.colors.foreground }}>
              {formatCurrency(product.price, product.currency)}
            </strong>
          </header>

          <p style={{ margin: 0, color: theme.colors.textMuted }}>
            {product.description}
          </p>

          {product.valueMessage && (
            <aside
              style={{
                background: theme.colors.muted,
                padding: theme.spacing.md,
                borderRadius: theme.radius.md,
              }}
            >
              <p style={{ margin: 0, color: theme.colors.textMuted }}>
                <small>{product.valueMessage}</small>
              </p>
            </aside>
          )}
        </article>
      ))}
    </section>
  );
}