"use client";

import { localizePath } from "@/i18n/config";
import { useI18n } from "@/i18n/provider";
import { publicReleases, siteLinks, statusOrder, workstreams, type WorkstreamStatus } from "@/data/site";
import { PageHeader } from "@/components/page-header";
import { ProjectsDirectory, type DirectoryItem } from "@/components/projects-directory";
import { ActionExternal, ActionLink, EmptyState, Eyebrow, Section, StatusPill } from "@/components/ui";
import { IconArrowOut, IconDoc, IconSearch } from "@/components/icons";
import { Reveal } from "@/components/reveal";

export function ProjectsView() {
  const { locale, dictionary } = useI18n();
  const { projects, technology, a11y, status, statusDescriptions, common } = dictionary;

  const items: DirectoryItem[] = workstreams.map((record) => {
    const copy = projects.records[record.id];
    return {
      id: record.id,
      name: copy.name,
      summary: copy.summary,
      step: copy.step,
      availability: copy.availability,
      area: technology.areas[record.area].name,
      status: record.status satisfies WorkstreamStatus,
      terms: [...record.terms, copy.name, copy.summary],
    };
  });

  const statuses = statusOrder.map((value) => ({ value, label: status[value] }));

  const legend = (
    <Reveal>
      <div className="rounded-lg border border-line bg-surface/70 p-4 sm:p-5">
        <Eyebrow className="mb-3">{projects.directory.filterLabel}</Eyebrow>
        <ul className="list-none space-y-2.5 p-0">
          {statusOrder.map((value) => (
            <li key={value} className="flex items-start gap-2.5 text-[0.82rem] text-ink-muted">
              <StatusPill tone={value} label={status[value]} size="sm" />
              <span>{statusDescriptions[value]}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );

  return (
    <>
      <PageHeader
        dictionary={dictionary}
        locale={locale}
        page="projects"
        eyebrow={projects.eyebrow}
        title={projects.title}
        intro={projects.intro}
        aside={legend}
      />

      {/* --------------------------- released work (none) -------------------------- */}
      <Section topRule={false} id="released">
        <div className="page-shell grid gap-9 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>{projects.release.label}</Eyebrow>
            <p className="mt-4 text-small text-ink-subtle">{projects.release.alreadyPublic}</p>
            <div className="mt-3 rounded-lg border border-line bg-surface p-4">
              <div className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-line text-accent">
                  <IconDoc className="size-4" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-[0.98rem] font-semibold text-ink">{projects.release.repoTitle}</h3>
                  <p className="mt-1 text-[0.86rem] text-ink-muted">{projects.release.repoBody}</p>
                  <a
                    href={siteLinks.githubRepo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-2.5 inline-flex items-center gap-1.5 text-[0.84rem] font-medium text-accent underline decoration-line-strong underline-offset-4 hover:decoration-accent"
                  >
                    <span className="ltr-value">{siteLinks.githubOrg.replace("https://", "")}</span>
                    <IconArrowOut className="size-3.5" />
                    <span className="sr-only"> — {a11y.externalLink}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <EmptyState
              title={projects.release.emptyTitle}
              body={projects.release.emptyBody}
              icon={<IconSearch className="size-[18px]" />}
              footer={
                <>
                  <ActionLink href={localizePath(locale, "technology")} variant="secondary">
                    {technology.note.cta}
                  </ActionLink>
                  <span className="text-[0.8rem] text-ink-subtle">
                    {common.notReleased} · {publicReleases.length} / {workstreams.length}
                  </span>
                </>
              }
            />
          </div>
        </div>
      </Section>

      {/* ------------------------------- workstreams ------------------------------ */}
      <Section id="workstreams" variant="sunken">
        <div className="page-shell">
          <div className="max-w-3xl">
            <h2 className="text-h2 font-semibold text-ink">{projects.directory.title}</h2>
            <p className="mt-3 text-lede text-ink-muted">{projects.directory.intro}</p>
          </div>

          <div className="mt-9">
            <ProjectsDirectory
              items={items}
              statuses={statuses}
              labels={{
                searchLabel: projects.directory.searchLabel,
                searchPlaceholder: projects.directory.searchPlaceholder,
                filterLabel: projects.directory.filterLabel,
                filterAll: projects.directory.filterAll,
                resultsLabel: projects.directory.resultsLabel,
                noMatchesTitle: projects.directory.noMatchesTitle,
                noMatchesBody: projects.directory.noMatchesBody,
                clearFilters: projects.directory.clearFilters,
                fields: projects.directory.fields,
                a11y: {
                  clearSearch: a11y.clearSearch,
                  statusFilter: a11y.statusFilter,
                  filtersGroup: a11y.filtersGroup,
                },
              }}
            />
          </div>
        </div>
      </Section>

      {/* --------------------------------- upkeep -------------------------------- */}
      <Section id="upkeep" className="py-12 sm:py-14">
        <div className="page-shell flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-h3 font-semibold text-ink">{projects.principlesNote.title}</h2>
            <p className="mt-2 text-body text-ink-muted">{projects.principlesNote.body}</p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <ActionLink href={localizePath(locale, "contact")} variant="secondary">
              {common.contactCta}
            </ActionLink>
            <ActionExternal href={siteLinks.githubRepo} hint={a11y.externalLink} variant="secondary">
              {projects.release.repoLink}
            </ActionExternal>
          </div>
        </div>
      </Section>
    </>
  );
}
