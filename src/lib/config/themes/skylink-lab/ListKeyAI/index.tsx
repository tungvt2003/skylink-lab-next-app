"use client"

import { ComponentConfig } from "@measured/puck"
import { commonStylesProps } from "../../../lib/commonCSSProps"
import { ItemKeyAIProps, RenderConfig } from "./RenderConfig"

export const ListKeyAI: ComponentConfig<ItemKeyAIProps> = {
  label: "List Key AI",
  // @ts-expect-error
  fields: {
    items: {
      label: "List items",
      type: "array",
      max: 3,
      min: 3,
      getItemSummary: (Items, index = 0) => `Items: ${index + 1}`,
      arrayFields: {
        title: {
          label: "Title",
          type: "text",
        },
        position: {
          label: "Position",
          type: "select",
          options: [
            {
              label: "Left",
              value: "left",
            },
            {
              label: "Right",
              value: "right",
            },
          ],
        },
      },
    },
    ...commonStylesProps,
  },
  defaultProps: {
    className: "",
    items: [
      {
        title: "Item 1",
        position: "left",
      },
      {
        title: "Item 2",
        position: "right",
      },
      {
        title: "Item 3",
        position: "left",
      },
    ],
  },
  ...RenderConfig,
}
