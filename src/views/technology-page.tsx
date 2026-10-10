"use client";

import Link from "next/link";
import { localizePath } from "@/i18n/config";
import { useI18n } from "@/i18n/provider";
import { areaOrder, areaVisuals } from "@/data/site";
import { PageHeader } from "@/components/page-header";
import { ActionLink, AreaGlyph, Eyebrow, Section } from "@/components/ui";
import { IconArrowInline, IconShield } from "@/components/icons";
import { Reveal } from "@/components/reveal";

export function TechnologyView() {
  const { locale, dictionary } = useI18n();
  const { technology, common } = dictionary;
  const t = technology;

  return (
    <>
      <PageHeader dictionary={dictionary} locale={locale} page="technology" eyebrow={t.eyebrow} title={t.title} intro={t.intro} />

      <Section topRule={false}>
        <div className="page-shell grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* index rail: the four areas, always reachable while scrolling */}
          <nav aria-label={t.indexLabel} className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <h2 className="mono-label text-ink-subtle">{t.indexLabel}</h2>
              <ol className="mt-3 list-none space-y-0.5 p-0">
                {areaOrder.map((area) => (
                  <li key={area}>
                    <a
                      href={`#area-${area}`}
                      className="group flex items-baseline gap-2.5 rounded-xs px-1.5 py-1.5 text-[0.88rem] text-ink-muted transition-colors hover:bg-surface hover:text-ink"
                    >
                      <span className="mono-label w-5 shrink-0 text-ink-subtle group-hover:text-accent">{areaVisuals[area].index}</span>
                      <span>{t.areas[area].name}</span>
                    </a>
                  </li>
                ))}
              </ol>
              <p className="mt-5 border-t border-line pt-3.5 text-[0.8rem] leading-relaxed text-ink-subtle">{t.note.title}</p>
            </div>
          </nav>

          <div className="min-w-0 lg:col-span-9">
            {areaOrder.map((area, index) => {
              const areaCopy = t.areas[area];
              const visual = areaVisuals[area];
              const considerations = t.considerations[area];
              const boundary = t.boundaries[area];

              return (
                <article
                  key={area}
                  id={`area-${area}`}
                  className={index === 0 ? "scroll-mt-24" : "mt-14 scroll-mt-24 border-t border-line pt-12"}
                >
                  <Reveal>
                    <div className="flex items-start gap-4">
                      <AreaGlyph area={area} name={visual.icon} className="size-11" />
                      <div className="min-w-0">
                        <p className="mono-label text-ink-subtle">{visual.index}</p>
                        <h2 className="mt-1 text-h2 font-semibold text-ink">{areaCopy.name}</h2>
                        <p className="mt-2 max-w-2xl text-lede text-ink">{areaCopy.tagline}</p>
                      </div>
                    </div>
                    <p className="mt-4 max-w-[62ch] text-body text-ink-muted">{areaCopy.definition}</p>
                  </Reveal>

                  <h3 className="mono-label mt-8 text-ink-subtle">{t.considerationsLabel}</h3>
                  <ul className="mt-3 grid list-none gap-x-8 border-t border-line p-0 md:grid-cols-2">
                    {considerations.map((item, itemIndex) => (
                      <Reveal
                        as="li"
                        key={item.title}
                        delay={itemIndex * 55}
                        className="border-b border-line py-4 transition-colors hover:bg-surface/60"
                      >
                        <h4 className="flex items-baseline gap-2.5 text-[0.98rem] font-semibold text-ink">
                          <span aria-hidden="true" className="mt-[0.5em] size-1 shrink-0 rounded-full bg-accent" />
                          {item.title}
                        </h4>
                        <p className="mt-1.5 ps-[1.15rem] text-small text-ink-muted">{item.body}</p>
                      </Reveal>
                    ))}
                  </ul>

                  <div className="mt-5 flex items-start gap-3 rounded-md border border-violet/30 bg-violet-soft px-4 py-3">
                    <IconShield aria-hidden className="mt-0.5 size-4 shrink-0 text-violet" />
                    <p className="m-0 text-small text-ink">
                      <span className="mono-label me-2 align-middle text-violet">{t.boundaryLabel}</span>
                      {boundary}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Section>

      <Section variant="sunken" id="clarification">
        <div className="page-shell flex flex-col items-start justify-between gap-5 border-t border-line pt-8 md:flex-row md:items-center md:border-t-0 md:pt-0">
          <div className="max-w-2xl">
            <Eyebrow>{common.focusAreas}</Eyebrow>
            <h2 className="mt-3 text-h3 font-semibold text-ink">{t.note.title}</h2>
            <p className="mt-2 text-body text-ink-muted">{t.note.body}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            <ActionLink href={localizePath(locale, "projects")} variant="secondary">
              {t.note.cta}
            </ActionLink>
            <Link
              href={localizePath(locale, "faq")}
              className="text-small text-accent underline decoration-line-strong underline-offset-4 hover:decoration-accent"
            >
              {dictionary.nav.faq}
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
