"use client"

import { MailFilled, PhoneFilled } from "@ant-design/icons"
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
  fullNameCompany: string
  phone: string
  email: string
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
  render: ({
    img,
    className,
    styles,
    responsiveType,
    copyRight,
    descriptionItems,
    iconItems,
    idMenu,
    termService,
    fullNameCompany,
    phone,
    email,
  }) => {
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
          <div className="flex sm:flex-row flex-col flex-wrap pb-8 sm:pb-[40px]">
            <div className="flex flex-col items-center sm:items-start gap-5 sm:gap-6 sm:w-[45%] p-[10px] mb-5 sm:mb-0">
              <div className="">
                <img src={configs.API_URL + img} alt="logo" className="w-[120px] h-[42px]" />
              </div>
              <div className="flex flex-col gap-2 sm:gap-2 w-full sm:w-[83%]">
                {fullNameCompany && (
                  <p className="text-[#9E9E9E] text-base font-semibold sm:text-start">{fullNameCompany}</p>
                )}
                {descriptionItems &&
                  descriptionItems.map((item: any, index: number) => (
                    <div key={index}>
                      <div className="flex">
                        <svg
                          data-bbox="41.501 20 116.999 160.001"
                          viewBox="50 -20 150 200"
                          height="20"
                          width="40"
                          xmlns="http://www.w3.org/2000/svg"
                          data-type="shape"
                        >
                          <g>
                            <path
                              fill="white"
                              d="M157.367 66.82c-3.105-14.146-10.205-25.614-21.1-34.083-14.606-11.356-31.093-15.144-48.998-11.261-10.993 2.385-20.647 7.708-28.696 15.821-8.462 8.531-13.882 18.86-16.109 30.7-1.122 5.953-1.262 11.473-.43 16.874.862 5.609 2.729 10.685 4.442 14.912 4.273 10.539 9.918 20.076 14.358 27.205 8.241 13.235 17.874 26.672 29.45 41.082a248.399 248.399 0 0 0 3.199 3.874l6.694 8.057 5.455-6.944c13.755-16.57 25.171-32.357 34.9-48.262 6.309-10.316 10.816-19.203 14.182-27.969 3.898-10.164 4.793-20.259 2.653-30.006zM119.04 91.152c-5.093 5.141-11.835 7.976-18.984 7.983h-.025c-14.797.001-26.848-12.115-26.872-27.02-.023-14.812 11.962-26.911 26.717-26.972 7.134-.006 13.868 2.764 18.978 7.868 5.141 5.136 7.982 11.955 8 19.2.019 7.109-2.756 13.835-7.814 18.941z"
                            ></path>
                          </g>
                        </svg>
                        <p className="text-[#9E9E9E] text-base font-semibold sm:text-start">{item.description}</p>
                      </div>
                    </div>
                  ))}

                {phone && (
                  <div className="flex gap-2">
                    <PhoneFilled className="text-base text-white font-medium rotate-90" />
                    <p className="text-[#9E9E9E] text-base font-semibold sm:text-start">{phone}</p>
                  </div>
                )}
                {email && (
                  <div className="flex gap-2">
                    <MailFilled className="text-base text-white font-medium" />
                    <p className="text-[#9E9E9E] text-base font-semibold sm:text-start">{email}</p>
                  </div>
                )}
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
            <div className="flex w-full sm:w-[55%] flex-wrap">
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
                            className={`menu-item item-${index} flex sm:text-left text-center items-center h-full text-[16px] font-semibold text-[#9E9E9E] hover:text-[#CD41FA] transition-all duration-300`}
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
          <div className="w-full border-t border-[#FFFFFF1F] pb-4"></div>
          <div className="flex sm:flex-row flex-col-reverse items-center justify-between text-white sm:text-base text-[15px] font-semibold">
            <div className="p-[10px] text-center">{copyRight && <span>{copyRight}</span>}</div>
            <div className="p-[10px] flex gap-8">
              {termService && (
                <div className="flex gap-5">
                  {termService.map((item: any, index: number) => (
                    <a key={index} href={item.url} className="hover:text-[#bb3de5] duration-300">
                      <span className="">{item.title}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    )
  },
}
