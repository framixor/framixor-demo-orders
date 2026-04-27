import type { TenantSectionProps } from "../../core/ui/ui.types";

export function FooterSection({ tenant }: TenantSectionProps) {
  const { business, theme } = tenant;

  return (
    <footer
      style={{
        marginTop: theme.spacing.xl,
        paddingTop: theme.spacing.md,
        borderTop: `1px solid ${theme.colors.border}`,
        color: theme.colors.textMuted,
      }}
    >
      <p>{business.name}</p>
      <p>{business.contact.email}</p>
    </footer>
  );
}