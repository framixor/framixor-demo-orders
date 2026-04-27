import { useTenant } from "../core/tenant/useTenant";

export function OrderPage() {
  const { business, catalog, theme } = useTenant();

  return (
    <main
      style={{
        background: theme.colors.background,
        color: theme.colors.foreground,
        minHeight: "100vh",
        padding: theme.spacing.lg,
      }}
    >
      <a href="/" style={{ color: theme.colors.primary }}>
        ← Back to {business.name}
      </a>

      <h1>Build your order</h1>

      <section>
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
              marginBottom: theme.spacing.lg,
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
              ${product.price} {product.currency}
            </strong>
          </article>
        ))}
      </section>
    </main>
  );
}