"use client"

import { ComponentConfig } from "@measured/puck"
import { Button, Modal } from "antd"
import dynamic from "next/dynamic"
import { useState } from "react"
import { configs, DefaultImage, Media, MediaUpload } from "../../../../external-components"
import getClassNameFactory from "../../../lib/get-class-name-factory"
import { EnhancedIconBoxProps, RenderConfig } from "./RenderConfig"
import styles from "./styles.module.css"

const CKEditorComponent = dynamic(() => import("../../../lib/Ckeditor"), {
  ssr: false,
})

const getClassName = getClassNameFactory("IconBox", styles)

const ImageItem = ({ value, onChange }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isChooseMedia, setIsChooseMedia] = useState(true)
  const [url, setUrl] = useState(value)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const handleSelectMedia = (media: { url: string }) => {
    setUrl(media.url)
    onChange(media.url)
    setIsModalOpen(false)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className={getClassName("imageInput")}>
      <div className="flex flex-col gap-2">
        <input type="text" value={url} onChange={e => onChange(e.target.value)} placeholder="Image URL" readOnly />
        <div className="relative cursor-pointer group" onClick={() => openModal()}>
          <img
            src={url ? `${configs.API_URL}${url}` : DefaultImage}
            alt="Image"
            className={`${getClassName(
              "imagePreview",
            )} rounded-lg max-h-96 cursor-pointer transition duration-300 ease-in-out group-hover:blur-sm overflow-hidden`}
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <span className="text-white text-3xl font-semibold drop-shadow-md">Change media</span>
          </div>
        </div>

        <Button
          onClick={() => openModal()}
          type="default"
          variant="outlined"
          className="bg-blue text-white p-4 border-[1px] border-blue rounded-[3px] hover:bg-blue-800 hover:text-white duration-300 my-2"
        >
          Select Image
        </Button>
      </div>

      <Modal
        open={isModalOpen}
        title={<span className="ml-4">Select Media</span>}
        onCancel={handleCloseModal}
        style={{ top: 20 }}
        width="95%"
        footer={null}
      >
        <div className="ml-4 mt-5">
          <Button
            onClick={() => setIsChooseMedia(true)}
            className="mr-2"
            style={{
              backgroundColor: isChooseMedia ? "blue" : "initial",
              color: isChooseMedia ? "white" : "initial",
            }}
          >
            Select Media
          </Button>
          <Button
            onClick={() => setIsChooseMedia(false)}
            style={{
              backgroundColor: !isChooseMedia ? "blue" : "initial",
              color: !isChooseMedia ? "white" : "initial",
            }}
          >
            Upload Media
          </Button>
        </div>
        <div>
          {isChooseMedia ? (
            <Media isOpenModal={true} onSelectMedia={handleSelectMedia} />
          ) : (
            <MediaUpload isOpenModal={true} setChooseMedia={setIsChooseMedia} />
          )}
        </div>
      </Modal>
    </div>
  )
}

export const EnhancedIconBox: ComponentConfig<EnhancedIconBoxProps> = {
  label: "Enhanced Icon Box",
  fields: {
    image: {
      label: "Image",
      type: "custom",
      render: props => <ImageItem {...props} />,
    },
    title: {
      label: "Title",
      type: "text",
    },
    description: {
      label: "Description",
      type: "custom",
      render: ({ value, onChange }) => {
        return <CKEditorComponent value={value || ""} onChange={onChange} />
      },
    },

    justifyContent: {
      label: "Justify Content",
      type: "select",
      options: [
        { value: "flex-start", label: "Start" },
        { value: "center", label: "Center" },
        { value: "flex-end", label: "End" },
        { value: "space-around", label: "Space Around" },
        { value: "space-between", label: "Space Between" },
      ],
    },
    alignItems: {
      label: "Align Items",
      type: "select",
      options: [
        { value: "baseline", label: "Baseline" },
        { value: "flex-start", label: "Start" },
        { value: "center", label: "Center" },
        { value: "flex-end", label: "End" },
        { value: "stretch", label: "Stretch" },
      ],
    },
    fontSizeMobile: {
      label: "Font Size Mobile",
      type: "text",
    },
    fontSizeDesktop: {
      label: "Font Size Desktop",
      type: "text",
    },
    fontWeightMobile: {
      label: "Font Weight Mobile",
      type: "text",
    },
    fontWeightDesktop: {
      label: "Font Weight Desktop",
      type: "text",
    },
    lineHeightMobile: {
      label: "Line Height Mobile",
      type: "text",
    },
    lineHeightDesktop: {
      label: "Line Height Desktop",
      type: "text",
    },
    paddingTextMobile: {
      label: "Padding Text Mobile",
      type: "text",
    },
    paddingTextDesktop: {
      label: "Padding Text Desktop",
      type: "text",
    },
    className: {
      label: "Class Name",
      type: "text",
    },
    backgroundColor: {
      label: "Background Color",
      type: "text",
    },
    color: {
      label: "Text Color",
      type: "text",
    },
  },
  defaultProps: {
    title: "Title",
    justifyContent: "center",
    alignItems: "center",
    fontSizeMobile: "16px",
    fontSizeDesktop: "24px",
    fontWeightMobile: "400",
    fontWeightDesktop: "600",
    lineHeightMobile: "22px",
    lineHeightDesktop: "36px",
    paddingTextDesktop: "24px",
    paddingTextMobile: "16px",
    className: "",
    backgroundColor: "white",
  },
  ...RenderConfig,
}
