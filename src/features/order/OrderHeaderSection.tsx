import { useTranslation } from "../../core/i18n/useTranslation";
import type { TenantSectionProps } from "../../core/ui/ui.types";

export function OrderHeaderSection({ tenant }: TenantSectionProps) {
  const { business, theme } = tenant;
  const { t } = useTranslation();

  return (
    <header style={{ marginBottom: theme.spacing.lg }}>
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
    </header>
  );
}