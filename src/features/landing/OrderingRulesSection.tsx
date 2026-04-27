import { useTranslation } from "../../core/i18n/useTranslation";
import type { TenantSectionProps } from "../../core/ui/ui.types";

export function OrderingRulesSection({ tenant }: TenantSectionProps) {
  const { business, theme } = tenant;
  const { orderingRules } = business;
  const { t } = useTranslation();

  return (
    <section
      style={{
        background: theme.colors.surfaceAlt,
        padding: theme.spacing.lg,
        borderRadius: theme.radius.lg,
        marginBottom: theme.spacing.lg,
      }}
    >
      <h2>{t.common.orderingRulesTitle}</h2>

      <p style={{ color: theme.colors.textMuted }}>
        {orderingRules.pickup}
      </p>

      <p style={{ color: theme.colors.textMuted }}>
        {orderingRules.shipping}
      </p>
    </section>
  );
}