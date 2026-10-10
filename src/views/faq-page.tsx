"use client";

import { localizePath } from "@/i18n/config";
import { PageHeader } from "@/components/page-header";
import { ActionLink, Eyebrow, Section } from "@/components/ui";
import { IconChevronDown } from "@/components/icons";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { useI18n } from "@/i18n/provider";

/** Language-neutral grouping; every key resolves through the active dictionary. */
const faqGroups: { key: keyof Dictionary["faq"]["groups"]; items: (keyof Dictionary["faq"]["items"])[] }[] = [
  { key: "initiative", items: ["what", "who", "company"] },
  { key: "work", items: ["difference", "empty", "statuses", "when"] },
  { key: "contact", items: ["contact", "privacy", "security", "languages", "aiUsage"] },
];

export function FaqView() {
  const { locale, dictionary } = useI18n();
  const { faq } = dictionary;

  return (
    <>
      <PageHeader dictionary={dictionary} locale={locale} page="faq" eyebrow={faq.eyebrow} title={faq.title} intro={faq.intro} />

      <Section topRule={false}>
        <div className="page-shell grid gap-10 lg:grid-cols-12 lg:gap-12">
          <nav aria-label={faq.groupsLabel} className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <ul className="list-none space-y-1 border-t border-line pt-3 p-0">
                {faqGroups.map((group) => (
                  <li key={group.key}>
                    <a
                      href={`#faq-${group.key}`}
                      className="block rounded-xs px-1.5 py-1.5 text-[0.88rem] text-ink-muted transition-colors hover:bg-surface hover:text-ink"
                    >
                      {faq.groups[group.key]}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[0.78rem] leading-relaxed text-ink-subtle">{faq.expandHint}</p>
            </div>
          </nav>

          <div className="min-w-0 lg:col-span-9">
            {faqGroups.map((group, groupIndex) => (
              <section key={group.key} id={`faq-${group.key}`} className={groupIndex === 0 ? "scroll-mt-24" : "mt-11 scroll-mt-24"}>
                <Eyebrow>{faq.groups[group.key]}</Eyebrow>
                <div className="mt-3.5 border-t border-line">
                  {group.items.map((itemKey) => {
                    const item = faq.items[itemKey];
                    return (
                      <details key={itemKey} className="group border-b border-line">
                        <summary className="flex items-start justify-between gap-5 py-4 transition-colors hover:bg-surface/70">
                          <h3 className="text-[1.01rem] font-medium leading-snug text-ink group-open:text-accent">{item.q}</h3>
                          <IconChevronDown
                            aria-hidden
                            className="details-chevron mt-0.5 size-4 shrink-0 text-ink-subtle transition-colors group-hover:text-accent"
                          />
                        </summary>
                        <div className="details-panel max-w-[68ch] pb-5 pe-6 sm:pe-10">
                          <p className="m-0 text-body text-ink-muted">{item.a}</p>
                        </div>
                      </details>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="sunken" id="ask">
        <div className="page-shell flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="text-h3 font-semibold text-ink">{faq.still.title}</h2>
            <p className="mt-2 text-body text-ink-muted">{faq.still.body}</p>
          </div>
          <ActionLink href={localizePath(locale, "contact")} variant="primary">
            {faq.still.cta}
          </ActionLink>
        </div>
      </Section>
    </>
  );
}
