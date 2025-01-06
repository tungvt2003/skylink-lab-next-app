import { last } from "lodash"
import { Metadata } from "next"
import PageRender from "../../../../components/page-render"
import getPage from "../../../../lib/config/lib/getPage"
import { generateMeta } from "../../../../lib/generateMeta"
import { getDictionary } from "../../dictionaries"

const fetchPageData = async (slugs: string[], lang?: string) => {
  const pageData = await getPage(last(slugs) ?? "", lang)
  return pageData
}

const Page = async (props: { params: Promise<{ slugs: string[]; locale: string }> }) => {
  const params = await props.params
  const dict = await getDictionary(params.locale)
  const pageData = await fetchPageData(params.slugs, params.locale)

  return <PageRender pageData={pageData} hasBreadcrumb={true} dict={dict} />
}

export default Page

export async function generateMetadata(context: {
  params: Promise<{ slugs?: string[]; locale: string }>
}): Promise<Metadata> {
  const resolvedParams = await context.params
  const { slugs = [], locale } = resolvedParams

  try {
    const pageData = await fetchPageData(slugs, locale)
    const metaData = pageData[0].attributes

    return generateMeta({ data: metaData, locale })
  } catch (error) {}

  return generateMeta({ data: null })
}
