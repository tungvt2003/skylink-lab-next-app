import { ComponentConfig } from "@measured/puck"
import { HeadingProps, RenderConfig } from "./RenderConfig"

export const SKEContentDescription: ComponentConfig<HeadingProps> = {
  label: "SKE | Content Description",
  // @ts-expect-error
  fields: {
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
    // ...commonStylesProps, // Include common CSS props
  },
  defaultProps: {
    tag: "p",
    textSegments: [{ content: "Heading " }, { content: "Tail description" }], // Default text for the heading
    className: "",
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
