import type { BusinessContract } from "../../core/tenant/tenant.types";

type OrderingRulesSectionProps = {
  title: string;
  orderingRules: BusinessContract["orderingRules"];
};

export function OrderingRulesSection({
  title,
  orderingRules,
}: OrderingRulesSectionProps) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{orderingRules.pickup}</p>
      <p>{orderingRules.shipping}</p>
    </section>
  );
}