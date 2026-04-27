import { useTenant } from "../core/tenant/useTenant";
import { FeaturedProductSection } from "../features/landing/FeaturedProductSection";
import { FooterSection } from "../features/landing/FooterSection";
import { HeroSection } from "../features/landing/HeroSection";
import { OrderingRulesSection } from "../features/landing/OrderingRulesSection";

export function HomePage() {
  const tenant = useTenant();
  const { theme } = tenant;

  return (
    <main
      style={{
        background: theme.colors.background,
        color: theme.colors.foreground,
        minHeight: "100vh",
        padding: theme.spacing.lg,
      }}
    >
      <HeroSection tenant={tenant} />
      <FeaturedProductSection tenant={tenant} />
      <OrderingRulesSection tenant={tenant} />
      <FooterSection tenant={tenant} />
    </main>
  );
}