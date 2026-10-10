"use client";

import { useMemo, useState } from "react";

const SEARCH_ID = "workstream-search";
import { cn } from "@/lib/format";
import { IconClose, IconRefresh, IconSearch } from "./icons";
import { EmptyState, StatusPill, type StatusTone } from "./ui";

export interface DirectoryItem {
  id: string;
  name: string;
  summary: string;
  step: string;
  availability: string;
  area: string;
  status: StatusTone;
  terms: string[];
}

export interface DirectoryLabels {
  searchLabel: string;
  searchPlaceholder: string;
  filterLabel: string;
  filterAll: string;
  resultsLabel: string;
  noMatchesTitle: string;
  noMatchesBody: string;
  clearFilters: string;
  fields: { status: string; area: string; step: string; availability: string };
  a11y: { clearSearch: string; statusFilter: string; filtersGroup: string };
}

const railTone: Record<StatusTone, string> = {
  active: "bg-accent",
  exploring: "bg-violet",
  planned: "bg-ink-subtle",
  released: "bg-ok",
};

export function ProjectsDirectory({
  items,
  labels,
  statuses,
}: {
  items: DirectoryItem[];
  labels: DirectoryLabels;
  statuses: { value: StatusTone; label: string }[];
}) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"all" | StatusTone>("all");

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return items.filter((item) => {
      if (status !== "all" && item.status !== status) return false;
      if (!needle) return true;
      const haystack = [item.name, item.summary, item.step, item.area, item.availability, ...item.terms]
        .join(" ")
        .toLowerCase();
      return haystack.includes(needle);
    });
  }, [items, query, status]);

  const isFiltered = query.trim().length > 0 || status !== "all";

  const reset = () => {
    setQuery("");
    setStatus("all");
    document.getElementById(SEARCH_ID)?.focus();
  };

  return (
    <div>
      <div className="flex flex-col gap-4 border-y border-line py-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-1 items-center gap-2.5">
          <label htmlFor={SEARCH_ID} className="mono-label shrink-0 text-ink-subtle">
            {labels.searchLabel}
          </label>
          <div className="relative flex-1 sm:max-w-sm">
            <IconSearch className="pointer-events-none absolute inset-y-0 start-2.5 my-auto size-4 text-ink-subtle" />
            <input
              id={SEARCH_ID}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={labels.searchPlaceholder}
              className="field ps-9 pe-9 text-[0.9rem]"
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label={labels.a11y.clearSearch}
                className="absolute inset-y-0 end-1.5 my-auto inline-flex size-6 items-center justify-center rounded-xs text-ink-subtle transition-colors hover:text-ink"
              >
                <IconClose className="size-3.5" />
              </button>
            ) : null}
          </div>
        </div>

        <div role="group" aria-label={labels.a11y.filtersGroup} title={labels.a11y.statusFilter} className="flex flex-wrap items-center gap-1.5">
          <span className="mono-label me-1 text-ink-subtle">{labels.filterLabel}</span>
          {(["all", ...statuses.map((s) => s.value)] as ("all" | StatusTone)[]).map((value) => {
            const active = status === value;
            const count = value === "all" ? items.length : items.filter((item) => item.status === value).length;
            const label = value === "all" ? labels.filterAll : statuses.find((s) => s.value === value)?.label ?? value;
            return (
              <button
                key={value}
                type="button"
                onClick={() => setStatus(value)}
                aria-pressed={active}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[0.8rem] transition-colors duration-[var(--duration-fast)]",
                  active
                    ? "border-accent-line bg-accent-soft text-accent"
                    : "border-line bg-surface text-ink-muted hover:border-line-strong hover:text-ink",
                )}
              >
                {label}
                <span className="tabular-nums text-ink-subtle">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <p aria-live="polite" className="mt-3 flex items-center justify-between gap-3 text-[0.82rem] text-ink-subtle">
        <span>
          <span className="tabular-nums font-medium text-ink">{filtered.length}</span>
          <span className="mx-1.5">/</span>
          <span className="tabular-nums">{items.length}</span>
          <span className="ms-2">{labels.resultsLabel}</span>
        </span>
        {isFiltered ? (
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-1.5 rounded-xs text-ink-muted underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent"
          >
            <IconRefresh className="size-3.5" />
            {labels.clearFilters}
          </button>
        ) : null}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-6">
          <EmptyState title={labels.noMatchesTitle} body={labels.noMatchesBody} icon={<IconSearch className="size-[18px]" />} />
        </div>
      ) : (
        <ul className="mt-2 list-none p-0">
          {filtered.map((item, index) => (
            <li
              key={item.id}
              className="group relative border-b border-line py-6 ps-6 transition-colors duration-[var(--duration-base)] hover:bg-surface/60"
            >
              <span
                aria-hidden="true"
                className={cn(
                  "absolute inset-y-5 start-0 w-px rounded-full opacity-45 transition-opacity duration-[var(--duration-base)] group-hover:opacity-100",
                  railTone[item.status],
                )}
              />
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <h3 className="text-h3 font-semibold text-ink">
                      <span className="mono-label me-2.5 text-ink-subtle">{String(index + 1).padStart(2, "0")}</span>
                      {item.name}
                    </h3>
                  </div>
                  <p className="mt-2 text-body text-ink-muted">{item.summary}</p>
                  <p className="mt-3 flex gap-2 text-small text-ink-muted">
                    <span className="mono-label shrink-0 pt-[0.35em] text-ink-subtle">{labels.fields.step}</span>
                    <span className="text-ink/90">{item.step}</span>
                  </p>
                </div>

                <dl className="grid shrink-0 grid-cols-[auto_1fr] gap-x-3 gap-y-1.5 text-[0.82rem] lg:w-56 lg:justify-items-end lg:text-end">
                  <dt className="text-ink-subtle">{labels.fields.status}</dt>
                  <dd className="m-0">
                    <StatusPill
                      tone={item.status}
                      label={statuses.find((option) => option.value === item.status)?.label ?? item.status}
                      size="sm"
                    />
                  </dd>
                  <dt className="text-ink-subtle">{labels.fields.area}</dt>
                  <dd className="m-0 text-ink">{item.area}</dd>
                  <dt className="text-ink-subtle">{labels.fields.availability}</dt>
                  <dd className="m-0 text-ink-muted">{item.availability}</dd>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
