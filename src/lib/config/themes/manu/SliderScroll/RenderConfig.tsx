"use client"

import { ComponentConfig } from "@measured/puck"
import "swiper/css"
import "swiper/css/pagination"
import { Autoplay, Scrollbar } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { twMerge } from "tailwind-merge"
import { configs, DefaultImage } from "../../../../external-components"
import { CommonStylesProps } from "../../../lib/commonCSSProps"
import { generateResponsiveCSS } from "../../../lib/helper"

export interface SliderScrollProps extends CommonStylesProps {
  slides: { id?: number; image?: string; url?: string }[]
  spaceBetween?: number
  slidesPerView?: number
  loop?: boolean
  speed?: number
  timeDelay?: number
  pagination?: "default" | "custom"
}

export const RenderConfig: ComponentConfig<SliderScrollProps> = {
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

    const mergedStyles = {
      mobile: { ...styles?.mobile },
      tablet: { ...styles?.tablet },
      desktop: { ...styles?.desktop },
    }

    const responsiveCSS = generateResponsiveCSS(id, mergedStyles || {}, responsiveType)

    return (
      <>
        {responsiveCSS}
        <Swiper
          slidesPerView="auto"
          spaceBetween={8}
          pagination={paginationCustom}
          modules={[Autoplay, Scrollbar]}
          loop={loop}
          speed={300}
          autoplay={{ delay: timeDelay, pauseOnMouseEnter: true }}
          scrollbar={{ draggable: true, hide: true }}
          className={`${id} ${twMerge(className)} w-full`}
        >
          {slides.map(({ id, image, url }, index) => (
            <SwiperSlide
              key={index}
              className="!w-[310px] sm:!w-[37rem] !h-[180px] sm:!h-[21.375rem] transition-transform duration-300 ease-in-out" // Thêm hiệu ứng chuyển tiếp
            >
              <a href={url ? url : undefined} target="_blank" rel="noopener noreferrer" className="h-full w-full">
                <img
                  src={image ? `${configs.API_URL}${image}` : DefaultImage}
                  alt={`Slide ${index}`}
                  className="h-full w-full object-cover"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    )
  },
}
