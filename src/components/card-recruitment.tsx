import SvgArrowRight from "@/components/svg-component/svg-vector-arrowRight"
import { Button } from "@/components/ui/button"
import { Images } from "@/constants/images"
import Image from "next/image"

const CardRecruitment = () => {
  return (
    <div className="py-10 flex gap-[0.625rem] rounded-xl bg-white-tertiary">
      <div className="flex gap-6 px-10 justify-between items-center w-full">
        <div className="flex gap-[9.75rem] items-end">
          <div className="flex flex-col gap-[0.875rem]">
            <div className="text-lg leading-6 text-black-tertiary">Giáo viên Tiếng Anh</div>
            <div className="flex flex-col gap-[0.8125rem] px-2">
              <div className="flex gap-[0.5625rem]">
                <Image alt="Vector-Work" src={Images.vectorWork} />
                <div className="text-base leading-6 font-normal text-black-tertiary">
                  <span className="opacity-70">Loại hình: Full-time</span>
                </div>
              </div>
              <div className="flex gap-[0.5625rem]">
                <Image alt="Vector-Work" src={Images.vectorWage} />
                <div className="text-base leading-6 font-normal text-black-tertiary">
                  <span className="opacity-70">Lương:</span> 2.000.000VNĐ
                </div>
              </div>
              <div className="flex gap-[0.5625rem]">
                <Image alt="Vector-Work" src={Images.vectorPerson} />
                <div className="text-base leading-6 font-normal text-black-tertiary">
                  <span className="opacity-70">Số lượng:</span> 1
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[0.8125rem] px-2">
            <div className="text-base text-black-tertiary">SKYLINE</div>
            <div className="flex gap-[0.5625rem]">
              <Image alt="Vector-Work" src={Images.vectorLocated} />
              <div className="text-base leading-6 font-normal text-black-tertiary">
                <span className="opacity-70">Cơ sở 1:</span> SKY-LINE Riverside
              </div>
            </div>
            <div className="flex gap-[0.5625rem]">
              <Image alt="Vector-Work" src={Images.vectorDate} />
              <div className="text-base leading-6 font-normal text-black-tertiary">
                <span className="opacity-70">Hạn cuối:</span> 31-12-2024
              </div>
            </div>
          </div>
        </div>
        <div>
          <Button className="py-3 px-4 rounded-[0.5rem] gap-2 text-base h-11 items-center font-normal bg-green hover:bg-green-secondary">
            Ứng tuyển ngay
            <SvgArrowRight />
          </Button>
        </div>
      </div>
    </div>
  )
}
export default CardRecruitment
