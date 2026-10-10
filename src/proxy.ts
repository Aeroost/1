/**
 * Negotiate the first-visit locale (cookie, else Accept-Language) without
 * changing the URL. Language switching itself is client-side and never hits
 * this file.
 */
import { NextResponse, type NextRequest } from "next/server";
import { isLocale, negotiateLocale } from "@/i18n/config";
import { LOCALE_STORAGE_KEY } from "@/lib/theme";

export const LOCALE_COOKIE = LOCALE_STORAGE_KEY;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/api") || pathname.startsWith("/_next")) {
    return NextResponse.next();
  }

  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale = isLocale(cookieLocale) ? cookieLocale : negotiateLocale(request.headers.get("accept-language"));

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-aeroost-locale", locale);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  if (!isLocale(cookieLocale)) {
    response.cookies.set(LOCALE_COOKIE, locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
  }
  return response;
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
