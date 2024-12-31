import { ComponentConfig } from "@measured/puck"
import { RenderConfig, VericalSpaceProps } from "./RenderConfig"

export const VericalSpace: ComponentConfig<VericalSpaceProps> = {
  label: "Vertical Space",
  fields: {
    heightMobile: {
      label: "Height on Mobile",
      type: "text",
    },
    heightTablet: {
      label: "Height on Tablet",
      type: "text",
    },
    height: {
      label: "Height on Desktop",
      type: "text",
    },
    className: {
      type: "text",
      label: "Class Name",
    },
  },
  defaultProps: {
    className: "",
    height: "4rem",
    heightMobile: "4rem",
    heightTablet: "4rem",
  },
  ...RenderConfig,
}
