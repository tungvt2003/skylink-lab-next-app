"use client"

import * as Icons from "@ant-design/icons" // Import all Ant Design icons

import { ComponentConfig } from "@measured/puck"
import { twMerge } from "tailwind-merge"
import { CommonStylesProps } from "../../../lib/commonCSSProps"
import { generateResponsiveCSS } from "../../../lib/helper"

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
    border: "1px solid #00A19A",
    lineHeight: "24px",
    width: "fit-content",
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
    border: "1px solid #00A19A",
    lineHeight: "24px",
    width: "fit-content",
  },
}

export interface ButtonProps extends CommonStylesProps {
  type: "primary" | "secondary"
  size?: "small" | "medium" | "large"
  icon?: keyof typeof Icons // Key of Ant Design icons
  iconPosition?: "left" | "right"
  text?: string // Text input instead of DropZone
  className: string
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
export const RenderConfig: ComponentConfig<ButtonProps> = {
  render: ({ type, size, icon, iconPosition, text, className, styles, responsiveType }) => {
    // Generate a unique ID for the component for dynamic CSS scoping
    const id = `button-${Math.random().toString(36).substr(2, 9)}`

    // Use default styles based on the button type and size
    const buttonStyles = { ...defaultStyles[type], ...sizeStyles[size || "medium"] }

    const mergedStyles = {
      mobile: { ...buttonStyles },
      tablet: { ...buttonStyles },
      desktop: { ...buttonStyles },
    }

    // Dynamically render the selected Ant Design icon
    const IconComponent = icon ? Icons[icon] : null

    return (
      <>
        {generateResponsiveCSS(id, mergedStyles, responsiveType)}
        <button id={id} className={`${id} ${twMerge(className)}`}>
          {/* @ts-ignore */}
          {IconComponent && iconPosition === "left" && <IconComponent className="icon-left" />}
          <span>{text}</span>
          {/* @ts-ignore */}
          {IconComponent && iconPosition === "right" && <IconComponent className="icon-right" />}
        </button>
        <style>
          {`#${id}.${id}:hover {
          background-color: ${buttonStyles.hoverBgColor};
          // border-color: ${buttonStyles.hoverBgColor};
          color: ${buttonStyles.hoverTextColor};
        }`}
        </style>
      </>
    )
  },
}
