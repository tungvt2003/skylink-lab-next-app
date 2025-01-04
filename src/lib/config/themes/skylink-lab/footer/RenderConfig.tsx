"use client"

import { ComponentConfig } from "@measured/puck"
import { message } from "antd"
import { useEffect, useState } from "react"
import { configs } from "../../../../external-components"
import httpClient from "../../../../http-client"
import { CommonStylesProps } from "../../../lib/commonCSSProps"
import createMenuStructure, { MenuItem } from "../../../lib/create-menu-structure"
import { generateResponsiveCSS } from "../../../lib/helper"
import SvgIconRenderer from "../../../lib/icons-svg"

export interface FooterProps extends CommonStylesProps {
  img: string
  copyRight: string
  descriptionItems: []
  iconItems: []
  idMenu: string
  termService: []
}

interface Menu {
  attributes: {
    items: MenuItem[]
  }
}
interface MenuItemWithSubItems extends MenuItem {
  subItems?: MenuItem[]
}

export const RenderConfig: ComponentConfig<FooterProps> = {
  render: ({ img, className, styles, responsiveType, copyRight, descriptionItems, iconItems, idMenu, termService }) => {
    const id = `footer-SKLLab-${Math.random().toString(36).substr(2, 9)}`

    const responsiveCSS = generateResponsiveCSS(id, styles || {}, responsiveType)

    const [menuData, setMenuData] = useState<Menu>()

    const fetchMenuPreference = async () => {
      try {
        const API_PREFIX_MENUPREFERENCE_PATH = "menu-preferences"
        const response = await httpClient.get<{ data: { attributes: { items: MenuItem[] } } }>(
          `${API_PREFIX_MENUPREFERENCE_PATH}/${idMenu}`,
          {
            params: {
              populate: "*",
              locale: "all",
            },
          },
        )
        if (response.data) {
          setMenuData(response.data)
        }
        return response
      } catch (error) {
        message.error("Failed to fetch categories. Please try again.")
      }
    }
    const structuredMenu = createMenuStructure(menuData && menuData.attributes.items)
    useEffect(() => {
      if (idMenu) fetchMenuPreference()
    }, [idMenu])
    return (
      <>
        {responsiveCSS}
        <div id={id}>
          <div className="flex sm:flex-row flex-col flex-wrap pb-[55px] sm:pb-[95px]">
            <div className="flex flex-col items-center sm:items-start gap-5 sm:gap-6 sm:w-[38.679%] p-[10px] mb-5 sm:mb-0">
              <div className="shadow-md bg-white px-3 py-2 rounded-lg">
                <img src={configs.API_URL + img} alt="logo" className="w-[120px] h-7" />
              </div>
              <div className="flex flex-col gap-5 sm:gap-6 w-auto sm:w-[350px]">
                {descriptionItems &&
                  descriptionItems.map((item: any, index: number) => (
                    <div key={index}>
                      <p className="text-[#9E9E9E] text-base font-semibold text-center sm:text-start">
                        {item.description}
                      </p>
                    </div>
                  ))}
              </div>
              <div className="h-fit flex gap-5 sm:gap-4">
                {iconItems &&
                  iconItems.map((item: any, index: number) => (
                    <a
                      href={item.urlIcon}
                      key={index}
                      target="_blank"
                      className="group p-1 border rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-[#bb3de5]"
                    >
                      <span className="text-white transition-colors duration-300 group-hover:text-[#bb3de5]">
                        <SvgIconRenderer icon={item.icon || ""} color="" />
                      </span>
                    </a>
                  ))}
              </div>
            </div>
            <div className="flex w-full sm:w-[61.321%] flex-wrap">
              {structuredMenu?.map((item, index) => (
                <div
                  key={item?.id}
                  className="h-full flex flex-col items-center sm:items-start gap-6 transition-opacity duration-300 group w-[50%] sm:w-[25%] p-[10px]"
                >
                  <a href={item.url}>
                    <span
                      className={`menu-item item-${index} flex items-center text-lg font-semibold text-white transition-all duration-300`}
                    >
                      {item?.title}
                    </span>
                  </a>
                  <div className="flex flex-col gap-3">
                    {item?.attribute &&
                      item?.attribute?.length > 0 &&
                      item.attribute.map((subItem, subIndex) => (
                        <a key={subIndex} href={subItem.url}>
                          <span
                            className={`menu-item item-${index} flex items-center h-full text-[16px] font-semibold text-[#9E9E9E] hover:text-[#CD41FA] transition-all duration-300`}
                          >
                            {subItem?.title}
                          </span>
                        </a>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full border-t border-[#FFFFFF1F] pb-[35px]"></div>
          <div className="flex sm:flex-row flex-col-reverse items-center justify-between text-white pt-4 pb-12 sm:text-base text-[15px] font-semibold">
            <div className="p-[10px] text-center">
              {copyRight && (
                <a>
                  <span>{copyRight}</span>
                </a>
              )}
            </div>
            <div className="p-[10px] flex gap-8">
              {termService && (
                <>
                  {termService.map((item: any, index: number) => (
                    <a key={index} href={item.url} className="hover:text-[#bb3de5] duration-300">
                      <span className="">{item.title}</span>
                    </a>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </>
    )
  },
}
