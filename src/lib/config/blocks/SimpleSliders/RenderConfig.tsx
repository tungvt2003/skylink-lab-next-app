"use client"

import { ComponentConfig } from "@measured/puck"
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

    const paginationCustom = {
      clickable: true,
      bulletClass:
        pagination === "default" ? "custom-swiper-pagination-bullet" : "custom-swiper-pagination-section-bullet",
      bulletActiveClass:
        pagination === "default"
          ? "custom-swiper-pagination-bullet-active"
          : "custom-swiper-pagination-section-bullet-active",
      renderBullet: function (index: number, className: string) {
        return `<span class="${className}">${""}</span>`
      },
    }

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
          pagination={paginationCustom}
          modules={[Pagination, Autoplay, Navigation]}
          navigation={{ nextEl: ".custom-next-slick-arrow-orange", prevEl: ".custom-prev-slick-arrow-orange" }}
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
        </Swiper>
      </>
    )
  },
}
