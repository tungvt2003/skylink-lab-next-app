"use client"

import { ComponentConfig } from "@measured/puck"
import dynamic from "next/dynamic"
import { commonStylesProps } from "../../../lib/commonCSSProps"
import { ContentCardProps, RenderConfig } from "./RenderConfig"
const CKEditorComponent = dynamic(() => import("../../../lib/Ckeditor"), {
  ssr: false,
})

export const ContentCard: ComponentConfig<ContentCardProps> = {
  label: "Content Card",
  //@ts-ignore
  fields: {
    title: {
      label: "Title",
      type: "text",
    },
    items: {
      label: "description",
      type: "array",
      arrayFields: {
        content: {
          label: "Content",
          type: "custom",
          render: ({ value, onChange }) => {
            return <CKEditorComponent value={value || ""} onChange={onChange} />
          },
        },
      },
    },
    isListItem: {
      label: "List Item",
      type: "select",
      options: [
        { value: true, label: "Yes" },
        { value: false, label: "No" },
      ],
    },
    ...commonStylesProps,
  },
  defaultProps: {
    title: "Title",
    isListItem: false,
    items: [
      { content: "Lorem ipsum dolor sit nih amet consect" },
      { content: "Lorem ipsum dolor sit nih amet consect" },
    ],
    className: "",
  },
  ...RenderConfig,
}
