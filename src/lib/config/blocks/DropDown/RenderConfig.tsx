"use client"
import { ComponentConfig } from "@measured/puck"
import { useRef, useState } from "react"
import { twMerge } from "tailwind-merge"
import { ChevronDown } from "../../assets/chevron-down"
import { ChevronUP } from "../../assets/chevron-up"
import { CommonStylesProps } from "../../lib/commonCSSProps"
import { generateResponsiveCSS } from "../../lib/helper"

export interface DropDownProps extends CommonStylesProps {
  bulletDropDown: boolean
  items: {
    title: string
    description: string
  }[]
}

export const RenderConfig: ComponentConfig<DropDownProps> = {
  render: ({ items, bulletDropDown, className, styles, responsiveType }) => {
    const [activeIndices, setActiveIndices] = useState<number[]>([0])

    const refs = useRef<(HTMLSpanElement | null)[]>([]);

    const toggleAccordion = (index: number) => {
      setActiveIndices((prevActiveIndices) => {
        if (prevActiveIndices.includes(index)) {
          return prevActiveIndices.filter((itemIndex) => itemIndex !== index)
        } else {
          return [...prevActiveIndices, index]
        }
      });
    };

    const id = `dropdown-${Math.random().toString(36).substr(2, 9)}`

    const mergedStyles = {
      mobile: { ...styles?.mobile },
      tablet: { ...styles?.tablet },
      desktop: { ...styles?.desktop },
    }

    // Generate responsive CSS
    const responsiveCSS = generateResponsiveCSS(id, mergedStyles || {}, responsiveType)

    return (
      <>
        {responsiveCSS}
        <div className={`${id} ${twMerge(className)} bg-[#F5F6FA] rounded-3xl sm:px-10 sm:py-3 px-4 pb-6`}>
          {items.map((item, index) => (
            <div key={index}>
              <span
                ref={(el) => {
                  refs.current[index] = el;
                }}

                className={`w-full text-left`}
                onClick={() => toggleAccordion(index)}
              >
                <div
                  className={`flex justify-between lg:items-center text-green py-6 lg:py-5 ${activeIndices.includes(index) ? "pb-4 lg:!pb-3" : "py-5"
                    }`}
                >
                  <span
                    className={`font-semibold leading-5 text-sm lg:text-lg lg:leading-6}`}
                    dangerouslySetInnerHTML={{ __html: ` ${item.title || ""}` }}
                  ></span>

                  <span className="text-green">{activeIndices.includes(index) ? <ChevronUP /> : <ChevronDown />}</span>
                </div>
              </span>
              <div
                className={`transition-[max-height] duration-300 ease-in-out text-justify overflow-hidden border-b-[0.031rem] ${activeIndices.includes(index) ? "max-h-none" : "max-h-0"
                  }`}
              >
                <p
                  className="font-normal text-[0.813rem] leading-[1.313rem] lg:leading-6 lg:text-base pb-6 text-[#475467]"
                  dangerouslySetInnerHTML={{ __html: item.description || "" }}
                />
                <style>
                  {`
                .overflow-hidden ul, 
                .overflow-hidden ol {
                  list-style-position: inside;
                }
              `}
                </style>
              </div>
            </div>
          ))}
        </div>
      </>
    )
  },
}
