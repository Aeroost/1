"use client";

import Link from "next/link";
import { localeLabels, localizePath } from "@/i18n/config";
import { useI18n } from "@/i18n/provider";
import { areaOrder, siteLinks } from "@/data/site";
import { cn, interpolate } from "@/lib/format";
import { Wordmark } from "./logo";
import { IconArrowOut, IconGithub } from "./icons";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";

export function SiteFooter() {
  const { locale, dictionary } = useI18n();
  const { footer, nav, a11y, technology, common } = dictionary;
  const year = new Date().getFullYear();

  const explore = ["projects", "technology", "about", "faq"] as const;

  return (
    <footer aria-label={a11y.siteFooter} className="relative border-t border-line bg-canvas-2">
      <div aria-hidden="true" className="veil-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className={cn("page-shell relative grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.15fr_1fr]")}>
        <div className="max-w-sm">
          <Wordmark />
          <p className="mt-3.5 text-[0.95rem] font-medium text-ink">{dictionary.meta.tagline}</p>
          <p className="mt-2 text-small text-ink-muted">{footer.blurb}</p>
          <a
            href={siteLinks.githubOrg}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-5 inline-flex items-center gap-2 rounded-md border border-line bg-surface px-3 py-1.5 text-[0.84rem] text-ink transition-colors hover:border-accent-line hover:text-accent"
          >
            <IconGithub className="size-4 text-ink-muted" />
            <span className="ltr-value">{common.github}</span>
            <IconArrowOut className="size-3.5 text-ink-subtle" />
            <span className="sr-only"> — {a11y.externalLink}</span>
          </a>
        </div>

        <nav aria-labelledby="footer-explore">
          <h2 id="footer-explore" className="mono-label text-ink-subtle">
            {footer.exploreTitle}
          </h2>
          <ul className="mt-3.5 space-y-1.5">
            {explore.map((key) => (
              <li key={key}>
                <Link href={localizePath(locale, key)} className="text-small text-ink-muted transition-colors hover:text-accent">
                  {nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-capabilities">
          <h2 id="footer-capabilities" className="mono-label text-ink-subtle">
            {footer.capabilitiesTitle}
          </h2>
          <ul className="mt-3.5 space-y-1.5">
            {areaOrder.map((area) => (
              <li key={area}>
                <Link
                  href={`${localizePath(locale, "technology")}#area-${area}`}
                  className="text-small text-ink-muted transition-colors hover:text-accent"
                >
                  {technology.areas[area].name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mono-label text-ink-subtle">{footer.statusTitle}</h2>
          <ul className="mt-3.5 space-y-1.5">
            {footer.statusLines.map((line) => (
              <li key={line} className="flex items-start gap-2 text-small text-ink-muted">
                <span aria-hidden="true" className="mt-[0.55em] size-1 shrink-0 rounded-full bg-accent-line" />
                {line}
              </li>
            ))}
          </ul>
          <ul className="mt-4 space-y-1.5">
            <li>
              <Link
                href={localizePath(locale, "contact")}
                className="text-small text-accent underline decoration-line-strong underline-offset-4 hover:decoration-accent"
              >
                {nav.contact}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-line">
        <div className="page-shell flex flex-wrap items-center justify-between gap-y-3 py-5">
          <p className="m-0 text-[0.8rem] text-ink-subtle">
            {interpolate(footer.copyright, { year })} <span className="text-ink-muted">{footer.legalNote}</span>
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle
              labels={{
                light: dictionary.theme.light,
                dark: dictionary.theme.dark,
                switchToLight: a11y.switchToLight,
                switchToDark: a11y.switchToDark,
              }}
            />
            <a
              href="#top"
              className="text-[0.8rem] text-ink-subtle underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent"
            >
              {common.backToTop}
            </a>
          </div>
        </div>
        <div className="page-shell flex flex-wrap items-center justify-between gap-x-6 gap-y-2 pb-6">
          <p className="m-0 text-[0.78rem] text-ink-subtle">
            <span className="mono-label me-2">{footer.languagesTitle}</span>
            <span>{common.languagesAvailable}</span>
            <span className="sr-only">
              {dictionary.a11y.currentLanguage}: {localeLabels[locale].english}
            </span>
          </p>
          <p className="m-0 text-[0.78rem] text-ink-subtle">{footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
