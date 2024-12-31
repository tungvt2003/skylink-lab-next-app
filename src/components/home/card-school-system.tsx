import Image, { StaticImageData } from "next/image"
import Link from "next/link"

interface CardProps {
  imageUrl: StaticImageData
  title: string
  address: string
  link: string
}

const CardSystemSchool = ({ imageUrl, title, address, link }: CardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-[30.625] transition-opacity duration-500 ease-in-out opacity-100">
      <div className="relative h-[20.375rem] w-full">
        <Image src={imageUrl} alt="banner" fill={true} className="object-cover transition-opacity duration-500" />
      </div>
      <div className="bg-green flex flex-col gap-2.5 pt-6 pb-8 px-[3.3125rem]">
        <h2 className="text-2xl leading-7 font-bold text-center text-white">{title}</h2>
        <p className="text-center text-white text-lg leading-6">{address}</p>
        <div className="flex justify-center">
          <Link
            href={link}
            target="_blank"
            className="text-lg leading-6 px-5 py-4 text-white bg-transparent border border-white rounded-xl hover:bg-white hover:text-green transition-colors duration-300 ease-in-out"
          >
            Link tham quan trực tuyến 360°
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CardSystemSchool
