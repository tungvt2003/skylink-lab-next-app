"use client"

import { ComponentConfig } from "@measured/puck"
import { Spin } from "antd"
import { useState } from "react"
import { twMerge } from "tailwind-merge"
import { CommonStylesProps } from "../../../lib/commonCSSProps"
import { generateResponsiveCSS } from "../../../lib/helper"

// Interface for form props
export interface FormRegisterProps extends CommonStylesProps {}

export const RenderConfig: ComponentConfig<FormRegisterProps> = {
  render: ({ styles, responsiveType, className }) => {
    const id = `form-register-${Math.random().toString(36).substr(2, 9)}`

    // Form state for inputs
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      company: "",
    })

    // State to handle popup visibility and loading
    const [isPopupVisible, setIsPopupVisible] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState("")
    // Handle form changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      setIsLoading(true) // Bắt đầu loading
      try {
        const response = await fetch("/api/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })

        if (!response.ok) {
          throw new Error("Failed to submit data")
        }

        setIsPopupVisible(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
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
        <div className={`${id} ${twMerge(className)} w-full`}>
          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Họ và tên"
              className="flex-1 p-2.5 border border-[#29235C] w-full"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="flex-1 p-2.5 border border-[#29235C] w-full"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Số điện thoại"
              className="flex-1 p-2.5 border border-[#29235C] w-full"
              required
            />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Công ty"
              className="flex-1 p-2.5 border border-[#29235C] w-full"
              required
            />
            <button
              type="submit"
              className="py-[8px] w-full bg-[#439CDD] text-white font-semibold text-base leading-7 rounded-sm text-center whitespace-nowrap"
            >
              ĐĂNG KÝ
            </button>
          </form>

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
