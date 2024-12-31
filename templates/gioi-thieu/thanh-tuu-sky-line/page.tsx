import BreadCrumb from "@/components/breadcrumb"
import CardPost from "@/components/card-post"
import { BreadCrumbItem } from "@/components/types/types"
import { Button } from "@/components/ui/button"

const items: BreadCrumbItem[] = [
  {
    title: "Giới thiệu",
    url: "",
  },
  {
    title: "Thành tựu SKY-LINE",
    url: "/gioi-thieu/thanh-tuu-sky-line",
  },
]
export default function AchievementPage() {
  return (
    <div className="container">
      <BreadCrumb items={items} />
      <div className="max-w-[1200px] mx-auto mb-[6.25rem]">
        <div className="text-3.5xl leading-12 font-semibold text-center uppercase mt-15 text-black-tertiary">
          Thành tựu sky-line
        </div>
        <div className="grid grid-cols-3 grid-rows-3 gap-12 my-16">
          {Array(9)
            .fill(0)
            .map((_, index) => {
              return <CardPost key={index} />
            })}
        </div>
        <div className="flex justify-center">
          <Button className="text-sm leading-5.5 font-semibold h-[2.875rem] text-green-secondary bg-white border-[1.5px] border-green-secondary rounded-lg px-6 py-3 hover:bg-green hover:text-white">
            Xem thêm
          </Button>
        </div>
      </div>
    </div>
  )
}
