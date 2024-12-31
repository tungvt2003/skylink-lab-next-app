import { ComponentConfig } from "@measured/puck"
import { HeadingProps, RenderConfig } from "./RenderConfig"

// Define a type for text segments with custom styles

export const SKETitle: ComponentConfig<HeadingProps> = {
  label: "SKE | Section Heading",
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
    textSegments: {
      label: "Text Segments",
      type: "array", // Array of text segments
      min: 2,
      max: 2,
      arrayFields: {
        content: {
          label: "Text",
          type: "text",
        },
      },
    },
    colorRevert: {
      label: "Color Revert",
      type: "radio",
      options: [
        { value: false, label: "Default" },
        { value: true, label: "Revert" },
      ],
    },
    className: {
      label: "Class Name",
      type: "text",
    },
    // ...commonStylesProps, // Include common CSS props
  },
  defaultProps: {
    tag: "h1",
    textSegments: [{ content: "Heading " }, { content: "Tail" }], // Default text for the heading
    className: "",
    colorRevert: false,
    // styles: {
    //   mobile: {
    //     display: "block",
    //   },
    //   tablet: {
    //     display: "block",
    //   },
    //   desktop: {
    //     display: "block",
    //   },
    // },
  },
  ...RenderConfig,
}
