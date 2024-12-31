import BreadCrumb from "@/components/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import IncentivesScholarshipsPage from "@/components/uu-dai-va-hoc-bong/incentives-and-scholarships"
import FrequentlyAskedQuestions from "./cac-cau-hoi-thuong-gap/page"
import SummerProgram from "./chuong-trinh-he/page"
import TuitionPage from "./hoc-phi/page"
import AdmissionProcess from "./quy-trinh-tuyen-sinh/page"
import Enrollment from "./thong-tin-tuyen-sinh/page"

export default function EnrollmentPage() {
  const items = [{ title: "Tuyển sinh", url: "/tuyen-sinh" }]
  return (
    <div className="container">
      <BreadCrumb items={items} />
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
          <TabsContent value="thong-tin-tuyen-sinh">
            <Enrollment />
          </TabsContent>
          <TabsContent value="quy-trinh-tuyen-sinh">
            <AdmissionProcess />
          </TabsContent>
          <TabsContent value="hoc-phi">
            <TuitionPage />
          </TabsContent>
          <TabsContent value="chuong-trinh-he">
            <SummerProgram />
          </TabsContent>
          <TabsContent value="uu-dai-va-hoc-bong">
            <IncentivesScholarshipsPage />
          </TabsContent>
          <TabsContent value="cac-cau-hoi-thuong-gap">
            <FrequentlyAskedQuestions />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
