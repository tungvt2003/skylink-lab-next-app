"use client"

import { useLocale } from "next-intl"
import { useRouter } from "next/navigation"
import { useState, useTransition } from "react"

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const localActive = useLocale()
  const [selectedLanguage, setSelectedLanguage] = useState(localActive)

  //   const handleLanguageChange = (nextLocale: string) => {
  //     if (isPending || nextLocale === selectedLanguage) return
  //     setSelectedLanguage(nextLocale)
  //     startTransition(() => {
  //       router.replace(`/${nextLocale}`)
  //     })
  //   }
  const handleLanguageChange = (nextLocale: string) => {
    if (nextLocale === selectedLanguage) return
    setSelectedLanguage(nextLocale)
    router.replace(`/${nextLocale}`)
  }

  return (
    <div className="relative flex flex-row bg-labs-primary w-[100px] p-0.5 rounded-full overflow-hidden">
      <div
        className={`absolute top-0.5 left-0.5 ring-0 w-[calc(50%-2px)] h-7 bg-white rounded-full transition-transform duration-300 z-0 ${
          selectedLanguage === "vi" ? "translate-x-0" : "translate-x-full"
        }`}
      />

      <div
        className={`w-1/2 uppercase font-bold text-sm leading-5 text-center py-1 z-10 duration-500 transition-all cursor-pointer ${
          selectedLanguage === "vi" ? "rounded-full text-[#242F3E]" : "text-white"
        }`}
        onClick={() => handleLanguageChange("vi")}
      >
        vi
      </div>
      <div
        className={`w-1/2 uppercase font-bold text-sm leading-5 text-center py-1 z-10 duration-500 transition-all cursor-pointer ${
          selectedLanguage === "en" ? "rounded-full text-[#242F3E]" : "text-white"
        }`}
        onClick={() => handleLanguageChange("en")}
      >
        en
      </div>
    </div>
  )
}
