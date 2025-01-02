"use client"

import { ComponentConfig } from "@measured/puck"
import { commonStylesProps } from "../../../lib/commonCSSProps"
import { CollapseProp, RenderConfig } from "./RenderConfig"

export const CollapseSKLLab: ComponentConfig<CollapseProp> = {
  label: "Collapse Custom",
  // @ts-expect-error
  fields: {
    collapseData: {
      label: "Collapse Data",
      type: "array",
      arrayFields: {
        question: {
          label: "Question",
          type: "text",
        },
        answer: {
          label: "Answer",
          type: "text",
        },
      },
    },

    ...commonStylesProps,
  },
  defaultProps: {
    collapseData: [
      {
        question: "Default question text",
        answer: "Default answer text",
      },
    ],
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
