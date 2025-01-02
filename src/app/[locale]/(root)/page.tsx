import { last } from "lodash"
import { Metadata } from "next"
import PageRender from "../../../components/page-render"
import { APPCONFIG } from "../../../configs"
import getPage from "../../../lib/config/lib/getPage"
import { generateMeta } from "../../../lib/generateMeta"

// Fetching page data
const fetchPageData = async (slugs: string[]) => {
  const lang = "vi"
  const defaultSlug = APPCONFIG.DEFAULT_SLUG[lang as "vi" | "en"]
  const pageData = await getPage(last(slugs) ?? defaultSlug, lang)
  return pageData
}

export const revalidate = 60 // 1 day

const Page = async (props: { params: Promise<{ slugs: string[] }> }) => {
  const params = await props.params
  const pageData = await fetchPageData(params.slugs)

  return <PageRender pageData={pageData} />
}

export default Page

export async function generateMetadata(context: { params: Promise<{ slugs?: string[] }> }): Promise<Metadata> {
  try {
    const resolvedParams = await context.params
    const pageData = await fetchPageData(resolvedParams.slugs ?? [])

    const metaData = pageData[0].attributes
    return generateMeta({ data: metaData })
  } catch (error) {}

  return generateMeta({ data: null })
}
