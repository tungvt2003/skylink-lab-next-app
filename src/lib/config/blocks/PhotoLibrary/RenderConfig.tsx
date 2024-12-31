"use client"
import { ComponentConfig } from "@measured/puck"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"
import { configs, DefaultImage } from "../../../external-components"
import { generateResponsiveCSS } from "../../lib/helper"

export type PhotoLibraryProps = {
  items: { id?: number; image?: string; url: string; title: string }[]
  height?: number
}

export const RenderConfig: ComponentConfig<PhotoLibraryProps> = {
  render: ({ items }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentImage, setCurrentImage] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)
    const [showAllImages, setShowAllImages] = useState(false)
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768)

    const openImageModal = (image: string, index: number) => {
      setCurrentImage(image)
      setCurrentIndex(index)
      setIsModalOpen(true)
    }

    const closeImageModal = () => {
      setIsModalOpen(false)
    }

    const goToPrevImage = () => {
      if (currentIndex > 0) {
        const newIndex = currentIndex - 1
        setCurrentIndex(newIndex)
        setCurrentImage(items[newIndex].image || DefaultImage)
      }
    }

    const goToNextImage = () => {
      if (currentIndex < items.length - 1) {
        const newIndex = currentIndex + 1
        setCurrentIndex(newIndex)
        setCurrentImage(items[newIndex].image || DefaultImage)
      }
    }

    const id = `gallery-${Math.random().toString(36).substr(2, 9)}`

    const desktopStyles = {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "2rem",
    }

    const mobileStyles = {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    }

    const responsiveCSS = generateResponsiveCSS(id, {
      mobile: mobileStyles,
      desktop: desktopStyles,
    })

    useEffect(() => {
      const handleResize = () => {
        setIsDesktop(window.innerWidth >= 768)
      }

      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, [])

    const itemsToRender = isDesktop || showAllImages ? items : items.slice(0, 6)

    return (
      <>
        {responsiveCSS}
        <div className={`${id} container`}>
          {itemsToRender.map(({ id, image }, index) => (
            <div key={index} className="relative group">
              <img
                src={image ? `${configs.API_URL}${image}` : DefaultImage}
                alt={`gallery item ${id}`}
                className={`${id} image w-full h-[333px] object-cover shadow-md cursor-pointer transition-transform transform hover:scale-105`}
                onClick={() => image && openImageModal(image, index)}
              />
            </div>
          ))}

          {!isDesktop && !showAllImages && items.length > 6 && (
            <button
              className="mt-4 px-4 py-2 bg-white text-green border border-green font-semibold rounded-xl md:hidden"
              onClick={() => setShowAllImages(true)}
            >
              Xem thêm
            </button>
          )}

          {isModalOpen && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
              onClick={closeImageModal}
            >
              <div className="relative flex items-center justify-center" onClick={e => e.stopPropagation()}>
                <button
                  className="absolute left-2 sm:left-[-5rem] w-10 h-10 text-white text-3xl cursor-pointer flex items-center justify-center rounded-full hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={e => {
                    e.stopPropagation()
                    goToPrevImage()
                  }}
                  disabled={currentIndex <= 0}
                >
                  <ChevronLeft width={30} height={30} />
                </button>

                <img
                  src={`${configs.API_URL}${currentImage}`}
                  alt="Large View"
                  className="max-w-full max-h-full"
                  style={{ width: "800px", height: "600px", objectFit: "contain" }}
                  onClick={e => e.stopPropagation()}
                />

                <span
                  className="w-5 h-5 absolute top-8 right-4 text-white text-3xl cursor-pointer"
                  onClick={closeImageModal}
                >
                  &times;
                </span>

                <button
                  className="absolute right-2 sm:right-[-5rem] w-10 h-10 text-white text-3xl cursor-pointer flex items-center justify-center rounded-full hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={e => {
                    e.stopPropagation()
                    goToNextImage()
                  }}
                  disabled={currentIndex >= items.length - 1}
                >
                  <ChevronRight width={30} height={30} />
                </button>
              </div>
            </div>
          )}
        </div>
      </>
    )
  },
}
