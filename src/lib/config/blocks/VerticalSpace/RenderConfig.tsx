import { ComponentConfig } from "@measured/puck"
import { twMerge } from "tailwind-merge"
import { CommonStylesProps } from "../../lib/commonCSSProps"
import { generateResponsiveCSS } from "../../lib/helper"

export interface VericalSpaceProps extends CommonStylesProps {
  height: string
  heightMobile: string
  heightTablet: string
}

export const RenderConfig: ComponentConfig<VericalSpaceProps> = {
  render: ({ className, height, heightMobile, heightTablet }) => {
    // Generate a unique ID for the component for dynamic CSS scoping
    const id = `VericalSpace-${Math.random().toString(36).substr(2, 9)}`

    const styles = {
      mobile: { height: heightMobile, display: "block", width: "100%" },
      tablet: { height: heightTablet, display: "block", width: "100%" },
      desktop: { height, display: "block", width: "100%" },
    }

    return (
      <>
        {generateResponsiveCSS(id, styles || {})}
        <div id={id} className={`${id} ${twMerge(className)}`}></div>
      </>
    )
  },
}
