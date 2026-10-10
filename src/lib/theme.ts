/** Shared between the pre-paint bootstrap script (server) and the toggle (client). */
export const THEME_STORAGE_KEY = "aeroost-theme";
export const LOCALE_STORAGE_KEY = "aeroost-locale";

export type Theme = "light" | "dark";

export function normalizedTheme(value: string | null | undefined): Theme | null {
  return value === "light" || value === "dark" ? value : null;
}
