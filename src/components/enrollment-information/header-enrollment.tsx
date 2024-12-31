import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs"

const HeaderEnrollment = () => {
  return (
    <div className="container ">
      <div className="flex justify-between flex-col items-center mt-16 ">
        <div className="text-center pb-12">
          <span className="font-semibold leading-[3rem] text-[2rem]">TUYỂN SINH</span>
        </div>

        <Tabs defaultValue="thong-tin-tuyen-sinh" className="flex flex-col gap-16">
          <TabsList className="gap-7 bg-transparent">
            <TabsTrigger
              value="thong-tin-tuyen-sinh"
              className="rounded-none py-4 px-[0.625rem] gap-[0.625rem] text-lg font-semibold leading-6 duration-100 hover:text-green hover:border-green hover:border-b-2 data-[state=active]:text-green data-[state=active]:border-green data-[state=active]:border-b-2"
            >
              Thông tin tuyển sinh
            </TabsTrigger>
            <TabsTrigger
              value="quy-trinh-tuyen-sinh"
              className="rounded-none py-4 px-[0.625rem] gap-[0.625rem] text-lg font-semibold leading-6 duration-100 hover:text-green hover:border-green hover:border-b-2 data-[state=active]:text-green data-[state=active]:border-green data-[state=active]:border-b-2"
            >
              Quy trình tuyển sinh
            </TabsTrigger>
            <TabsTrigger
              value="hoc-phi"
              className="rounded-none py-4 px-[0.625rem] gap-[0.625rem] text-lg font-semibold leading-6 duration-100 hover:text-green hover:border-green hover:border-b-2 data-[state=active]:text-green data-[state=active]:border-green data-[state=active]:border-b-2"
            >
              Học phí
            </TabsTrigger>
            <TabsTrigger
              value="chuong-trinh-he"
              className="rounded-none py-4 px-[0.625rem] gap-[0.625rem] text-lg font-semibold leading-6 duration-100 hover:text-green hover:border-green hover:border-b-2 data-[state=active]:text-green data-[state=active]:border-green data-[state=active]:border-b-2"
            >
              Chương trình hè
            </TabsTrigger>
            <TabsTrigger
              value="uu-dai-va-hoc-bong"
              className="rounded-none py-4 px-[0.625rem] gap-[0.625rem] text-lg font-semibold leading-6 duration-100 hover:text-green hover:border-green hover:border-b-2 data-[state=active]:text-green data-[state=active]:border-green data-[state=active]:border-b-2"
            >
              Ưu đãi và Học bổng
            </TabsTrigger>
            <TabsTrigger
              value="cac-cau-hoi-thuong-gap"
              className="rounded-none py-4 px-[0.625rem] gap-[0.625rem] text-lg font-semibold leading-6 duration-100 hover:text-green hover:border-green hover:border-b-2 data-[state=active]:text-green data-[state=active]:border-green data-[state=active]:border-b-2"
            >
              Các câu hỏi thường gặp
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  )
}

export default HeaderEnrollment
