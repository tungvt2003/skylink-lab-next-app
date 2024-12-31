"use client"

import { ComponentConfig } from "@measured/puck"
import { Button, Modal } from "antd"
import { useState } from "react"
import { configs, DefaultImage, Media, MediaUpload } from "../../../../external-components"
import getClassNameFactory from "../../../lib/get-class-name-factory"
import { GalleryLayoutProps, RenderConfig } from "./RenderConfig"
import styles from "./styles.module.css"

const getClassName = getClassNameFactory("GalleryLayout", styles)

const SlideItem = ({ value, onChange }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isChooseMedia, setIsChooseMedia] = useState(true)
  const [urls, setUrls] = useState(value || [])

  const openModal = () => setIsModalOpen(true)

  const handleSelectMedia = (media: { url: string }) => {
    setUrls((prev: string[]) => [...prev, media.url])
    onChange([...urls, media.url])
    setIsModalOpen(false)
  }

  const handleCloseModal = () => setIsModalOpen(false)

  const removeImage = (index: number) => {
    const updatedUrls = urls.filter((_: any, i: number) => i !== index)
    setUrls(updatedUrls)
    onChange(updatedUrls)
  }

  return (
    <div className={getClassName("imageInput")}>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-3 gap-2">
          {urls.map((url: string, index: number) => (
            <div key={index} className="relative group">
              <img
                src={url ? `${configs.API_URL}${url}` : DefaultImage}
                alt="Preview"
                className={`${getClassName(
                  "imagePreview",
                )} rounded-lg max-h-48 cursor-pointer transition duration-300 ease-in-out group-hover:blur-sm overflow-hidden`}
              />
              <button
                onClick={() => removeImage(index)}
                className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 text-sm"
              >
                X
              </button>
            </div>
          ))}
        </div>

        <Button
          onClick={() => openModal()}
          type="default"
          variant="outlined"
          className="bg-blue text-white p-4 border-[1px] border-blue rounded-[3px] hover:bg-blue-800 hover:text-white duration-300 my-2"
        >
          Add Image
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

export const SKELPGalleryLayout: ComponentConfig<GalleryLayoutProps> = {
  label: "SKELP | Image Gallery",
  fields: {
    items: {
      label: "List items",
      type: "array",
      max: 5,
      min: 5,
      getItemSummary: (Items, index = 0) => `Items: ${index + 1}`,
      arrayFields: {
        images: {
          label: "Images",
          type: "custom",
          render: props => <SlideItem {...props} />,
        },
        url: {
          label: "Link",
          type: "text",
        },
      },
    },
  },
  defaultProps: {
    items: [
      {
        id: 1,
        url: "/",
      },
      {
        id: 2,
        url: "/",
      },
      {
        id: 3,
        url: "/",
      },
      {
        id: 4,
        url: "/",
      },
      {
        id: 5,
        url: "/",
      },
    ],
  },
  ...RenderConfig,
}
