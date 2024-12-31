import BreadCrumb from "@/components/breadcrumb"
import CardStaff from "@/components/gioi-thieu/card-staff"
import { BreadCrumbItem } from "@/components/types/types"
import { Images } from "@/constants/images"
import Image from "next/image"

const items: BreadCrumbItem[] = [
  {
    title: "Giới thiệu",
    url: "",
  },
  {
    title: "Cơ cấu tổ chức - Năng lực nhân sự",
    url: "/gioi-thieu/co-cau-to-chuc-nang-luc-nhan-su",
  },
]

export default function OrganizationalPage() {
  return (
    <div className="container">
      <BreadCrumb items={items} />
      <div className="mx-[22.375rem] mt-16  flex flex-col gap-10">
        <div className="text-3.5xl leading-12 font-semibold text-center uppercase text-black-tertiary line-clamp-2">
          cơ cấu tổ chức và đội ngũ giáo viên chuyên nghiệp của sky-line
        </div>
        <div className="text-center text-lg leading-6">
          Tại Sky-Line, chúng tôi luôn chú trọng xây dựng từ đội ngũ quản lý, phụ trách các trường, phòng ban đến đội
          ngũ giáo viên, nhân viên có chuyên môn cao, nhiệt huyết và tâm huyết, cùng sự đồng hành của đội ngũ tư vấn là
          những “cây đa, cây đề” trong ngành giáo dục.
        </div>
      </div>
      <div className="mx-30 my-25 flex flex-col gap-12">
        <div className="text-2xl font-semibold text-center uppercase">đội ngũ giáo viên</div>
        <div className="mx-[20.625rem] bg-white-tertiary p-12 rounded-xl">
          <div className="flex items-center flex-col gap-6">
            <div className="relative h-[7.4375rem] w-[7.4375rem] rounded-xl">
              <Image
                src={Images.imageStaff01}
                alt="banner"
                fill={true}
                className="rounded-2xl object-cover"
                sizes="33vw"
                quality={70}
              />
            </div>
            <div className="flex flex-col gap-1 text-center">
              <div className="text-base font-semibold">Thầy Hoàng Anh Đức</div>
              <div className="text-base leading-5.5 text-gray-secondary">Tổng Giám Đốc</div>
            </div>
            <div className="text-center text-sm text-gray">
              Lorem ipsum dolor sit amet consectetur. Tortor sollicitudin orci fermentum commodo. Eget nisi posuere amet
              ac quam iaculis. Amet ultrices dui vitae mauris risus tellus congue. Sem sed id dolor montes suscipit
              turpis mi. Tempus diam tellus donec cursus.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex justify-center">
            <div className="bg-[#CCECEB] w-fit py-2 px-3 rounded-lg flex justify-center">
              <div className="text-sm leading-5.5 font-medium uppercase">Hội đồng tư vấn</div>
            </div>
          </div>
          <div className="flex gap-6 justify-between">
            <CardStaff
              name="Cô Lê Thị Huệ"
              position="Chủ tịch HĐTV"
              imageUrl={Images.imageStaff02}
              description="Lorem ipsum dolor sit amet consectetur. Tortor sollicitudin orci fermentum commodo."
            />
            <CardStaff
              name="Cô Nguyễn Thu Hà"
              position="Chủ tịch HĐTV"
              imageUrl={Images.imageStaff03}
              description="Lorem ipsum dolor sit amet consectetur. Tortor sollicitudin orci fermentum commodo."
            />
            <CardStaff
              name="Thầy Phan Quang Thân"
              position="Thành viên HĐTV"
              imageUrl={Images.imageStaff04}
              description="Lorem ipsum dolor sit amet consectetur. Tortor sollicitudin orci fermentum commodo."
            />
            <CardStaff
              name="Cô Trịnh Thị Phương Hiền"
              position="Thành viên HĐTV"
              imageUrl={Images.imageStaff05}
              description="Lorem ipsum dolor sit amet consectetur. Tortor sollicitudin orci fermentum commodo."
            />
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex justify-center">
            <div className="bg-[#CCECEB] w-fit py-2 px-3 rounded-lg flex justify-center">
              <div className="text-sm leading-5.5 font-medium uppercase">hội đồng giáo dục</div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-6 justify-center">
              <CardStaff
                name="Thầy Tống Thiên Long"
                position="Chủ tịch HĐGD, Hiệu Trưởng Trường THCS & THPT Sky-Line Đà Nẵng, Phụ trách cơ sở Sky-Line Riverside"
                imageUrl={Images.imageStaff06}
                description="Lorem ipsum dolor sit amet consectetur. Tortor sollicitudin orci fermentum commodo."
              />
              <CardStaff
                name="Cô Dương T. Thanh Vân"
                position="Phó HĐGD, Hiệu Trưởng Trường THCS & THPT Sky-Line Hill, Phụ trách cơ sở Sky-Line Hill"
                imageUrl={Images.imageStaff07}
                description="Lorem ipsum dolor sit amet consectetur. Tortor sollicitudin orci fermentum commodo."
              />
            </div>
            <div className="flex gap-6 justify-center">
              <CardStaff
                name="Thầy Cao Thiên Trung"
                position="Phó CT HĐGD, Hiệu Trưởng Trường TH, THCS & THPT Sky-Line Hill, Trưởng BP NLTK21, Phụ trách cơ sở Sky-Line Central"
                imageUrl={Images.imageStaff08}
                description="Lorem ipsum dolor sit amet consectetur. Tortor sollicitudin orci fermentum commodo."
              />
              <CardStaff
                name="Cô Lê Thị Hoàng Yến"
                position="Thành viên HĐGD Hiệu trưởng trường mầm non Sky-Line, Trưởng BP mầm non"
                imageUrl={Images.imageStaff09}
                description="Lorem ipsum dolor sit amet consectetur. Tortor sollicitudin orci fermentum commodo."
              />
              <CardStaff
                name="Thầy Nguyễn Viết Lượng"
                position="Thành viên HĐGD"
                imageUrl={Images.imageStaff10}
                description="Lorem ipsum dolor sit amet consectetur. Tortor sollicitudin orci fermentum commodo."
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex justify-center">
            <div className="bg-[#CCECEB] w-fit py-2 px-3 rounded-lg flex justify-center">
              <div className="text-sm leading-5.5 font-medium uppercase">phụ trách cơ sở</div>
            </div>
          </div>
          <div className="flex gap-6 justify-center">
            <CardStaff
              name="Cô Trần Thị Thanh"
              position="Phó Hiệu Trưởng Trường TH, THCS & THPT Sky-Line, Trưởng BP Tiếng Anh và CT Quốc Tế, Phụ trách cơ sở Sky-Line Global"
              imageUrl={Images.imageStaff11}
              description="Lorem ipsum dolor sit amet consectetur. Tortor sollicitudin orci fermentum commodo."
            />
            <CardStaff
              name="Thầy Đỗ Quang Trung"
              position="Phó Hiệu Trưởng Trường TH, THCS & THPT Sky-Line, Trưởng BP Năng khiếu & HĐNG, Phụ trách cơ sở Sky-Line Beach"
              imageUrl={Images.imageStaff12}
              description="Lorem ipsum dolor sit amet consectetur. Tortor sollicitudin orci fermentum commodo."
            />
          </div>
        </div>
      </div>
      <div className="mx-30 my-25 flex flex-col gap-12 pb-[3.8125rem]">
        <div className="text-3.5xl leading-12 font-semibold text-center uppercase text-black-tertiary line-clamp-2">
          cơ cấu tổ chức
        </div>
        <Image src={Images.imageOrganization} alt="image-organization" />
      </div>
    </div>
  )
}
