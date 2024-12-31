import { last } from "lodash"
import { Metadata } from "next"
import PageRender from "../../../../../../components/page-render"
import { generateMetaLP } from "../../../../../../lib/generateMeta"
import getPost, { getPostMetadata } from "../../../../../../lib/get-post"
import { getDictionary } from "../../../../dictionaries"

const fetchPostData = async (slugs: string[]) => {
  const postData = await getPost(last(slugs) ?? "")
  return postData
}

const Page = async (props: { params: Promise<{ slugs: string[]; lang: string }> }) => {
  const params = await props.params
  const postData = await fetchPostData(params.slugs)
  const dict = await getDictionary(params.lang)
  const BASE_URL = process.env.BASE_URL

  return <PageRender pageData={postData} hasBreadcrumb={true} dict={dict} base_url={BASE_URL} />
}

export default Page

export async function generateMetadata(context: { params: Promise<{ slugs?: string[] }> }): Promise<Metadata> {
  const resolvedParams = await context.params
  const { slugs = [] } = resolvedParams

  try {
    const pageData = await getPostMetadata(last(slugs) ?? "")
    const metaData = pageData[0].attributes

    return generateMetaLP({ data: metaData })
  } catch (error) {}

  return generateMetaLP({ data: null })
}
