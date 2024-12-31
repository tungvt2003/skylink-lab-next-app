import { PostMetaData } from "./config/types"
import httpClient from "./http-client"

const getPost = async (slug: string) => {
  const response = await httpClient.get<{ data: any }>(
    `posts?populate=*&publicationState=preview&filters[slug][$eq]=${slug}`,
  )
  return response.data
}

export const getPostMetadata = async (slug: string) => {
  const response = await httpClient.get<{ data: PostMetaData }>(
    `posts?&populate[SEO][populate]=*&publicationState=preview&filters[slug][$eq]=${slug}`,
  )

  return response.data
}

export default getPost
