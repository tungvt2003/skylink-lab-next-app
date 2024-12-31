import { BreadCrumbItem } from "@/components/types/types"
import Link from "next/link"

interface Props {
  items: BreadCrumbItem[]
  isOverflow?: boolean
  isDetail?: boolean
  isNotMargin?: boolean
}

// const items: BreadCrumbItem[] = [
//   {
//     title: "Giới thiệu",
//     url: "/",
//   },
//   {
//     title: "Tổng quan về hệ thống",
//     url: "/",
//   },
// ]

const BreadCrumb = ({ items }: Props) => {
  return (
    items && (
      <div
        className="container flex items-center text-sm leading-5 bg-white-tertiary lg:bg-transparent lg:leading-6 lg:text-base gap-2 lg:gap-2.5 px-4 py-3 lg:pl-[7.5rem] lg:pt-10 lg:pb-0 overflow-x-scroll whitespace-nowrap"
        style={{ scrollbarWidth: "none" }}
      >
        <Link href={"/"} className="text-gray">
          Trang chủ
        </Link>
        <div className="text-gray">/</div>
        {items.length > 0 &&
          items.map((item, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <Link
                href={item.url ? item.url.trim() : "#"}
                className={`leading-5 font-normal max-h-6 ${
                  i === items.length - 1 ? "text-black-tertiary" : "text-gray"
                }`}
              >
                {item.title}
              </Link>
              {i !== items.length - 1 && <span className="text-gray">/</span>}
            </div>
          ))}
      </div>
    )
  )
}

export default BreadCrumb
