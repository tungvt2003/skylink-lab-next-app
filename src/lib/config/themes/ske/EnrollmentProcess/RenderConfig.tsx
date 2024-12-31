"use client"

import { ComponentConfig } from "@measured/puck"
import { useEffect, useState } from "react"
import { configs, DefaultImage } from "../../../../external-components"
import useIsMobile from "../../../lib/use-is-mobile"

export interface EnrollmentProcessProps {
  firtsStep: {
    icon?: string
    title?: string
  }
  secondStep: {
    icon?: string
    title?: string
    content?: string
    img?: string
    note?: string
  }
  thirdStep: {
    icon?: string
    title?: string
    content?: string
    note?: string
  }
}

export const RenderConfig: ComponentConfig<EnrollmentProcessProps> = {
  render: ({ firtsStep, secondStep, thirdStep }) => {
    const [activeStep, setActiveStep] = useState(1)
    const isMobile = useIsMobile()

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY
        if (scrollPosition < (isMobile ? 50 : 200)) {
          setActiveStep(1)
        } else if (scrollPosition >= (isMobile ? 100 : 200) && scrollPosition < (isMobile ? 350 : 600)) {
          setActiveStep(2)
        } else if (scrollPosition >= (isMobile ? 350 : 600)) {
          setActiveStep(3)
        }
      }

      window.addEventListener("scroll", handleScroll)

      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }, [])

    return (
      <div className="container bg-gradient-to-b from-white to-[#F5F5FE] mx-auto mb-0 sm:mb-25 p-6 lg:pt-0 lg:px-[7.5rem]">
        <div className="flex flex-col ">
          <div className="flex lg:items-center gap-6 lg:gap-10 lg:pl-[29.55rem]">
            <div className="min-w-[2.625rem] min-h-[2.625rem]">
              <img
                src={firtsStep.icon ? `${configs.API_URL}${firtsStep.icon}` : DefaultImage}
                alt="img"
                className={`w-[2.625rem] h-[2.625rem] lg:w-20 lg:h-20 ${
                  activeStep === 1 ? "" : "opacity-20 grayscale brightness-50"
                }`}
              />
            </div>
            <div className="h-full">
              <div
                className={`w-1 h-32 mx-auto ${
                  activeStep === 1 ? "bg-gradient-to-b from-gray-tertiary to-green" : "bg-gray-tertiary"
                }`}
              ></div>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-semibold lg:font-bold text-sm leading-5 lg:text-lg lg:leading-6 w-7 lg:w-fit px-0 lg:px-3 py-1 rounded-full text-white bg-green text-center">
                1
              </span>
              <span
                className="font-bold text-sm leading-5 lg:text-2xl lg:leading-8 lg:max-w-[22.375rem] text-[#31343E]"
                dangerouslySetInnerHTML={{
                  __html: firtsStep.title ? firtsStep.title.replace(/\n/g, "<br/>") : "",
                }}
              />
            </div>
          </div>
          <div className="flex items-center gap-6 lg:gap-10 lg:pl-[6.75rem] flex-row-reverse lg:flex-row h-full">
            <div className="flex flex-col lg:text-right lg:pt-25 gap-4 h-full self-start lg:max-w-[27.8125rem]">
              <span className="font-semibold lg:font-bold text-sm leading-5 lg:text-lg lg:leading-6 w-7 lg:w-fit px-0 lg:px-3 py-1 rounded-full text-white bg-green text-center lg:self-end">
                2
              </span>
              <span
                className="font-bold text-sm leading-5 lg:text-2xl lg:leading-8 text-[#31343E]"
                dangerouslySetInnerHTML={{
                  __html: secondStep.title ? secondStep.title.replace(/\n/g, "<br/>") : "",
                }}
              />

              <div className="flex flex-col">
                <p
                  className="font-normal text-[0.813rem] leading-[1.313] lg:text-base lg:leading-6 text-[#31343E]"
                  dangerouslySetInnerHTML={{
                    __html: secondStep.content ? secondStep.content.replace(/\n/g, "<br/>") : "",
                  }}
                />
                <p
                  className="italic font-normal text-[0.75rem] leading-[1.125rem] lg:text-sm lg:leading-5 text-[#777777] mt-3 max-w-[27.813rem]"
                  dangerouslySetInnerHTML={{ __html: secondStep.note ? secondStep.note.replace(/\n/g, "<br/>") : "" }}
                />
              </div>
              <span className="font-bold text-2xl leading-8 hidden lg:block">Nội dung xét tuyển</span>
              <img
                src={secondStep.img ? `${configs.API_URL}${secondStep.img}` : DefaultImage}
                alt="img"
                className={`w-[22.25rem] h-[11.688rem] lg:h-[17.813rem] ${
                  activeStep === 2 ? "text-green" : "text-gray"
                } self-end`}
              />
            </div>
            <div className="h-full self-stretch">
              <div
                className={`w-1 min-h-[537px] lg:h-[48.563rem] mx-auto ${
                  activeStep === 2 ? "bg-gradient-to-b from-gray-tertiary to-green" : "bg-gray-tertiary"
                }`}
              ></div>
            </div>
            <div className="min-w-[2.625rem] min-h-[2.625rem] self-start lg:pt-25">
              <img
                src={secondStep.icon ? `${configs.API_URL}${secondStep.icon}` : DefaultImage}
                alt="img"
                className={`w-[2.625rem] h-[2.625rem] lg:w-20 lg:h-20 ${
                  activeStep === 2 ? "" : "opacity-20 grayscale brightness-50"
                }`}
              />
            </div>
          </div>
          <div className="flex items-center gap-6 lg:gap-10 lg:pl-[29.55rem] ">
            <div className="self-start lg:pt-[5.25rem] min-w-[2.625rem] min-h-[2.625rem] lg:w-20 lg:h-20">
              <img
                src={thirdStep.icon ? `${configs.API_URL}${thirdStep.icon}` : DefaultImage}
                alt="img"
                sizes="100%"
                className={`w-[2.625rem] h-[2.625rem] lg:w-20 lg:h-20 ${
                  activeStep === 3 ? "" : "opacity-20 grayscale brightness-50"
                }`}
              />
            </div>
            <div className="self-stretch flex">
              <div
                className={`w-1 min-h-[45rem] self-stretch ${
                  activeStep === 3 ? "bg-gradient-to-b from-gray-tertiary to-green" : "bg-gray-tertiary"
                }`}
              ></div>
            </div>
            <div className="flex flex-col pt-12 lg:pt-[5.25rem] gap-4 pb-6">
              <span className="font-semibold lg:font-bold text-sm leading-5 lg:text-lg lg:leading-6 w-7 lg:w-fit px-0 lg:px-3 py-1 rounded-full text-white bg-green text-center">
                3
              </span>
              <span
                className="font-bold text-2xl leading-8"
                dangerouslySetInnerHTML={{
                  __html: thirdStep.title ? thirdStep.title.replace(/\n/g, "<br/>") : "",
                }}
              />

              <p
                className="font-normal text-base leading-6 lg:w-[26.938rem]"
                dangerouslySetInnerHTML={{
                  __html: thirdStep.content ? thirdStep.content.replace(/\n/g, "<br/>") : "",
                }}
              />

              <p
                className="italic font-normal text-sm leading-5 text-[#777777] lg:w-[26.938rem]"
                dangerouslySetInnerHTML={{
                  __html: thirdStep.note ? thirdStep.note.replace(/\n/g, "<br/>") : "",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  },
}
