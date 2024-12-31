"use client"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useState } from "react"
import { Images } from "../constants/images"
import ModalRegister from "./modal-register"

const FloatingButton = () => {
  const [visible, setVisible] = useState(false)
  const t = useTranslations()

  return (
    <>
      <div className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 w-full z-40 pointer-events-none">
        <div className="flex justify-end w-full">
          <div className="flex flex-col items-end gap-3 cursor-pointer pointer-events-auto">
            <div
              onClick={() => setVisible(true)}
              className="cursor-pointer pointer-events-auto hover:shadow-[0_0_20px_9px_#01A19A]
               hover:rounded-lg duration-300 rounded-lg h-20 w-20 sm:h-[92px] sm:w-[92px] 
               flex flex-col justify-center items-center bg-gradient-to-br from-[#00A19A] to-[#003B38] gap-1 px-[0.5625rem] sm:px-[0.9375rem]"
            >
              <Image
                src={Images.floatingRegister}
                alt="floating-register"
                width={39}
                height={31}
                className="cursor-pointer rounded-sm"
              />
              <p className="font-bold text-[0.625rem] sm:text-xs leading-3.5 text-white text-center">
                {t("Đăng ký tư vấn")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <ModalRegister open={visible} onClose={() => setVisible(false)} />
    </>
  )
}

export default FloatingButton
