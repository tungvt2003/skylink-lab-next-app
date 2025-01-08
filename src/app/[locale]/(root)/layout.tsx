import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"

import Footer from "@/components/footer"
import Header from "@/components/header"
import { inter, open_sans } from "@/lib/get-font"
import "@/styles/globals.css"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import Providers from "../../../components/progress-bar/progress-bar"
import ScrollToTop from "../../../components/scroll-to-top"
import { routing } from "../../../i18n/routing"

export const metadata: Metadata = {
  title: "SkyLink Labs",
  description: "SkyLink Labs",
}

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  const messages = await getMessages({ locale })

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="https://api-cms-skylink.dansolutions.vn/uploads/Homepage1_6054b94462.webp"
          as="image"
        />
      </head>
      <body className={`${inter.variable} ${open_sans.variable} bg-white`}>
        <NextIntlClientProvider messages={messages}>
          <Header locale={locale} />
          <ScrollToTop />
          <Providers>{children}</Providers>
          <Footer dict={messages} lang={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
