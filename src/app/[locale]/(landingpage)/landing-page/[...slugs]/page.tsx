import { last } from "lodash"
import { Metadata } from "next"
import PageRender from "../../../../../components/page-render"
import getPage from "../../../../../lib/config/lib/getPage"
import { generateMetaLP } from "../../../../../lib/generateMeta"
import { getDictionary } from "../../../dictionaries"

const fetchPageData = async (slugs: string[], lang?: string) => {
  const pageData = await getPage(last(slugs) ?? "", lang)
  return pageData
}

const Page = async (props: { params: Promise<{ slugs: string[]; lang: string }> }) => {
  const params = await props.params
  const dict = await getDictionary(params.lang)
  const pageData = await fetchPageData(params.slugs, params.lang)

  return <PageRender pageData={pageData} hasBreadcrumb={true} dict={dict} />
}

export default Page

export async function generateMetadata(context: { params: Promise<{ slugs?: string[] }> }): Promise<Metadata> {
  const resolvedParams = await context.params
  const { slugs = [] } = resolvedParams

  try {
    const pageData = await fetchPageData(slugs)
    const metaData = pageData[0].attributes

    return generateMetaLP({ data: metaData })
  } catch (error) {}

  return generateMetaLP({ data: null })
}
