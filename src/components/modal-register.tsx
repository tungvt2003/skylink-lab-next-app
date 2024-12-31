"use client"

import { CaretDownOutlined } from "@ant-design/icons"
import { Form, Input, Modal, Radio, Select, Space, Spin } from "antd"
import TextArea from "antd/es/input/TextArea"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Images } from "../constants/images"
import useIsMobile from "../lib/config/lib/use-is-mobile"
import { DataSettingItem } from "../lib/config/types"
import httpClient from "../lib/http-client"
import { getSettings } from "../lib/navigation-services"

const ModalRegister = ({ dict, open, onClose }: { dict?: any; open: boolean; onClose: () => void }) => {
  const [form] = Form.useForm()
  const [isPopupVisible, setIsPopupVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [selectedSchoolLabel, setSelectedSchoolLabel] = useState("")
  const isMobile = useIsMobile()
  const [baseSystems, setBaseSystems] = useState<BaseSystem[]>([])
  const [visitSchool, setVisitSchool] = useState("true")
  const t = useTranslations()
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

  const [formData, setFormData] = useState({
    emailTo: "",
    email: "",
    fullName: "",
    phone: "",
    message: "",
    visitSchool: true,
    addressSchool: "",
  })

  const fetchSetting = async () => {
    try {
      const response = await getSettings()
      const emailTo = response?.find((item: DataSettingItem) => item.attributes.key === "emailAdvise")?.attributes.value
      setFormData(prev => ({ ...prev, emailTo: emailTo }))
    } catch (error) {
      console.error("Error fetching setting data:", error)
    }
  }

  const fetchBaseSystems = async () => {
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
    fetchBaseSystems()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await form.validateFields()
    } catch (error) {
      return
    }
    onClose()
    setIsLoading(true)
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: "[Thông báo] Đăng ký tư vấn",
          emailTo: formData.emailTo,
          content: `Họ và tên: ${form.getFieldValue("fullName")}\nSố điện thoại: ${form.getFieldValue(
            "phone",
          )}\nEmail: ${form.getFieldValue("email")}\nNội dung: ${form.getFieldValue("message")}\nTham quan trường: ${
            form.getFieldValue("visit-school") == "true" ? "Có" : "Không"
          }\nĐịa chỉ trường: ${selectedSchoolLabel || "Chưa chọn trường"}`,
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
        visitSchool: true,
        addressSchool: "",
      })
      form.resetFields()
      setMessage("Đăng ký tư vấn thành công!")
    } catch (error) {
      console.error("Error:", error)
      setMessage("Đã xảy ra lỗi khi đăng ký!")
    } finally {
      setIsLoading(false)
    }
  }

  const closePopup = () => {
    setIsPopupVisible(false)
    form.resetFields()
  }

  return (
    <>
      {!isMobile ? (
        <>
          <Modal width={1137} height={628} centered open={open} footer={null} className="p-0 z-9999" onCancel={onClose}>
            <div className="flex items-center gap-[92px] bg-[#F6F5FA] h-[628px] mx-auto rounded-xl">
              <div className="w-2/4 h-full overflow-hidden rounded-s-lg">
                <Image src={Images.imgContactNew} alt="Contact Image" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col items-center w-1/3 py-12">
                <h2 className="font-semibold text-[32px] leading-12 mb-2 sm:mb-5 uppercase">{t("Đăng ký tư vấn")}</h2>
                <Form
                  className="space-y-8 w-[100%]"
                  form={form}
                  initialValues={{
                    "visit-school": "true",
                  }}
                >
                  <div className="space-y-4">
                    <Form.Item
                      name="fullName"
                      className="mb-0"
                      rules={[
                        { required: true, message: t("Vui lòng nhập tên của bạn") },
                        { max: 50, message: t("Tên không được vượt quá 50 ký tự") },
                      ]}
                    >
                      <Input
                        type="text"
                        name="fullName"
                        placeholder={t("Nhập họ và tên của bạn")}
                        className="w-full h-10 p-3 rounded-md outline-none"
                      />
                    </Form.Item>
                    <Form.Item
                      name="phone"
                      rules={[
                        { required: true, message: t("Vui lòng nhập số điện thoại của bạn") },
                        { pattern: /^[0-9]{10,15}$/, message: t("Số điện thoại không hợp lệ") },
                        { max: 15, message: t("Số điện thoại không được vượt quá 15 ký tự") },
                      ]}
                    >
                      <Input
                        type="phone"
                        name="phone"
                        placeholder={t("Nhập số điện thoại của bạn")}
                        className="w-full h-10 p-3 rounded-md outline-none"
                      />
                    </Form.Item>
                    <Form.Item name="email">
                      <Input
                        type="email"
                        name="email"
                        placeholder={t("Nhập email của phụ huynh")}
                        className="w-full h-10 p-3 rounded-md outline-none"
                      />
                    </Form.Item>
                    <Form.Item name="message">
                      <TextArea
                        name="message"
                        placeholder={t("Nhập nội dung tin nhắn")}
                        rows={4}
                        className="w-full p-3 rounded-md outline-none"
                        required
                      />
                    </Form.Item>
                    <Form.Item
                      label={t("Bạn có muốn tham quan trường SKY-LINE không?")}
                      colon={false}
                      labelCol={{ span: 24 }}
                      wrapperCol={{ span: 24 }}
                      name="visit-school"
                    >
                      <Radio.Group
                        name="radio-group"
                        defaultValue="true"
                        value={form.getFieldValue("visit-school") || formData.visitSchool}
                        onChange={e => {
                          const value = e.target.value
                          form.setFieldsValue({ "visit-school": value })
                          setFormData(prev => ({ ...prev, visitSchool: value === "true" }))
                        }}
                      >
                        <Space direction="vertical">
                          <Radio value="true">{t("Có")}</Radio>
                          <Radio value="false">{t("Không")}</Radio>
                        </Space>
                      </Radio.Group>
                    </Form.Item>

                    <Form.Item name="address-school">
                      <Select
                        placeholder={t("Chọn cơ sở tham quan (nếu muốn)")}
                        className="w-full rounded-md outline-none flex items-center"
                        suffixIcon={<CaretDownOutlined />}
                        onChange={(value, option) => setSelectedSchoolLabel((option as { label: string }).label)}
                        options={baseSystems.map(base => ({
                          value: base.id,
                          label: base.attributes?.name || `Cơ sở ${base.id}`,
                        }))}
                      />
                    </Form.Item>
                  </div>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full bg-[#00A19A] font-semibold text-base text-white py-3 rounded-md hover:bg-[#007B73] transition-colors uppercase"
                  >
                    {t("Gửi")}
                  </button>
                </Form>
              </div>
            </div>
          </Modal>
        </>
      ) : (
        <Modal width="343px" centered open={open} footer={null} className="modal-mobile p-0 z-9999" onCancel={onClose}>
          {/* <div className="flex flex-col items-center bg-[#F6F5FA] rounded-xl"> */}
          <div className="w-full h-full overflow-hidden rounded-t-xl">
            <Image
              src={Images.imgContactNew}
              width={343}
              height={228}
              alt="Contact Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-center space-y-4 p-4 w-[343px]">
            <h2 className="font-semibold text-lg leading-6 uppercase">{t("Đăng ký tư vấn")}</h2>
            <Form className="space-y-2 w-[100%]">
              <div className="space-y-2">
                <Form.Item className="mb-0" name="fullName">
                  <Input
                    type="text"
                    name="fullName"
                    placeholder={t("Nhập họ và tên của bạn")}
                    className="w-full mb-0 h-11 px-4 py-[11.5px] rounded-md outline-none placeholder:text-[#1a1a1a]"
                    required
                  />
                </Form.Item>
                <Form.Item>
                  <Input
                    type="phone"
                    name="phone"
                    placeholder={t("Nhập số điện thoại của bạn")}
                    className="w-full h-11 px-4 py-[11.5px] rounded-md outline-none placeholder:text-[#1a1a1a]"
                    required
                  />
                </Form.Item>
                <Form.Item>
                  <Input
                    type="email"
                    name="email"
                    placeholder={t("Nhập email của bạn")}
                    className="w-full h-11 px-4 py-[11.5px] rounded-md outline-none placeholder:text-[#1a1a1a]"
                    required
                  />
                </Form.Item>
                <Form.Item>
                  <TextArea
                    name="message"
                    placeholder={t("Nhập nội dung tin nhắn")}
                    rows={4}
                    className="w-full px-4 py-[10px] rounded-md outline-none placeholder:text-[#1A1A1A]"
                    required
                  />
                </Form.Item>
                <Form.Item
                  label={t("Bạn có muốn tham quan trường SKY-LINE không?")}
                  colon={false}
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  name="visit-school"
                >
                  <Radio.Group name="radio-group" onChange={e => form.setFieldValue("visit-school", e.target.value)}>
                    <Space direction="vertical">
                      <Radio value="true">{t("Có")}</Radio>
                      <Radio value="false">{t("Không")}</Radio>
                    </Space>
                  </Radio.Group>
                </Form.Item>
                <Form.Item>
                  <Select
                    placeholder={t("Chọn cơ sở tham quan (nếu muốn)")}
                    className="w-full h-11 rounded-md outline-none flex items-center placeholder:text-[#1a1a1a]"
                    suffixIcon={<CaretDownOutlined />}
                    options={baseSystems.map(base => ({
                      value: base.id,
                      label: base.attributes?.name || `Cơ sở ${base.id}`,
                    }))}
                  />
                </Form.Item>
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full h-11 bg-[#00A19A] text-base text-white py-3 text-[13px] leading-[21px] font-normal rounded-md hover:bg-[#007B73] transition-colors uppercase"
              >
                {t("Gửi")}
              </button>
            </Form>
          </div>
          {/* </div> */}
        </Modal>
      )}
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
              className="absolute  text-[30px] right-2 text-gray-600 hover:text-gray-800"
              aria-label="Close"
            >
              &times;
            </button>
            <p className="text-lg font-semibold">{message}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default ModalRegister
