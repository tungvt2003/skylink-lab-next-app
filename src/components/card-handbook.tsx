import { Images } from "@/constants/images"
import Image from "next/image"
import Link from "next/link"

const dataCardFood = [
  {
    title: "Cẩm nang phụ huynh học sinh bậc mầm non",
    image: Images.imageCamNangMN,
  },
  {
    title: "Cẩm nang phụ huynh học sinh bậc tiểu học",
    image: Images.imageCamNangTH,
  },
  {
    title: "Cẩm nang phụ huynh học sinh bậc trung học",
    image: Images.imageCamNangTHCS,
  },
]

const CardHandBook = () => {
  return (
    <div className="grid grid-cols-3 gap-12">
      {dataCardFood.map((item, index) => (
        <Link key={index} href="/goc-phu-huynh/so-tay-phhs/detail" className="flex flex-col gap-6">
          <div className="relative h-[19.75rem] rounded-xl">
            <Image
              src={item.image}
              alt="banner"
              fill={true}
              className="rounded-xl object-cover"
              sizes="33vw"
              quality={70}
            />
          </div>
          <div className="text-black-tertiary flex flex-col items-start gap-3">
            <div className="font-semibold text-2xl text-left">{item.title}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}
export default CardHandBook
