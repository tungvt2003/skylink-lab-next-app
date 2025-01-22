"use client"

import { ComponentConfig } from "@measured/puck"
import { useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"
import { getAllJobDetails } from "../../../../get-job-detail"
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

interface JobDetailProps {
  JobTitle?: string
  Location?: string
  Type?: string
  Description?: string
  Slug?: string
  Requirements?: {
    name: string
    text: string[]
  }[]
}

interface JobDetailResponse {
  id: string
  attributes: JobDetailProps
}

export const RenderConfig: ComponentConfig<SimpleGridProps> = {
  render: ({ slides, styles, responsiveType, className, ...restProps }) => {
    const id = `simple-slider-${Math.random().toString(36).substr(2, 9)}`
    const [jobDetailData, setJobDetailData] = useState<JobDetailResponse[]>()
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
      getAllJobDetails().then(data => {
        setJobDetailData(data)
      })
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768)
      }

      // Initial check
      handleResize()

      // Add event listener
      window.addEventListener("resize", handleResize)

      // Cleanup event listener
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }, [])

    const mergedStyles = {
      mobile: { ...styles?.mobile },
      tablet: { ...styles?.tablet },
      desktop: { ...styles?.desktop },
    }

    const responsiveCSS = generateResponsiveCSS(id, mergedStyles || {}, responsiveType)

    return (
      <>
        {responsiveCSS}
        <div className={`gridContainer ${twMerge(className)} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`}>
          {jobDetailData?.map(({ id, attributes }, index) => (
            <div
              key={index}
              data-aos={`${isMobile ? "fade-up" : "fade-right"}`}
              data-aos-duration="1500"
              className="flex justify-center group"
            >
              <div
                className={`gridItem relative transition-transform pt-[35px] pb-[38px] max-sm:pt-[30px] max-sm:pb-[20px] bg-[#F5F5F5] flex flex-col duration-300 mb-[15px] w-[231px] ease-in-out transform rounded-[15px] overflow-hidden max-sm:mt-[10px] group-hover:bg-[#A559F5]`}
              >
                <div className="bg-[#1B1C1E] opacity-10  mb-[10px] rounded-[10px] flex justify-center items-center w-[104px] h-[40px] self-center"></div>
                <div className="text-white text-center text-[17px] absolute left-[43%] top-[16%] font-semibold">
                  <p className={`font-semibold`}>JOB</p>
                </div>
                <div className="text-center">
                  <h3 className="h-[50px] max-sm:text-[18px] duration-1000 transition-all ease-in-out transform  tracking-[0.4px] group-hover:text-[#fff] font-bold md:text-[20px] leading-[22px] my-[10px] px-2 ">
                    {attributes.JobTitle}
                  </h3>
                  <p className=" text-[15px] font-normal  duration-1000 transition-all ease-in-out transform leading-[19px] pb-[15px] px-[10px] group-hover:text-[#fff]">
                    {attributes.Location}
                  </p>
                </div>
                <a
                  href={`/careers/${attributes.Slug}`}
                  className="flex flex-row justify-center items-center self-center bg-labs-primary text-white w-[146px] h-[40px] rounded-[40px] text-[15px] duration-500 transition-all ease-in-out group-hover:bg-labs-secondary hover:!bg-labs-secondary"
                >
                  <p>View Job Detail</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </>
    )
  },
}
