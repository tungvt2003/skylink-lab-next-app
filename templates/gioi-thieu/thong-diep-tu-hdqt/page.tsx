import BreadCrumb from "@/components/breadcrumb"
import { BreadCrumbItem } from "@/components/types/types"
import { Images } from "@/constants/images"
import Image from "next/image"

const items: BreadCrumbItem[] = [
  {
    title: "Giới thiệu",
    url: "",
  },
  {
    title: "Thông điệp từ HĐQT",
    url: "/gioi-thieu/thong-diep-tu-hdqt",
  },
]

export default function LeadershipMessage() {
  return (
    <div className="container">
      <BreadCrumb items={items} />
      <div className="container">
        <div className="mx-[16.125rem] my-16  flex flex-col gap-16">
          <div className="text-3.5xl leading-12 font-semibold text-center uppercase text-black-tertiary line-clamp-2">
            thông điệp được gửi từ <br /> chủ tịch hội đồng quản trị
          </div>
          <div className="bg-white-tertiary rounded-xl">
            <div className="p-12 flex gap-6">
              <div className="flex items-center flex-col p-6 gap-4.5 max-w-[calc(33.7%-1.5rem)]">
                <div className="relative h-[7.4375rem] w-[7.4375rem] rounded-xl">
                  <Image
                    src={Images.imageChairman}
                    alt="banner"
                    fill={true}
                    className="rounded-2xl object-cover"
                    sizes="33vw"
                    quality={70}
                  />
                </div>
                <div className="text-base font-semibold">Bà Lê Thị Nam Phương</div>
                <div className="text-base leading-5.5 text-[#777777]">Chủ tịch Hội Đồng Quản Trị</div>
              </div>
              <div className="basis-[66.3%] flex gap-2">
                <div className="text-6.5xl text-green leading-[4.375rem] text-start">“</div>
                <div className="text-lg leading-6 italic text-black-tertiary">
                  Lorem ipsum dolor sit amet consectetur.
                  <br />
                  <br />
                  Enim magna orci tristique platea at leo urna venenatis. Adipiscing aliquam faucibus sed sapien lacus.
                  Feugiat senectus quisque massa suspendisse ut fermentum. Aliquet netus lobortis eget volutpat
                  facilisis semper sem in bibendum. Consequat purus mi id mauris odio ac. Diam diam mattis vitae
                  scelerisque.
                  <br />
                  <br />
                  Vitae ut ridiculus lectus lobortis. Vel elementum neque at in convallis nunc lectus neque cursus. Eget
                  egestas odio at morbi enim ut ullamcorper aliquam. Massa amet aenean id vitae sed ac arcu
                  pellentesque. Justo tincidunt curabitur fames ut nulla praesent risus. Egestas volutpat convallis dui
                  elit. Nisl ut fringilla tellus tristique. Maecenas urna risus interdum nulla facilisis. Tortor blandit
                  vitae duis ullamcorper.
                  <br />
                  <br />
                  Vitae ut ridiculus lectus lobortis. Vel elementum neque at in convallis nunc lectus neque cursus. Eget
                  egestas odio at morbi enim ut ullamcorper aliquam. Massa amet aenean id vitae sed ac arcu
                  pellentesque. Justo tincidunt curabitur fames ut nulla praesent risus. Egestas volutpat convallis dui
                  elit. Nisl ut fringilla tellus tristique. Maecenas urna risus interdum nulla facilisis. Tortor blandit
                  vitae duis ullamcorper. Lorem ipsum dolor sit amet consectetur.
                  <br />
                  <br />
                  Enim magna orci tristique platea at leo urna venenatis. Adipiscing aliquam faucibus se.
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              {Array(18)
                .fill(0)
                .map((_, index) => {
                  return <Image key={index} src={Images.vectorLine} alt="banner" />
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
