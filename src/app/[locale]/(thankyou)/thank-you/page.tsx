import { last } from "lodash"
import { Metadata } from "next"
import PageRender from "../../../../components/page-render"
import { APPCONFIG } from "../../../../configs"
import getPage from "../../../../lib/config/lib/getPage"
import { generateMeta } from "../../../../lib/generateMeta"
import { getDictionary } from "../../../[locale]/dictionaries"

const fetchPageData = async (slugs: string[]) => {
  const lang = "vi"
  const defaultSlug = APPCONFIG.DEFAULT_SLUG_THANK_YOU[lang as "vi" | "en"]

  const pageData = await getPage(last(slugs) ?? defaultSlug, lang)
  return pageData
}

const Page = async (props: { params: Promise<{ slugs: string[]; lang: string }> }) => {
  const params = await props.params
  const lang = params.lang
  const pageData = await fetchPageData(params.slugs)
  const dict = await getDictionary(params.lang)

  return <PageRender pageData={pageData} />
}

export default Page

export async function generateMetadata(context: { params: Promise<{ slugs?: string[] }> }): Promise<Metadata> {
  try {
    const pageData = await fetchPageData(["ske-landingpage"])

    const metaData = pageData[0].attributes

    return generateMeta({ data: metaData })
  } catch (error) {}

  return generateMeta({ data: null })
}
