"use client"

import BreadCrumb from "@/components/breadcrumb"
import { Images } from "@/constants/images"
import EnvironmentOutlined from "@ant-design/icons/lib/icons/EnvironmentOutlined"
import PhoneOutlined from "@ant-design/icons/lib/icons/PhoneOutlined"
import { GoogleMap, InfoWindow, MarkerF, useJsApiLoader } from "@react-google-maps/api"
import { Form, Input, Spin } from "antd"
import TextArea from "antd/es/input/TextArea"
import Image from "next/image"
import { useEffect, useState } from "react"
import { DataSettingItem } from "../../lib/config/types"
import { getSettings } from "../../lib/navigation-services"
import { Spinner } from "../ui/loading"

const locationsData = [
  {
    id: 1,
    name: "SKY-LINE Riverside (cơ sở 1)",
    address: "Lô A2.4 Đường Trần Đăng Ninh, Q. Hải Châu, TP. Đà Nẵng.",
    email: "info.contact@skylineschool.edu.vn",
    hotline: "(+84) 236. 378.7777.",
    work_time: "Thứ 2 - CN, 8h - 21h",
    lat: 16.0304265,
    lng: 108.2299766,
  },
  {
    id: 2,
    name: "SKY-LINE Central (cơ sở 2)",
    address: "Số 48 Nguyễn Du, Q. Hải Châu, TP. Đà Nẵng.",
    email: "info.contact@skylineschool.edu.vn",
    hotline: "(+84) 236. 356.8777.",
    work_time: "Thứ 2 - CN, 8h - 21h",
    lat: 16.0788081,
    lng: 108.2197478,
  },
  {
    id: 3,
    name: "SKY-LINE Global (cơ sở 3)",
    address: "Lô A2 Đường Trần Đăng Ninh, Q. Hải Châu, TP. Đà Nẵng.",
    email: "info.contact@skylineschool.edu.vn",
    hotline: "(+84) 236. 378.7779.",
    work_time: "Thứ 2 - CN, 8h - 21h",
    lat: 16.0320292,
    lng: 108.2295401,
  },
  {
    id: 4,
    name: "SKY-LINE Hill (cơ sở 4)",
    address: "Khu đô thị Hà My Đông A, Điện Bàn, Quảng Nam.",
    email: "info.contact@skylineschool.edu.vn",
    hotline: "(+84) 235.375.1777.",
    work_time: "Thứ 2 - CN, 8h - 21h",
    lat: 15.9169481,
    lng: 108.3239132,
  },
  {
    id: 5,
    name: "SKY-LINE Beach (cơ sở 5)",
    address: "Số 199 Trần Anh Tông, Q. Liên Chiểu, TP. Đà Nẵng.",
    email: "info.contact@skylineschool.edu.vn",
    hotline: "(+84) 236. 366.9777.",
    work_time: "Thứ 2 - CN, 8h - 21h",
    lat: 16.0757661,
    lng: 108.1660171,
  },
  {
    id: 6,
    name: "Trung tâm Sống Thành Công Sky-Line",
    address: "Số 48 Nguyễn Du, Q. Hải Châu, TP. Đà Nẵng.",
    email: "info.contact@skylineschool.edu.vn",
    hotline: "(+84) 236.382.6677.",
    work_time: "Thứ 2 - CN, 8h - 21h",
    lat: 15.8852051,
    lng: 108.3499505,
  },
]
interface Store {
  id: number
  name: string
  address: string
  email: string
  hotline: string
  work_time: string
  lat: number
  lng: number
}

const ContactPage = () => {
  const [selectedStore, setSelectedStore] = useState<Store>(locationsData[0])

  const configBreadCrum = [
    {
      title: "Liên hệ",
      url: "/lien-he-2",
    },
  ]
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDGodfPRJzvat54G3EAHM87ymkPGL2HsvE",
  })

  const containerStyle = {
    width: "100%",
    height: "100%",
  }

  const [form] = Form.useForm()
  const [isPopupVisible, setIsPopupVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")

  const [formData, setFormData] = useState({
    emailTo: "",
    email: "",
    fullName: "",
    phone: "",
    message: "",
  })

  const fetchSetting = async () => {
    try {
      const response = await getSettings()
      const emailTo = response?.find((item: DataSettingItem) => item.attributes.key === "contactEmail")?.attributes.value
      setFormData(prev => ({ ...prev, emailTo: emailTo }))
    } catch (error) {
      console.error("Error fetching setting data:", error)
    }
  }

  useEffect(() => {
    fetchSetting()
  }, [])

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
          subject: "[Thông báo] Liên hệ với chúng tôi",
          emailTo: formData.emailTo,
          content: `Họ và tên: ${form.getFieldValue("fullName")}\nSố điện thoại: ${form.getFieldValue(
            "phone",
          )}\nEmail: ${form.getFieldValue("email")}\nNội dung: ${form.getFieldValue("message")}`,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit data")
      }

      setIsPopupVisible(true)

      setFormData({
        emailTo: "",
        email: "",
        fullName: "",
        phone: "",
        message: "",
      })
      form.resetFields()
      setMessage("Gửi email liên hệ thành công!")
    } catch (error) {
      console.error("Error:", error)
      setMessage("Đã xảy ra lỗi khi gửi email!")
    } finally {
      setIsLoading(false)
    }
  }

  const closePopup = () => {
    setIsPopupVisible(false)
    form.resetFields()
  }

  return (
    <div>
      <div className="container mb-12 sm:mb-0">
        <BreadCrumb items={configBreadCrum} />

        <div className="flex flex-col sm:flex-row gap-0 sm:gap-3 w-full sm:px-[7.5rem] px-4 sm:pt-16 pt-1 sm:pb-25">
          <div className="sm:w-1/2 w-full">
            <div className="flex flex-col">
              <div className="h-12 mt-12 sm:mt-0 text-[1.125rem] text-base leading-[22px] text-[#F5F5F5] font-semibold sm:leading-6 text-center py-3 bg-green w-full">
                HỆ THỐNG GIÁO DỤC SKY-LINE
              </div>
              <div className="sm:w-1/2 w-full sm:min-h-[33rem] block sm:hidden h-[280px] sm:h-auto">
                {isLoaded ? (
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={{ lat: selectedStore.lat, lng: selectedStore.lng }}
                    zoom={16}
                    options={{ disableDefaultUI: true }}
                  >
                    {selectedStore && (
                      <>
                        <MarkerF
                          position={{ lat: selectedStore.lat, lng: selectedStore.lng }}
                          onClick={() => setSelectedStore(selectedStore)}
                        />
                        <InfoWindow position={{ lat: selectedStore.lat, lng: selectedStore.lng }}>
                          <div className="max-w-[17.25rem] bg-white p-1 top-[-20px]">
                            <div className="flex flex-col gap-2 mb-2 pb-2 border-b border-black/10">
                              <div className="flex items-start gap-1">
                                <Image
                                  src={Images.mapLocationIcon}
                                  alt="location-icon"
                                  width={9}
                                  height={12}
                                  className="w-[0.5625rem] h-[0.75rem]"
                                />
                                <div className="font-normal text-3.25 leading-[0.975rem] line-clamp-2">
                                  {selectedStore.address}
                                </div>
                              </div>
                              <div className="flex justify-between">
                                <div className="flex items-center gap-1">
                                  <Image
                                    src={Images.mapMailIcon}
                                    alt="mail-icon"
                                    width={10}
                                    height={7}
                                    className="w-[0.625rem] h-[0.4375rem]"
                                  />
                                  <div className="font-normal text-3.25 leading-[0.975rem]">{selectedStore.email}</div>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Image
                                    src={Images.mapPhoneIcon}
                                    alt="phone-icon"
                                    width={10}
                                    height={11}
                                    className="w-[0.625rem] h-[0.6875rem]"
                                  />
                                  <div className="font-normal text-3.25 leading-[0.975rem]">
                                    {selectedStore.hotline}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="font-normal text-3.25 leading-[0.975rem]">
                              Giờ làm việc: {selectedStore.work_time}
                            </div>
                          </div>
                        </InfoWindow>
                      </>
                    )}
                  </GoogleMap>
                ) : (
                  <Spinner />
                )}
              </div>

              <div className="h-auto sm:h-[480px] overflow-hidden sm:overflow-y-auto border-b border-r">
                {locationsData.map((location, index) => (
                  <div
                    key={location.id}
                    className={`flex flex-col gap-1 sm:gap-2 sm:pl-3 p-3 sm:py-4 border-l-[1px] border-b cursor-pointer
                    ${selectedStore?.id === location.id ? "bg-gray-200" : "hover:bg-gray-100"}
                    ${index === locationsData.length - 1 ? "border-b-0" : ""}`}
                    onClick={() => {
                      setSelectedStore(location)
                    }}
                  >
                    <strong className="font-semibold sm:text-sm text-[13px] leading-[21px] sm:leading-5">
                      {location.name}
                    </strong>
                    <div className="flex ml-2 gap-2">
                      <EnvironmentOutlined />
                      <p className="font-normal text-sm leading-5">{location.address}</p>
                    </div>
                    <div className="flex ml-2 gap-2">
                      <PhoneOutlined />
                      <p className="font-normal text-sm leading-5">{location.hotline}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 w-full min-h-[33rem] sm:block hidden h-[20rem] sm:h-auto">
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={{ lat: selectedStore.lat, lng: selectedStore.lng }}
                zoom={16}
                options={{ disableDefaultUI: true }}
              >
                {selectedStore && (
                  <>
                    <MarkerF
                      position={{ lat: selectedStore.lat, lng: selectedStore.lng }}
                      onClick={() => setSelectedStore(selectedStore)}
                    />
                    <InfoWindow position={{ lat: selectedStore.lat, lng: selectedStore.lng }}>
                      <div className="max-w-[17.25rem] bg-white p-1 top-[-20px]">
                        <div className="flex flex-col gap-2 mb-2 pb-2 border-b border-black/10">
                          <div className="flex items-start gap-1">
                            <Image
                              src={Images.mapLocationIcon}
                              alt="location-icon"
                              width={9}
                              height={12}
                              className="w-[0.5625rem] h-[0.75rem]"
                            />
                            <div className="font-normal text-3.25 leading-[0.975rem] line-clamp-2">
                              {selectedStore.address}
                            </div>
                          </div>
                          <div className="flex justify-between">
                            <div className="flex items-center gap-1">
                              <Image
                                src={Images.mapMailIcon}
                                alt="mail-icon"
                                width={10}
                                height={7}
                                className="w-[0.625rem] h-[0.4375rem]"
                              />
                              <div className="font-normal text-3.25 leading-[0.975rem]">{selectedStore.email}</div>
                            </div>
                            <div className="flex items-center gap-1">
                              <Image
                                src={Images.mapPhoneIcon}
                                alt="phone-icon"
                                width={10}
                                height={11}
                                className="w-[0.625rem] h-[0.6875rem]"
                              />
                              <div className="font-normal text-3.25 leading-[0.975rem]">{selectedStore.hotline}</div>
                            </div>
                          </div>
                        </div>
                        <div className="font-normal text-3.25 leading-[0.975rem]">
                          Giờ làm việc: {selectedStore.work_time}
                        </div>
                      </div>
                    </InfoWindow>
                  </>
                )}
              </GoogleMap>
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col items-center justify-center bg-[#F6F5FA] h-[45rem] sm:mb-20 mb-0 mx-auto p-0 sm:p-8 ">
        <div className="sm:mr-10 mr-0 sm:w-[34.25rem] w-[343px] sm:h-[33rem] h-[228px] overflow-hidden">
          <Image
            src={Images.imgContact}
            width={548}
            height={528}
            alt="Contact Image"
            className="w-full h-full object-cover rounded-sm"
          />
        </div>
        <div className="sm:w-[550px] w-[343px] flex flex-col items-center">
          <h2 className="font-semibold sm:text-[2rem] text-base  leading-[22px] sm:leading-5 sm:mb-5 mb-6 mt-8">
            LIÊN HỆ VỚI CHÚNG TÔI
          </h2>
          <Form className="space-y-8 w-[100%]" form={form}>
            <div className="space-y-4">
              <Form.Item name="fullName">
                <Input
                  type="text"
                  name="fullName"
                  placeholder={"Nhập họ và tên của bạn"}
                  className="w-full h-10 p-3 rounded-md outline-none border-none"
                  required
                />
              </Form.Item>
              <Form.Item name="phone">
                <Input
                  type="phone"
                  name="phone"
                  placeholder={"Nhập số điện thoại của bạn"}
                  className="w-full h-10 p-3 rounded-md outline-none border-none"
                  required
                />
              </Form.Item>
              <Form.Item name="email">
                <Input
                  type="email"
                  name="email"
                  placeholder={"Nhập email của bạn"}
                  className="w-full h-10 p-3 rounded-md outline-none border-none"
                  required
                />
              </Form.Item>
              <Form.Item name="message">
                <TextArea
                  name="message"
                  placeholder={"Nhập nội dung tin nhắn"}
                  rows={4}
                  className="w-full p-3 rounded-md outline-none border-none"
                  required
                />
              </Form.Item>
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="sm:w-full mt-4 w-[343px] bg-[#00A19A] text-white text-lg py-3 rounded-md hover:bg-[#007B73] transition-colors"
            >
              Gửi yêu cầu liên hệ
            </button>
          </Form>
        </div>
      </div>
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
  )
}
export default ContactPage
