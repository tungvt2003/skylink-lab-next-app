"use client"
import { ComponentConfig } from "@measured/puck"

export type RelationshipLayoutProps = {
  items: { id?: number; title: string; description?: { content: string }[] }[]
  height?: number
}
export const RenderConfig: ComponentConfig<RelationshipLayoutProps> = {
  render: ({ items }) => {
    return (
      <div className="mx-auto flex flex-col gap-[0.75rem] w-full  px-4 sm:px-0">
        <div className="w-full sm:w-[28.125rem] ${index % 2 === 0 ? 'sm:ml-0' : 'sm:ml-auto'} mx-auto] z-50">
          <div className="flex flex-col gap-3 text-center bg-gradient-to-r from-[#5B2893] to-[#00A19A] px-6 py-[2.6875rem] rounded-lg">
            <p
              className="text-white sm:text-lg text-sm leading-5 sm:leading-[30px] font-semibold"
              dangerouslySetInnerHTML={{ __html: items[0]?.title || "" }}
            />
            <div>
              {items[0]?.description?.map((descItem, descIndex) => (
                <div
                  key={descIndex}
                  className="flex flex-col gap-1 text-[13px] leading-[21px] sm:text-base sm:leading-[30px] font-normal text-white"
                  dangerouslySetInnerHTML={{ __html: descItem.content || "" }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="relative hidden sm:block z-40">
          <div className="absolute top-[-120px] h-[193px] left-[420px] w-[190px] bg-transparent border-dashed border-gray-500 border-r-2 border-t-2 z-[-90000] rounded-[22px]"></div>
        </div>
        <div className="relative sm:hidden block">
          <div className="absolute top-[-120px] right-[50%] h-[193px]  w-[190px] bg-transparent border-dashed border-gray-500 border-r-2 z-[-90000] rounded-[22px]"></div>
        </div>
        <div className="w-full sm:w-[28.125rem] ${index % 2 === 0 ? 'sm:ml-0' : 'sm:ml-auto'} mx-auto] ml-auto z-50">
          <div className="flex flex-col gap-3 text-center bg-gradient-to-r from-[#5B2893] to-[#00A19A] px-6 py-[2.6875rem] rounded-lg">
            <p
              className="text-white sm:text-lg text-sm leading-5 sm:leading-[30px] font-semibold"
              dangerouslySetInnerHTML={{ __html: items[1]?.title || "" }}
            />
            <div>
              {items[1]?.description?.map((descItem, descIndex) => (
                <div
                  key={descIndex}
                  className="flex flex-col gap-1 text-[13px] leading-[21px] sm:text-base sm:leading-[30px] font-normal text-white"
                  dangerouslySetInnerHTML={{ __html: descItem.content || "" }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="relative sm:block hidden z-40">
          <div className="absolute top-[-120px] h-[193px] left-[220px] w-[190px] bg-transparent border-dashed border-gray-500 border-l-2 border-t-2 z-[-90000] rounded-[22px]"></div>
        </div>
        <div className="relative block sm:hidden">
          <div className="absolute top-[-120px] right-[50%] h-[193px]  w-[190px] bg-transparent border-dashed border-gray-500 border-r-2 z-[-90000] rounded-[22px]"></div>
        </div>
        <div className="w-full sm:w-[28.125rem] ${index % 2 === 0 ? 'sm:ml-0' : 'sm:ml-auto'} mx-auto] z-50">
          <div className="flex flex-col gap-3 text-center bg-gradient-to-r from-[#5B2893] to-[#00A19A] px-6 py-[2.6875rem] rounded-lg">
            <p
              className="text-white sm:text-lg text-sm leading-5 sm:leading-[30px] font-semibold"
              dangerouslySetInnerHTML={{ __html: items[2]?.title || "" }}
            />
            <div>
              {items[2]?.description?.map((descItem, descIndex) => (
                <div
                  key={descIndex}
                  className="flex flex-col gap-1 text-[13px] leading-[21px] sm:text-base sm:leading-[30px] font-normal text-white"
                  dangerouslySetInnerHTML={{ __html: descItem.content || "" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  },
}
