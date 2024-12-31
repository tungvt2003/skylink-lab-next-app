import { ComponentConfig } from "@measured/puck"
import { useEffect, useState } from "react"
import { configs, DefaultImage } from "../../../external-components"
import { generateResponsiveCSS } from "../../lib/helper"

export type VideoLibraryProps = {
  items: { id?: number; image?: string; url: string; title: string }[]
  height?: number
}

export const RenderConfig: ComponentConfig<VideoLibraryProps> = {
  render: ({ items }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentVideo, setCurrentVideo] = useState("")
    const [showAllVideo, setShowAllVideo] = useState(false)
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768)

    const extractYouTubeId = (url: string): string => {
      try {
        if (!url.includes("http")) return url

        const urlObj = new URL(url)
        return urlObj.searchParams.get("v") || ""
      } catch (error) {
        console.error("Invalid YouTube URL:", error)
        return ""
      }
    }

    const openVideoModal = (videoUrl: string) => {
      const videoId = extractYouTubeId(videoUrl)
      setCurrentVideo(videoId)
      setIsModalOpen(true)
    }

    const closeVideoModal = () => {
      setIsModalOpen(false)
      setCurrentVideo("")
    }

    const id = `gallery-${Math.random().toString(36).substr(2, 9)}`

    // Default styles for desktop
    const desktopStyles = {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "2rem",
    }

    // Styles for mobile
    const mobileStyles = {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    }

    // Generate responsive CSS
    const responsiveCSS = generateResponsiveCSS(id, {
      mobile: mobileStyles,
      desktop: desktopStyles,
    })

    // Check if the screen size changes
    useEffect(() => {
      const handleResize = () => {
        setIsDesktop(window.innerWidth >= 768)
      }

      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, [])

    const itemsToRender = isDesktop || showAllVideo ? items : items.slice(0, 6)

    return (
      <>
        {responsiveCSS}
        <div className={`${id} container`}>
          {itemsToRender.map(({ id, image, url, title }, index) => (
            <div key={index} className="relative group overflow-hidden">
              <img
                src={image ? `${configs.API_URL}${image}` : DefaultImage}
                alt={`gallery item ${id}`}
                className="w-full h-[333px] object-cover shadow-md cursor-pointer transition-transform transform hover:scale-105"
                onClick={() => openVideoModal(url)}
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-4 text-center text-lg text-white bg-gradient-to-t from-black to-transparent group-hover:bg-gradient-to-t group-hover:from-[#00A19A] group-hover:to-transparent transition-colors duration-300 group-hover:scale-105"
                style={{ transformOrigin: "center" }}
              >
                {title}
              </div>
            </div>
          ))}

          {!isDesktop && !showAllVideo && items.length > 6 && (
            <button
              className="mt-4 px-4 py-2 bg-white text-green border border-green font-semibold rounded-xl md:hidden"
              onClick={() => setShowAllVideo(true)}
            >
              Xem thêm
            </button>
          )}

          {isModalOpen && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
              onClick={closeVideoModal}
            >
              <div className="relative w-[90vw] h-[50.625vw] md:w-[80vw] md:h-[45vw] lg:w-[70vw] lg:h-[39.375vw]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${currentVideo}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onClick={e => e.stopPropagation()}
                ></iframe>
              </div>
              <span className="absolute top-4 right-4 text-white text-3xl cursor-pointer" onClick={closeVideoModal}>
                &times;
              </span>
            </div>
          )}
        </div>
      </>
    )
  },
}
