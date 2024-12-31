"use client"
import { ComponentConfig } from "@measured/puck"
import { useEffect, useRef, useState } from "react"
import { generateImagePath } from "../../../utils"
import { generateResponsiveCSS } from "../../lib/helper"
import useIsMobile from "../../lib/use-is-mobile"

export type GalleryProps = {
  items: { id?: number; image?: string; url: string; title: string }[]
  height?: number
  styles?: {
    mobile?: React.CSSProperties
    tablet?: React.CSSProperties
    desktop?: React.CSSProperties
  }
}

export const RenderConfig: ComponentConfig<GalleryProps> = {
  render: ({ items, styles }) => {
    const id = `gallery-${Math.random().toString(36).substr(2, 9)}`
    const isMobile = useIsMobile()

    const refs = useRef<(HTMLAnchorElement | null)[]>([])
    const [inViewItems, setInViewItems] = useState<boolean[]>([])

    useEffect(() => {
      setInViewItems(new Array(items.length).fill(false))
    }, [items.length])

    useEffect(() => {
      if (!refs.current.length) return

      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            const index = refs.current.findIndex(ref => ref === entry.target)
            if (index !== -1 && entry.isIntersecting !== inViewItems[index]) {
              setInViewItems(prevState => {
                const newState = [...prevState]
                newState[index] = entry.isIntersecting
                return newState
              })
            }
          })
        },
        {
          threshold: 0.7,
          rootMargin: "0px 0px -10% 0px",
        },
      )

      refs.current.forEach(ref => {
        if (ref) observer.observe(ref)
      })

      return () => observer.disconnect()
    }, [items.length, refs.current, inViewItems])

    const mergedStyles = {
      mobile: { display: "block", ...styles?.mobile },
      tablet: { display: "flex", ...styles?.tablet },
      desktop: { display: "flex", ...styles?.desktop },
    }

    const responsiveCSS = generateResponsiveCSS(id, mergedStyles)

    return (
      <>
        {isMobile ? (
          <>
            {responsiveCSS}
            <div className={`gallery-container ${id}`} style={{ position: "relative", height: "100%" }}>
              {items.map(({ id, image, url, title }, index) => (
                <a
                  ref={el => {
                    refs.current[index] = el
                  }}
                  href={url}
                  className={`gallery-item ${id}`}
                  key={index}
                  style={{
                    position: "relative",
                    display: "block",
                    height: "26.125rem",
                    textAlign: "center",
                    overflow: "hidden",
                    width: "100%",
                  }}
                >
                  <img
                    src={generateImagePath(image, "large")}
                    alt="banner"
                    className={`gallery-img ${id}`}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                  <div
                    className="overlay"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: "rgba(0, 0, 0, 0.4)",
                      transition: "transform 0.3s ease-in-out",
                      transform: inViewItems[index] ? "translateY(100%)" : "translateY(0)", // Điều chỉnh trạng thái này
                      zIndex: 10,
                    }}
                  ></div>
                  <div
                    className="content"
                    style={{
                      position: "absolute",
                      left: "50%",
                      bottom: 0,
                      transform: "translateX(-50%)",
                      background: "linear-gradient(to top, black, transparent)",
                      width: "100%",
                      textAlign: "center",
                      color: "white",
                      padding: "1.719rem",
                      transition: "background 0.3s ease-in-out",
                      zIndex: 20,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "18px",
                        lineHeight: "24px",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {title}
                    </span>
                    <div
                      style={{
                        width: "5rem",
                        height: "2px",
                        backgroundColor: "#00a19a",
                        textAlign: "center",
                      }}
                    ></div>
                  </div>
                </a>
              ))}
            </div>
          </>
        ) : (
          <>
            {responsiveCSS}
            <div className={`${id}`}>
              {items.map(({ id, image, url, title }, index) => (
                <a
                  href={url}
                  className={`${id} item relative group h-[26.125rem] w-[25%] text-center overflow-hidden`}
                  key={index}
                >
                  <img
                    src={generateImagePath(image, "large")}
                    alt="banner"
                    className={`${id} h-[26.125rem] w-full relative object-cover`}
                  />
                  <div className="absolute inset-0 bg-[#00000066] transition-transform duration-300 ease-in-out transform translate-y-0 group-hover:translate-y-[-100%]"></div>
                  <div
                    className="absolute w-full left-[50%] bottom-0 translate-x-[-50%] flex flex-col items-center gap-2 py-[1.719rem]
               ease-in-out bg-gradient-to-t from-black to-transparent group-hover:bg-gradient-to-t group-hover:from-[#00A19A] 
               group-hover:to-transparent transition-transform duration-300"
                  >
                    <span className="text-2.5xl leading-7 text-white font-bold text-center uppercase max-w-[9.5rem]">
                      {title}
                    </span>
                    <div className="w-20 h-[2px] bg-[#00A19A] group-hover:bg-transparent" />
                  </div>
                </a>
              ))}
            </div>
          </>
        )}
      </>
    )
  },
}
