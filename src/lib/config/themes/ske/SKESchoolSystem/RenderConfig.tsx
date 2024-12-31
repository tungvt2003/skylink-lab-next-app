import { ComponentConfig } from "@measured/puck"
import { useEffect, useState } from "react"
import { DefaultImage } from "../../../../external-components"
import { generateImagePath } from "../../../../utils"
import { IconLink360 } from "../../../assets/icon-link-360"
import { IconLocation } from "../../../assets/icon-location"
import { CommonStylesProps } from "../../../lib/commonCSSProps"

export interface ItemButtonProps {
  title: string
  img?: string
  nameSchool: string
  address: string
  link?: string
}

export interface SystemSchoolProps extends CommonStylesProps {
  title: string
  description: string
  items: ItemButtonProps[]
}

export const RenderConfig: ComponentConfig<SystemSchoolProps> = {
  render: ({ items, title, description }) => {
    const [selectedButton, setSelectedButton] = useState<number>(0)
    const [selectedAddress, setSelectedAddress] = useState<string>(items[0].address || "")
    const [selectedTitle, setSelectedTitle] = useState<string>(items[0].nameSchool || "")
    const [imageUrl, setImageUrl] = useState<string>(items[0].img || DefaultImage)
    const [link, setLink] = useState<string>(items[0].link || "")
    const [zoom, setZoom] = useState(false)

    const handleButtonClick = (index: number, title: string, address: string, img?: string, link?: string) => {
      setSelectedButton(index)
      setSelectedTitle(title)
      setSelectedAddress(address)
      setImageUrl(img ?? DefaultImage)
      setLink(link ?? "")

      setZoom(true) // Bắt đầu hiệu ứng zoom từ scale-50
    }

    useEffect(() => {
      if (zoom) {
        const timer = setTimeout(() => setZoom(false), 500)
        return () => clearTimeout(timer)
      }
    }, [zoom])

    return (
      <div className="flex flex-col-reverse gap-6 sm:flex-row sm:gap-[5.75rem]">
        <div className="rounded-xl transition-opacity duration-500 ease-in-out opacity-100 sm:rounded-3xl">
          <div
            data-aos="fade-right"
            data-aos-duration="500"
            className="bg-white relative h-[26.75rem] rounded-xl shadow-md overflow-hidden w-full transition-opacity duration-500 ease-in-out opacity-100 sm:h-[36.25rem] sm:w-[30.625rem] sm:rounded-3xl"
          >
            <div className="bg-white px-2 pt-2 h-[24.75rem] w-full group">
              <div className="relative w-full h-[17.875rem] sm:h-[24.75rem] overflow-hidden rounded-t-lg sm:rounded-t-3xl">
                <img
                  src={
                    imageUrl
                      ? generateImagePath(imageUrl, "medium")
                      : "https://randomuser.me/api/portraits/women/50.jpg"
                  }
                  alt="banner"
                  className={`object-cover w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-105 ${zoom ? "scale-150" : "scale-100"
                    }`}
                />
              </div>
            </div>

            <div className="bg-green flex flex-col gap-2 p-4 justify-center absolute bottom-0 rounded-xl sm:rounded-3xl w-full sm:gap-3 sm:p-6">
              <h2 className="text-base sm:text-2xl sm:leading-7 font-bold text-center text-white">{selectedTitle}</h2>
              <p className="text-center font-normal text-white text-4.25 leading-5.25 sm:text-base sm:leading-6 px-[50px] sm:px-[6.25rem]">
                {selectedAddress}
              </p>
              <div className="flex justify-center">
                <a
                  href={link}
                  target="_blank"
                  className="text-[10px] leading-3 flex gap-1 py-[0.531rem] px-6 font-bold text-green bg-white border border-white rounded-full hover:bg-green hover:text-white hover:border-white transition-colors duration-300 ease-in-out sm:text-xs sm:leading-3.5"
                >
                  <span className="w-[69px] h-[28px]">Tham quan trực tuyến</span>
                  <IconLink360 className="w-[1.563rem] h-[1.563rem] sm:w-[1.813rem] sm:h-[1.813rem]" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="500" className="flex flex-col justify-center gap-6 sm:gap-12">
          <div className="flex flex-col gap-3">
            <div className="text-xl leading-7 sm:text-4.5xl sm:leading-12 font-extrabold text-white text-center font-open_sans">
              {title}
            </div>
            <div className="text-4.25 leading-5.25 sm:text-base flex justify-center text-justify text-white">
              {description}
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-rows-3 gap-4 xl:gap-x-[1rem] sm:gap-y-8">
            {items.map((button, index) => (
              <button
                key={index}
                className={`flex justify-start items-start group gap-1 sm:gap-4 text-left text-4.25 leading-5.25 font-medium p-3 pr-0 whitespace-nowrap sm:text-lg sm:font-semibold sm:leading-6 sm:py-5 rounded-lg sm:rounded-xl border border-white hover:bg-white hover:text-green ${selectedButton === index
                  ? "border-white text-green bg-white"
                  : "text-white border-white hover:border-green hover:text-green"
                  }`}
                onClick={() => handleButtonClick(index, button.nameSchool, button.address, button.img, button.link)}
              >
                <IconLocation className="h-4 w-4 sm:w-6 sm:h-6 transition-colors stroke-white group-hover:stroke-[#00A19A]" />
                {button.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  },
}
