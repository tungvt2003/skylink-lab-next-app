import { ComponentConfig } from "@measured/puck"
import { commonStylesProps } from "../../lib/commonCSSProps"
import { InputProps, RenderConfig } from "./RenderConfig"

export const Input: ComponentConfig<InputProps> = {
  label: "Input",
  // @ts-ignore
  fields: {
    type: {
      label: "Input Type",
      type: "text",
    },

    placeholder: {
      label: "Placeholder",
      type: "text",
    },
    ...commonStylesProps,
  },
  defaultProps: {
    type: "text",
    placeholder: "Enter text",
    className: "flex items-center gap-2",
  },
  ...RenderConfig,
}
