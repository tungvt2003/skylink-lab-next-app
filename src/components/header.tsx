"use client"

import SvgVectorDropDown from "@/components/svg-component/svg-vector-dropdown"

import createMenuStructure, { MenuItem } from "@/components/create-menu-structure"
import { Images } from "@/constants/images"
import { getMainMenu, getSettings } from "@/lib/navigation-services"
import "@/styles/globals.css"
import { Button, Input, Modal, Select } from "antd"
import { useTranslations } from "next-intl"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { APPCONFIG } from "../configs"
import { DataSettingItem } from "../lib/config/types"
import { iconFaceBookNew, iconTiktokNew, iconYoutubeNew, iconZaloNew } from "../lib/external-components"
import ModalRegister from "./modal-register"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"

interface Menu {
  attributes: {
    items: MenuItem[]
  }
}

type HeaderProps = {
  locale: string
}

const Header: React.FC<HeaderProps> = ({ locale }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [menuData, setMenuData] = useState<Menu>()
  const [modalSignIn, setModalSignIn] = useState(false)
  const [modalSignInMobile, setModalSignInMobile] = useState(false)
  const [seletcedMenu, setSelectedMenu] = useState<number | undefined>()
  const [modalSearch, setModalSearch] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [activeItemId, setActiveItemId] = useState<number | null>(null)
  const [settingsData, setSettingsData] = useState<DataSettingItem[]>([])
  const pathname = usePathname()
  const t = useTranslations()

  const getMenuData = async () => {
    try {
      const response = await getMainMenu(APPCONFIG.HEADER_PAGE_ID[locale as "vi" | "en"], locale)
      setMenuData(response && response)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }
  const fetchSetting = async () => {
    try {
      const response = await getSettings()

      setSettingsData(response)
    } catch (error) {
      console.error("Error fetching setting data:", error)
    }
  }

  const structuredMenu = createMenuStructure(menuData && menuData.attributes.items)

  useEffect(() => {
    setIsLoading(false)
    getMenuData()
    fetchSetting()
  }, [])

  const getActiveItemId = () => {
    let foundActiveId: number | null = null

    structuredMenu?.forEach(item => {
      if (!item.attribute && pathname === item.url) {
        foundActiveId = item.id
      } else if (item.attribute?.some(subItem => pathname.includes(subItem.url))) {
        foundActiveId = item.id
      } else if (pathname === `/${locale}${item.url}`) {
        foundActiveId = item.id
      }
    })

    setActiveItemId(foundActiveId)
  }

  useEffect(() => {
    getActiveItemId()
  }, [pathname, structuredMenu])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader">
          <Image src={Images.logoHeader} alt="Logo" />
        </div>
      </div>
    )
  }

  const labelLanguageDesktop = (language: string, urlLogo: StaticImageData, checkShow?: boolean) => {
    return (
      <div className="flex items-center justify-center gap-1">
        <Image src={urlLogo} alt="logo-vn" height={12} width={17} />
        <span className={`text-base leading-5.5 font-medium ${checkShow ? "text-white" : ""}`}>{language}</span>
      </div>
    )
  }

  return (
    <>
      <div className="bg-white border-b border-[#0000001A] max-sm:hidden">
        <div className="flex flex-col gap-3">
          <div className="bg-green">
            <div className="flex container items-center justify-end px-6 py-2.5 gap-6">
              <div className="flex items-center">
                <div className="flex items-center gap-4">
                  <a
                    href={
                      settingsData && settingsData.find(item => item.attributes.key === "zaloLink")?.attributes.value
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={iconZaloNew} alt="logo" style={{ height: "24px", width: "24px", borderRadius: "50%" }} />
                  </a>
                  <a
                    href={
                      settingsData &&
                      settingsData.find(item => item.attributes.key === "facebookLink")?.attributes.value
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={iconFaceBookNew}
                      alt="logo"
                      style={{ height: "24px", width: "24px", borderRadius: "50%" }}
                    />
                  </a>
                  <a
                    href={
                      settingsData && settingsData.find(item => item.attributes.key === "youtubeLink")?.attributes.value
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={iconYoutubeNew}
                      alt="logo"
                      style={{ height: "24px", width: "24px", borderRadius: "50%" }}
                    />
                  </a>
                  <a
                    href={
                      settingsData && settingsData.find(item => item.attributes.key === "tiktokLink")?.attributes.value
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={iconTiktokNew}
                      alt="logo"
                      style={{ height: "24px", width: "24px", borderRadius: "50%" }}
                    />
                  </a>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center justify-end gap-3">
                  <div className="flex items-center gap-1 border-r px-2 border-white h-6">
                    <Select
                      value={locale}
                      onChange={value => {
                        window.location.href = `/${value}`
                      }}
                      suffixIcon={false}
                      dropdownStyle={{ width: "fit-content", padding: "0px", top: "44px" }}
                      variant="borderless"
                      className="custom-select-language"
                      labelRender={props => {
                        if (props.value === "en") return labelLanguageDesktop("EN", Images.logoEn, true)

                        if (props.value === "vi") return labelLanguageDesktop("VI", Images.logoVN, true)
                      }}
                    >
                      <Select.Option value="en">{labelLanguageDesktop("English", Images.logoEn)}</Select.Option>
                      <Select.Option value="vi">{labelLanguageDesktop("Tiếng Việt", Images.logoVN)}</Select.Option>
                    </Select>
                  </div>
                  <button className="px-2.5" onClick={() => setModalSearch(true)}>
                    <Image className="!text-white" src={Images.iconSearchV2} alt="logo-search" height={24} width={24} />
                  </button>
                  <Modal
                    width={550}
                    centered
                    open={modalSearch}
                    footer={null}
                    className="modal-search bg-transparent rounded-full"
                    onCancel={() => setModalSearch(false)}
                  >
                    <form
                      action={locale === "vi" ? "/search" : "/en/search"}
                      method="GET"
                      onSubmit={() => setModalSearch(false)}
                    >
                      <Input
                        type="text"
                        name="q"
                        placeholder={t("Tìm kiếm")}
                        className="w-full text-base p-4 rounded-full outline-none bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white placeholder-white shadow-lg focus-within:bg-transparent focus-within:border-none hover:border-none border-none"
                        value={searchValue}
                        onChange={e => setSearchValue(e.target.value)}
                        required
                      />
                    </form>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto flex justify-between items-end sm:px-6 px-2 pb-6">
            <div className="">
              <Link href={locale === "vi" ? "/" : "/en"}>
                <Image alt="Logo" src={Images.logoSkyline} className="w-[252px] h-[53px]" />
              </Link>
            </div>
            <div>
              <nav className="relative">
                <ul className="flex gap-3 justify-between text-sm 2xl:text-sm xl:text-xs lg:text-[10px] md:text-[8px] font-semibold">
                  {structuredMenu?.map(item => (
                    <li
                      key={item.id}
                      className={`relative uppercase group after:block after:absolute after:bottom-[-24px] after:left-0 after:right-0 after:h-[3px] after:bg-green-secondary after:scale-x-0 after:transition-transform after:duration-500 after:origin-center hover:after:scale-x-100 ${
                        activeItemId === item.id
                          ? " text-green-secondary after:scale-x-100 after:bg-green-secondary"
                          : ""
                      } before:absolute before:bottom-[-24px] before:left-0 before:right-0 before:h-[24px] before:bg-transparent`}
                    >
                      <Link
                        href={item.attribute && item.attribute?.length > 0 ? `` : `/${locale}${item.url}`}
                        className="hover:text-green-secondary flex items-center gap-2 group-hover:text-green-secondary uppercase p-2"
                      >
                        {item.title}
                        {item.attribute && (
                          <SvgVectorDropDown className="h-1.5 w-2 group-hover:text-green-secondary transition duration-300" />
                        )}
                      </Link>
                      {item.attribute && (
                        <ul className="hidden absolute font-normal group-hover:inline-block top-[60px] left-0 bg-white z-50 duration-300 outline-none border-none text-nowrap pointer-events-none group-hover:pointer-events-auto group-hover:shadow-lg before:absolute before:top-[-24px] before:left-0 before:right-0 before:h-[24px] before:bg-transparent">
                          {item.attribute.map((subItem, index) => (
                            <li key={index}>
                              <Link
                                href={`/${locale}${subItem.url}`}
                                className="block px-4 py-4 text-black hover:bg-gray-100 hover:text-green-secondary"
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="block sm:hidden">
        <div className="flex flex-col justify-start font-semibold w-full px-8 py-3 bg-green">
          <div className="flex items-center gap-3">
            <a
              href={settingsData && settingsData.find(item => item.attributes.key === "zaloLink")?.attributes.value}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={iconZaloNew} alt="logo" style={{ height: "24px", width: "24px", borderRadius: "50%" }} />
            </a>
            <a
              href={settingsData && settingsData.find(item => item.attributes.key === "facebookLink")?.attributes.value}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={iconFaceBookNew} alt="logo" style={{ height: "24px", width: "24px", borderRadius: "50%" }} />
            </a>
            <a
              href={settingsData && settingsData.find(item => item.attributes.key === "youtubeLink")?.attributes.value}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={iconYoutubeNew} alt="logo" style={{ height: "24px", width: "24px", borderRadius: "50%" }} />
            </a>
            <a
              href={settingsData && settingsData.find(item => item.attributes.key === "tiktokLink")?.attributes.value}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={iconTiktokNew} alt="logo" style={{ height: "24px", width: "24px", borderRadius: "50%" }} />
            </a>
          </div>
        </div>
        <div className="items-center px-4 pt-3 pb-1">
          <div className="flex justify-between w-full">
            <Link href={locale === "vi" ? "/" : "/en"}>
              <Image alt="Logo" className="w-[7.8125rem] h-14 object-fill" src={Images.logoHeaderMobile} />
            </Link>
            <div className="flex justify-end items-center gap-4 justify-items-center">
              <Select
                value={locale}
                onChange={value => {
                  window.location.href = `/${value}`
                }}
                suffixIcon={false}
                dropdownStyle={{ width: "fit-content", padding: "0px" }}
                variant="borderless"
                className="custom-select-language"
              >
                <Select.Option value="en">
                  <div className="flex items-center justify-center gap-1">
                    <Image src={Images.logoEn} alt="logo-en" height={12} width={17} />
                    <span className="text-sm leading-5 font-medium">EN</span>
                  </div>
                </Select.Option>
                <Select.Option value="vi">
                  <div className="flex items-center justify-center gap-1">
                    <Image src={Images.logoVN} alt="logo-vn" height={12} width={17} />
                    <span className="text-sm leading-5 font-medium">VI</span>
                  </div>
                </Select.Option>
              </Select>
              <Button className="outline-none border-none shadow-none p-0" onClick={() => setModalSearch(true)}>
                <Image src={Images.iconSearch} alt="logo-search" className="h-5 w-5" height={20} width={20} />
              </Button>
              <Sheet
                open={isOpenMenu}
                onOpenChange={open => {
                  setIsOpenMenu(open)
                  setSelectedMenu(undefined)
                }}
              >
                <SheetTrigger>
                  {isOpenMenu ? (
                    <Image src={Images.iconClose} alt="icon-close" className="h-6 w-6" height={24} width={24} />
                  ) : (
                    <Image src={Images.iconMenu} alt="icon-menu" className="h-6 w-6" height={24} width={24} />
                  )}
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="w-full bg-white top-[120px] z-[500] border-t border-[#0000001A] p-0 transition-all"
                >
                  <SheetTitle />
                  <SheetHeader></SheetHeader>

                  <ul className="flex flex-col justify-between text-sm leading-5 font-normal overflow-y-auto px-4">
                    {structuredMenu &&
                      structuredMenu.map((item, index) => (
                        <li
                          key={index}
                          className={`w-full duration-300 ${
                            seletcedMenu != undefined &&
                            seletcedMenu !== index &&
                            structuredMenu[seletcedMenu]?.attribute
                              ? "hidden"
                              : "list-item"
                          }`}
                          onClick={() => {
                            setSelectedMenu(index === seletcedMenu ? undefined : index)
                            if (!item.attribute) {
                              setIsOpenMenu(false)
                            }
                          }}
                        >
                          <Link
                            href={item.attribute && item.attribute?.length > 0 ? `` : `/${locale}${item.url}`}
                            className={`flex items-center gap-2 uppercase p-4 border-b border-[#EEEEEE] flex-row ${
                              seletcedMenu == index ? "flex-row-reverse justify-end" : "flex-row justify-between"
                            }`}
                          >
                            <p>{item.title}</p>

                            {item.attribute && (
                              <SvgVectorDropDown
                                className={`h-5 w-5 px-1 text-green ${
                                  seletcedMenu != undefined && structuredMenu[seletcedMenu]?.attribute
                                    ? "rotate-90"
                                    : "-rotate-90"
                                }`}
                              />
                            )}
                          </Link>
                        </li>
                      ))}
                    {seletcedMenu !== undefined && structuredMenu[seletcedMenu]?.attribute && (
                      <ul className={`font-normal h-full bg-white transition-all text-sm uppercase flex flex-col`}>
                        {structuredMenu[seletcedMenu].attribute.map((subItem, index) => (
                          <li
                            key={index}
                            onClick={() => {
                              if (subItem.url) {
                                setIsOpenMenu(false)
                              }
                            }}
                          >
                            <Link
                              href={`/${locale}${subItem.url}`}
                              className={`block p-4 border-b border-[#EEEEEE] pl-[2.625rem]`}
                            >
                              <p>{subItem.title}</p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </ul>
                  <SheetFooter className="absolute top-[65%] w-full p-5">
                    <div className="">
                      <div
                        onClick={() => {
                          setModalSignInMobile(true)
                          setIsOpenMenu(false)
                        }}
                        className="flex justify-center text-sm leading-5.5 font-semibold text-white bg-green rounded-lg py-3 w-full h-full hover:bg-green-secondary hover:outline-none"
                      >
                        {t("ĐĂNG KÝ TRỰC TUYẾN")}
                      </div>
                    </div>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
              <ModalRegister open={modalSignInMobile} onClose={() => setModalSignInMobile(false)} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
