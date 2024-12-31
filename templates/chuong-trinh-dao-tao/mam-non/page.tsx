import BreadCrumb from "@/components/breadcrumb"
import TrainingProgram from "@/components/home/training-program"
import { Images } from "@/constants/images"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Kindergarten = () => {
  const configBreadCrum = [
    {
      title: "Chương trình đào tạo",
      url: "#",
    },
    {
      title: "Mầm non",
      url: "/chuong-trinh-dao-tao/mam-non",
    },
  ]

  return (
    <div className="container">
      <BreadCrumb items={configBreadCrum} />
      <div className="container-curriculum-post">
        <h2 className="title-curriculum-post">bậc mần non</h2>

        <div className="h-12" />

        <div className="feature-img-curriculum-post">
          <Image
            src={Images.featureImageCurriculumnPost}
            alt="banner"
            fill={true}
            className="rounded-2xl object-cover"
            sizes="75vw"
            quality={70}
          />
        </div>

        <div className="h-12" />

        <div className="content-curriculum-post ">
          <p className="tag-p-curriculum-post">
            Bậc Mầm non được ví như “giai đoạn vàng” khi trẻ phát triển mạnh mẽ về não bộ cũng như kích hoạt toàn diện 5
            giác quan. Trong giai đoạn này, trẻ có trí tưởng tượng vô cùng phong phú cùng tiềm năng sáng tạo vô tận.
          </p>
          <p className="tag-p-curriculum-post">
            Chắt lọc tinh hoa từ các nền giáo dục hàng đầu, Sky-Line luôn coi trẻ là trung tâm của quá trình học tập và
            khuyến khích trẻ tự do khám phá thế giới xung quanh trong một không gian học tập mở và linh hoạt. Thông qua
            phương pháp tiếp cận toàn diện, các chương trình học tại Sky-Line cung cấp cho trẻ những kỹ năng, hành trang
            trên con đường hội nhập và làm chủ thế giới tương lai. Đặc biệt, với lợi thế của hệ thống giáo dục nhiều bậc
            học, trẻ được tham gia các hoạt động tiền Tiểu học, sớm chuẩn bị các kỹ năng học tập cần thiết nhằm tạo dựng
            nền tảng vững chắc để trở thành người học thành công trong tương lai.
          </p>

          <div className="container-button-curriculum-post">
            <Link
              className="button-link-curriculum-post"
              href="/chuong-trinh-dao-tao/mam-non/he-mam-non-chat-luong-cao"
            >
              Hệ Mầm non Chất lượng cao
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
            <Link className="button-link-curriculum-post" href="/chuong-trinh-dao-tao/mam-non/he-mam-non-song-ngu">
              Hệ Mầm non Song ngữ
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="h-12" />
          <h3 className="sub-title-curriculum-post">
            MỤC TIÊU GIÁO DỤC TOÀN DIỆN SKY-LINE
            <div className="border-sub-title-curriculum-post" />
          </h3>
          <p className="tag-p-curriculum-post">
            Mỗi học sinh là một cá thể độc đáo, mang trong mình những tiềm năng riêng biệt, và nhiệm vụ của nhà trường
            là khơi dậy, nuôi dưỡng những tiềm năng đó, giúp các em tự tin khám phá, phát triển toàn diện cả về tri
            thức, tư duy, thể chất và tâm hồn trên hành trình học tập và trưởng thành.
          </p>
          <div className="h-12" />
          <Image src={Images.contentCurriculumPost} alt="hinh-anh-content-post" />
          <div className="h-12" />
          <h3 className="sub-title-curriculum-post">
            CHÂN DUNG TRẺ MẦM NON SKY-LINE
            <div className="border-sub-title-curriculum-post" />
          </h3>
          <p className="tag-p-curriculum-post">
            - Tự tin: Yêu thương cuộc sống, có ý thức mạnh mẽ về đúng và sai, có năng lực thích ứng, dũng cảm, kiên
            cường, hiểu bản thân mình, sáng suốt trong việc đưa ra nhận định, suy nghĩ độc lập, tư duy sáng tạo, phản
            biện và giao tiếp hiệu quả.
            <br /> - Là những người học tự định hướng: Chịu trách nhiệm cho việc học của bản thân, đặt câu hỏi, phản tư
            và theo đuổi việc học tập suốt đời.
            <br /> - Là những người đóng góp tích cực trong cộng đồng: Có năng lực làm việc tập thể, luôn đổi mới và
            phấn đấu để đạt được sự xuất chúng.
            <br /> - Là những công dân biết quan tâm: Có ý thức công dân mạnh mẽ, có trách nhiệm với gia đình, cộng đồng
            và quốc gia, đồng thời giữ vai trò tích cực trong việc cải thiện cuộc sống của những người xung quanh.
          </p>
          <div className="h-12" />
          <h3 className="sub-title-curriculum-post">
            READY FOR SKY-LINE - CHƯƠNG TRÌNH TIỀN TIỂU HỌC <br /> DÀNH CHO HỌC SINH MẪU GIÁO LỚN
            <div className="border-sub-title-curriculum-post" />
          </h3>
          <p className="tag-p-curriculum-post">
            Ready for Sky-Line là một chương trình chuẩn bị cho học sinh vào lớp 1, gồm có các buổi dự giờ và học làm
            quen với môi trường Tiểu học. Các giờ học Ready for Sky-Line được tổ chức từ lớp Mẫu giáo lớn bởi đội ngũ
            giáo viên Tiểu học trực tiếp phối hợp thực hiện. Đây là giai đoạn quan trọng để trẻ em học được những kỹ
            năng cơ bản trước khi học đọc, viết, tính toán và các kỹ năng xã hội như giao tiếp, hợp tác và chia sẻ.
            <br /> Một trong những ưu điểm lớn của chương trình tiền tiểu học là giúp học sinh làm quen và phát triển
            các kỹ năng cơ bản này từ sớm. Bằng cách học qua các hoạt động tương tác và học tập thực tế, các em được
            khuyến khích để tìm hiểu, khám phá và học hỏi thêm. Điều này giúp Sky-Liner mầm non trở nên tự tin hơn và
            cảm thấy yêu thích việc học khi bước vào Tiểu học.
          </p>
          <div className="h-12" />
          <Image src={Images.mamNon2} alt="hinh-anh-content-post" />
        </div>
      </div>
      <div className="pb-[7.5rem]">
        <TrainingProgram isShowTitle={false} />
      </div>
    </div>
  )
}
export default Kindergarten
