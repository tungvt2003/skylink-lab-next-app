import { Button } from "@/components/ui/button"
import { Images } from "@/constants/images"

import Image from "next/image"
import Link from "next/link"

const VisitSchool = () => {
  return (
    <div className="text-center mt-[7.5rem] max-w-[1200px] mx-auto mb-[7.5rem]">
      <div className="flex flex-col gap-3">
        <div className="text-4.5xl leading-12 font-bold text-black-tertiary">
          THAM QUAN TRƯỜNG <span className="text-green">SKY-LINE</span>
        </div>
        <div className="text-base flex justify-center">
          <span className="w-[46.75rem]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
            dolore magna aliquam erat volutpat.
          </span>
        </div>
      </div>
      <div className="flex mt-16">
        <div className="grid grid-cols-3 gap-6 p-4">
          <div className="flex flex-col gap-6">
            <div className="bg-blue-secondary flex flex-col justify-between text-white gap-[3.625rem] p-8 rounded-2xl">
              <div className="text-base text-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</div>
              <div className="font-medium text-4xl leading-10.5 text-left">Lorem ipsum dolor sit amet</div>
            </div>
            <Image
              src={Images.imageStudent1}
              alt="imageStudent1"
              width={680}
              className="h-[384px] object-cover rounded-2xl"
            />
          </div>
          <div>
            <Link href="#" className="relative group">
              <div className="relative h-full overflow-hidden">
                <Image
                  src={Images.imageCustomer4}
                  alt="imageCustomer4"
                  fill={true}
                  className="rounded-2xl object-cover transition-opacity duration-300 ease-in-out"
                  sizes="33vw"
                  quality={70}
                />
                <div className="absolute inset-0 bg-black-secondary transition-opacity duration-300 ease-in-out group-hover:opacity-0 rounded-2xl"></div>
              </div>
              <div className="absolute bottom-0">
                <div className="flex flex-col justify-between text-white gap-[5.5rem] p-8 rounded-2xl">
                  <div className="font-medium text-4xl leading-10.5 text-left">Lorem ipsum dolor sit amet</div>
                  <div className="text-base text-left">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreer.
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex flex-col gap-6">
            <div className="relative h-full overflow-hidden">
              <Image
                src={Images.imageStaff}
                alt="imageStaff"
                fill={true}
                className="rounded-2xl object-cover"
                sizes="33vw"
                quality={70}
              />
            </div>
            <div className="bg-green flex flex-col justify-between text-white gap-[3.625rem] p-8 rounded-2xl">
              <div className="font-medium text-4xl leading-10.5 text-left">Lorem ipsum</div>
              <div className="text-base text-left">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreer.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button className="text-xl leading-6.5 font-medium text-white h-[3.125rem] bg-green border-[1.5px] border-green-secondary rounded-lg px-[4.5rem] py-3 mt-[3.125rem] hover:bg-green-secondary hover:text-white">
        Đăng ký tham quan
      </Button>
    </div>
  )
}

export default VisitSchool
