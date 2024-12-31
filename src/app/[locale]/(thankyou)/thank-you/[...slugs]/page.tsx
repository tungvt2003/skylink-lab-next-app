import { last } from "lodash"
import { Metadata } from "next"
import PageRender from "../../../../../components/page-render"
import getPage from "../../../../../lib/config/lib/getPage"
import { generateMeta } from "../../../../../lib/generateMeta"

const fetchPageData = async (slugs: string[]) => {
  const pageData = await getPage(last(slugs) ?? "")
  return pageData
}

const Page = async (props: { params: Promise<{ slugs: string[] }> }) => {
  const params = await props.params

  const pageData = await fetchPageData(params.slugs)

  return <PageRender pageData={pageData} hasBreadcrumb={true} />
}

export default Page

export async function generateMetadata(context: { params: Promise<{ slugs?: string[] }> }): Promise<Metadata> {
  const resolvedParams = await context.params
  const { slugs = [] } = resolvedParams

  try {
    const pageData = await fetchPageData(slugs)
    const metaData = pageData[0].attributes

    return generateMeta({ data: metaData })
  } catch (error) {}

  return generateMeta({ data: null })
}
