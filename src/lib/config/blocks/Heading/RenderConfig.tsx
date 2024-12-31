import { ComponentConfig } from "@measured/puck"
import { twMerge } from "tailwind-merge"
import { CommonStylesProps } from "../../lib/commonCSSProps"
import { generateResponsiveCSS } from "../../lib/helper"

const defaultHeadingStyles = {
  h1: {
    fontSize: "2.25rem", // 36px (tailwind: text-4xl)
    lineHeight: "2.5rem", // 40px (tailwind: leading-tight)
    fontWeight: "700", // (tailwind: font-bold)
  },
  h2: {
    fontSize: "1.875rem", // 30px (tailwind: text-3xl)
    lineHeight: "2.25rem", // 36px (tailwind: leading-9)
    fontWeight: "700", // (tailwind: font-bold)
  },
  h3: {
    fontSize: "1.5rem", // 24px (tailwind: text-2xl)
    lineHeight: "2rem", // 32px (tailwind: leading-8)
    fontWeight: "700", // (tailwind: font-bold)
  },
  h4: {
    fontSize: "1.25rem", // 20px (tailwind: text-xl)
    lineHeight: "1.75rem", // 28px (tailwind: leading-7)
    fontWeight: "600", // (tailwind: font-semibold)
  },
  h5: {
    fontSize: "1rem", // 16px (tailwind: text-lg)
    lineHeight: "1.5rem", // 24px (tailwind: leading-6)
    fontWeight: "600", // (tailwind: font-semibold)
  },
  h6: {
    fontSize: "0.875rem", // 14px (tailwind: text-base)
    lineHeight: "1.25rem", // 20px (tailwind: leading-5)
    fontWeight: "600", // (tailwind: font-semibold)
  },
}

const defaultHeadingStylesMobile = {
  h1: {
    fontSize: "2.25rem", // 36px (tailwind: text-4xl)
    lineHeight: "2.5rem", // 40px (tailwind: leading-tight)
    fontWeight: "700", // (tailwind: font-bold)
  },
  h2: {
    fontSize: "1.875rem", // 30px (tailwind: text-3xl)
    lineHeight: "2.25rem", // 36px (tailwind: leading-9)
    fontWeight: "700", // (tailwind: font-bold)
  },
  h3: {
    fontSize: "1.5rem", // 24px (tailwind: text-2xl)
    lineHeight: "2rem", // 32px (tailwind: leading-8)
    fontWeight: "700", // (tailwind: font-bold)
  },
  h4: {
    fontSize: "1.25rem", // 20px (tailwind: text-xl)
    lineHeight: "1.75rem", // 28px (tailwind: leading-7)
    fontWeight: "600", // (tailwind: font-semibold)
  },
  h5: {
    fontSize: "1rem", // 16px (tailwind: text-lg)
    lineHeight: "1.5rem", // 24px (tailwind: leading-6)
    fontWeight: "600", // (tailwind: font-semibold)
  },
  h6: {
    fontSize: "0.875rem", // 14px (tailwind: text-base)
    lineHeight: "1.25rem", // 20px (tailwind: leading-5)
    fontWeight: "600", // (tailwind: font-semibold)
  },
}

export interface TextSegment {
  content: string
  style?: ""
}

export interface HeadingProps extends CommonStylesProps {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  text: string
}
export const RenderConfig: ComponentConfig<HeadingProps> = {
  render: ({ tag, text, className, styles, responsiveType }) => {
    const id = `heading-${Math.random().toString(36).substr(2, 9)}`

    const headingStyles = defaultHeadingStyles[tag]

    const mergedStyles = {
      mobile: { ...defaultHeadingStylesMobile, ...styles?.mobile },
      tablet: { ...headingStyles, ...styles?.tablet },
      desktop: { ...headingStyles, ...styles?.desktop },
    }

    // Generate responsive CSS
    const responsiveCSS = generateResponsiveCSS(id, mergedStyles || {}, responsiveType)

    const Tag = tag

    return (
      <>
        {responsiveCSS}
        <p
          id={id}
          className={`${id} ${twMerge(className)}`}
          dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, "<br/>") }}
        >
          {/* {text} */}
        </p>
      </>
    )
  },
}
