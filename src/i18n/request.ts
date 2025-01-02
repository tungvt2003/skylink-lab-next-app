import { getRequestConfig } from "next-intl/server"
import { routing } from "./routing"

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale
  }

  // Sử dụng API dictionaries thay vì import file JSON
  const fetchDictionary = dictionaries[locale]
  if (!fetchDictionary) {
    throw new Error(`No dictionary found for locale: ${locale}`)
  }

  const messages = await fetchDictionary()

  return {
    locale,
    messages,
  }
})

const dictionaries: Record<string, () => Promise<any>> = {
  en: () =>
    fetch(`${process.env.BASE_URL || ""}/api/dictionaries`, {
      method: "POST",
      body: JSON.stringify({ locale: "en" }),
    }).then(res => res.json()),
  vi: () =>
    fetch(`${process.env.BASE_URL || ""}/api/dictionaries`, {
      method: "POST",
      body: JSON.stringify({ locale: "vi" }),
    }).then(res => res.json()),
}
