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
      title: "Hệ Song bằng",
      url: "/chuong-trinh-dao-tao/he-song-bang",
    },
  ]

  return (
    <div className="container">
      <BreadCrumb items={configBreadCrum} />
      <div className="container-curriculum-post">
        <h2 className="title-curriculum-post">Hệ song bằng</h2>

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
            Chương trình đào tạo Song bằng tại Sky-Line được thực hiện xuyên suốt từ bậc Mầm non tới bậc THCS. Đây là sự
            kết hợp xuất sắc của chương trình đào tạo phổ thông Việt Nam với các chương trình quốc tế, bao gồm chương
            trình Canada (bậc Mầm non) và chương trình Anh quốc (các bậc phổ thông). Từ đó, chương trình Song bằng
            Sky-Line đảm bảo một lộ trình học tập thông minh, giúp học sinh có nền tảng kiến thức vững chắc, hội nhập
            sâu vào văn hóa toàn cầu và đặc biệt là có được bằng cấp đa quốc gia nhưng không quá nhiều áp lực.
          </p>

          <div className="h-12" />

          <h3 className="sub-title-curriculum-post">
            CHƯƠNG TRÌNH ĐÀO TẠO
            <div className="border-sub-title-curriculum-post" />
          </h3>

          <h4>1. CHƯƠNG TRÌNH QUỐC TẾ</h4>
          <p>
            Học sinh hệ Song bằng được thụ hưởng kiến thức quốc tế từ chương trình Anh quốc hoàn toàn do Giáo viên nước
            ngoài giảng dạy. Chương trình Anh quốc một trong những chương trình đào tạo quốc tế hàng đầu thế giới và
            được công nhận rộng rãi trên toàn cầu. Quy trình kiểm tra chất lượng theo tiêu chuẩn Anh quốc được thực hiện
            xuyên suốt trong quá trình học ở mỗi giai đoạn và ở mỗi năm học. Mục tiêu cao nhất của chương trình là giúp
            từng học sinh khai phá được tiềm năng tối ưu của mình.
            <br />
            Kết thúc mỗi cấp học, học sinh hệ Song bằng đăng ký và tham gia kỳ thi chứng chỉ Anh quốc. Chứng chỉ này sẽ
            là tấm vé giúp học sinh mở ra nhiều cánh cửa trong tương lai, hướng tới hội nhập toàn cầu.
          </p>

          <div className="h-3" />
          <Image src={Images.heSongBang} alt="hinh-anh-content-post" />
          <div className="h-3" />

          <h4>2. CHƯƠNG TRÌNH QUỐC GIA CỐT LÕI</h4>
          <p>
            Chương trình của Bộ GD&ĐT Việt Nam được thiết kế đặc thù tại Hệ thống Giáo dục Sky-Line. Trong đó, các môn
            học được tinh giản nhằm giảm áp lực học tập cho học sinh, tuy nhiên vẫn đảm bảo các kiến thức căn bản, nền
            tảng để các em hoàn thành tốt các kỳ thi chung của Bộ và Sở..
          </p>

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
