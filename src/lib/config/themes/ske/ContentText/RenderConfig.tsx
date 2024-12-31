import { ComponentConfig } from "@measured/puck"
import { twMerge } from "tailwind-merge"
import { CommonStylesProps } from "../../../lib/commonCSSProps"
import { generateResponsiveCSS } from "../../../lib/helper"

export interface HeadingProps extends CommonStylesProps {
  tag: "p" | "span"
  text: string // Text input instead of DropZone
}

export const RenderConfig: ComponentConfig<HeadingProps> = {
  render: ({ tag, text, className, responsiveType }) => {
    // Generate a unique ID for the component for dynamic CSS scoping
    const id = `content-text-${Math.random().toString(36).substr(2, 9)}`

    // Use default styles based on the heading type (h1 to h6)
    const customStyle: React.CSSProperties = {
      margin: "0",
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "1.5rem",
      color: "rgb(0 0 0/var(--tw-text-opacity))",
      fontFamily: "Inter, __Inter_d65c78,__Inter_Fallback_d65c78",
    }

    const mergedStyles = { mobile: customStyle, tablet: customStyle, desktop: customStyle }

    // Render the heading dynamically based on the selected tag
    const Tag = tag

    return (
      <>
        {generateResponsiveCSS(id, mergedStyles || {}, responsiveType)}
        <Tag id={id} className={`${id} ${twMerge(className)}`}>
          {text}
        </Tag>
      </>
    )
  },
}
