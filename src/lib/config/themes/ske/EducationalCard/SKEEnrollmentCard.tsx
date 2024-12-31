"use client"

import { ComponentConfig } from "@measured/puck"
import dynamic from "next/dynamic"
import { commonStylesProps } from "../../../lib/commonCSSProps"
import { EducationalCard, RenderConfig } from "./RenderConfig"
const CKEditorComponent = dynamic(() => import("../../../lib/Ckeditor"), {
  ssr: false,
})
export const SKEEducationalCard: ComponentConfig<EducationalCard> = {
  label: "SKE | Educational Card",
  //@ts-ignore
  fields: {
    items: {
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
        description: {
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
    items: [
      {
        title: "Lorem ipsum dolor sit nih amet consect",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
        link: "#",
      },
      {
        title: "Lorem ipsum dolor sit nih amet consect",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
        link: "#",
      },
      {
        title: "Lorem ipsum dolor sit nih amet consect",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
        link: "#",
      },
      {
        title: "Lorem ipsum dolor sit nih amet consect",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
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
