import { ComponentConfig } from "@measured/puck"
import { HeadingProps, RenderConfig } from "./RenderConfig"

export const SKEContentText: ComponentConfig<HeadingProps> = {
  label: "SKE | Content Text",
  // @ts-expect-error
  fields: {
    tag: {
      label: "Type",
      type: "select",
      options: [
        { value: "p", label: "p" },
        { value: "span", label: "span" },
      ],
    },
    text: {
      label: "Text",
      type: "textarea",
    },
  },
  defaultProps: {
    tag: "p",
    text: "",
    className: "",
  },
  ...RenderConfig,
}
