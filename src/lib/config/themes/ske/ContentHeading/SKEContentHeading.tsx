import { ComponentConfig } from "@measured/puck"
import { HeadingProps, RenderConfig } from "./RenderConfig"



export const SKEContentHeading: ComponentConfig<HeadingProps> = {
  label: "SKE | Content Heading",
  // @ts-expect-error
  fields: {
    tag: {
      label: "Heading Type",
      type: "select",
      options: [
        { value: "h1", label: "H1" },
        { value: "h2", label: "H2" },
        { value: "h3", label: "H3" },
        { value: "h4", label: "H4" },
        { value: "h5", label: "H5" },
        { value: "h6", label: "H6" },
      ],
    },
    text: {
      label: "Text",
      type: "text",
    },
  },
  defaultProps: {
    tag: "h3",
    text: "Heading Tail",
    className: "",
  },
  ...RenderConfig
}
