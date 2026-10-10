"use client";

import { localizePath } from "@/i18n/config";
import { useI18n } from "@/i18n/provider";
import { siteLinks } from "@/data/site";
import { PageHeader } from "@/components/page-header";
import { ActionExternal, ActionLink, Eyebrow, Section } from "@/components/ui";
import { IconCheck, IconLayers } from "@/components/icons";
import { Reveal } from "@/components/reveal";

export function AboutView() {
  const { locale, dictionary } = useI18n();
  const { about, common, a11y } = dictionary;

  return (
    <>
      <PageHeader
        dictionary={dictionary}
        locale={locale}
        page="about"
        eyebrow={about.eyebrow}
        title={about.title}
        intro={about.intro}
      />

      {/* mission + vision, separated by a single hairline rather than two cards */}
      <Section topRule={false}>
        <div className="page-shell grid gap-y-10 md:grid-cols-2 md:gap-x-12">
          <div>
            <Eyebrow>{about.mission.title}</Eyebrow>
            <p className="mt-4 max-w-lg text-lede text-ink">{about.mission.body}</p>
          </div>
          <div className="border-line md:border-s md:ps-12">
            <Eyebrow>{about.vision.title}</Eyebrow>
            <p className="mt-4 text-small text-ink-muted">{about.vision.body}</p>
            <blockquote className="mt-5 border-s-2 border-accent-line ps-5">
              <p className="m-0 text-[1.12rem] font-medium leading-snug tracking-[-0.012em] text-ink sm:text-[1.22rem]">
                “{about.vision.quote}”
              </p>
              <footer className="mono-label mt-3 text-ink-subtle">{about.vision.attribution}</footer>
            </blockquote>
          </div>
        </div>
      </Section>

      {/* principles */}
      <Section variant="sunken" id="principles">
        <div className="page-shell">
          <div className="max-w-3xl">
            <h2 className="flex items-center gap-2.5 text-h2 font-semibold text-ink">
              <IconLayers aria-hidden className="size-5 text-accent" />
              {about.principles.title}
            </h2>
            <p className="mt-3 text-lede text-ink-muted">{about.principles.intro}</p>
          </div>

          <ol className="mt-8 grid list-none gap-x-10 border-t border-line p-0 md:grid-cols-2">
            {about.principles.items.map((item, index) => (
              <Reveal
                as="li"
                key={item.title}
                delay={index * 55}
                className="group relative flex gap-4 border-b border-line py-5 transition-colors hover:bg-surface/60"
              >
                <span className="mono-label w-6 shrink-0 pt-1 text-ink-subtle transition-colors group-hover:text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[1.02rem] font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1.5 max-w-lg text-small text-ink-muted">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      {/* approach: five stages on one rule */}
      <Section id="approach">
        <div className="page-shell">
          <div className="max-w-3xl">
            <h2 className="text-h2 font-semibold text-ink">{about.approach.title}</h2>
            <p className="mt-3 text-lede text-ink-muted">{about.approach.intro}</p>
          </div>

          <ol className="relative mt-9 grid list-none gap-8 p-0 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            <span aria-hidden="true" className="absolute inset-x-0 top-[7px] hidden h-px bg-line lg:block" />
            {about.approach.steps.map((step, index) => (
              <Reveal as="li" key={step.title} delay={index * 60} className="relative">
                <span aria-hidden="true" className="flex items-center gap-2">
                  <span className="relative z-10 size-3.5 rounded-full border border-accent-line bg-canvas">
                    <span className="absolute inset-[3px] rounded-full bg-accent" />
                  </span>
                  <span className="mono-label text-ink-subtle">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </span>
                <h3 className="mt-3 text-[1.02rem] font-semibold text-ink">{step.title}</h3>
                <p className="mt-1.5 text-small text-ink-muted">{step.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      {/* public status */}
      <Section variant="sunken" id="public-status">
        <div className="page-shell grid gap-9 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-h2 font-semibold text-ink">{about.status.title}</h2>
            <p className="mt-3 text-lede text-ink-muted">{about.status.intro}</p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              <ActionLink href={localizePath(locale, "projects")} variant="secondary">
                {common.viewDirectory}
              </ActionLink>
              <ActionExternal href={siteLinks.githubOrg} hint={a11y.externalLink} variant="secondary">
                {common.github}
              </ActionExternal>
            </div>
          </div>

          <ul className="mt-2 grid list-none gap-3 p-0 lg:col-span-7">
            {about.status.items.map((item, index) => (
              <Reveal
                as="li"
                key={item}
                delay={index * 45}
                className="flex items-start gap-3 border-t border-line pt-3.5 text-body text-ink"
              >
                <span aria-hidden="true" className="mt-1 inline-flex size-5 shrink-0 items-center justify-center rounded-full border border-ok/40 bg-ok-soft text-ok">
                  <IconCheck className="size-3" />
                </span>
                <span className="max-w-2xl">{item}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
