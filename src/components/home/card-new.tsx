import Image, { StaticImageData } from "next/image"
import Link from "next/link"

interface CardProps {
  imageUrl: StaticImageData
  title: string
  date: string
  link: string
}

const CardNew = ({ imageUrl, title, date, link }: CardProps) => {
  return (
    <Link href={link} className="flex flex-row gap-[1.375rem]">
      <div className="py-5 flex gap-6 flex-col">
        <div className="text-2xl font-semibold">{title}</div>
        <div className="text-base text-black-tertiary">{date}</div>
      </div>
      <div>
        <div className="relative h-[9.5rem] w-[13.25rem] overflow-hidden">
          <Image
            src={imageUrl}
            alt="imageStaff"
            fill={true}
            className="rounded-2xl object-cover"
            sizes="33vw"
            quality={70}
          />
        </div>
      </div>
    </Link>
  )
}

export default CardNew
