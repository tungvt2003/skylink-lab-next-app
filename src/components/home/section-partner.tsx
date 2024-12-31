import { Images } from "@/constants/images"
import Image from "next/image"

const SectionPartner = () => {
  return (
    <div className="my-[6.25rem] flex flex-col gap-12">
      <div className="text-4.5xl leading-12 text-center font-bold text-green uppercase">Đối tác</div>
      <div className="flex justify-between">
        <Image src={Images.partnerImage1} alt="partner" height={105} />
        <Image src={Images.partnerImage2} alt="partner" height={105} />
        <Image src={Images.partnerImage1} alt="partner" height={105} />
        <Image src={Images.partnerImage2} alt="partner" height={105} />
        <Image src={Images.partnerImage1} alt="partner" height={105} />
        <Image src={Images.partnerImage2} alt="partner" height={105} />
      </div>
    </div>
  )
}
export default SectionPartner
