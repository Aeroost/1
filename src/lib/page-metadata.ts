import type { Metadata } from "next";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { localeHtmlLang, locales, localizePath, type Locale } from "@/i18n/config";
import { siteUrl } from "@/data/site";

type PageId = "home" | "projects" | "technology" | "about" | "faq" | "contact";

/**
 * One metadata builder for every page so titles, descriptions, canonicals,
 * hreflang pairs and Open Graph data stay consistent across the six routes.
 */
export function buildPageMetadata(
  dictionary: Dictionary,
  locale: Locale,
  page: PageId,
): Metadata {
  const path = page === "home" ? "" : page;
  const title = dictionary.meta.titles[page];
  const description = dictionary.meta.descriptions[page];
  const languages = Object.fromEntries(locales.map((code) => [localeHtmlLang[code], localizePath(code, path)]));
  const url = `${siteUrl}${localizePath(locale, path)}`;

  return {
    title,
    description,
    alternates: {
      canonical: localizePath(locale, path),
      languages: { ...languages, "x-default": localizePath("en", path) },
    },
    openGraph: {
      type: "website",
      url,
      siteName: "Aeroost",
      locale: localeHtmlLang[locale].replace("-", "_"),
      title,
      description,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

/** Breadcrumb items for a page, home first, current page last. */
export function breadcrumbItems(
  dictionary: Dictionary,
  locale: Locale,
  page: Exclude<PageId, "home">,
): { label: string; href?: string }[] {
  return [
    { label: dictionary.nav.home, href: localizePath(locale) },
    { label: dictionary.nav[page] },
  ];
}
