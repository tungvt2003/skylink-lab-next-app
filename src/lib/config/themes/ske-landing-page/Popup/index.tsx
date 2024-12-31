"use client"
import { ComponentConfig } from "@measured/puck"
import { Select } from "antd"
import { useEffect, useState } from "react"
import { BaseSystem } from "../../../../external-components"
import httpClient from "../../../../http-client"
import { FormRegisterProps, RenderConfig } from "./RenderConfig"

const fetchBaseSystems = async () => {
  try {
    const response = await httpClient.get<{ data: any[] }>(`base-systems?populate=*&sort=id:ASC`)
    return response.data
  } catch (error) {
    console.error("Error fetching base systems:", error)
    throw error
  }
}

export const SelectMultiple = ({ value, onChange }: any) => {
  const [baseSystems, setBaseSystems] = useState<BaseSystem[]>([])
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetchBaseSystems()
      setBaseSystems(response)
    } catch (error) {
      console.error("Error fetching data:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Select
      onChange={onChange}
      options={baseSystems?.map((base: any) => ({
        label: (
          <div className="base-item">
            <div className="base-name font-semibold text-start">{base.attributes.name}</div>
            <div className="base-address">{base.attributes.address}</div>
          </div>
        ),
        value: base.attributes.name,
      }))}
      onSelect={onChange}
      placeholder={<span className="text-[#1A1A1A] text-base">Chọn cơ sở</span>}
      className="w-full h-11 rounded-lg"
      loading={loading}
      notFoundContent={!loading && "Không tìm thấy cơ sở nào"}
      filterOption={(input, option) => option?.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      optionLabelProp="value"
    />
  )
}

export const SKELPPopup: ComponentConfig<FormRegisterProps> = {
  label: "SKELP | Popup",
  // @ts-ignore
  fields: {},
  defaultProps: {
    className: "",
  },
  ...RenderConfig,
}
