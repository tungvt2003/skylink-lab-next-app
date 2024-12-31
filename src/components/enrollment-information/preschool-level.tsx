import SvgVectorDropDown from "@/components/svg-component/svg-vector-dropdown"
import { Images } from "@/constants/images"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const PreschoolLevel = () => {
  return (
    <div className="container">
      <div className="py-25 px-[16.125rem]">
        <div className="">
          <Image src={Images.highSchool} alt="Image" className="h-[29.5rem] object-cover rounded-xl" />
          <div className="px-25 pt-12">
            <div>
              <span className="font-semibold text-[2rem] leading-12">BẬC MẦM NON</span>
            </div>
            <div className="py-6">
              <span className="font-normal text-base leading-6">
                Chắt lọc tinh hoa từ các nền giáo dục hàng đầu, Sky-Line luôn coi trẻ là trung tâm của quá trình học tập
                và khuyến khích trẻ tự do khám phá thế giới xung quanh trong một không gian học tập mở và linh hoạt.
                Thông qua phương pháp tiếp cận toàn diện, các chương trình học tại Sky-Line cung cấp cho trẻ những kỹ
                năng, hành trang trên con đường hội nhập và làm chủ thế giới tương lai. Đặc biệt, với lợi thế của hệ
                thống giáo dục nhiều bậc học, trẻ được tham gia các hoạt động tiền Tiểu học, sớm chuẩn bị các kỹ năng
                học tập cần thiết nhằm tạo dựng nền tảng vững chắc để trở thành người học thành công trong tương lai.
              </span>
            </div>
            <div className="flex gap-4 pb-6">
              <div className="container-button-curriculum-post">
                <Link className="button-link-curriculum-post" href={""}>
                  Hệ Mầm non Chất lượng cao
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
                <Link className="button-link-curriculum-post" href={""}>
                  Hệ Mầm non Song ngữ
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
            <div>
              <div className="flex items-center pb-2">
                <span className="text-[0.875rem] leading-5 text-gray pr-2 italic">
                  Chi tiết biểu phí bậc Mầm non và bậc Phổ thông
                </span>
                <SvgVectorDropDown className=" h-3 w-3  text-gra y-800 text-gray" />
              </div>
              <div className="flex items-center">
                <span className="text-[0.875rem] leading-5 text-gray pr-2 italic">
                  Chi tiết chính sách ưu đãi bậc Mầm non và bậc Phổ thông
                </span>
                <SvgVectorDropDown className=" h-3 w-3  text-gra y-800 text-gray" />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-25">
          <Image src={Images.highSchool} alt="Image" className="h-[29.5rem] object-cover rounded-xl" />
          <div className="px-25 pt-12">
            <div>
              <span className="font-semibold text-[2rem] leading-12">BẬC MẦM NON</span>
            </div>
            <div className="py-6">
              <span className="font-normal text-base leading-6">
                Chắt lọc tinh hoa từ các nền giáo dục hàng đầu, Sky-Line luôn coi trẻ là trung tâm của quá trình học tập
                và khuyến khích trẻ tự do khám phá thế giới xung quanh trong một không gian học tập mở và linh hoạt.
                Thông qua phương pháp tiếp cận toàn diện, các chương trình học tại Sky-Line cung cấp cho trẻ những kỹ
                năng, hành trang trên con đường hội nhập và làm chủ thế giới tương lai. Đặc biệt, với lợi thế của hệ
                thống giáo dục nhiều bậc học, trẻ được tham gia các hoạt động tiền Tiểu học, sớm chuẩn bị các kỹ năng
                học tập cần thiết nhằm tạo dựng nền tảng vững chắc để trở thành người học thành công trong tương lai.
              </span>
            </div>
            <div className="flex gap-4 pb-6">
              <Link className="button-link-curriculum-post" href={""}>
                Hệ hội nhập S
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
              <Link className="button-link-curriculum-post" href={""}>
                Hệ hội nhập Global
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
              <Link className="button-link-curriculum-post" href={""}>
                Hệ song bằng
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div>
              <div className="flex items-center pb-2">
                <span className="text-[0.875rem] leading-5 text-gray pr-2 italic">
                  Chi tiết biểu phí bậc Mầm non và bậc Phổ thông
                </span>
                <SvgVectorDropDown className=" h-3 w-3  text-gra y-800 text-gray" />
              </div>
              <div className="flex items-center">
                <span className="text-[0.875rem] leading-5 text-gray pr-2 italic">
                  Chi tiết chính sách ưu đãi bậc Mầm non và bậc Phổ thông
                </span>
                <SvgVectorDropDown className=" h-3 w-3  text-gra y-800 text-gray" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreschoolLevel
