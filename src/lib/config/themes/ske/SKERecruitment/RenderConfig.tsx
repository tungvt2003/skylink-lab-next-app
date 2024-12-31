"use client"
import * as Icons from "@ant-design/icons" // Import all Ant Design icons
import { ComponentConfig } from "@measured/puck"
import React from "react"
import { generateResponsiveCSS } from "../../../lib/helper"
import { SKERecruimentProps } from "./SKERecruitment"

export const RenderConfig: ComponentConfig<SKERecruimentProps> = {
  render: ({
    iconType,
    iconWage,
    iconQuantity,
    iconLocation,
    iconCalendar,
    iconButton,
    textTitle,
    textType,
    textWageNumber,
    textQyanlityNumber,
    textLocationTile,
    textLocation,
    textLocationText,
    textCalendarDate,
    textButton,
    link,
  }) => {
    const id = `button-${Math.random().toString(36).substr(2, 9)}`

    const headingStyles: React.CSSProperties = {
      color: "#000000",
      lineHeight: "1.5rem",
      fontWeight: "400",
      fontSize: "1.125rem",
    }

    const headingStyles2: React.CSSProperties = {
      color: "#31343E",
      lineHeight: "1.5rem",
      fontWeight: "400",
      fontSize: "1.125rem",
    }

    const desktopStyles = { display: "flex", paddingTop: "2.5rem", paddingBottom: "2.5rem", borderRadius: "0.75rem" }

    const mobileStyles = {
      display: "block",
    }

    const responsiveCSS = generateResponsiveCSS(id, {
      mobile: mobileStyles,
      desktop: desktopStyles,
    })

    return (
      <>
        {responsiveCSS}
        <div className={`${id} container`}>
          <div className="flex flex-col md:flex-row justify-between px-4 items-start sm:items-center rounded-xl md:px-10 bg-gray-tertiary w-full">
            <div className="flex flex-col sm:flex-col gap-6 pt-6 pb-4 sm:p-7 items-start">
              <div className="flex flex-col gap-[0.875rem] ">
                <div className="text-base leading-5.5 font-semibold text-black-tertiary" style={headingStyles}>
                  {textTitle}
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-[9.813rem]">
                <div className="flex flex-col gap-[0.813rem]">
                  <div className="flex gap-[0.5625rem] items-center">
                    {iconType && React.createElement(Icons[iconType] as React.ComponentType)}
                    <div className="text-4.25 leading-5.25 font-normal text-black-tertiary">
                      <span style={headingStyles2} className="opacity-70">
                        Loại hình:{" "}
                      </span>
                      <span style={headingStyles}>{textType}</span>
                    </div>
                  </div>
                  <div className="flex gap-[0.5625rem] items-center">
                    {iconWage && React.createElement(Icons[iconWage] as React.ComponentType)}
                    <div className="text-base leading-6 font-normal text-black-tertiary">
                      <span style={headingStyles2} className="opacity-70">
                        Lương:{" "}
                      </span>
                      <span style={headingStyles}>{textWageNumber}</span>
                    </div>
                  </div>
                  <div className="flex gap-[0.5625rem] items-center">
                    {iconQuantity && React.createElement(Icons[iconQuantity] as React.ComponentType)}
                    <div className="text-base leading-6 font-normal text-black-tertiary">
                      <span style={headingStyles2} className="opacity-70">
                        Số lượng:{" "}
                      </span>
                      <span style={headingStyles}>{textQyanlityNumber}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[0.813rem]">
                  {textLocationTile && (
                    <div style={headingStyles} className="text-base text-black-tertiary">
                      {textLocationTile}
                    </div>
                  )}
                  <div className="flex gap-[0.5625rem] items-center">
                    {iconLocation && React.createElement(Icons[iconLocation] as React.ComponentType)}
                    <div className="text-base leading-6 font-normal text-black-tertiary">
                      <span style={headingStyles2} className="opacity-70">
                        {textLocation}
                      </span>
                      <span style={headingStyles}>{textLocationText}</span>
                    </div>
                  </div>
                  <div className="flex gap-[0.5625rem] items-center">
                    {iconCalendar && React.createElement(Icons[iconCalendar] as React.ComponentType)}
                    <div className="text-base leading-6 font-normal text-black-tertiary">
                      <span style={headingStyles2} className="opacity-70">
                        Hạn cuối:{" "}
                      </span>
                      <span style={headingStyles}>{textCalendarDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href={link ?? "#"} className="w-[50%] md:w-auto mt-0 md:mt-0 pb-6">
              <button className="flex justify-center md:justify-start w-full md:w-auto text-white py-3 px-4 rounded-[0.5rem] gap-2 text-base h-11 items-center font-normal whitespace-nowrap bg-green hover:bg-green-secondary">
                {textButton}
                {iconButton && React.createElement(Icons[iconButton] as React.ComponentType)}
              </button>
            </a>
          </div>
        </div>
      </>
    )
  },
}
