"use client"

import { ComponentConfig } from "@measured/puck"
import { useState } from "react"
import { twMerge } from "tailwind-merge"
import { configs, DefaultImage } from "../../../../external-components"
import { CommonStylesProps } from "../../../lib/commonCSSProps"
import getClassNameFactory from "../../../lib/get-class-name-factory"
import { generateResponsiveCSS } from "../../../lib/helper"
import styles from "./css/styles.module.css"

const getClassName = getClassNameFactory("SimpleGrid", styles)

export interface GridImageProps extends CommonStylesProps {
  slides: {
    id?: number
    image?: string
    urlAppStore?: string
    urlGGStore?: string
    titleSlideItem?: string
    description?: string
    imageHover?: string
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

export const RenderConfig: ComponentConfig<GridImageProps> = {
  render: ({ slides, styles, responsiveType, className, ...restProps }) => {
    const id = `simple-slider-${Math.random().toString(36).substr(2, 9)}`

    const mergedStyles = {
      mobile: { ...styles?.mobile },
      tablet: { ...styles?.tablet },
      desktop: { ...styles?.desktop },
    }

    const responsiveCSS = generateResponsiveCSS(id, mergedStyles || {}, responsiveType)

    const [isPreviewOpen, setPreviewOpen] = useState(false)
    const [previewImage, setPreviewImage] = useState<string | null>(null)

    const handlePreview = (imageHover: string | undefined) => {
      if (imageHover) {
        console.log("imageHover", imageHover)
        setPreviewImage(`${configs.API_URL}${imageHover}`)
        setPreviewOpen(true)
      }
    }

    const closePreview = () => {
      setPreviewOpen(false)
      setPreviewImage(null)
    }

    return (
      <>
        {responsiveCSS}
        <div
          className={`gridContainer ${twMerge(
            className,
          )} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-0 sm:gap-8`}
        >
          {slides.map(({ id, image, imageHover }, index) => (
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              className="flex justify-center cursor-pointer"
              key={id || index}
            >
              <div
                className={`gridItem mx-[10px] md:mx-0 w-full sm:rounded-[25px] rounded-[15px] max-sm:w-full max-sm:my-[10px] sm:pb-[3px] pb-0 md:h-[350px]`}
                onClick={() => handlePreview(image)}
              >
                <img
                  src={image ? `${configs.API_URL}${image}` : DefaultImage}
                  alt={`Slide ${index}`}
                  className={`md:w-full max-sm:w-full max-sm:h-[153px] hover:scale-105 duration-500 ease-in-out transform sm:rounded-[25px] rounded-[15px] md:h-full`}
                />
              </div>
            </div>
          ))}
        </div>

        {isPreviewOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={closePreview}
          >
            <div className="relative">
              <img
                src={previewImage || DefaultImage}
                alt="Preview"
                className="w-[90%] max-h-[90%] mx-auto duration-500 ease-in-out transform"
              />
              <button onClick={closePreview} className="absolute top-[-35px] right-[30px] text-center p-1 text-white">
                ✕
              </button>
            </div>
          </div>
        )}
      </>
    )
  },
}
