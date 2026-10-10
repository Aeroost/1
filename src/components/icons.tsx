import type { SVGProps } from "react";

/**
 * A single icon family: 24-unit grid, 1.5 stroke, no fills, currentColor.
 * Icons are decorative by default (`aria-hidden`) — controls carry their own
 * accessible names.
 */
type IconProps = SVGProps<SVGSVGElement>;

function Svg({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function IconCode(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M8.5 8.5 5 12l3.5 3.5" />
      <path d="M15.5 8.5 19 12l-3.5 3.5" />
      <path d="M13.4 6.5l-2.8 11" />
    </Svg>
  );
}

export function IconNeural(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="5.5" cy="7" r="1.7" />
      <circle cx="5.5" cy="17" r="1.7" />
      <circle cx="12" cy="12" r="1.9" />
      <circle cx="18.5" cy="7.5" r="1.7" />
      <circle cx="18.5" cy="16.5" r="1.7" />
      <path d="M7.1 7.9 10.4 11M7.1 16.1 10.4 13M13.7 11.1 17 8.4M13.7 12.9 17 15.7" />
    </Svg>
  );
}

export function IconGamepad(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M7.6 8h8.8a3.6 3.6 0 0 1 3.5 2.75l.8 4.1A2.6 2.6 0 0 1 18.2 18l-1.5-2.4h-9.4L5.8 18A2.6 2.6 0 0 1 3 14.85l.8-4.1A3.6 3.6 0 0 1 7.6 8Z" />
      <path d="M8.2 11v2.4M7 12.2h2.4" />
      <circle cx="15.4" cy="11.7" r=".85" fill="currentColor" stroke="none" />
      <circle cx="17.3" cy="13.6" r=".85" fill="currentColor" stroke="none" />
    </Svg>
  );
}

export function IconTools(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M13.4 4.9a3.9 3.9 0 0 0 4.9 5.2l-8 8a2.1 2.1 0 1 1-3-3l8-8" />
      <path d="M15.6 4.2l4.3 4.3-2.1 2.1-2.2-2.2-2.1 2.1-1.4-1.4 2.1-2.1-2.2-2.2Z" />
    </Svg>
  );
}

export function IconArrowInline(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4.5 12h14" />
      <path d="M13.4 6.8 18.7 12l-5.3 5.2" />
    </Svg>
  );
}

export function IconArrowOut(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M7.5 16.5 16.5 7.5" />
      <path d="M9.4 7.5h7.1v7.1" />
    </Svg>
  );
}

export function IconSearch(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="11" cy="11" r="5.6" />
      <path d="m15.2 15.2 3.6 3.6" />
    </Svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6.4 6.4 17.6 17.6M17.6 6.4 6.4 17.6" />
    </Svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 7.5h16M4 12h16M4 16.5h10" />
    </Svg>
  );
}

export function IconSun(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3.2v1.9M12 18.9v1.9M3.2 12h1.9M18.9 12h1.9M5.8 5.8 7.1 7.1M16.9 16.9l1.3 1.3M18.2 5.8l-1.3 1.3M7.1 16.9l-1.3 1.3" />
    </Svg>
  );
}

export function IconMoon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M20 14.4A8.4 8.4 0 0 1 9.6 4a8.4 8.4 0 1 0 10.4 10.4Z" />
    </Svg>
  );
}

export function IconGithub(props: IconProps) {
  return (
    <Svg {...props} strokeWidth={1.4}>
      <path d="M15.2 20.4v-2.9c0-1-.3-1.7-.8-2.2 2.6-.3 5.1-1.3 5.1-5.6a4.3 4.3 0 0 0-1.2-3 4 4 0 0 0-.1-3s-1-.3-3.2 1.2a11 11 0 0 0-5.8 0C6.9 3.4 5.9 3.7 5.9 3.7a4 4 0 0 0-.1 3 4.3 4.3 0 0 0-1.2 3c0 4.3 2.5 5.3 5.1 5.6-.4.4-.7.9-.8 1.6-.7.3-2.6.9-3.6-1.1 0 0-.7-1.2-1.9-1.3 0 0-1.2 0-.1.7 0 0 .8.4 1.4 1.8 0 0 .7 2.2 4.2 1.5v2.7" />
    </Svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m5 12.6 4.3 4.3L19 7.2" />
    </Svg>
  );
}

export function IconCopy(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="9" y="9" width="10.5" height="10.5" rx="2.2" />
      <path d="M14.8 6.2A2.4 2.4 0 0 0 12.4 4.5H6.4A2.4 2.4 0 0 0 4 6.9v6a2.4 2.4 0 0 0 1.7 2.3" />
    </Svg>
  );
}

export function IconDoc(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6 3.5h7.2L18.5 8.8V20a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5Z" />
      <path d="M13 3.8v5.2h5.2M8.4 13h7.2M8.4 16.4h5" />
    </Svg>
  );
}

export function IconShield(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3.4 5 5.9v5.4c0 4 2.9 7.4 7 9 4.1-1.6 7-5 7-9V5.9Z" />
      <path d="m9.2 12 2 2 3.6-3.9" />
    </Svg>
  );
}

export function IconInbox(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3.6 12.5 5.9 5.4A1.6 1.6 0 0 1 7.4 4.3h9.2a1.6 1.6 0 0 1 1.5 1.1l2.3 7.1" />
      <path d="M3.6 12.5h4.2l1 2.4h6.4l1-2.4h4.2v5.7a1.5 1.5 0 0 1-1.5 1.5H5.1a1.5 1.5 0 0 1-1.5-1.5Z" />
    </Svg>
  );
}

export function IconGauge(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4.2 17.4a9 9 0 1 1 15.6 0" />
      <path d="M12 12.6 15.4 9" />
      <circle cx="12" cy="13.4" r="1.2" fill="currentColor" stroke="none" />
    </Svg>
  );
}

export function IconLayers(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m12 3.6 8.2 4.3L12 12.2 3.8 7.9Z" />
      <path d="m4.6 12 7.4 3.9 7.4-3.9M4.6 16.1 12 20l7.4-3.9" />
    </Svg>
  );
}

export function IconRefresh(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M19.4 12a7.4 7.4 0 1 1-2.2-5.3" />
      <path d="M18.1 3.9v3.4h-3.4" />
    </Svg>
  );
}

export function IconChevronDown(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m6.6 9.4 5.4 5.2 5.4-5.2" />
    </Svg>
  );
}

export const areaIcons = {
  code: IconCode,
  neural: IconNeural,
  gamepad: IconGamepad,
  tools: IconTools,
} as const;

export type AreaIconName = keyof typeof areaIcons;
