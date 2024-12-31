import { ComponentConfig } from "@measured/puck"
import { twMerge } from "tailwind-merge"
import { CommonStylesProps } from "../../../lib/commonCSSProps"

export interface TextSegment {
  content: string
}

export interface HeadingProps extends CommonStylesProps {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  textSegments: TextSegment[] // Array of text segments with custom styles
  colorRevert: boolean
}

export const RenderConfig: ComponentConfig<HeadingProps> = {
  render: ({ tag, textSegments, className, colorRevert }) => {
    // Generate a unique ID for the component for dynamic CSS scoping
    const id = `heading-${Math.random().toString(36).substr(2, 9)}`

    // Use default styles based on the heading type (h1 to h6)
    const headingStyles: React.CSSProperties = {
      color: "#00a19a",
      fontSize: "40px",
      lineHeight: "48px",
      textAlign: "center",
      fontWeight: 700,
    }

    const firstColor = colorRevert ? { color: "#00a19a" } : { color: "#31343e" }
    const secondColor = colorRevert ? { color: "#31343e" } : { color: "#00a19a" }

    // Render the heading dynamically based on the selected tag
    const Tag = tag

    return (
      <>
        <Tag id={id} className={`${id} ${twMerge(className)}`}>
          <span style={{ ...headingStyles, ...firstColor }}>{textSegments[0].content}</span>
          <span style={{ ...headingStyles, ...secondColor }}>{textSegments[1].content}</span>
        </Tag>
      </>
    )
  },
}
