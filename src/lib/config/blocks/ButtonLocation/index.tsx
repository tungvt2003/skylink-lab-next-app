import { ComponentConfig } from "@measured/puck"
import { commonStylesProps } from "../../lib/commonCSSProps"
import { iconOptions } from "../../lib/icons"
import { ButtonLocationProps, RenderConfig } from "./RenderConfig"

export const ButtonLocation: ComponentConfig<ButtonLocationProps> = {
  label: "Button Location",
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
      type: "select", // Now a select field for popular icons
      options: iconOptions,
    },

    text: {
      label: "Text",
      type: "text", // Text input field
    },
    ...commonStylesProps,
  },
  defaultProps: {
    type: "primary",
    size: "medium",
    text: "Button Text", // Default text for the button
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
