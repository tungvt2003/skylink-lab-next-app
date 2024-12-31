"use client"
import { ComponentConfig } from "@measured/puck"
import { Button, Modal } from "antd"
import { useState } from "react"
import { configs, DefaultImage, Media, MediaUpload } from "../../../../external-components"
import { EnrollmentProcessProps, RenderConfig } from "./RenderConfig"

export const ImageEnrollmentProcess = ({ value, onChange }: any) => {
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
    // <div className={getClassName("imageInput")}>
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

export const SKEEnrollmentProcess: ComponentConfig<EnrollmentProcessProps> = {
  label: "SKE | Enrollment Process",
  fields: {
    firtsStep: {
      label: "Step #1",
      type: "object",
      objectFields: {
        title: {
          label: "Title",
          type: "textarea",
        },
        icon: {
          label: "Icon",
          type: "custom",
          render: props => (
            <>
              <strong>Icon</strong>
              <ImageEnrollmentProcess {...props} />
            </>
          ),
        },
      },
    },
    secondStep: {
      label: "Step #2",
      type: "object",
      objectFields: {
        title: {
          label: "Title",
          type: "textarea",
        },
        content: {
          label: "Content",
          type: "textarea",
        },
        icon: {
          label: "Icon",
          type: "custom",
          render: props => (
            <>
              <strong>Icon</strong>
              <ImageEnrollmentProcess {...props} />
            </>
          ),
        },

        img: {
          label: "Image",
          type: "custom",
          render: props => (
            <>
              <strong>Image</strong>
              <ImageEnrollmentProcess {...props} />
            </>
          ),
        },
        note: {
          label: "Note",
          type: "textarea",
        },
      },
    },
    thirdStep: {
      label: "Step #3",
      type: "object",
      objectFields: {
        title: {
          label: "Title",
          type: "textarea",
        },
        icon: {
          label: "Icon",
          type: "custom",
          render: props => (
            <>
              <strong>Icon</strong>
              <ImageEnrollmentProcess {...props} />
            </>
          ),
        },

        content: {
          label: "Content",
          type: "textarea",
        },
        note: {
          label: "Note",
          type: "textarea",
        },
      },
    },
    // ...commonStylesProps,
  },

  defaultProps: {
    firtsStep: {
      title: "Đăng ký dự tuyển và đóng phí xét tuyển",
      icon: "",
    },
    secondStep: {
      title: "Xét tuyển",
      content:
        "Cán bộ tuyển sinh nhà trường thông báo đến phụ huynh học sinh lịch xét tuyển. Sau khi có kết quả, thông báo sẽ được gửi đến phụ huynh và học sinh. Nếu đủ điều kiện, phụ huynh bắt đầu làm thủ tục nhập học chính thức cho học sinh.",
      icon: "",

      note: "Nội dung xét tuyển",
    },
    thirdStep: {
      title: "Nhập học chính thức",
      icon: "",

      note: "Nội dung xét tuyển",
      content:
        "- Phụ huynh học sinh mua và nộp hồ sơ nhập học đúng thời hạn quy định của nhà trường. Hồ sơ bao gồm: + Đơn đăng ký nhập học bản gốc (theo mẫu nhà trường) + Sơ yếu lý lịch (theo mẫu nhà trường) + Hồ sơ sức khỏe và tiêm chủng (theo mẫu nhà trường) + Phiếu đăng ký dịch vụ (theo mẫu nhà trường) + Bản sao giấy khai sinh + Bản sao Hộ khẩu hoặc bản sao hộ chiếu (nếu là người nước ngoài) + Học bạ + Giấy chứng nhận hoàn thành chương trình Tiểu học (đối với THCS) + Bằng tốt nghiệp THCS hoặc giấy chứng nhận tốt nghiệp THCS sở tạm thời (đối với THPT) + Giấy giới thiệu (đối với học sinh chuyển trường) + Hợp đồng giáo dục và đào tạo giữa SKY-LINE và phụ huynh đã ký (theo mẫu nhà trường) + 4 ảnh 4x6",
    },
  },
  ...RenderConfig,
}
