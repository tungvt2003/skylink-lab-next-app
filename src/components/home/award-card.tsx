import { Images } from "@/constants/images"
import Image from "next/image"

const AwardCard = () => {
  return (
    <div className="relative w-[368px] h-[480px] rounded-2xl overflow-hidden shadow-lg">
      <Image
        src={Images.studentWining1}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 w-full h-full"
      />

      <div className="relative z-10 p-4 text-center flex flex-col items-center justify-between h-full">
        <div className="absolute bottom-0 w-full bg-white text-black text-left py-6 mt-4 px-[2.5rem] text-2xl font-semibold">
          Lorem ipsum dolor sit amet consectetuer
        </div>
      </div>
    </div>
  )
}

export default AwardCard
