import Link from "next/link"

interface NotFoundProps {
  dict?: any
}

export default function NotFound({ dict }: NotFoundProps) {
  return (
    <div className="h-[50vh] justify-center flex flex-col align-middle items-center gap-6">
      <h1 className="text-8xl font-bold ">404</h1>
      <h2 className="text-xl ">Page not found</h2>
      <Link
        href="/"
        className="px-6 py-2 rounded-full bg-labs-primary text-white hover:bg-white hover:text-labs-primary border border-labs-primary transition duration-300"
      >
        Back Home
      </Link>
    </div>
  )
}
