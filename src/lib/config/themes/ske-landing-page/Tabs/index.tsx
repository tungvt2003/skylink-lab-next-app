"use client"
import { ComponentConfig } from "@measured/puck"
import { Button, Modal, Select } from "antd"
import { useEffect, useState } from "react"
import { configs, DefaultImage, filterOption, Media, MediaUpload, useUiBuilder } from "../../../../external-components"
import { commonStylesProps } from "../../../lib/commonCSSProps"
import { RenderConfig, TabsProps } from "./RenderConfig"

export const ImageCard = ({ value, onChange }: any) => {
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
    <div>
      <div className="flex flex-col gap-2">
        <input type="text" value={url} onChange={e => onChange(e.target.value)} placeholder="Image URL" readOnly />
        <div className="relative cursor-pointer group" onClick={() => openModal()}>
          <img
            src={url ? `${configs.API_URL}${url}` : DefaultImage}
            alt="Image"
            className={`rounded-lg max-h-96 cursor-pointer transition duration-300 ease-in-out group-hover:blur-sm overflow-hidden`}
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

export const SKELPCustomTabs: ComponentConfig<TabsProps> = {
  label: "SKELP | Tabs",
  //@ts-ignore
  fields: {
    tabs: {
      label: "Tabs",
      type: "array",
      arrayFields: {
        label: {
          label: "Label",
          type: "text",
        },
        idTemplate: {
          type: "custom",
          label: "Select Template",
          render: props => <SelectMultiple {...props} />,
        },
        image: {
          label: "Image",
          type: "custom",
          render: (props: any) => <ImageCard {...props} />,
        },
      },
    },
    ...commonStylesProps,
  },
  defaultProps: {
    tabs: [{ label: "Tab 1" }, { label: "Tab 2" }],
    className: "",
    styles: {
      mobile: { display: "block" },
      tablet: { display: "block" },
      desktop: { display: "flex" },
    },
  },
  ...RenderConfig,
}

const SelectMultiple = ({ value, onChange }: any) => {
  const [optionTemplate, setOptionTemplate] = useState<{ value: string; label: string }[]>([])
  const { fetchBlockContentTemplate } = useUiBuilder()

  const fetchData = async () => {
    try {
      const response = await fetchBlockContentTemplate()
      if (Array.isArray(response.data)) {
        setOptionTemplate(
          response.data.map(template => ({ value: template.id as string, label: template.attributes.templateName })),
        )
      } else {
        setOptionTemplate([])
      }
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Select
      showSearch
      style={{ minWidth: "14rem" }}
      placeholder="Select Category"
      optionFilterProp="children"
      filterOption={filterOption}
      options={optionTemplate}
      allowClear
      value={value}
      onChange={onChange}
    />
  )
}
