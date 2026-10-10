"use client";

import Link from "next/link";
import { localizePath } from "@/i18n/config";
import { useI18n } from "@/i18n/provider";
import { ActionLink } from "@/components/ui";

/**
 * The 404 boundary receives no params, so the locale is read back from the
 * cookie the proxy maintains — the page still renders in the visitor's
 * language and inside the right writing direction.
 */
export function NotFoundView() {
  const { locale, dictionary } = useI18n();
  const { notFound } = dictionary;

  return (
    <section className="page-shell relative overflow-hidden py-20 sm:py-28">
      <div aria-hidden="true" className="veil-grid edge-fade-b pointer-events-none absolute inset-0 opacity-80" />
      <div className="relative max-w-xl">
        <p className="mono-label text-accent">{notFound.code}</p>
        <h1 className="mt-4 text-display font-semibold text-ink">{notFound.title}</h1>
        <p className="mt-4 text-lede text-ink-muted">{notFound.body}</p>
        <div className="mt-8 flex flex-wrap items-center gap-2.5">
          <ActionLink href={localizePath(locale)} variant="primary">
            {notFound.home}
          </ActionLink>
          <Link
            href={localizePath(locale, "projects")}
            className="text-small text-accent underline decoration-line-strong underline-offset-4 hover:decoration-accent"
          >
            {notFound.projects}
          </Link>
        </div>
      </div>
    </section>
  );
}
