"use client"

import { ComponentConfig } from "@measured/puck"
import { twMerge } from "tailwind-merge"
import { DefaultImage } from "../../../../external-components"
import { generateImagePath } from "../../../../utils"
import { CommonStylesProps } from "../../../lib/commonCSSProps"
import { generateResponsiveCSS } from "../../../lib/helper"
import "./banner.css"

export interface BannerProps extends CommonStylesProps {
  bannerImg?: string
}

export const RenderConfig: ComponentConfig<BannerProps> = {
  render: ({ className, styles, responsiveType, bannerImg }) => {
    const id = `button-${Math.random().toString(36).substr(2, 9)}`

    const responsiveCSS = generateResponsiveCSS(id, styles || {}, responsiveType)

    return (
      <>
        {responsiveCSS}
        <div
          className={`
            ${id} 
            ${twMerge(
              className,
            )}  banner-hover-wrap sm:w-[1200px] sm:h-[270px] sm:pt-0 sm:px-[20px] sm:pb-[10px] p-[10px]`}
        >
          <img src={bannerImg ? generateImagePath(bannerImg, "large") : DefaultImage} alt="" className="object-cover" />
        </div>
      </>
    )
  },
}
