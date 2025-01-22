import { JobDetailData, Meta } from "./config/types"
import httpClient from "./http-client"

const getJobDetail = async (id: string) => {
  const response = await httpClient.get<{ data: any }>(`job-details/${Number(id)}?populate=*&publicationState=preview`)
  return response.data
}

export const getJobDetailBySlug = async (slug: string) => {
  const response = await httpClient.get<{ data: JobDetailData[] }>(
    `job-details?populate=*&publicationState=preview&filters[Slug][$eq]=${slug}`,
  )
  return response.data
}

export const getAllJobDetails = async () => {
  const response = await httpClient.get<{ data: any }>("job-details?populate=*&publicationState=preview")
  return response.data
}

export const findJobDetail = async (query: string, page?: number, pageSize?: number) => {
  if (!page) {
    page = 1
  }
  if (!pageSize) {
    pageSize = 5
  }
  const response = await httpClient.get<{
    meta: Meta
    data: JobDetailData[]
  }>(`job-details?filters[JobTitle][$contains]=${query}&pagination[page]=${page}&pagination[pageSize]=${pageSize}`)
  return response
}

export default getJobDetail
