import { useTranslation } from "../core/i18n/useTranslation";
import { useTenant } from "../core/tenant/useTenant";

export function OrderPage() {
  const { business, catalog, theme } = useTenant();
  const { t } = useTranslation();

  return (
    <main
      style={{
        background: theme.colors.background,
        color: theme.colors.foreground,
        minHeight: "100vh",
        padding: theme.spacing.lg,
      }}
    >
      <a
        href="/"
        style={{
          color: theme.colors.primary,
          display: "inline-block",
          marginBottom: theme.spacing.md,
        }}
      >
        ← {t.order.backToHome} {business.name}
      </a>

      <h1>{t.order.title}</h1>

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
              ${product.price} {product.currency}
            </strong>
          </article>
        ))}
      </section>
    </main>
  );
}