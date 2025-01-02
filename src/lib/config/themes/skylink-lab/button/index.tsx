"use client"

import { ComponentConfig } from "@measured/puck"
import { commonStylesProps } from "../../../lib/commonCSSProps"
import { BannerProps, RenderConfig } from "./RenderConfig"

export const ButtonSKLLab: ComponentConfig<BannerProps> = {
  label: "Button SKL-Lab",
  // @ts-expect-error
  fields: {
    hoverEffect: {
      label: "Banner Image",
      type: "select",
      options: [
        {
          value: "reverseColor",
          label: "Reverse Color",
        },
        {
          value: "changeColor",
          label: "Change Color",
        },
      ],
    },
    buttonLabel: {
      label: "Button Label",
      type: "text",
    },
    linkUrl: {
      label: "Link Url",
      type: "text",
    },
    ...commonStylesProps,
  },
  defaultProps: {
    hoverEffect: "reverseColor",
    buttonLabel: "Learn more",
    linkUrl: "",
    className: "",
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
