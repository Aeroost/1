"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/format";
import { IconCheck, IconCopy } from "./icons";

/**
 * Read-only value with a copy affordance: the text stays selectable (so it
 * works without clipboard permissions) and the confirmation is announced.
 */
export function CopyField({
  value,
  labels,
  href,
  mono = true,
}: {
  value: string;
  labels: { copy: string; copied: string };
  href?: string;
  mono?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => () => { if (timer.current) window.clearTimeout(timer.current); }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      timer.current = window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked: the text is still selectable */
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className={cn("ltr-value text-[0.92rem] text-accent underline decoration-line-strong underline-offset-4 hover:decoration-accent", mono && "font-mono text-[0.86rem]")}
        >
          {value}
        </a>
      ) : (
        <span className={cn("ltr-value select-all text-[0.92rem] text-ink", mono && "font-mono text-[0.86rem]")}>{value}</span>
      )}
      <button
        type="button"
        onClick={copy}
        aria-label={labels.copy}
        className={cn(
          "inline-flex size-7 items-center justify-center rounded-xs border border-line text-ink-subtle transition-colors duration-[var(--duration-fast)] hover:border-line-strong hover:text-ink",
          copied && "border-ok/50 text-ok",
        )}
      >
        {copied ? <IconCheck className="size-3.5" /> : <IconCopy className="size-3.5" />}
      </button>
      <span aria-live="polite" className="text-[0.76rem] text-ok">
        {copied ? labels.copied : ""}
      </span>
    </div>
  );
}
