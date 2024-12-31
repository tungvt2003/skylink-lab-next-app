"use client"
import { Images } from "@/constants/images"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import "swiper/css"
import "swiper/css/pagination"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "../../styles/custom-bullet-section.css"
const CardSystemBase = ({ title, nameBase }: { title: string; nameBase: string }) => {
  const pagination = {
    clickable: true,
    bulletClass: "custom-swiper-pagination-section-bullet",
    bulletActiveClass: "custom-swiper-pagination-section-bullet-active",
    renderBullet: function (index: number, className: string) {
      return `<span class="${className}">${""}</span>`
    },
  }

  return (
    <div className="">
      <Swiper
        pagination={pagination}
        spaceBetween={16}
        slidesPerView={1}
        autoplay={{ delay: 3500 }}
        modules={[Pagination, Autoplay, Navigation]}
        loop={true}
        className="rounded-xl"
        speed={600}
        navigation={{ nextEl: ".custom-next-slick-arrow-orange", prevEl: ".custom-prev-slick-arrow-orange" }}
      >
        {Array(3)
          .fill(0)
          .map((_, index) => {
            return (
              <SwiperSlide>
                <Link href={"#"} target="_blank">
                  <div className="relative h-[472px] rounded-xl">
                    <Image src={Images.bannerHome} alt="banner" fill={true} sizes="100vw" />
                  </div>
                </Link>
              </SwiperSlide>
            )
          })}
      </Swiper>
      <div className="mx-25 mt-12 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="text-base leading-5.5">{nameBase}</div>
          <div className="font-semibold text-3.5xl leading-12 uppercase">{title}</div>
        </div>
        <div className="text-base">
          Lorem ipsum dolor sit amet consectetur. Nibh et risus sed neque. Sed placerat ornare feugiat tempor lacus
          dolor. In a ac amet ullamcorper. Sed condimentum laoreet amet elit pulvinar. Viverra vel faucibus mauris
          vestibulum nec. Sagittis nullam commodo sit praesent sit ut tellus. Aliquam sit massa nunc velit in tortor
          lobortis imperdiet faucibus. Nulla consectetur varius adipiscing ut sagittis. Sollicitudin netus imperdiet
          ultrices sem amet mauris.
        </div>
        <div>
          <Link
            href=""
            className="flex w-fit items-center shadow-custom text-sm font-semibold text-white h-[3.125rem] bg-green border-[1.5px] border-green-secondary rounded-lg px-4 py-3 hover:bg-green-secondary hover:text-white"
          >
            Đăng ký tham quan
            <ChevronRight />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CardSystemBase
