import NewActivities from "@/components/home/new-activities"
import SchoolSystem from "@/components/home/school-system"
import SectionAchievements from "@/components/home/section-achievements"
import SectionPartner from "@/components/home/section-partner"
import SectionWhyChoose from "@/components/home/section-why-choose"
import TrainingProgram from "@/components/home/training-program"
import VisitSchool from "@/components/home/visit-school"
import MainBanner from "@/components/main-banner"
import { Button } from "@/components/ui/button"
import { Images } from "@/constants/images"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container">
      <div className="bg-white">
        <MainBanner />
      </div>
      <TrainingProgram isShowTitle={true} />
      <SectionWhyChoose />
      <div className="pt-[7.5rem] bg-white-secondary pb-[6.25rem]">
        <div className="relative max-w-[1200px] mx-auto">
          <div>
            <div className="relative h-[37.5rem]">
              <Image
                src={Images.bannerStudent}
                alt="banner"
                fill={true}
                className="rounded-2xl object-cover"
                sizes="75vw"
                quality={70}
              />
            </div>
            <Link href="#" className="absolute top-[40%] translate-x-[-50%] left-[50%]">
              <Image src={Images.buttonPlay} alt="button-play" />
            </Link>
          </div>
          <div className="flex justify-center">
            <Button className="text-xl leading-6.5 font-medium h-[3.125rem] text-green-secondary bg-white border-[1.5px] border-green-secondary rounded-lg px-[4.5rem] py-3 mt-[3.125rem] hover:bg-green hover:text-white">
              Xem thêm
            </Button>
          </div>
        </div>
      </div>
      <VisitSchool />
      <SchoolSystem />
      <SectionAchievements />
      <NewActivities />
      <div>
        <SectionPartner />
      </div>
    </div>
  )
}
