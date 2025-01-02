import { ComponentConfig } from "@measured/puck"
import "ckeditor5/ckeditor5.css"
import { commonStylesProps } from "../../../lib/commonCSSProps"
import { CustomCounterProps, RenderConfig } from "./RenderConfig"

export const CustomCounter: ComponentConfig<CustomCounterProps> = {
  // @ts-ignore
  fields: {
    text: {
      label: "Custom Counter",
      type: "text",
    },
    subText: {
      label: "Sub Text",
      type: "text",
    },
    unit: {
      label: "Unit",
      type: "text",
    },
    ...commonStylesProps,
  },
  defaultProps: {
    text: "Default text",
    subText: "Default sub text",
    unit: "Default unit",
    className: "",
    styles: {
      mobile: { display: "block" },
      tablet: { display: "block" },
      desktop: { display: "block" },
    },
  },
  ...RenderConfig,
}
