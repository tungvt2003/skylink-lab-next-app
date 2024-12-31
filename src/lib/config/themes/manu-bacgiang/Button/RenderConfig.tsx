"use client"

import { ComponentConfig } from "@measured/puck"
import { twMerge } from "tailwind-merge"
import { ButtonManuScroll } from "../../../../external-components"
import { CommonStylesProps } from "../../../lib/commonCSSProps"
import { generateResponsiveCSS } from "../../../lib/helper"

// Interface for form props
export interface ButtonProps extends CommonStylesProps {}

export const RenderConfig: ComponentConfig<ButtonProps> = {
  render: ({ styles, responsiveType, className }) => {
    const id = `button-${Math.random().toString(36).substr(2, 9)}`

    const mergedStyles = {
      mobile: { ...styles?.mobile },
      tablet: { ...styles?.tablet },
      desktop: { ...styles?.desktop },
    }

    const responsiveCSS = generateResponsiveCSS(id, mergedStyles || {}, responsiveType)

    return (
      <>
        {responsiveCSS}
        <button
          className={`${id} ${twMerge(className)}`}
          onClick={() => {
            const element = document.querySelector(".about-us")
            if (element) {
              const offset = 94
              const elementPosition = element.getBoundingClientRect().top + window.scrollY
              const offsetPosition = elementPosition - offset
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
              })
            }
          }}
        >
          <img src={ButtonManuScroll} alt="button" />
        </button>
      </>
    )
  },
}
