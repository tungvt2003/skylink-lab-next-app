import { ComponentConfig } from "@measured/puck"
import dynamic from "next/dynamic"
import { RelationshipLayoutProps, RenderConfig } from "./RenderConfig"

const CKEditorComponent = dynamic(() => import("../../../lib/Ckeditor"), {
  ssr: false,
})
export const RelationshipLayout: ComponentConfig<RelationshipLayoutProps> = {
  label: "SKE | Relationship Layout",
  fields: {
    items: {
      label: "List items",
      type: "array",
      max: 3,
      min: 3,
      arrayFields: {
        title: {
          label: "Title",
          type: "custom",
          render: ({ value, onChange }) => {
            return <CKEditorComponent value={value || ""} onChange={onChange} />
          },
        },
        description: {
          label: "Sub Description",
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
      },
    },
  },
  defaultProps: {
    items: [
      {
        id: 1,
        title: "Title 1",
        description: [{ content: "Lorem ipsum dolor sit amet" }],
      },
    ],
    height: 500,
  },
  ...RenderConfig,
}
