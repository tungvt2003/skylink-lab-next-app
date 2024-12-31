import { ComponentConfig } from "@measured/puck"
import { useState } from "react"
import { CommonStylesProps } from "../../../lib/commonCSSProps"

export interface EducationalCard extends CommonStylesProps {
  steps?: {
    id: number
    title: string
    content: string
    link: string
  }[]
}

export const RenderConfig: ComponentConfig<EducationalCard> = {
  render: ({ steps }) => {
    const [currentStep, setCurrentStep] = useState(1)

    return (
      <div className="flex sm:flex-row flex-col bg-[#003038] text-white sm:gap-16 gap-8 sm:py-16 py-8 sm:px-[120px] px-4">
        <div className="sm:w-1/3 w-full">
          <h2 className="sm:text-[31px] sm:leading-12 text-xl font-semibold mb-10">QUY TRÌNH TUYỂN SINH</h2>
          <div className="sm:block flex">
            {steps?.map((step, index) => (
              <div key={step.id} className="sm:w-full">
                <button
                  onClick={() => setCurrentStep(step.id)}
                  className={`flex sm:flex-col w-full flex-row ${
                    currentStep === step.id ? "text-teal-400 font-bold" : "text-white opacity-50"
                  }`}
                >
                  <div className="flex flex-col gap-2">
                    <span
                      className={`w-8 h-8 flex items-center justify-center rounded-full ${
                        currentStep === step.id ? "bg-white text-green" : "bg-gray"
                      }`}
                    >
                      {step.id}
                    </span>
                    <p
                      className="sm:text-lg sm:leading-[30px] text-sm font-semibold text-white text-left"
                      dangerouslySetInnerHTML={{ __html: step.title || "" }}
                    />
                  </div>
                  {index < steps.length - 1 && <p className="sm:pl-3 sm:pr-0 pl-[10px] pr-[34px] leading-10">|</p>}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="sm:w-2/3 w-full bg-white sm:py-10 sm:px-16 p-4 rounded-lg shadow-lg">
          {(steps || [])
            .filter(step => step.id === currentStep)
            .map(step => (
              <div key={step.id}>
                <p
                  className="sm:text-base sm:leading-7 text-[13px] leading-[21px] font-semibold text-black-tertiary"
                  dangerouslySetInnerHTML={{ __html: step.content || "" }}
                />
              </div>
            ))}
        </div>
      </div>
    )
  },
}
