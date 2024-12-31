import { Images } from "@/constants/images"
import Image from "next/image"

const CoreValuesBannerSection = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-3 mt-16">
      {/* Top left image with overlay text */}
      <div className="relative col-span-2 row-span-2">
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src={Images.imageCustomer4}
            alt="imageCustomer4"
            fill={true}
            className="object-cover"
            sizes="33vw"
            quality={70}
          />
        </div>
        <div className="absolute left-0 bottom-0 h-[15rem] w-[22.5rem] bg-opacity-70 bg-green flex items-end px-[2.325rem] py-[1.35rem]">
          <div className="text-center font-semibold text-[1.75rem] leading-[3.5rem] text-white uppercase">
            Giá trị cốt lỗi
          </div>
        </div>
      </div>

      <div className="bg-green flex items-end text-white font-semibold text-3xl leading-6 px-[3.6875rem] py-[2.825rem]">
        <div className="text-center flex items-center gap-2">
          <Image src={Images.iconFlag} alt="icon-flag" />
          Tự chủ
        </div>
      </div>

      <div className="bg-blue-secondary flex items-end text-white font-semibold text-3xl leading-6 px-[3.6875rem] py-[2.825rem]">
        <div className="text-center flex items-center gap-2">
          <Image src={Images.iconHoldingHeart} alt="icon-heart" />
          Thấu cảm
        </div>
      </div>

      <div className="bg-blue-secondary flex items-end text-white font-semibold text-3xl leading-6 px-[3.6875rem] py-[2.825rem]">
        <div className="text-center flex items-center gap-2">
          <Image src={Images.iconBook} alt="icon-book" />
          Trách nhiệm
        </div>
      </div>

      <div className="relative col-span-1 row-span-1">
        <div className="relative h-[15rem] w-[22.5rem] overflow-hidden">
          <Image
            src={Images.imageCustomer1}
            alt="imageCustomer2"
            fill={true}
            className="object-cover"
            sizes="33vw"
            quality={70}
          />
        </div>
      </div>

      <div className="relative col-span-1 row-span-1">
        <div className="relative h-[15rem] w-[22.5rem] overflow-hidden">
          <Image
            src={Images.imageCustomer2}
            alt="imageCustomer2"
            fill={true}
            className="object-cover"
            sizes="33vw"
            quality={70}
          />
        </div>
      </div>

      <div className="bg-green flex items-end text-white font-semibold text-3xl leading-6 px-[3.6875rem] py-[2.825rem]">
        <div className="text-center flex items-center gap-2">
          <Image src={Images.iconYoga} alt="icon-yoga" />
          Chính trực
        </div>
      </div>

      <div>
        <div className="relative h-[15rem] w-[22.5rem] overflow-hidden">
          <Image
            src={Images.imageCustomer3}
            alt="imageCustomer3"
            fill={true}
            className="object-cover"
            sizes="33vw"
            quality={70}
          />
        </div>
      </div>

      <div className="bg-blue-secondary flex items-end text-white font-semibold text-3xl leading-6 px-[3.6875rem] py-[2.825rem]">
        <div className="text-center flex items-center gap-2">
          <Image src={Images.iconMicroscope} alt="icon-microscope" />
          Đổi mới
        </div>
      </div>
    </div>
  )
}

export default CoreValuesBannerSection
