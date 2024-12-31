"use client"
import { ComponentConfig } from "@measured/puck"
import { Select } from "antd"
import { useEffect, useState } from "react"
import { filterOption, useUiBuilder } from "../../../external-components"
import { commonStylesProps } from "../../lib/commonCSSProps"
import { RenderConfig, TabsProps } from "./RenderConfig"

export const CustomTabs: ComponentConfig<TabsProps> = {
  label: "Tabs",
  //@ts-ignore
  fields: {
    tabs: {
      label: "Tabs",
      type: "array",
      arrayFields: {
        label: {
          label: "Label",
          type: "text",
        },
        idTemplate: {
          type: "custom",
          label: "Select Template",
          render: props => <SelectMultiple {...props} />,
        },
      },
    },
    ...commonStylesProps,
  },
  defaultProps: {
    tabs: [{ label: "Tab 1" }, { label: "Tab 2" }],
    className: "",
    styles: {
      mobile: { display: "block" },
      tablet: { display: "block" },
      desktop: { display: "flex" },
    },
  },
  ...RenderConfig,
}

const SelectMultiple = ({ value, onChange }: any) => {
  const [optionTemplate, setOptionTemplate] = useState<{ value: string; label: string }[]>([])
  const { fetchBlockContentTemplate } = useUiBuilder()

  const fetchData = async () => {
    try {
      const response = await fetchBlockContentTemplate()
      if (Array.isArray(response.data)) {
        setOptionTemplate(
          response.data.map(template => ({ value: template.id as string, label: template.attributes.templateName })),
        )
      } else {
        setOptionTemplate([])
      }
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Select
      showSearch
      style={{ minWidth: "14rem" }}
      placeholder="Select Category"
      optionFilterProp="children"
      filterOption={filterOption}
      options={optionTemplate}
      allowClear
      value={value}
      onChange={onChange}
    />
  )
}
