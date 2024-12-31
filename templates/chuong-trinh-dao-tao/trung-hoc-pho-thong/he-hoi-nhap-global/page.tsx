import BreadCrumb from "@/components/breadcrumb"
import TrainingProgram from "@/components/home/training-program"
import { Images } from "@/constants/images"
import Image from "next/image"

const HighSchool = () => {
  const configBreadCrum = [
    {
      title: "Chương trình đào tạo",
      url: "#",
    },
    {
      title: "Trung học phổ thông",
      url: "/chuong-trinh-dao-tao/trung-hoc-pho-thong",
    },
    {
      title: "Hệ Hội nhập Global",
      url: "/chuong-trinh-dao-tao/he-hoi-nhap-global",
    },
  ]

  return (
    <div className="container">
      <BreadCrumb items={configBreadCrum} />
      <div className="container-curriculum-post">
        <h2 className="title-curriculum-post">Hệ Hội nhập global</h2>

        <div className="h-12" />

        <div className="feature-img-curriculum-post">
          <Image
            src={Images.thpt1}
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
            Được chắt lọc từ ưu thế nổi trội của chương trình Việt Nam, kết hợp với các chương trình quốc tế, chương
            trình Hội nhập được giảng dạy tại cơ sở Sky-Line Global được nghiên cứu và thiết kế bởi Hội đồng Tư vấn, Hội
            đồng Giáo dục Sky-Line cùng các chuyên gia đầu ngành tại Việt Nam. Theo đó, học sinh được thụ hưởng kiến
            thức quốc tế từ chương trình Anh Quốc với thời lượng 50% Giáo viên nước ngoài và 50% Giáo viên Việt Nam
            giảng dạy bằng Tiếng Anh. Kết thúc bậc học, học sinh có thể lựa chọn đăng ký thi lấy bằng quốc tế tùy thuộc
            vào mong muốn và năng lực của mình. Nhà trường sẽ tạo mọi điều kiện và hỗ trợ đăng ký cần thiết cho các em.
            <br />
            Mục tiêu của chương trình hướng tới tạo nền tảng tri thức và văn hóa vững chắc cho học sinh Việt hội nhập
            với thế giới nhưng vẫn giữ gìn được nét tinh hoa truyền thống dân tộc. Chương trình giúp học sinh xây dựng
            tư duy song ngữ ngay từ những năm đầu đời, giúp học sinh chuyển đổi nhịp nhàng giữa 2 ngôn ngữ, đồng thời
            lĩnh hội văn hóa quốc tế và phát triển năng lực xã hội.
          </p>

          <div className="h-12" />

          <h3 className="sub-title-curriculum-post">
            CHƯƠNG TRÌNH ĐÀO TẠO
            <div className="border-sub-title-curriculum-post" />
          </h3>

          <p className="tag-p-curriculum-post">
            - Học chương trình quốc tế với chi phí Việt Nam
            <br />
            - Đáp ứng yêu cầu đầu vào của nhiều chương trình quốc tế ở nhiều quốc gia khác nhau
            <br />
            - Giảm áp lực bằng cấp
            <br />
            - Phát triển nhiều kỹ năng cá nhân (độc lập, tự giải quyết vấn đề, tư duy phản biện…) và năng lực xã hội
            (làm việc nhóm, giao tiếp, lãnh đạo…)
            <br />
            - Linh hoạt lựa chọn chuyên ngành khác nhau trong tương lai
            <br />
            - Lĩnh hội văn hóa quốc tế
            <br />
          </p>

          <div className="h-3" />
          <Image src={Images.hoiNhapGlobal} alt="hinh-anh-content-post" />

          <div className="h-12" />

          <h3 className="sub-title-curriculum-post">
            PHƯƠNG PHÁP GIẢNG DẠY
            <div className="border-sub-title-curriculum-post" />
          </h3>

          <p className="tag-p-curriculum-post">
            Phương pháp giảng dạy của đội ngũ giáo viên trường Sky-Line là sự kết hợp và chọn lọc từ nhiều phương pháp
            với sự tham gia cố vấn thường xuyên của Hội đồng giáo dục, Hội đồng khoa học có kinh nghiệm nhiều năm trong
            công tác giáo dục phổ thông.
            <br />
            Qua nghiên cứu, Hội đồng giáo dục, Hội đồng khoa học và đội ngũ giáo viên SKY-LINE đã phân tích những ưu
            điểm và hạn chế của từng phương pháp giảng dạy, như:
            <br />
            - Phương pháp thuyết trình (lecture)
            <br />
            - Phương pháp đặt cấu hỏi/ vấn đáp (question posing).
            <br />
            - Phương pháp trực quan/ nghe - nhìn (audio visual).
            <br />
            - Phương pháp động não (brain storming)
            <br />
            - Phương pháp đóng vai (role play)
            <br />
            - Phương pháp nghiên cứu tình huống (case study)
            <br />
            - Phương pháp trò chơi (game)
            <br />
            - Phương pháp giải quyết vấn đề (problem solving)
            <br />
            - Phương pháp hợp tác (cooperative learning)
            <br />
            - Phương pháp đề tài (project work)
            <br />
            Bên cạnh đó, Nhà trường còn tổ chức nhiều tiết dạy mẫu để giáo viên ứng dụng phương pháp giảng dạy mới. Cùng
            với sự hỗ trợ tối đa của cơ sở vật chất và trang thiết bị hiện đại, nhằm phát huy hiệu quả phương pháp dạy
            học mới, ứng dụng các phương thức sắp xếp bàn ghế học sinh theo nhiều mô hình khác nhau nhằm vận dụng một
            cách triệt để phương pháp dạy học tích cực, đáp ứng những đòi hỏi về đổi mới của chương trình dạy học tinh
            giản, giúp các em học sinh tiếp thu bài giảng nhanh và hiệu quả.
            <br />
            Nhờ vận dụng tốt những ưu điểm của các phương pháp giáo dục trên, đội ngũ Sky-Line tự tin hướng đến việc dạy
            cho những trẻ em trở thành con người phát triển toàn diện: khỏe mạnh; yêu thiên nhiên, giàu lòng nhân ái,
            biết chia sẻ; hoạt bát, biết giao tiếp; có kĩ năng sống, biết sống tích cực; ham thích học tập, biết cách
            học và học tốt các môn học; ham hoạt động, yêu thích và biết cảm thụ nghệ thuật.
            <br />
          </p>

          <div className="h-12" />
        </div>
      </div>
      <div className="pb-[7.5rem]">
        <TrainingProgram isShowTitle={false} />
      </div>
    </div>
  )
}
export default HighSchool
