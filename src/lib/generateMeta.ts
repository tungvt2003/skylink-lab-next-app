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

export interface Image {
  data: {
    attributes: {
      url?: string | undefined
    }
  }
}
export interface ResponseMetaData {
  SEO?: MetaTags
  image?: Image
}

export const generateMeta = async (args: {
  data?: (ResponseMetaData & Record<string, unknown>) | null | undefined
  locale?: string
}): Promise<Metadata> => {
  const { data, locale } = args || {}
  const title = data?.SEO?.metaTitle || data?.name
  const settingsData = await getSettings()
  // const DEFAULT_TITLE =
  //   settingsData?.find((item: { attributes: { key: string; value: string } }) => item.attributes.key === "websiteName")
  //     ?.attributes.value || "SKYLINK LAB"

  // const DEFAULT_DESCRIPTION =
  //   settingsData?.find(
  //     (item: { attributes: { key: string; value: string } }) => item.attributes.key === "websiteDescription",
  //   )?.attributes.value || "SKYLINK LAB"

  // return {
  //   title: `${title ? `${title} | ` : ""}${"SKYLINK LAB"}`,
  //   description: data?.SEO?.metaDescription || "Skylink Labs - Trí Tuệ Nhân Tạo, Tinh Chỉnh Từng Chi Tiết",
  //   keywords: data?.SEO?.keywords ? data?.SEO?.keywords : "",
  //   robots: data?.SEO?.metaRobots || "index, follow",
  //   openGraph: {
  //     title: data?.SEO?.metaTitle || "SkyLink Lab",
  //     description: data?.SEO?.metaDescription || "Skylink Labs - Trí Tuệ Nhân Tạo, Tinh Chỉnh Từng Chi Tiết",
  //     type: "website",
  //     url: `${configs.API_URL}${data?.SEO?.canonicalURL || ""}`,
  //     // images: `${configs.API_URL}${data?.SEO?.metaImage?.daloata?.attributes.url}` || "",
  //     images: "https://api-cms-skylink.dansolutions.vn/uploads/logo_labs_e354377849.png",
  //   },
  //   alternates: {
  //     canonical: data?.SEO?.canonicalURL || "",
  //   },
  // }

  return {
    title: `${title ? `${title} | ` : ""}${"SKYLINK LABS"}`,
    description: data?.SEO?.metaDescription || "Skylink Labs - Precision Through AI",
    keywords: data?.SEO?.keywords ? data?.SEO?.keywords : "",
    robots: data?.SEO?.metaRobots || "index, follow",
    openGraph: {
      title: data?.SEO?.metaTitle || "SkyLink Labs",
      description: data?.SEO?.metaDescription || "Skylink Labs - Precision Through AI",
      type: "website",
      url: `${configs.BASE_URL}${data?.SEO?.canonicalURL || ""}`,
      images: [
        {
          url:
            `${configs.API_URL}${data?.image?.data?.attributes?.url}` ||
            "https://api-cms-skylink.dansolutions.vn/uploads/Logo_Skylink_Labs_40c55131af.png",
          width: 1200,
          height: 630,
          type: "image/png",
          alt: "Skylink Labs",
        },
      ],
      siteName: "Skylink Labs",
      locale: locale == "/vi" ? "vi_VN" : "en_US",
    },
    alternates: {
      canonical: data?.SEO?.canonicalURL || "",
    },
  }
}
