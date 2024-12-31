"use client"

import * as Icons from "@ant-design/icons" // Import all Ant Design icons
import { ComponentConfig } from "@measured/puck"
import { CommonStylesProps, commonStylesProps } from "../../lib/commonCSSProps"
import { iconOptions } from "../../lib/icons"
import { RenderConfig } from "./RenderConfig"

export interface IconProps extends CommonStylesProps {
  size?: "small" | "medium" | "large"
  icon?: keyof typeof Icons
  text?: string
  url?: string
}

export const IconSocial: ComponentConfig<IconProps> = {
  // @ts-ignore
  fields: {
    icon: {
      label: "Icon",
      type: "select",
      options: iconOptions,
    },
    url: {
      label: "URL",
      type: "text",
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
    ...commonStylesProps,
  },
  defaultProps: {
    size: "medium",
    className: "p-[0.625rem] border rounded-[0.5rem] border-gray-tertiary bg-transparent hover:bg-transparent",
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
