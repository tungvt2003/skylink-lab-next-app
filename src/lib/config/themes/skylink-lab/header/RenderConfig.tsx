"use client"

import {
  CaretRightOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons/lib/icons"
import { ComponentConfig } from "@measured/puck"
import { message } from "antd"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import LocalSwitcher from "../../../../../components/local-switcher"
import { configs } from "../../../../external-components"
import httpClient from "../../../../http-client"
import { CommonStylesProps } from "../../../lib/commonCSSProps"
import { generateResponsiveCSS } from "../../../lib/helper"

const Icons = {
  CaretRightOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
  MailOutlined,
  PhoneOutlined,
}

export interface HeaderProps {
  img?: string
  title?: string
  baseAddress?: string
  phoneNumber?: string
  location?: string
}

export interface SKLLabHeaderProps extends CommonStylesProps {
  img?: string
  imgTop?: string
  title?: string
  idMenu: string
  titleButton: string
}

interface MenuItem {
  id: string
  name: string
  url: string
}
export const RenderConfig: ComponentConfig<SKLLabHeaderProps> = {
  render: ({ img, title, idMenu, responsiveType, styles, imgTop, titleButton }) => {
    const id = `header-${Math.random().toString(36).substr(2, 9)}`
    const responsiveCSS = generateResponsiveCSS(id, styles || {}, responsiveType)
    const t = useTranslations()
    const [dataMenu, setdataMenu] = useState<MenuItem[]>([])
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const containerStyle = {
      width: "100%",
      height: "100%",
    }
    const [isScrollingUp, setIsScrollingUp] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [isTop, setIsTop] = useState(true)
    const [isHome, setIsHome] = useState(false)
    const [isClient, setIsClient] = useState(false)

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
      setIsClient(true)
    }, [])

    useEffect(() => {
      if (!isClient) return

      const currentPath = window.location.pathname
      setIsHome(currentPath === "/" || currentPath === "/en")

      const handleScroll = () => {
        const currentScrollY = window.scrollY

        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setIsScrollingUp(false)
        } else if (currentScrollY < lastScrollY) {
          setIsScrollingUp(true)
        }

        setIsTop(currentScrollY <= 10)

        setLastScrollY(currentScrollY)
      }

      window.addEventListener("scroll", handleScroll)

      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }, [lastScrollY, isClient])

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
          setdataMenu(response.data?.attributes?.items)
        }
        return response
      } catch (error) {
        message.error("Failed to fetch categories. Please try again.")
      }
    }

    useEffect(() => {
      fetchMenuPreference()
    }, [])

    useEffect(() => {
      if (isMenuOpen) {
        document.body.classList.add("overflow-hidden")
      } else {
        document.body.classList.remove("overflow-hidden")
      }

      return () => {
        document.body.classList.remove("overflow-hidden")
      }
    }, [isMenuOpen])

    return (
      <>
        {responsiveCSS}
        <div
          className={`${
            isScrollingUp || isTop ? "translate-y-0" : "-translate-y-[100px]"
          } transition-transform duration-300 fixed top-0 w-full z-50 ${
            isHome ? (isTop ? "bg-white shadow-md" : "bg-white shadow-md") : "bg-white shadow-md"
          }`}
          style={{ height: "59px" }}
        >
          <div id="header" className="w-[95%] sm:max-w-[1200px] mx-auto px-[10px] ">
            <div className="flex justify-between h-[59px] items-center">
              <div className="flex h-full">
                <div className="h-full flex items-center">
                  <a href="/">
                    {configs?.API_URL &&
                      (isHome ? (
                        isTop ? (
                          <img src={configs.API_URL + imgTop} alt="logo" className="w-32 sm:w-[140px] h-9" />
                        ) : (
                          <img src={configs.API_URL + img} alt="logo" className="w-32 sm:w-[140px] h-9" />
                        )
                      ) : (
                        <img src={configs.API_URL + img} alt="logo" className="w-32 sm:w-[140px] h-9" />
                      ))}
                  </a>
                </div>
                <div className="hidden sm:flex h-full ml-[2rem]">
                  {
                    <div className="h-full flex items-center group">
                      {dataMenu?.map((item, index) => (
                        <div
                          key={item?.id}
                          className="h-full flex items-center cursor-pointer transition-opacity duration-300 group-hover:opacity-40 hover:!opacity-100"
                        >
                          <a href={item.url} className="flex items-center h-full w-full">
                            <span
                              className={`menu-item item-${index} flex items-center h-full px-5 transition-all duration-300 hover:text-black text-transparent bg-clip-text bg-black font-medium text-[16px]`}
                            >
                              {item?.name}
                            </span>
                          </a>
                        </div>
                      ))}
                    </div>
                  }
                </div>
              </div>
              <div className="flex gap-4 sm:gap-5 items-center">
                <div className="hidden sm:block">
                  <LocalSwitcher />
                </div>
                <button
                  className={`py-[13px] px-5 ${
                    isHome ? (isTop ? "bg-white text-black" : "bg-white text-black") : "bg-white text-black"
                  } hover:bg-labs-secondary hover:text-white duration-300 text-sm leading-4 font-medium rounded-full`}
                >
                  <a
                    href="https://play.google.com/store/apps/details?id=com.skylinklabs.magicswap&pli=1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("Get the app")}
                  </a>
                </button>
                <div>
                  <div className="sm:hidden block">
                    {!isMenuOpen && (
                      <button
                        onClick={toggleMenu}
                        className={`transition-all duration-500 ease-in-out ${isMenuOpen ? "fade-out" : "fade-in"}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#7e4ff9"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-align-left"
                        >
                          <path d="M15 12H3" />
                          <path d="M17 18H3" />
                          <path d="M21 6H3" />
                        </svg>
                      </button>
                    )}
                  </div>

                  {isMenuOpen && (
                    <div
                      className={`fixed top-0 left-0 bg-white z-50 flex flex-col h-screen px-[10px] w-full transition-all duration-500 ease-in-out`}
                    >
                      <div className="flex items-center justify-between h-[59px] w-[95%] mx-auto">
                        <div className="flex h-full">
                          <div className="h-full flex items-center">
                            <a href="/">
                              {configs?.API_URL && (
                                <img src={configs.API_URL + img} alt="logo" className="w-32 sm:w-[140px] h-9" />
                              )}
                            </a>
                          </div>
                        </div>

                        <button
                          onClick={toggleMenu}
                          className={`transition-all duration-500 ${
                            isMenuOpen ? "opacity-100 animate-fadeIn" : "opacity-0"
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 6L6 18" />
                            <path d="M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <nav
                        className={`flex flex-col gap-[30px] mt-6 flex-1 w-[95%] mx-auto ${
                          isMenuOpen ? "animate-slideUp opacity-100" : "opacity-0 translate-y-[100%]"
                        } transition-all duration-500 ease-in-out`}
                      >
                        <LocalSwitcher />

                        {dataMenu &&
                          dataMenu.map((item, index) => (
                            <div
                              key={item?.id}
                              className="w-full flex items-center cursor-pointer transition-opacity duration-300 group"
                            >
                              <a href={item.url} className="w-full">
                                <span
                                  className={`menu-item item-${index} flex items-center h-full hover:text-black text-transparent bg-clip-text bg-black font-medium text-[18px] transition-all duration-300`}
                                >
                                  {item?.name}
                                </span>
                              </a>
                            </div>
                          ))}
                      </nav>

                      <button className="inline-block w-[calc(95%-10px)] mx-auto bg-labs-primary hover:bg-labs-secondary duration-300 text-white rounded-full px-6 py-4 text-sm font-medium mt-auto mb-[25%]">
                        {titleButton}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ paddingTop: "59px" }}></div>
      </>
    )
  },
}
