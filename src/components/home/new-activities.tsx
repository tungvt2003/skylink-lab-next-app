import CardNew from "@/components/home/card-new"
import { Images } from "@/constants/images"
import Image from "next/image"
import Link from "next/link"

const newActivities = [
  { title: "Lorem ipsum dolor sit nih amet consect ", date: "May 23, 2024", imageUrl: Images.studentNew1, link: "#" },
  { title: "Lorem ipsum dolor sit nih amet consect ", date: "May 23, 2024", imageUrl: Images.imageStudent1, link: "#" },
  { title: "Lorem ipsum dolor sit nih amet consect ", date: "May 23, 2024", imageUrl: Images.studentNew2, link: "#" },
]

const NewActivities = () => {
  return (
    <div className="mt-16 mx-[7.5rem] mb-[7.5rem]">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-3">
          <div className="text-4.5xl leading-12 font-bold text-green">
            TIN TỨC - <span className="text-black-tertiary">HOẠT ĐỘNG</span>
          </div>
          <div className="text-2xl leading-7 flex justify-start whitespace-normal w-[34.875rem]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </div>
        </div>
        <Link
          href="/tin-tuc-hoat-dong"
          className="text-xl leading-6.5 font-medium text-green-secondary bg-white border-[1.5px] border-green-secondary rounded-lg px-6 py-3 h-[3.125rem] hover:bg-green hover:text-white"
        >
          Xem thêm
        </Link>
      </div>
      <div className="flex flex-row justify-between gap-[2.90625rem] mt-12">
        <div className="w-[34.875rem] flex flex-col gap-6">
          <div className="relative h-[23.25rem] w-[34.875rem] overflow-hidden">
            <Image
              src={Images.imageStaff}
              alt="imageStaff"
              fill={true}
              className="rounded-2xl object-cover"
              sizes="33vw"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="text-2xl font-semibold">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
            </div>
            <div className="text-base text-black-tertiary">May 23, 2024</div>
          </div>
        </div>
        <div className="border border-[#D9D9D9]"></div>
        <div className="flex flex-col gap-12">
          {newActivities.map((activity, index) => (
            <CardNew key={index} {...activity} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewActivities
