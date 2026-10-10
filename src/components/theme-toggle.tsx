"use client";

import { useCallback, useSyncExternalStore } from "react";
import { cn } from "@/lib/format";
import { THEME_STORAGE_KEY, normalizedTheme, type Theme } from "@/lib/theme";
import { IconMoon, IconSun } from "./icons";

function readTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  const stored = normalizedTheme(
    (() => {
      try {
        return window.localStorage.getItem(THEME_STORAGE_KEY);
      } catch {
        return null;
      }
    })(),
  );
  if (stored) return stored;
  const attribute = document.documentElement.getAttribute("data-theme");
  return attribute === "light" ? "light" : "dark";
}

export function applyTheme(theme: Theme, persist = false) {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);
  root.style.colorScheme = theme;
  if (persist) {
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      /* private mode: the attribute change still applies for this visit */
    }
  }
}

const CHANGE_EVENT = "aeroost:theme-change";

function subscribe(onChange: () => void) {
  const storage = (event: StorageEvent) => {
    if (event.key === THEME_STORAGE_KEY) applyTheme(normalizedTheme(event.newValue) ?? readTheme());
    onChange();
  };
  window.addEventListener("storage", storage);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", storage);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

function getSnapshot(): Theme {
  return readTheme();
}

/** The server always renders the dark shell; the bootstrap script has already
 *  applied the stored theme to the document before hydration reads it. */
function getServerSnapshot(): Theme {
  return "dark";
}

/**
 * A single control rather than a menu: fewer moving parts, and the persisted
 * value is applied by an inline script before first paint, so there is no
 * flash and no layout shift when the theme changes.
 */
export function ThemeToggle({
  labels,
  className,
}: {
  labels: { light: string; dark: string; switchToLight: string; switchToDark: string };
  className?: string;
}) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = useCallback(() => {
    const next: Theme = readTheme() === "dark" ? "light" : "dark";
    applyTheme(next, true);
    document.documentElement.classList.add("theme-transition");
    window.setTimeout(() => document.documentElement.classList.remove("theme-transition"), 260);
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-md border border-line bg-surface text-ink-muted transition-colors duration-[var(--duration-fast)] hover:border-line-strong hover:text-ink",
        className,
      )}
      aria-label={isDark ? labels.switchToLight : labels.switchToDark}
      title={isDark ? labels.switchToLight : labels.switchToDark}
    >
      {isDark ? <IconSun className="size-[18px]" /> : <IconMoon className="size-[18px]" />}
      <span className="sr-only">{isDark ? labels.dark : labels.light}</span>
    </button>
  );
}
