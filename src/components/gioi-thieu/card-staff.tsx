import Image, { StaticImageData } from "next/image"

interface CardStaffProps {
  name: string
  imageUrl: StaticImageData
  description: string
  position: string
}

const CardStaff = ({ name, imageUrl, description, position }: CardStaffProps) => {
  return (
    <div className="w-[17.625rem] h-fit bg-white-tertiary py-12 px-6 rounded-xl">
      <div className="flex items-center flex-col gap-6">
        <div className="relative h-[7.4375rem] w-[7.4375rem] rounded-xl">
          <Image
            src={imageUrl}
            alt="banner"
            fill={true}
            className="rounded-2xl object-cover"
            sizes="33vw"
            quality={70}
          />
        </div>
        <div className="flex flex-col gap-1 text-center">
          <div className="text-base font-semibold">{name}</div>
          <div className="text-base leading-5.5 text-gray-secondary">{position}</div>
        </div>
        <div className="text-center text-sm text-gray">{description}</div>
      </div>
    </div>
  )
}

export default CardStaff
