"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
  type RefObject,
} from "react";
import { cn } from "@/lib/format";

/**
 * Scroll reveal. Content ships visible in the HTML and is only animated once
 * the observer attaches, so nothing is lost without JavaScript, and
 * reduced-motion users see the final state immediately.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "span";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      // Very old or exotic runtimes: show everything after hydration.
      const id = window.setTimeout(() => setVisible(true), 0);
      return () => window.clearTimeout(id);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.06 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Comp = as as ElementType;
  const props = {
    ref: ref as RefObject<HTMLElement>,
    className: cn("reveal", className),
    "data-visible": visible ? "true" : "false",
    style: { "--reveal-delay": `${delay}ms` } as CSSProperties,
  };

  return <Comp {...props}>{children}</Comp>;
}
