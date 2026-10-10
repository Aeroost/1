/**
 * Language-neutral site data.
 *
 * Only verifiable facts live here. Every user-facing string is a key that is
 * resolved against the active locale's dictionary, so nothing can drift out of
 * sync between languages and no invented content can hide in this file.
 */
import type { Dictionary } from "@/i18n/dictionaries/en";

export type AreaKey = "software" | "ai" | "games" | "tools";
export type PageKey = "home" | "projects" | "technology" | "about" | "faq" | "contact";

/** Route order used by the header, footer, breadcrumbs and the sitemap. */
export const pages = [
  { key: "home", segment: "" },
  { key: "projects", segment: "projects" },
  { key: "technology", segment: "technology" },
  { key: "about", segment: "about" },
  { key: "faq", segment: "faq" },
  { key: "contact", segment: "contact" },
] as const satisfies readonly { key: PageKey; segment: string }[];

export type PageId = (typeof pages)[number]["key"];

export const siteLinks = {
  githubOrg: "https://github.com/Aeroost",
  githubRepo: "https://github.com/Aeroost/Aeroost",
} as const;

/**
 * Canonical origin for metadata, sitemap and robots. Set NEXT_PUBLIC_SITE_URL at
 * deploy time; the fallback keeps output honest during local review.
 */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://aeroost.com").replace(/\/$/, "");

export const areaOrder: readonly AreaKey[] = ["software", "ai", "games", "tools"];

export const areaVisuals: Record<AreaKey, { index: string; icon: "code" | "neural" | "gamepad" | "tools"; tone: "accent" | "violet" }> = {
  software: { index: "01", icon: "code", tone: "accent" },
  ai: { index: "02", icon: "neural", tone: "violet" },
  games: { index: "03", icon: "gamepad", tone: "accent" },
  tools: { index: "04", icon: "tools", tone: "violet" },
};

export type WorkstreamStatus = "active" | "exploring" | "planned";
export type WorkstreamId = keyof Dictionary["projects"]["records"];

export interface Workstream {
  id: WorkstreamId;
  status: WorkstreamStatus;
  area: AreaKey;
  /** Machine-readable terms that make the search field useful in every locale. */
  terms: string[];
}

/**
 * Workstreams are statements of current effort, not products. `released: false`
 * everywhere here is deliberate: nothing is available to use or download.
 */
export const workstreams: readonly Workstream[] = [
  {
    id: "website",
    status: "active",
    area: "software",
    terms: ["next.js", "typescript", "tailwind", "static rendering", "i18n", "rtl", "a11y"],
  },
  {
    id: "foundations",
    status: "active",
    area: "software",
    terms: ["design tokens", "spacing", "typography", "components", "logical properties", "focus"],
  },
  {
    id: "evaluation",
    status: "exploring",
    area: "ai",
    terms: ["evaluation", "prompts", "limitations", "privacy", "benchmarks", "assistant"],
  },
  {
    id: "prototypes",
    status: "exploring",
    area: "games",
    terms: ["prototype", "mechanics", "frame time", "input", "performance", "playtesting"],
  },
  {
    id: "utilities",
    status: "planned",
    area: "tools",
    terms: ["browser", "text diff", "format inspection", "units", "clipboard", "offline"],
  },
] as const satisfies readonly Workstream[];

/** Verified public releases. Empty by design: nothing has been released yet. */
export const publicReleases: readonly { id: string }[] = [];

export const statusOrder: readonly WorkstreamStatus[] = ["active", "exploring", "planned"];

export function countByStatus(status: WorkstreamStatus): number {
  return workstreams.filter((record) => record.status === status).length;
}
