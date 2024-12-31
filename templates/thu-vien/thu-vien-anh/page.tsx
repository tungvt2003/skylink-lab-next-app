"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Images } from "../../../../constants/images"

const PhotoGallery = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null)
  const pathname = usePathname()

  const images: string[] = [
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
    setLightboxImage(src)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  const handleTitleClick = (title: string) => {
    setSelectedTitle(title)
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
            <span className={`text-[#31343E] font-inter leading-[24px]`}>Thư viện ảnh</span>
          </li>
        </ol>
      </nav>
      <h1 className="text-center text-black font-inter text-[32px] font-[600] leading-[40px] mb-8">THƯ VIỆN ẢNH</h1>
      <div className="flex justify-center space-x-[28px] mb-8">
        {["Cơ sở vật chất", "Đội ngũ giáo viên", "Đời sống học sinh"].map(title => (
          <h2
            key={title}
            className={`font-sans text-[18px] font-[600] leading-[24px] text-center flex items-center justify-center 
              w-${title === "Đời sống học sinh" ? "150px" : title === "Đội ngũ giáo viên" ? "155px" : "125px"} h-[24px] 
              border-b-2 transition-all duration-300 ease-in-out
              ${
                selectedTitle === title
                  ? "text-[#00A19A] border-[#00A19A] pb-[16px]"
                  : "text-[#777777] border-transparent pb-[16px]"
              }
              cursor-pointer`}
            onClick={() => handleTitleClick(title)}
          >
            {title}
          </h2>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 mb-24 gap-8">
        {images.map((src, index) => (
          <div key={index} className="relative">
            <Image
              src={src}
              alt={`Ảnh ${index + 1}`}
              className="w-full h-[333px] object-cover shadow-md cursor-pointer transition-transform transform hover:scale-105"
              width={378.67}
              height={333}
              onClick={() => openLightbox(src)}
            />
          </div>
        ))}
      </div>

      {lightboxImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={closeLightbox}
        >
          <Image src={lightboxImage} alt="Ảnh lớn" className="max-w-full max-h-full" width={800} height={600} />
          <span className="absolute top-4 right-4 text-white text-3xl cursor-pointer" onClick={closeLightbox}>
            &times;
          </span>
        </div>
      )}
    </div>
  )
}

export default PhotoGallery
