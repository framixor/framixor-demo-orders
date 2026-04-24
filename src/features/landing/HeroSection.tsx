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
          padding: "0.75rem 1rem",
          borderRadius: "0.5rem",
          cursor: "pointer",
        }}
      >
        {hero.ctaLabel}
      </button>
    </section>
  );
}