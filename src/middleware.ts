import { defaultLocale } from "@/constants/locales"
import createMiddleware from "next-intl/middleware" // Import middleware từ next-intl
import { NextResponse, type NextRequest } from "next/server"
import { i18n } from "../i18n-config"
import { routing } from "./i18n/routing" // Import routing từ file của bạn

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const ignorePaths = ["/sitemap.xml", "/robots.txt", "/api", "/_next"]

  if (ignorePaths.some(path => pathname.startsWith(path))) {
    return NextResponse.next()
  }

  if (pathname === "/favicon.ico") {
    return NextResponse.rewrite(new URL("/favicon.ico", request.url))
  }

  if (pathname.startsWith(`/${defaultLocale}/`) || pathname === `/${defaultLocale}`) {
    return NextResponse.redirect(
      new URL(pathname.replace(`/${defaultLocale}`, pathname === `/${defaultLocale}` ? "/" : ""), request.url),
    )
  }

  const pathnameIsMissingLocale = i18n.locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )

  if (pathnameIsMissingLocale) {
    return NextResponse.rewrite(new URL(`/${defaultLocale}${pathname}${request.nextUrl.search}`, request.nextUrl.href))
  }
  const isSearchPathWithLocale = i18n.locales.some(locale => pathname.startsWith(`/${locale}/search*`))

  if (isSearchPathWithLocale) {
    return NextResponse.rewrite(new URL("/search", request.url))
  }

  // Apply next-intl middleware routing
  return createMiddleware(routing)(request) // Gọi middleware của next-intl với routing của bạn
}

export const config = {
  matcher: [
    "/((?!_next).*)", // Match tất cả các route ngoại trừ _next
    "/(vi|en)/:path*", // Match các route với ngôn ngữ (de|en)
  ],
}
