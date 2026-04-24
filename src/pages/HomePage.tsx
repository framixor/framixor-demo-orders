import { useTranslation } from "../core/i18n/useTranslation";
import { useTenant } from "../core/tenant/useTenant";

export function HomePage() {
  const { business, theme } = useTenant();
  const { t } = useTranslation();

  return (
    <main
      style={{
        background: theme.colors.background,
        color: theme.colors.foreground,
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <section>
        <p>{business.hero.eyebrow}</p>
        <h1>{business.hero.title}</h1>
        <p>{business.hero.subtitle}</p>

        <button
          style={{
            background: theme.colors.primary,
            color: theme.colors.primaryForeground,
            border: "none",
            padding: "0.75rem 1rem",
            borderRadius: "0.5rem",
            cursor: "pointer",
          }}
        >
          {business.hero.ctaLabel}
        </button>
      </section>

      <section>
        <h2>{business.featuredProduct.name}</h2>
        <p>{business.featuredProduct.description}</p>
        <strong>
          ${business.featuredProduct.price} {business.featuredProduct.currency}
        </strong>
      </section>

      <section>
        <h2>{t.common.orderingRulesTitle}</h2>
        <p>{business.orderingRules.pickup}</p>
        <p>{business.orderingRules.shipping}</p>
      </section>

      <footer>
        <p>{business.name}</p>
        <p>{business.contact.email}</p>
      </footer>
    </main>
  );
}