import Link from "next/link";
import { cn } from "@/lib/format";

/**
 * Breadcrumb trail used on every secondary page. The last entry is the current
 * page and is rendered as text, never as a link, so screen readers hear a
 * location rather than a redundant action.
 */
export function Breadcrumbs({
  items,
  label,
  className,
}: {
  items: { label: string; href?: string }[];
  label: string;
  className?: string;
}) {
  const last = items.length - 1;
  return (
    <nav aria-label={label} className={cn("text-[0.8rem] text-ink-subtle", className)}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="transition-colors hover:text-accent">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink-muted">
                {item.label}
              </span>
            )}
            {index < last ? (
              <span aria-hidden="true" className="text-line-strong rtl:rotate-180">
                /
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
