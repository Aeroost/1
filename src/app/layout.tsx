import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { cookies, headers } from "next/headers";
import { Inter, JetBrains_Mono, Noto_Sans_SC, Vazirmatn } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/format";
import { defaultLocale, isLocale, localeDir, localeHtmlLang, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { I18nProvider } from "@/i18n/provider";
import { SiteShell } from "@/components/site-shell";
import { siteLinks, siteUrl } from "@/data/site";
import { LOCALE_STORAGE_KEY, THEME_STORAGE_KEY } from "@/lib/theme";

const inter = Inter({
  subsets: ["latin", "latin-ext", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
});
const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-vazirmatn",
});
const notoSansSc = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-jetbrains",
});

const bootstrap = `(function(){try{var themeKey=${JSON.stringify(THEME_STORAGE_KEY)};var localeKey=${JSON.stringify(LOCALE_STORAGE_KEY)};var r=document.documentElement;var s=window.localStorage.getItem(themeKey);var t=(s==="light"||s==="dark")?s:(window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");r.setAttribute("data-theme",t);r.style.colorScheme=t;r.classList.add("js");var loc=null;var m=document.cookie.match(new RegExp("(?:^|; )"+localeKey+"=([^;]+)"));if(m)loc=decodeURIComponent(m[1]);if(!loc)loc=window.localStorage.getItem(localeKey);var map={en:["en","ltr"],fa:["fa-IR","rtl"],ar:["ar","rtl"],fr:["fr","ltr"],es:["es","ltr"],ru:["ru","ltr"],zh:["zh-CN","ltr"]};if(loc&&map[loc]){r.lang=map[loc][0];r.dir=map[loc][1];r.setAttribute("data-locale",loc);}}catch(e){var n=document.documentElement;n.setAttribute("data-theme","dark");n.classList.add("js");}})();`;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070a12" },
    { media: "(prefers-color-scheme: light)", color: "#f6f8fc" },
  ],
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await readRequestLocale();
  const dictionary = getDictionary(locale);
  return {
    metadataBase: new URL(siteUrl),
    title: dictionary.meta.titles.home,
    description: dictionary.meta.descriptions.home,
    openGraph: {
      type: "website",
      url: siteUrl,
      siteName: "Aeroost",
      locale: localeHtmlLang[locale].replace("-", "_"),
      title: dictionary.meta.titles.home,
      description: dictionary.meta.descriptions.home,
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.meta.titles.home,
      description: dictionary.meta.descriptions.home,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

async function readRequestLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const fromCookie = cookieStore.get(LOCALE_STORAGE_KEY)?.value;
  if (isLocale(fromCookie)) return fromCookie;
  const fromHeader = headerStore.get("x-aeroost-locale");
  if (isLocale(fromHeader)) return fromHeader;
  return defaultLocale;
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const locale = await readRequestLocale();
  const dictionary = getDictionary(locale);

  return (
    <html
      lang={localeHtmlLang[locale]}
      dir={localeDir[locale]}
      data-locale={locale}
      data-theme="dark"
      suppressHydrationWarning
      className={cn(inter.variable, vazirmatn.variable, notoSansSc.variable, jetbrainsMono.variable, inter.className, vazirmatn.className, notoSansSc.className, jetbrainsMono.className)}
    >
      <head>
        <script id="aeroost-bootstrap" dangerouslySetInnerHTML={{ __html: bootstrap }} />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="color-scheme" content="dark light" />
      </head>
      <body id="top" className="flex min-h-dvh flex-col bg-canvas text-ink">
        <I18nProvider initialLocale={locale}>
          <SiteShell>{children}</SiteShell>
        </I18nProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${siteUrl}/#organization`,
                  name: "Aeroost",
                  description: dictionary.meta.descriptions.home,
                  slogan: "Practical Technology. Thoughtfully Engineered.",
                  url: siteUrl,
                  sameAs: [siteLinks.githubOrg, siteLinks.githubRepo],
                  logo: `${siteUrl}/icon.svg`,
                },
                {
                  "@type": "WebSite",
                  "@id": `${siteUrl}/#website`,
                  url: siteUrl,
                  name: "Aeroost",
                  inLanguage: localeHtmlLang[locale],
                  publisher: { "@id": `${siteUrl}/#organization` },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
