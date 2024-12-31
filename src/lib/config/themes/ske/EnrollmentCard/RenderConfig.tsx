import * as Icons from "@ant-design/icons" // Import all Ant Design icons
import { ComponentConfig } from "@measured/puck"
import { configs, DefaultImage } from "../../../../external-components"
import { CommonStylesProps } from "../../../lib/commonCSSProps"

export interface CardProps {
  title?: string
  img?: string
  objectTarget?: string
  time?: string
  location?: string
  description?: string
  link?: string
}

export interface EnrollmentCard extends CommonStylesProps {
  items: CardProps[]
}

export const RenderConfig: ComponentConfig<EnrollmentCard> = {
  render: ({ items }) => {
    const currentPath = window.location.pathname
    return (
      <>
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
          {items &&
            items.map((item, index) => (
              <div
                key={index}
                className="bg-white-secondary p-6 lg:p-12 w-full flex flex-col rounded-xl gap-6 lg:gap-8"
              >
                <p className="text-base leading-5.5 lg:text-[2rem] lg:leading-10 font-semibold text-[#31343E]">
                  {item.title}
                </p>
                <a href={`${currentPath}/${item.link}`} target="_blank" rel="noreferrer">
                  <img
                    src={item.img ? `${configs.API_URL}${item.img}` : DefaultImage}
                    alt={`Slide ${index}`}
                    className="w-full h-[15.125rem] object-cover rounded-xl cursor-pointer"
                  />
                </a>
                <div className="flex flex-col gap-3 lg:gap-4 text-[#31343E] text-sm leading-5 lg:text-base font-semibold lg:leading-[1.375rem]">
                  <div className="flex flex-col gap-2">
                    <p>Đối tượng:</p>
                    <p className="text-[0.8125rem] leading-[1.313rem] lg:text-sm font-normal lg:leading-5 text-left">
                      {item.objectTarget}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>Thời gian:</p>
                    <p className="text-[0.8125rem] leading-[1.313rem] lg:text-sm font-normal lg:leading-5 text-left">
                      {item.time}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>Địa điểm học tập và sinh hoạt:</p>
                    <p className="text-[0.8125rem] leading-[1.313rem] lg:text-sm font-normal lg:leading-5 text-left">
                      {item.location}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>Thông tin ưu đãi:</p>
                    <p
                      className="text-[0.8125rem] leading-[1.313rem] lg:text-sm font-normal lg:leading-5 text-left"
                      dangerouslySetInnerHTML={{
                        __html: item.description ? item.description.replace(/\n/g, "<br/>") : "",
                      }}
                    />
                  </div>
                </div>
                <button
                  style={{ boxShadow: "5px 8px 32px 9px #0000000D" }}
                  onClick={() => window.open(item.link, "_blank")}
                  className="w-fit px-4 py-3 rounded-lg text-[0.8125rem] leading-[1.313rem] flex flex-row gap-2 bg-[#00A19A]
               text-white lg:text-sm font-semibold lg:leading-5 hover:bg-white
               hover:text-[#00A19A] hover:border-[#00A19A] border-[1px]
               border-[#00A19A] duration-300 mt-auto items-center"
                >
                  Chi tiết chương trình học <Icons.RightOutlined size={14} />
                </button>
              </div>
            ))}
        </div>
      </>
    )
  },
}
