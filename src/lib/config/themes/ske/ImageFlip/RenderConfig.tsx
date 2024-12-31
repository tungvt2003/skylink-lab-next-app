"use client"

import { ComponentConfig } from "@measured/puck"
import { useRef, useState } from "react"
import HTMLFlipBook from "react-pageflip"
import { configs, DefaultImage } from "../../../../external-components"

export type ImageSectionProps = {
  title?: string
  items: {
    id?: number
    image?: string
  }[]
  height?: number
}

export const RenderConfig: ComponentConfig<ImageSectionProps> = {
  render: ({ title, items }: { title?: string; items: ImageSectionProps["items"] }) => {
    const flipBookRef = useRef<any | null>(null)
    const [currentPage, setCurrentPage] = useState(0)

    const handleNextPage = () => {
      if (flipBookRef.current && currentPage < items.length - 1) {
        flipBookRef.current.pageFlip().flipNext()
      }
    }

    const handlePrevPage = () => {
      if (flipBookRef.current && currentPage > 0) {
        flipBookRef.current.pageFlip().flipPrev()
      }
    }

    const onFlip = (e: any) => {
      const newPage = e.data
      if (newPage !== currentPage) {
        setCurrentPage(newPage)
      }
    }

    return (
      <>
        <div className="sm:pb-12 pb-6">
          <p className="sm:text-[40px] sm:leading-[48px] font-bold sm:border-b-4 sm:pb-12 text-base pb-6 border-b-2 uppercase">
            {title}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-100 rounded-lg">
          {items.length > 0 ? (
            <>
              <HTMLFlipBook
                width={585}
                height={900}
                size="stretch"
                showPageCorners={false}
                drawShadow
                maxShadowOpacity={0.5}
                startPage={0}
                className="border border-red mx-[120px] shadow-lg bg-white rounded-lg overflow-hidden"
                flippingTime={1000}
                usePortrait={true}
                autoSize={true}
                clickEventForward={true}
                useMouseEvents={true}
                swipeDistance={30}
                showCover={true}
                mobileScrollSupport={true}
                disableFlipByClick={false}
                minWidth={350}
                maxWidth={1200}
                minHeight={100}
                maxHeight={1200}
                startZIndex={0}
                style={{}}
                onFlip={onFlip}
                ref={flipBookRef}
              >
                {items.map((item, index) => (
                  <div
                    key={index}
                    className={`relative h-[450px] w-full overflow-hidden bg-white ${
                      index % 2 === 0 ? "drop-shadow-2xl" : ""
                    }`}
                  >
                    <img
                      src={item.image ? `${configs.API_URL}${item.image}` : DefaultImage}
                      alt={`FlipBook Image ${index}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </HTMLFlipBook>

              <div className="flex items-center my-4 space-x-4">
                <button
                  onClick={handlePrevPage}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300"
                  disabled={currentPage === 0}
                >
                  Trang trước
                </button>
                <span className="text-gray-700">
                  Trang {currentPage + 1} / {items.length}
                </span>
                <button
                  onClick={handleNextPage}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300"
                  disabled={currentPage === items.length - 1}
                >
                  Trang sau
                </button>
              </div>
            </>
          ) : (
            <div className="text-center text-gray-500">No images available</div>
          )}
        </div>
      </>
    )
  },
}
