"use client"

import { ComponentConfig } from "@measured/puck"
import AOS from "aos"
import "aos/dist/aos.css"
import { twMerge } from "tailwind-merge"
import { DefaultImage } from "../../../../external-components"
import { generateImagePath } from "../../../../utils"
import { CommonStylesProps } from "../../../lib/commonCSSProps"
import { generateResponsiveCSS } from "../../../lib/helper"

export interface ImageProps extends CommonStylesProps {
  image?: string
  maxHeight?: string
}
export const RenderConfig: ComponentConfig<ImageProps> = {
  render: ({ className, styles, responsiveType, image, maxHeight }) => {
    const id = `button-${Math.random().toString(36).substr(2, 9)}`
    const responsiveCSS = generateResponsiveCSS(id, styles || {}, responsiveType)

    if (typeof window !== "undefined") {
      AOS.init()
    }

    return (
      <>
        {responsiveCSS}
        <div
          className={`relative ${id} ${twMerge(className)} flex justify-center  items-center p-[10px] w-full`}
          data-aos="fade-up"
        >
          <div className="absolute z-0 bg-gradient-to-b from-[#FFADFD54] to-[#ECEFFE] rounded-3xl pointer-events-none w-full md:max-w-[360px] md:h-[250px] h-[150px] top-[20%]"></div>
          <img
            src={image ? generateImagePath(image, "large") : DefaultImage}
            alt=""
            className="relative z-10 object-contain rounded-[24px] md:w-auto md:h-auto w-5/6 h-5/6 max-w-full mx-auto"
            style={{ maxHeight: maxHeight }}
          />
        </div>
      </>
    )
  },
}
