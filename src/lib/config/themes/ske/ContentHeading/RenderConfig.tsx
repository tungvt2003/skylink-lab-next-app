"use client"

import { ComponentConfig } from "@measured/puck"
import { twMerge } from "tailwind-merge"
import { CommonStylesProps } from "../../../lib/commonCSSProps"
import { generateResponsiveCSS } from "../../../lib/helper"

export interface HeadingProps extends CommonStylesProps {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  text: string // Text input instead of DropZone
}

export const RenderConfig: ComponentConfig<HeadingProps> = {
  render: ({ tag, text, className }) => {
    // Generate a unique ID for the component for dynamic CSS scoping
    const id = `heading-${Math.random().toString(36).substr(2, 9)}`

    // Use default styles based on the heading type (h1 to h6)
    const headingStyles: React.CSSProperties = {
      display: "flex",
      flexDirection: "column",
      gap: ".625rem",
      paddingBottom: ".75rem",
      fontSize: "1.125rem",
      fontWeight: 600,
      textTransform: "uppercase",
      lineHeight: "1.5rem",
    }

    // Default styles for mobile
    const mobileStyles: React.CSSProperties = {
      fontSize: "16px",
      lineHeight: "22px",
    }

    // Render the heading dynamically based on the selected tag
    const Tag = tag

    return (
      <>
        {generateResponsiveCSS(id, {
          mobile: { ...headingStyles, ...mobileStyles },
          tablet: headingStyles,
          desktop: headingStyles,
        })}
        <Tag id={id} className={`${id} ${twMerge(className)}`}>
          {text}
          <div
            style={{
              height: "0",
              width: "5.5625rem",
              borderBottomWidth: "2px",
              borderColor: "#00a19a",
            }}
          ></div>
        </Tag>
      </>
    )
  },
}
