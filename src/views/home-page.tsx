"use client";

import Link from "next/link";
import { localizePath } from "@/i18n/config";
import { useI18n } from "@/i18n/provider";
import {
  areaOrder,
  areaVisuals,
  countByStatus,
  publicReleases,
  siteLinks,
  statusOrder,
  workstreams,
} from "@/data/site";
import { AreaGlyph, ActionLink, EmptyState, Eyebrow, FactRow, NumberedItem, Section, SectionHeading, StatusPill } from "@/components/ui";
import { IconArrowInline, IconGithub } from "@/components/icons";
import { Reveal } from "@/components/reveal";

export function HomeView() {
  const { locale, dictionary } = useI18n();
  const { home, status, statusDescriptions } = dictionary;
  const { hero, focus, philosophy, projectsBand, contactBand } = home;

  return (
    <>
      {/* ---------------------------------- hero --------------------------------- */}
      <section className="relative isolate overflow-hidden border-b border-line">
        <div aria-hidden="true" className="veil-grid edge-fade-b pointer-events-none absolute inset-0" />
        <div aria-hidden="true" className="veil-radial pointer-events-none absolute inset-0" />

        <div className="page-shell relative grid gap-x-14 gap-y-12 py-14 sm:py-[4.25rem] lg:grid-cols-12 lg:py-[5.25rem]">
          <div className="lg:col-span-7">
            <p className="mono-label flex items-center gap-2.5 text-accent">
              <span aria-hidden="true" className="dot-signal anim-signal inline-block size-1.5 rounded-full bg-accent" />
              {hero.eyebrow}
            </p>

            <h1 className="mt-5 text-display font-semibold tracking-[inherit] text-ink">
              <span className="line-mask">
                <span>{hero.headlineStart}</span>
              </span>
              <span className="line-mask">
                <span style={{ animationDelay: "110ms" }}>
                  {hero.headlineAccent.replace(/\.$/, "")}
                  <span className="text-accent">.</span>
                </span>
              </span>
            </h1>

            <p className="mt-6 max-w-[46ch] text-lede text-ink-muted anim-fade-rise" style={{ animationDelay: "220ms" }}>
              {hero.intro}
            </p>

            <p className="mt-5 max-w-[52ch] border-s border-line-strong ps-4 text-small text-ink-subtle anim-fade-rise" style={{ animationDelay: "300ms" }}>
              {hero.supporting}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-2.5 anim-fade-rise" style={{ animationDelay: "380ms" }}>
              <ActionLink href={localizePath(locale, "projects")} variant="primary">
                {hero.ctaProjects}
              </ActionLink>
              <ActionLink href={localizePath(locale, "technology")} variant="secondary">
                {hero.ctaFocus}
              </ActionLink>
              <ActionLink href={localizePath(locale, "contact")} variant="quiet">
                {hero.ctaContact}
              </ActionLink>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-lg border border-line bg-surface/80 p-5 shadow-[var(--shadow-card)] backdrop-blur-sm sm:p-6">
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-accent via-accent-line/40 to-transparent" />
              <h2 className="mono-label flex items-center justify-between gap-3 text-ink-subtle">
                <span className="text-[0.72rem] font-semibold normal-case tracking-[0.16em] text-ink">{hero.glanceTitle}</span>
                <span className="inline-flex items-center gap-1.5 text-[0.62rem] tracking-[0.18em] text-ink-subtle">
                  <IconGithub className="size-3.5" />
                  <span className="ltr-value">{siteLinks.githubOrg.replace("https://", "")}</span>
                </span>
              </h2>
              <dl className="mt-4">
                {hero.glanceItems.map((item) => (
                  <FactRow
                    key={item.label}
                    label={item.label}
                    value={item.value}
                    href={item.kind === "link" ? siteLinks.githubOrg : undefined}
                    externalHint={item.kind === "link" ? dictionary.a11y.externalLink : undefined}
                  />
                ))}
              </dl>
              <p className="mt-4 border-t border-line pt-3 text-[0.78rem] leading-relaxed text-ink-subtle">{hero.glanceCaption}</p>
            </div>
          </aside>
        </div>
      </section>

      {/* ------------------------------ focus areas ------------------------------- */}
      <Section id="focus" topRule={false} className="py-14 sm:py-16">
        <div className="page-shell">
          <SectionHeading eyebrow={focus.eyebrow} title={focus.title} lead={focus.intro} id="focus-heading" />

          <ul className="mt-9 grid list-none border-t border-line p-0 md:grid-cols-2">
            {areaOrder.map((area, index) => {
              const item = dictionary.home.focusItems[area];
              const visual = areaVisuals[area];
              return (
                <Reveal
                  as="li"
                  key={area}
                  delay={index * 70}
                  className="group border-b border-line px-1 py-6 transition-colors duration-[var(--duration-base)] hover:bg-surface/70 sm:px-4 md:odd:border-e"
                >
                  <Link href={`${localizePath(locale, "technology")}#area-${area}`} className="flex items-start gap-4">
                    <AreaGlyph area={area} name={visual.icon} />
                    <div className="min-w-0">
                      <div className="flex items-baseline gap-2.5">
                        <span className="mono-label text-ink-subtle">{visual.index}</span>
                        <h3 className="text-h3 font-semibold text-ink decoration-line-strong underline-offset-4 group-hover:underline">
                          {item.title}
                        </h3>
                      </div>
                      <p className="mt-1.5 max-w-lg text-body text-ink-muted">{item.summary}</p>
                    </div>
                    <IconArrowInline className="ms-auto mt-2 hidden size-4 shrink-0 text-ink-subtle transition-transform duration-[var(--duration-base)] group-hover:translate-x-1 group-hover:text-accent rtl:rotate-180 sm:block" />
                  </Link>
                </Reveal>
              );
            })}
          </ul>

          <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-small text-ink-subtle">
            <Link
              href={localizePath(locale, "technology")}
              className="inline-flex items-center gap-1.5 font-medium text-accent underline decoration-line-strong underline-offset-4 hover:decoration-accent"
            >
              {focus.cta}
              <IconArrowInline className="size-3.5 rtl:rotate-180" />
            </Link>
          </p>
        </div>
      </Section>

      {/* ------------------------------- philosophy ------------------------------- */}
      <Section variant="sunken" id="approach">
        <div className="page-shell grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <Eyebrow>{philosophy.eyebrow}</Eyebrow>
              <h2 className="mt-3.5 text-h2 font-semibold text-ink">{philosophy.title}</h2>
              <p className="mt-3.5 max-w-md text-lede text-ink-muted">{philosophy.lead}</p>
              <p className="mt-5 border-s border-accent-line ps-3 text-[0.84rem] text-ink-subtle">{philosophy.aside}</p>
            </div>
          </div>

          <ol className="grid list-none gap-x-8 p-0 sm:grid-cols-2">
            {philosophy.items.map((item, index) => (
              <Reveal as="li" key={item.title} delay={index * 60} className="mb-3">
                <NumberedItem index={String(index + 1).padStart(2, "0")} title={item.title} body={item.body} />
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      {/* ----------------------------- projects pointer ---------------------------- */}
      <Section id="public-record">
        <div className="page-shell grid gap-9 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow={projectsBand.eyebrow}
              title={projectsBand.title}
              lead={projectsBand.body}
              id="public-record-heading"
            />
            <div className="mt-7 flex flex-wrap gap-2.5">
              <ActionLink href={localizePath(locale, "projects")} variant="secondary">
                {projectsBand.cta}
              </ActionLink>
            </div>
          </div>

          <Reveal className="lg:col-span-6">
            <div className="rounded-lg border border-line bg-surface p-5 shadow-[var(--shadow-card)] sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="mono-label text-ink-subtle">{dictionary.projects.directory.title}</h3>
                <span className="text-[0.75rem] tabular-nums text-ink-subtle">
                  {workstreams.length} · {publicReleases.length}
                </span>
              </div>

              <ul className="mt-4 list-none space-y-2.5 p-0">
                {statusOrder.map((statusKey) => (
                  <li key={statusKey} className="flex items-start justify-between gap-4 border-b border-line pb-2.5 last:border-b-0 last:pb-0">
                    <span className="flex items-center gap-2.5">
                      <StatusPill tone={statusKey} label={status[statusKey]} size="sm" />
                      <span className="text-[0.82rem] text-ink-subtle">{statusDescriptions[statusKey]}</span>
                    </span>
                    <span className="tabular-nums text-[0.95rem] font-medium text-ink">{countByStatus(statusKey)}</span>
                  </li>
                ))}
              </ul>

              {publicReleases.length === 0 ? (
                <div className="mt-5">
                  <EmptyState title={dictionary.projects.release.emptyTitle} body={dictionary.projects.release.emptyBody} />
                </div>
              ) : null}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ------------------------------ contact pointer ---------------------------- */}
      <Section variant="raised" id="contact-invite" topRule>
        <div className="page-shell">
          <div className="flex flex-col items-start justify-between gap-6 border-t border-line pt-8 md:flex-row md:items-center md:border-t-0 md:pt-0">
            <div className="max-w-xl">
              <Eyebrow>{contactBand.eyebrow}</Eyebrow>
              <h2 className="mt-3 text-h2 font-semibold text-ink">{contactBand.title}</h2>
              <p className="mt-2.5 text-lede text-ink-muted">{contactBand.body}</p>
            </div>
            <div className="shrink-0">
              <ActionLink href={localizePath(locale, "contact")} variant="primary">
                {contactBand.cta}
              </ActionLink>
              <p className="mt-3 text-[0.78rem] text-ink-subtle">{contactBand.note}</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
