import { ComponentConfig } from "@measured/puck"
import { useEffect, useState } from "react"
import { CommonStylesProps } from "../../../lib/commonCSSProps"

export interface CountdownProps extends CommonStylesProps {
  targetDate: Date
}

export const RenderConfig: ComponentConfig<CountdownProps> = {
  render: ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(
      Math.max(0, Math.floor((new Date(targetDate).getTime() - new Date().getTime()) / 1000)),
    )

    useEffect(() => {
      const calculateTimeLeft = () => {
        const now = new Date().getTime()
        const target = new Date(targetDate).getTime()
        setTimeLeft(Math.max(0, Math.floor((target - now) / 1000)))
      }

      const interval = setInterval(calculateTimeLeft, 1000)
      return () => clearInterval(interval)
    }, [targetDate])

    const formatTime = (seconds: number) => {
      const d = Math.floor(seconds / (3600 * 24))
      const h = Math.floor((seconds % (3600 * 24)) / 3600)
      const m = Math.floor((seconds % 3600) / 60)
      const s = Math.floor(seconds % 60)
      return { days: d, hours: h, minutes: m, seconds: s }
    }

    const { days: d, hours: h, minutes: m, seconds: s } = formatTime(timeLeft)

    return (
      <div className="flex flex-col items-center bg-[#6A2214] h-[604px] gap-10 py-10 px-[25px]">
        <div className="text-center ">
          <div className="flex flex-col items-center bg-white text-[#6A2214] w-20 px-[0.656rem]">
            <span className="text-5xl leading-[65.57px] font-extrabold">{d.toString().padStart(2, "0")}</span>
          </div>
          <span className="text-sm text-white font-bold">NGÀY</span>
        </div>
        <div className="text-center">
          <div className="flex flex-col items-center bg-white text-[#6A2214] w-20 px-[0.656rem]">
            <span className="text-5xl leading-[65.57px] font-extrabold">{h.toString().padStart(2, "0")}</span>
          </div>
          <span className="text-sm text-white font-bold">GIỜ</span>
        </div>
        <div className="text-center">
          <div className="flex flex-col items-center bg-white text-[#6A2214] w-20 px-[0.656rem]">
            <span className="text-5xl leading-[65.57px] font-extrabold">{m.toString().padStart(2, "0")}</span>
          </div>
          <span className="text-sm text-white font-bold">PHÚT</span>
        </div>
        <div className="text-center ">
          <div className="flex flex-col items-center bg-white text-[#6A2214] w-20 px-[0.656rem]">
            <span className="text-5xl leading-[65.57px] font-extrabold">{s.toString().padStart(2, "0")}</span>
          </div>
          <span className="text-sm text-white font-bold">GIÂY</span>
        </div>
      </div>
    )
  },
}
