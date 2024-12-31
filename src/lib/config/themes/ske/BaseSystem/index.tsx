"use client"
import { ComponentConfig } from "@measured/puck"
import { BaseSystemProps, RenderConfig } from "./RenderConfig"
import "./google-map.css"

// Interface định nghĩa cho dữ liệu baseSystem từ API

export const SKEBaseSystem: ComponentConfig<BaseSystemProps> = {
  label: "SKE | Base System",
  // @ts-ignore
  fields: {
    title: {
      type: "text",
      label: "Title",
    },
  },
  defaultProps: {
    title: "Title",
    className: "",
  },
  ...RenderConfig,
}
