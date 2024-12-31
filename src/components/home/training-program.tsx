import { Images } from "@/constants/images"
import Image from "next/image"
import Link from "next/link"

const TrainingProgram = ({ isShowTitle }: { isShowTitle?: boolean }) => {
  return (
    <div className={`text-center ${isShowTitle ? "mt-[7.5rem]" : ""}`}>
      {isShowTitle && (
        <div className="flex flex-col gap-3">
          <div className="text-4.5xl leading-12 font-bold text-green">
            CHƯƠNG TRÌNH <span className="text-black-tertiary">ĐÀO TẠO</span>
          </div>
          <div className="text-base flex justify-center">
            <span className="line-clamp-2 w-[748px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat.
            </span>
          </div>
        </div>
      )}
      <div className={`flex ${isShowTitle ? "mt-16" : ""}`}>
        <Link href="#" className="relative group">
          <Image
            src={Images.imageCustomer1}
            alt="banner"
            width={360}
            height={418}
            className="object-cover h-[26.125rem]"
          />
          <div className="absolute inset-0 bg-black-secondary transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>

          <div className="absolute left-[50%] bottom-[2.1875rem] translate-x-[-50%]">
            <span className="text-2.5xl leading-7 text-white font-bold text-center uppercase">Mầm non</span>
          </div>
        </Link>
        <Link href="#" className="relative group">
          <Image
            src={Images.imageCustomer2}
            alt="banner"
            width={360}
            height={418}
            className="object-cover h-[26.125rem]"
          />
          <div className="absolute inset-0 bg-black-secondary transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>

          <div className="absolute left-[50%] bottom-[2.1875rem] translate-x-[-50%]">
            <span className="text-2.5xl leading-7 text-white font-bold text-center uppercase">TIỂU HỌC</span>
          </div>
        </Link>
        <Link href="#" className="relative group">
          <Image
            src={Images.imageCustomer3}
            alt="banner"
            width={360}
            height={418}
            className="object-cover h-[26.125rem]"
          />
          <div className="absolute inset-0 bg-black-secondary transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>

          <div className="absolute left-[50%] bottom-[2.1875rem] translate-x-[-50%]">
            <span className="text-2.5xl leading-7 text-white font-bold text-center uppercase">TRUNG HỌC CƠ SỞ</span>
          </div>
        </Link>
        <Link href="#" className="relative group">
          <Image
            src={Images.imageCustomer4}
            alt="banner"
            width={360}
            height={418}
            className="object-cover h-[26.125rem]"
          />
          <div className="absolute inset-0 bg-black-secondary transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>

          <div className="absolute left-[50%] bottom-[2.1875rem] translate-x-[-50%]">
            <span className="text-2.5xl leading-7 text-white font-bold text-center uppercase">TRUNG HỌC PHỔ THÔNG</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default TrainingProgram
