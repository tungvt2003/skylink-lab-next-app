"use client"

import { ComponentConfig } from "@measured/puck"
import { twMerge } from "tailwind-merge"
import { CommonStylesProps } from "../../../lib/commonCSSProps"
import { generateResponsiveCSS } from "../../../lib/helper"

export interface BannerProps extends CommonStylesProps {
  hoverEffect?: string
  buttonLabel?: string
  linkUrl?: string
}

export const RenderConfig: ComponentConfig<BannerProps> = {
  render: ({ className, styles, responsiveType, hoverEffect, buttonLabel, linkUrl }) => {
    const id = `button-${Math.random().toString(36).substr(2, 9)}`

    const responsiveCSS = generateResponsiveCSS(id, styles || {}, responsiveType)

    let baseStyle = ""
    let hoverStyle = ""

    if (hoverEffect === "reverseColor") {
      baseStyle = `
        bg-gradient-to-r from-[rgb(205,65,250)] to-[rgb(126,79,249)]
        shadow-[0px_4px_8px_0px_rgba(0,0,0,0.12)]
        transition-all
      `

      hoverStyle = `
        .${id}:hover {
          background: linear-gradient(90deg, rgb(126, 79, 249) 0%, rgb(205, 65, 250) 100%);
          box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
        }
      `
    } else if (hoverEffect === "changeColor") {
      baseStyle = "bg-[#CD41FA]"
      hoverStyle = `
        .${id}:hover {
          background: #7e4ff9;
        }
      `
    }

    return (
      <>
        {responsiveCSS}
        <style>{hoverStyle}</style>
        <a
          href={linkUrl || "#"}
          className={`${id} ${twMerge(
            className,
          )} ${baseStyle} py-[18px] px-7 rounded-full text-white w-fit duration-300 transition-all inline-block text-sm leading-[14px]`}
        >
          {buttonLabel}
        </a>
      </>
    )
  },
}
