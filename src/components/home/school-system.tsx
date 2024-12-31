"use client"
import CardSystemSchool from "@/components/home/card-school-system"
import SvgVectorLocale from "@/components/svg-component/svg-vector-locale"
import { Button } from "@/components/ui/button"
import { Images } from "@/constants/images"
import { useState } from "react"
const buttons = [
  { title: "SKY-LINE Riverside", address: "Lô A2.4 Đường Trần Đăng Ninh, Q. Hải Châu, TP. Đà Nẵng" },
  { title: "SKY-LINE Global", address: "Lô A2.4 Đường Trần Đăng Ninh, Q. Hải Châu, TP. Đà Nẵng2" },
  { title: "SKY-LINE Beach", address: "Lô A2.4 Đường Trần Đăng Ninh, Q. Hải Châu, TP. Đà Nẵng3" },
  { title: "SKY-LINE Central", address: "Lô A2.4 Đường Trần Đăng Ninh, Q. Hải Châu, TP. Đà Nẵng4" },
  { title: "SKY-LINE Hill", address: "Lô A2.4 Đường Trần Đăng Ninh, Q. Hải Châu, TP. Đà Nẵng5" },
  {
    title: "Trung tâm Sống Thành Công Sky-Line",
    address: "Lô A2.4 Đường Trần Đăng Ninh, Q. Hải Châu, TP. Đà Nẵng",
    isLongTitle: true,
  },
]

const SchoolSystem = () => {
  const [selectedButton, setSelectedButton] = useState<string>(buttons[0].title)
  const [selectedAddress, setSelectedAddress] = useState<string>(buttons[0].address)
  const [selectedTitle, setSelectedTitle] = useState<string>(buttons[0].title)
  const handleButtonClick = (title: string, address: string) => {
    setSelectedButton(title)
    setSelectedTitle(title)
    setSelectedAddress(address)
  }

  return (
    <div className="p-[7.5rem] bg-white-secondary">
      <div className="flex flex-row gap-12">
        <div className="rounded-2xl transition-opacity duration-500 ease-in-out opacity-100">
          <CardSystemSchool
            address={selectedAddress}
            imageUrl={Images.bannerStudent}
            link="#"
            title={selectedTitle}
            key={selectedTitle}
          />
        </div>
        <div className="py-[3.0625rem] flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <div className="text-4.5xl leading-12 font-bold text-black-tertiary text-center">
              HỆ THỐNG TRƯỜNG <span className="text-green">SKYLINE</span>
            </div>
            <div className="text-base flex justify-center text-center">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit.
            </div>
          </div>
          <div className="flex flex-row gap-[2.5rem]">
            <div className="flex flex-col w-1/2 gap-6">
              {buttons.slice(0, 3).map(button => (
                <Button
                  key={button.title}
                  className={`flex justify-start items-start gap-4 text-left h-16 px-6 py-4 text-lg leading-6 text-black-tertiary bg-transparent rounded-xl border border-black-tertiary hover:border-green hover:bg-transparent hover:text-green ${
                    selectedButton === button.title
                      ? "border-green text-green"
                      : "text-black-tertiary border-black-tertiary hover:border-green hover:text-green"
                  } bg-transparent rounded-xl`}
                  onClick={() => handleButtonClick(button.title, button.address)}
                >
                  <SvgVectorLocale className="w-6 h-7" />
                  {button.title}
                </Button>
              ))}
            </div>

            <div className="flex flex-col w-1/2 gap-6">
              {buttons.slice(3).map(button => (
                <Button
                  key={button.title}
                  className={`flex justify-start items-start gap-4 text-left ${
                    button.isLongTitle ? "h-[5rem]" : "h-16"
                  } px-6 py-4 text-lg leading-6 text-black-tertiary bg-transparent rounded-xl border border-black-tertiary hover:border-green hover:bg-transparent hover:text-green ${
                    selectedButton === button.title
                      ? "border-green text-green"
                      : "text-black-tertiary border-black-tertiary hover:border-green hover:text-green"
                  } bg-transparent rounded-xl`}
                  onClick={() => handleButtonClick(button.title, button.address)}
                >
                  {button.isLongTitle ? (
                    <>
                      <div className="flex-none">
                        <SvgVectorLocale className="w-6 h-7" />
                      </div>
                      <div className="text-wrap">{button.title}</div>
                    </>
                  ) : (
                    <>
                      <SvgVectorLocale className="w-6 h-7" />
                      {button.title}
                    </>
                  )}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SchoolSystem
