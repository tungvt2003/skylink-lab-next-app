"use client"
import { ComponentConfig } from "@measured/puck"
import { Button, Modal } from "antd"
import { useState } from "react"
import { configs, DefaultImage, Media, MediaUpload } from "../../../../external-components"
import { RenderConfig, SKETabBlockWithMediaProps } from "./RenderConfig"

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
            className={`rounded-lg max-h-32 cursor-pointer transition duration-300 ease-in-out group-hover:blur-sm overflow-hidden`}
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

export const SKETabBlockWithMedia: ComponentConfig<SKETabBlockWithMediaProps> = {
  label: "SKE | Tab Block With Media",
  fields: {
    items: {
      min: 1,
      label: "Add Item",
      type: "array",
      getItemSummary: (item, index = 0) => `${index + 1}. ${item.title && item.title}`,
      arrayFields: {
        title: {
          label: "Title",
          type: "text",
        },
        icon: {
          label: "Icon Normal",
          type: "custom",
          render: props => <ImageCard {...props} />,
        },
        iconHover: {
          label: "Icon Hover",
          type: "custom",
          render: props => <ImageCard {...props} />,
        },
        description: {
          label: "Description",
          type: "text",
        },
        img: {
          label: "Image",
          type: "custom",
          render: props => <ImageCard {...props} />,
        },
      },
    },
    className: {
      label: "Class Name",
      type: "text",
    },
    // ...commonStylesProps, // Include common CSS props
  },
  defaultProps: {
    items: [
      {
        title: "Lorem ipsum dolor sit amet",
        icon: "",
        iconHover: "",
        description:
          "Our unique referral mechanism incentivizes talent to recommend their peers for job opportunities. Successful referrals are rewarded with cryptocurrency, fostering a collaborative community.",
        img: "",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        icon: "",
        iconHover: "",
        description:
          " We offer a state-of-the-art AI-driven career assessment tool to attract and identify top talent.",
        img: "",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        icon: "",
        iconHover: "",
        description: "Our platform serves as Vietnam's leading job board for blockchain, crypto, and web3 positions.",
        img: "",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        icon: "",
        iconHover: "",
        description:
          "Hiring companies can seamlessly post jobs and manage candidates through our integrated application tracking system (ATS).",
        img: "",
      },
    ],
    className: "",
  },
  ...RenderConfig,
}
