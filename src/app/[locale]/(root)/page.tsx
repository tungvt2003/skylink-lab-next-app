import { last } from "lodash"
import { Metadata } from "next"
import PageRender from "../../../components/page-render"
import { APPCONFIG } from "../../../configs"
import getPage from "../../../lib/config/lib/getPage"
import { generateMeta } from "../../../lib/generateMeta"

const fetchPageData = async (slugs: string[], locale: string) => {
  const defaultSlug = APPCONFIG.DEFAULT_SLUG[locale as "vi" | "en"]
  const pageData = await getPage(last(slugs) ?? defaultSlug, locale)
  return pageData
}

export const revalidate = 60

const Page = async (props: { params: Promise<{ slugs: string[]; locale: string }> }) => {
  const params = await props.params
  const pageData = await fetchPageData(params.slugs, params.locale)

  return <PageRender pageData={pageData} />
}

export default Page

export async function generateMetadata(context: {
  params: Promise<{ slugs?: string[]; locale: string }>
}): Promise<Metadata> {
  try {
    const resolvedParams = await context.params
    const pageData = await fetchPageData(resolvedParams.slugs ?? [], resolvedParams.locale)

    const metaData = pageData[0].attributes
    return generateMeta({ data: metaData })
  } catch (error) {}

  return generateMeta({ data: null })
}
