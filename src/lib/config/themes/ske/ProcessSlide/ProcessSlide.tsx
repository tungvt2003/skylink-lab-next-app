"use client"

import { ComponentConfig } from "@measured/puck"
import dynamic from "next/dynamic"
import { commonStylesProps } from "../../../lib/commonCSSProps"
import { EducationalCard, RenderConfig } from "./RenderConfig"

const CKEditorComponent = dynamic(() => import("../../../lib/Ckeditor"), {
  ssr: false,
})

export const SKEProcessSlide: ComponentConfig<EducationalCard> = {
  label: "SKE | Process Slide",
  //@ts-ignore
  fields: {
    steps: {
      min: 1,
      label: "Items",
      type: "array",
      arrayFields: {
        title: {
          label: "Title",
          type: "custom",
          render: ({ value, onChange }) => {
            return <CKEditorComponent value={value || ""} onChange={onChange} />
          },
        },
        content: {
          label: "Description",
          type: "custom",
          render: ({ value, onChange }) => {
            return <CKEditorComponent value={value || ""} onChange={onChange} />
          },
        },

        link: {
          label: "Link (slug)",
          type: "text",
        },
      },
    },

    ...commonStylesProps,
  },
  defaultProps: {
    steps: [
      {
        id: 1,
        title: "Lorem ipsum dolor sit nih amet consect",
        content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
        link: "#",
      },
      {
        id: 2,
        title: "Lorem ipsum dolor sit nih amet consect",
        content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
        link: "#",
      },
      {
        id: 3,
        title: "Lorem ipsum dolor sit nih amet consect",
        content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
        link: "#",
      },
    ],
    className: "flex items-center gap-2",
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
