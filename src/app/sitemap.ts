import { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const BASE_URL = process.env.BASE_URL

  // const posts = (await getAllPost()) || { data: [] }
  const posts = { data: [] }
  const pages = { data: [] }

  // @ts-ignore
  const pagesSitemap: MetadataRoute.Sitemap[] =
    pages?.data
      ?.filter((page: any) => page.attributes.slug !== "trang-chu")
      .map((page: { attributes: any }) => {
        const content = page.attributes?.blockContent?.data?.attributes?.content
          ? JSON.parse(page.attributes.blockContent.data.attributes.content)
          : { root: { props: { breadcrumb: null } } }
        let breadcrumb = content.root.props.breadcrumb

        if (breadcrumb) {
          const path = breadcrumb.map((item: { link: string }) => item.link).join("")

          breadcrumb = path
        } else {
          breadcrumb = `/${page.attributes.slug}`
        }

        return {
          url: `${BASE_URL}${breadcrumb}`,
          lastModified: `${page.attributes.updatedAt}`,
          alternates: {
            languages: {
              vi: `${BASE_URL}${breadcrumb}`,
              en: `${BASE_URL}/en${breadcrumb}`,
            },
          },
          priority: 0.5,
        }
      }) ?? []

  // @ts-ignore
  const postSitemap: MetadataRoute.Sitemap[] =
    posts?.data?.map((page: { attributes: any }) => {
      return {
        url: `${BASE_URL}/bai-viet/${page.attributes.slug}`,
        lastModified: `${page.attributes.updatedAt}`,
        alternates: {
          languages: {
            vi: `${BASE_URL}/bai-viet/${page.attributes.slug}`,
            en: `${BASE_URL}/en/bai-viet/${page.attributes.slug}`,
          },
        },
        priority: 0.5,
      }
    }) ?? []

  const allSiteMap: MetadataRoute.Sitemap[] = [...pagesSitemap, ...postSitemap]

  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      priority: 0.8,
      alternates: {
        languages: {
          vi: `${BASE_URL}/`,
          en: `${BASE_URL}/en`,
        },
      },
    },
    {
      url: `${BASE_URL}/lien-he`,
      lastModified: new Date(),
      alternates: {
        languages: {
          vi: `${BASE_URL}/lien-he`,
          en: `${BASE_URL}/en/lien-he`,
        },
      },
      priority: 0.5,
    },
    //@ts-ignore
    ...allSiteMap,
  ]
}
