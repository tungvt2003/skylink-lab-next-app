import "@/styles/globals.css"
import type { Metadata } from "next"
import Head from "next/head"
import Providers from "../../../../components/progress-bar/progress-bar"
import { inter, open_sans } from "../../../../lib/get-font"

export const metadata: Metadata = {
  title: "Thank you",
  description: "Thank you",
}

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function RootLayout({ children, params }: Props) {
  const resolvedParams = await params
  const { locale } = resolvedParams

  return (
    <html lang={locale}>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <body className={`${inter.variable} ${open_sans.variable} bg-white`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
