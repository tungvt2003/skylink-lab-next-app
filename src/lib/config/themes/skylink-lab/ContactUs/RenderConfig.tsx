"use client"

import { ComponentConfig } from "@measured/puck"
import { Spin } from "antd"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"
import { getSettings } from "../../../../navigation-services"
import { CommonStylesProps } from "../../../lib/commonCSSProps"
import { generateResponsiveCSS } from "../../../lib/helper"
import { DataSettingItem } from "../../../types"

export interface ContactUsProps extends CommonStylesProps {
  title: string
  nameLocation: string
  iframeSrc: string
  width: string
  height: string
  titleForm: string
}

export const RenderConfig: ComponentConfig<ContactUsProps> = {
  render: ({ styles, responsiveType, className, title, nameLocation, iframeSrc, titleForm, width, height }) => {
    const id = `form-register-${Math.random().toString(36).substr(2, 9)}`

    const t = useTranslations()

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      answer: "",
      emailTo: "",
    })

    const [isPopupVisible, setIsPopupVisible] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState("")
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target
      setFormData(prev => ({ ...prev, [name]: value }))
    }

    const fetchSetting = async () => {
      try {
        const response = await getSettings()
        const emailTo = response.find((item: DataSettingItem) => item.attributes.key === "SkylinkLabsEmail")?.attributes
          .value
        setFormData(prev => ({ ...prev, emailTo: emailTo }))
      } catch (error) {
        console.error("Error fetching setting data:", error)
      }
    }

    useEffect(() => {
      fetchSetting()
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      setIsLoading(true)
      try {
        const response = await fetch("/api/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subject: "Câu trả lời từ khách hàng",
            emailTo: formData.emailTo,
            content: `<div>
                <p>Tên: ${formData.name}</p>
                <p>Email: ${formData.email}</p>
                <p>Số điện thoại: ${formData.phone}</p>
                <p>Câu trả lời: ${formData.answer}</p>
              </div>`,
          }),
        })

        if (!response.ok) {
          throw new Error("Failed to submit data")
        }

        setIsPopupVisible(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          answer: "",
          emailTo: "",
        })
        setMessage("Gửi câu trả lời thành công!")
      } catch (error) {
        console.error("Error:", error)
        setMessage("Đã xảy ra lỗi khi gửi thông tin!")
      } finally {
        setIsLoading(false)
      }
    }

    const closePopup = () => {
      setIsPopupVisible(false)
    }

    const mergedStyles = {
      mobile: { ...styles?.mobile },
      tablet: { ...styles?.tablet },
      desktop: { ...styles?.desktop },
    }

    const responsiveCSS = generateResponsiveCSS(id, mergedStyles || {}, responsiveType)

    return (
      <>
        {responsiveCSS}
        <div className={`${id} ${twMerge(className)} w-full`}>
          <div className="flex sm:flex-row flex-col-reverse sm:gap-5 gap-20">
            <div className="px-5 sm:px-0">
              <h2 className="uppercase sm:text-3xl text-[23px] font-bold text-[#3f4349] sm:mb-5 text-center sm:text-left">
                {title}
              </h2>
              <div className="flex sm:mb-[57px] mb-[25px]">
                <svg
                  data-bbox="41.501 20 116.999 160.001"
                  viewBox="0 0 200 200"
                  height="33"
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                  data-type="shape"
                >
                  <g>
                    <path
                      fill="#3bc873"
                      d="M157.367 66.82c-3.105-14.146-10.205-25.614-21.1-34.083-14.606-11.356-31.093-15.144-48.998-11.261-10.993 2.385-20.647 7.708-28.696 15.821-8.462 8.531-13.882 18.86-16.109 30.7-1.122 5.953-1.262 11.473-.43 16.874.862 5.609 2.729 10.685 4.442 14.912 4.273 10.539 9.918 20.076 14.358 27.205 8.241 13.235 17.874 26.672 29.45 41.082a248.399 248.399 0 0 0 3.199 3.874l6.694 8.057 5.455-6.944c13.755-16.57 25.171-32.357 34.9-48.262 6.309-10.316 10.816-19.203 14.182-27.969 3.898-10.164 4.793-20.259 2.653-30.006zM119.04 91.152c-5.093 5.141-11.835 7.976-18.984 7.983h-.025c-14.797.001-26.848-12.115-26.872-27.02-.023-14.812 11.962-26.911 26.717-26.972 7.134-.006 13.868 2.764 18.978 7.868 5.141 5.136 7.982 11.955 8 19.2.019 7.109-2.756 13.835-7.814 18.941z"
                    ></path>
                  </g>
                </svg>
                <p className="text-base text-[#3f4349] font-medium">{nameLocation}</p>
              </div>
              <div className="sm:h-[451px] h-[241px] overflow-scroll">
                <iframe
                  src={iframeSrc}
                  width={width}
                  height={height}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="px-[30px] sm:px-0">
              <h3 className="mb-5 text-[23px] sm:text-[18px] font-semibold text-[#3F4349] text-center sm:text-left">
                {titleForm}
              </h3>
              <div>
                <form onSubmit={handleSubmit} className="space-y-9 max-sm:space-y-3">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("Name")}
                    className="flex-1 py-3 pl-4 w-full bg-[#F9F9F9] rounded-[15px] placeholder:text-[#a69f9d] focus:outline-none max-sm:placeholder:text-[13px]"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="flex-1 py-3 pl-4 w-full bg-[#F9F9F9] rounded-[15px] placeholder:text-[#a69f9d] focus:outline-none max-sm:placeholder:text-[13px]"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t("Phone")}
                    className="flex-1 py-3 pl-4 w-full bg-[#F9F9F9] rounded-[15px] placeholder:text-[#a69f9d] focus:outline-none max-sm:placeholder:text-[13px]"
                    required
                  />
                  <textarea
                    name="answer"
                    value={formData.answer}
                    onChange={handleChange}
                    placeholder={t("Add answer here")}
                    rows={4}
                    className="flex-1 py-3 pl-4 w-full bg-[#F9F9F9] rounded-[15px] placeholder:text-[#a69f9d] focus:outline-none max-sm:placeholder:text-[13px]"
                    required
                  />
                  <div className="flex justify-center pt-[23px] sm:pt-[90px]">
                    <button
                      type="submit"
                      className="py-[8px] bg-labs-primary hover:bg-labs-secondary duration-300 text-white font-semibold text-base leading-7 rounded-[40px] text-center whitespace-nowrap w-[147px] h-[42px] hover:bg-[#323232] max-sm:text-[15px] max-sm:w-[120px] max-sm:font-medium"
                    >
                      {t("Submit")}
                    </button>
                  </div>
                </form>

                {isLoading && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <Spin />
                  </div>
                )}

                {isPopupVisible && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded shadow-md relative">
                      <button
                        onClick={closePopup}
                        className="absolute top-0 text-[30px] right-2 text-gray-600 hover:text-gray-800"
                        aria-label="Close"
                      >
                        &times;
                      </button>
                      <p className="text-lg font-semibold">{message}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  },
}
