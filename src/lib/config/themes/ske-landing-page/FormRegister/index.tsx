"use client"
import { ComponentConfig } from "@measured/puck"
import { commonStylesProps } from "../../../lib/commonCSSProps"
import { FormRegisterProps, RenderConfig } from "./RenderConfig"

export const SKELPFormRegister: ComponentConfig<FormRegisterProps> = {
  label: "SKELP | Form Register",
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
