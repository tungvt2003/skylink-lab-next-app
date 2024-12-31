"use client"

import { ComponentConfig } from "@measured/puck"
import { twMerge } from "tailwind-merge"
import { CommonStylesProps } from "../../lib/commonCSSProps"
import { generateResponsiveCSS } from "../../lib/helper"

export interface InputProps extends CommonStylesProps {
  type: string
  placeholder?: string
}

const defaultStyles = {
  base: {
    padding: "8px 16px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "400",
    color: "#000",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    lineHeight: "24px",
  },
}

export const RenderConfig: ComponentConfig<InputProps> = {
  render: ({ type, placeholder, className, styles, responsiveType }: InputProps) => {
    const id = `input-${Math.random().toString(36).substr(2, 9)}`

    const inputStyles = { ...defaultStyles.base }

    const mergedStyles = {
      mobile: { ...inputStyles, ...styles?.mobile },
      tablet: { ...inputStyles, ...styles?.tablet },
      desktop: { ...inputStyles, ...styles?.desktop },
    }

    const responsiveCSS = generateResponsiveCSS(id, mergedStyles || {}, responsiveType)

    return (
      <>
        {responsiveCSS}
        <div className={`${id} ${twMerge(className)} flex items-center`}>
          {/* @ts-ignore */}
          <input type={type} placeholder={placeholder} className="flex-1" />
          {/* @ts-ignore */}
        </div>
      </>
    )
  },
}
