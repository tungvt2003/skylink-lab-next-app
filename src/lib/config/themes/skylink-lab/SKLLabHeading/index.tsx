"use client"

import { ComponentConfig } from "@measured/puck"
import dynamic from "next/dynamic"
import { commonStylesProps, CommonStylesProps } from "../../../lib/commonCSSProps"
import { RenderConfig } from "./RenderConfig"
const CKEditorComponent = dynamic(() => import("../../../lib/Ckeditor"), {
  ssr: false,
})

export interface HeadingProps extends CommonStylesProps {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  text: string
}

export const SKLLabHeading: ComponentConfig<HeadingProps> = {
  // @ts-ignore
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
      type: "custom",
      render: ({ value, onChange }) => {
        return <CKEditorComponent value={value} onChange={onChange} />
      },
    },
    ...commonStylesProps,
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
