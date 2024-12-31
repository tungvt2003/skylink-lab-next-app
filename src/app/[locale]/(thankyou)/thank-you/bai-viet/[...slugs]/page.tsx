import { last } from "lodash"
import { Metadata } from "next"
import PageRender from "../../../../../../components/page-render"
import { generateMeta } from "../../../../../../lib/generateMeta"
import getPost, { getPostMetadata } from "../../../../../../lib/get-post"

const fetchPostData = async (slugs: string[]) => {
  const postData = await getPost(last(slugs) ?? "")
  return postData
}

const Page = async (props: { params: Promise<{ slugs: string[] }> }) => {
  const params = await props.params
  const postData = await fetchPostData(params.slugs)

  const BASE_URL = process.env.BASE_URL

  return <PageRender pageData={postData} hasBreadcrumb={true} base_url={BASE_URL} />
}

export default Page

export async function generateMetadata(context: { params: Promise<{ slugs?: string[] }> }): Promise<Metadata> {
  const resolvedParams = await context.params
  const { slugs = [] } = resolvedParams

  try {
    const pageData = await getPostMetadata(last(slugs) ?? "")
    const metaData = pageData[0].attributes

    return generateMeta({ data: metaData })
  } catch (error) {}

  return generateMeta({ data: null })
}
