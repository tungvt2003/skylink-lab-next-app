"use client"
import { ComponentConfig, Data, DefaultComponentProps, Render } from "@measured/puck"
import { useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"
import { useUiBuilder } from "../../../external-components"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { CommonStylesProps } from "../../lib/commonCSSProps"

import { Spinner } from "../../../../components/ui/loading"
import { generateResponsiveCSS } from "../../lib/helper"
import { newRenderConfig } from "../../uiBuilderConfig"

export interface TabsProps extends CommonStylesProps {
  tabs: { label: string; idTemplate?: string }[]
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
    const [data, setData] = useState<Record<string, unknown>>({})
    const { fetchBlockContent } = useUiBuilder()

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
                setSelectedTab(selectedTabData.idTemplate)
              } else {
                setSelectedTab("")
              }
            }}
            className={`${id} ${twMerge(className)} flex flex-col gap-16 w-full`}
          >
            <TabsList
              className={`px-4 lg:mx-0 gap-8 lg:gap-7 border-b py-0 sm:border-none rounded-none bg-transparent !flex overflow-x-scroll lg:overflow-x-visible justify-start lg:justify-center ${twMerge(
                "!text-lg !font-semibold",
              )}`}
              style={{ scrollbarWidth: "none" }}
            >
              {tabs.map(tab => (
                <TabsTrigger
                  key={tab.label}
                  value={tab.label}
                  className="rounded-none shadow-none px-0 py-3.5 lg:py-4 lg:px-[0.625rem] gap-[0.625rem]  text-[0.813rem] leading-[1.313rem] lg:text-lg font-semibold lg:leading-6 duration-100 hover:text-green hover:border-green hover:border-b-2 data-[state=active]:text-green data-[state=active]:border-green data-[state=active]:border-b-2 data-[state=active]:shadow-none"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabs.map(tab => (
              <TabsContent key={tab.label} value={tab.label}>
                {data[tab.idTemplate || ""] ? (
                  <Render
                    config={newRenderConfig}
                    data={data[tab.idTemplate || ""] as Partial<Data<DefaultComponentProps, any> | Data>}
                  />
                ) : (
                  <>
                    <Spinner />
                  </>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </>
    )
  },
}
