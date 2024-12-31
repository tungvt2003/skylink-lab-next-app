import { ComponentConfig } from "@measured/puck"
import { commonStylesProps, CommonStylesProps } from "../../lib/commonCSSProps"
import { RenderConfig } from "./RenderConfig"

export interface BoxProps extends CommonStylesProps {}

export const Box: ComponentConfig<BoxProps> = {
  label: "Box",
  // @ts-expect-error
  fields: {
    ...commonStylesProps,
  },
  defaultProps: {
    className: "",
  },
  ...RenderConfig,
}
