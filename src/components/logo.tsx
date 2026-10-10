import { cn } from "@/lib/format";

/**
 * Aeroost mark: an ascending wedge cut by a baseline — one shape, no orbit
 * rings, no monitor illustrations. It is drawn, not rasterised, so it stays
 * sharp in both themes and in right-to-left headers.
 */
export function AeroostMark({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      role="img"
      aria-hidden="true"
      focusable="false"
      className={cn("size-7", className)}
      {...props}
    >
      <rect x="0.6" y="0.6" width="30.8" height="30.8" rx="7.4" fill="none" stroke="currentColor" strokeOpacity="0.28" />
      <path d="M8.4 23.2 16 8.6l7.6 14.6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.9 19.6h8.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
      <circle cx="16" cy="5.6" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <AeroostMark className="size-[26px] text-accent" />
      <span className="ltr-value text-[1.02rem] font-semibold tracking-[-0.015em] text-ink">Aeroost</span>
    </span>
  );
}
