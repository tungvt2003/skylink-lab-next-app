"use client"
import { ComponentConfig } from "@measured/puck"
import { twMerge } from "tailwind-merge"
import { configs, DefaultImage } from "../../../../external-components"
import { CommonStylesProps } from "../../../lib/commonCSSProps"
import { generateResponsiveCSS } from "../../../lib/helper"

export interface ProfileCustomerCardProps extends CommonStylesProps {
  title: string
  image?: string
  position?: string
  description: string
}

const defaultProfileUserCardStylesDesktop = {
  height: "full",
  display: "flex",
  flexDirection: "column",
}
const defaultProfileUserCardStylesTablet = {
  height: "full",
  display: "flex",
  flexDirection: "column",
}
const defaultProfileUserCardStylesMobile = {
  height: "full",
  display: "flex",
  flexDirection: "column",
}

export const RenderConfig: ComponentConfig<ProfileCustomerCardProps> = {
  // TODO: missing responsive CSS

  render: ({ title, image, position, description, className, styles, responsiveType }) => {
    const id = `text-${Math.random().toString(36).substr(2, 9)}`
    // Merge default styles with user-defined styles
    const mergedStyles = {
      mobile: { ...defaultProfileUserCardStylesMobile, ...styles?.mobile },
      tablet: { ...defaultProfileUserCardStylesTablet, ...styles?.tablet },
      desktop: { ...defaultProfileUserCardStylesDesktop, ...styles?.desktop },
    }
    const responsiveCSS = generateResponsiveCSS(id, mergedStyles || {}, responsiveType)
    return (
      <>
        {responsiveCSS}
        <div id={id} className={`${id} ${twMerge(className)} rounded-xl w-full h-fit`}>
          <div className="flex gap-[14px] sm:gap-[15px] justify-start items-center mb-[14px] sm:mb-[19px]">
            <img
              src={image ? `${configs.API_URL}${image}` : DefaultImage}
              alt="banner"
              className="object-cover rounded-[16px] h-[56px] w-[56px] sm:h-[64px] sm:w-[64px]"
              sizes="33vw"
            />
            <div className="flex flex-col">
              <div className="sm:text-lg text-[16px] leading-[19.2px] font-bold sm:leading-[21.6px] text-[#212121] mb-1 sm:mb-1.5">
                {title}
              </div>
              <div className="sm:text-base text-[14px] leading-[19.6px] sm:leading-[22.4px] text-[#616161] font-medium">
                {position}
              </div>
            </div>
          </div>

          <div className="text-left text-[13px] leading-[23.4px] sm:text-[14px] sm:leading-[25.2px] text-[#616161] font-medium">
            {description}
          </div>
        </div>
      </>
    )
  },
}
