"use client";

import type { ReactNode } from "react";
import { useI18n } from "@/i18n/provider";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export function SiteShell({ children }: { children: ReactNode }) {
  const { dictionary } = useI18n();

  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-md border border-line bg-surface px-3 py-2 text-small font-medium text-ink focus:not-sr-only focus:fixed focus:top-3 focus:z-50 focus:start-3"
      >
        {dictionary.a11y.skipToContent}
      </a>
      <SiteHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
