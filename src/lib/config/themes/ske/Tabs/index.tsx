"use client"
import { ComponentConfig } from "@measured/puck"
import { Button, Modal, Select } from "antd"
import { useEffect, useState } from "react"
import { configs, DefaultImage, filterOption, Media, useUiBuilder } from "../../../../external-components"
import { commonStylesProps } from "../../../lib/commonCSSProps"
import { RenderConfig, TabsProps } from "./RenderConfig"

export const ImageCard = ({ value, onChange }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [url, setUrl] = useState(value || "")

  const openModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  const handleSelectMedia = (media: { url: string }) => {
    const selectedUrl = media.url
    setUrl(selectedUrl)
    onChange(selectedUrl) // Gửi giá trị đã chọn lên trên
    handleCloseModal()
  }

  return (
    <div>
      <div className="flex flex-col gap-2">
        <input type="text" value={url} onChange={e => onChange(e.target.value)} placeholder="Image URL" readOnly />
        <div className="relative cursor-pointer group" onClick={openModal}>
          <img
            src={url ? `${configs.API_URL}${url}` : DefaultImage}
            alt="Image"
            className="rounded-lg max-h-96 cursor-pointer transition duration-300 ease-in-out group-hover:blur-sm overflow-hidden"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <span className="text-white text-3xl font-semibold drop-shadow-md">Change media</span>
          </div>
        </div>
        <Button
          onClick={openModal}
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
        <Media isOpenModal={true} onSelectMedia={handleSelectMedia} />
      </Modal>
    </div>
  )
}

export const SKECustomTabs: ComponentConfig<TabsProps> = {
  label: "SKE | Tabs",
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
          render: (props: any) => <ImageCard {...props} />, // Component chỉ chọn 1 ảnh
        },
        imageActive: {
          label: "Image Active",
          type: "custom",
          render: (props: any) => <ImageCard {...props} />, // Component chỉ chọn 1 ảnh
        },
      },
    },
    ...commonStylesProps,
  },
  defaultProps: {
    tabs: [
      { label: "Tab 1", image: "", imageActive: "" },
      { label: "Tab 2", image: "", imageActive: "" },
    ],
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
