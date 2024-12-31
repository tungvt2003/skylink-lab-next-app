import BreadCrumb from "@/components/breadcrumb"
import { BreadCrumbItem } from "@/components/types/types"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Images } from "@/constants/images"
import Image from "next/image"

export default function FoodMenuDetail() {
  const items: BreadCrumbItem[] = [
    {
      title: "Góc phụ huynh",
      url: "/goc-phu-huynh",
    },
    {
      title: "Detail Thực Đơn Học Sinh",
      url: "/goc-phu-huynh/detail",
    },
  ]
  return (
    <div className="container">
      <BreadCrumb items={items} />
      <div className="pt-16 pb-[6.25rem] gap-16">
        <div className="px-[7.5rem] flex flex-col gap-8 text-center">
          <h1 className="text-[2rem] leading-[3rem] font-semibold uppercase">Góc phụ huynh</h1>
          <Tabs defaultValue="thuc-don-hs" className="flex flex-col gap-16">
            <TabsList className="gap-7 bg-transparent">
              <TabsTrigger
                value="thong-bao-moi"
                className="rounded-none py-4 px-[0.625rem] gap-[0.625rem] text-lg font-semibold leading-6 duration-100 hover:text-green hover:border-green hover:border-b-2 data-[state=active]:text-green data-[state=active]:border-green data-[state=active]:border-b-2"
              >
                <a href="/goc-phu-huynh/thong-bao-moi">Thông báo mới</a>
              </TabsTrigger>
              <TabsTrigger
                value="thuc-don-hs"
                className="rounded-none py-4 px-[0.625rem] gap-[0.625rem] text-lg font-semibold leading-6 duration-100 hover:text-green hover:border-green hover:border-b-2 data-[state=active]:text-green data-[state=active]:border-green data-[state=active]:border-b-2"
              >
                <a href="/goc-phu-huynh/thuc-don-hs">Thực đơn học sinh</a>
              </TabsTrigger>
              <TabsTrigger
                value="so-tay-phhs"
                className="rounded-none py-4 px-[0.625rem] gap-[0.625rem] text-lg font-semibold leading-6 duration-100 hover:text-green hover:border-green hover:border-b-2 data-[state=active]:text-green data-[state=active]:border-green data-[state=active]:border-b-2"
              >
                <a href="/goc-phu-huynh/so-tay-phhs">Sổ tay PHHS</a>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="thong-bao-moi"></TabsContent>
            <TabsContent value="thuc-don-hs" className="flex flex-col gap-16">
              <div className="font-semibold text-[2rem] leading-12">THỰC ĐƠN BẬC MẦM NON TUẦN 1 THÁNG 10/2024</div>
              <div className="flex flex-col gap-12">
                <Image src={Images.imageThucDon} alt="Menu Thực Đơn" />
                <Image src={Images.imageThucDon} alt="Menu Thực Đơn" />
                <Image src={Images.imageThucDon} alt="Menu Thực Đơn" />
                <Image src={Images.imageThucDon} alt="Menu Thực Đơn" />
                <Image src={Images.imageThucDon} alt="Menu Thực Đơn" />
              </div>
            </TabsContent>
            <TabsContent value="so-tay-phhs"></TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
