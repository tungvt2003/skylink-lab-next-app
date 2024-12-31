"use client"

import { ComponentConfig } from "@measured/puck"
import { twMerge } from "tailwind-merge"
import { CommonStylesProps } from "../../../lib/commonCSSProps"

// Define a type for text segments with custom styles
export interface TextSegment {
  content: string
}

export interface HeadingProps extends CommonStylesProps {
  tag: "p"
  textSegments: TextSegment[] // Array of text segments with custom styles
}

const sizeStyles = {
  small: {
    padding: "4px 8px",
    fontSize: "12px",
    lineHeight: "18px",
  },
  medium: {
    padding: "8px 16px",
    fontSize: "14px",
    lineHeight: "22px",
  },
  large: {
    padding: "12px 24px",
    fontSize: "16px",
    lineHeight: "24px",
  },
}

export const RenderConfig: ComponentConfig<HeadingProps> = {
  render: ({ tag, textSegments, className, styles }) => {
    // Generate a unique ID for the component for dynamic CSS scoping
    const id = `heading-${Math.random().toString(36).substr(2, 9)}`

    // Use default styles based on the heading type (h1 to h6)
    const headingStyles: React.CSSProperties = {
      color: "#000000",
      lineHeight: "1.5rem",
      fontWeight: "600",
      fontSize: "1.125rem",
    }
    const headingStyles2: React.CSSProperties = {
      color: "#31343E",
      lineHeight: "1.5rem",
      fontWeight: "400",
      fontSize: "1.125rem",
    }

    // Render the heading dynamically based on the selected tag
    const Tag = tag

    return (
      <>
        <Tag id={id} className={`${id} ${twMerge(className)} text-justify`}>
          <span className="text-[13px] leading-5 sm:text-[16px] sm:leading-6 text-[#31343E] sm:text-[#000000] font-semibold ">
            {textSegments[0].content}
          </span>
          <span className="text-[13px] leading-5 sm:text-[16px] sm:leading-6 text-[#31343E] sm:text-[#31343E] font-normal ">
            {textSegments[1].content}
          </span>
        </Tag>
      </>
    )
  },
}
