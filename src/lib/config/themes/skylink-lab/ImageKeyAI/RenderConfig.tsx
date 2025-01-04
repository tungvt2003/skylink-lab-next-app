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
        if (sectionRef.current) {
          const rect = sectionRef.current.getBoundingClientRect() // Lấy vị trí và kích thước phần tử
          const windowHeight = window.innerHeight // Chiều cao của viewport
          const maxScrollHeight = rect.height + windowHeight // Tổng chiều cao để cuộn

          // Tính toán tỷ lệ cuộn trong khoảng phần tử
          const scrollRatio = Math.min(1, Math.max(0, (windowHeight - rect.top) / maxScrollHeight))

          // Chuyển đổi scrollRatio (0 -> 1) thành offsetY (-30 -> 30)
          const newOffset = -30 + scrollRatio * 50 // 60 = 30 - (-30)
          setOffset(newOffset)
        }
      }

      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
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
