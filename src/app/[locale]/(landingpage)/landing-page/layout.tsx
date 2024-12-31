import "@/styles/globals.css"
import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { notFound } from "next/navigation"
import FloatingButtonLandingPage from "../../../../components/floating-button-landingpage"
import Footer from "../../../../components/footer"
import HeaderLandingPage from "../../../../components/header-landingpage"
import ModalPopupOffer from "../../../../components/modal-popup-offer"
import Providers from "../../../../components/progress-bar/progress-bar"
import { routing } from "../../../../i18n/routing"
import { inter, open_sans } from "../../../../lib/get-font"
import { getSettings } from "../../../../lib/navigation-services"

//export const runtime = "edge"

export const metadata: Metadata = {
  title: "Hệ thống Giáo dục Sky-Line",
  description: "Hệ thống Giáo dục Sky-Line",
}

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params

  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  const messages = await getMessages({ locale })
  const settingsData = await getSettings()
  const DEFAULT_HEADERSCRIPTS =
    settingsData?.find(
      (item: { attributes: { key: string; value: string } }) => item.attributes.key === "headerScriptsLP",
    )?.attributes.value || ""

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <script
          id="headerScriptsLP"
          type={DEFAULT_HEADERSCRIPTS}
          dangerouslySetInnerHTML={{
            __html: DEFAULT_HEADERSCRIPTS,
          }}
        ></script>
      </head>
      <body className={`${inter.variable} ${open_sans.variable} bg-white`}>
        <NextIntlClientProvider messages={messages}>
          <HeaderLandingPage locale={locale} />
          <ModalPopupOffer open={true} />
          <FloatingButtonLandingPage />
          <Providers>{children}</Providers>
          <Footer dict={messages} lang={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
