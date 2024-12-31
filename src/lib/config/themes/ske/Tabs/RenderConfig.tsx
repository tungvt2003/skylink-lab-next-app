"use client"
import { ComponentConfig, Data, DefaultComponentProps, Render } from "@measured/puck"
import { useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"
import { Spinner } from "../../../../../components/ui/loading"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../../components/ui/tabs"
import { cn, configs, DefaultImage, useUiBuilder } from "../../../../external-components"
import { CommonStylesProps } from "../../../lib/commonCSSProps"
import { generateResponsiveCSS } from "../../../lib/helper"
import { newRenderConfig } from "../../../uiBuilderConfig"

export interface TabsProps extends CommonStylesProps {
  tabs: { label: string; idTemplate?: string; image?: string; imageActive?: string }[]
}
const defaultTextStyles = {}

export const RenderConfig: ComponentConfig<TabsProps> = {
  render: ({ tabs, className, styles, responsiveType }) => {
    const id = `tabs-${Math.random().toString(36).substr(2, 9)}`

    const mergedStyles = {
      mobile: { ...defaultTextStyles, ...styles?.mobile },
      tablet: { ...defaultTextStyles, ...styles?.tablet },
      desktop: { ...defaultTextStyles, ...styles?.desktop },
    }

    // Generate responsive CSS
    const responsiveCSS = generateResponsiveCSS(id, mergedStyles || {}, responsiveType)

    const [selectedTab, setSelectedTab] = useState(tabs[0]?.idTemplate)
    const [loading, setLoading] = useState(false)
    const [loadedTabs, setLoadedTabs] = useState<string[]>([])
    const [data, setData] = useState<Record<string, unknown>>({})
    const { fetchBlockContent } = useUiBuilder()

    const scrollToContentIfMobile = (idTemplate: string) => {
      if (window.innerWidth < 768) {
        setTimeout(() => {
          const contentElement = document.getElementById(`tab-item-scroll-${idTemplate}`)
          if (contentElement) {
            contentElement.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        }, 100)
      }
    }

    useEffect(() => {
      const fetchData = async () => {
        if (!selectedTab || data[selectedTab]) return

        try {
          const response = await fetchBlockContent(selectedTab)
          const content = response.data.attributes.content ? JSON.parse(response.data.attributes.content) : null
          setData(prevData => ({ ...prevData, [selectedTab]: content }))
        } catch (error) {
          console.error("Error fetching data:", error)
        }
      }
      fetchData()
    }, [selectedTab, data, fetchBlockContent])

    return (
      <>
        {responsiveCSS}
        <div className="flex justify-between flex-col items-center">
          <Tabs
            defaultValue={tabs[0]?.label}
            onValueChange={value => {
              const selectedTabData = tabs.find(tab => tab.label === value)

              if (selectedTabData?.idTemplate) {
                if (!loadedTabs.includes(selectedTabData.idTemplate)) {
                  setLoading(true)
                  setSelectedTab(selectedTabData.idTemplate)

                  setTimeout(() => {
                    setLoading(false)
                    setLoadedTabs(prev => [...prev, selectedTabData.idTemplate!])

                    scrollToContentIfMobile(selectedTabData.idTemplate!)
                  }, 500)
                } else {
                  setSelectedTab(selectedTabData.idTemplate)

                  scrollToContentIfMobile(selectedTabData.idTemplate!)
                }
              } else {
                setSelectedTab("")
              }
            }}
            className={`${twMerge(className)} flex flex-col sm:gap-16 w-full sm:mt-[-86px]`}
          >
            <TabsList
              className="container sm:h-full sm:flex bg-transparent sm:flex-row sm:gap-6 gap-3 sm:px-[120px] px-4 h-[400px]  grid grid-cols-2"
              style={{ scrollbarWidth: "none" }}
            >
              {tabs.map((tab: { label: string; idTemplate?: string; image?: string; imageActive?: string }, index) => (
                <TabsTrigger
                  key={tab.label}
                  value={tab.label}
                  className={cn(
                    "relative flex flex-col items-center justify-center p-6 border w-full h-full gap-3",
                    "bg-white",
                    "text-green",
                    "group overflow-hidden hover:text-white hover:border-green",
                    "data-[state=active]:bg-green data-[state=active]:text-white data-[state=active]:border-green",
                  )}
                >
                  <div
                    className=" absolute inset-0 bg-green transform scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100"
                    aria-hidden="true"
                  />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="relative flex items-center justify-center sm:w-16 sm:h-16 w-[50px] h-[50px]">
                      <img
                        src={tab.image ? `${configs.API_URL}${tab.image}` : DefaultImage}
                        alt={`Slide ${index}`}
                        className={cn(
                          "object-cover cursor-pointer transition-opacity duration-300 ease-in-out",
                          "group-hover:hidden group-active:hidden",
                          selectedTab === tab.idTemplate ? "hidden" : "block",
                        )}
                      />
                      <img
                        src={tab.imageActive ? `${configs.API_URL}${tab.imageActive}` : DefaultImage}
                        alt={`Slide ${index}`}
                        className={cn(
                          "object-cover cursor-pointer transition-opacity duration-300 ease-in-out",
                          "group-hover:block group-active:block",
                          selectedTab === tab.idTemplate ? "block" : "hidden",
                        )}
                      />
                    </div>

                    <div className="!break-words sm:text-lg sm:leading-[30px] text-base sm:mt-4 mt-3 text-center">
                      {tab.label}
                    </div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            {tabs.map(tab => (
              <TabsContent key={tab.label} value={tab.label}>
                {loading && selectedTab === tab.idTemplate && !loadedTabs.includes(tab.idTemplate!) ? (
                  <div className="flex justify-center items-center h-64">
                    <Spinner />
                  </div>
                ) : data[tab.idTemplate || ""] ? (
                  <div className="block">
                    <div id={`tab-item-scroll-${tab.idTemplate}`}>
                      <Render
                        config={newRenderConfig}
                        data={data[tab.idTemplate || ""] as Partial<Data<DefaultComponentProps, any> | Data>}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-gray-500">No content available</div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </>
    )
  },
}
