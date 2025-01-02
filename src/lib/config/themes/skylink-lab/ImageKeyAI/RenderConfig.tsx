"use client"
import { ComponentConfig } from "@measured/puck"
import { useEffect, useRef, useState } from "react"
import { twMerge } from "tailwind-merge"
import { configs, DefaultImage } from "../../../../external-components"
import { CommonStylesProps } from "../../../lib/commonCSSProps"
import { generateResponsiveCSS } from "../../../lib/helper"

export interface ImageKeyAIProps extends CommonStylesProps {
  padding?: string
  border?: string
  heightStyle?: string
  witdhMobile?: string
  widthDesktop?: string
  widthTablet?: string
  heightMobile?: string
  heightTablet?: string
  imageUrl?: string
  borderRadius?: string
  margin?: string
  multiple?: boolean
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"
}

export const RenderConfig: ComponentConfig<ImageKeyAIProps> = {
  render: ({
    padding,
    border,
    witdhMobile,
    widthDesktop,
    widthTablet,
    heightStyle,
    heightMobile,
    heightTablet,
    imageUrl,
    borderRadius,
    margin,
    multiple,
    objectFit,
    responsiveType,
    className,
  }) => {
    const id = `Image-${Math.random().toString(36).substr(2, 9)}`
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const [offset, setOffset] = useState(50)
    const [isVisible, setIsVisible] = useState(false)

    const styles = {
      mobile: { height: heightMobile, display: "block", width: witdhMobile },
      tablet: { height: heightTablet, display: "block", width: widthTablet },
      desktop: { height: heightStyle, display: "block", width: widthDesktop },
    }

    useEffect(() => {
      const handleScroll = () => {
        if (isVisible) {
          const scrollY = window.scrollY || window.pageYOffset
          const maxScroll = 300 // Chỉnh độ dài của scroll

          // Tính toán giá trị translateY từ 50px đến -100px khi cuộn xuống và từ -100px lên 50px khi cuộn lên
          const translateValue = Math.min(-30, Math.max(30, 30 - (scrollY / maxScroll) * 150))

          setOffset(translateValue)
        } else {
          const scrollY = window.scrollY || window.pageYOffset
          const maxScroll = 300 // Chỉnh độ dài của scroll
          const translateValue = Math.min(30, Math.max(-30, -30 + (scrollY / maxScroll) * 150))
          setOffset(translateValue)
        }
      }

      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, [isVisible])

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting)
        },
        { threshold: 0.01 },
      )

      if (sectionRef.current) observer.observe(sectionRef.current)
      return () => observer.disconnect()
    }, [])

    return (
      <div className="w-full sm:w-[39.332%] h-full p-2.5 flex justify-center">
        {generateResponsiveCSS(id, styles || {}, responsiveType)}

        <div className="w-full flex justify-center content-start relative" ref={sectionRef}>
          <div className="absolute left-0 sm:left-[10%] w-full h-[220px] sm:w-[80%] sm:h-[300px] top-[25%] z-0 bg-gradient-180 rounded-[24px]"></div>
          <img
            id={id}
            src={imageUrl ? `${configs.API_URL}${imageUrl}` : DefaultImage}
            alt="placeholder"
            className={`${id} ${twMerge(className)} ${
              objectFit == "cover"
                ? "object-cover"
                : objectFit === "contain"
                ? "object-contain"
                : objectFit === "fill"
                ? "object-fill"
                : objectFit === "scale-down"
                ? "object-scale-down"
                : ""
            } ${multiple ? "mix-blend-multiply" : ""} z-10`}
            style={{
              padding,
              borderRadius,
              margin,
              transform: `translateY(${offset}px)`,
              willChange: "transform",
              transition: "transform 0.3s ease-out",
            }}
          />
        </div>
      </div>
    )
  },
}
