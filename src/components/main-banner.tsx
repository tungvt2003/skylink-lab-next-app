"use client"
import { Images } from "@/constants/images"
import Image from "next/image"
import Link from "next/link"
import "swiper/css"
import "swiper/css/pagination"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "../styles/custom-bullet.css"

const MainBanner = () => {
  const pagination = {
    clickable: true,
    bulletClass: "custom-swiper-pagination-bullet",
    bulletActiveClass: "custom-swiper-pagination-bullet-active",
    renderBullet: function (index: number, className: string) {
      return `<span class="${className}">${""}</span>`
    },
  }

  return (
    <Swiper
      pagination={pagination}
      spaceBetween={16}
      slidesPerView={1}
      autoplay={{ delay: 3500 }}
      modules={[Pagination, Autoplay, Navigation]}
      loop={true}
      speed={600}
      navigation={{ nextEl: ".custom-next-slick-arrow-orange", prevEl: ".custom-prev-slick-arrow-orange" }}
    >
      {Array(5)
        .fill(0)
        .map((_, index) => {
          return (
            <SwiperSlide>
              <Link href={"#"} target="_blank">
                <div className="relative h-[533px]">
                  <Image src={Images.bannerHome} alt="banner" fill={true} sizes="100vw" />
                </div>
              </Link>
            </SwiperSlide>
          )
        })}
    </Swiper>
  )
}

export default MainBanner
