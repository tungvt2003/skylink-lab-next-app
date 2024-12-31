"use client"

import { useEffect, useState } from "react"
import { APPCONFIG } from "../configs"
import { PageData } from "../lib/config/types"
import { getFooter } from "../lib/navigation-services"
import PageRender from "./page-render"

const Footer = ({ dict, lang }: { dict: any; lang: string }) => {
  const [footerData, setFooterData] = useState<PageData[]>()
  const [loading, setLoading] = useState(true)
  const fetchFooterData = async () => {
    try {
      setLoading(true)

      // @ts-ignore
      const response = await getFooter(APPCONFIG.FOOTER_PAGE_ID[lang], lang)

      setFooterData(response)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching footer data:", error)
    }
  }

  useEffect(() => {
    fetchFooterData()
  }, [lang])

  const pageData = [footerData]

  if (loading || !footerData) return null

  // @ts-ignore
  return <PageRender pageData={pageData} />
}

export default Footer
