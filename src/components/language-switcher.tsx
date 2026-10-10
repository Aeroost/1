"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/format";
import { localeLabels, locales, type Locale } from "@/i18n/config";
import { useI18n } from "@/i18n/provider";
import { IconCheck, IconChevronDown } from "./icons";

/**
 * Language control. Changing language updates the in-memory dictionary, the
 * document `lang`/`dir`, and the title — without a navigation or refresh.
 * Visual chrome (border, accent-soft active state, mono short codes) is the
 * same as the previous three-language control.
 */
export function LanguageSwitcher({
  variant = "segmented",
  className,
}: {
  variant?: "segmented" | "stacked" | "compact";
  className?: string;
}) {
  const { locale, dictionary, setLocale } = useI18n();
  const labels = { navigation: dictionary.a11y.languageNavigation, current: dictionary.a11y.currentLanguage };

  if (variant === "compact") {
    return <CompactSwitcher locale={locale} setLocale={setLocale} labels={labels} className={className} />;
  }

  return (
    <nav aria-label={labels.navigation} className={cn(variant === "segmented" && "flex items-center", className)}>
      <ul
        className={cn(
          "flex list-none items-stretch gap-0.5 p-0",
          variant === "segmented" && "flex-wrap rounded-md border border-line bg-surface p-0.5",
          variant === "stacked" && "flex-col",
        )}
      >
        {locales.map((code) => {
          const active = code === locale;
          return (
            <li key={code}>
              <button
                type="button"
                onClick={() => setLocale(code)}
                aria-current={active ? "true" : undefined}
                aria-label={localeLabels[code].native}
                className={cn(
                  "inline-flex items-center gap-1.5 whitespace-nowrap rounded-xs font-medium transition-colors duration-[var(--duration-fast)]",
                  variant === "segmented" ? "px-1.5 py-1 text-[0.72rem]" : "w-full justify-between px-2.5 py-2 text-sm",
                  active
                    ? variant === "segmented"
                      ? "bg-accent-soft text-accent"
                      : "text-accent"
                    : "text-ink-subtle hover:text-ink",
                )}
              >
                <span className={variant === "stacked" ? undefined : "ltr-value"}>
                  {variant === "segmented" ? localeLabels[code].short : localeLabels[code].native}
                </span>
                {active ? <IconCheck className="size-3.5" /> : null}
                {active ? <span className="sr-only">({labels.current})</span> : null}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function CompactSwitcher({
  locale,
  setLocale,
  labels,
  className,
}: {
  locale: Locale;
  setLocale: (next: Locale) => void;
  labels: { navigation: string; current: string };
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onClick = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={labels.navigation}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center gap-1 rounded-md border border-line bg-surface px-2 py-1 text-[0.76rem] font-medium text-ink transition-colors duration-[var(--duration-fast)] hover:border-line-strong"
      >
        <span className="ltr-value text-accent">{localeLabels[locale].short}</span>
        <IconChevronDown className={cn("size-3.5 text-ink-subtle transition-transform duration-[var(--duration-fast)]", open && "rotate-180")} />
      </button>
      {open ? (
        <ul
          role="listbox"
          aria-label={labels.navigation}
          className="absolute end-0 top-[calc(100%+0.4rem)] z-50 min-w-44 rounded-md border border-line bg-surface p-1 shadow-[var(--shadow-pop)]"
        >
          {locales.map((code) => {
            const active = code === locale;
            return (
              <li key={code} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => {
                    setLocale(code);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 rounded-xs px-2.5 py-1.5 text-[0.82rem] transition-colors duration-[var(--duration-fast)]",
                    active ? "bg-accent-soft text-accent" : "text-ink-muted hover:bg-canvas-2 hover:text-ink",
                  )}
                >
                  <span>{localeLabels[code].native}</span>
                  <span className="ltr-value text-[0.7rem] text-ink-subtle">{localeLabels[code].short}</span>
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
