"use client"

import { ComponentConfig } from "@measured/puck"
import "swiper/css"
import "swiper/css/pagination"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { DefaultImage, IconArrowLeft, IconArrowRight } from "../../../../external-components"
import { generateImagePath } from "../../../../utils"
import { CommonStylesProps } from "../../../lib/commonCSSProps"
import useIsMobile from "../../../lib/use-is-mobile"
import "./css/custom-bullet.css"

interface ItemSliderProps {
  id?: number
  imgLeft?: string
  imgCenterLeft?: string
  imgCenterRight?: string
  imgRight?: string
}

export interface SKESimpleSliderProps extends CommonStylesProps {
  items: ItemSliderProps[]
}

export const RenderConfig: ComponentConfig<SKESimpleSliderProps> = {
  render: ({ items }) => {
    const id = `simple-slider-${Math.random().toString(36).substr(2, 9)}`
    const isMobile = useIsMobile()

    return (
      <>
        <Swiper
          navigation={{
            prevEl: `#${id}-prev`,
            nextEl: `#${id}-next`,
          }}
          modules={[Navigation]}
          spaceBetween={20}
          loop={true}
        >
          <SwiperSlide>
            {isMobile ? (
              <>
                <div className="px-4 flex pb-3">
                  <div className="flex flex-col items-start gap-0.5 w-1/2">
                    <div className="flex flex-col gap-1 items-start">
                      <div className="text-green text-base font-bold">01</div>
                      <div className="text-4.25 leading-[18px] font-medium text-[#31343E]">Hoạt động ngoài giờ</div>
                    </div>
                    <div className="py-1.5">
                      <img
                        id={`${id}-prev`}
                        src={IconArrowLeft}
                        alt="icon"
                        className="h-[11px] w-[24px] cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1 w-1/2">
                    <div className="flex flex-col gap-0.5 items-end">
                      <div className="text-green text-base font-bold">02</div>
                      <div className="text-4.25 leading-[18px] font-medium text-[#31343E]">Hoạt động trên lớp</div>
                    </div>
                    <div className="py-1.5">
                      <img
                        id={`${id}-prev`}
                        src={IconArrowRight}
                        alt="icon"
                        className="h-[11px] w-[24px] cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 px-4 gap-3">
                  <div className="relative overflow-hidden rounded-lg">
                    <div className="w-full h-[220px] transition-transform duration-300 ease-in-out transform hover:scale-105">
                      <img
                        src={
                          items && items[0]?.imgRight
                            ? generateImagePath(items[0]?.imgRight, isMobile ? "small" : "medium")
                            : DefaultImage
                        }
                        alt="image"
                        className="w-full h-[220px] object-cover rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-lg">
                    <div className="w-full h-[220px] transition-transform duration-300 ease-in-out transform hover:scale-105">
                      <img
                        src={
                          items && items[0]?.imgCenterLeft
                            ? generateImagePath(items[0]?.imgCenterLeft, isMobile ? "small" : "medium")
                            : DefaultImage
                        }
                        alt="image"
                        className="w-full h-[220px] object-cover rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-lg">
                    <div className="w-full h-[220px] transition-transform duration-300 ease-in-out transform hover:scale-105">
                      <img
                        src={
                          items && items[0]?.imgCenterRight
                            ? generateImagePath(items[0]?.imgCenterRight, isMobile ? "small" : "medium")
                            : DefaultImage
                        }
                        alt="image"
                        className="w-full h-[220px] object-cover rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-lg">
                    <div className="w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-105">
                      <img
                        src={
                          items && items[0]?.imgLeft
                            ? generateImagePath(items[0]?.imgLeft, isMobile ? "small" : "medium")
                            : DefaultImage
                        }
                        alt="image"
                        className="w-full h-[220px] object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex w-full gap-5 relative h-full">
                <div className="w-[16.666%] flex-none flex flex-col gap-12 relative overflow-hidden">
                  <div className="w-full h-full relative overflow-hidden rounded-tr-xl rounded-br-xl group">
                    <div className="w-full h-full transition-transform duration-300 ease-in-out transform group-hover:scale-105">
                      <img
                        src={
                          items && items[0]?.imgLeft
                            ? generateImagePath(items[0]?.imgLeft, isMobile ? "small" : "medium")
                            : DefaultImage
                        }
                        alt="image"
                        className="w-full h-full rounded-tr-xl rounded-br-xl object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-5">
                    <div className=" pt-[8px] pb-[8.13px] pl-[5.33px] pr-[6.4px]">
                      <img
                        id={`${id}-prev`}
                        src={IconArrowLeft}
                        alt="icon"
                        className="h-[15.87px] w-[20.27px] cursor-pointer"
                      />
                    </div>
                    <div className="flex flex-col gap-1 items-end">
                      <div className="text-lg leading-6 font-medium text-[#31343E]">Hoạt động trên lớp</div>
                      <div className="text-green text-3.5xl leading-12 font-bold">02</div>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-row gap-5 h-full">
                    <div className="w-[36.18%] h-full relative overflow-hidden rounded-xl">
                      <div className="w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-105">
                        <img
                          src={
                            items && items[0]?.imgCenterLeft
                              ? generateImagePath(items[0]?.imgCenterLeft, isMobile ? "small" : "medium")
                              : DefaultImage
                          }
                          alt="image"
                          className="w-full h-[489px] object-cover rounded-xl"
                        />
                      </div>
                    </div>
                    <div className="w-[63.83%] h-full relative overflow-hidden rounded-xl">
                      <div className="w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-105">
                        <img
                          src={
                            items && items[0]?.imgCenterRight
                              ? generateImagePath(items[0]?.imgCenterRight, isMobile ? "small" : "medium")
                              : DefaultImage
                          }
                          alt="image"
                          className="w-full h-[489px] object-cover rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[16.666%] flex-none flex flex-col gap-12">
                  <div className="flex flex-col items-start gap-5">
                    <div className="flex flex-col gap-1 items-start">
                      <div className="text-green text-3.5xl leading-12 font-bold">01</div>
                      <div className="text-lg leading-6 font-medium text-[#31343E]">Hoạt động ngoài giờ</div>
                    </div>
                    <div className=" pt-[8px] pb-[8.13px] pl-[5.33px] pr-[6.4px]">
                      <img
                        id={`${id}-next`}
                        src={IconArrowRight}
                        alt="icon"
                        className="h-[15.87px] w-[20.27px] cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-tl-xl rounded-bl-xl w-full h-full">
                    <div className="w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-105">
                      <img
                        src={
                          items && items[0]?.imgRight
                            ? generateImagePath(items[0]?.imgRight, isMobile ? "small" : "medium")
                            : DefaultImage
                        }
                        alt="image"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>

          <SwiperSlide>
            {isMobile ? (
              <>
                <div className="px-4 flex pb-3">
                  <div className="flex flex-col items-start gap-0.5 w-1/2">
                    <div className="flex flex-col gap-1 items-start">
                      <div className="text-green text-base font-bold">02</div>
                      <div className="text-4.25 leading-[18px] font-medium text-[#31343E]">Hoạt động trên lớp</div>
                    </div>
                    <div className="py-1.5">
                      <img
                        id={`${id}-prev`}
                        src={IconArrowLeft}
                        alt="icon"
                        className="h-[11px] w-[24px] cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1 w-1/2">
                    <div className="flex flex-col gap-0.5 items-end">
                      <div className="text-green text-base font-bold">01</div>
                      <div className="text-4.25 leading-[18px] font-medium text-[#31343E]">Hoạt động ngoài giờ</div>
                    </div>
                    <div className="py-1.5">
                      <img
                        id={`${id}-prev`}
                        src={IconArrowRight}
                        alt="icon"
                        className="h-[11px] w-[24px] cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 px-4 gap-3">
                  <div className="relative overflow-hidden rounded-lg">
                    <div className="w-full h-[220px] transition-transform duration-300 ease-in-out transform hover:scale-105">
                      <img
                        src={
                          items && items[1]?.imgRight
                            ? generateImagePath(items[1]?.imgRight, isMobile ? "small" : "medium")
                            : DefaultImage
                        }
                        alt="image"
                        className="w-full h-[220px] object-cover rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-lg">
                    <div className="w-full h-[220px] transition-transform duration-300 ease-in-out transform hover:scale-105">
                      <img
                        src={
                          items && items[1]?.imgCenterLeft
                            ? generateImagePath(items[1]?.imgCenterLeft, isMobile ? "small" : "medium")
                            : DefaultImage
                        }
                        alt="image"
                        className="w-full h-[220px] object-cover rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-lg">
                    <div className="w-full h-[220px] transition-transform duration-300 ease-in-out transform hover:scale-105">
                      <img
                        src={
                          items && items[1]?.imgCenterRight
                            ? generateImagePath(items[1]?.imgCenterRight, isMobile ? "small" : "medium")
                            : DefaultImage
                        }
                        alt="image"
                        className="w-full h-[220px] object-cover rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-lg">
                    <div className="w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-105">
                      <img
                        src={
                          items && items[1]?.imgLeft
                            ? generateImagePath(items[1]?.imgLeft, isMobile ? "small" : "medium")
                            : DefaultImage
                        }
                        alt="image"
                        className="w-full h-[220px] object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex w-full gap-5 relative h-full">
                <div className="w-[16.666%] flex-none flex flex-col gap-12 relative overflow-hidden">
                  <div className="w-full h-full relative overflow-hidden rounded-tr-xl rounded-br-xl group">
                    <div className="w-full h-full transition-transform duration-300 ease-in-out transform group-hover:scale-105">
                      <img
                        src={
                          items && items[1]?.imgLeft
                            ? generateImagePath(items[1]?.imgLeft, isMobile ? "small" : "medium")
                            : DefaultImage
                        }
                        alt="image"
                        className="w-full h-full rounded-tr-xl rounded-br-xl object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-5">
                    <div className=" pt-[8px] pb-[8.13px] pl-[5.33px] pr-[6.4px]">
                      <img
                        id={`${id}-prev`}
                        src={IconArrowLeft}
                        alt="icon"
                        className="h-[15.87px] w-[20.27px] cursor-pointer"
                      />
                    </div>
                    <div className="flex flex-col gap-1 items-end">
                      <div className="text-lg leading-6 font-medium text-[#31343E]">Hoạt động ngoài giờ</div>
                      <div className="text-green text-3.5xl leading-12 font-bold">01</div>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-row gap-5 h-full">
                    <div className="w-[36.18%] h-full relative overflow-hidden rounded-xl">
                      <div className="w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-105">
                        <img
                          src={
                            items && items[1]?.imgCenterLeft
                              ? generateImagePath(items[1]?.imgCenterLeft, isMobile ? "small" : "medium")
                              : DefaultImage
                          }
                          alt="image"
                          className="w-full h-[489px] object-cover rounded-xl"
                        />
                      </div>
                    </div>
                    <div className="w-[63.83%] h-full relative overflow-hidden rounded-xl">
                      <div className="w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-105">
                        <img
                          src={
                            items && items[1]?.imgCenterRight
                              ? generateImagePath(items[1]?.imgCenterRight, isMobile ? "small" : "medium")
                              : DefaultImage
                          }
                          alt="image"
                          className="w-full h-[489px] object-cover rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[16.666%] flex-none flex flex-col gap-12">
                  <div className="flex flex-col items-start gap-5">
                    <div className="flex flex-col gap-1 items-start">
                      <div className="text-green text-3.5xl leading-12 font-bold">02</div>
                      <div className="text-lg leading-6 font-medium text-[#31343E]">Hoạt động trên lớp</div>
                    </div>
                    <div className=" pt-[8px] pb-[8.13px] pl-[5.33px] pr-[6.4px]">
                      <img
                        id={`${id}-next`}
                        src={IconArrowRight}
                        alt="icon"
                        className="h-[15.87px] w-[20.27px] cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-tl-xl rounded-bl-xl w-full h-full">
                    <div className="w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-105">
                      <img
                        src={
                          items && items[1]?.imgRight
                            ? generateImagePath(items[1]?.imgRight, isMobile ? "small" : "medium")
                            : DefaultImage
                        }
                        alt="image"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        </Swiper>
      </>
    )
  },
}
