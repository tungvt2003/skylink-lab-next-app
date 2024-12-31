"use client"
import * as Icons from "@ant-design/icons" // Import all Ant Design icons
import { ComponentConfig } from "@measured/puck"
import { CommonStylesProps } from "../../../lib/commonCSSProps"
import { iconOptions } from "../../../lib/icons"
import { RenderConfig } from "./RenderConfig"

export interface SKERecruimentProps extends CommonStylesProps {
  iconType?: keyof typeof Icons
  iconWage?: keyof typeof Icons
  iconQuantity?: keyof typeof Icons
  iconLocation?: keyof typeof Icons
  iconCalendar?: keyof typeof Icons
  iconButton?: keyof typeof Icons
  textTitle?: string
  textType?: string
  textWageNumber?: string
  textQyanlityNumber?: string
  textLocationTile?: string
  textLocation?: string
  textLocationText?: string
  textCalendarDate?: string
  textButton?: string
  link?: string
}

export const SKERecruiment: ComponentConfig<SKERecruimentProps> = {
  label: "SKE | Recruitment",
  fields: {
    className: {
      label: "Class Name",
      type: "text",
    },
    iconType: { label: "Icon Type", type: "select", options: iconOptions },
    iconWage: { label: "Icon Wage", type: "select", options: iconOptions },
    iconQuantity: { label: "Icon Quanlity", type: "select", options: iconOptions },
    iconLocation: { label: "Icon Location", type: "select", options: iconOptions },
    iconCalendar: { label: "Icon Calendar", type: "select", options: iconOptions },
    iconButton: { label: "Icon Button", type: "select", options: iconOptions },
    textTitle: { label: "Text Title", type: "text" },
    textType: { label: "Text Type", type: "text" },
    textWageNumber: { label: "Text Wage Number", type: "text" },
    textQyanlityNumber: { label: "Text Quanlity Number", type: "text" },
    textLocationTile: { label: "Text Location Title", type: "text" },
    textLocation: { label: "Text Location", type: "text" },
    textLocationText: { label: "Text Location", type: "text" },
    textCalendarDate: { label: "Text Calendar Date", type: "text" },
    textButton: { label: "Text Button", type: "text" },
    link: {
      label: "Link button",
      type: "text",
    },
  },
  defaultProps: {
    className: "",
    iconType: "InboxOutlined",
    iconWage: "DollarOutlined",
    iconQuantity: "UserOutlined",
    iconLocation: "EnvironmentOutlined",
    iconCalendar: "CalendarOutlined",
    iconButton: "ArrowRightOutlined",
    textTitle: "Giáo viên Tiếng Anh",
    textType: "Full-time",
    textWageNumber: "2.000.000VNĐ",
    textQyanlityNumber: "1",
    textLocationTile: "SKYLINE",
    textLocation: "Cơ sở 1: ",
    textLocationText: "SKY-LINE Riverside",
    textCalendarDate: "30/11/2021",
    textButton: "Ứng tuyển ngay",
  },
  ...RenderConfig,
}
