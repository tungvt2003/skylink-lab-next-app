import BreadCrumb from "@/components/breadcrumb"
import TrainingProgram from "@/components/home/training-program"
import { Images } from "@/constants/images"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const PrimarySchool = () => {
  const configBreadCrum = [
    {
      title: "Chương trình đào tạo",
      url: "#",
    },
    {
      title: "Tiểu học",
      url: "/chuong-trinh-dao-tao/tieu-hoc",
    },
  ]

  return (
    <div className="container">
      <BreadCrumb items={configBreadCrum} />
      <div className="container-curriculum-post">
        <h2 className="title-curriculum-post">bậc tiểu học</h2>

        <div className="h-12" />

        <div className="feature-img-curriculum-post">
          <Image
            src={Images.tieuhoc3}
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
            Cấp Tiểu học là cấp học đặt nền móng cho quá trình hình thành nhân cách và năng lực học tập suốt đời của
            trẻ. Chính vì vậy, nhà trường chú trọng tới việc gieo mầm đam mê học tập ở mỗi học sinh Tiểu học, giúp các
            em xây dựng phương pháp học tập phù hợp cho mình, giáo dục các giá trị sống, tình yêu thương, sự tự hào về
            bản thân, quê hương đất nước cũng như tiếp cận dần với sự đa dạng văn hóa trên thế giới. Việc giáo dục, rèn
            luyện gắn liền với các giá trị “Có trách nhiệm, Biết yêu thương, Tự lập, Hợp tác” đã trở thành văn hóa hành
            xử và giá trị cốt lõi của học sinh Sky-Line.
          </p>

          <div className="container-button-curriculum-post">
            <Link
              className="button-link-curriculum-post"
              href="/chuong-trinh-dao-tao/trung-hoc-pho-thong/he-hoi-nhap-s"
            >
              Hệ hội nhập S
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              className="button-link-curriculum-post"
              href="/chuong-trinh-dao-tao/trung-hoc-pho-thong/he-hoi-nhap-global"
            >
              Hệ hội nhập Global
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
            <Link className="button-link-curriculum-post" href="/chuong-trinh-dao-tao/trung-hoc-pho-thong/he-song-bang">
              Hệ hội song bằng
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
            CẤU TRÚC CHƯƠNG TRÌNH TIỂU HỌC
            <div className="border-sub-title-curriculum-post" />
          </h3>
          <Image src={Images.tieuhoc1} alt="hinh-anh-content-post" />
          <div className="h-12" />

          <h3 className="sub-title-curriculum-post">
            CÁC CHƯƠNG TRÌNH GIÁO DỤC BẢN THÂN
            <div className="border-sub-title-curriculum-post" />
          </h3>
          <p className="tag-p-curriculum-post">
            Nhằm chuẩn bị cho học sinh những nền tảng thiết yếu để trở thành những công dân, những nhà lãnh đạo tương
            lai, Sky-Line triển khai Chương trình Phát triển Năng lực thế kỉ 21, dựa trên khung tiếp cận tư duy toàn cầu
            của Trường Cao học Giáo dục Harvard. 
          </p>
          <div className="h-3" />
          <Image src={Images.tieuhoc2} alt="hinh-anh-content-post" />
          <div className="h-3" />

          <p>
            <strong>Giáo dục Cảm xúc xã hội (SEL) tại Sky-Line</strong> là một chương trình giáo dục đặc biệt, được
            thiết kế dựa trên chương trình SEE Learning của Đại học Emory, Hoa Kỳ. Chương trình này tập trung vào việc
            phát triển các kỹ năng xã hội và cảm xúc, giúp học sinh có khả năng tự nhận thức và quản lý cảm xúc của
            mình, đồng thời xây dựng mối quan hệ tích cực với người khác. Môn học SEL tại Sky-Line không chỉ đề cao giáo
            dục về mặt kiến thức mà còn chú trọng vào việc hình thành và phát triển nhân cách, giúp học sinh trở thành
            công dân toàn cầu có trách nhiệm và nhạy bén với các vấn đề xã hội. Chương trình này kết hợp các phương pháp
            giảng dạy sáng tạo và tương tác, bao gồm cả hoạt động ngoại khóa và dự án thực tiễn, để học sinh có thể áp
            dụng kiến thức vào thực tế cuộc sống.
            <br /> <br />
            <strong> Chương trình Cố vấn học tập: </strong> Học sinh được phát triển các kĩ năng, phương pháp học tập
            hiệu quả thông qua các tuần lễ định hướng đầu năm, các buổi tập huấn chuyên đề, và các buổi tư vấn 1:1 với
            đội ngũ cố vấn học tập.
            <br /> <br />
            <strong> Chương trình Cố vấn phát triển: </strong> Học sinh từ khối 6 trở lên sẽ có 01 tiết hướng
            nghiệp/tuần. Bên cạnh đó, học sinh được tham vấn về các vấn đề phát triển năng lực cá nhân, cảm xúc, tâm lý,
            và định hướng nghề nghiệp thông qua các sự kiện, chuyên đề, và các buổi tư vấn 1:1 với đội ngũ cố vấn phát
            triển.
            <br /> <br />
            <strong> Các chương trình phát triển Năng lực Thế kỉ 21: </strong> là một sáng kiến giáo dục khác biệt của
            Sky-Line, được thiết kế để trang bị cho học sinh các kỹ năng thiết yếu và hiện đại, giúp các em thành công
            trong một thế giới ngày càng phức tạp và liên tục thay đổi. Tổ hợp các môn kỹ năng mềm bao gồm: Quản lý thời
            gian, Quản lý dự án, Giáo dục tài chính cá nhân, Tư duy Thiết kế (Design Thinking).
            <br /> <br />
            <strong> Chương trình Thể chất: </strong> Học sinh được đăng ký môn thể thao, thể dục mình yêu thích như cầu
            lông, bơi lội, bóng đá, bóng rổ… Môn học cụ thể được sắp xếp theo điều kiện cơ sở vật chất của từng cơ sở
            trường và điều kiện thời tiết. Với sự linh hoạt trong việc lựa chọn môn học của mình, các em thỏa sức vận
            động và rèn luyện tinh thần đồng đội, hợp tác.
            <br /> <br />
            <strong> Chương trình Âm nhạc: </strong>  Được coi là môn học quan trọng xuyên suốt bậc Phổ thông. Ngoài
            việc học nhạc cụ (đàn, sáo…), nhạc lý, các em còn tham gia tổ chức và biểu diễn trên nhiều sân khấu và sự
            kiện của Hệ thống. Các sự kiện thường xuyên của trường là cơ hội để các em thực hành với âm nhạc và tự tin
            trước trước công chúng.
            <br /> <br />
            <strong> Chương trình Mĩ thuật: </strong> Môn học yêu thích của học sinh Sky-Line được thực hành qua những
            tiết học linh hoạt. Học sinh thực hiện hoạt động vẽ, thủ công trên nhiều chất liệu, vẽ với các ứng dụng phần
            mềm trên máy tính. Sự sáng tạo của các em luôn được khuyến khích khơi nguồn từ những bài học đơn giản nhất.
            <br /> <br />
            <strong> Hội đồng Học sinh: </strong> Học sinh được trao quyền để lên kế hoạch, tổ chức và cải tiến các hoạt
            động tạo tác động bền vững trong và ngoài nhà trường. Qua đó, học sinh hình thành và phát triển ý thức trách
            nhiệm đối với bản thân, tập thể, gia đình, và các cộng đồng xung quanh.
            <br /> <br />
            <strong> Các dự án tạo tác động xã hội: </strong> Hằng năm, cộng đồng cán bộ, giáo viên, học sinh và phụ
            huynh Sky-Line khởi xướng và tham gia vào hơn 30 dự án, chung tay tạo tác động xã hội, góp phần cải thiện
            đời sống về vật chất và tinh thần của nhiều cộng đồng địa phương.
          </p>
        </div>
      </div>
      <div className="pb-[7.5rem]">
        <TrainingProgram isShowTitle={false} />
      </div>
    </div>
  )
}
export default PrimarySchool
