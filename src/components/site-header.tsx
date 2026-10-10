"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/format";
import { localizePath } from "@/i18n/config";
import { useI18n } from "@/i18n/provider";
import { pages, type PageId } from "@/data/site";
import { Wordmark } from "./logo";
import { IconClose, IconMenu } from "./icons";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  const { locale, dictionary } = useI18n();
  const pathname = usePathname() || "/";
  const activeSegment = pathname.split("/").filter(Boolean)[0] ?? "";
  const activePage: PageId = pages.find((page) => page.segment === activeSegment)?.key ?? "home";
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const { a11y, nav } = dictionary;

  const items = pages.map((page) => ({
    key: page.key,
    href: localizePath(locale, page.segment),
    label: nav[page.key],
  }));

  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    const onClickAway = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node) && !toggleRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickAway);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickAway);
    };
  }, [open, close]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/85 backdrop-blur-md" ref={panelRef}>
      <div className="page-shell flex h-16 items-center justify-between gap-3">
        <Link
          href={localizePath(locale)}
          aria-label={a11y.logoHome}
          className="rounded-xs transition-opacity duration-[var(--duration-fast)] hover:opacity-85"
        >
          <Wordmark />
        </Link>

        <nav aria-label={a11y.mainNavigation} className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {items.map((item) => {
              const active = item.key === activePage;
              return (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "group relative inline-flex items-center px-2.5 py-2 text-[0.9rem] transition-colors duration-[var(--duration-fast)]",
                      active ? "font-medium text-ink" : "text-ink-muted hover:text-ink",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-2.5 -bottom-px h-px origin-left bg-accent transition-transform duration-[var(--duration-base)] ease-[var(--ease-out-quint)] group-hover:scale-x-100 rtl:origin-right",
                        active ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher variant="compact" className="hidden sm:block" />
          <ThemeToggle
            labels={{
              light: dictionary.theme.light,
              dark: dictionary.theme.dark,
              switchToLight: a11y.switchToLight,
              switchToDark: a11y.switchToDark,
            }}
          />
          <Link
            href={localizePath(locale, "contact")}
            className="hidden md:inline-flex items-center gap-1.5 rounded-md border border-line px-3 py-1.5 text-[0.84rem] font-medium text-ink transition-colors duration-[var(--duration-fast)] hover:border-accent-line hover:text-accent"
          >
            {nav.contact}
          </Link>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => (open ? close() : setOpen(true))}
            aria-expanded={open}
            aria-controls="aeroost-mobile-nav"
            aria-label={open ? a11y.closeMenu : a11y.openMenu}
            className="inline-flex size-9 items-center justify-center rounded-md border border-line bg-surface text-ink-muted transition-colors hover:border-line-strong hover:text-ink lg:hidden"
          >
            {open ? <IconClose className="size-5" /> : <IconMenu className="size-5" />}
          </button>
        </div>
      </div>

      <div id="aeroost-mobile-nav" hidden={!open} className="border-t border-line bg-canvas/98 backdrop-blur-md lg:hidden">
        <nav aria-label={a11y.mainNavigation} className="page-shell py-3">
          <ul className="flex flex-col">
            {items.map((item) => {
              const active = item.key === activePage;
              return (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between gap-3 border-b border-line py-2.5 text-[0.95rem] transition-colors",
                      active ? "font-medium text-accent" : "text-ink-muted hover:text-ink",
                    )}
                  >
                    {item.label}
                    {active ? <span className="mono-label text-accent">{dictionary.common.current}</span> : null}
                  </Link>
                </li>
              );
            })}
          </ul>
          <LanguageSwitcher variant="stacked" className="pt-4 pb-1" />
        </nav>
      </div>
    </header>
  );
}
