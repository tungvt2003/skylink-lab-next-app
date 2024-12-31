import { ComponentConfig } from "@measured/puck"
import { commonStylesProps } from "../../lib/commonCSSProps"
import { HeadingProps, RenderConfig } from "./RenderConfig"

export const Heading: ComponentConfig<HeadingProps> = {
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
      type: "text", // Array of text segments
    },
    ...commonStylesProps, // Include common CSS props
  },
  defaultProps: {
    tag: "h1",
    text: "Heading Text",
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
