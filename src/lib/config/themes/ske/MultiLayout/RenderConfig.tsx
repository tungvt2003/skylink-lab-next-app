"use client"
import * as Icons from "@ant-design/icons"
import { ComponentConfig } from "@measured/puck"
import { configs, DefaultImage } from "../../../../external-components"
import useIsMobile from "../../../lib/use-is-mobile"

export type MultiLayoutProps = {
  items: {
    id?: number
    image?: string
    url: string
    title: string
    description?: string
    icon?: keyof typeof Icons
  }[]
  height?: number
}

export const RenderConfig: ComponentConfig<MultiLayoutProps> = {
  render: ({ items }: { items: MultiLayoutProps["items"] }) => {
    const isMobile = useIsMobile()
    return (
      <div className="grid grid-cols-1 md:grid-cols-4  md:grid-rows-3 ">
        <div className="relative h-[23.438rem] md:h-full md:col-span-2 md:row-span-2 row-span-1">
          <div className="relative h-full w-full overflow-hidden">
            <img
              src={items[0]?.image ? `${configs.API_URL}${items[0]?.image}` : DefaultImage}
              alt="imageCustomer4"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="absolute left-0 bottom-0 h-1/2 w-1/2 bg-opacity-70 bg-green flex items-center sm:items-end px-6 sm:py-9 md:px-10  ">
            <div className="text-center font-bold text-2xl sm:text-[1.875rem] leading-9 sm:leading-[3.5rem] text-white uppercase">
              {items[0].title}
            </div>
          </div>
        </div>
        {isMobile ? (
          <>
            <div className="flex h-[11.688rem]">
              <div className="relative row-span-1 w-1/2">
                <div className="relative h-full w-full overflow-hidden">
                  <img
                    src={items[1]?.image ? `${configs.API_URL}${items[1]?.image}` : DefaultImage}
                    alt="imageCustomer2"
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
              <div className="bg-blue-secondary w-1/2 flex items-end sm:items-center justify-start sm:justify-start text-white font-semibold text-lg sm:text-2xl md:text-3xl leading-6 px-4 py-4 md:col-span-1 md:row-span-1">
                <div className="text-center flex flex-row items-center gap-2">
                  <img
                    src={items[3].icon ? `${configs.API_URL}${items[3].icon}` : DefaultImage}
                    alt=""
                    style={{ width: "2.75rem", height: "2.75rem" }}
                  />
                  {items[3].title}
                </div>
              </div>
            </div>

            <div className="flex h-[11.688rem]">
              <div className="bg-blue-secondary flex items-end sm:items-center w-1/2 justify-start sm:justify-center text-white font-semibold text-lg sm:text-2xl md:text-3xl leading-6 px-4 py-4 md:col-span-1 md:row-span-1">
                <div className="text-center flex flex-row items-center gap-2">
                  <img
                    src={items[2].icon ? `${configs.API_URL}${items[2].icon}` : DefaultImage}
                    alt=""
                    style={{ width: "2.75rem", height: "2.75rem" }}
                  />
                  {items[2].title}
                </div>
              </div>
              <div className="bg-green  w-1/2 flex items-end sm:items-center justify-start sm:justify-center text-white font-semibold text-lg sm:text-2xl md:text-3xl leading-6 px-4 py-4 md:col-span-1 md:row-span-1">
                <div className="text-center flex flex-row items-center gap-2">
                  <img
                    src={items[1].icon ? `${configs.API_URL}${items[1].icon}` : DefaultImage}
                    alt=""
                    style={{ width: "2.75rem", height: "2.75rem" }}
                  />
                  {items[1].title}
                </div>
              </div>
            </div>

            <div className="flex h-[11.688rem]">
              <div className="relative w-1/2  row-span-1">
                <div className="relative h-full w-full overflow-hidden">
                  <img
                    src={items[2]?.image ? `${configs.API_URL}${items[2]?.image}` : DefaultImage}
                    alt="imageCustomer3"
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
              <div className="bg-blue-secondary flex  items-end sm:items-center w-1/2 justify-start sm:justify-center text-white font-semibold text-lg sm:text-2xl md:text-3xl leading-6 px-4 py-4 md:col-span-1 md:row-span-1">
                <div className="text-center flex flex-row items-center gap-2">
                  <img
                    src={items[5].icon ? `${configs.API_URL}${items[5].icon}` : DefaultImage}
                    alt=""
                    style={{ width: "2.75rem", height: "2.75rem" }}
                  />
                  {items[5].title}
                </div>
              </div>
            </div>

            <div className="flex h-[11.688rem]">
              <div className="bg-blue-secondary w-1/2  flex items-end sm:items-center justify-start sm:justify-center text-white font-semibold text-lg sm:text-2xl md:text-3xl leading-6 px-4 py-4 md:col-span-1 md:row-span-1">
                <div className="text-center flex flex-row items-center gap-2">
                  <img
                    src={items[4].icon ? `${configs.API_URL}${items[4].icon}` : DefaultImage}
                    alt=""
                    style={{ width: "2.75rem", height: "2.75rem" }}
                  />
                  {items[4].title}
                </div>
              </div>
              <div className="relative  w-1/2 md:col-span-1 md:row-span-1 row-span-1">
                <div className="relative h-full w-full overflow-hidden">
                  <img
                    src={items[3]?.image ? `${configs.API_URL}${items[3]?.image}` : DefaultImage}
                    alt="imageCustomer3"
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {items.slice(1, 4).map((item, index) => {
              return (
                <div
                  key={index}
                  className={`${
                    index === 0 ? "bg-green" : "bg-blue-secondary"
                  } flex items-end text-white font-semibold text-3xl leading-6 px-[3.6875rem] py-[2.825rem] md:col-span-1 md:row-span-1 col-span-4`}
                >
                  <div className="text-center flex flex-row gap-2 justify-center items-center">
                    <img
                      src={item.icon ? `${configs.API_URL}${item.icon}` : DefaultImage}
                      alt=""
                      style={{ width: "2.75rem", height: "2.75rem" }}
                    />
                    {item.title}
                  </div>
                </div>
              )
            })}
            <div className="relative md:col-span-1 md:row-span-2 row-span-2 col-span-4">
              <div className="relative h-full w-full overflow-hidden">
                <img
                  src={items[1]?.image ? `${configs.API_URL}${items[1]?.image}` : DefaultImage}
                  alt="imageCustomer2"
                  className="object-cover h-[50%] w-full"
                />
                <div className="bg-blue-secondary flex items-end h-[50%] text-white font-semibold text-3xl leading-6 px-[3.6875rem] py-[2.825rem]">
                  <div className="text-center flex flex-row gap-2 justify-center items-center">
                    <img
                      src={items[4].icon ? `${configs.API_URL}${items[4].icon}` : DefaultImage}
                      alt=""
                      style={{ width: "2.75rem", height: "2.75rem" }}
                    />
                    {items[4].title}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative md:col-span-1 md:row-span-1 row-span-2 col-span-4">
              <div className="relative h-full w-full overflow-hidden">
                <img
                  src={items[2]?.image ? `${configs.API_URL}${items[2]?.image}` : DefaultImage}
                  alt="imageCustomer3"
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
            <div className="bg-green flex items-end text-white font-semibold text-3xl leading-6 px-[3.6875rem] py-[2.825rem] md:col-span-1 md:row-span-1 col-span-4">
              <div className="text-center flex flex-row gap-2 justify-center items-center">
                <img
                  src={items[5].icon ? `${configs.API_URL}${items[5].icon}` : DefaultImage}
                  alt=""
                  style={{ width: "2.75rem", height: "2.75rem" }}
                  className="object-cover"
                />
                {items[5].title}
              </div>
            </div>
            <div className="relative md:col-span-1 md:row-span-1 row-span-2 col-span-4">
              <div className="relative h-full w-full overflow-hidden">
                <img
                  src={items[3]?.image ? `${configs.API_URL}${items[3]?.image}` : DefaultImage}
                  alt="imageCustomer3"
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </>
        )}
      </div>
    )
  },
}
