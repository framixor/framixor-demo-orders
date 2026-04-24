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
        padding: "2rem",
      }}
    >
      <HeroSection hero={business.hero} theme={theme} />

      <FeaturedProductSection featuredProduct={business.featuredProduct} />

      <OrderingRulesSection
        title={t.common.orderingRulesTitle}
        orderingRules={business.orderingRules}
      />

      <FooterSection business={business} />
    </main>
  );
}