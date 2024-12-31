import { Images } from "@/constants/images"
import Image from "next/image"

const Tuition = () => {
  return (
    <div className="container">
      <div className="flex flex-col gap-6 pb-25 ">
        <div className="flex  gap-[0.625rem] ">
          <Image src={Images.iconTuition1} alt="Image" className="w-12 h-12" />
          <span className="font-semibold text-[2rem] leading-12 text-green">
            BIỂU PHÍ BẬC MẦM NON NĂM HỌC 2024-2025
          </span>
        </div>
        <div className="flex flex-col gap-6">
          <Image src={Images.tuition1} alt="Image" className="h-[94.125rem] w-[75rem] object-cover" />
          <Image src={Images.tuition2} alt="Image" className="h-[101.5rem] w-[75rem] object-cover" />
        </div>
      </div>
      <div className="flex flex-col gap-6 pt-16 pb-25 ">
        <div className="flex gap-[0.625rem]">
          <Image src={Images.iconTuition2} alt="Image" className="w-12 h-12" />
          <span className="font-semibold text-[2rem] leading-12 text-green">
            BIỂU PHÍ KHỐI PHỔ THÔNG NĂM HỌC 2024-2025
          </span>
        </div>
        <div className="flex flex-col gap-6">
          <Image src={Images.tuition3} alt="Image" className="h-[94.125rem] w-[75rem] object-cover" />
          <Image src={Images.tuition4} alt="Image" className="h-[101.5rem] w-[75rem] object-cover" />
        </div>
      </div>
    </div>
  )
}

export default Tuition
