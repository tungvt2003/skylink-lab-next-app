"use client"
import { ComponentConfig } from "@measured/puck"
import { Button, Modal } from "antd"
import { useState } from "react"
import { configs, DefaultImage, Media, MediaUpload } from "../../../../external-components"
import { commonStylesProps } from "../../../lib/commonCSSProps"
import getClassNameFactory from "../../../lib/get-class-name-factory"
import styles from "./css/styles.module.css"
import { RenderConfig, SliderScrollProps } from "./RenderConfig"

const getClassName = getClassNameFactory("SimpleSlider", styles)

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

export const SliderScroll: ComponentConfig<SliderScrollProps> = {
  label: "MANU | Slider Scroll",
  //@ts-ignore
  fields: {
    slides: {
      label: "Slides",
      type: "array",
      getItemSummary: (slides, index = 0) => `Slide: ${index + 1}`,
      arrayFields: {
        image: {
          label: "Image",
          type: "custom",
          render: props => <SlideItem {...props} />,
        },
        url: {
          label: "Link",
          type: "text",
        },
      },
    },
    spaceBetween: {
      label: "Space Between Slides (px)",
      type: "number",
      min: 0,
    },
    slidesPerView: {
      label: "Slides Per View",
      type: "number",
      min: 1,
    },
    loop: {
      label: "Loop",
      type: "select",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
    speed: {
      label: "Speed (ms)",
      type: "number",
      min: 0,
    },
    timeDelay: {
      label: "Time Delay (ms)",
      type: "number",
      min: 0,
    },
    pagination: {
      label: "Pagination",
      type: "select",
      options: [
        { label: "Default", value: "default" },
        { label: "Custom", value: "custom" },
      ],
    },
    ...commonStylesProps,
  },
  defaultProps: {
    slides: [
      {
        id: 1,
        url: "",
      },
      {
        id: 2,
        url: "",
      },
    ],
    spaceBetween: 30,
    slidesPerView: 1,
    speed: 600,
    timeDelay: 3500,
    pagination: "default",
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
