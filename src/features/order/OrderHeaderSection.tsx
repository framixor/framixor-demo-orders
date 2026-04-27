// src/features/order/OrderHeaderSection.tsx
import { useTranslation } from "../../core/i18n/useTranslation";
import type { TenantSectionProps } from "../../core/ui/ui.types";

export function OrderHeaderSection({ tenant }: TenantSectionProps) {
  const { business, theme } = tenant;
  const { t } = useTranslation();

  return (
    <header
      style={{
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing.xl,
      }}
    >
      <nav>
        <a
          href="/"
          style={{
            color: theme.colors.primary,
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          ← {t.order.backToHome} {business.name}
        </a>
      </nav>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: theme.spacing.sm,
        }}
      >
        <h1 style={{ margin: 0, color: theme.colors.foreground }}>
          {t.order.title}
        </h1>
        <p style={{ margin: 0, color: theme.colors.textMuted }}>
          {business.hero.subtitle}
        </p>
      </div>
    </header>
  );
}