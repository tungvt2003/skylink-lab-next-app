"use client"

import createMenuStructure, { MenuItem } from "@/components/create-menu-structure"
import SvgVectorDropDown from "@/components/svg-component/svg-vector-dropdown"
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
import ModalSignupForConsultation from "./modal-sign-up-for-consultation"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"

interface Menu {
  attributes: {
    items: MenuItem[]
  }
}
type HeaderProps = {
  locale: string
}

const HeaderLandingPage: React.FC<HeaderProps> = ({ locale }) => {
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
      const response = await getMainMenu(APPCONFIG.HEADER_LANDING_PAGE_ID[locale as "vi" | "en"], locale)
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
        <div className="container mx-auto flex justify-between items-center sm:pt-3 sm:px-3 sm:pb-0 py-3 px-2 h-28 gap-6">
          <div>
            <Link href={locale === "vi" ? "/landing-page" : "/en/landing-page"}>
              <Image alt="Logo" src={Images.logoSkyline} className="w-[252px] h-[53px]" />
            </Link>
          </div>
          <div>
            <div className="flex-grow">
              <div className="flex items-center">
                <div className="flex items-center justify-center font-semibold text-sm text-green-secondary py-1 w-full gap-10">
                  <Link
                    href={`${locale === "vi" ? "/he-thong-cac-co-so" : "/en/he-thong-cac-co-so-en"}`}
                    className="flex items-center gap-1 p-2"
                  >
                    <Image alt="locale" src={Images.vectorLocale} />
                    <div className="uppercase hover:text-green">{t("Hệ thống giáo dục sky-line")}</div>
                  </Link>
                  <Link
                    href={`${locale === "vi" ? "/thanh-tuu-sky-line" : "/en/thanh-tuu-sky-line-en"}`}
                    className="flex items-center gap-1 p-2"
                  >
                    <Image alt="locale" src={Images.vectorAchievements} />
                    <div className="uppercase hover:text-green">{t("Thành tựu sky-line")}</div>
                  </Link>
                </div>
              </div>
            </div>

            <nav className="relative">
              <ul className="flex gap-3 justify-between text-sm 2xl:text-sm xl:text-xs lg:text-[10px] md:text-[8px] font-semibold pt-1.75 border-t border-[#0000001A]">
                {structuredMenu?.map(item => (
                  <li
                    key={item.id}
                    className={`relative uppercase group after:block after:border-b-2 after:pb-[13px] after:border-green-secondary after:scale-x-0 after:transition-transform after:duration-500 after:origin-center hover:after:scale-x-100 ${
                      activeItemId === item.id
                        ? "border-b-2 border-green-secondary text-green-secondary after:border-none"
                        : ""
                    }`}
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
                      <ul className="hidden absolute font-normal group-hover:inline-block top-[50px] left-0 bg-white z-50 duration-300 outline-none border-none text-nowrap pointer-events-none group-hover:pointer-events-auto">
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
          <div className="flex flex-col pb-2.5">
            <div className="flex items-center justify-end gap-3 p-2.5">
              <div className="flex items-center gap-1 border-r px-2 border-[#0000001A]">
                <Select
                  value={locale}
                  onChange={value => {
                    window.location.href = `/${value}/landing-page`
                  }}
                  suffixIcon={false}
                  dropdownStyle={{ width: "fit-content", padding: "0px" }}
                  variant="borderless"
                  className="custom-select-language"
                  labelRender={props => {
                    if (props.value === "en") return labelLanguageDesktop("EN", Images.logoEn)

                    if (props.value === "vi") return labelLanguageDesktop("VI", Images.logoVN)
                  }}
                >
                  <Select.Option value="en">{labelLanguageDesktop("English", Images.logoEn)}</Select.Option>
                  <Select.Option value="vi">{labelLanguageDesktop("Tiếng Việt", Images.logoVN)}</Select.Option>
                </Select>
              </div>
              <Button className=" outline-none border-none shadow-none p-0" onClick={() => setModalSearch(true)}>
                <Image src={Images.iconSearch} alt="logo-search" height={24} width={24} />
              </Button>
              <Modal
                width={550}
                centered
                open={modalSearch}
                footer={null}
                className="modal-search bg-transparent rounded-full"
                onCancel={() => setModalSearch(false)}
              >
                <form
                  action={locale === "vi" ? "/landing-page/search" : "/en/landing-page/search"}
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
            <Button
              onClick={() => setModalSignIn(true)}
              className="flex items-center justify-center text-sm leading-5.5 font-medium text-white bg-green rounded-lg hover:!bg-green-secondary hover:!text-white hover:!border-green-secondary h-full px-4 py-2 border-none"
            >
              {t("ĐĂNG KÝ TRỰC TUYẾN")}
            </Button>
            <ModalSignupForConsultation open={modalSignIn} onClose={() => setModalSignIn(false)} />
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
            <Link href={locale === "vi" ? "/landing-page" : "/en/landing-page"}>
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
                {/* <Select.Option value="en">
                  <div className="flex items-center justify-center gap-1">
                    <Image src={Images.logoEn} alt="logo-en" height={12} width={17} />
                    <span className="text-sm leading-5 font-medium">EN</span>
                  </div>
                </Select.Option> */}
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
                  className="w-full bg-white top-[128px] z-[500] border-t border-[#0000001A] p-0 transition-all"
                >
                  <SheetTitle />
                  <SheetHeader>
                    <div className="flex flex-col justify-start font-semibold text-sm text-green-secondary w-full border-b border-[#EEEEEE]">
                      <Link
                        href={`${locale === "vi" ? "/he-thong-cac-co-so" : "/en/he-thong-cac-co-so-en"}`}
                        className="flex items-center gap-2 pl-4 py-4"
                        onClick={() => setIsOpenMenu(false)}
                      >
                        <Image alt="locale" className="w-[17px] h-5" src={Images.vectorLocale} />
                        <div className="uppercase">{t("Hệ thống giáo dục sky-line")}</div>
                      </Link>
                      <Link
                        href={`${locale === "vi" ? "/thanh-tuu-sky-line" : "/en/thanh-tuu-sky-line-en"}`}
                        className="flex items-center gap-2 pl-4 py-4"
                        onClick={() => setIsOpenMenu(false)}
                      >
                        <Image alt="locale" className="w-[17px] h-5" src={Images.vectorAchievements} />
                        <div className="uppercase">{t("Thành tựu sky-line")}</div>
                      </Link>
                    </div>
                  </SheetHeader>

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
                  <SheetFooter className="absolute top-[75%] w-full p-5">
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

export default HeaderLandingPage
