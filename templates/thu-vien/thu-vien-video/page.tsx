"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Images } from "../../../../constants/images"

const VideoGallery = () => {
  const [lightboxVideo, setLightboxVideo] = useState<string | null>(null)
  const pathname = usePathname()

  const videos: { src: string; title: string }[] = [
    { src: "BWAsU3W7_p8", title: "SKYLINE - TRƯỜNG HỌC ĐIỂN HÌNH" },
    { src: "YOF9Yub_w7s", title: "SKYLINE - TRƯỜNG HỌC ĐIỂN HÌNH" },
    { src: "nNXoUl0hyVM", title: "SKYLINE - TRƯỜNG HỌC ĐIỂN HÌNH" },
    { src: "QqfMr_U1yMk", title: "SKYLINE - TRƯỜNG HỌC ĐIỂN HÌNH" },
    { src: "zAilNErO0-4", title: "SKYLINE - TRƯỜNG HỌC ĐIỂN HÌNH" },
    { src: "prAtNzJ72Fo", title: "SKYLINE - TRƯỜNG HỌC ĐIỂN HÌNH" },
    { src: "VXEKq36c0gU", title: "SKYLINE - TRƯỜNG HỌC ĐIỂN HÌNH" },
    { src: "3p9Y0Ti5q6k", title: "SKYLINE - TRƯỜNG HỌC ĐIỂN HÌNH" },
    { src: "bhhvmXOcYqw", title: "SKYLINE - TRƯỜNG HỌC ĐIỂN HÌNH" },
  ]

  const backgrounds = [
    Images.imageCustomer1.src,
    Images.imageCustomer2.src,
    Images.imageCustomer3.src,
    Images.imageCustomer4.src,
    Images.imageStudent1.src,
    Images.imageStaff.src,
    Images.studentNew1.src,
    Images.studentNew2.src,
    Images.partnerImage1.src,
  ]

  const openLightbox = (src: string) => {
    setLightboxVideo(src)
  }

  const closeLightbox = () => {
    setLightboxVideo(null)
  }

  const isCurrentPage = (path: string) => pathname === path

  const getLinkClassName = (path: string) =>
    `text-base font-inter leading-[24px] ${isCurrentPage(path) ? "text-[#31343E]" : "text-[#777777]"}`

  return (
    <div className="container mx-auto py-12">
      <nav className="mb-8">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className={getLinkClassName("/")}>
              Trang chủ
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/library" className={getLinkClassName("/library")}>
              Thư viện
            </Link>
          </li>
          <li>/</li>
          <li>
            <span className={`text-[#31343E] font-inter leading-[24px]`}>Thư viện video</span>
          </li>
        </ol>
      </nav>
      <h1 className="text-center text-black font-inter text-[32px] font-[600] leading-[40px] mb-16">THƯ VIỆN VIDEO</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 mb-[100px] gap-8">
        {videos.map((video, index) => (
          <div key={index} className="relative group">
            <div
              className="w-full h-[333px] bg-gray-200 shadow-md cursor-pointer transition-transform transform hover:scale-105 flex items-center justify-center relative overflow-hidden"
              onClick={() => openLightbox(video.src)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${backgrounds[index]})` }}
              />
              <span className="absolute bottom-0 left-0 right-0 p-4 text-center text-lg text-white bg-gradient-to-t from-black to-transparent group-hover:bg-gradient-to-t group-hover:from-[#00A19A] group-hover:to-transparent transition-colors duration-300">
                <span
                  className="cursor-pointer"
                  onClick={e => {
                    e.stopPropagation()
                    openLightbox(video.src)
                  }}
                >
                  {video.title}
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {lightboxVideo && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={closeLightbox}
        >
          <div className="relative w-[90vw] h-[50.625vw] md:w-[80vw] md:h-[45vw] lg:w-[70vw] lg:h-[39.375vw]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${lightboxVideo}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onClick={e => e.stopPropagation()}
            ></iframe>
          </div>
          <span className="absolute top-4 right-4 text-white text-3xl cursor-pointer" onClick={closeLightbox}>
            &times;
          </span>
        </div>
      )}
    </div>
  )
}

export default VideoGallery
