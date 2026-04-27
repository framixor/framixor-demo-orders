import type {
  BusinessContract,
  ThemeContract,
} from "../../core/tenant/tenant.types";

type OrderingRulesSectionProps = {
  title: string;
  orderingRules: BusinessContract["orderingRules"];
  theme: ThemeContract;
};

export function OrderingRulesSection({
  title,
  orderingRules,
  theme,
}: OrderingRulesSectionProps) {
  return (
    <section
      style={{
        background: theme.colors.surfaceAlt,
        padding: theme.spacing.lg,
        borderRadius: theme.radius.lg,
        marginBottom: theme.spacing.lg,
      }}
    >
      <h2>{title}</h2>

      <p style={{ color: theme.colors.textMuted }}>
        {orderingRules.pickup}
      </p>

      <p style={{ color: theme.colors.textMuted }}>
        {orderingRules.shipping}
      </p>
    </section>
  );
}