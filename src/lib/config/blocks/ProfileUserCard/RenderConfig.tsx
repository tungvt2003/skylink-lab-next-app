import { ComponentConfig } from "@measured/puck"
import { twMerge } from "tailwind-merge"
import { configs, DefaultImage } from "../../../external-components"
import { CommonStylesProps } from "../../lib/commonCSSProps"
import { generateResponsiveCSS } from "../../lib/helper"

export interface ProfileUserCardProps extends CommonStylesProps {
  title: string
  image?: string
  url?: string
  subTitle?: string
  description?: { content: string }[]
}

const defaultProfileUserCardStylesDesktop = {
  height: "full",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  padding: "48px 24px",

  alignItems: "center",
}
const defaultProfileUserCardStylesTablet = {
  height: "full",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  padding: "48px 24px",

  alignItems: "center",
}
const defaultProfileUserCardStylesMobile = {
  height: "full",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  padding: "40px 32px",

  alignItems: "center",
}

export const RenderConfig: ComponentConfig<ProfileUserCardProps> = {
  // TODO: missing responsive CSS

  render: ({ title, image, subTitle, description, className, styles, responsiveType }) => {
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
        <div id={id} className={`${id} ${twMerge(className)} bg-[#F6F5FA] rounded-xl`}>
          <div className="relative h-[7.4375rem] w-[7.4375rem] rounded-xl">
            <img
              src={image ? `${configs.API_URL}${image}` : DefaultImage}
              alt="banner"
              className="rounded-full object-cover"
              sizes="33vw"
            />
          </div>
          <div className="flex flex-col gap-1 text-center">
            <div
              className="sm:text-lg sm:leading-6 text-sm font-semibold text-[#31343E]"
              dangerouslySetInnerHTML={{ __html: title || "" }}
            />
            <div
              className="sm:text-base sm:leading-5.5 text-[13px] leading-[18px] text-[#777777]"
              dangerouslySetInnerHTML={{ __html: subTitle || "" }}
            />
          </div>
          <div className="text-center sm:text-sm text-[13px] leading-5.25 text-[#AEAEB2]">
            {description &&
              description?.map((descItem, descIndex) => (
                <div
                  key={descIndex}
                  className="text-center sm:text-sm text-[13px] leading-5.25 text-[#AEAEB2]"
                  dangerouslySetInnerHTML={{ __html: descItem.content || "" }}
                />
              ))}
          </div>
        </div>
      </>
    )
  },
}
