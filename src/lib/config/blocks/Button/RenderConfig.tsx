"use client"

import { ComponentConfig } from "@measured/puck"
import { twMerge } from "tailwind-merge"
import { CommonStylesProps } from "../../lib/commonCSSProps"
import { generateResponsiveCSS } from "../../lib/helper"
import SvgIconRenderer from "../../lib/icons-svg"

export interface ButtonProps extends CommonStylesProps {
  type: "primary" | "secondary"
  size?: "small" | "medium" | "large"
  icon?: string
  iconPosition?: "left" | "right"
  text?: string
  link?: string
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
    border: "1.5px solid #00A19A",
    hoverBgColor: "#00847F",
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
    border: "1.5px solid #00A19A",
    lineHeight: "24px",
  },
}
const sizeStyles = {
  small: {
    padding: "4px 8px",
    fontSize: "12px",
    lineHeight: "18px",
    transition: "all 500ms ease-in-out",
  },
  medium: {
    padding: "8px 16px",
    fontSize: "14px",
    lineHeight: "20px",
    transition: "all 500ms ease-in-out",
  },
  large: {
    padding: "12px 24px",
    fontSize: "16px",
    lineHeight: "24px",
    transition: "all 500ms ease-in-out",
  },
}

export const RenderConfig: ComponentConfig<ButtonProps> = {
  render: ({ type, size, icon, iconPosition, text, className, styles, responsiveType, link }: ButtonProps) => {
    const id = `button-${Math.random().toString(36).substr(2, 9)}`

    const buttonStyles = { ...defaultStyles[type], ...sizeStyles[size || "medium"] }

    const mergedStyles = {
      mobile: { ...buttonStyles, ...styles?.mobile },
      tablet: { ...buttonStyles, ...styles?.tablet },
      desktop: { ...buttonStyles, ...styles?.desktop },
    }

    const responsiveCSS = generateResponsiveCSS(id, mergedStyles || {}, responsiveType)

    return (
      <>
        {responsiveCSS}
        <a href={link ?? "#"} className={`${id} ${twMerge(className)}`}>
          {iconPosition === "left" && (
            <SvgIconRenderer icon={icon || ""} sizeHeight={12} sizeWidth={16} color="black" />
          )}
          <span>{text}</span>
          {iconPosition === "right" && (
            <div className="transform transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]">
              <SvgIconRenderer icon={icon || ""} sizeHeight={12} sizeWidth={16} color="black" />
            </div>
          )}
        </a>
      </>
    )
  },
}
