"use client"
import { ComponentConfig } from "@measured/puck"
import { twMerge } from "tailwind-merge"
import { configs, DefaultImage } from "../../../../external-components"
import { generateResponsiveCSS } from "../../../lib/helper"

export type EnhancedIconBoxProps = {
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
export const RenderConfig: ComponentConfig<EnhancedIconBoxProps> = {
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
    const id = `enhanced-icon-box-${Math.random().toString(36).substr(2, 9)}`

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
      <div
        style={{
          display: "flex",
          justifyContent: justifyContent,
          alignItems: alignItems,
          height: "100%",
          width: "100%",
          position: "relative",
        }}
        className="group rounded-[24px] p-2.5"
      >
        <div className="rounded-[24px] py-8 px-6 sm:p-8 text-center flex flex-col items-start border border-[#E5E5E6] group-hover:bg-hover-gradient transition-all duration-300 ease-in-out transform">
          <div className="relative rounded-[16px] p-[14px] sm:p-4 bg-gradient-to-r from-[#FFADFD54] to-[#ECEFFE] z-10 mb-[14px] sm:mb-4 group-hover:bg-white transition-colors duration-300 ease-in-out">
            <img
              src={image ? `${configs.API_URL}${image}` : DefaultImage}
              alt={`${title} icon`}
              width={32}
              height={32}
              className="h-[28px] w-[28px] sm:h-[32px] sm:w-[32px] object-cover z-20"
            />
          </div>
          {responsiveCSS}
          <div className="flex flex-col items-start gap-3">
            <h4 id={id} className={`flex-1 ${id} ${twMerge(className)} text-left group-hover:text-white`}>
              {title}
            </h4>
            <p
              className="self-stretch text-left text-[#616161] text-[13px] sm:text-[14px] font-medium leading-[23.4px] sm:leading-[25.2px] group-hover:text-white"
              dangerouslySetInnerHTML={{ __html: description ?? "" }}
            />
          </div>
        </div>
      </div>
    )
  },
}
