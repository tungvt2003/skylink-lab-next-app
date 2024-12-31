import type { Metadata } from "next"
import { configs } from "./external-components"
import { getSettings } from "./navigation-services"

export interface MetaTags {
  id?: string
  metaTitle?: string
  metaDescription?: string
  keywords?: string
  metaRobots?: string
  metaViewport?: string
  canonicalURL?: string
  metaImage?: {
    data: {
      attributes: {
        url?: string | undefined
      }
    }
  }
}

export interface ResponseMetaData {
  SEO?: MetaTags
}

export const generateMeta = async (args: {
  data?: (ResponseMetaData & Record<string, unknown>) | null | undefined
}): Promise<Metadata> => {
  const { data } = args || {}

  const title = data?.SEO?.metaTitle || data?.name
  const settingsData = await getSettings()

  const DEFAULT_TITLE =
    settingsData?.find((item: { attributes: { key: string; value: string } }) => item.attributes.key === "websiteName")
      ?.attributes.value || "Skyline School"

  const DEFAULT_DESCRIPTION =
    settingsData?.find(
      (item: { attributes: { key: string; value: string } }) => item.attributes.key === "websiteDescription",
    )?.attributes.value || "Hệ thống trường Sky-line School"

  return {
    title: `${title ? `${title} | ` : ""}${DEFAULT_TITLE}`,
    description: data?.SEO?.metaDescription || DEFAULT_DESCRIPTION,
    keywords: data?.SEO?.keywords ? data?.SEO?.keywords : "",
    robots: data?.SEO?.metaRobots || "index, follow",
    openGraph: {
      title: data?.SEO?.metaTitle || "Sky-line School",
      description: data?.SEO?.metaDescription || DEFAULT_DESCRIPTION,
      type: "website",
      url: `${configs.API_URL}${data?.SEO?.canonicalURL || ""}`,
      images: `${configs.API_URL}${data?.SEO?.metaImage?.data?.attributes.url}` || "",
    },
    alternates: {
      canonical: data?.SEO?.canonicalURL || "",
    },
  }
}

export const generateMetaLP = async (args: {
  data?: (ResponseMetaData & Record<string, unknown>) | null | undefined
}): Promise<Metadata> => {
  const { data } = args || {}

  const title = data?.SEO?.metaTitle || data?.name
  const settingsData = await getSettings()

  const DEFAULT_TITLE =
    settingsData?.find(
      (item: { attributes: { key: string; value: string } }) => item.attributes.key === "websiteNameLP",
    )?.attributes.value || "Skyline School"

  const DEFAULT_DESCRIPTION =
    settingsData?.find(
      (item: { attributes: { key: string; value: string } }) => item.attributes.key === "websiteDescriptionLP",
    )?.attributes.value || "Hệ thống trường Sky-line School"

  return {
    title: `${title ? `${title} | ` : ""}${DEFAULT_TITLE}`,
    description: data?.SEO?.metaDescription || DEFAULT_DESCRIPTION,
    keywords: data?.SEO?.keywords ? data?.SEO?.keywords : "",
    robots: data?.SEO?.metaRobots || "index, follow",
    openGraph: {
      title: data?.SEO?.metaTitle || "Sky-line School",
      description: data?.SEO?.metaDescription || DEFAULT_DESCRIPTION,
      type: "website",
      url: `${configs.API_URL}${data?.SEO?.canonicalURL || ""}`,
      images: `${configs.API_URL}${data?.SEO?.metaImage?.data?.attributes.url}` || "",
    },
    alternates: {
      canonical: data?.SEO?.canonicalURL || "",
    },
  }
}
