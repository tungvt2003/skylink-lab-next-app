import { ComponentConfig } from "@measured/puck"
import { twMerge } from "tailwind-merge"
import { CommonStylesProps } from "../../lib/commonCSSProps"
import { generateResponsiveCSS } from "../../lib/helper"

const defaultTextStyles = {
  fontSize: "1rem", // 16px (tailwind: text-base)
  lineHeight: "1.5rem", // 24px (tailwind: leading-6)
  fontWeight: "400", // Normal (tailwind: font-normal)
  margin: "0px", // Default margin
}

export interface TextProps extends CommonStylesProps {
  text: string // Text content
}

export const RenderConfig: ComponentConfig<TextProps> = {
  render: ({ text, className, styles, responsiveType }) => {
    // Generate a unique ID for the component for dynamic CSS scoping
    const id = `text-${Math.random().toString(36).substr(2, 9)}`
    // Merge default styles with user-defined styles
    const mergedStyles = {
      mobile: { ...defaultTextStyles, ...styles?.mobile },
      tablet: { ...defaultTextStyles, ...styles?.tablet },
      desktop: { ...defaultTextStyles, ...styles?.desktop },
    }

    // Generate responsive CSS
    const responsiveCSS = generateResponsiveCSS(id, mergedStyles || {}, responsiveType)

    return (
      <>
        {responsiveCSS}
        <p
          id={id}
          className={`${id} ${twMerge(className)}`}
          dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, "<br/>") }}
        />
      </>
    )
  },
}
