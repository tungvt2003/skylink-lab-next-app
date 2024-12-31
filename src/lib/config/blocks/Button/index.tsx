import { ComponentConfig } from "@measured/puck"
import { commonStylesProps } from "../../lib/commonCSSProps"
import { iconOptions } from "../../lib/icons-svg"
import { ButtonProps, RenderConfig } from "./RenderConfig"

export const Button: ComponentConfig<ButtonProps> = {
  label: "Button",
  // @ts-expect-error
  fields: {
    type: {
      label: "Button Type",
      type: "select",
      options: [
        { value: "primary", label: "Primary" },
        { value: "secondary", label: "Secondary" },
      ],
    },
    size: {
      label: "Size",
      type: "select",
      options: [
        { value: "small", label: "Small" },
        { value: "medium", label: "Medium" },
        { value: "large", label: "Large" },
      ],
    },
    icon: {
      label: "Icon",
      type: "select",
      options: iconOptions,
    },
    iconPosition: {
      label: "Icon Position",
      type: "select",
      options: [
        { value: "left", label: "Left" },
        { value: "right", label: "Right" },
      ],
    },
    text: {
      label: "Text",
      type: "text",
    },
    link: {
      label: "Link",
      type: "text",
    },
    ...commonStylesProps,
  },
  defaultProps: {
    type: "primary",
    size: "medium",
    iconPosition: "left",
    text: "Button Text",
    className: "flex items-center gap-2",
    styles: {
      mobile: {
        display: "flex",
      },
      tablet: {
        display: "flex",
      },
      desktop: {
        display: "flex",
      },
    },
  },
  ...RenderConfig,
}
