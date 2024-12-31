"use client"

import { ComponentConfig } from "@measured/puck"
import "swiper/css"
import "swiper/css/pagination"
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { configs, DefaultImage } from "../../../../external-components"

export type GalleryLayoutProps = {
  items: {
    id?: number
    images?: string[]
    url: string
  }[]
}

export const RenderConfig: ComponentConfig<GalleryLayoutProps> = {
  render: ({ items }) => {
    const generateSlides = (images?: string[], url?: string) =>
      images?.length ? (
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 10000 }}
          pagination={{
            clickable: true,
            bulletClass: "custom-swiper-pagination-bullet",
            bulletActiveClass: "custom-swiper-pagination-bullet-active",
          }}
          modules={[Autoplay, Pagination]}
          className="w-full h-full rounded-2xl"
        >
          {images.map((image, idx) => (
            <SwiperSlide key={idx}>
              <a href={url || "#"} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <img
                  src={`${configs.API_URL}${image}`}
                  alt={`Slide ${idx}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <img src={DefaultImage} alt="Default" className="w-full h-full object-cover rounded-2xl" />
      )

    return (
      <div className="flex flex-col sm:grid sm:grid-cols-3 gap-3 sm:gap-6 px-4 sm:p-0">
        <div className="flex flex-row sm:flex-col gap-3 sm:gap-6">
          <div className="w-[48%] sm:w-full sm:h-[252px] h-[132px]">
            {generateSlides(items[0]?.images, items[0]?.url)}
          </div>
          <div className="w-[48%] sm:w-full sm:h-[384px] h-[132px]">
            {generateSlides(items[1]?.images, items[1]?.url)}
          </div>
        </div>

        <div className="sm:h-full h-[132px]">{generateSlides(items[2]?.images, items[2]?.url)}</div>

        <div className="flex flex-row sm:flex-col gap-3 sm:gap-6">
          <div className="w-[48%] sm:w-full sm:h-[384px] h-[132px]">
            {generateSlides(items[3]?.images, items[3]?.url)}
          </div>
          <div className="w-[48%] sm:w-full sm:h-[252px] h-[132px]">
            {generateSlides(items[4]?.images, items[4]?.url)}
          </div>
        </div>
      </div>
    )
  },
}
