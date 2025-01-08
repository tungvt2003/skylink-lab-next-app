"use client"

import { ComponentConfig } from "@measured/puck"
import { Button } from "antd"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import "swiper/css"
import "swiper/css/pagination"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { twMerge } from "tailwind-merge"
import { generateImagePath } from "../../../utils"
import { CommonStylesProps } from "../../lib/commonCSSProps"
import { generateResponsiveCSS } from "../../lib/helper"
import "./css/custom-bullet.css"

export interface SimpleSliderProps extends CommonStylesProps {
  slides: { id?: number; image?: string; url: string }[]
  spaceBetween?: number
  slidesPerView?: number
  loop?: boolean
  speed?: number
  timeDelay?: number
  pagination?: "default" | "custom"
}

export const RenderConfig: ComponentConfig<SimpleSliderProps> = {
  render: ({
    slides,
    spaceBetween,
    slidesPerView,
    loop,
    speed,
    timeDelay,
    pagination,
    styles,
    responsiveType,
    className,
  }) => {
    useEffect(() => {
      AOS.init({
        once: false,
        duration: 500,
        offset: 0,
      })
    }, [])

    const id = `simple-slider-${Math.random().toString(36).substr(2, 9)}`

    // Merge default styles with user-defined styles
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
        <Swiper
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          modules={[Pagination, Autoplay, Navigation]}
          navigation={{
            nextEl: ".custom-next-slick-arrow",
            prevEl: ".custom-prev-slick-arrow",
          }}
          loop={loop}
          speed={speed}
          autoplay={{ delay: timeDelay }}
          className={`${id} ${twMerge(className)}`}
          onSwiper={() => AOS.refresh()}
          onSlideChange={() => AOS.refresh()}
        >
          {slides.map(({ id, image, url }, index) => (
            <SwiperSlide key={index}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full h-full block overflow-hidden"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <div className="w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-105">
                  <img
                    src={generateImagePath(image, "original")}
                    alt={`Slide ${index}`}
                    className="h-full object-cover w-full"
                  />
                </div>
              </a>
            </SwiperSlide>
          ))}
          <Button
            className={`custom-prev-slick-arrow absolute opacity-80 left-5 z-10 top-[50%]  -translate-y-[70%] p-0 h-[45px] w-[45px] rounded-[50%] transition-all duration-500 ease-out -translate-x-full lg:translate-x-0 rotate-180 border-0 max-sm:hidden`}
          >
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.40433 0.893996C9.64841 0.649918 10.0441 0.649918 10.2882 0.893996L15.2882 5.894C15.5323 6.13807 15.5323 6.5338 15.2882 6.77788L10.2882 11.7779C10.0441 12.022 9.64841 12.022 9.40433 11.7779C9.16025 11.5338 9.16025 11.1381 9.40433 10.894L13.3374 6.96094H1.51294C1.16776 6.96094 0.887939 6.68112 0.887939 6.33594C0.887939 5.99076 1.16776 5.71094 1.51294 5.71094H13.3374L9.40433 1.77788C9.16025 1.5338 9.16025 1.13807 9.40433 0.893996Z"
                fill="#100F0F"
              />
            </svg>
          </Button>

          <Button
            className={`custom-next-slick-arrow absolute opacity-80 right-5 z-10 top-[50%] -translate-y-[70%] p-0 h-[45px] w-[45px] rounded-[50%] transition-all duration-500 ease-out -translate-x-full lg:translate-x-0 border-0 max-sm:hidden`}
          >
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.40433 0.893996C9.64841 0.649918 10.0441 0.649918 10.2882 0.893996L15.2882 5.894C15.5323 6.13807 15.5323 6.5338 15.2882 6.77788L10.2882 11.7779C10.0441 12.022 9.64841 12.022 9.40433 11.7779C9.16025 11.5338 9.16025 11.1381 9.40433 10.894L13.3374 6.96094H1.51294C1.16776 6.96094 0.887939 6.68112 0.887939 6.33594C0.887939 5.99076 1.16776 5.71094 1.51294 5.71094H13.3374L9.40433 1.77788C9.16025 1.5338 9.16025 1.13807 9.40433 0.893996Z"
                fill="#100F0F"
              />
            </svg>
          </Button>
        </Swiper>
      </>
    )
  },
}
