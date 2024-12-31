import Link from "next/link"

interface NotFoundProps {
  dict?: any
}

export default function NotFound({ dict }: NotFoundProps) {
  return (
    <div className="h-[50vh] justify-center flex flex-col align-middle items-center gap-6">
      <h1 className="text-8xl font-bold ">404</h1>
      <h2 className="text-xl ">Không tìm thấy trang</h2>
      <Link
        href="/"
        className="px-6 py-2 rounded-md bg-green text-white hover:bg-white hover:text-green border border-green transition duration-300"
      >
        Trở về trang chủ
      </Link>
    </div>
  )
}
