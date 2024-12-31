"use client"

import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

const IncentivesScholarshipsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const items = [
    {
      title: "Ưu đãi về phí đăng ký",
      content: (
        <span>
          Sau khi hoàn thành các bậc học, học sinh SKY-LINE thuộc các hệ đào tạo (Chất lượng cao, Song bằng, Hội nhập)
          đều nhận được chứng nhận hoàn thành bậc Tiểu học, bằng tốt nghiệp THCS và THPT do Sở GD&ĐT cấp, có giá trị như
          các trường công lập tại Việt Nam.Riêng đối với học sinh hệ Song bằng, các em còn nhận được chứng nhận hoàn
          thành các chương trình Quốc tế được công nhận rộng rãi trên thế giới.
          <br />
          Đối với học sinh hệ Hội nhập, bên cạnh các bằng tốt nghiệp chương trình Việt Nam, các em có thể lựa chọn thi
          lấy chứng chỉ Quốc tế như các bạn hệ Song bằng.
        </span>
      ),
    },

    {
      title: "Ưu đãi miễn xét tuyển",
      content: (
        <span>
          Sau khi hoàn thành các bậc học, học sinh SKY-LINE thuộc các hệ đào tạo (Chất lượng cao, Song bằng, Hội nhập)
          đều nhận được chứng nhận hoàn thành bậc Tiểu học, bằng tốt nghiệp THCS và THPT do Sở GD&ĐT cấp, có giá trị như
          các trường công lập tại Việt Nam.Riêng đối với học sinh hệ Song bằng, các em còn nhận được chứng nhận hoàn
          thành các chương trình Quốc tế được công nhận rộng rãi trên thế giới.
          <br />
          Đối với học sinh hệ Hội nhập, bên cạnh các bằng tốt nghiệp chương trình Việt Nam, các em có thể lựa chọn thi
          lấy chứng chỉ Quốc tế như các bạn hệ Song bằng.
        </span>
      ),
    },

    {
      title: " Chính sách ưu đãi dành cho anh chị em ruột",
      content: (
        <span>
          Sau khi hoàn thành các bậc học, học sinh SKY-LINE thuộc các hệ đào tạo (Chất lượng cao, Song bằng, Hội nhập)
          đều nhận được chứng nhận hoàn thành bậc Tiểu học, bằng tốt nghiệp THCS và THPT do Sở GD&ĐT cấp, có giá trị như
          các trường công lập tại Việt Nam.Riêng đối với học sinh hệ Song bằng, các em còn nhận được chứng nhận hoàn
          thành các chương trình Quốc tế được công nhận rộng rãi trên thế giới.
          <br />
          Đối với học sinh hệ Hội nhập, bên cạnh các bằng tốt nghiệp chương trình Việt Nam, các em có thể lựa chọn thi
          lấy chứng chỉ Quốc tế như các bạn hệ Song bằng.
        </span>
      ),
    },

    {
      title: "Ưu đãi dành cho học sinh phổ thông đăng ký mới",
      content: (
        <span>
          Sau khi hoàn thành các bậc học, học sinh SKY-LINE thuộc các hệ đào tạo (Chất lượng cao, Song bằng, Hội nhập)
          đều nhận được chứng nhận hoàn thành bậc Tiểu học, bằng tốt nghiệp THCS và THPT do Sở GD&ĐT cấp, có giá trị như
          các trường công lập tại Việt Nam.Riêng đối với học sinh hệ Song bằng, các em còn nhận được chứng nhận hoàn
          thành các chương trình Quốc tế được công nhận rộng rãi trên thế giới.
          <br />
          Đối với học sinh hệ Hội nhập, bên cạnh các bằng tốt nghiệp chương trình Việt Nam, các em có thể lựa chọn thi
          lấy chứng chỉ Quốc tế như các bạn hệ Song bằng.
        </span>
      ),
    },

    {
      title: "Ưu đãi dành cho học sinh phổ thông gắn bó",
      content: (
        <span>
          Sau khi hoàn thành các bậc học, học sinh SKY-LINE thuộc các hệ đào tạo (Chất lượng cao, Song bằng, Hội nhập)
          đều nhận được chứng nhận hoàn thành bậc Tiểu học, bằng tốt nghiệp THCS và THPT do Sở GD&ĐT cấp, có giá trị như
          các trường công lập tại Việt Nam.Riêng đối với học sinh hệ Song bằng, các em còn nhận được chứng nhận hoàn
          thành các chương trình Quốc tế được công nhận rộng rãi trên thế giới.
          <br />
          Đối với học sinh hệ Hội nhập, bên cạnh các bằng tốt nghiệp chương trình Việt Nam, các em có thể lựa chọn thi
          lấy chứng chỉ Quốc tế như các bạn hệ Song bằng.
        </span>
      ),
    },

    {
      title: "Gói ưu đãi “Bảo an tài chính”",
      content: (
        <span>
          Sau khi hoàn thành các bậc học, học sinh SKY-LINE thuộc các hệ đào tạo (Chất lượng cao, Song bằng, Hội nhập)
          đều nhận được chứng nhận hoàn thành bậc Tiểu học, bằng tốt nghiệp THCS và THPT do Sở GD&ĐT cấp, có giá trị như
          các trường công lập tại Việt Nam.Riêng đối với học sinh hệ Song bằng, các em còn nhận được chứng nhận hoàn
          thành các chương trình Quốc tế được công nhận rộng rãi trên thế giới.
          <br />
          Đối với học sinh hệ Hội nhập, bên cạnh các bằng tốt nghiệp chương trình Việt Nam, các em có thể lựa chọn thi
          lấy chứng chỉ Quốc tế như các bạn hệ Song bằng.
        </span>
      ),
    },

    {
      title: "Quà tặng đồng hành",
      content: (
        <span>
          Sau khi hoàn thành các bậc học, học sinh SKY-LINE thuộc các hệ đào tạo (Chất lượng cao, Song bằng, Hội nhập)
          đều nhận được chứng nhận hoàn thành bậc Tiểu học, bằng tốt nghiệp THCS và THPT do Sở GD&ĐT cấp, có giá trị như
          các trường công lập tại Việt Nam.Riêng đối với học sinh hệ Song bằng, các em còn nhận được chứng nhận hoàn
          thành các chương trình Quốc tế được công nhận rộng rãi trên thế giới.
          <br />
          Đối với học sinh hệ Hội nhập, bên cạnh các bằng tốt nghiệp chương trình Việt Nam, các em có thể lựa chọn thi
          lấy chứng chỉ Quốc tế như các bạn hệ Song bằng.
        </span>
      ),
    },

    {
      title: "Chính sách ưu đãi tại cơ sở Skyline Hill",
      content: (
        <span>
          Sau khi hoàn thành các bậc học, học sinh SKY-LINE thuộc các hệ đào tạo (Chất lượng cao, Song bằng, Hội nhập)
          đều nhận được chứng nhận hoàn thành bậc Tiểu học, bằng tốt nghiệp THCS và THPT do Sở GD&ĐT cấp, có giá trị như
          các trường công lập tại Việt Nam.Riêng đối với học sinh hệ Song bằng, các em còn nhận được chứng nhận hoàn
          thành các chương trình Quốc tế được công nhận rộng rãi trên thế giới.
          <br />
          Đối với học sinh hệ Hội nhập, bên cạnh các bằng tốt nghiệp chương trình Việt Nam, các em có thể lựa chọn thi
          lấy chứng chỉ Quốc tế như các bạn hệ Song bằng.
        </span>
      ),
    },

    {
      title: "Điều kiện áp dụng chính sách ưu đãi phí và học phí năm học 2024 - 2025",
      content: (
        <span>
          Sau khi hoàn thành các bậc học, học sinh SKY-LINE thuộc các hệ đào tạo (Chất lượng cao, Song bằng, Hội nhập)
          đều nhận được chứng nhận hoàn thành bậc Tiểu học, bằng tốt nghiệp THCS và THPT do Sở GD&ĐT cấp, có giá trị như
          các trường công lập tại Việt Nam.Riêng đối với học sinh hệ Song bằng, các em còn nhận được chứng nhận hoàn
          thành các chương trình Quốc tế được công nhận rộng rãi trên thế giới.
          <br />
          Đối với học sinh hệ Hội nhập, bên cạnh các bằng tốt nghiệp chương trình Việt Nam, các em có thể lựa chọn thi
          lấy chứng chỉ Quốc tế như các bạn hệ Song bằng.
        </span>
      ),
    },
  ]

  return (
    <div className="container">
      <div className="text-center ">
        <span className="font-normal text-base leading-6 text-green">NĂM HỌC 2024-2025</span>
      </div>
      <div className=" mt-16 mb-40">
        {items.map((item, index) => (
          <div key={index} className="  px-[22.375rem]">
            <span className={`w-full text-left  ${activeIndex === index}`} onClick={() => toggleAccordion(index)}>
              <div className="flex justify-between items-center py-5 px-6">
                <span className="font-semibold text-lg leading-6">
                  {index + 1} .{item.title}
                </span>
                <span className="text-gray pl-[5.438rem]">
                  {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
                </span>
              </div>
            </span>
            <div
              className={`transition-[max-height] duration-300 ease-in-out overflow-hidden border-b-[0.031rem]  px-6 ${
                activeIndex === index ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <p className="font-normal text-base pb-6 text-[#475467] ">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default IncentivesScholarshipsPage
