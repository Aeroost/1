import type { ReactNode } from "react";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/config";
import { Breadcrumbs } from "./breadcrumbs";
import { Eyebrow } from "./ui";

/**
 * Shared opening block for every secondary page: identical measure, rhythm and
 * hierarchy so the six pages read as one publication.
 */
export function PageHeader({
  dictionary,
  locale,
  page,
  eyebrow,
  title,
  intro,
  aside,
}: {
  dictionary: Dictionary;
  locale: Locale;
  page: Exclude<keyof Dictionary["nav"], "home">;
  eyebrow: string;
  title: string;
  intro: string;
  aside?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-line">
      <div aria-hidden="true" className="veil-grid edge-fade-b pointer-events-none absolute inset-0 opacity-70" />
      <div className="page-shell relative pb-11 pt-9 sm:pt-12">
        <Breadcrumbs
          label={dictionary.a11y.breadcrumbs}
          items={[
            { label: dictionary.nav.home, href: "/" },
            { label: dictionary.nav[page] },
          ]}
        />
        <div className="mt-7 grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-3.5 text-display font-semibold text-ink">
              <span className="line-mask">
                <span>{title}</span>
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-lede text-ink-muted anim-fade-rise" style={{ animationDelay: "180ms" }}>
              {intro}
            </p>
          </div>
          {aside ? <div className="lg:col-span-5">{aside}</div> : null}
        </div>
        <span
          aria-hidden="true"
          className="rule-accent anim-rule mt-9 block h-px w-full origin-left rtl:origin-right"
        />
      </div>
    </header>
  );
}
