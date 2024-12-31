import BreadCrumb from "@/components/breadcrumb"
import CardSupportService from "@/components/gioi-thieu/card-support-service"
import CardSystemBase from "@/components/gioi-thieu/card-system-base"
import { BreadCrumbItem } from "@/components/types/types"
import { Images } from "@/constants/images"

const items: BreadCrumbItem[] = [
  {
    title: "Giới thiệu",
    url: "",
  },
  {
    title: "Hệ thống các cơ sở",
    url: "/gioi-thieu/he-thong-cac-co-so",
  },
]

export default function SystemBasePage() {
  return (
    <div className="container">
      <BreadCrumb items={items} />
      <div className="container">
        <div className="mx-[16.125rem] my-16">
          <div className="flex flex-col gap-10">
            <div className="text-3.5xl leading-12 font-semibold text-left uppercase text-black-tertiary line-clamp-2">
              MÔI TRƯỜNG GIÁO DỤC & CSVC
            </div>
            <div className="text-lg leading-6">
              Các cơ sở trường tọa lạc tại địa điểm trong lành, thoáng mát.
              <br /> - Phòng học tiện nghi, được trang bị đầy đủ camera trực tuyến, hệ thống báo cháy, hệ thống hành
              lang an toàn, hồ bơi, nhà đa năng… <br /> - Phòng học mầm non được trang bị hệ thống lọc khí công nghệ
              sinh học Bio Filter giúp ngăn ngừa lây truyền các bệnh phổ biến qua đường hô hấp, tạo không khí trong
              lành, an toàn cho trẻ.
              <br /> - Thủ tục ra/vào trường được kiểm soát chặt chẽ nhằm đảm bảo an toàn cho học sinh, nhân viên và
              giáo viên ở trường.
            </div>
          </div>
          <div className="flex flex-col gap-25 mt-25">
            <CardSystemBase title="sky-line riverside" nameBase="Cơ sở 1" />
            <CardSystemBase title="sky-line central" nameBase="Cơ sở 2" />
            <CardSystemBase title="sky-line globle" nameBase="Cơ sở 3" />
            <CardSystemBase title="sky-line hill" nameBase="Cơ sở 4" />
            <CardSystemBase title="sky-line Beach" nameBase="Cơ sở 5" />
          </div>
        </div>
      </div>
      <div className="bg-[#F5F6FE] backdrop-blur-24 py-25 px-[22.375rem] flex flex-col gap-6">
        <div className="text-center font-semibold text-3.5xl leading-12 uppercase">Chất lượng giáo dục</div>
        <div className="text-lg leading-6">
          Đội ngũ giáo viên Việt Nam và quốc tế năng động, tâm huyết, giàu năng lực chuyên môn và kinh nghiệm được tuyển
          chọn kỹ càng.
          <br />
          <br />
          Chương trình học chính khóa đảm bảo chuẩn của Bộ Giáo dục và Đào tạo, đồng thời tăng cường rèn luyện cho học
          sinh các năng lực cần thiết của công dân toàn cầu thế kỷ 21.
          <br />
          <br />
          Nhiều chương trình liên kết đào tạo với các tổ chức quốc tế uy tín như: Cambridge, Pearson, ACT, Fieldwork...
          <br />
          <br />
          Phương pháp đào tạo hướng học sinh tới tư duy tích cực như bản đồ tư duy, bàn tay nặn bột, ứng dụng công nghệ
          thông tin trong giảng dạy…
        </div>
      </div>
      <div className="container">
        <div className="mx-[16.125rem] my-25">
          <div className="text-3.5xl leading-12 font-semibold uppercase text-black-tertiary line-clamp-2 text-center">
            dịch vụ hỗ trợ
          </div>
          <div className="flex flex-col gap-25 mt-12">
            <CardSupportService title="Dịch vụ bán trú & Chăm sóc" imageUrl={Images.bannerSupport1} />
            <CardSupportService title="Dịch vụ xe đưa đón" imageUrl={Images.bannerSupport} />
          </div>
        </div>
      </div>
    </div>
  )
}
