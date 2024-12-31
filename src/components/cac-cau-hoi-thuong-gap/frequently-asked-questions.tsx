"use client"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

const AskedQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const items = [
    {
      title: "Khi học sinh SKY-LINE học xong thì bằng do ai cấp?",
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
      title: "SKY-LINE có chương trình học nào phù hợp cho học sinh chuẩn bị vào lớp 1",
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
      title: "Khi học sinh SKY-LINE học xong thì bằng do ai cấp?",
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
      title: "Khi học sinh SKY-LINE học xong thì bằng do ai cấp?",
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
      title: "Khi học sinh SKY-LINE học xong thì bằng do ai cấp?",
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
    <div className="container mb-25">
      {items.map((item, index) => (
        <div key={index} className="  px-[22.375rem]">
          <span className={`w-full text-left  ${activeIndex === index}`} onClick={() => toggleAccordion(index)}>
            <div className="flex justify-between items-center py-5 px-6">
              <span className="font-semibold text-lg leading-6">{item.title}</span>
              <span className="text-gray pl-[7.125rem]">{activeIndex === index ? <ChevronUp /> : <ChevronDown />}</span>
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
  )
}

export default AskedQuestions
