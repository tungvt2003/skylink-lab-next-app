import { ComponentConfig } from "@measured/puck"
import { commonStylesProps } from "../../lib/commonCSSProps"
import { RenderConfig, TextProps } from "./RenderConfig"

export const Text: ComponentConfig<TextProps> = {
  // @ts-expect-error
  fields: {
    text: {
      label: "Text",
      type: "textarea", // Text input field
    },
    ...commonStylesProps, // Include common CSS props
  },
  defaultProps: {
    text: "Default text", // Default text
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
