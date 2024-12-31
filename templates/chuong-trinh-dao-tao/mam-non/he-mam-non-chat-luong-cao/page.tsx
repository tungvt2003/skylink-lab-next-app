import BreadCrumb from "@/components/breadcrumb"
import TrainingProgram from "@/components/home/training-program"
import { Images } from "@/constants/images"
import Image from "next/image"

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
    {
      title: "Hệ mầm non chất lượng cao",
      url: "/chuong-trinh-dao-tao/mam-non/he-mam-non-chat-luong-cao",
    },
  ]

  return (
    <div className="container">
      <BreadCrumb items={configBreadCrum} />
      <div className="container-curriculum-post">
        <h2 className="title-curriculum-post">Hệ mầm non chất lượng cao</h2>

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
            Hệ Mầm non Chất lượng cao Sky-Line được giảng dạy theo chương trình của Bộ Giáo dục & Đào tạo Việt Nam, kết
            hợp với hướng tiếp cận Reggio Emilia và các chương trình đặc thù do Sky-Line xây dựng. Chương trình nhằm
            mang đến cho trẻ một nền tảng vững chắc về ngôn ngữ, nhận thức, tình cảm, thể chất và thẩm mỹ, đồng thời
            khơi gợi trí tò mò và tiềm năng sáng tạo vô tận của trẻ.
          </p>

          <div className="h-12" />

          <Image src={Images.mamNonClc1} alt="hinh-anh-content-post" />

          <div className="h-3" />

          <h3 className="sub-title-curriculum-post">
            MÔI TRƯỜNG HỌC TẬP VĂN MINH
            <div className="border-sub-title-curriculum-post" />
          </h3>

          <p className="tag-p-curriculum-post">
            Với kinh nghiệm nhiều năm hợp tác và phát triển chương trình giáo dục với các đối tác quốc tế, đội ngũ
            Sky-Line đã thấm nhuần môi trường giao tiếp và ứng xử văn minh. Sky-Line là nơi trẻ em được:
          </p>

          <div className="h-3" />

          <Image src={Images.mamNonClc2} alt="hinh-anh-content-post" />

          <div className="h-12" />

          <h3 className="sub-title-curriculum-post">
            CÁC PHẨM CHẤT CỦA HỌC SINH MẦM NON SKY-LINE
            <div className="border-sub-title-curriculum-post" />
          </h3>

          <Image src={Images.mamNonClc3} alt="hinh-anh-content-post" />

          <div className="h-12" />

          <h3 className="sub-title-curriculum-post">
            ĐIỂM NỔI TRỘI CỦA HỆ MẦM NON CHẤT LƯỢNG CAO SKY-LINE
            <div className="border-sub-title-curriculum-post" />
          </h3>

          <h4>1. CHƯƠNG TRÌNH GIÁO DỤC MẦM NON VIỆT NAM</h4>
          <p>
            Chương trình Giáo dục Mầm non tổng thể do Bộ Giáo dục và Đào tạo ban hành và liên tục cải tiến, giúp trẻ
            phát triển nền tảng cơ bản nhất về ngôn ngữ, toán học, khoa học tự nhiên và xã hội, đồng thời nuôi dưỡng
            tình yêu quê hương và niềm tự hào dân tộc.
          </p>
          <br />
          <h4>2. HƯỚNG TIẾP CẬN REGGIO EMILIA</h4>
          <p>
            Hướng tiếp cận Reggio Emilia có nguồn gốc từ thành phố Reggio Emilia, Ý. Phương pháp này khuyến khích trẻ em
            được tham gia hoạt động tạo hình và thể hiện ý tưởng thông qua nhiều hình thức khác nhau như vẽ, điêu khắc,
            chụp ảnh, phóng đại hình ảnh và sáng tạo đồ chơi… Hướng tiếp cận Reggio Emilia đánh giá cao vai trò của trẻ
            em là người tạo ra kiến thức, không chỉ là người học kiến thức. Reggio Emilia cũng tập trung vào việc xây
            dựng mối quan hệ giữa trẻ em, giáo viên và gia đình để xây dựng một cộng đồng học tập tích cực và hỗ trợ
            phát triển toàn diện của trẻ
            <br />
            Hướng tiếp cận Reggio Emilia được ứng dụng tích hợp trong các hoạt động của chương trình giáo dục mầm non
            Sky-Line, mang đến cho trẻ một không gian học tập linh hoạt và khuyến khích sự sáng tạo, tò mò, ham học hỏi
            và tự tin của trẻ.
          </p>
          <br />
          <Image src={Images.mamNonClc4} alt="hinh-anh-content-post" />
          <br />
          <h4>3. CHƯƠNG TRÌNH TIẾNG ANH CAMBRIDGE</h4>
          <p>
            Đối tác:là một bộ phận của Đại học Cambridge, cung cấp các chứng chỉ tiếng Anh quốc tế và có uy tín trên
            toàn cầu.
            <br />
            Phương pháp và học liệu Chương trình Cambridge (Cambridge Assessment English, Đại học Cambridge), giúp trẻ
            tiếp cận tiếng Anh theo cách tự nhiên nhất, qua đó nâng cao năng lực ngôn ngữ, giao tiếp, và sự tự tin khi
            sử dụng tiếng Anh, kiến tạo bước đệm vững chắc cho hành trình giáo dục toàn cầu sau này. Tiêu chuẩn tiếng
            Anh Cambridge được công nhận bởi hầu hết các quốc gia trên thế giới. Chương trình Tiếng Anh này được nhất
            quán và xuyên suốt trong các cấp học của hệ thống giáo dục Sky-Line.
          </p>
          <br />
          <h4>4. DỤC CẢM XÚC XÃ HỘI</h4>
          <p>
            Chương trình Giáo dục Cảm xúc - Xã hội và Đạo đức (Viết tắt là SEE Learning) được xây dựng bởi Đại học
            Emory, Mỹ. Chương trình tập trung vào việc giúp học sinh từ mẫu giáo đến trung học phát triển các kỹ năng
            quản lý cảm xúc, giao tiếp hiệu quả và xây dựng mối quan hệ tích cực dựa trên sự chú tâm, lòng trắc ẩn, tư
            duy hệ thống và khả năng phục hồi, để các em có thể tham gia đóng góp cho cộng đồng địa phương hay toàn cầu
            một cách hiệu quả và tự tin.
            <br />
            Tại bậc mầm non, Sky-Line tập trung vào việc phát triển cho trẻ các kỹ năng cơ bản về cảm xúc, với mục tiêu
            giúp trẻ nhỏ hiểu và xử lý cảm xúc để kết nối tốt hơn với người khác.
          </p>
          <br />
          <h4>5. PHÁT TRIỂN NĂNG KHIỂU - NGHỆ THUẬT</h4>
          <p>
            Chương trình Phát triển Năng khiếu và Nghệ thuật được Sky-Line xây dựng nhằm khuyến khích trẻ phát huy năng
            khiếu và khả năng cảm thụ nghệ thuật. Chương trình chú trọng vào việc kích thích sự sáng tạo và tư duy linh
            hoạt của trẻ thông qua các giờ học năng khiếu (múa và Aerobic, thể dục, yoga, bơi lội, mỹ thuật sáng tạo, âm
            nhạc…) và những hoạt động nghệ thuật được lồng ghép trong các giờ học khác.
          </p>
          <br />
          <h4>6. READY FOR SKY-LINE</h4>
          <p>
            Ready for Sky-Line là chương trình chuẩn bị cho học sinh vào lớp 1, gồm có các buổi dự giờ và học làm quen
            với môi trường Tiểu học. Các giờ học Ready for Sky-Line được tổ chức dành cho lớp Mẫu giáo lớn bởi đội ngũ
            giáo viên Tiểu học trực tiếp phối hợp thực hiện. Đây là giai đoạn quan trọng để trẻ em học được những kỹ
            năng cơ bản trước khi học đọc, viết, tính toán và các kỹ năng xã hội như giao tiếp, hợp tác và chia sẻ.
            <br />
            Một trong những ưu điểm lớn của chương trình tiền tiểu học là giúp học sinh làm quen và phát triển các kỹ
            năng cơ bản này từ sớm. Bằng cách học qua các hoạt động tương tác và học tập thực tế, các em được khuyến
            khích để tìm hiểu, khám phá và học hỏi thêm. Điều này giúp học sinh mầm non Sky-Line trở nên tự tin hơn và
            cảm thấy yêu thích việc học khi bước vào Tiểu học.
          </p>
        </div>
      </div>
      <div className="pb-[7.5rem]">
        <TrainingProgram isShowTitle={false} />
      </div>
    </div>
  )
}
export default Kindergarten
