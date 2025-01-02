"use client"
import { ComponentConfig } from "@measured/puck"
import { twMerge } from "tailwind-merge"
import { CommonStylesProps } from "../../../lib/commonCSSProps"
import { generateResponsiveCSS } from "../../../lib/helper"

export interface TextSegment {
  content: string
  style?: ""
}

export interface HeadingProps extends CommonStylesProps {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  text: string
}
export const RenderConfig: ComponentConfig<HeadingProps> = {
  render: ({ tag, text, className, styles }) => {
    const id = `heading-${Math.random().toString(36).substr(2, 9)}`
    const Tag = tag

    const mergedStyles = {
      mobile: { ...styles?.mobile },
      tablet: { ...styles?.tablet },
      desktop: { ...styles?.desktop },
    }

    // Generate responsive CSS
    const responsiveCSS = generateResponsiveCSS(id, mergedStyles || {})

    return (
      <>
        {responsiveCSS}
        <Tag id={id} className={`${id} ${twMerge(className)}`} dangerouslySetInnerHTML={{ __html: text }} />
      </>
    )
  },
}
