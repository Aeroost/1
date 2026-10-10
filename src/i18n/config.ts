/**
 * Locale registry for Aeroost.
 *
 * Adding a language is a two-step change:
 *   1. create `src/i18n/dictionaries/<code>.ts` typed as `Dictionary`
 *   2. register the code (plus its label and writing direction) below
 *
 * Language switching is client-side (no page refresh). Routes stay
 * language-neutral: `/`, `/projects`, `/technology`, …
 */
export const locales = ["en", "fa", "ar", "fr", "es", "ru", "zh"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, { native: string; english: string; short: string }> = {
  en: { native: "English", english: "English", short: "EN" },
  fa: { native: "فارسی", english: "Persian", short: "FA" },
  ar: { native: "العربية", english: "Arabic", short: "AR" },
  fr: { native: "Français", english: "French", short: "FR" },
  es: { native: "Español", english: "Spanish", short: "ES" },
  ru: { native: "Русский", english: "Russian", short: "RU" },
  zh: { native: "中文", english: "Chinese", short: "ZH" },
};

export const localeDir: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  fa: "rtl",
  ar: "rtl",
  fr: "ltr",
  es: "ltr",
  ru: "ltr",
  zh: "ltr",
};

/** BCP-47 value written to the `lang` attribute and used in hreflang. */
export const localeHtmlLang: Record<Locale, string> = {
  en: "en",
  fa: "fa-IR",
  ar: "ar",
  fr: "fr",
  es: "es",
  ru: "ru",
  zh: "zh-CN",
};

export function isLocale(value: string | undefined | null): value is Locale {
  return Boolean(value && (locales as readonly string[]).includes(value));
}

/** Language-neutral path. The locale argument is kept so existing call sites compile. */
export function localizePath(_locale: Locale | string, path: string = ""): string {
  if (path === "/" || path === "") return "/";
  return `/${path.replace(/^\/+/, "")}`;
}

/** Split a pathname; locale prefixes from older URLs are ignored. */
export function splitLocalePath(pathname: string): { locale: Locale | null; rest: string } {
  const [, maybeLocale, ...rest] = pathname.split("/");
  if (isLocale(maybeLocale)) {
    return { locale: maybeLocale, rest: rest.length ? `/${rest.join("/")}` : "/" };
  }
  return { locale: null, rest: pathname || "/" };
}

/**
 * Best-effort content negotiation from an Accept-Language header.
 * Unknown or missing values fall back to the default locale.
 */
export function negotiateLocale(header: string | null): Locale {
  if (!header) return defaultLocale;
  for (const part of header.split(",")) {
    const [tag, q] = part.trim().toLowerCase().split(";q=");
    if (q && Number.parseFloat(q) === 0) continue;
    const base = tag.split("-")[0];
    if (base === "zh") return "zh";
    if (isLocale(base)) return base;
  }
  return defaultLocale;
}

export function applyDocumentLocale(locale: Locale) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.lang = localeHtmlLang[locale];
  root.dir = localeDir[locale];
  root.setAttribute("data-locale", locale);
}
