"use client"

import { Render } from "@measured/puck"
import { useEffect, useState } from "react"
import NotFound from "../app/[locale]/not-found"
import { newRenderConfig } from "../lib/config/uiBuilderConfig"

interface PageData {
  id: number
  attributes: {
    slug: string
    id: string
    content: string
    blockContent: any
    name: string
    categories?: {
      data?: Array<{
        attributes?: {
          name?: string
          slug?: string
        }
      }>
    }
    createdAt?: string
    updatedAt?: string
    publishedAt?: string
    locale?: string
    image?: {
      data?: {
        attributes?: {
          url?: string
        }
      }
    }
  }
}

const NormalContent = ({ content }: { content?: string }) => {
  if (!content) return null
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}

interface PageRenderProps {
  pageData?: PageData[]
  hasBreadcrumb?: boolean
  isTemplate?: boolean
  dict?: any
  base_url?: string
}

const PageRender = ({ pageData, hasBreadcrumb, isTemplate, dict, base_url }: PageRenderProps) => {
  const [parsedData, setParsedData] = useState<any>(null)
  const [uiBuilder, setUiBuilder] = useState<any>(null)
  if (!pageData || pageData.length === 0) return <NotFound dict={dict} />
  useEffect(() => {
    if (!pageData || pageData.length === 0) return
    const content = isTemplate
      ? pageData[0]?.attributes?.content ?? "{}"
      : pageData[0]?.attributes?.blockContent?.data?.attributes?.content ?? "{}"
    setParsedData(JSON.parse(content))
  }, [pageData, isTemplate])

  if (!parsedData) return null

  return parsedData ? <Render config={newRenderConfig} data={parsedData} /> : <NotFound dict={dict} />
}

export default PageRender
