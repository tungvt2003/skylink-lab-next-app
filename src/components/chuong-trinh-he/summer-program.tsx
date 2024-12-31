import { Images } from "@/constants/images"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const SummerPrograms = () => {
  return (
    <div className="container pb-25">
      <div className="flex px-[120px] gap-12 pb-12">
        <div className="bg-white-secondary rounded-xl w-1/2">
          <div className="p-12 flex flex-col gap-8">
            <span className="font-semibold text-[2rem] leading-10">Vườn ươm bé vào lớp 1</span>
            <Image src={Images.nursery} alt="Image" className="w-[30rem] h-[15.125rem] rounded-xl object-cover" />

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-[1rem] leading-[1.375rem]">Đối tượng:</span>
                <span className="font-normal text-[0.875rem] leading-5">
                  Học sinh sinh năm 2018 chuẩn bị vào lớp 1 tại trường mầm non Sky-Line và các trường mầm non khác trong
                  khu vực.
                </span>
              </div>
              <div>
                <span className="font-semibold text-[1rem] leading-[1.375rem]">Thời gian:</span>
                <br />
                <span className="font-normal text-[0.875rem] leading-5">Từ 10/06/2023 – 19/07/2023 (6 tuần)</span>
              </div>
              <div>
                <span className="font-semibold text-[1rem] leading-[1.375rem]">Địa điểm học tập và sinh hoạt:</span>
                <br />
                <span className="font-normal text-[0.875rem] leading-5">
                  Các cơ sở thuộc Hệ thống Giáo dục Sky-Line
                </span>
                <br />
              </div>
              <div>
                <span className="font-semibold text-[1rem] leading-[1.375rem]">Thông tin ưu đãi:</span>
                <br />
                <span className="font-normal text-[0.875rem] leading-5">
                  - Ưu đãi 50% học phí khoá "Vườn ươm bé vào lớp 1" đối với học sinh hoàn thành việc đăng ký và đóng phí
                  cả năm học 2024-2025 trước ngày 31.05.2024
                </span>
                <br />
                <span className="font-normal text-[0.875rem] leading-5">
                  - Ưu đãi giảm 10% học phí chương trình "Vườn ươm bé vào lớp 1" cho học sinh đăng ký và đóng toàn bộ
                  phí khoá học trước ngày 25/05/2024.
                </span>
              </div>
            </div>
            <div>
              <Link className="button-link-curriculum-post-2" href={""}>
                Chi tiết chương trình học
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white-secondary rounded-xl w-1/2">
          <div className="p-12 flex flex-col gap-8">
            <span className="font-semibold text-[2rem] leading-10">Hè và những điều bổ ích</span>
            <Image src={Images.nursery} alt="Image" className="w-[30rem] h-[17.625rem] rounded-xl object-cover" />

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-[1rem] leading-[1.375rem]">Đối tượng:</span>
                <span className="font-normal text-[0.875rem] leading-5">Học sinh bậc Tiểu học</span>
              </div>
              <div>
                <span className="font-semibold text-[1rem] leading-[1.375rem]">Thời gian:</span>
                <br />
                <span className="font-normal text-[0.875rem] leading-5">10/06/2024 - 19/07/2024</span>
              </div>
              <div>
                <span className="font-semibold text-[1rem] leading-[1.375rem]">Địa điểm học tập và sinh hoạt:</span>
                <br />
                <span className="font-normal text-[0.875rem] leading-5">
                  Các cơ sở thuộc Hệ thống Giáo dục Sky-Line
                </span>
                <br />
              </div>
              <div>
                <span className="font-semibold text-[1rem] leading-[1.375rem]">Thông tin ưu đãi:</span>
                <br />
                <span className="font-normal text-[0.875rem] leading-5">
                  Ưu đãi 10% học phí khoá hè khi đóng tất cả các khoản phí chương trình hè trước ngày 25/05/2024 
                </span>
              </div>
            </div>
            <div className="pt-[3.25rem]">
              <Link className="button-link-curriculum-post-2" href={""}>
                Chi tiết chương trình học
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex px-[120px] gap-12">
        <div className="bg-white-secondary rounded-xl w-1/2">
          <div className="p-12 flex flex-col gap-8">
            <span className="font-semibold text-[2rem] leading-10">Khởi đầu bậc Trung học</span>
            <Image src={Images.nursery} alt="Image" className="w-[30rem] h-[17.625rem] rounded-xl object-cover" />

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-[1rem] leading-[1.375rem]">Đối tượng:</span>
                <span className="font-normal text-[0.875rem] leading-5">Học sinh chuẩn bị vào lớp 6 </span>
              </div>
              <div>
                <span className="font-semibold text-[1rem] leading-[1.375rem]">Thời gian:</span>
                <br />
                <span className="font-normal text-[0.875rem] leading-5">10/06/2024 - 19/07/2024</span>
              </div>
              <div>
                <span className="font-semibold text-[1rem] leading-[1.375rem]">Địa điểm học tập và sinh hoạt:</span>
                <br />
                <span className="font-normal text-[0.875rem] leading-5">
                  Các cơ sở thuộc Hệ thống Giáo dục Sky-Line
                </span>
                <br />
              </div>
              <div>
                <span className="font-semibold text-[1rem] leading-[1.375rem]">Thông tin ưu đãi:</span>
                <br />
                <span className="font-normal text-[0.875rem] leading-5">
                  Ưu đãi 10% học phí khoá hè khi đóng tất cả các khoản phí chương trình hè trước ngày 25/05/2024 
                </span>
                <br />
              </div>
            </div>
            <div>
              <Link className="button-link-curriculum-post-2" href={""}>
                Chi tiết chương trình học
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white-secondary rounded-xl w-1/2">
          <div className="p-12 flex flex-col gap-8">
            <span className="font-semibold text-[2rem] leading-10">Củng cố kiến thức và hội nhập</span>
            <Image src={Images.nursery} alt="Image" className="w-[30rem] h-[17.625rem] rounded-xl object-cover" />

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-[1rem] leading-[1.375rem]">Đối tượng:</span>
                <span className="font-normal text-[0.875rem] leading-5">
                  Học sinh chuẩn bị vào lớp 7, 8, 9, 10, 11, 12 
                </span>
              </div>
              <div>
                <span className="font-semibold text-[1rem] leading-[1.375rem]">Thời gian:</span>
                <br />
                <span className="font-normal text-[0.875rem] leading-5">10/06/2024 - 19/07/2024</span>
              </div>
              <div>
                <span className="font-semibold text-[1rem] leading-[1.375rem]">Địa điểm học tập và sinh hoạt:</span>
                <br />
                <span className="font-normal text-[0.875rem] leading-5">
                  Các cơ sở thuộc Hệ thống Giáo dục Sky-Line
                </span>
                <br />
              </div>
              <div>
                <span className="font-semibold text-[1rem] leading-[1.375rem]">Thông tin ưu đãi:</span>
                <br />
                <span className="font-normal text-[0.875rem] leading-5">
                  Ưu đãi 10% học phí khoá hè khi đóng tất cả các khoản phí chương trình hè trước ngày 25/05/2024 
                </span>
              </div>
            </div>
            <div>
              <Link className="button-link-curriculum-post-2" href={""}>
                Chi tiết chương trình học
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SummerPrograms
