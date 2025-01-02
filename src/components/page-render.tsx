"use client"

import { Render } from "@measured/puck"
import { useEffect, useState } from "react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import NotFound from "../app/[locale]/not-found"
import { tryParse } from "../lib/config/lib/helper"
import { newRenderConfig } from "../lib/config/uiBuilderConfig"
import {
  configs,
  DefaultImage,
  iconDateCreated,
  iconFacebook,
  iconLinkedin,
  iconTwitter,
} from "../lib/external-components"
import { getPostByCategories } from "../lib/navigation-services"
import { dateFormat, replaceImageUrls } from "../lib/utils"
import BreadCrumb from "./breadcrumb"
import { Spinner } from "./ui/loading"

interface PageData {
  id: number
  attributes: {
    slug: string
    id: string
    content: string
    blockContent: any
    name: string
    categories?: {
      data?: Array<{
        attributes?: {
          name?: string
          slug?: string
        }
      }>
    }
    createdAt?: string
    updatedAt?: string
    publishedAt?: string
    locale?: string
    image?: {
      data?: {
        attributes?: {
          url?: string
        }
      }
    }
  }
}

const NormalContent = ({ content }: { content?: string }) => {
  if (!content) return null

  return <div dangerouslySetInnerHTML={{ __html: content }} />
}

interface PageRenderProps {
  pageData?: PageData[]
  hasBreadcrumb?: boolean
  isTemplate?: boolean
  dict?: any
  base_url?: string
}

const PageRender = ({ pageData, hasBreadcrumb, isTemplate, dict, base_url }: PageRenderProps) => {
  const [loading, setLoading] = useState(true)
  const [uiBuilderData, setUiBuilderData] = useState<any>(null)
  const [breadcrumbData, setBreadcrumbData] = useState()
  const [normalContent, setNormalContent] = useState<string>()
  const [breadcrumbPostDetail, setBreadcrumbPostDetail] = useState<any>()
  const [breadcrumbCategoryPost, setBreadcrumbCategoryPost] = useState<any>()
  const [breadcrumbCategoryPostSlug, setBreadcrumbCategoryPostSlug] = useState<any>()
  const [titleBlog, setTitleBlog] = useState<string>("")
  const [updatedAtBlog, setUpdatedAtBlog] = useState<string>("")
  const [dataRelatedPost, setDataRelatedPost] = useState<PageData[]>()

  const slug = pageData?.[0]?.attributes?.slug

  const fetchPostDataByCategories = async (slug: string) => {
    const response = await getPostByCategories(slug)
    return response
  }

  useEffect(() => {
    const fetchData = async () => {
      if (pageData) {
        setLoading(true)
        let parsedData = null
        if (isTemplate) {
          parsedData = tryParse(pageData?.[0]?.attributes?.content ?? "")
        } else {
          parsedData = tryParse(pageData?.[0]?.attributes?.blockContent?.data?.attributes?.content ?? "")
        }

        const postNormalContent = pageData?.[0]?.attributes?.content
        const getBreadcrumbPostDetail = pageData?.[0]?.attributes?.name
        const categoryData = pageData?.[0]?.attributes?.categories?.data?.[0]?.attributes
        const getBreadcrumbCategoryPost = categoryData?.name
        const getBreadcrumbCategoryPostSlug = categoryData?.slug
        const getTitleBlog = pageData?.[0]?.attributes?.name ?? ""
        const getUpdateDateBlog = pageData?.[0]?.attributes?.updatedAt ?? ""

        if (postNormalContent) {
          const response = await fetchPostDataByCategories(
            pageData?.[0]?.attributes?.categories?.data?.[0]?.attributes?.slug ?? "",
          )
          if (response.length > 0) {
            setDataRelatedPost(response)
          }
          const newContent = replaceImageUrls(postNormalContent)
          setNormalContent(newContent)
          setBreadcrumbPostDetail(getBreadcrumbPostDetail)
          setBreadcrumbCategoryPost(getBreadcrumbCategoryPost)
          setBreadcrumbCategoryPostSlug(getBreadcrumbCategoryPostSlug)
        }

        if (parsedData) {
          setUiBuilderData(parsedData)
        }

        if (hasBreadcrumb) {
          const getBreadCrumbs = parsedData && parsedData?.root.props.breadcrumb

          setBreadcrumbData(getBreadCrumbs)
        }

        if (getTitleBlog && getUpdateDateBlog) {
          setTitleBlog(getTitleBlog)
          setUpdatedAtBlog(getUpdateDateBlog)
        }

        setLoading(false)
      }
    }

    fetchData()
  }, [pageData])

  if (loading) return <Spinner />
  const configBreadCrum = [
    {
      title: breadcrumbCategoryPost,
      url: `/${breadcrumbCategoryPostSlug}`,
    },
    {
      title: breadcrumbPostDetail,
      url: "#",
    },
  ]

  const pagination = "default"

  const paginationCustom = {
    clickable: true,
    bulletClass:
      pagination === "default" ? "custom-swiper-pagination-bullet-post" : "custom-swiper-pagination-section-bullet",
    bulletActiveClass:
      pagination === "default"
        ? "custom-swiper-pagination-bullet-post-active"
        : "custom-swiper-pagination-section-bullet-active",
    renderBullet: function (index: number, className: string) {
      return `<span class="${className}">${""}</span>`
    },
  }
  const checkContent = () => {
    {
      if (uiBuilderData) {
        return <Render config={newRenderConfig} data={uiBuilderData} />
      } else if (normalContent) {
        return (
          <div>
            <BreadCrumb items={configBreadCrum} />
            <div className="flex flex-col gap-8 sm:gap-10 py-8 sm:pt-10 sm:pb-16 px-4 sm:px-0">
              <div className="container sm:pr-[40px] sm:pl-[7.5rem]">
                <div className="flex flex-col sm:flex-row items-start gap-12">
                  <div className="sm:w-[55rem] sm:pr-[1rem] sm:border-r sm:border-[#e3e4e8]">
                    {titleBlog && updatedAtBlog && (
                      <div className="flex flex-col gap-1 sm:gap-3 pb-6 w-full">
                        <h1 className="text-lg leading-6 sm:text-3.5xl sm:leading-12 font-bold text-[#31343E]">
                          {titleBlog}
                        </h1>
                        <div className="flex justify-between">
                          <p className="flex gap-2 items-center leading-5.25 text-4.25 sm:text-base text-[#31343E]">
                            <img
                              src={iconDateCreated}
                              alt="logoDateCreated"
                              style={{ height: "20px", width: "20px" }}
                            />

                            {slug && dateFormat(updatedAtBlog, "vi-VN")}
                          </p>
                          <div className="flex items-center gap-2">
                            <p className="leading-5.25 text-4.25 sm:text-base text-[#31343E]">Chia sẻ</p>
                            <a
                              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                                `${base_url}/bai-viet/${slug}`,
                              )}&quote=${encodeURIComponent(titleBlog)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={iconFacebook}
                                alt="Facebook"
                                style={{ height: "36px", width: "36px", borderRadius: "50%" }}
                              />
                            </a>

                            <a
                              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                                `${base_url}/bai-viet/${slug}`,
                              )}&text=${encodeURIComponent(titleBlog)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={iconTwitter}
                                alt="Twitter"
                                style={{ height: "36px", width: "36px", borderRadius: "50%" }}
                              />
                            </a>

                            <a
                              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                                `${base_url}/bai-viet/${slug}`,
                              )}&title=${encodeURIComponent(titleBlog)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={iconLinkedin}
                                alt="LinkedIn"
                                style={{ height: "36px", width: "36px", borderRadius: "50%" }}
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                    <NormalContent content={normalContent} />
                  </div>
                  <div className="flex-1 max-w-auto sm:block hidden">
                    {dataRelatedPost && (
                      <div className="flex flex-col justify-center gap-6">
                        <div>
                          <h2 className="sm:text-[1.5rem] sm:leading-12 font-semibold">TIN NỔI BẬT</h2>
                        </div>
                        <div>
                          <Swiper
                            spaceBetween={16}
                            slidesPerView={1}
                            pagination={paginationCustom}
                            modules={[Pagination, Navigation, Autoplay]}
                            navigation={true}
                            autoplay={{ delay: 2000 }}
                            loop={true}
                            className="custom-swiper-post grid sm:grid-cols-1 gap-6"
                          >
                            {dataRelatedPost
                              .filter(item => item.id !== pageData?.[0]?.id)
                              .slice(0, 5)
                              .map((item, index) => (
                                <SwiperSlide key={index}>
                                  <a
                                    href={`/bai-viet/${item?.attributes.slug}`}
                                    className="flex flex-col sm:gap-6 gap-2"
                                  >
                                    <div className="relative h-[11.813rem] w-full sm:h-[11.813rem] rounded-xl">
                                      <img
                                        src={
                                          item?.attributes?.image?.data
                                            ? `${configs.API_URL}${item.attributes.image?.data?.attributes?.url}`
                                            : DefaultImage
                                        }
                                        alt="banner"
                                        className="rounded-xl object-cover h-full w-full"
                                        sizes="33vw"
                                      />
                                    </div>
                                    <div className="text-black-tertiary flex flex-col items-start sm:gap-3 gap-1">
                                      <div className="font-semibold text-base sm:text-2xl text-left">
                                        {item.attributes.name}
                                      </div>
                                      <div className="flex items-center gap-1 text-base sm:text-base leading-7 font-normal">
                                        {item.attributes.publishedAt &&
                                          new Date(item.attributes.publishedAt).toLocaleDateString("vi-VN", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                          })}
                                      </div>
                                    </div>
                                  </a>
                                </SwiperSlide>
                              ))}
                          </Swiper>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {dataRelatedPost && (
                  <div className="mx-auto pt-8 sm:pt-10 sm:w-auto flex flex-col justify-center gap-6">
                    <div>
                      <h2 className="text-lg leading-6 sm:text-[2rem] sm:leading-12 font-semibold">
                        Bài viết liên quan
                      </h2>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-6 sm:gap-12">
                      {dataRelatedPost
                        .filter(item => item.id !== pageData?.[0]?.id)
                        .slice(0, 3)
                        .map((item, index) => {
                          return (
                            <a
                              key={index}
                              href={`/bai-viet/${item?.attributes.slug}`}
                              className="flex flex-col sm:gap-6 gap-2"
                            >
                              <div className="relative h-[14.25rem] w-full sm:h-[19.75rem] rounded-xl">
                                <img
                                  src={
                                    item?.attributes?.image?.data
                                      ? `${configs.API_URL}${item.attributes.image?.data?.attributes?.url}`
                                      : DefaultImage
                                  }
                                  alt="banner"
                                  className="rounded-xl object-cover h-full w-full"
                                  sizes="33vw"
                                />
                              </div>
                              <div className="text-black-tertiary flex flex-col items-start sm:gap-3 gap-1">
                                <div className="font-semibold text-base sm:text-2xl text-left">
                                  {item.attributes.name}
                                </div>
                                <div className="sm:text-base text-sm">
                                  {" "}
                                  {item.attributes.publishedAt &&
                                    new Date(item.attributes.publishedAt).toLocaleDateString("vi-VN", {
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
                  </div>
                )}
              </div>
            </div>
          </div>
        )
      } else {
        return <NotFound dict={dict} />
      }
    }
  }
  return (
    <>
      {breadcrumbData && <BreadCrumb items={breadcrumbData} />}
      {checkContent()}
    </>
  )
}

export default PageRender
