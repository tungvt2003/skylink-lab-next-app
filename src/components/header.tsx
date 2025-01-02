"use client"

import { MenuItem } from "@/components/create-menu-structure"
import "@/styles/globals.css"
import { useEffect, useState } from "react"
import { APPCONFIG } from "../configs"
import { PageData } from "../lib/config/types"
import { getHeader } from "../lib/navigation-services"
import PageRender from "./page-render"

interface Menu {
  attributes: {
    items: MenuItem[]
  }
}

type HeaderProps = {
  locale: string
}

const Header: React.FC<HeaderProps> = ({ locale }) => {
  const [headerData, setHeaderData] = useState<PageData[]>()
  const [loading, setLoading] = useState(true)

  const fetchHeaderData = async () => {
    try {
      setLoading(true)

      // @ts-ignore
      const response = await getHeader(APPCONFIG.HEADER_PAGE_ID[locale], locale)
      setHeaderData(response)

      setLoading(false)
    } catch (error) {
      console.error("Error fetching header data:", error)
    }
  }

  useEffect(() => {
    fetchHeaderData()
  }, [locale])

  const pageData = [headerData]

  if (loading || !headerData) return null

  // @ts-ignore
  return <PageRender pageData={pageData} />
}

export default Header
