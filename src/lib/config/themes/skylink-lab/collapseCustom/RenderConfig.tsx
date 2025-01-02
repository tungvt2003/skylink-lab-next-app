"use client"

import { ComponentConfig } from "@measured/puck"
import { Collapse } from "antd"
import AOS from "aos"
import "aos/dist/aos.css"
import { twMerge } from "tailwind-merge"
import { CommonStylesProps } from "../../../lib/commonCSSProps"
import { generateResponsiveCSS } from "../../../lib/helper"

export interface CollapseProp extends CommonStylesProps {
  collapseData?: { question?: string; answer?: string }[]
}

export const RenderConfig: ComponentConfig<CollapseProp> = {
  render: ({ className, styles, responsiveType, collapseData }) => {
    const id = `button-${Math.random().toString(36).substr(2, 9)}`
    const responsiveCSS = generateResponsiveCSS(id, styles || {}, responsiveType)

    if (typeof window !== "undefined") {
      AOS.init()
    }

    return (
      <>
        {responsiveCSS}
        <div
          className={`relative ${id} ${twMerge(className)} flex justify-center items-center w-full`}
          data-aos="fade-up"
        >
          <Collapse accordion ghost className="w-full text-left" expandIconPosition={"end"}>
            {collapseData?.map((item, index) => (
              <Collapse.Panel
                header={
                  <p className="text-[#212121] font-semibold leading-[31.2px] text-2xl hover:text-[#b33cda] duration-300 transition-all py-6 border-b border-gray-300">
                    {item?.question}
                  </p>
                }
                key={index}
              >
                <p className="text-[#616161] text-lg leading-[32.4px] font-medium">{item?.answer}</p>
              </Collapse.Panel>
            ))}
          </Collapse>
        </div>
      </>
    )
  },
}
