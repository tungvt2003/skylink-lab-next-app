import BreadCrumb from "@/components/breadcrumb"
import CardFood from "@/components/card-food"
import CardHandBook from "@/components/card-handbook"
import CardPost from "@/components/card-post"
import { BreadCrumbItem } from "@/components/types/types"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ParentHandbook() {
  const items: BreadCrumbItem[] = [
    {
      title: "Góc phụ huynh",
      url: "/goc-phu-huynh",
    },
  ]
  return (
    <div className="container">
      <BreadCrumb items={items} />
      <div className="pt-16 pb-[6.25rem] gap-16">
        <div className="px-[7.5rem] flex flex-col gap-8 text-center">
          <h1 className="text-[2rem] leading-[3rem] font-semibold uppercase">Góc phụ huynh</h1>
          <Tabs defaultValue="so-tay-phhs" className="flex flex-col gap-16">
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
            <TabsContent value="thong-bao-moi">
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
            </TabsContent>
            <TabsContent value="thuc-don-hs">
              <div className="grid grid-cols-3 grid-rows-3 gap-12 my-16">
                {Array(9)
                  .fill(0)
                  .map((_, index) => {
                    return <CardFood key={index} />
                  })}
              </div>
              <div className="flex justify-center">
                <Button className="text-sm leading-5.5 font-semibold h-[2.875rem] text-green-secondary bg-white border-[1.5px] border-green-secondary rounded-lg px-6 py-3 hover:bg-green hover:text-white">
                  Xem thêm
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="so-tay-phhs">
              <CardHandBook />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
