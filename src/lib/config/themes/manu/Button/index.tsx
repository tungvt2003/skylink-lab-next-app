"use client"
import { ComponentConfig } from "@measured/puck"
import { commonStylesProps } from "../../../lib/commonCSSProps"
import { ButtonProps, RenderConfig } from "./RenderConfig"

export const ButtonMA: ComponentConfig<ButtonProps> = {
  label: "MANU | Button",
  //@ts-ignore
  fields: {
    ...commonStylesProps,
  },
  defaultProps: {
    className: "",
    styles: {
      mobile: {
        display: "block",
      },
      tablet: {
        display: "block",
      },
      desktop: {
        display: "block",
      },
    },
  },
  ...RenderConfig,
}
