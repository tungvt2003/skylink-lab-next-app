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
    {
      title: "Hệ Mầm non Song ngữ",
      url: "/chuong-trinh-dao-tao/mam-non/he-mam-non-song-ngu",
    },
  ]

  return (
    <div className="container">
      <BreadCrumb items={configBreadCrum} />
      <div className="container-curriculum-post">
        <h2 className="title-curriculum-post">hệ mầm non song ngữ</h2>

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
            Hệ Mầm non Song ngữ Sky-Line là chương trình tiếp cận tổng thể và toàn diện nhằm chuẩn bị hành trang cho trẻ
            trên con đường hội nhập và làm chủ thế giới tương lai - nơi mỗi trẻ em được khuyến khích phát triển tiềm
            năng cá nhân thông qua một môi trường học tập trải nghiệm, sáng tạo và đa văn hóa
          </p>
          <p className="tag-p-curriculum-post">
            Chương trình được triển khai theo phương pháp tư duy toàn cầu với mục tiêu giáo dục tổng thể giúp trẻ mầm
            non:
          </p>
          <ul>
            <li>Được nuôi dưỡng sự tò mò, khơi dậy và vun đắp tình yêu khám phá, học tập;</li>
            <li>
              Được khuyến khích phát triển tiềm năng cá nhân thông qua môi trường học tập trải nghiệm, sáng tạo và đa
              văn hóa.
            </li>
          </ul>
          <p className="tag-p-curriculum-post">Các điểm nổi trội của Hệ Mầm non Song ngữ Sky-Line:</p>

          <div className="h-12" />

          <Image src={Images.mamNonSongNgu} alt="hinh-anh-content-post" />

          <div className="h-3" />

          <h3 className="sub-title-curriculum-post">
            CHƯƠNG TRÌNH VIỆT NAM
            <div className="border-sub-title-curriculum-post" />
          </h3>

          <p className="tag-p-curriculum-post">
            - Học chương trình quốc tế với chi phí Việt Nam <br /> - Đáp ứng yêu cầu đầu vào của nhiều chương trình quốc
            tế ở nhiều quốc gia khác nhau <br /> - Giảm áp lực bằng cấp <br /> - Phát triển nhiều kỹ năng cá nhân (độc
            lập, tự giải quyết vấn đề, tư duy phản biện…) và năng lực xã hội (làm việc nhóm, giao tiếp, lãnh đạo…)
            <br /> - Linh hoạt lựa chọn chuyên ngành khác nhau trong tương lai <br /> - Lĩnh hội văn hóa quốc tế
          </p>

          <div className="h-12" />

          <h3 className="sub-title-curriculum-post">
            CHƯƠNG TRÌNH QUỐC TẾ IEYC
            <div className="border-sub-title-curriculum-post" />
          </h3>

          <p className="tag-p-curriculum-post">
            Chương trình International Early Years Curriculum (IEYC) được thiết kế và chuyển giao bởi Fieldwork
            Education (Anh Quốc), là chương trình giáo dục đầu đời tiên tiến, lấy học sinh làm trung tâm, đang được áp
            dụng rộng rãi tại gần 50 quốc gia trên thế giới. Thông qua các hoạt động học tập trải nghiệm, trẻ được
            khuyến khích phát triển kỹ năng thực tế và tương tác với thế giới xung quanh. Trẻ không chỉ học hỏi thông
            qua trò chơi mà còn được dạy cách tự quản lý và làm việc nhóm.
          </p>

          <p className="tag-p-curriculum-post">Bốn trụ cột phát triển của chương trình IEYC:</p>
          <ul>
            <li>
              Năng lực giao tiếp: Phát triển toàn diện các kỹ năng giao tiếp cho trẻ bao gồm phát triển trí thông minh
              ngôn ngữ sớm, làm quen với văn học, toán, máy tính và công nghệ thông tin, cảm thụ nghệ thuật và phát huy
              khả năng sáng tạo cho trẻ.
            </li>
            <li>
              Phát triển hài hòa thể chất và tinh thần: Hình thành cho trẻ thái độ tích cực về sức khỏe và cuộc sống,
              biết cách chăm sóc bản thân và rèn luyện thể chất để có cơ thể khỏe mạnh.
            </li>
            <li>
              Năng lực tìm tòi, khám phá: Phát triển các kỹ năng học tập cho trẻ thông qua các hoạt động trải nghiệm
              khám phá con người và thế giới xung quanh trẻ.
            </li>
            <li>
              Tính độc lập cá nhân và quan hệ xã hội: Giúp trẻ phát triển và hình thành các phẩm chất, năng lực cá nhân
              theo chỉ số phát triển năng lực cho trẻ mầm non toàn cầu: ham học hỏi, thích ứng, kiên định, đạo đức, giao
              tiếp, biết quan tâm chia sẻ, hợp tác và tôn trọng.
            </li>
          </ul>

          <div className="container-button-curriculum-post">
            <Link className="button-link-curriculum-post" href={""}>
              Chương trình IEYC 
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="h-12" />

          <h3 className="sub-title-curriculum-post">
            CHƯƠNG TRÌNH TOÁN MATIFIC
            <div className="border-sub-title-curriculum-post" />
          </h3>

          <p className="tag-p-curriculum-post">
            Matific được sáng lập bởi các nhà Toán học người Do Thái đang làm việc tại các đơn vị uy tín (Viện Toán học
            Einstein, Đại học Stanford, Đại học Harvard, Đại học California tại Berkeley). Matific giúp học sinh rèn
            luyện tư duy thông qua việc vui chơi với Toán một cách quy củ, bài bản, và thích ứng, tuỳ theo mức độ phát
            triển của từng em. Thông qua các trò chơi Toán học được cá nhân hoá và các hướng dẫn của giáo viên, học sinh
            có thể:
          </p>

          <ul>
            <li>
              Hiểu rõ các bản chất, khái niệm toán học trong đời sống hàng ngày, thông qua quá trình tìm hiểu và quan
              sát các bài tập từ rất cụ thể cho tới cực kì trừu tượng.
            </li>
            <li>
              Hình thành năng lực tư duy phản biện và kĩ năng giải quyết vấn đề. Thông qua các bài toán gắn liền với
              cuộc sống hàng ngày, trẻ không chỉ hiểu về các khái niệm và cách giải các bài toán, mà còn được thúc đẩy
              đưa ra những câu hỏi như "Khi nào thì áp dụng cách này?", "Cần phải làm gì để có được kết quả này?"...
            </li>
            <li>
              Phát triển linh hoạt với năng lực của bản thân. Bất cứ thời gian, địa điểm nào, trẻ đều có thể tiếp cận
              với các thử thách toán học phù hợp với khả năng của bản thân. Các em cũng sẽ nhận được các nhận xét và gợi
              ý được cá nhân hóa cho chính mình.
            </li>
          </ul>

          <p className="tag-p-curriculum-post">
            Bên cạnh đó, nhờ có các công cụ theo dõi tiến trình và đánh giá, giáo viên và phụ huynh có thể dễ dàng xác
            định các vấn đề cụ thể trong quá trình học của học sinh, từ đó điều chỉnh phương pháp giảng dạy hoặc hỗ trợ
            các em khi cần thiết.
          </p>

          <div className="container-button-curriculum-post">
            <Link className="button-link-curriculum-post" href={""}>
              Chương trình Toán Matific
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="h-12" />

          <h3 className="sub-title-curriculum-post">
            CHƯƠNG TRÌNH STEM EiE
            <div className="border-sub-title-curriculum-post" />
          </h3>

          <p className="tag-p-curriculum-post">
            Đối tác: Là một bộ phận của Đại học Cambridge, cung cấp các chứng chỉ tiếng Anh quốc tế và có uy tín trên
            toàn cầu.
            <br /> Phương pháp và học liệu Chương trình Cambridge (Cambridge Assessment English, Đại học Cambridge),
            giúp trẻ tiếp cận tiếng Anh theo cách tự nhiên nhất, qua đó nâng cao năng lực ngôn ngữ, giao tiếp, và sự tự
            tin khi sử dụng tiếng Anh, kiến tạo bước đệm vững chắc cho hành trình giáo dục toàn cầu sau này. Tiêu chuẩn
            tiếng Anh Cambridge được công nhận bởi hầu hết các quốc gia trên thế giới. Chương trình Tiếng Anh này được
            nhất quán và xuyên suốt trong các cấp học của hệ thống giáo dục Sky-Line.
          </p>

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
      </div>
      <div className="pb-[7.5rem]">
        <TrainingProgram isShowTitle={false} />
      </div>
    </div>
  )
}
export default Kindergarten
