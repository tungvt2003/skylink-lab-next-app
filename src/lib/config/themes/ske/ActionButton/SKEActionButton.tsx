import { ComponentConfig } from "@measured/puck"
import { iconOptions } from "../../../lib/icons"
import { ButtonProps, RenderConfig } from "./RenderConfig"

export const SKEActionButton: ComponentConfig<ButtonProps> = {
  label: "SKE | Action Button",
  //@ts-ignore
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
      type: "text", // Text input field
    },
  },
  defaultProps: {
    type: "primary",
    size: "medium",
    iconPosition: "right",
    icon: "ArrowRightOutlined",
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
