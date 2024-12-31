import * as Icons from "@ant-design/icons" // Import all Ant Design icons
import { ComponentConfig } from "@measured/puck"
import { useState } from "react"
import ModalSignupForConsultation from "../../../../../components/modal-sign-up-for-consultation"
import { configs, DefaultImage } from "../../../../external-components"
import { generateImagePath } from "../../../../utils"
import { CommonStylesProps } from "../../../lib/commonCSSProps"

export interface CardProps {
  title?: string
  img?: string
  description?: string
  subdescription?: string
  subtitle?: { content: string }[]
  link?: string
}

export interface EnrollmentCard extends CommonStylesProps {
  items: CardProps[]
  img?: string
  title?: string
  description: { content: string }[]
  link?: string
}

export const RenderConfig: ComponentConfig<EnrollmentCard> = {
  render: ({ items, img, title, description, link }) => {
    const [modalSignIn, setModalSignIn] = useState(false)
    const currentPath = window.location.pathname
    return (
      <div className="flex flex-col sm:gap-12 gap-6">
        <div className="grid lg:grid-cols-2 sm:gap-12 gap-6">
          {items &&
            items.map((item, index) => (
              <div key={index} className="bg-white-secondary w-full flex flex-col rounded-xl p-6 sm:p-12 sm:gap-8">
                <a href={`${currentPath}/${item.link}`} target="_blank" rel="noreferrer">
                  <img
                    src={generateImagePath(item.img || DefaultImage, "medium")}
                    alt={`Slide ${index}`}
                    className="w-full sm:h-[16.625rem] h-[14.25rem] object-cover rounded-xl cursor-pointer"
                  />
                </a>
                <div className="flex flex-col text-black-tertiary text-sm leading-5 pb-6 sm:pb-0 pt-3 sm:pt-0">
                  <p
                    className="sm:text-[2rem] sm:leading-10 text-base leading-6 font-semibold text-black-tertiary"
                    dangerouslySetInnerHTML={{ __html: item.title || "" }}
                  />
                  <span
                    style={{
                      display: "block",
                      width: "8.188rem",
                      height: "0.188rem",
                      backgroundColor: "#01A19A",
                      marginTop: "0.875rem",
                    }}
                  ></span>
                  <div className="flex flex-col sm:pt-4 pt-3">
                    <p
                      className="sm:text-base sm:leading-[1.375rem] text-[0.813rem] leading-[1.313rem] font-normal"
                      dangerouslySetInnerHTML={{ __html: item.description || "" }}
                    />
                  </div>
                  <div className="flex flex-col pt-3 sm:pt-4 pb-2">
                    <p
                      className="sm:text-base text-sm font-semibold"
                      dangerouslySetInnerHTML={{ __html: item.subdescription || "" }}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    {item.subtitle?.map((descItem, descIndex) => (
                      <div
                        key={descIndex}
                        className="text-base leading-5 font-normal text-justify"
                        dangerouslySetInnerHTML={{ __html: descItem.content || "" }}
                      />
                    ))}
                  </div>
                </div>
                <button
                  style={{ boxShadow: "5px 8px 2rem 9px #0000000D" }}
                  onClick={() => setModalSignIn(true)}
                  className="w-fit px-4 py-3 rounded-lg text-[0.8125rem] gap-2 leading-[1.313rem] sm:text-base sm:leading-5 sm:font-medium font-semibold flex flex-row bg-[#00A19A]
               text-white font-semiboldwhite
               hover:text-[#00A19A] hover:border-[#00A19A] border-[1px] hover:bg-white
               border-[#00A19A] duration-300 mt-auto items-center"
                >
                  Nhận tư vấn <Icons.ArrowRightOutlined className="w-5 h-5" />
                </button>
                <ModalSignupForConsultation open={modalSignIn} onClose={() => setModalSignIn(false)} />
              </div>
            ))}
        </div>
        <div className="flex sm:flex-row flex-col p-6 sm:p-12 bg-white-secondary sm:gap-12 rounded-xl">
          <div className="sm:w-[44.3%] w-full">
            <img
              src={img ? `${configs.API_URL}${img}` : DefaultImage}
              alt="imageCustomer4"
              className="object-cover h-[14.25rem] sm:h-[27.375rem] w-full rounded-xl"
            />
          </div>
          <div className="sm:w-[55.7%] w-full flex flex-col text-black-tertiary text-sm leading-5 sm:gap-4">
            <span className="sm:text-[2rem] sm:leading-10 text-base leading-[22px] font-semibold text-black-tertiary py-3 sm:py-0">
              <div
                className="sm:text-[2rem] sm:leading-10 text-base leading-6 font-semibold text-black-tertiary"
                dangerouslySetInnerHTML={{ __html: title || "" }}
              />
              <span
                style={{
                  display: "block",
                  width: "8.188rem",
                  height: "0.188rem",
                  backgroundColor: "#01A19A",
                  marginTop: "0.875rem",
                }}
              ></span>
            </span>
            <div className="flex flex-col pb-6">
              {description?.map((descItem, descIndex) => (
                <div
                  key={descIndex}
                  className="sm:text-base sm:leading-[1.375rem] text-[0.813rem] leading-[1.313rem] font-normal"
                  dangerouslySetInnerHTML={{ __html: descItem.content || "" }}
                />
              ))}
            </div>
            <button
              style={{ boxShadow: "5px 8px 2rem 9px #0000000D" }}
              onClick={() => setModalSignIn(true)}
              className="w-fit px-4 py-3 rounded-lg text-[0.8125rem] gap-2 leading-[1.313rem] sm:text-base sm:leading-5 sm:font-medium font-semibold flex flex-row bg-[#00A19A]
               text-white font-semiboldwhite
               hover:text-[#00A19A] hover:border-[#00A19A] border-[1px] hover:bg-white
               border-[#00A19A] duration-300 mt-auto items-center"
            >
              Nhận tư vấn <Icons.ArrowRightOutlined className="w-5 h-5" />
            </button>
            <ModalSignupForConsultation open={modalSignIn} onClose={() => setModalSignIn(false)} />
          </div>
        </div>
      </div>
    )
  },
}
