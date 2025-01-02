import { ComponentConfig } from "@measured/puck"
import "ckeditor5/ckeditor5.css"
import { useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"
import { CommonStylesProps } from "../../../lib/commonCSSProps"
import { generateResponsiveCSS } from "../../../lib/helper"

const defaultTextStyles = {
  fontSize: "1rem",
  lineHeight: "1.5rem",
  fontWeight: "400",
  margin: "0px",
}

export interface CustomCounterProps extends CommonStylesProps {
  text: string
  unit?: string
  subText: string
}

export const RenderConfig: ComponentConfig<CustomCounterProps> = {
  render: ({ text, className, styles, responsiveType, unit, subText }) => {
    const id = `text-${Math.random().toString(36).substr(2, 9)}`
    const mergedStyles = {
      mobile: { ...defaultTextStyles, ...styles?.mobile },
      tablet: { ...defaultTextStyles, ...styles?.tablet },
      desktop: { ...defaultTextStyles, ...styles?.desktop },
    }

    const responsiveCSS = generateResponsiveCSS(id, mergedStyles || {}, responsiveType)
    const [count, setCount] = useState(0)
    const countTo = parseInt(text)
    useEffect(() => {
      const duration = 2000
      const increment = countTo / (duration / 100)

      const interval = setInterval(() => {
        setCount(prevCount => {
          const nextCount = prevCount + increment
          if (nextCount >= countTo) {
            clearInterval(interval)
            return countTo
          }
          return nextCount
        })
      }, 100)

      return () => clearInterval(interval) // Cleanup interval on unmount
    }, [countTo])

    return (
      <div className="w-[40%] sm:w-[56.621%] p-2.5">
        {responsiveCSS}
        <p id={id} className={`${id} ${twMerge(className)} flex items-center`}>
          {Math.floor(count)}
          {unit}
        </p>
        <p className="text-[14px] leading-[25.2px] sm:text-base sm:leading-[28.8px] font-normal text-[#999ea7]">
          {subText}
        </p>
      </div>
    )
  },
}
