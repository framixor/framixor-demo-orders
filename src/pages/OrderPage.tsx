// src/pages/OrderPage.tsx
import { useTenant } from "../core/tenant/useTenant";
import { OrderHeaderSection } from "../features/order/OrderHeaderSection";
import { OrderListSection } from "../features/order/OrderListSection";

export function OrderPage() {
  const tenant = useTenant();
  const { theme } = tenant;

  return (
    <main
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.foreground,
        minHeight: "100vh",
        padding: theme.spacing.lg,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "48rem",
          display: "flex",
          flexDirection: "column",
          gap: theme.spacing.xl,
        }}
      >
        <OrderHeaderSection tenant={tenant} />
        <OrderListSection tenant={tenant} />
      </div>
    </main>
  );
}