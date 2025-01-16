"use client"
import { ComponentConfig } from "@measured/puck"
import { twMerge } from "tailwind-merge"
import { configs, DefaultImage } from "../../../../external-components"
import { generateResponsiveCSS } from "../../../lib/helper"

export type CardOurCoreValueProps = {
  title: string
  image?: string
  description?: string
  justifyContent?: string
  paddingTextDesktop?: string
  paddingTextMobile?: string
  fontSizeDesktop?: string
  fontSizeMobile?: string
  fontWeightDesktop?: string
  fontWeightMobile?: string
  lineHeightDesktop?: string
  lineHeightMobile?: string
  alignItems?: string
  backgroundColor?: string
  color?: string
  className?: string
}
export const RenderConfig: ComponentConfig<CardOurCoreValueProps> = {
  render: ({
    title,
    image,
    description,
    paddingTextMobile,
    paddingTextDesktop,
    fontSizeMobile,
    fontSizeDesktop,
    fontWeightMobile,
    fontWeightDesktop,
    lineHeightMobile,
    lineHeightDesktop,
    justifyContent,
    alignItems,
    backgroundColor,
    color,
    className,
  }) => {
    // @TODO: missing responsive CSS
    const id = `car-our-core-value-${Math.random().toString(36).substr(2, 9)}`

    const styles = {
      mobile: {
        padding: paddingTextMobile,
        fontSize: fontSizeMobile,
        fontWeight: fontWeightMobile,
        lineHeight: lineHeightMobile,
        backgroundColor: backgroundColor,
        color: color,
      },
      desktop: {
        padding: paddingTextDesktop,
        fontSize: fontSizeDesktop,
        fontWeight: fontWeightDesktop,
        lineHeight: lineHeightDesktop,
        backgroundColor: backgroundColor,
        color: color,
      },
    }
    const responsiveCSS = generateResponsiveCSS(id, styles || {})

    return (
      <div className="rounded-[12px] px-6 py-4 text-center bg-gradient-core-value w-full sm:w-1/3 group">
        <div className="relative rounded-[16px] px-5">
          <img
            src={image ? `${configs.API_URL}${image}` : DefaultImage}
            alt={`${title} icon`}
            width={319}
            height={474}
            className="object-contain z-20 sm:mb-7 mb-5 rounded-[16px] mx-auto"
          />
        </div>
        {responsiveCSS}
        <div className="flex flex-col items-start transition-transform duration-300 ease-in-out group-hover:-translate-y-[7px]">
          <h3 id={id} className={`flex-1 ${id} ${twMerge(className)} mb-[6px] sm:mb-3 text-center w-full`}>
            {title}
          </h3>
          <p className="text-[14px] sm:text-base text-center font-medium leading-[23.5px] sm:leading-[26.8px] text-[#616161]">
            {description}
          </p>
        </div>
      </div>
    )
  },
}
