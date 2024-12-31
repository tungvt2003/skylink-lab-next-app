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
      title: "Hệ Hội nhập S",
      url: "/chuong-trinh-dao-tao/he-hoi-nhap-s",
    },
  ]

  return (
    <div className="container">
      <BreadCrumb items={configBreadCrum} />
      <div className="container-curriculum-post">
        <h2 className="title-curriculum-post">Hệ Hội nhập S</h2>

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
            Hệ Hội nhập S là sự kết hợp giữa cấu trúc chương trình của Bộ Giáo dục và Đào tạo Việt Nam, chương trình
            Cambridge, và các chương trình khoa học, công nghệ hàng đầu thế giới. Chương trình nhằm mang lại các trải
            nghiệm và hiệu quả học tập tối ưu, giúp học sinh phát triển toàn diện, trở thành những công dân toàn cầu có
            trách nhiệm, sẵn sàng đối mặt và giải quyết những thách thức của thế giới tương lai.
            <br /> Hệ Hội nhập S được triển khai tại các cơ sở Sky-Line Riverside, Sky-Line Central, Sky-Line Hill và
            Sky-Line Beach.
          </p>

          <div className="h-12" />

          <Image src={Images.hoiNhapS1} alt="hinh-anh-content-post" />

          <div className="h-12" />

          <Image src={Images.hoiNhapS2} alt="hinh-anh-content-post" />

          <div className="h-3" />

          <h3 className="sub-title-curriculum-post">
            CHƯƠNG TRÌNH TIẾNG ANH CAMBRIDGE
            <div className="border-sub-title-curriculum-post" />
          </h3>

          <p className="tag-p-curriculum-post">
            Với tổng thời lượng 14 tiết học bằng tiếng Anh mỗi tuần (13 tiết học bằng tiếng Anh/tuần đối với bậc THPT),
            chương trình giáo dục tại Sky-Line giúp cho học sinh từng bước sử dụng tiếng Anh một cách thành thạo, tự
            tin, và thành công trong các chặng đường học tập cũng như phát triển bản thân. 
            <br />
            Từ lớp 1 tới lớp 6, thay vì việc thuần tuý học ngữ pháp và từ mới, chương trình học tại Sky-Line sử dụng
            tiếng Anh như một công cụ để khám phá tri thức về Toán học, Khoa học tự nhiên, và khoa học xã hội. Các em
            cũng bước đầu tìm hiểu về những nền văn hoá trên thế giới qua các giờ học Nghiên cứu về Thế giới (Global
            Studies, tích hợp từ giáo trình của Cambridge). Qua các bài học, hoạt động, và các dự án học tập được triển
            khai bằng tiếng Anh, học sinh có thể phát triển năng lực tư duy sáng tạo và phản biện, sử dụng tiếng Anh tự
            tin, linh hoạt trong học tập cũng như đời sống.
            <br />
            Từ lớp 7 tới lớp 12, học sinh sử dụng tiếng Anh để khám phá thêm nhiều lăng kính về bản thân và thế giới,
            thông qua các giờ học nâng cao về Global Studies và nhập môn về Kinh doanh (Business Studies, tích hợp từ
            giáo trình của Cambridge). Đồng thời, các em cũng được tăng cường các tiết học IELTS mỗi tuần, để đảm bảo
            năng lực tiếng Anh học thuật vững vàng cho các chặng đường tương lai.
            <br />
            Sky-Line tự hào là đối tác của Cambridge English Language Assessment, một trong những tổ chức hàng đầu thế
            giới trong lĩnh vực kiểm định và giảng dạy tiếng Anh. Chương trình tiếng Anh tại Sky-Line được xây dựng dựa
            trên chuẩn quốc tế của Cambridge, bao gồm:
          </p>
          <div className="!h-3" />
          <p className="tag-p-curriculum-post">
            ** Với kinh nghiệm tổ chức giảng dạy và luyện thi chứng chỉ IELTS trong nhiều năm, đội ngũ Giáo viên
            Sky-Line đưa vào nhiều sáng kiến, ứng dụng công nghệ và những học liệu mới nhất để đạt mục tiêu trên 80% học
            sinh bậc Trung học phổ thông được miễn thi môn tiếng Anh & được quy đổi chúng chỉ IELTS sang điểm 10 môn
            Tiếng Anh trong kỳ thi tốt nghiệp THPT Quốc Gia.
          </p>
          <div className="h-3" />
          <Image src={Images.hoiNhapS3} alt="hinh-anh-content-post" />

          <div className="h-12" />

          <h3 className="sub-title-curriculum-post">
            TOÁN HỌC
            <div className="border-sub-title-curriculum-post" />
          </h3>

          <p className="tag-p-curriculum-post">
            Chương trình Toán học Sky-Line là hệ thống các bước luyện tập quy củ, bài bản, cá nhân hoá, mà qua đó, mỗi
            học sinh được từng bước nâng cao năng lực tư duy, đáp ứng các tiêu chuẩn đầu ra của Bộ Giáo dục và Đào tạo
            Việt Nam, cũng như các tiêu chuẩn Common Cores (Hoa Kỳ). Phương pháp tiếp cận Giáo dục Toán thực (Realistic
            Mathematics Education) giúp học sinh:
            <br />
            - Hiểu rõ bản chất các khái niệm, phương pháp Toán học thông qua các bài toán thực tế, tìm hiểu và quan sát
            các bài tập từ rất cụ thể cho tới cực kì trừu tượng.
            <br />
            - Hình thành năng lực tư duy phản biện và kĩ năng giải quyết vấn đề. Học sinh không chỉ hiểu về khái niệm và
            cách giải các bài toán, mà còn được thúc đẩy đưa ra những câu hỏi như "Khi nào thì áp dụng cách này?", "Cần
            phải làm gì để có được kết quả này?"…
            <br />
            Bên cạnh hệ thống giáo trình tiêu chuẩn, Sky-Line kết hợp các ứng dụng công nghệ,
            <br />
            trí tuệ nhân tạo (AI) nhằm hỗ trợ cá nhân hoá, giúp giáo viên và phụ huynh theo dõi, đánh giá và hỗ trợ từng
            vấn đề của từng học sinh trong quá trình phát triển năng lực Toán học.
            <br />
            - Hệ thống LMS Canvas: Dành cho học sinh từ lớp 4 tới lớp 12.
            <br />
            - Ứng dụng Matific - nền tảng học Toán được sáng lập bởi các nhà Toán học người Do Thái đang công tác tại
            các đơn vị uy tín (Viện Toán học Einstein, Đại học Stanford, Đại học Harvard, Đại học California tại
            Berkeley): Dành cho học sinh từ lớp 1 tới lớp 4.
            <br />
            - Và các hệ thống tài nguyên, công cụ bổ trợ khác như: Math Games, Khan Academy, Mathigon, Math Cilenia.
            <br />
          </p>

          <div className="h-12" />

          <h3 className="sub-title-curriculum-post">
            NGỮ VĂN - TIẾNG VIỆT
            <div className="border-sub-title-curriculum-post" />
          </h3>

          <p className="tag-p-curriculum-post">
            Chương trình Ngữ Văn - Tiếng Việt Sky-Line giúp học sinh từng bước làm chủ và phát triển các năng lực tư duy
            và sử dụng ngôn ngữ tiếng Việt, thông qua cách tiếp cận kiến tạo:
            <br />
            Đối với môn tiếng Việt:
            <br />
            - Sử dụng các thao tác ngữ âm để học cách đọc và ghi âm tiếng Việt.
            <br />
            - Hiểu được sự phát triển, cách cấu tạo và cách sử dụng từ tiếng Việt.
            <br />
            - Hiểu các luật về câu trên tinh thần cú pháp học, vận dụng vào việc tạo ra và dùng câu đúng ngữ pháp và
            đúng logic.
            <br />
            - Có khả năng tạo lập văn bản nghị luận bằng tiếng Việt để trình bày và bảo vệ quan điểm của mình về các vấn
            đề trong đời sống, học tập.
            <br />
            Đối với môn Ngữ Văn:
            <br />
            - Xây dựng, bồi dưỡng lòng đồng cảm - nền tảng cho cảm xúc nghệ thuật.
            <br />
            - Học và rèn luyện kĩ năng tưởng tượng, liên tưởng để hiểu, khám phá, và tạo ra các hình tượng nghệ thuật
            qua các phương thức đa dạng như thơ, văn xuôi, kịch, âm nhạc...
            <br />
            - Vận dụng các thao tác nghệ thuật để lý giải cảm hứng ra đời, giải mã tác phẩm nghệ thuật thuộc các loại
            hình khác nhau.
            <br />- Nghiên cứu tác phẩm kinh điển để học cách tiếp cận khoa học về nghệ thuật
          </p>

          <div className="h-12" />

          <h3 className="sub-title-curriculum-post">
            KHOA HỌC TỰ NHIÊN
            <div className="border-sub-title-curriculum-post" />
          </h3>

          <p className="tag-p-curriculum-post">
            Chương trình tập trung vào việc học thông qua thực nghiệm, ứng dụng thực tế và trải nghiệm tương tác, nhằm
            phát triển niềm đam mê khoa học cho học sinh:
            <br />
            Giai đoạn Khởi đầu (Lớp 1-3): Nuôi dưỡng sự tò mò, tình yêu khám phá và hình thành các hiểu biết cơ bản về
            khoa học tự nhiên, với học liệu từ National Geographic Kids và NASA Kids' Club.
            <br />
            Giai đoạn Bồi đắp (Lớp 4-6): Phát triển năng lực khám phá qua các phương pháp tiếp cận cấu trúc và hệ thống,
            với các nội dung phổ quát hơn, sử dụng chương trình khoa học quốc tế của Cambridge và Pearson.
            <br />
            Giai đoạn Củng cố và Định hướng (Lớp 7-10): Bước đầu hình thành năng lực nghiên cứu khoa học thông qua việc
            đào sâu nghiên cứu các chủ đề khoa học tự nhiên chuyên biệt.
            <br />
            Giai đoạn Toả sáng (Lớp 11-12): Phát triển năng lực nghiên cứu khoa học, khả năng xây dựng và kiểm thử các
            giả thuyết khoa học, sẵn sàng cho quá trình học tập và nghiên cứu ở các bậc học cao hơn.
            <br />
          </p>

          <div className="h-12" />

          <h3 className="sub-title-curriculum-post">
            KHOA HỌC TỰ NHIÊN
            <div className="border-sub-title-curriculum-post" />
          </h3>

          <p className="tag-p-curriculum-post">
            Chương trình tập trung vào việc học thông qua thực nghiệm, ứng dụng thực tế và trải nghiệm tương tác, nhằm
            phát triển niềm đam mê khoa học cho học sinh:
            <br />
            Giai đoạn Khởi đầu (Lớp 1-3): Nuôi dưỡng sự tò mò, tình yêu khám phá và hình thành các hiểu biết cơ bản về
            khoa học tự nhiên, với học liệu từ National Geographic Kids và NASA Kids' Club.
            <br />
            Giai đoạn Bồi đắp (Lớp 4-6): Phát triển năng lực khám phá qua các phương pháp tiếp cận cấu trúc và hệ thống,
            với các nội dung phổ quát hơn, sử dụng chương trình khoa học quốc tế của Cambridge và Pearson.
            <br />
            Giai đoạn Củng cố và Định hướng (Lớp 7-10): Bước đầu hình thành năng lực nghiên cứu khoa học thông qua việc
            đào sâu nghiên cứu các chủ đề khoa học tự nhiên chuyên biệt.
            <br />
            Giai đoạn Toả sáng (Lớp 11-12): Phát triển năng lực nghiên cứu khoa học, khả năng xây dựng và kiểm thử các
            giả thuyết khoa học, sẵn sàng cho quá trình học tập và nghiên cứu ở các bậc học cao hơn.
            <br />
          </p>

          <div className="h-12" />

          <h3 className="sub-title-curriculum-post">
            CHƯƠNG TRÌNH ICT VÀ STEM
            <div className="border-sub-title-curriculum-post" />
          </h3>

          <p className="tag-p-curriculum-post">
            Chương trình tập trung vào việc học thông qua thực nghiệm, ứng dụng thực tế và trải nghiệm tương tác, nhằm
            phát triển niềm đam mê khoa học cho học sinh:
            <br />
            Giai đoạn Khởi đầu (Lớp 1-3): Nuôi dưỡng sự tò mò, tình yêu khám phá và hình thành các hiểu biết cơ bản về
            khoa học tự nhiên, với học liệu từ National Geographic Kids và NASA Kids' Club.
            <br />
            Giai đoạn Bồi đắp (Lớp 4-6): Phát triển năng lực khám phá qua các phương pháp tiếp cận cấu trúc và hệ thống,
            với các nội dung phổ quát hơn, sử dụng chương trình khoa học quốc tế của Cambridge và Pearson.
            <br />
            Giai đoạn Củng cố và Định hướng (Lớp 7-10): Bước đầu hình thành năng lực nghiên cứu khoa học thông qua việc
            đào sâu nghiên cứu các chủ đề khoa học tự nhiên chuyên biệt.
            <br />
            Giai đoạn Toả sáng (Lớp 11-12): Phát triển năng lực nghiên cứu khoa học, khả năng xây dựng và kiểm thử các
            giả thuyết khoa học, sẵn sàng cho quá trình học tập và nghiên cứu ở các bậc học cao hơn.
            <br />
          </p>

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
export default HighSchool
