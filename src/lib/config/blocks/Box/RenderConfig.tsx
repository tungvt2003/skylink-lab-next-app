"use client"

import { ComponentConfig, DropZone } from "@measured/puck"
import { CommonStylesProps } from "../../lib/commonCSSProps"
import { generateResponsiveCSS } from "../../lib/helper"

export interface BoxProps extends CommonStylesProps {}

export const RenderConfig: ComponentConfig<BoxProps> = {
  render: ({ className, styles, responsiveType }: BoxProps) => {
    // Generate a unique ID for the component for dynamic CSS scoping
    const id = `box-${Math.random().toString(36).substr(2, 9)}`

    // Generate responsive CSS
    const responsiveCSS = generateResponsiveCSS(id, styles || {}, responsiveType)

    return (
      <>
        {responsiveCSS}
        <div className={id + " " + className}>
          <DropZone zone="item" />
        </div>
      </>
    )
  },
}
