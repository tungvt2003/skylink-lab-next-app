"use client"

import { ComponentConfig } from "@measured/puck"
import AOS from "aos"
import "aos/dist/aos.css"
import { useState } from "react"
import { twMerge } from "tailwind-merge"
import { CommonStylesProps } from "../../../lib/commonCSSProps"
import { generateResponsiveCSS } from "../../../lib/helper"

export interface CollapseProp extends CommonStylesProps {
  collapseData?: { question?: string; answer?: string }[]
}

const CollapsePanel = ({ question, answer }: { question?: string; answer?: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center md:py-6 py-4 group"
      >
        <span className="text-[#212121] font-semibold md:leading-[31.2px] leading-[24.7px] md:text-2xl text-[19px] group-hover:text-[#FB4C5A] duration-300 transition-all text-left">
          {question}
        </span>
        <span className="text-2xl font-medium min-w-[24px] text-gray-500 group-hover:text-[#FB4C5A]">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-minus"
            >
              <path d="M5 12h14" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-plus"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          )}
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 mb-6" : "max-h-0"}`}>
        <p className="text-[#616161] text-lg md:leading-[32.4px] leading-[28.8px] font-medium">{answer}</p>
      </div>
    </div>
  )
}

export const RenderConfig: ComponentConfig<CollapseProp> = {
  render: ({ className, styles, responsiveType, collapseData }) => {
    const id = `button-${Math.random().toString(36).substr(2, 9)}`
    const responsiveCSS = generateResponsiveCSS(id, styles || {}, responsiveType)

    if (typeof window !== "undefined") {
      AOS.init()
    }

    return (
      <>
        {responsiveCSS}
        <div
          className={`relative ${id} ${twMerge(className)} flex justify-center items-center w-full`}
          data-aos="fade-up"
        >
          <div className="w-full text-left">
            {collapseData?.map((item, index) => (
              <CollapsePanel key={index} question={item?.question} answer={item?.answer} />
            ))}
          </div>
        </div>
      </>
    )
  },
}
