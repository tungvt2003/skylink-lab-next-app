"use client"
import CaretDownOutlined from "@ant-design/icons/lib/icons/CaretDownOutlined"
import { Form, Input, Modal, Select, Spin } from "antd"
import TextArea from "antd/es/input/TextArea"
import { useEffect, useState } from "react"
import { DataSettingItem } from "../lib/config/types"
import { getSettings } from "../lib/navigation-services"

const FormRegister = ({
  dict,
  open,
  onClose,
  isMobile,
}: {
  dict?: any
  open: boolean
  onClose: () => void
  isMobile?: boolean
}) => {
  const [form] = Form.useForm()
  const [isPopupVisible, setIsPopupVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [selectedSchoolLabel, setSelectedSchoolLabel] = useState("")
  const [selectedClassLabel, setSelectedClassLabel] = useState("")
  const [selectedGenderLabel, setSelectedGenderLabel] = useState("")

  const [formData, setFormData] = useState({
    emailTo: "",
    parentname: "",
    name: "",
    phonenumber: "",
    email: "",
    base: "",
    desire: "",
  })

  const [formDataCallio, setFormDataCallio] = useState({
    customerName: "",
    desc: "",
    phone: "",
    email: "",
    address: "",
    studentName: "",
  })

  const fetchSetting = async () => {
    try {
      const response = await getSettings()
      const emailTo = response.find((item: DataSettingItem) => item.attributes.key === "emailOffer")?.attributes.value
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
    try {
      await form.validateFields()
    } catch (error) {
      return
    }
    setIsLoading(true)
    onClose()
    try {
      const response1 = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: "[Thông báo] Đăng ký tư vấn",
          emailTo: formData.emailTo,
          content: `
            Họ và tên của phụ huynh: ${form.getFieldValue("parentName")}
            Họ và tên của bé: ${form.getFieldValue("name")}
            Số điện thoại của phụ huynh: ${form.getFieldValue("phone")}
            Email của phụ huynh: ${form.getFieldValue("email")}
            Mong muốn của phụ huynh: ${form.getFieldValue("desire")}
            Cơ sở quan tâm: ${selectedSchoolLabel || "Chưa chọn lớp"}
            Khối lớp quan tâm: ${selectedClassLabel || "Chưa chọn lớp"}
          `,
        }),
      })

      if (!response1.ok) {
        throw new Error("Failed to submit data")
      }

      const phone = form.getFieldValue("phone")
      const email = form.getFieldValue("email")

      const checkResponse = await fetch(`https://clientapi.phonenet.io/customer?keyword=${encodeURIComponent(phone)}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: `ccdf71240b81c157d2addb0529667efa00574a6b99a99769d1b07f423999d4035b0e359d136843e14d5585893e7e17b68fffd2e574618acdf7064dbb065c7754`,
        },
      })
      const checkEmailResponse = await fetch(
        `https://clientapi.phonenet.io/customer?keyword=${encodeURIComponent(email)}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: `ccdf71240b81c157d2addb0529667efa00574a6b99a99769d1b07f423999d4035b0e359d136843e14d5585893e7e17b68fffd2e574618acdf7064dbb065c7754`,
          },
        },
      )

      let phoneExists = false
      let emailExists = false
      let idQuery = ""

      if (checkResponse.ok || checkEmailResponse.ok) {
        const data = await checkResponse.json()
        if (data.docs && data.docs.length > 0 && data.docs[0].phone === phone) {
          idQuery = data.docs[0]._id
          phoneExists = true
        }
        const emailData = await checkEmailResponse.json()
        if (emailData.docs && emailData.docs.length > 0 && emailData.docs[0].email === email) {
          idQuery = emailData.docs[0]._id
          emailExists = true
        }
      }

      const response2 = await fetch(
        `https://clientapi.phonenet.io/customer${phoneExists || emailExists ? "/" + idQuery : ""}`,
        {
          method: phoneExists || emailExists ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
            token: `ccdf71240b81c157d2addb0529667efa00574a6b99a99769d1b07f423999d4035b0e359d136843e14d5585893e7e17b68fffd2e574618acdf7064dbb065c7754`,
          },
          body: JSON.stringify({
            customerName: form.getFieldValue("parentName"),
            desc: form.getFieldValue("desire"),
            customFields: [
              { key: "nguonsub", val: ["Online-Website"] },
              { key: "khoi-lop-quan-tam-", val: [`${selectedClassLabel || "Chưa chọn lớp"}`] },
              { key: "rao-can-khong-chuyen-hoa", val: ["Chưa rõ"] },
              { key: "truong-hoc-hien-tai", val: ["Chưa xác định"] },
              { key: "co-so", val: [`${selectedSchoolLabel || "Chưa chọn lớp"}`] },
              { key: "ho-va-ten-hoc-sinh", val: [form.getFieldValue("name")] },
            ],
            email: form.getFieldValue("email"),
            phone: form.getFieldValue("phone"),
            address: `${selectedSchoolLabel || "Chưa chọn trường"}`,
            user: "657d27f61cc6519b83ead18c",
            name: form.getFieldValue("parentName"),
          }),
        },
      )

      if (!response2.ok) {
        console.error("Lỗi khi gửi dữ liệu khách hàng:", await response2.text())
        throw new Error("Không thể gửi dữ liệu khách hàng")
      }
      window.location.href = "/thank-you"
      const successMessage =
        phoneExists || emailExists ? "Cập nhật thông tin thành công!" : "Đăng ký tư vấn thành công!"
      setMessage(successMessage)
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
      <>
        <Modal width={536} centered open={open} footer={null} className="z-9999 p-0" onCancel={onClose}>
          <div className="flex items-center bg-[#F6F5FA] rounded-xl justify-center">
            <div className="flex flex-col items-center py-12">
              <h2 className="font-semibold text-[32px] leading-12 mb-2 sm:mb-5 uppercase">Đăng ký tư vấn</h2>
              <Form className="sm:w-[450px] w-[343px]" form={form}>
                <div className="space-y-4">
                  <Form.Item
                    name="parentName"
                    className="mb-0 placeholder:text-base placeholder:text-[#1A1A1AB2]"
                    rules={[
                      { required: true, message: "Vui lòng nhập họ và tên phụ huynh" },
                      { max: 250, message: "Tên phụ huynh không được vượt quá 250 ký tự" },
                    ]}
                  >
                    <Input
                      type="text"
                      name="parentName"
                      placeholder="Nhập họ và tên phụ huynh"
                      className="w-full h-10 p-3 rounded-md outline-none placeholder:text-base placeholder:text-[#1A1A1AB2]"
                      required
                    />
                  </Form.Item>
                  <Form.Item name="name" className="mb-0">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Nhập họ và tên của bé"
                      className="w-full h-10 p-3 rounded-md outline-none placeholder:text-base placeholder:text-[#1A1A1AB2]"
                      required
                    />
                  </Form.Item>
                  <Form.Item
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập số điện thoại",
                      },
                      {
                        pattern: /^(\+84|0)\d{9,10}$/,
                        message: "Số điện thoại không hợp lệ (ví dụ: +84912345678 hoặc 0912345678)",
                      },
                      {
                        max: 10,
                        message: "Số điện thoại không được vượt quá 10 ký tự",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      name="phone"
                      placeholder="Số điện thoại của phụ huynh"
                      className="w-full h-10 p-3 rounded-md outline-none placeholder:text-base placeholder:text-[#1A1A1AB2]"
                      required
                    />
                  </Form.Item>
                  <Form.Item name="email">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Nhập email của phụ huynh"
                      className="w-full h-10 p-3 rounded-md outline-none placeholder:text-base placeholder:text-[#1A1A1AB2]"
                    />
                  </Form.Item>
                  <Form.Item
                    name="khoi-lop-quan-tam-"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng chọn khối lớp quan tâm",
                      },
                    ]}
                  >
                    <Select
                      placeholder={
                        <span style={{ color: "#1A1A1AB2", fontSize: "16px", lineHeight: "24px" }}>
                          Chọn khối lớp quan tâm
                        </span>
                      }
                      className="w-full rounded-md outline-none flex items-center placeholder:text-base placeholder:text-[#1A1A1AB2] h-10"
                      suffixIcon={<CaretDownOutlined />}
                      onChange={(value, option) => setSelectedClassLabel((option as { label: string }).label)}
                      options={[
                        { value: "Nhà trẻ", label: "Nhà trẻ" },
                        { value: "Mẫu giáo bé", label: "Mẫu giáo bé" },
                        { value: "Mẫu giáo nhỡ", label: "Mẫu giáo nhỡ" },
                        { value: "Mẫu giáo lớn", label: "Mẫu giáo lớn" },
                        { value: "Khối lớp 1", label: "Khối lớp 1" },
                        { value: "Khối lớp 2", label: "Khối lớp 2" },
                        { value: "Khối lớp 3", label: "Khối lớp 3" },
                        { value: "Khối lớp 4", label: "Khối lớp 4" },
                        { value: "Khối lớp 5", label: "Khối lớp 5" },
                        { value: "Khối lớp 6", label: "Khối lớp 6" },
                        { value: "Khối lớp 7", label: "Khối lớp 7" },
                        { value: "Khối lớp 8", label: "Khối lớp 8" },
                        { value: "Khối lớp 9", label: "Khối lớp 9" },
                        { value: "Khối lớp 10", label: "Khối lớp 10" },
                        { value: "Khối lớp 11", label: "Khối lớp 11" },
                        { value: "Khối lớp 12", label: "Khối lớp 12" },
                      ]}
                    />
                  </Form.Item>
                  <Form.Item
                    name="co-so"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng chọn cơ sở quan tâm",
                      },
                    ]}
                  >
                    <Select
                      placeholder={
                        <span style={{ color: "#1A1A1AB2", fontSize: "16px", lineHeight: "24px" }}>
                          Chọn cơ sở quan tâm
                        </span>
                      }
                      className="w-full rounded-md outline-none flex items-center placeholder:text-base placeholder:text-[#1A1A1AB2] h-10"
                      suffixIcon={<CaretDownOutlined />}
                      onChange={(value, option) => setSelectedSchoolLabel((option as { label: string }).label)}
                      options={[
                        { value: "CS11", label: "SKY-LINE Riverside (cơ sở 1)" },
                        { value: "CS2", label: "SKY-LINE Central (cơ sở 2)" },
                        { value: "CS3", label: "Sky-Line Global (cơ sở 3)" },
                        { value: "CS4", label: "SKY-LINE Hill (cơ sở 4)" },
                        { value: "CS5", label: "SKY-LINE Beach (cơ sở 5)" },
                      ]}
                    />
                  </Form.Item>
                  <Form.Item name="desire">
                    <TextArea
                      name="desire"
                      placeholder="Nhập nội dung tin nhắn"
                      rows={4}
                      className="w-full p-3 rounded-md outline-none placeholder:text-base placeholder:text-[#1A1A1AB2] "
                      required
                    />
                  </Form.Item>
                </div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full mt-4 bg-[#00A19A] font-semibold text-base text-white py-3 rounded-md hover:bg-[#007B73] transition-colors uppercase"
                >
                  Gửi
                </button>
              </Form>
            </div>
          </div>
        </Modal>
      </>

      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center ">
          <Spin />
        </div>
      )}
    </>
  )
}

export default FormRegister
