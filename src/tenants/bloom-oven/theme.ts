import type { ThemeContract } from "../../core/tenant/tenant.types";

export const bloomOvenTheme = {
  colors: {
    background: "#FAF7F0",
    foreground: "#2F2A24",
    primary: "#8FAE8B",
    primaryForeground: "#FFFFFF",
    muted: "#EFE8DA",
    surface: "#FFFFFF",
    surfaceAlt: "#F3EBDD",
    border: "#DED3C2",
    textMuted: "#6F665C",
  },
  radius: {
    sm: "0.375rem",
    md: "0.75rem",
    lg: "1.25rem",
  },
  spacing: {
    sm: "0.5rem",
    md: "1rem",
    lg: "2rem",
    xl: "4rem",
  },
} satisfies ThemeContract;