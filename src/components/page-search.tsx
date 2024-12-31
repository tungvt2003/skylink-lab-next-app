"use client"

import { Input } from "antd"
import { useTranslations } from "next-intl"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { configs, DefaultImage } from "../lib/external-components"
import { getSearchPost } from "../lib/navigation-services"

interface Post {
  attributes: {
    slug: string
    image: {
      data: {
        attributes: {
          url: string
        }
      }
    }
    name: string
    publishedAt: string
  }
}
const PageSearch = ({ dict, lang }: { dict: any; lang: string }) => {
  const searchParams = useSearchParams()
  const [quality, setQuality] = useState(0)
  const [lengthData, setLengthData] = useState(0)
  const [posts, setPosts] = useState<Post[]>([])
  const [searchValue, setSearchValue] = useState("")
  const payloadName = searchParams.get("q") || ""
  const t = useTranslations()

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getSearchPost(payloadName)

      setPosts(response)

      setLengthData(response.length)
    }
    fetchPosts()
  }, [payloadName])

  useEffect(() => {
    const handleResize = () => {
      const isDesktopNow = window.innerWidth >= 768

      if (lengthData < 3) {
        setQuality(lengthData)
      } else if (lengthData < 9) {
        setQuality(isDesktopNow ? 6 : 3)
      } else {
        setQuality(isDesktopNow ? 9 : 3)
      }
    }

    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [lengthData])

  return (
    <>
      <div>
        <div className="container flex items-center space-y-3 sm:space-y-0 sm:space-x-5 py-4 px-4 sm:px-40 sm:flex-row flex-col">
          <h2 className="text-base sm:text-xl font-medium whitespace-nowrap">{t("Tìm kiếm bài viết :")}</h2>
          <form action={lang === "vi" ? "/search" : "/en/search"} method="GET" className="w-full cla">
            <Input
              type="text"
              name="q"
              placeholder={t("Tìm kiếm")}
              className="rounded-lg w-full sm:w-96 px-4 py-2 placeholder:text-gray-400 text-sm placeholder:text-sm sm:text-lg sm:placeholder:text-lg hover:border-gray-600 border border-gray-400 focus-within:border-black-tertiary focus-within:ring-0"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              required
            />
          </form>
        </div>
        <div className="flex flex-col items-center justify-center sm:py-4">
          <div className="text-base sm:text-xl font-medium text-black-tertiary">
            {t("Kết quả tìm kiếm cho")} "{payloadName}"
          </div>
        </div>
      </div>
      {posts && posts.length > 0 && (
        <div className="sm:w-auto flex flex-col items-center justify-center py-6">
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-12 mb-6 sm:mb-16">
            {posts.slice(0, quality).map((item, index) => {
              return (
                <a
                  key={index}
                  href={`/bai-viet/${item?.attributes.slug}`}
                  className="flex flex-col gap-6 w-[21.4375rem]"
                >
                  <div className="relative h-[14.25rem] w--full sm:h-[19.75rem] rounded-xl">
                    <img
                      src={
                        item.attributes?.image.data
                          ? `${configs.API_URL}${item.attributes.image.data.attributes.url}`
                          : DefaultImage
                      }
                      alt="banner"
                      className="rounded-xl object-cover h-full w-full"
                      sizes="33vw"
                    />
                  </div>
                  <div className="text-black-tertiary flex flex-col items-start gap-3">
                    <div className="font-semibold text-base sm:text-2xl text-left">{item.attributes.name}</div>
                    <div className="sm:text-base text-sm">
                      {" "}
                      {new Date(item.attributes.publishedAt).toLocaleDateString("vi-VN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
          {posts.length > quality && quality < posts.length && (
            <div className="flex justify-center">
              <button
                onClick={() => setQuality(quality + 6)}
                className="text-sm leading-5.5 font-semibold h-[2.875rem] text-green-secondary bg-white border-[1.5px] border-green-secondary rounded-sm px-6 py-3 hover:bg-green hover:text-white"
              >
                Xem thêm
              </button>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default PageSearch
