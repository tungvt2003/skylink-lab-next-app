"use client"

import { Render } from "@measured/puck"
import { useEffect, useState } from "react"
import NotFound from "../app/[locale]/not-found"
import { tryParse } from "../lib/config/lib/helper"
import { newRenderConfig } from "../lib/config/uiBuilderConfig"
import BreadCrumb from "./breadcrumb"
import { Spinner } from "./ui/loading"

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
  const [loading, setLoading] = useState(true)
  const [uiBuilderData, setUiBuilderData] = useState<any>(null)
  const [breadcrumbData, setBreadcrumbData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      if (pageData) {
        setLoading(true)
        let parsedData = null
        if (isTemplate) {
          parsedData = tryParse(pageData?.[0]?.attributes?.content ?? "")
        } else {
          parsedData = tryParse(pageData?.[0]?.attributes?.blockContent?.data?.attributes?.content ?? "")
        }

        if (parsedData) {
          setUiBuilderData(parsedData)
        }

        if (hasBreadcrumb) {
          const getBreadCrumbs = parsedData && parsedData?.root.props.breadcrumb

          setBreadcrumbData(getBreadCrumbs)
        }

        setLoading(false)
      }
    }

    fetchData()
  }, [pageData])

  if (loading) return <Spinner />

  const checkContent = () => {
    {
      if (uiBuilderData) {
        return <Render config={newRenderConfig} data={uiBuilderData} />
      } else {
        return <NotFound dict={dict} />
      }
    }
  }
  return (
    <>
      {breadcrumbData && <BreadCrumb items={breadcrumbData} />}
      {checkContent()}
    </>
  )
}

export default PageRender
