import { ComponentConfig } from "@measured/puck"
import { CommonStylesProps } from "../../../lib/commonCSSProps"

export interface CardProps {
  title?: string
  description?: string
  link?: string
}

export interface EducationalCard extends CommonStylesProps {
  items: CardProps[]
}

export const RenderConfig: ComponentConfig<EducationalCard> = {
  render: ({ items }) => {
    return (
      <div className="flex flex-col sm:gap-6 gap-4">
        <div className="grid lg:grid-cols-2 sm:gap-6 gap-4">
          <div className="w-full flex flex-col rounded-xl p-6 bg-[#039E9A]">
            <div className="flex flex-col text-white sm:pb-0 sm:pt-0 text-center">
              <p
                className="sm:text-lg sm:leading-6 text-base leading-6 font-semibold text-white"
                dangerouslySetInnerHTML={{ __html: items[0].title || "" }}
              />
              <div className="flex flex-col">
                <p
                  className="sm:text-lg sm:leading-6  text-[0.813rem] leading-[1.313rem] font-normal"
                  dangerouslySetInnerHTML={{ __html: items[0].description || "" }}
                />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col rounded-xl p-6 bg-[#188399]">
            <div className="flex flex-col text-white text-sm leading-5 sm:pb-0 sm:pt-0 text-center">
              <p
                className="sm:text-lg sm:leading-6 text-base leading-6 font-semibold text-white"
                dangerouslySetInnerHTML={{ __html: items[1].title || "" }}
              />

              <div className="flex flex-col">
                <p
                  className="sm:text-lg sm:leading-6  text-[0.813rem] leading-[1.313rem] font-normal"
                  dangerouslySetInnerHTML={{ __html: items[1].description || "" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 sm:gap-6 gap-4">
          <div className="w-full flex flex-col rounded-xl p-6 bg-[#355C97]">
            <div className="flex flex-col text-white text-sm leading-5 sm:pb-0 sm:pt-0 text-center">
              <p
                className="sm:text-lg sm:leading-6 text-base leading-6 font-semibold text-white"
                dangerouslySetInnerHTML={{ __html: items[2].title || "" }}
              />

              <div className="flex flex-col">
                <p
                  className="sm:text-lg sm:leading-6  text-[0.813rem] leading-[1.313rem] font-normal"
                  dangerouslySetInnerHTML={{ __html: items[2].description || "" }}
                />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col rounded-xl p-6 bg-[#533595]">
            <div className="flex flex-col text-white text-sm leading-5 sm:pb-0 sm:pt-0 text-center">
              <p
                className="sm:text-lg sm:leading-6 text-base leading-6 font-semibold text-white"
                dangerouslySetInnerHTML={{ __html: items[3].title || "" }}
              />

              <div className="flex flex-col">
                <p
                  className="sm:text-lg sm:leading-6  text-[0.813rem] leading-[1.313rem] font-normal"
                  dangerouslySetInnerHTML={{ __html: items[3].description || "" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
}
