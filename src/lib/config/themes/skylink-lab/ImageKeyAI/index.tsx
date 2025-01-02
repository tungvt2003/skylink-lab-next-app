"use client"
import { ComponentConfig } from "@measured/puck"
import { Button, Modal } from "antd"
import { useState } from "react"
import { configs, DefaultImage, Media, MediaUpload } from "../../../../external-components"
import { commonStylesProps } from "../../../lib/commonCSSProps"
import getClassNameFactory from "../../../lib/get-class-name-factory"
import { ImageKeyAIProps, RenderConfig } from "./RenderConfig"
import styles from "./styles.module.css"

const getClassName = getClassNameFactory("ImageKeyAI", styles)

const SlideItem = ({ value, onChange }: any) => {
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

export const ImageKeyAI: ComponentConfig<ImageKeyAIProps> = {
  label: "Image Key AI",
  //@ts-ignore
  fields: {
    imageUrl: {
      label: "Image",
      type: "custom",
      render: props => <SlideItem {...props} />,
    },
    heightMobile: { label: "Height on Mobile", type: "text" },
    heightTablet: { label: "Height on Tablet", type: "text" },
    heightStyle: { label: "Height on Desktop", type: "text" },
    witdhMobile: { label: "Width on Mobile", type: "text" },
    widthTablet: { label: "Width on Tablet", type: "text" },
    widthDesktop: { label: "Width on Desktop", type: "text" },
    borderRadius: { label: "Border Radius", type: "text" },
    padding: { label: "Padding", type: "text" },
    margin: { label: "Margin", type: "text" },
    border: { label: "Border", type: "text" },
    multiple: {
      label: "Multiple",
      type: "radio",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
    objectFit: {
      label: "Object Fit",
      type: "select",
      options: [
        {
          label: "Cover",
          value: "cover",
        },
        {
          label: "Contain",
          value: "contain",
        },
        {
          label: "Fill",
          value: "fill",
        },
        {
          label: "None",
          value: "none",
        },
        {
          label: "Scale Down",
          value: "scale-down",
        },
      ],
    },

    ...commonStylesProps, // Include common CSS props
  },
  defaultProps: {
    padding: "0px",
    heightStyle: "auto",
    witdhMobile: "100%",
    borderRadius: "0px",
    border: "0px",
    multiple: false,
    objectFit: "cover",
    className: "",
  },
  ...RenderConfig,
}
