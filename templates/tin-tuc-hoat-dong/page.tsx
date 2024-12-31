import BreadCrumb from "@/components/breadcrumb"
import CardPost from "@/components/card-post"
import CardRecruitment from "@/components/card-recruitment"
import { BreadCrumbItem } from "@/components/types/types"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs"

export default function NewsActivities() {
  const items: BreadCrumbItem[] = [
    {
      title: "Tin tức - Hoạt động",
      url: "/tin-tuc-hoat-dong",
    },
  ]
  return (
    <div className="container">
      <BreadCrumb items={items} />
      <div className="pt-16 pb-[6.25rem] gap-16">
        <div className="px-[7.5rem] flex flex-col gap-8 ">
          <h1 className="text-[2rem] leading-[3rem] font-semibold uppercase text-center">Tin tức - Hoạt động</h1>
          <Tabs defaultValue="hoat-dong-su-kien" className="flex flex-col gap-16">
            <TabsList className="gap-7 bg-transparent">
              <TabsTrigger
                value="hoat-dong-su-kien"
                className="rounded-none py-4 px-[0.625rem] gap-[0.625rem] text-lg font-semibold leading-6 duration-100 hover:text-green hover:border-green hover:border-b-2 data-[state=active]:text-green data-[state=active]:border-green data-[state=active]:border-b-2"
              >
                Hoạt động - Sự kiện
              </TabsTrigger>
              <TabsTrigger
                value="bao-chi-noi-ve-chung-toi"
                className="rounded-none py-4 px-[0.625rem] gap-[0.625rem] text-lg font-semibold leading-6 duration-100 hover:text-green hover:border-green hover:border-b-2 data-[state=active]:text-green data-[state=active]:border-green data-[state=active]:border-b-2"
              >
                Báo chí nói về chúng tôi
              </TabsTrigger>
              <TabsTrigger
                value="hoat-dong-nhom-so-thich"
                className="rounded-none py-4 px-[0.625rem] gap-[0.625rem] text-lg font-semibold leading-6 duration-100 hover:text-green hover:border-green hover:border-b-2 data-[state=active]:text-green data-[state=active]:border-green data-[state=active]:border-b-2"
              >
                Hoạt động nhóm sở thích
              </TabsTrigger>
              <TabsTrigger
                value="tuyen-dung"
                className="rounded-none py-4 px-[0.625rem] gap-[0.625rem] text-lg font-semibold leading-6 duration-100 hover:text-green hover:border-green hover:border-b-2 data-[state=active]:text-green data-[state=active]:border-green data-[state=active]:border-b-2"
              >
                Tuyển dụng
              </TabsTrigger>
            </TabsList>
            <TabsContent value="hoat-dong-su-kien">
              <div className="grid grid-cols-3 grid-rows-3 gap-12">
                {Array(9)
                  .fill(0)
                  .map((_, index) => {
                    return <CardPost key={index} linkItem="/tin-tuc-hoat-dong/detail" />
                  })}
              </div>
              <div className="flex justify-center">
                <Button className="text-sm leading-5.5 font-semibold h-[2.875rem] text-green-secondary bg-white border-[1.5px] border-green-secondary rounded-lg px-6 py-3 hover:bg-green hover:text-white">
                  Xem thêm
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="bao-chi-noi-ve-chung-toi">
              <div className="grid grid-cols-3 grid-rows-3 gap-12">
                {Array(9)
                  .fill(0)
                  .map((_, index) => {
                    return <CardPost key={index} linkItem="/tin-tuc-hoat-dong/detail" />
                  })}
              </div>
              <div className="flex justify-center">
                <Button className="text-sm leading-5.5 font-semibold h-[2.875rem] text-green-secondary bg-white border-[1.5px] border-green-secondary rounded-lg px-6 py-3 hover:bg-green hover:text-white">
                  Xem thêm
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="hoat-dong-nhom-so-thich">
              <div className="grid grid-cols-3 grid-rows-3 gap-12">
                {Array(9)
                  .fill(0)
                  .map((_, index) => {
                    return <CardPost key={index} linkItem="/tin-tuc-hoat-dong/detail" />
                  })}
              </div>
              <div className="flex justify-center">
                <Button className="text-sm leading-5.5 font-semibold h-[2.875rem] text-green-secondary bg-white border-[1.5px] border-green-secondary rounded-lg px-6 py-3 hover:bg-green hover:text-white">
                  Xem thêm
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="tuyen-dung">
              <div className="flex flex-col gap-6">
                {Array(5)
                  .fill(0)
                  .map((_, index) => {
                    return <CardRecruitment key={index} />
                  })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
