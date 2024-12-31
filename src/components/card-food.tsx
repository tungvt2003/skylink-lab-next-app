import { Images } from "@/constants/images"
import Image from "next/image"
import Link from "next/link"

const CardFood = () => {
  return (
    <Link href="/goc-phu-huynh/thuc-don-hs/detail" className="flex flex-col gap-6">
      <div className="relative h-[19.75rem] rounded-xl">
        <Image
          src={Images.imageFoodMenu}
          alt="banner"
          fill={true}
          className="rounded-xl object-cover"
          sizes="33vw"
          quality={70}
        />
      </div>
      <div className="text-black-tertiary flex flex-col items-start gap-3">
        <div className="font-semibold text-2xl text-left">Lorem ipsum dolor sit nih amet consect</div>
        <div className="text-base">May 23, 2024</div>
      </div>
    </Link>
  )
}
export default CardFood
