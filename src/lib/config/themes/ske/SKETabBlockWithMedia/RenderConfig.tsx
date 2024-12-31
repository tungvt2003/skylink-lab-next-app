import { ComponentConfig } from "@measured/puck"
import { useRef, useState } from "react"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { configs, DefaultImage } from "../../../../external-components"
import { CommonStylesProps } from "../../../lib/commonCSSProps"

export interface ItemProps {
  icon: string
  iconHover: string
  title: string
  description: string
  img: string
}

export interface SKETabBlockWithMediaProps extends CommonStylesProps {
  items: ItemProps[]
}

export const RenderConfig: ComponentConfig<SKETabBlockWithMediaProps> = {
  render: ({ className, items }) => {
    const id = `tab-block-media-${Math.random().toString(36).substr(2, 9)}`

    const [activeIndex, setActiveIndex] = useState(0)
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    const swiperRef = useRef<any>(null)

    const handleItemClick = (index: number) => {
      setActiveIndex(index)
      if (swiperRef.current) {
        swiperRef.current.slideTo(index)
      }
    }

    const pagination = "default"

    const paginationCustom = {
      clickable: true,
      bulletClass:
        pagination === "default" ? "custom-swiper-pagination-bullet-post" : "custom-swiper-pagination-section-bullet",
      bulletActiveClass:
        pagination === "default"
          ? "custom-swiper-pagination-bullet-post-active"
          : "custom-swiper-pagination-section-bullet-active",
      renderBullet: function (index: number, className: string) {
        return `<span class="${className}">${""}</span>`
      },
    }

    return (
      <>
        <div className="flex flex-col-reverse gap-6 sm:flex-row sm:gap-20 mx-auto items-center sm:items-stretch">
          <div className="sm:w-1/2 flex flex-col gap-3 sm:gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                onClick={() => handleItemClick(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`p-4 sm:p-6 rounded-xl border border-[#f4f0ff] cursor-pointer transition-colors duration-300 hover:bg-green group ${activeIndex === index ? "bg-teal-600 text-white" : "bg-white text-black"
                  }`}
              >
                <div className="flex items-center justify-start gap-4 sm:gap-6">
                  <div className="rounded-xl overflow-hidden w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0">
                    <img
                      src={
                        activeIndex === index || hoveredIndex === index
                          ? configs.API_URL + item.iconHover
                          : configs.API_URL + item.icon
                      }
                      alt="icon"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3
                      className={`text-left text-sm sm:text-lg sm:leading-6 font-semibold group-hover:text-white ${activeIndex === index ? "text-white" : "text-[#0e0101]"
                        }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-4.25 leading-5.25 sm:text-sm font-normal group-hover:text-white text-justify ${activeIndex === index ? "text-white" : "text-[#666173]"
                        } `}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full sm:w-[35.5rem] flex flex-col items-center relative h-full">
            <Swiper
              modules={[Pagination]}
              pagination={paginationCustom}
              onSwiper={swiper => {
                swiperRef.current = swiper
              }}
              onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
              className="rounded-3xl overflow-hidden h-[14.25rem] sm:h-[37.25rem] w-full custom-swiper-post2"
            >
              {items.map((item, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={items[activeIndex]?.img ? configs.API_URL + items[activeIndex]?.img : DefaultImage}
                    alt={`Image ${index}`}
                    className="rounded-3xl h-full w-full object-cover transition-all duration-500 ease-in-out transform"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div >
        </div >
      </>
    )
  },
}
