import { ComponentConfig } from "@measured/puck"
import { commonStylesProps } from "../../lib/commonCSSProps"
import { ContainerProps, RenderConfig } from "./RenderConfig"

export const Container: ComponentConfig<ContainerProps> = {
  label: "Container",
  // @ts-expect-error
  fields: {
    type: {
      label: "Type",
      type: "select",
      options: [
        { value: "boxed", label: "Boxed Width" },
        { value: "fluid", label: "Fluid" },
        { value: "custom", label: "Custom Width" },
      ],
    },
    ...commonStylesProps,
  },
  defaultProps: {
    type: "fluid",
    className: "",
  },
  ...RenderConfig,
}
