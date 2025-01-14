"use client"

import { ComponentConfig } from "@measured/puck"
import { useEffect, useRef, useState } from "react"
import "swiper/css"
import "swiper/css/pagination"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react"
import { twMerge } from "tailwind-merge"
import { DefaultImage } from "../../../../external-components"
import { CommonStylesProps } from "../../../lib/commonCSSProps"
import { generateResponsiveCSS, getImageUrl } from "../../../lib/helper"
import useIsMobile from "../../../lib/use-is-mobile"
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

    const [rotation, setRotation] = useState(-1.34993)
    const sliderRef = useRef<SwiperRef>(null)
    const [divRotation, setDivRotation] = useState(1.5)
    const divRef = useRef<HTMLDivElement>(null)
    const sectionRef = useRef<HTMLDivElement>(null) // Ref for the target section

    useEffect(() => {
      const handleScroll = () => {
        if (!sectionRef.current) return

        const sectionTop = sectionRef.current.getBoundingClientRect().top // Khoảng cách từ top cửa sổ
        const sectionHeight = sectionRef.current.clientHeight // Chiều cao của phần tử
        const headerHeight = 100 // Chiều cao giả định của header
        const threshold = headerHeight // Ngưỡng gần header để bắt đầu thay đổi

        if (sectionTop <= threshold && sectionTop + sectionHeight >= 0) {
          // Tính toán tỷ lệ cuộn dựa trên vị trí hiện tại của phần tử
          const progress = Math.min(Math.max((threshold - sectionTop) / sectionHeight, 0), 1)

          // Cập nhật giá trị rotation dựa vào progress
          const minRotation = -1.5
          const maxRotation = 2.3
          const newRotation = progress * (maxRotation - minRotation) + minRotation

          const minDivRotation = 1.5
          const maxDivRotation = 5
          const newDivRotation = progress * (maxDivRotation - minDivRotation) + minDivRotation

          setRotation(newRotation)
          setDivRotation(newDivRotation)
        } else {
          // Reset nếu phần tử không còn trong khung nhìn
          setRotation(-1.34993)
          setDivRotation(1.5)
        }
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            window.addEventListener("scroll", handleScroll)
          } else {
            window.removeEventListener("scroll", handleScroll)
          }
        },
        { threshold: 0.5 },
      )

      if (sectionRef.current) {
        observer.observe(sectionRef.current)
      }

      return () => {
        window.removeEventListener("scroll", handleScroll)
        if (sectionRef.current) observer.unobserve(sectionRef.current)
      }
    }, [])

    const isMobile = useIsMobile()

    return (
      <div ref={sectionRef}>
        {responsiveCSS}
        <Swiper
          spaceBetween={spaceBetween}
          slidesPerView={isMobile ? 3 : slidesPerView}
          pagination={false}
          modules={[Pagination, Autoplay, Navigation]}
          navigation={{ nextEl: ".custom-next-slick-arrow-orange", prevEl: ".custom-prev-slick-arrow-orange" }}
          loop={loop}
          speed={speed}
          autoplay={{ delay: timeDelay }}
          className={`${id} ${twMerge(className)}`}
          style={{
            transform: `rotate(${rotation}deg)`,
            willChange: "transform",
            transitionProperty: "all",
            transitionDuration: "0.5s",
            transitionTimingFunction: "ease-in",
          }}
          ref={sliderRef}
        >
          {slides.map(({ id, image, url }, index) => (
            <SwiperSlide key={index}>
              <div rel="noopener noreferrer" className="relative w-full h-[48px] sm:h-[80px] block overflow-hidden">
                <div className="w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-105">
                  <img
                    src={getImageUrl(image) || DefaultImage}
                    alt={`Slide ${index}`}
                    className="object-contain h-[48px] w-auto sm:h-[80px] sm:w-[233px]"
                    width="128"
                    height="128"
                    loading="lazy"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          ref={divRef}
          className="absolute top-[60px] left-0 right-0"
          style={{
            transform: `rotate(${divRotation}deg)`,
            willChange: "transform",
            backgroundImage: "linear-gradient(180deg, #ECEFFE 0%, #FFADFD 100%)",
          }}
        >
          {/* Your content inside the div */}
        </div>
      </div>
    )
  },
}
