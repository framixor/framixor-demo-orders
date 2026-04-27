import { useTenant } from "../core/tenant/useTenant";
import { OrderHeaderSection } from "../features/order/OrderHeaderSection";
import { OrderListSection } from "../features/order/OrderListSection";

export function OrderPage() {
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
      <OrderHeaderSection tenant={tenant} />
      <OrderListSection tenant={tenant} />
    </main>
  );
}