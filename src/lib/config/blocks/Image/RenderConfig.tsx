"use client"
import { ComponentConfig } from "@measured/puck"
import { twMerge } from "tailwind-merge"
import { configs, DefaultImage } from "../../../external-components"
import { CommonStylesProps } from "../../lib/commonCSSProps"
import { generateResponsiveCSS } from "../../lib/helper"

export interface ImageProps extends CommonStylesProps {
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
  link?: string
  margin?: string
  multiple?: boolean
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"
}

export const RenderConfig: ComponentConfig<ImageProps> = {
  // @TODO: missing responsive CSS\

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
    link,
  }) => {
    const id = `Image-${Math.random().toString(36).substr(2, 9)}`

    const styles = {
      mobile: { height: heightMobile, display: "block", width: witdhMobile },
      tablet: { height: heightTablet, display: "block", width: widthTablet },
      desktop: { height: heightStyle, display: "block", width: widthDesktop },
    }

    return (
      <>
        {generateResponsiveCSS(id, styles || {}, responsiveType)}

        <a href={link ?? "#"}>
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
            } ${multiple ? "mix-blend-multiply" : ""}`}
            style={{ padding, borderRadius, margin }}
          />
        </a>
      </>
    )
  },
}
