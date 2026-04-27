import type { BusinessContract, ThemeContract } from "../../core/tenant/tenant.types";

type HeroSectionProps = {
  hero: BusinessContract["hero"];
  theme: ThemeContract;
};

export function HeroSection({ hero, theme }: HeroSectionProps) {
  return (
    <section>
      <p>{hero.eyebrow}</p>
      <h1>{hero.title}</h1>
      <p>{hero.subtitle}</p>

      <button
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
    </section>
  );
}