"use client"

import { Images } from "@/constants/images"
import Image from "next/image"
import { useEffect, useState } from "react"

const AdmissionProcesss = () => {
  const [activeStep, setActiveStep] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition < 450) {
        setActiveStep(1)
      } else if (scrollPosition >= 450 && scrollPosition < 1100) {
        setActiveStep(2)
      } else if (scrollPosition >= 1100) {
        setActiveStep(3)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="container bg-gradient-to-b from-white to-[#F5F5FE] mx-auto mb-25 rounded-xl">
      <div className="flex flex-col ">
        <div className="flex items-center gap-10 pl-[30.313rem]">
          <div className="">
            <Image
              src={activeStep === 1 ? Images.iconAdmissionProcessActve1 : Images.iconProcedure1}
              alt="Image"
              className="w-20 h-20"
            />
          </div>
          <div>
            <div
              className={`w-1 h-32   mx-auto ${
                activeStep === 1 ? "bg-gradient-to-b from-white to-green" : "bg-gray-tertiary"
              }`}
            ></div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-bold text-lg leading-6 w-fit px-3 py-1 rounded-full text-white bg-green">1</span>
            <span className="font-bold text-2xl leading-8">
              Đăng ký dự tuyển và đóng phí
              <br /> xét tuyển
            </span>
          </div>
        </div>
        <div className="flex items-center gap-10  pl-[7.5rem]">
          <div className="flex flex-col text-right pt-25 gap-4">
            <span className="font-bold text-lg leading-6 w-fit px-3 py-1 rounded-full text-white bg-green self-end">
              2
            </span>
            <span className="font-bold text-2xl leading-8">Xét tuyển</span>
            <div className="flex flex-col">
              <span className="font-normal text-base leading-6 ">Cán bộ tuyển sinh nhà trường thông báo đến</span>
              <span className="font-normal text-base leading-6">phụ huynh học sinh lịch xét tuyển.</span>
            </div>
            <div className="flex flex-col">
              <span className="font-normal text-base leading-6">- Sau khi có kết quả, thông báo sẽ được gửi đến</span>
              <span className="font-normal text-base leading-6">phụ huynh và học sinh.</span>
            </div>
            <div className="flex flex-col">
              <span className="font-normal text-base leading-6">- Nếu đủ điều kiện, phụ huynh bắt đầu</span>
              <span className="font-normal text-base leading-6">làm thủ tục nhập học chính thức cho học sinh.</span>
            </div>
            <div className="flex flex-col">
              <span className="italic font-normal text-sm leading-5 text-gray-secondary">
                Lưu ý : Nhà trường ưu tiên xếp lớp cho các em hoàn tất thủ tục sớm
              </span>
              <span className="italic font-normal text-sm leading-5 text-gray-secondary">
                cho đến khi hết chỉ tiêu.
              </span>
            </div>
            <span className="font-bold text-2xl leading-8">Nội dung xét tuyển</span>
            <Image
              src={Images.tableProdure}
              alt="Image"
              className={`w-[22.25rem] h-[17.813rem] ${activeStep === 2 ? "text-green" : "text-gray"} self-end`}
            />
          </div>
          <div>
            <div
              className={`w-1 h-[48.563rem]   mx-auto ${
                activeStep === 2 ? "bg-gradient-to-b from-white to-green" : "bg-gray-tertiary"
              }`}
            ></div>
          </div>
          <div className="self-start pt-25">
            <Image
              src={activeStep === 2 ? Images.iconAdmissionProcessActve2 : Images.iconProcedure2}
              alt="Image"
              className="w-20 h-20"
            />
          </div>
        </div>
        <div className="flex items-center gap-10 pl-[30.313rem] ">
          <div className="self-start pt-[5.25rem]">
            <Image
              src={activeStep === 3 ? Images.iconAdmissionProcessActve3 : Images.iconProcedure3}
              alt="Image"
              className="w-20 h-20"
            />
          </div>
          <div className="self-start">
            <div
              className={`w-1 h-[45rem]    ${
                activeStep === 3 ? "bg-gradient-to-b from-white to-green" : "bg-gray-tertiary"
              }`}
            ></div>
          </div>
          <div className="flex flex-col pt-[5.25rem] gap-4 pb-6">
            <span className="font-bold text-lg leading-6 w-fit px-3 py-1 rounded-full text-white bg-green">3</span>
            <span className="font-bold text-2xl leading-8">Nhập học chính thức</span>
            <div>
              <span className="font-normal text-base leading-6">
                - Phụ huynh học sinh mua và nộp hồ sơ nhập học đúng
                <br /> thời hạn quy định của nhà trường.
              </span>
              <br />
              <span className="font-normal text-base leading-6">Hồ sơ bao gồm:</span>
              <br />
              <span className="font-normal text-base leading-6">
                + Đơn đăng ký nhập học bản gốc (theo mẫu nhà trường)
              </span>
              <br />
              <span className="font-normal text-base leading-6">+ Sơ yếu lý lịch (theo mẫu nhà trường)</span>
              <br />
              <span className="font-normal text-base leading-6">
                + Hồ sơ sức khỏe và tiêm chủng (theo mẫu nhà trường)
              </span>
              <br />
              <span className="font-normal text-base leading-6">+ Phiếu đăng ký dịch vụ (theo mẫu nhà trường)</span>
              <br />
              <span className="font-normal text-base leading-6">+ Bản sao giấy khai sinh</span>
              <br />
              <span className="font-normal text-base leading-6">
                + Bản sao Hộ khẩu hoặc bản sao hộ chiếu (nếu là người
                <br /> nước ngoài)
              </span>
              <br />
              <span className="font-normal text-base leading-6">+ Học bạ</span>
              <br />
              <span className="font-normal text-base leading-6">
                + Giấy chứng nhận hoàn thành chương trình Tiểu học
                <br /> (đối với THCS)
              </span>
              <br />
              <span className="font-normal text-base leading-6">
                + Bằng tốt nghiệp THCS hoặc giấy chứng nhận tốt
                <br /> nghiệp THCS sở tạm thời (đối với THPT)
              </span>
              <br />
              <span className="font-normal text-base leading-6">
                + Giấy giới thiệu (đối với học sinh chuyển trường)
              </span>
              <br />
              <span className="font-normal text-base leading-6">
                + Hợp đồng giáo dục và đào tạo giữa SKY-LINE và phụ
                <br /> huynh đã ký (theo mẫu nhà trường)
              </span>
              <br />
              <span className="font-normal text-base leading-6">+ 4 ảnh 4x6</span>
            </div>
            <span className="italic font-normal text-sm leading-5 text-gray-secondary">
              - Quá thời hạn nhập học mà học sinh không đến thì nhà trường
              <br /> không chịu trách nhiệm đảm bảo giữ chỗ cho học sinh. <br />- Các loại phí gồm phí xét tuyển, đồ
              dùng bán trú đều không
              <br /> được hoàn lại khi học sinh đã tham gia dự tuyển, vào học tại
              <br /> trường.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdmissionProcesss
