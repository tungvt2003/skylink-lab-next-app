"use client"

import * as Icons from "@ant-design/icons"
import { ComponentConfig } from "@measured/puck"
import { twMerge } from "tailwind-merge"
import { MapPinLine } from "../../assets/map-pin-line"
import { CommonStylesProps } from "../../lib/commonCSSProps"
import { generateResponsiveCSS } from "../../lib/helper"

export interface ButtonLocationProps extends CommonStylesProps {
  type: "primary" | "secondary"
  size?: "small" | "medium" | "large"
  icon?: keyof typeof Icons // Key of Ant Design icons
  text?: string // Text input instead of DropZone
}

const defaultStyles = {
  primary: {
    gap: "8px",
    padding: "8px 16px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#fff",
    hoverTextColor: "#fff",
    backgroundColor: "#00A19A",
    hoverBgColor: "#00847F",
    border: "1px solid #31343e",
    lineHeight: "24px",
  },
  secondary: {
    gap: "8px",
    padding: "8px 16px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#00A19A",
    hoverTextColor: "#fff",
    backgroundColor: "#fff",
    hoverBgColor: "#00A19A",
    border: "1px solid #31343e",
    lineHeight: "24px",
  },
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

export const RenderConfig: ComponentConfig<ButtonLocationProps> = {
  render: ({ type, size, icon, text, className, styles, responsiveType }) => {
    // Generate a unique ID for the component for dynamic CSS scoping
    const id = `button-${Math.random().toString(36).substr(2, 9)}`

    // Use default styles based on the button type and size
    const buttonStyles = { ...defaultStyles[type], ...sizeStyles[size || "medium"] }

    // Merge default styles with user-defined styles
    const mergedStyles = {
      mobile: { ...buttonStyles, ...styles?.mobile },
      tablet: { ...buttonStyles, ...styles?.tablet },
      desktop: { ...buttonStyles, ...styles?.desktop },
    }

    // Generate responsive CSS
    const responsiveCSS = generateResponsiveCSS(id, mergedStyles || {}, responsiveType)

    return (
      <>
        {responsiveCSS}
        <button className={`${id} ${twMerge(className)}`}>
          <MapPinLine color={"#31343e"} className="w-5 h-7" />
          <span>{text}</span>
        </button>
      </>
    )
  },
}
