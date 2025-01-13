import React from "react"
import { ArrowLeftSVG } from "../assets/arrow-left-svg"
import { ArrowRightSVG } from "../assets/arrow-right-svg"
import { IconFacebookSVG } from "../assets/icon-facebook-svg"
import { IconLinkedinSVG } from "../assets/icon-linkedin-svg"
import { IconYoutubeSVG } from "../assets/icon-youtube-svg"
import { LeftOutlinedSVG } from "../assets/left-outlined"

interface IconOption {
  label: string
  value: string
  svgPath?: string
  svgFile?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

export const iconOptions: IconOption[] = [
  { label: "ArrowLeftIcon", value: "ArrowLeftIcon", svgFile: ArrowLeftSVG },
  { label: "ArrowRightIcon", value: "ArrowRightIcon", svgFile: ArrowRightSVG },
  { label: "LeftOutlined", value: "LeftOutlined", svgFile: LeftOutlinedSVG },
  { label: "Facebook", value: "Facebook", svgFile: IconFacebookSVG },
  { label: "Youtube", value: "Youtube", svgFile: IconYoutubeSVG },
  { label: "Linkedin", value: "Linkedin", svgFile: IconLinkedinSVG },
]

interface SvgIconRendererProps {
  icon: string
  sizeHeight?: number
  sizeWidth?: number
  color?: string
}

const SvgIconRenderer: React.FC<SvgIconRendererProps> = ({
  icon,
  sizeWidth = 16,
  sizeHeight = 12,
  color = "currentColor",
}) => {
  const customIcon = iconOptions.find(item => item.value === icon)

  if (customIcon) {
    if (customIcon.svgFile) {
      const ImportedIcon = customIcon.svgFile
      return <ImportedIcon width={sizeWidth} height={sizeHeight} fill={color} />
    } else if (customIcon.svgPath) {
      return (
        <svg width={sizeWidth} height={sizeHeight} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
          <path d={customIcon.svgPath} />
        </svg>
      )
    }
  }

  return (
    <svg
      width={sizeWidth}
      height={sizeHeight}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  )
}

export default SvgIconRenderer
