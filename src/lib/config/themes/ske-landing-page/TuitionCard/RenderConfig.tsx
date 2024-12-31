import * as Icons from "@ant-design/icons" // Import all Ant Design icons
import { ComponentConfig } from "@measured/puck"
import { useState } from "react"
import ModalSignupForConsultation from "../../../../../components/modal-sign-up-for-consultation"
import { DefaultImage } from "../../../../external-components"
import { generateImagePath } from "../../../../utils"
import { CommonStylesProps } from "../../../lib/commonCSSProps"

export interface CardProps {
  title?: string
  img?: string
  description: { content: string }[]
  link?: string
}

export interface EnrollmentCard extends CommonStylesProps {
  items: CardProps[]
}

export const RenderConfig: ComponentConfig<EnrollmentCard> = {
  render: ({ items }) => {
    const [modalSignIn, setModalSignIn] = useState(false)
    const currentPath = window.location.pathname
    return (
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-6 sm:gap-[1.75rem] sm:flex-row">
          {items &&
            items.map((item, index) => (
              <div key={index} className="bg-white-secondary w-full flex flex-col rounded-xl p-6 sm:p-10">
                <a href={`${currentPath}/${item.link}`} target="_blank" rel="noreferrer">
                  <img
                    src={generateImagePath(item.img || DefaultImage, "medium")}
                    alt={`Slide ${index}`}
                    className="w-full h-[14.25rem] sm:h-[13.688rem] object-cover rounded-xl cursor-pointer"
                  />
                </a>
                <div className="flex flex-col text-black-tertiary text-sm leading-5 pt-3 pb-6 sm:py-8">
                  <p
                    className="sm:text-[1.75rem] sm:leading-[2.25rem] text-base leading-[1.375rem] sm:pb-4 font-semibold text-black-tertiary"
                    dangerouslySetInnerHTML={{ __html: item.title || "" }}
                  />
                  <span
                    className="sm:hidden block"
                    style={{
                      width: "8.188rem",
                      height: "0.188rem",
                      backgroundColor: "#01A19A",
                      marginTop: "0.75rem",
                      marginBottom: "0.75rem",
                    }}
                  ></span>
                  <div className="flex flex-col gap-2 sm:gap-1 text-justify">
                    {item.description?.map((descItem, descIndex) => (
                      <div
                        key={descIndex}
                        className="text-base leading-5 font-normal text-justify"
                        dangerouslySetInnerHTML={{ __html: descItem.content || "" }}
                      />
                    ))}
                  </div>
                </div>
                <button
                  style={{ boxShadow: "5px 8px 32px 9px #0000000D" }}
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
      </div>
    )
  },
}
