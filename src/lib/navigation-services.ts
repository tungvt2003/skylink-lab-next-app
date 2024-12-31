import httpClient from "@/lib/http-client"

export const getMainMenu = async (id: number, lang?: string) => {
  const response = await httpClient.get<{ data: any }>(`menu-preferences/${id}?locale=${lang}`)
  return response.data
}

export const getFooterMenu = async (id: number) => {
  const response = await httpClient.get<{ data: any }>(`menu-preferences/${id}`)
  return response.data
}

export const getFooter = async (id: number, lang?: string) => {
  const response = await httpClient.get<{ data: any }>(`pages/${id}?populate=*&locale=${lang}`)

  if (response.data?.attributes?.publishedAt) {
    return response.data
  }

  return null
}

export const getSearchPost = async (name: string) => {
  const response = await httpClient.get<{ data: any }>(
    `posts?populate=*&filters[name][$containsi]=${name}&filters[name][$containsi]=${name.toUpperCase()}`,
  )
  return response.data
}

export const getSettings = async () => {
  const response = await httpClient.get<{ data: any }>(`settings?populate=*&sort=id:DESC`)
  return response.data
}

export const getPages = async () => {
  const response = await httpClient.get<{ data: any }>(`pages?populate=*&sort=id:DESC`)
  return response.data
}

export const getPostByCategories = async (slug?: string) => {
  const response = await httpClient.get<{ data: any }>(
    `posts?populate=*&sort=createdAt:desc&filters[categories][slug][$eq]=${slug}`,
  )
  return response.data
}
