import type {
  BusinessContract,
  ThemeContract,
} from "../../core/tenant/tenant.types";

type FooterSectionProps = {
  business: Pick<BusinessContract, "name" | "contact">;
  theme: ThemeContract;
};

export function FooterSection({ business, theme }: FooterSectionProps) {
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