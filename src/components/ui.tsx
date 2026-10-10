import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/format";
import { areaIcons, IconArrowInline, IconArrowOut, type AreaIconName } from "./icons";
import type { AreaKey } from "@/data/site";

/* --------------------------------- text ---------------------------------- */

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("mono-label flex items-center gap-2.5 text-accent", className)}>
      <span aria-hidden="true" className="inline-block h-px w-6 shrink-0 bg-accent-line" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  id,
  align = "start",
  className,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  id?: string;
  align?: "start" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <Eyebrow className={align === "center" ? "justify-center" : undefined}>{eyebrow}</Eyebrow> : null}
      <h2 id={id} className="mt-3 text-h2 font-semibold text-ink">
        {title}
      </h2>
      {lead ? <p className="mt-3.5 text-lede text-ink-muted">{lead}</p> : null}
    </div>
  );
}

export function Section({
  children,
  className,
  id,
  variant = "canvas",
  topRule = true,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "canvas" | "raised" | "sunken";
  topRule?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-14 sm:py-[4.5rem]",
        topRule && "border-t border-line",
        variant === "raised" && "bg-surface",
        variant === "sunken" && "bg-canvas-2",
        className,
      )}
    >
      {children}
    </section>
  );
}

/* -------------------------------- buttons -------------------------------- */

type ButtonVariant = "primary" | "secondary" | "quiet" | "external";

const buttonBase =
  "group inline-flex items-center justify-center gap-2 rounded-md text-[0.9rem] font-medium leading-none transition-[background-color,border-color,color,transform] duration-[var(--duration-fast)] motion-reduce:transition-none";

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-solid px-4 py-2.5 text-accent-on font-semibold shadow-[0_10px_28px_-22px_var(--accent)] hover:-translate-y-px hover:brightness-[1.08]",
  secondary:
    "border border-line bg-surface px-4 py-2.5 text-ink hover:border-line-strong hover:bg-surface-raised",
  quiet: "px-1 py-1 text-accent underline decoration-line-strong underline-offset-4 hover:decoration-accent",
  external:
    "border border-line bg-surface px-4 py-2.5 text-ink hover:border-accent-line hover:text-accent",
};

function ButtonIcon({ variant, external }: { variant: ButtonVariant; external?: boolean }) {
  const Icon = external ? IconArrowOut : IconArrowInline;
  return (
    <Icon
      className={cn(
        "size-4 shrink-0 transition-transform duration-[var(--duration-base)] ease-[var(--ease-out-quint)] rtl:rotate-180",
        variant === "primary" ? "group-hover:translate-x-0.5" : "group-hover:translate-x-0.5",
        external && "rtl:rotate-0",
      )}
    />
  );
}

/** Internal navigation action. */
export function ActionLink({
  href,
  children,
  variant = "primary",
  className,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <Link href={href} aria-label={ariaLabel} className={cn(buttonBase, buttonVariants[variant], className)}>
      <span>{children}</span>
      <ButtonIcon variant={variant} />
    </Link>
  );
}

/** Outbound action: always rel'd, always announced as opening a new window. */
export function ActionExternal({
  href,
  children,
  variant = "external",
  className,
  hint,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  hint?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={cn(buttonBase, buttonVariants[variant], className)}
    >
      <span>{children}</span>
      <ButtonIcon variant={variant} external />
      {hint ? <span className="sr-only"> — {hint}</span> : null}
    </a>
  );
}

/* ------------------------------- indicators ------------------------------- */

export type StatusTone = "active" | "exploring" | "planned" | "released";

const statusTones: Record<StatusTone, string> = {
  active: "border-accent-line/60 bg-accent-soft text-accent",
  exploring: "border-violet/35 bg-violet-soft text-violet",
  planned: "border-line-strong bg-surface-raised text-ink-muted",
  released: "border-ok/40 bg-ok-soft text-ok",
};

export function StatusPill({
  tone,
  label,
  size = "md",
}: {
  tone: StatusTone;
  label: string;
  size?: "sm" | "md";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-medium whitespace-nowrap",
        size === "sm" ? "px-2 py-[1px] text-[0.7rem]" : "px-2.5 py-[3px] text-[0.76rem]",
        statusTones[tone],
      )}
    >
      <span aria-hidden="true" className="size-1.5 rounded-full bg-current" />
      {label}
    </span>
  );
}

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-xs border border-line bg-canvas-2 px-1.5 py-[1px] text-[0.72rem] text-ink-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ------------------------------ data displays ----------------------------- */

export function FactRow({
  label,
  value,
  href,
  externalHint,
}: {
  label: string;
  value: string;
  href?: string;
  externalHint?: string;
}) {
  const valueNode = (
    <span className={cn("text-[0.87rem] font-medium", href ? "text-accent group-hover:underline" : "text-ink")}>
      {value}
    </span>
  );
  return (
    <div className="group flex items-baseline justify-between gap-4 border-t border-line py-2.5 first:border-t-0 first:pt-0">
      <dt className="text-[0.82rem] text-ink-subtle">{label}</dt>
      <dd className="m-0 text-end">
        {href ? (
          <a href={href} target="_blank" rel="noreferrer noopener" className="ltr-value inline-flex items-center gap-1">
            {valueNode}
            <IconArrowOut className="size-3.5" />
            {externalHint ? <span className="sr-only"> — {externalHint}</span> : null}
          </a>
        ) : (
          valueNode
        )}
      </dd>
    </div>
  );
}

export function EmptyState({
  title,
  body,
  icon,
  footer,
}: {
  title: string;
  body: string;
  icon?: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-dashed border-line-strong bg-canvas-2/60 px-6 py-9 sm:px-9">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-accent-line/70 via-transparent to-transparent"
      />
      {icon ? (
        <span aria-hidden="true" className="mb-4 inline-flex size-9 items-center justify-center rounded-md border border-line bg-surface text-accent">
          {icon}
        </span>
      ) : null}
      <h3 className="text-h3 font-semibold text-ink">{title}</h3>
      <p className="mt-2 max-w-xl text-body text-ink-muted">{body}</p>
      {footer ? <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">{footer}</div> : null}
    </div>
  );
}

export function AreaGlyph({ area, name, className }: { area: AreaKey; name: AreaIconName; className?: string }) {
  const Icon = areaIcons[name];
  return (
    <span
      aria-hidden="true"
      data-area={area}
      className={cn(
        "inline-flex size-9 shrink-0 items-center justify-center rounded-md border border-line bg-surface text-accent transition-colors duration-[var(--duration-base)] group-hover:border-accent-line group-hover:text-ink",
        className,
      )}
    >
      <Icon className="size-[18px]" />
    </span>
  );
}

/* --------------------------------- panels -------------------------------- */

export function Panel({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  return (
    <Tag className={cn("rounded-lg border border-line bg-surface shadow-[var(--shadow-card)]", className)}>
      {children}
    </Tag>
  );
}

export function NumberedItem({
  index,
  title,
  body,
  className,
}: {
  index: string;
  title: string;
  body: string;
  className?: string;
}) {
  return (
    <div className={cn("group relative ps-0 pt-4 border-t border-line", className)}>
      <span className="mono-label block text-ink-subtle transition-colors group-hover:text-accent">{index}</span>
      <h3 className="mt-2 text-h3 font-semibold text-ink">{title}</h3>
      <p className="mt-1.5 text-body text-ink-muted">{body}</p>
    </div>
  );
}
