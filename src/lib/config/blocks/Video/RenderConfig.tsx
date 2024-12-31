import { ComponentConfig } from "@measured/puck"
import { Modal } from "antd"
import { useState } from "react"
import { twMerge } from "tailwind-merge"
import { ButtonPlay, configs, DefaultImage } from "../../../external-components"
import { generateResponsiveCSS } from "../../lib/helper"

export type VideoProps = {
  linkVideo?: string
  image?: string
  borderRadius?: string
  heightMobile?: string
  heightTablet?: string
  heightDesktop?: string
  widthMobile?: string
  widthTablet?: string
  widthDesktop?: string
  className?: string
}

const convertVideoLink = (link?: string) => {
  if (!link) return ""

  const youtubeMatch = link.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
  )
  if (youtubeMatch) return `https://www.youtube.com/embed/${youtubeMatch[1]}?rel=0`

  const facebookMatch = link.match(/(?:https?:\/\/)?(?:www\.)?facebook\.com\/.*\/videos\/(\d+)/)
  if (facebookMatch) return `https://www.facebook.com/video/embed?video_id=${facebookMatch[1]}`

  const tiktokMatch = link.match(/(?:https?:\/\/)?(?:www\.)?tiktok\.com\/@(\w+)\/video\/(\d+)/)
  if (tiktokMatch) return `https://www.tiktok.com/embed/${tiktokMatch[2]}`

  return link
}

export const RenderConfig: ComponentConfig<VideoProps> = {
  render: ({
    linkVideo,
    image,
    widthMobile,
    widthDesktop,
    heightMobile,
    heightDesktop,
    borderRadius,
    heightTablet,
    widthTablet,
    className,
  }) => {
    const id = `video-${Math.random().toString(36).substr(2, 9)}`
    const [isModalOpen, setIsModalOpen] = useState(false)

    const showModal = () => {
      setIsModalOpen(true)
    }

    const handleOk = () => {
      setIsModalOpen(false)
    }

    const handleCancel = () => {
      setIsModalOpen(false)
    }

    const [currentVideo, setCurrentVideo] = useState<string | undefined>("")

    const openVideoModal = () => {
      const embedLink = convertVideoLink(linkVideo)
      if (embedLink) {
        setCurrentVideo(embedLink)
        setIsModalOpen(true)
      }
    }

    const closeVideoModal = () => {
      setIsModalOpen(false)
      setCurrentVideo("")
    }

    const styles = {
      mobile: {
        height: heightMobile,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: widthMobile,
        borderRadius,
      },
      tablet: {
        height: heightTablet,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: widthTablet,
        borderRadius,
      },
      desktop: {
        height: heightDesktop,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: widthDesktop,
        borderRadius,
      },
    }

    return (
      <>
        {generateResponsiveCSS(id, styles || {})}
        <div id={id} className={`${id} ${twMerge(className)}`}>
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="relative overflow-hidden rounded-xl sm:rounded-2xl w-full h-full cursor-pointer group"
            onClick={openVideoModal}
          >
            <img
              src={image ? `${configs.API_URL}${image}` : DefaultImage}
              alt="banner"
              className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105 group-hover:brightness-90"
            />
            <div className="link_video absolute top-[45%] translate-x-[-50%] left-[50%]">
              <img
                src={ButtonPlay}
                alt="button-play"
                className="w-[2.5rem] h-[2.5rem] sm:w-[5rem] sm:h-[5rem] transition-shadow group-hover:shadow-[0_0_10px_5px_#01A19A] rounded-full duration-500"
              />
            </div>
          </div>
        </div>

        <Modal
          width="33.5rem"
          centered
          footer={null}
          className="modal-mobile p-0 z-9999"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          closable={false}
          destroyOnClose={true}
          transitionName=""
          maskTransitionName=""
        >
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            onClick={closeVideoModal}
          >
            <div
              className="relative w-[90vw] h-[50.625vw] md:w-[80vw] md:h-[45vw] lg:w-[70vw] lg:h-[39.375vw]"
              onClick={e => e.stopPropagation()}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={currentVideo}
                title="Video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="absolute top-4 right-4 text-white text-3xl cursor-pointer" onClick={closeVideoModal}>
              &times;
            </span>
          </div>
        </Modal>
      </>
    )
  },
}
