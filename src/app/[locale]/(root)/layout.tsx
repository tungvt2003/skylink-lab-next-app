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
import { getSettings } from "../../../lib/navigation-services"

export const metadata: Metadata = {
  title: "Hệ thống Giáo dục Sky-Line",
  description: "Hệ thống Giáo dục Sky-Line",
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
  const settingsData = await getSettings()
  const DEFAULT_HEADERSCRIPTS =
    settingsData?.find(
      (item: { attributes: { key: string; value: string } }) => item.attributes.key === "headerScripts",
    )?.attributes.value || ""
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <script
          id="headerScripts"
          type={DEFAULT_HEADERSCRIPTS}
          dangerouslySetInnerHTML={{
            __html: DEFAULT_HEADERSCRIPTS,
          }}
        ></script>
      </head>
      <body className={`${inter.variable} ${open_sans.variable} bg-white`}>
        <NextIntlClientProvider messages={messages}>
          <Header locale={locale} />
          {/* <FloatingButton /> */}
          <ScrollToTop />
          <Providers>{children}</Providers>
          <Footer dict={messages} lang={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
