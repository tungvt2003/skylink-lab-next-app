import AwardCard from "@/components/home/award-card"
import { Images } from "@/constants/images"

import Image from "next/image"
import Link from "next/link"

const SectionAchievements = () => {
  return (
    <div className="text-center mt-[7.5rem] max-w-[1200px] mx-auto mb-[7.5rem]">
      <div className="flex flex-row justify-center gap-1.5 mb-6">
        {Array(5)
          .fill(0)
          .map((_, index) => {
            return <Image src={Images.iconStar} alt="iconStar" key={index} width={33} />
          })}
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-4.5xl leading-12 font-bold text-black-tertiary">
          THÀNH TỰU - <span className="text-green">SKY-LINE</span>
        </div>
        <div className="text-base flex justify-center">
          <span className="w-[46.75rem]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
            dolore magna aliquam erat volutpat.
          </span>
        </div>
      </div>
      <div className="flex mt-16 gap-12">
        <AwardCard />
        <AwardCard />
        <AwardCard />
      </div>
      <div className="flex justify-center">
        <Link
          href="/gioi-thieu/thanh-tuu-sky-line"
          className="text-xl leading-6.5 font-medium text-green-secondary bg-white border-[1.5px] border-green-secondary rounded-lg px-[4.5rem] py-3 mt-[3.125rem] h-[3.125rem] hover:bg-green hover:text-white"
        >
          Xem thêm
        </Link>
      </div>
    </div>
  )
}

export default SectionAchievements
