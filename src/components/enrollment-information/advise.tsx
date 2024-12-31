import Link from "next/link"

const Adsive = () => {
  return (
    <div className="container">
      <div className="px-[16.125rem] mb-25">
        <div className="pb-[1rem]">
          <span className="leading-5 text-[0.875rem] font-bold ">
            Để được tư vấn cụ thể hơn về các chính sách ưu đãi, Quý Phụ huynh vui lòng:
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-normal italic leading-5 text-[0.875rem]">
            - Liên hệ trực tiếp đến Văn phòng Tư vấn hoặc qua
            <Link href="#" className="underline">
              hotline tại các cơ sở
            </Link>
          </span>
          <span className="font-normal italic leading-5 text-[0.875rem]">
            - Hoặc điền thông tin tại
            <Link href="#" className="underline">
              Tuyển sinh trực tuyến,
            </Link>
            chuyên viên tư vấn giáo dục Sky-Line sẽ liên hệ đến Quý Phụ huynh.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Adsive
