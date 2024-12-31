"use client"
import { ComponentConfig } from "@measured/puck"
import { message, Select } from "antd"
import { useEffect, useState } from "react"
import { fetchCategories, filterOption } from "../../../external-components"
import { Pagination } from "../../types"
import { PostGridByCategoryProps, RenderConfig } from "./RenderConfig"

const SelectMultiple = ({ value, onChange }: any) => {
  const [optionCategories, setOptionCategories] = useState<{ value: string; label: string }[]>([])

  const fetchCategory = async (paginate?: Pagination, searchTerm?: string) => {
    try {
      const response = await fetchCategories(searchTerm)
      setOptionCategories(
        (response as { data: { id: string; attributes: { name: string } }[] }).data.map(
          (category: { id: string; attributes: { name: string } }) => ({
            value: category.id as string,
            label: category.attributes.name,
          }),
        ),
      )
    } catch (err) {
      message.error("Failed to fetch categories. Please try again.")
    }
  }

  useEffect(() => {
    fetchCategory()
  }, [])

  return (
    <Select
      showSearch
      mode="multiple"
      style={{ minWidth: "14rem" }}
      placeholder="Select Category"
      optionFilterProp="children"
      filterOption={filterOption}
      options={optionCategories}
      allowClear
      value={value}
      onChange={onChange}
    />
  )
}

export const PostGridByCategory: ComponentConfig<PostGridByCategoryProps> = {
  label: "Post Grid By Category",
  fields: {
    template: {
      type: "select",
      label: "Template",
      options: [
        { label: "Post Grid HomePage", value: "post-grid-homepage" },
        { label: "Post Grid List", value: "post-grid-list" },
        { label: "Post Similar", value: "post-similar" },
        { label: "Post Hand Book", value: "post-hand-book" },
      ],
    },
    idCategory: {
      type: "custom",
      label: "Category ID",
      render: props => <SelectMultiple {...props} />,
    },
  },
  defaultProps: {
    template: "post-grid-homepage",
    idCategory: [],
  },
  ...RenderConfig,
}
