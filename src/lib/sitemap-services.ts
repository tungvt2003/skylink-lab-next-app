import httpClient from "@/lib/http-client"

export const getAllPost = async () => {
  const response = await httpClient.get<{ data: any }>("posts", { pagination: { pageSize: 100 } })
  return response
}

export const getAllPages = async () => {
  const response = await httpClient.get<{ data: any }>(`pages`, { populate: "*", pagination: { pageSize: 100 } })
  return response
}
