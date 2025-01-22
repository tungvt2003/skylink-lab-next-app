"use client"

import { ComponentConfig } from "@measured/puck"
import { twMerge } from "tailwind-merge"
import { configs, DefaultImage } from "../../../../external-components"
import { CommonStylesProps } from "../../../lib/commonCSSProps"
import getClassNameFactory from "../../../lib/get-class-name-factory"
import { generateResponsiveCSS } from "../../../lib/helper"
import styles from "./css/styles.module.css"

const getClassName = getClassNameFactory("SimpleGrid", styles)

export interface SimpleGridProps extends CommonStylesProps {
  slides: {
    id?: number
    image?: string
    urlAppStore?: string
    urlGGStore?: string
    titleSlideItem?: string
    description?: string
  }[]
  imageHeight?: number
  imageWidth?: number
  imageBorderRadius?: number
  spaceBetween?: number
  slidesPerView?: number
  loop?: boolean
  speed?: number
  timeDelay?: number
  isPagination?: boolean
  isNavigation?: boolean
  autoPlay?: boolean
  pagination?: "default" | "custom"
  breakpoint?: []
}

export const RenderConfig: ComponentConfig<SimpleGridProps> = {
  render: ({ slides, styles, responsiveType, className, ...restProps }) => {
    const id = `simple-slider-${Math.random().toString(36).substr(2, 9)}`

    const mergedStyles = {
      mobile: { ...styles?.mobile },
      tablet: { ...styles?.tablet },
      desktop: { ...styles?.desktop },
    }

    const responsiveCSS = generateResponsiveCSS(id, mergedStyles || {}, responsiveType)

    return (
      <>
        {responsiveCSS}
        <div
          className={`gridContainer ${twMerge(
            className,
          )} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:ml-[15px]`}
        >
          {slides.map(({ id, image, urlAppStore, urlGGStore, description, titleSlideItem }, index) => (
            <div key={index} data-aos="fade-up" data-aos-duration="1500" className="flex justify-center">
              <div
                className={`flex flex-col gridItem transition-transform duration-300 w-[300px]  ease-in-out transform rounded-[30px] overflow-hidden mt-[20px] max-sm:mt-[10px] items-center`}
              >
                <img
                  src={image ? `${configs.API_URL}${image}` : DefaultImage}
                  alt={`Slide ${index}`}
                  className={`sm:h-[104px] sm:w-[104px] object-cover md:w-[75px] md:h-[75px] max-sm:w-[60px] md:mb-[30px] max-sm:h-[60px] rounded-[50%] `}
                />
                <div className="text-center">
                  <h3 className="transition-transform duration-300 mb-[5px] ease-in-out transform group-hover:text-[#3BC873] font-bold md:text-[16px] leading-[19px] py-[10px] px-2">
                    {titleSlideItem}
                  </h3>
                  <p className=" text-[16px] max-sm:text-[13px] font-normal leading-[1.6] md:pb-[15px] tracking-normal px-[27px] max-sm:px-[10px]">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    )
  },
}
