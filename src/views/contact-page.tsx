"use client";

import { useI18n } from "@/i18n/provider";
import { siteLinks } from "@/data/site";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { CopyField } from "@/components/copy-field";
import { Eyebrow, Section } from "@/components/ui";
import { IconGithub, IconInbox, IconShield } from "@/components/icons";
import { Reveal } from "@/components/reveal";

export function ContactView() {
  const { locale, dictionary } = useI18n();
  const { contact, a11y } = dictionary;

  const topics = Object.entries(contact.form.topics).map(([value, label]) => ({ value, label }));

  return (
    <>
      <PageHeader
        dictionary={dictionary}
        locale={locale}
        page="contact"
        eyebrow={contact.eyebrow}
        title={contact.title}
        intro={contact.intro}
      />

      <Section topRule={false}>
        <div className="page-shell grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* ------------------------------ channels ------------------------------ */}
          <div className="lg:col-span-5">
            <h2 className="text-h2 font-semibold text-ink">{contact.channels.title}</h2>
            <p className="mt-3 text-lede text-ink-muted">{contact.channels.body}</p>

            <div className="mt-6 divide-y divide-line border-y border-line">
              <div className="flex items-start gap-3.5 py-4">
                <span aria-hidden="true" className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-line text-accent">
                  <IconGithub className="size-4" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-[0.94rem] font-semibold text-ink">{contact.channels.githubLabel}</h3>
                  <p className="mt-1 text-[0.84rem] text-ink-muted">{contact.channels.githubNote}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
                    <CopyField
                      value={contact.channels.githubValue}
                      href={siteLinks.githubOrg}
                      labels={{ copy: a11y.copyLink, copied: a11y.copied }}
                    />
                    <a
                      href={siteLinks.githubOrg}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-[0.82rem] font-medium text-accent underline decoration-line-strong underline-offset-4 hover:decoration-accent"
                    >
                      {contact.channels.githubCta}
                      <span className="sr-only"> — {a11y.externalLink}</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 py-4">
                <span aria-hidden="true" className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-line text-accent">
                  <IconInbox className="size-4" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-[0.94rem] font-semibold text-ink">{contact.channels.formLabel}</h3>
                  <p className="mt-1 text-[0.84rem] text-ink-muted">{contact.channels.formNote}</p>
                  <p className="mt-2 text-[0.84rem] font-medium text-accent">{contact.channels.formValue}</p>
                </div>
              </div>
            </div>

            <p className="mt-4 flex items-start gap-2.5 rounded-md border border-caution/35 bg-caution-soft px-3.5 py-3 text-[0.84rem] leading-relaxed text-ink">
              <IconShield aria-hidden className="mt-0.5 size-4 shrink-0 text-caution" />
              {contact.channels.noEmail}
            </p>

            <div className="mt-8">
              <Eyebrow>{contact.expectations.title}</Eyebrow>
              <p className="mt-3 max-w-lg text-body text-ink-muted">{contact.expectations.body}</p>
            </div>

            <div className="mt-8">
              <h3 className="mono-label text-ink-subtle">{contact.before.title}</h3>
              <ul className="mt-3 list-none space-y-2 p-0">
                {contact.before.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[0.86rem] leading-relaxed text-ink-muted">
                    <span aria-hidden="true" className="mt-[0.7em] size-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* -------------------------------- form -------------------------------- */}
          <Reveal className="lg:col-span-7">
            <ContactForm labels={contact.form} topics={topics} />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
