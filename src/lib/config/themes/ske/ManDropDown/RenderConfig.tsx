"use client"
import CloseOutlined from "@ant-design/icons/lib/icons/CloseOutlined"
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined"
import { ComponentConfig } from "@measured/puck"
import { useState } from "react"
import { twMerge } from "tailwind-merge"
import { CommonStylesProps } from "../../../lib/commonCSSProps"
import { generateResponsiveCSS } from "../../../lib/helper"

export interface DropDownProps extends CommonStylesProps {
  items: {
    title: string
    description: string
  }[]
}

export const RenderConfig: ComponentConfig<DropDownProps> = {
  render: ({ items, className, styles, responsiveType }) => {
    const [activeIndex, setActiveIndex] = useState(0)

    const toggleAccordion = (index: any) => {
      setActiveIndex(activeIndex === index ? null : index)
    }

    const id = `dropdown-${Math.random().toString(36).substr(2, 9)}`

    const mergedStyles = {
      mobile: { ...styles?.mobile },
      tablet: { ...styles?.tablet },
      desktop: { ...styles?.desktop },
    }

    const responsiveCSS = generateResponsiveCSS(id, mergedStyles || {}, responsiveType)

    return (
      <>
        {responsiveCSS}
        <div className={`${id} ${twMerge(className)}`}>
          {items.map((item, index) => (
            <div key={index}>
              <span className={`w-full text-left ${activeIndex === index}`} onClick={() => toggleAccordion(index)}>
                <div className="flex justify-between lg:items-center gap-3 px-3 pt-6 pb-2 sm:pb-3">
                  <span className="font-bold text-black sm:text-lg text-base leading-6">{item.title}</span>
                  <span className=" text-[#439CDD]">
                    {activeIndex === index ? <CloseOutlined /> : <PlusOutlined />}
                  </span>
                </div>
              </span>
              <div
                className={`transition-[max-height] duration-300 ease-in-out overflow-hidden border-b border-[#E6E6EA] ${
                  activeIndex === index ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <p className="font-normal sm:text-sm sm:px-3 px-3 leading-[1.313rem] lg:leading-6 text-[13px] pb-6 text-black">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </>
    )
  },
}
