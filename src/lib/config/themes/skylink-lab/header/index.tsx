"use client"

import { ComponentConfig } from "@measured/puck"
import { Button, message, Modal, Select } from "antd"
import { useEffect, useState } from "react"
import { configs, DefaultImage, filterOption, Media, MediaUpload } from "../../../../external-components"
import httpClient from "../../../../http-client"
import { commonStylesProps } from "../../../lib/commonCSSProps"
import { Pagination } from "../../../types"
import { RenderConfig, SKLLabHeaderProps } from "./RenderConfig"

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

const SelectMultiple = ({ value, onChange }: any) => {
  const [optionMenus, setOptionMenus] = useState<{ value: string; label: string }[]>([])

  const fetchCategory = async (paginate?: Pagination, searchTerm?: string) => {
    try {
      const fetchAllMenuPreference = async () => {
        try {
          const API_PREFIX_MENUPREFERENCE_PATH = "/api/menu-preferences"
          const response = await httpClient.get(`${API_PREFIX_MENUPREFERENCE_PATH}`, {
            params: {
              populate: "*",
              locale: "all",
            },
          })
          return response
        } catch (error) {
          message.error("Failed to fetch categories. Please try again.")
        }
      }
      const response = await fetchAllMenuPreference()
      setOptionMenus(
        (response as { data: { id: string; attributes: { name: string } }[] }).data.map(
          (category: { id: string; attributes: { name: string } }) => ({
            value: category.id as string,
            label: category.attributes.name,
          }),
        ),
      )
    } catch (err) {
      message.error("Failed to fetch Menus. Please try again.")
    }
  }

  useEffect(() => {
    fetchCategory()
  }, [])

  return (
    <Select
      showSearch
      style={{ minWidth: "14rem" }}
      placeholder="Select Category"
      optionFilterProp="children"
      filterOption={filterOption}
      options={optionMenus}
      allowClear
      value={value}
      onChange={onChange}
    />
  )
}

export const SKLLabHeader: ComponentConfig<SKLLabHeaderProps> = {
  label: "SKLLab | Header",
  //@ts-ignore
  fields: {
    img: {
      label: "Image",
      type: "custom",
      render: props => <ImageCard {...props} />,
    },
    imgTop: {
      label: "Image Top",
      type: "custom",
      render: props => <ImageCard {...props} />,
    },
    title: {
      label: "Title",
      type: "text",
    },
    idMenu: {
      type: "custom",
      label: "Menu ID",
      render: props => <SelectMultiple {...props} />,
    },
    titleButton: {
      label: "Title Button",
      type: "text",
    },
    urlIos: {
      label: "URL IOS",
      type: "text",
    },
    urlAndroid: {
      label: "URL Android",
      type: "text",
    },

    ...commonStylesProps,
  },
  defaultProps: {
    title: "Skylink Lab",
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
    idMenu: "17",
    titleButton: "Get the app",
    urlIos: "https://apps.apple.com/vn/app/magicswap-photo-editor-ai/id6504757719",
    urlAndroid: "https://play.google.com/store/apps/details?id=com.skylinklabs.magicswap&pli=1",
  },

  ...RenderConfig,
}
