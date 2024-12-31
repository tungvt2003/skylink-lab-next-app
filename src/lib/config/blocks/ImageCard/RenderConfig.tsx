"use client"
import { ComponentConfig } from "@measured/puck"
import { twMerge } from "tailwind-merge"
import { configs, DefaultImage } from "../../../external-components"

export type ImageCardProps = {
  title: string
  image?: string
  url?: string
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
export const RenderConfig: ComponentConfig<ImageCardProps> = {
  render: ({
    title,
    image,
    url,
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
    const id = `image-card-text-${Math.random().toString(36).substr(2, 9)}`

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

    return (
      <div
        style={{
          display: "flex",
          justifyContent: justifyContent,
          alignItems: alignItems,
          height: "100%",
          width: "auto",
          position: "relative",
        }}
      >
        <a href={url} className="sm:relative group cursor-pointer">
          <div className="flex flex-col w-[21.4375rem] h-[25rem] sm:w-[23rem] sm:h-[400px] rounded-xl sm:rounded-3xl overflow-hidden shadow-lg group">
            <img
              data-aos="fade-up"
              data-aos-duration="1000"
              src={image ? `${configs.API_URL}${image}` : DefaultImage}
              alt="Background"
              className="w-full h-[280px] object-cover"
            />
            <div
              id={id}
              className={`flex-1 ${id} ${twMerge(
                className,
              )} w-full h-[120px] bg-white text-green text-justify p-4 text-base font-semibold duration-500 group-hover:bg-[#00A19A] group-hover:text-white`}
            >
              {title}
            </div>
          </div>
        </a>
      </div>
    )
  },
}
