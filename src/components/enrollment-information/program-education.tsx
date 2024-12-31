import { Images } from "@/constants/images"
import Image from "next/image"

const ProgramEducation = () => {
  return (
    <div className=" bg-[#F5F6FE]">
      <div className="container ">
        <div className="pt-[6.25rem] px-[22.375rem] gap-12 flex flex-col ">
          <div className="  gap-12 ">
            <div className="flex flex-col gap-6">
              <span className=" font-semibold bg-green text-white py-1.5 px-3 text-lg leading-lg rounded-[0.5rem] w-fit">
                Từ năm học 2024-2025
              </span>
              <span className="font-semibold text-3.5xl leading-10 text-green uppercase">
                chương trình giáo dục <br /> triển khai tại hệ thống
                <br />
                giáo dục sky-line
              </span>
            </div>
            <div className="pt-12">
              <Image
                src={Images.programEducation}
                alt="Roadmap"
                className="w-[41.188rem] h-[28.313rem] rounded-[1.125rem] object-cover"
              />
            </div>
          </div>
        </div>
        <div className="pt-12 pb-[6.25rem] px-[22.375rem] gap-12 flex flex-col ">
          <div className="  gap-12 ">
            <div className="flex flex-col gap-6">
              <span className="font-semibold text-3.5xl leading-10 text-green uppercase">
                lộ trình trưởng thành
                <br /> của học sinh sky-line
              </span>
            </div>
            <div className="pt-12">
              <Image
                src={Images.maturitRoadmap}
                alt="Roadmap"
                className="w-[41.125rem] h-[33.813rem] rounded-[1.125rem] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgramEducation
