"use client"

import * as Icons from "@ant-design/icons"
import { ComponentConfig } from "@measured/puck"
import { twMerge } from "tailwind-merge"
import { IconProps } from "."
import { generateResponsiveCSS } from "../../lib/helper"

export const sizeStyles = {
  small: {
    padding: "5px",
    fontSize: "20px",
    lineHeight: "18px",
  },
  medium: {
    padding: "10px",
    fontSize: "20px",
    lineHeight: "22px",
  },
  large: {
    padding: "20px",
    fontSize: "20px",
    lineHeight: "24px",
  },
}

export const RenderConfig: ComponentConfig<IconProps> = {
  render: ({ size, icon, className, styles, url, responsiveType }) => {
    // Generate a unique ID for the component for dynamic CSS scoping
    const id = `icon-${Math.random().toString(36).substr(2, 9)}`

    // Use default styles based on the button type and size
    const iconStyles = { ...sizeStyles[size || "medium"] }

    // Merge default styles with user-defined styles
    const mergedStyles = {
      mobile: { ...iconStyles, ...styles?.mobile },
      tablet: { ...iconStyles, ...styles?.tablet },
      desktop: { ...iconStyles, ...styles?.desktop },
    }

    // Generate responsive CSS
    const responsiveCSS = generateResponsiveCSS(id, mergedStyles || {}, responsiveType)

    // Dynamically render the selected Ant Design icon
    const IconComponent = icon && Icons[icon] ? Icons[icon] : null

    return (
      <>
        {responsiveCSS}
        <a className={`${id} ${twMerge(className)} cursor-pointer`} href={url}>
          {/* @ts-ignore */}
          {IconComponent && <IconComponent />}
        </a>
      </>
    )
  },
}
