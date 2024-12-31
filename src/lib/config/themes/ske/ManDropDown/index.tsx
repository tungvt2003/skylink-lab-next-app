import { ComponentConfig } from "@measured/puck"
import { commonStylesProps } from "../../../lib/commonCSSProps"
import { DropDownProps, RenderConfig } from "./RenderConfig"

export const ManDropDown: ComponentConfig<DropDownProps> = {
  label: "ManDrop Down",
  //@ts-ignore
  fields: {
    items: {
      label: "Items",
      type: "array",
      arrayFields: {
        title: {
          label: "Label",
          type: "text",
        },
        description: {
          label: "Value",
          type: "text",
        },
      },
    },
    ...commonStylesProps,
  },
  defaultProps: {
    items: [
      {
        title: "Lorem ipsum dolor sit nih amet consect",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut",
      },
      {
        title: "Lorem ipsum dolor sit nih amet consect",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut",
      },
    ],
    className: "",
    styles: {
      mobile: {
        display: "block",
      },
      tablet: {
        display: "block",
      },
      desktop: {
        display: "block",
      },
    },
  },
  ...RenderConfig,
}
