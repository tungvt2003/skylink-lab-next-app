"use client"

import { ComponentConfig } from "@measured/puck"
import { twMerge } from "tailwind-merge"
import { CommonStylesProps } from "../../../lib/commonCSSProps"
import { generateResponsiveCSS } from "../../../lib/helper"
import useIsMobile from "../../../lib/use-is-mobile"

export interface ItemKeyAIProps extends CommonStylesProps {
  items: { title: string; position: "left" | "right" }[]
}

export const RenderConfig: ComponentConfig<ItemKeyAIProps> = {
  render: ({ items, className, styles, responsiveType }: ItemKeyAIProps) => {
    const id = `item-key-ai-${Math.random().toString(36).substr(2, 9)}`

    const mergedStyles = {
      mobile: { ...styles?.mobile },
      tablet: { ...styles?.tablet },
      desktop: { ...styles?.desktop },
    }
    const isMobile = useIsMobile()
    const responsiveCSS = generateResponsiveCSS(id, mergedStyles || {}, responsiveType)

    return (
      <div className="w-full sm:w-[30%] h-full flex flex-col justify-center items-center gap-5 sm:gap-20 p-2.5">
        {items.map(item => (
          <>
            {responsiveCSS}
            <div
              className={`${id} ${twMerge(className)} border w-fit border-[#E5E5E6] flex ${
                isMobile ? "" : item.position === "left" ? "self-start" : "self-end"
              } hover:text-white hover:border-[#CD41FA] hover:bg-hover-gradient z-10 transition-colors duration-300 ease-in-out`}
            >
              <div>{item.title}</div>
            </div>
          </>
        ))}
      </div>
    )
  },
}
