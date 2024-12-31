import TrainingProgram from "@/components/home/training-program"
import { Images } from "@/constants/images"
import Image from "next/image"
import Link from "next/link"

const Grader1Nursery = () => {
  return (
    <div className="container">
      <div className="flex flex-col gap-12 pt-[7.75rem] items-center">
        <div>
          <span className="font-semibold text-[2rem] leading-12 uppercase">vườn ươm bé vào lớp 1</span>
        </div>
        <div>
          <Image src={Images.nursery} alt="mamNon2" className="object-cover w-[57.875rem] h-[29.5rem] rounded-xl" />
        </div>
        <div className=" flex flex-col gap-12 px-[358px]">
          <span className="font-normal text-base leading-6">
            Bước vào lớp 1, đánh dấu một bước ngoặt diệu kỳ trong cuộc đời mỗi đứa trẻ, mở cánh cửa tri thức chào đón
            các em bước vào môi trường học tập mới, nơi ươm mầm cho những ước mơ và khát vọng tương lai.
            <br />
          </span>
          <span className="font-normal text-[1rem] leading-6">
            Hành trình này có thể sẽ có chút bỡ ngỡ, rụt rè ban đầu, nhưng cũng tràn đầy sự phấn khởi và thích thú trước
            không gian học tập mới mẻ cùng các thầy cô và bạn bè mới. Để con yêu có thể tự tin bước vào lớp 1, cha mẹ
            cần chuẩn bị cho con một cách toàn diện.
            <br />
          </span>
          <span className="font-normal text-[1rem] leading-6">
            Đặc biệt đến với chương trình “Vườn ươm bé vào lớp 1” các con sẽ được làm quen với Thế giới số học, nơi mỗi
            con số là một bí mật thú vị chờ con khám phá; cùng nhau giải mã những thử thách, phát triển tư duy và kỹ
            năng giải quyết vấn đề. Tiếp xúc Tiếng Anh qua các trò chơi, bài hát và hoạt động học với thiên nhiên. Rèn
            luyện sức khoẻ, phát triển thể chất và tìm hiểu điều kỳ diệu quanh ta qua mỗi hoạt động ngoại khoá. Đồng
            thời trau dồi các kỹ năng cần thiết cho bé vào lớp 1 như khả năng tập trung, ghi nhớ, tự lập và phản xạ giao
            tiếp. Các bé sẽ được học cùng đội ngũ giáo viên giàu kinh nghiệm và tâm huyết, trong môi trường an toàn,
            năng động và tràn ngập tiếng cười trẻ thơ.
          </span>
          <div>
            <div>
              <span className="sub-title-curriculum-post">
                MỤC TIÊU GIÁO DỤC TOÀN DIỆN SKY-LINE
                <div className="border-sub-title-curriculum-post" />
              </span>
            </div>
            <div>
              <span className="font-normal text-[1rem] leading-6">
                - Học sinh mẫu giáo lớn sinh năm 2018 chuẩn bị vào lớp 1 tại trường mầm non Sky-Line và các trường mầm
                non khác trong khu vực
                <br />- Phụ huynh đăng ký cho con tham gia tại:
                <Link href="" className="whitespace-pre-wrap break-all">
                  https://forms.office.com/Pages/ResponsePage.aspx?id=hDIknRuAlEi2dUVBZcFHyjUUVPb5DJBBgP185IizlxZUM1M3TkxRNlpNRlg1TVpJVTZTR01aWFlPSi4u
                </Link>
              </span>
            </div>
          </div>
          <div>
            <div>
              <span className="sub-title-curriculum-post">
                THỜI GIAN VÀ ĐỊA ĐIỂM TỔ CHỨC
                <div className="border-sub-title-curriculum-post" />
              </span>
            </div>
            <div>
              <span className="font-normal text-[1rem] leading-6">
                - Thời gian dự kiến: 10/06/2024 - 19/07/2024 (6 tuần)
                <br /> - Địa điểm: Tại phòng học các cơ sở
              </span>
            </div>
          </div>
          <div>
            <div>
              <span className="sub-title-curriculum-post">
                HÌNH THỨC TỔ CHỨC
                <div className="border-sub-title-curriculum-post" />
              </span>
            </div>
            <div>
              <span className="font-normal text-[1rem] leading-6">Dạy học trực tuyến</span>
            </div>
          </div>
          <div>
            <div>
              <span className="sub-title-curriculum-post">
                THỜI GIAN BIỂU DỰ KIẾN
                <div className="border-sub-title-curriculum-post" />
              </span>
            </div>
            <div>
              <Image
                src={Images.timeTable}
                alt="timeTable"
                className="object-cover w-[45.938rem] h-[48.063rem] rounded-xl"
              />
            </div>
          </div>
          <div>
            <div>
              <span className="sub-title-curriculum-post">
                HỌC PHÍ VÀ ƯU ĐÃI
                <div className="border-sub-title-curriculum-post" />
              </span>
            </div>
            <div>
              <span className="font-normal text-[1rem] leading-6">- Học phí: 7.400.000 đồng/Học sinh/Khóa</span>
              <br />
              <span className="font-normal text-[1rem] leading-6">
                - Phí CSVC: 750.000 đồng/Học sinh/Khóa (Áp dụng học sinh mới)
              </span>
              <br />
              <span className="font-normal text-[1rem] leading-6">
                Ưu đãi: Miễn phí 100% đối với học sinh đang theo học năm học 2023-2024 và học sinh nhập học mới năm học
                2024-2025 tham gia đóng một trong các khoản phí: phí giữ chỗ, phí CSVC đầu năm, học phí năm học
                2024-2025.
              </span>
              <br />
              <span className="font-normal text-[1rem] leading-6">
                - Phí dịch vụ: Áp dụng theo biểu phí dịch vụ lớp 1 năm học 2024-2025 
              </span>
              <br />
              <span className="font-normal text-[1rem] leading-6">* Ưu đãi khoá học:</span>
              <br />
              <span className="font-normal text-[1rem] leading-6">
                 - Ưu đãi 100% học phí khoá "Vườn ươm bé vào lớp 1" đối với học sinh hoàn thành việc đăng ký và đóng phí
                cả năm học 2024-2025 trước ngày 31.03.2024
              </span>
              <br />
              <span className="font-normal text-[1rem] leading-6">
                 - Ưu đãi 50% học phí khoá "Vườn ươm bé vào lớp 1" đối với học sinh hoàn thành việc đăng ký và đóng phí
                cả năm học 2024-2025 trước ngày 31.05.2024
              </span>
              <br />
              <span className="font-normal text-[1rem] leading-6">
                 - Ưu đãi 10% học phí khoá "Vườn ươm bé vào lớp 1" đối với học sinh hoàn thành việc đăng ký và đóng toàn
                bộ phí khóa học trước ngày 25.05.2024
              </span>
              <span className="font-normal text-[1rem] leading-6">
                Tại Sky-Line, mỗi ngày học là một ngày lớn lên của những bông hoa nhỏ, mỗi bài học là một bước tiến mới
                trên con đường khám phá thế giới rộng lớn và kỳ diệu. Hãy để Sky-Line đồng hành cùng con trên hành trình
                diệu kỳ này, giúp con tự tin bước vào lớp 1 và gặt hái nhiều thành công trong tương lai!
              </span>
              <br />
            </div>
          </div>
        </div>
        <div className="pb-[7.5rem]">
          <TrainingProgram isShowTitle={false} />
        </div>
      </div>
    </div>
  )
}

export default Grader1Nursery
