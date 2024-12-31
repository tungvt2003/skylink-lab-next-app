"use client"

import { ComponentConfig } from "@measured/puck"
import { configs, DefaultImage } from "../../../../external-components"

export type ImageSectionProps = {
  items: {
    id?: number
    image?: string
  }[]
  height?: number
}

export const RenderConfig: ComponentConfig<ImageSectionProps> = {
  render: ({ items }: { items: ImageSectionProps["items"] }) => {
    return (
      <div className="overflow-x-auto overflow-y-hidden scrollbar-hide">
        <div className="inline-flex space-x-2">
          {items.map((item, index) => (
            <div key={index} className="relative sm:w-[37rem] sm:h-[21.375rem] w-[310px] h-[180px]">
              <img
                src={item.image ? `${configs.API_URL}${item.image}` : DefaultImage}
                alt={`imageCustomer ${index}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    )
  },
}
