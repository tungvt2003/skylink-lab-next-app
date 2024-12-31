"use client"
import { ComponentConfig } from "@measured/puck"
import { useEffect, useRef, useState } from "react"
import { Spinner } from "../../../../components/ui/loading"
import { configs, DefaultImage, fetchPostByCategories } from "../../../external-components"
import useIsMobile from "../../lib/use-is-mobile"

export type PostGridByCategoryProps = {
  idCategory: string[]
  template: string
}

export const RenderConfig: ComponentConfig<PostGridByCategoryProps> = {
  render: ({ idCategory, template }) => {
    const [posts, setPosts] = useState<any[]>([])
    const [lengthData, setLengthData] = useState(0)
    const [quality, setQuality] = useState(9)
    const [isLoading, setIsLoading] = useState(true)
    const isMobile = useIsMobile()
    const qualityRef = useRef(quality)

    const fetchPosts = async (categoryIds: string[]) => {
      setIsLoading(true)
      if (categoryIds.length === 0) {
        setPosts([])
        setIsLoading(false)
        return
      }
      try {
        const response = await fetchPostByCategories(categoryIds)
        if (response) {
          setPosts(response.data)
          setLengthData(response.data.length)
        } else {
          setPosts([])
        }
      } catch (err) {
        console.error("Failed to fetch posts. Please try again.")
      } finally {
        setIsLoading(false)
      }
    }

    useEffect(() => {
      fetchPosts(idCategory)
    }, [idCategory])

    useEffect(() => {
      if (lengthData < 3) {
        setQuality(lengthData)
      } else if (lengthData < 9) {
        setQuality(isMobile ? 3 : 6)
      } else {
        setQuality(isMobile ? 3 : 9)
      }
    }, [lengthData, isMobile])

    const loadMorePosts = () => {
      const newQuality = Math.min(qualityRef.current + 6, lengthData)
      qualityRef.current = newQuality
      setQuality(newQuality)
    }

    return (
      <>
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <Spinner />
          </div>
        ) : (
          <>
            {template === "post-grid-homepage" &&
              posts &&
              posts.length > 0 &&
              (isMobile ? (
                <div className="flex flex-col justify-between gap-4 px-4 py-6">
                  <a href={`/bai-viet/${posts[0]?.attributes?.slug}`} className="w-full flex flex-col gap-2">
                    <div className="relative overflow-hidden">
                      <img
                        src={
                          posts[0].attributes.image.data
                            ? `${configs.API_URL}${posts[0].attributes.image.data.attributes.url}`
                            : DefaultImage
                        }
                        alt="imageStaff"
                        className="rounded-xl object-cover h-[14.25rem] w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-base leading-5.5 font-semibold text-black">{posts[0].attributes.name}</div>
                      <div className="text-sm text-[#31343E]">
                        {new Date(posts[0].attributes.publishedAt).toLocaleDateString("vi-VN", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                    </div>
                  </a>
                  <div className="w-full flex flex-col gap-4">
                    {posts.slice(1, 3).map((item, index) => (
                      <a
                        href={`/bai-viet/${item.attributes?.slug}`}
                        className="flex flex-row gap-[1.375rem] px-6 py-3 items-center bg-[#F6F5FA] rounded-xl"
                        key={index}
                      >
                        <div className="flex flex-col items-center">
                          <div className="text-2xl font-semibold text-green text-center">
                            {new Date(item.attributes.publishedAt).toLocaleDateString("vi-VN", {
                              day: "numeric",
                            })}
                          </div>
                          <div className="flex flex-row text-4.25 leading-5.25 text-green whitespace-nowrap">
                            {new Date(item.attributes.publishedAt).toLocaleDateString("vi-VN", {
                              month: "numeric",
                            })}{" "}
                            -
                            {new Date(item.attributes.publishedAt).toLocaleDateString("vi-VN", {
                              year: "numeric",
                            })}
                          </div>
                        </div>
                        <div className="border border-[#777777] h-[50px]"></div>
                        <div className="text-base leading-5.5 font-semibold">{item.attributes.name}</div>
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-row justify-between gap-[2.90625rem]">
                  <a
                    href={`/bai-viet/${posts[0]?.attributes.slug}`}
                    className="w-[34.875rem] flex flex-col gap-6 items-center group"
                  >
                    <div
                      data-aos="fade-right"
                      data-aos-duration="1000"
                      className="relative overflow-hidden rounded-2xl"
                    >
                      <img
                        src={
                          posts[0].attributes.image.data
                            ? `${configs.API_URL}${posts[0].attributes.image.data.attributes.url}`
                            : DefaultImage
                        }
                        alt="imageStaff"
                        className="object-cover h-[23.25rem] w-[34.875rem] transform transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col gap-6">
                      <div className="text-2xl font-semibold hover:text-green">{posts[0].attributes.name}</div>
                      <div className="text-base text-[#31343E]">
                        {new Date(posts[0].attributes.publishedAt).toLocaleDateString("vi-VN", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                    </div>
                  </a>

                  <div className="border border-[#D9D9D9]"></div>
                  <div className="w-[34.25rem] flex flex-col gap-12" data-aos="fade-left" data-aos-duration="1000">
                    {posts.slice(1, 4).map((item, index) => (
                      <a
                        href={`/bai-viet/${item?.attributes.slug}`}
                        className="flex flex-row gap-[1.375rem] bg-white transition-colors duration-300 group"
                        key={index}
                      >
                        <div className="flex gap-6 flex-col justify-center">
                          <div className="text-2xl font-semibold line-clamp-2 hover:text-green">
                            {item.attributes.name}
                          </div>
                          <div className="text-base text-[#31343E]">
                            {new Date(item.attributes.publishedAt).toLocaleDateString("vi-VN", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </div>
                        </div>
                        <div>
                          <div className="relative overflow-hidden h-[9.5rem] w-[13.25rem] rounded-2xl">
                            <img
                              src={
                                item.attributes.image.data
                                  ? `${configs.API_URL}${item.attributes.image.data.attributes.url}`
                                  : DefaultImage
                              }
                              alt="imageStaff"
                              className="rounded-2xl object-cover h-[9.5rem] w-[13.25rem] transform transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            {template === "post-grid-list" && posts && posts.length > 0 && (
              <div className="sm:w-auto flex flex-col items-center justify-center">
                <div className="grid sm:grid-cols-3 gap-6 sm:gap-12 mb-9 sm:mb-0">
                  {posts.slice(0, quality).map((item, index) => {
                    return (
                      <a
                        key={index}
                        href={`/bai-viet/${item?.attributes.slug}`}
                        className="flex flex-col sm:gap-6 gap-2"
                      >
                        <div className="relative w-full h-0 pb-[87%] rounded-xl">
                          <img
                            src={
                              item.attributes.image.data
                                ? `${configs.API_URL}${item.attributes.image.data.attributes.url}`
                                : DefaultImage
                            }
                            alt="banner"
                            className="absolute inset-0 rounded-xl object-cover w-full h-full"
                            sizes="33vw"
                          />
                        </div>
                        <div className="text-black-tertiary flex flex-col items-start sm:gap-3 gap-1">
                          <div className="font-semibold text-base sm:text-2xl text-left">{item.attributes.name}</div>
                          <div className="sm:text-base text-sm">
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
                  <div className="flex justify-center sm:mt-16 mb-3 sm:mb-0">
                    <button
                      onClick={loadMorePosts}
                      className="text-sm leading-5.5 text-center font-semibold h-[2.875rem] text-green bg-white border-[1.5px] border-green rounded-lg whitespace-nowrap px-[137px] sm:px-6 py-3 hover:bg-green hover:text-white"
                    >
                      Xem thêm
                    </button>
                  </div>
                )}
              </div>
            )}
            {template === "post-similar" && posts && posts.length > 0 && (
              <div className="sm:w-auto flex flex-col items-center justify-center">
                <div className="grid sm:grid-cols-3  gap-0 sm:gap-12 mb-0 sm:mb-16">
                  {posts.slice(0, 3).map((item, index) => {
                    return (
                      <a
                        key={index}
                        href={`/bai-viet/${item?.attributes.slug}`}
                        className="flex flex-col gap-0 sm:gap-6 "
                      >
                        <div className="relative h-[14.25rem] w-full sm:h-[19.75rem] rounded-xl">
                          <img
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            src={
                              item.attributes.image.data
                                ? `${configs.API_URL}${item.attributes.image.data.attributes.url}`
                                : DefaultImage
                            }
                            alt="banner"
                            className="rounded-xl object-cover h-full w-full"
                            sizes="33vw"
                          />
                        </div>
                        <div className="text-black-tertiary flex flex-col items-start gap-0 pt-2 pb-6 sm:gap-3">
                          <div className="text-base leading-[22px] font-semibold sm:text-2xl text-left">
                            {item.attributes.name}
                          </div>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>
            )}
            {template === "post-hand-book" && posts && posts.length > 0 && (
              <div className="sm:w-auto flex flex-col items-center justify-center">
                <div className="grid sm:grid-cols-3 gap-6 sm:gap-12 mb-6 sm:mb-16">
                  {posts.slice(0, quality).map((item, index) => {
                    return (
                      <a key={index} href={`/bai-viet/${item?.attributes.slug}`} className="flex flex-col gap-6 ">
                        <div className="relative h-[14.25rem] w-full sm:h-[19.75rem] rounded-xl ">
                          <img
                            src={
                              item.attributes.image.data
                                ? `${configs.API_URL}${item.attributes.image.data.attributes.url}`
                                : DefaultImage
                            }
                            alt="banner"
                            className="rounded-xl object-cover h-full w-full"
                            sizes="33vw"
                          />
                        </div>
                        <div className="text-black-tertiary flex flex-col items-start gap-3">
                          <div className="font-semibold text-2xl text-left">{item.attributes.name}</div>
                        </div>
                      </a>
                    )
                  })}
                </div>
                {posts.length > quality && quality < posts.length && (
                  <div className="flex justify-center">
                    <button
                      onClick={loadMorePosts}
                      className="text-sm leading-5.5 font-semibold text-center h-[2.875rem] text-green bg-white border-[1.5px] border-green rounded-lg px-[137px] sm:px-6 py-3 hover:bg-green hover:text-white"
                    >
                      Xem thêm
                    </button>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </>
    )
  },
}
