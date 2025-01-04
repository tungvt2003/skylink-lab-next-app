"use client"

import { ComponentConfig } from "@measured/puck"
import { twMerge } from "tailwind-merge"
import { CommonStylesProps } from "../../../lib/commonCSSProps"
import { generateResponsiveCSS } from "../../../lib/helper"

export interface ContentCardProps extends CommonStylesProps {
  title: string
  items: { content: string }[]
  isListItem: boolean
}

export const RenderConfig: ComponentConfig<ContentCardProps> = {
  // TODO: missing responsive CSS

  render: ({ title, items, className, styles, responsiveType, isListItem }) => {
    const id = `content-card-${Math.random().toString(36).substr(2, 9)}`
    // Merge default styles with user-defined styles
    const mergedStyles = {
      mobile: { ...styles?.mobile },
      tablet: { ...styles?.tablet },
      desktop: { ...styles?.desktop },
    }
    const responsiveCSS = generateResponsiveCSS(id, mergedStyles || {}, responsiveType)
    return (
      <>
        {responsiveCSS}
        <div
          id={id}
          className={`${id} ${twMerge(
            className,
          )} group border border-[#E5E5E6] hover:border-[#FFFFFF00] hover:bg-labs-secondary transition-colors duration-500 ease-in-out`}
        >
          <h3 className="text-[22px] leading-[26.4px] sm:text-[32px] sm:leading-[38.4px] font-bold text-[#212121] mb-3 group-hover:text-white">
            {title}
          </h3>
          <div className="text-[14px] leading-[25.2px] sm:text-base sm:leading-[28.8px] text-[#616161] group-hover:text-white">
            {items?.map((descItem, descIndex) => (
              <ul className={`${isListItem ? "list-disc pl-[40px]" : ""} my-[14px] sm:my-4`} key={descIndex}>
                <li>
                  <span className="font-medium" dangerouslySetInnerHTML={{ __html: descItem.content || "" }} />
                </li>
              </ul>
            ))}
          </div>
        </div>
      </>
    )
  },
}
