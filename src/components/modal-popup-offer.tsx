"use client"
import { Spin } from "antd"
import { useEffect, useState } from "react"
import { DataSettingItem } from "../lib/config/types"
import { useUiBuilder } from "../lib/external-components"
import { getSettings } from "../lib/navigation-services"
import PageRender from "./page-render"

const ModalPopupOffer = ({ dict }: { dict?: any; open: boolean; isMobile?: boolean }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [popupTemplate, setPopupTemplate] = useState("") // Lưu template
  const [isPopupTemplateVisible, setIsPopupTemplateVisible] = useState(false)
  const { fetchBlockContentTemplate, fetchBlockContent } = useUiBuilder()

  interface FormData {
    popupTemplate?: string
    popupHiddenTimePopup?: number
    popupDisplayTimePopup?: number
  }

  const [formData, setFormData] = useState<FormData>({})
  const [dataModal, setDataModal] = useState<any>([])

  const fetchSetting = async () => {
    try {
      const response = await getSettings()

      const popupTemplate = response.find((item: DataSettingItem) => item.attributes.key === "popupTemplatePopup")
        ?.attributes.value
      const popupHiddenTimePopup = response.find(
        (item: DataSettingItem) => item.attributes.key === "popupHiddenTimePopup",
      )?.attributes.value
      const popupDisplayTimePopup = response.find(
        (item: DataSettingItem) => item.attributes.key === "popupDisplayTimePopup",
      )?.attributes.value

      setFormData(prev => ({
        ...prev,
        popupTemplate: popupTemplate,
        popupHiddenTimePopup: popupHiddenTimePopup,
        popupDisplayTimePopup: popupDisplayTimePopup,
      }))

      setPopupTemplate(popupTemplate || "")
    } catch (error) {
      console.error("Error fetching setting data:", error)
    }
  }

  useEffect(() => {
    fetchSetting()
  }, [])

  useEffect(() => {
    if (formData.popupDisplayTimePopup) {
      setTimeout(() => {
        setIsPopupTemplateVisible(true)
        setIsModalOpen(true)
      }, formData.popupDisplayTimePopup)
    }
  }, [formData.popupDisplayTimePopup])

  useEffect(() => {
    if (popupTemplate) {
      const fetchData = async () => {
        try {
          const response = await fetchBlockContent(popupTemplate)

          setDataModal([response.data])
        } catch (error) {
          console.error("Error fetching data:", error)
        }
      }
      fetchData()
    }
  }, [popupTemplate])

  return (
    <>
      {dataModal.length > 0 && (
        <div>
          <PageRender pageData={dataModal} dict={dict} isTemplate={true} />
        </div>
      )}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Spin />
        </div>
      )}
    </>
  )
}

export default ModalPopupOffer
