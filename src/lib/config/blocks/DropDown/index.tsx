import { ComponentConfig } from "@measured/puck"
import dynamic from "next/dynamic"
import { commonStylesProps } from "../../lib/commonCSSProps"
import { DropDownProps, RenderConfig } from "./RenderConfig"

const CKEditorComponent = dynamic(() => import("../../lib/Ckeditor"), {
  ssr: false,
})

export const DropDown: ComponentConfig<DropDownProps> = {
  label: "Drop Down",
  //@ts-ignore

  fields: {
    bulletDropDown: {
      label: "Bullet Drop Down",
      type: "radio",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
    // paddingHeader: {
    //   label: "Padding Header",
    //   type: "text",
    // },
    // paddingContent: {
    //   label: "Padding Content",
    //   type: "text",
    // },

    items: {
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
          label: "description",
          type: "custom",
          render: ({ value, onChange }) => {
            return <CKEditorComponent value={value || ""} onChange={onChange} />
          },
        },
      },
    },

    ...commonStylesProps,
  },
  defaultProps: {
    bulletDropDown: false,
    // paddingHeader: "20px 0px",
    // paddingContent: "py-5",
    // spacingBetween: "0px",
    items: [
      {
        title: "Lorem ipsum dolor sit nih amet consect",
        description: "Lorem ipsum dolor sit nih amet consect",
      },
      {
        title: "Lorem ipsum dolor sit nih amet consect",
        description: "Lorem ipsum dolor sit nih amet consect",
      },
    ],
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
