"use client"

import { ComponentConfig } from "@measured/puck"
import { Spin } from "antd"
import { useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"
import { getSettings } from "../../../../navigation-services"
import { CommonStylesProps } from "../../../lib/commonCSSProps"
import { generateResponsiveCSS } from "../../../lib/helper"
import { DataSettingItem } from "../../../types"

// Interface for form props
export interface FormRegisterProps extends CommonStylesProps {}

export const RenderConfig: ComponentConfig<FormRegisterProps> = {
  render: ({ styles, responsiveType, className }) => {
    const id = `form-register-${Math.random().toString(36).substr(2, 9)}`

    // Form state for inputs
    const [formData, setFormData] = useState({
      mailTo: "",
      name: "",
      email: "",
      title: "",
      content: "",
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

        const emailTo = response.find((item: DataSettingItem) => item.attributes.key === "emailAdvise")?.attributes
          .value
        setFormData(prev => ({ ...prev, mailTo: emailTo }))
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
            subject: "[Thông báo] Đăng ký tuyển sinh",
            emailTo: formData.mailTo,
            content: `
              Họ và tên: ${formData.name}
              Email: ${formData.email}
              Tiêu đề: ${formData.title}
              Nội dung: ${formData.content}
            `,
          }),
        })

        if (!response.ok) {
          throw new Error("Failed to submit data")
        }

        setIsPopupVisible(true)
        setFormData({
          mailTo: "",
          name: "",
          email: "",
          title: "",
          content: "",
        })
        setMessage("Đăng ký gian hàng thành công!")
      } catch (error) {
        console.error("Error:", error)
        setMessage("Đã xảy ra lỗi khi đăng ký!")
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
        <div className={`${id} ${twMerge(className)} w-full bg-[#F5F6FE] rounded-xl`}>
          {/* Registration Form */}
          <div></div>
          <div>
            <p className="flex justify-center sm:block pb-6 text-lg leading-8 sm:text-[1.5rem] sm:leading-12 font-semibold sm:pl-[125.5px]">
              <span className="inline-block">LIÊN HỆ VỚI CHÚNG TÔI</span>
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:pr-[60px]">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Họ và tên"
                className="flex-1 p-[10px] border border-[#E1E1E2] rounded-lg w-full placeholder:text-sm leading-5 placeholder:text-[#1A1A1A]"
                required
              />{" "}
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="flex-1 p-[10px] border border-[#E1E1E2] rounded-lg w-full placeholder:text-sm leading-5 placeholder:text-[#1A1A1A]"
              />
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Tiêu đề"
                className="flex-1 p-[10px] border border-[#E1E1E2] rounded-lg w-full placeholder:text-sm leading-5 placeholder:text-[#1A1A1A]"
                required
              />{" "}
              <textarea
                name="content"
                placeholder="Nội dung"
                onChange={handleChange}
                value={formData.content}
                className="px-2.5 pt-2.5 border h-[108px] border-[#E1E1E2] rounded-lg w-full placeholder:text-sm leading-5 placeholder:text-[#1A1A1A]"
              ></textarea>
              <button
                type="submit"
                className="py-[0.5rem] w-full mt-4 bg-[#01A19A] text-white font-semibold text-lg leading-6 rounded-lg text-center whitespace-nowrap"
              >
                Gửi yêu cầu liên hệ
              </button>
            </form>
          </div>

          {/* Loading Spinner */}
          {isLoading && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <Spin />
            </div>
          )}

          {/* Success Popup */}
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
      </>
    )
  },
}
