"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { applyDocumentLocale, isLocale, locales, splitLocalePath, type Locale } from "./config";
import { getDictionary } from "./get-dictionary";
import type { Dictionary } from "./dictionaries/en";
import { LOCALE_STORAGE_KEY } from "@/lib/theme";
import { pages, type PageId } from "@/data/site";

type I18nValue = {
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (next: Locale) => void;
};

const I18nContext = createContext<I18nValue | null>(null);

function persistLocale(locale: Locale) {
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    /* private mode */
  }
  try {
    document.cookie = `${LOCALE_STORAGE_KEY}=${locale};path=/;max-age=31536000;samesite=lax`;
  } catch {
    /* cookies blocked */
  }
}

function pageFromPath(pathname: string): PageId {
  const rest = splitLocalePath(pathname || "/").rest;
  const segment = rest.split("/").filter(Boolean)[0] ?? "";
  return pages.find((page) => page.segment === segment)?.key ?? "home";
}

/**
 * Holds the active locale in memory. Switching language updates copy, `lang`,
 * `dir` and the document title without navigating — so the layout, scroll
 * position and theme never flash.
 */
export function I18nProvider({
  children,
  initialLocale,
}: {
  children: ReactNode;
  initialLocale: Locale;
}) {
  const pathname = usePathname() || "/";
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  const setLocale = useCallback(
    (next: Locale) => {
      if (!locales.includes(next)) return;
      setLocaleState(next);
      persistLocale(next);
      applyDocumentLocale(next);
      document.title = getDictionary(next).meta.titles[pageFromPath(pathname)];
    },
    [pathname],
  );

  const value = useMemo<I18nValue>(
    () => ({ locale, dictionary: getDictionary(locale), setLocale }),
    [locale, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}

export function readStoredLocale(): Locale | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    return isLocale(stored) ? stored : null;
  } catch {
    return null;
  }
}
