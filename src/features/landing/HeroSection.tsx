import type {
  BusinessContract,
  ThemeContract,
} from "../../core/tenant/tenant.types";

type HeroSectionProps = {
  hero: BusinessContract["hero"];
  theme: ThemeContract;
};

export function HeroSection({ hero, theme }: HeroSectionProps) {
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