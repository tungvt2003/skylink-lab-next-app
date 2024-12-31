"use client"
import { ComponentConfig } from "@measured/puck"
import { commonStylesProps } from "../../../lib/commonCSSProps"
import { FormRegisterProps, RenderConfig } from "./RenderConfig"

export const SKEContactForm: ComponentConfig<FormRegisterProps> = {
  label: "SKELP | Contact Form",
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
