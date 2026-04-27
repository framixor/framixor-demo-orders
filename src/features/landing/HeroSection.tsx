import type { TenantSectionProps } from "../../core/ui/ui.types";

export function HeroSection({ tenant }: TenantSectionProps) {
  const { business, theme } = tenant;
  const { hero } = business;

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing.md,
        marginBottom: theme.spacing.lg,
      }}
    >
      <p style={{ color: theme.colors.textMuted }}>{hero.eyebrow}</p>

      <h1>{hero.title}</h1>

      <p style={{ color: theme.colors.textMuted }}>{hero.subtitle}</p>

      <div>
        <button
          type="button"
          onClick={() => {
            window.location.href = "/order";
          }}
          style={{
            background: theme.colors.primary,
            color: theme.colors.primaryForeground,
            border: "none",
            padding: `${theme.spacing.sm} ${theme.spacing.md}`,
            borderRadius: theme.radius.md,
            cursor: "pointer",
          }}
        >
          {hero.ctaLabel}
        </button>
      </div>
    </section>
  );
}