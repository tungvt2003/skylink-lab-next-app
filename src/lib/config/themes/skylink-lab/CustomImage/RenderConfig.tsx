"use client"
import { ComponentConfig } from "@measured/puck"
import { twMerge } from "tailwind-merge"
import { configs, DefaultImage } from "../../../../external-components"
import { CommonStylesProps } from "../../../lib/commonCSSProps"
import { generateResponsiveCSS } from "../../../lib/helper"

export interface CustomImageProps extends CommonStylesProps {
  padding?: string
  border?: string
  heightStyle?: string
  witdhMobile?: string
  widthDesktop?: string
  widthTablet?: string
  heightMobile?: string
  heightTablet?: string
  imageUrl?: string
  borderRadius?: string
  margin?: string
  multiple?: boolean
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"
}

export const RenderConfig: ComponentConfig<CustomImageProps> = {
  render: ({
    padding,
    border,
    witdhMobile,
    widthDesktop,
    widthTablet,
    heightStyle,
    heightMobile,
    heightTablet,
    imageUrl,
    borderRadius,
    margin,
    multiple,
    objectFit,
    responsiveType,
    className,
  }) => {
    const id = `Image-${Math.random().toString(36).substr(2, 9)}`

    const styles = {
      mobile: { height: heightMobile, display: "block", width: witdhMobile },
      tablet: { height: heightTablet, display: "block", width: widthTablet },
      desktop: { height: heightStyle, display: "block", width: widthDesktop },
    }

    return (
      <div className="w-full sm:w-1/2 h-full p-2.5 sm:pb-[58.79px] mb-5 sm:mb-0 flex justify-center">
        {generateResponsiveCSS(id, styles || {}, responsiveType)}

        <div className="w-full flex justify-center content-start relative">
          <div className="absolute left-0 sm:left-[10%] w-full h-[220px] sm:w-[80%] sm:h-[300px] top-[30%] mb-5 z-0 bg-gradient-180 rounded-[24px]"></div>
          <img
            id={id}
            src={imageUrl ? `${configs.API_URL}${imageUrl}` : DefaultImage}
            alt="placeholder"
            className={`${id} ${twMerge(className)} ${
              objectFit == "cover"
                ? "object-cover"
                : objectFit === "contain"
                ? "object-contain"
                : objectFit === "fill"
                ? "object-fill"
                : objectFit === "scale-down"
                ? "object-scale-down"
                : ""
            } ${multiple ? "mix-blend-multiply" : ""} z-10`}
            style={{
              padding,
              borderRadius,
              margin,
            }}
            rel="preload"
            height={220}
            loading="lazy"
          />
        </div>
      </div>
    )
  },
}
