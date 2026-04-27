import { useTranslation } from "../core/i18n/useTranslation";
import { useTenant } from "../core/tenant/useTenant";
import { FeaturedProductSection } from "../features/landing/FeaturedProductSection";
import { FooterSection } from "../features/landing/FooterSection";
import { HeroSection } from "../features/landing/HeroSection";
import { OrderingRulesSection } from "../features/landing/OrderingRulesSection";

export function HomePage() {
  const { business, theme } = useTenant();
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
      <HeroSection hero={business.hero} theme={theme} />

      <FeaturedProductSection
        featuredProduct={business.featuredProduct}
        theme={theme}
      />

      <OrderingRulesSection
        title={t.common.orderingRulesTitle}
        orderingRules={business.orderingRules}
        theme={theme}
      />

      <FooterSection business={business} theme={theme} />
    </main>
  );
}