"use client"

import { ComponentConfig, DropZone } from "@measured/puck"

import Aos from "aos"
import { useEffect } from "react"
import { twMerge } from "tailwind-merge"
import { CommonStylesProps } from "../../lib/commonCSSProps"
import { generateResponsiveCSS } from "../../lib/helper"

export interface ContainerProps extends CommonStylesProps {
  type: "fluid" | "custom" | "boxed"
}

export const RenderConfig: ComponentConfig<ContainerProps> = {
  render: ({ type, className, styles, responsiveType, animation }) => {
    const width = type === "fluid" ? "w-full max-w-full" : ``
    // Generate a unique ID for the component for dynamic CSS scoping
    const id = `box-${Math.random().toString(36).substr(2, 9)}`

    // Generate responsive CSS
    const responsiveCSS = generateResponsiveCSS(id, styles || {}, responsiveType)
    useEffect(() => {
      Aos.init()
    }, [])
    return (
      <>
        {responsiveCSS}
        <div
          id={id}
          data-aos={animation?.["data-aos"]}
          data-aos-duration={animation?.["data-aos-duration"]}
          className={twMerge("container mx-auto", width, `${id} ${className}`)}
        >
          <DropZone zone="item" />
        </div>
      </>
    )
  },
}
