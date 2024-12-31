"use client"

import {
  CaretRightOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons/lib/icons"
import { ComponentConfig } from "@measured/puck"
import { useJsApiLoader } from "@react-google-maps/api"
import { Spin } from "antd"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import {
  configs,
  DefaultImage,
  iconDropdown,
  iconFacebook,
  iconMail,
  iconSearchFooter,
  iconTiktok,
  iconWeb,
  iconYoutube,
  iconZalo,
} from "../../../../external-components"
import httpClient from "../../../../http-client"
import { getSettings } from "../../../../navigation-services"
import { CommonStylesProps } from "../../../lib/commonCSSProps"
import { DataSettingItem } from "../../../types"

const Icons = {
  CaretRightOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
  MailOutlined,
  PhoneOutlined,
}

export interface FooterProps {
  img?: string
  title?: string
  baseAddress?: string
  phoneNumber?: string
  location?: string
}

interface BaseSystem {
  id: string
  attributes: {
    name: string
    email: string
    workingTime: string
    address: string
    hotline: string
    latitude: string
    longitude: string
    linkMap: string
  }
}

export interface SKEFooterProps extends CommonStylesProps {
  items: FooterProps[]
  img?: string
  title?: string
}

export const RenderConfig: ComponentConfig<SKEFooterProps> = {
  render: ({ items, img, title }) => {
    const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>(
      items.reduce<{ [key: number]: boolean }>((acc, _, index) => ({ ...acc, [index]: true }), {}),
    )
    const [settingsData, setSettingsData] = useState<DataSettingItem[]>([])
    const [formData, setFormData] = useState({
      email: "",
      emailTo: "",
      subject: "[Thông báo] Đặt nhận thông tin và hoạt động mới",
    })
    const [baseSystems, setBaseSystems] = useState<BaseSystem[]>([])
    const [selectedStore, setSelectedStore] = useState<BaseSystem | null>(null)
    const [isPopupVisible, setIsPopupVisible] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState("")
    const t = useTranslations()

    const toggleItem = (index: number) => {
      setOpenItems(prevState => ({
        ...prevState,
        [index]: !prevState[index],
      }))
    }

    const fetchSetting = async () => {
      try {
        const response = await getSettings()
        const emailTo = response.find((item: DataSettingItem) => item.attributes.key === "contactEmail")?.attributes
          .value
        setFormData(prev => ({ ...prev, emailTo: emailTo }))
        setSettingsData(response)
      } catch (error) {
        console.error("Error fetching setting data:", error)
      }
    }

    const { isLoaded } = useJsApiLoader({
      id: "google-map-script",
      googleMapsApiKey: "AIzaSyDGodfPRJzvat54G3EAHM87ymkPGL2HsvE",
    })

    const fetchData = async () => {
      try {
        const response = await httpClient.get<{ data: any }>("base-systems?populate=*&sort=id:ASC")
        const baseSystems = response.data
        setBaseSystems(response?.data)
        return baseSystems
      } catch (error) {
        console.error("Error fetching base systems:", error)
        throw error
      }
    }

    useEffect(() => {
      fetchSetting()
      fetchData()
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      setIsLoading(true)
      try {
        const response = await fetch("/api/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            emailTo: formData.emailTo,
            subject: formData.subject,
            content: `Email: ${formData.email}`,
          }),
        })

        if (!response.ok) {
          throw new Error("Failed to submit data")
        }

        setIsPopupVisible(true)
        setFormData({
          email: "",
          emailTo: "",
          subject: "[Thông báo] Đặt nhận thông tin và hoạt động mới",
        })
        setMessage("Đăng ký nhận thông tin và hoạt động mới thành công!")
      } catch (error) {
        console.error("Error:", error)
        setMessage("Đã xảy ra lỗi khi đăng ký!")
      } finally {
        setIsLoading(false)
      }
    }

    const closePopup = () => {
      setIsPopupVisible(false)
    }

    return (
      <>
        <div
          style={{
            background: "linear-gradient(90deg, #5B2893 0%, #00A19A 100%)",
          }}
        >
          <div className="container flex py-6 px-4 flex-col gap-4 sm:gap-0 sm:flex-row sm:py-12 sm:px-[120px] justify-between items-center">
            <div className="flex flex-col gap-2">
              <h2 className="text-[22px] leading-7 sm:text-[32px] sm:leading-12 font-extrabold text-white font-open_sans">
                {t("Nhận bản tin SKY-LINE")}
              </h2>
              <p className="text-[14px] sm:leading-22px leading-[20px] sm:text-[16px] sm:leading-[22px] font-medium text-white">
                {t("Nhận thông tin và hoạt động mới nhất từ chúng tôi")}
              </p>
            </div>
            <div className="w-full sm:w-[460px] relative cursor-pointer">
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Nhập email của bạn ..."
                  className="outline-none placeholder:opacity-20 placeholder:text-[14px] placeholder:leading-[20px] sm:placeholder:text-lg sm:placeholder:leading-6 w-full h-[48px] sm:h-[60px] py-[11px] sm:py-[18px] pl-3 sm:pl-6 pr-2 sm:pr-[10px] rounded-[100px] text-[14px] leading-5 sm:text-lg sm:leading-6"
                />
                <button type="submit" className="absolute top-2/4 translate-y-[-50%] right-[5px] sm:right-[10px]">
                  <img className=" w-8 h-8 sm:w-10 sm:h-10" src={iconSearchFooter} alt="input" />
                </button>
              </form>

              {isLoading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                  <Spin />
                </div>
              )}

              {isPopupVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                  <div className="bg-white p-8 rounded shadow-md relative">
                    <button
                      onClick={closePopup}
                      className="absolute top-0 text-[30px] right-2 text-gray-600 hover:text-gray-800"
                      aria-label="Close"
                    >
                      &times;
                    </button>
                    <p className="text-lg font-semibold">{message}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className=" bg-[#081632]">
          {" "}
          <div className="container flex sm:py-8 pb-8 pt-6 px-4 sm:px-[120px]">
            <div className="container text-white">
              {items && items.length > 0 && (
                <a href="#">
                  <img
                    src={img ? `${configs.API_URL}${img}` : DefaultImage}
                    className="sm:w-[12.688rem] sm:h-[4.563rem] w-[165px] h-[59px] object-contain cursor-pointer"
                  />
                </a>
              )}
              <h2 className="sm:pt-5 pt-6 text-base leading-[22px] font-bold mb-4 sm:mb-6">
                HỆ THỐNG GIÁO DỤC SKY-LINE
              </h2>
              <div className="grid sm:grid-cols-3 gap-x-[4.438rem]  gap-y-6">
                {baseSystems?.map((base, index) => (
                  <div key={base.id} className={`flex flex-col border-b sm:border-r-0 cursor-pointer`}>
                    <div
                      className="flex items-center font-semibold sm:text-base text-sm leading-5 sm:leading-[22px] text-justify cursor-pointer"
                      onClick={() => toggleItem(index)}
                    >
                      <span className="mr-2 py-[7px] pr-[9px] pl-[10px]">
                        <img src={iconDropdown} alt="logo" style={{ height: "10px", width: "5px" }} />
                      </span>
                      {base.attributes.name}
                    </div>
                    {openItems[index] && (
                      <div className="flex flex-col sm:px-8 pl-6 pt-2 pr-12 pb-6 gap-2">
                        <div className="flex ml-2 gap-2 items-center">
                          <EnvironmentOutlined className="sm:block w-4 h-4" />
                          <p className="font-normal sm:text-base sm:leading-[24px] text-[13px] leading-[21px] text-justify ">
                            <a
                              href={base.attributes.linkMap}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="break-words whitespace-pre-wrap"
                            >
                              {base.attributes.address}
                            </a>
                          </p>
                        </div>
                        <div className="ml-2 gap-2 flex">
                          <PhoneOutlined className="h-4 w-4" />
                          <p className="font-normal sm:text-base sm:leading-[28px] text-[13px] leading-[21px]">
                            {base.attributes.hotline}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex flex-col pt-6 pr-0 sm:pr-[905px] sm:pt-8 ">
                <div className="sm:pb-5 pb-3">
                  <p className="text-base font-bold leading-[22px]">LIÊN HỆ</p>
                </div>
                <div className="flex flex-col gap-2 sm:pb-5 text-white">
                  <div className="flex flex-col gap-2 sm:pb-5 pb-6 text-white">
                    <div className="sm:text-base sm:leading-[22px] sm:font-normal flex gap-2 items-center text-sm font-semibold">
                      <div className="py-1 pr-[1.5px] pl-[2.4px]">
                        <img src={iconMail} alt="logo" style={{ height: "16px", width: "20.1" }} />{" "}
                      </div>
                      <a
                        href={`mailto:${
                          settingsData.find(item => item.attributes.key === "contactEmail")?.attributes.value
                        }`}
                      >
                        {settingsData.find(item => item.attributes.key === "contactEmail")?.attributes.value}
                      </a>
                    </div>
                    <div className="sm:text-base sm:leading-[22px] sm:font-normal flex gap-2 items-center text-sm font-semibold">
                      <div className="py-[2.12px] px-[2.05px]">
                        <img src={iconWeb} alt="logo" style={{ height: "19.76px", width: "19.9px" }} />{" "}
                      </div>
                      <a href="https://skylineschool.edu.vn/">skylineschool.edu.vn</a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={
                      settingsData &&
                      settingsData.find(item => item.attributes.key === "facebookLink")?.attributes.value
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={iconFacebook} alt="logo" style={{ height: "45px", width: "45px", borderRadius: "50%" }} />
                  </a>
                  <a
                    href={
                      settingsData && settingsData.find(item => item.attributes.key === "youtubeLink")?.attributes.value
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={iconYoutube} alt="logo" style={{ height: "45px", width: "45px", borderRadius: "50%" }} />
                  </a>
                  <a
                    href={
                      settingsData && settingsData.find(item => item.attributes.key === "tiktokLink")?.attributes.value
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={iconTiktok} alt="logo" style={{ height: "45px", width: "45px", borderRadius: "50%" }} />
                  </a>
                  <a
                    href={
                      settingsData && settingsData.find(item => item.attributes.key === "zaloLink")?.attributes.value
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={iconZalo} alt="logo" style={{ height: "45px", width: "45px", borderRadius: "50%" }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  },
}
