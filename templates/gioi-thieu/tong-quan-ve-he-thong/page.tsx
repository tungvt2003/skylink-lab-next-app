import BreadCrumb from "@/components/breadcrumb"
import CoreValuesBannerSection from "@/components/gioi-thieu/core-values-banner-section"
import { BreadCrumbItem } from "@/components/types/types"
import { Images } from "@/constants/images"
import Image from "next/image"

const items: BreadCrumbItem[] = [
  {
    title: "Giới thiệu",
    url: "",
  },
  {
    title: "Tổng quan về hệ thống",
    url: "/gioi-thieu/tong-quan-ve-he-thong",
  },
]

export default function SystemOverviewPage() {
  return (
    <div className="container">
      <BreadCrumb items={items} />
      <div className="container flex flex-col gap-25">
        <div className="mx-[16.125rem] mt-16 mb-25">
          <div className="flex flex-col gap-10">
            <div className="text-3.5xl leading-12 font-semibold text-left uppercase text-black-tertiary line-clamp-2">
              TRIẾT LÝ DẪN ĐƯỜNG CỦA SKY-LINE
              <br /> HỌC ĐỂ SỐNG HẠNH PHÚC
            </div>
            <div className="text-lg leading-6 flex flex-col gap-1.5">
              <p className="text-green">Các điều kiện để có hạnh phúc theo quan niệm của Sky-Line là:</p>
              <p>
                Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget
                vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate
                arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <Image src={Images.bannerOverview} alt="banner-overview" />
          </div>
        </div>
        <CoreValuesBannerSection />
        <div className="flex flex-col gap-6 mx-[22.375rem]">
          <div className="text-3.5xl leading-12 font-semibold text-left uppercase text-black-tertiary line-clamp-2">
            SỨ MỆNH CỦA CHÚNG TÔI
          </div>
          <div className="text-lg leading-6">
            <p>
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget
              vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate
              arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10 mx-[16.125rem]">
          <div className="flex flex-col gap-10 mx-25">
            <div className="text-3.5xl leading-12 font-semibold text-left uppercase text-black-tertiary line-clamp-2">
              giá trị giáo dục
            </div>
            <div className="flex flex-col gap-10">
              <div className="text-lg leading-6 flex flex-col gap-2">
                <p className="text-green">Phẩm chất của học sinh Sky-Line</p>
                <p>Chính trực. Thấu cảm. Trách nhiệm. Đổi mới. Tự chủ.</p>
              </div>
              <div className="text-lg leading-6 flex flex-col gap-2">
                <p className="text-green">Giá trị tổ chức Sky-line</p>
                <p>Có trách nhiệm, Biết yêu thương, Tự lập và Hợp tác</p>
              </div>
              <div className="text-lg leading-6 flex flex-col gap-2">
                <p className="text-green">Năng lực của học sinh Sky-Line</p>
                <div>
                  <p>Có tri thức số.</p>
                  <p>Tự chủ, tự học.</p>
                  <p>Có năng lượng bền bỉ, cân bằng sức khỏe thể chất và tinh thần.</p>
                  <p>Tinh thần sáng tạo đổi mới không ngừng và hội nhập quốc tế</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative h-[26.0625rem] w-full overflow-hidden">
              <Image
                src={Images.imageCustomer1}
                alt="banner"
                fill={true}
                className="rounded-2xl object-cover"
                sizes="75vw"
                quality={70}
              />
            </div>
          </div>
        </div>
        <div className="bg-[#F5F6FE] backdrop-blur-24 py-25 px-[16.125rem] flex flex-col gap-6">
          <div className="text-center font-semibold text-3.5xl leading-12 uppercase">
            <p>hành trình cập nhật</p>
            <p>tri thức trọn đời</p>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-6">
            <div className="flex flex-col gap-2 text-center bg-white px-5 py-6 rounded-lg">
              <div className="text-green text-lg font-semibold">Thực tế</div>
              <div>Use this text to describe your product feature or service.</div>
            </div>
            <div className="flex flex-col gap-2 text-center bg-white px-5 py-6 rounded-lg">
              <div className="text-green text-lg font-semibold">Nên</div>
              <div>Use this text to describe your product feature or service.</div>
            </div>
            <div className="flex flex-col gap-2 text-center bg-white px-5 py-6 rounded-lg">
              <div className="text-green text-lg font-semibold">Bởi vì</div>
              <div>Use this text to describe your product feature or service.</div>
            </div>
            <div className="flex flex-col gap-2 text-center bg-white px-5 py-6 rounded-lg">
              <div className="text-green text-lg font-semibold">Nên</div>
              <div>Use this text to describe your product feature or service.</div>
            </div>
          </div>
        </div>
        <div className="mx-[22.25rem] flex flex-col gap-12">
          <div className="text-3.5xl leading-12 font-semibold text-left uppercase text-black-tertiary line-clamp-2">
            Mục tiêu giáo dục toàn diện tại sky-line
          </div>
          <div className="w-[28.125rem]">
            <div className="flex flex-col gap-3 text-center bg-white-tertiary px-6 py-[2.6875rem] rounded-lg">
              <div className="text-[#00A39B] text-lg leading-6 font-semibold uppercase">
                Các mối quan hệ mang tính phát triển
              </div>
              <div className="flex flex-col gap-1">
                <p>Use this text to describe your product feature.</p>
                <p>Use this text to your product feature.</p>
                <p>Use this text to describe your feature.</p>
              </div>
            </div>
          </div>
          <div className="w-[28.125rem]">
            <div className="flex flex-col gap-3 text-center bg-white-tertiary px-6 py-[2.6875rem] rounded-lg">
              <div className="text-[#00A39B] text-lg leading-6 font-semibold uppercase">
                phát triển tư duy, kiến thức, năng lực
              </div>
              <div className="flex flex-col gap-1">
                <p>Use this text to describe your product feature.</p>
                <p>Use this text to your product feature.</p>
                <p>Use this text to describe your feature.</p>
              </div>
            </div>
          </div>
          <div className="w-[28.125rem]">
            <div className="flex flex-col gap-3 text-center bg-white-tertiary px-6 py-[2.6875rem] rounded-lg">
              <div className="text-[#00A39B] text-lg leading-6 font-semibold uppercase">môi trường kiến tạo</div>
              <div className="flex flex-col gap-1">
                <p>Use this text to describe your product feature.</p>
                <p>Use this text to your product feature.</p>
                <p>Use this text to describe your feature.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-custom-gradient">
          <div className="mx-[22.25rem] py-25 flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <div className="flex justify-start">
                <div className="bg-white px-3 py-1.5 rounded-lg text-lg font-semibold">Từ năm học 2024-2025</div>
              </div>
              <div className="text-3.5xl leading-10 font-semibold uppercase text-white">
                chương trình giáo dục
                <br /> triển khai tại hệ thống <br />
                giáo dục sky-line
              </div>
            </div>
            <Image src={Images.imageProgramStudent1} alt="banner-program" />
            <div className="flex flex-col gap-12">
              <div className="text-3.5xl leading-10 font-semibold uppercase text-white">
                lộ trình trưởng thành <br /> của học sinh sky-line
              </div>
              <Image src={Images.imageProgramStudent2} alt="banner-program" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
