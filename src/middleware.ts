import createMiddleware from "next-intl/middleware" // Import middleware từ next-intl
import { NextResponse, type NextRequest } from "next/server"
import { routing } from "./i18n/routing"
export type LocaleType = (typeof routing.locales)[number]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const defaultLocale = routing.defaultLocale

  const ignorePaths = ["/sitemap.xml", "/robots.txt", "/api", "/_next", "/app-ads.txt", "/.well-known"]

  //bỏ qua các path cần ignore
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

  if (pathname === `/${defaultLocale}`) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  const pathnameIsMissingLocale = routing.locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )

  if (pathnameIsMissingLocale) {
    return NextResponse.rewrite(new URL(`/${defaultLocale}${pathname}${request.nextUrl.search}`, request.nextUrl.href))
  }

  const isSearchPathWithLocale = routing.locales.some(locale => pathname.startsWith(`/${locale}/search*`))

  if (isSearchPathWithLocale) {
    return NextResponse.rewrite(new URL("/search", request.url))
  }

  return createMiddleware(routing)(request)
}

export const config = {
  matcher: ["/((?!_next).*)", "/(en|vi)/:path*"],
}
