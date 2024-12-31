import { BlockContentResponse } from "@/lib/config/types"
import httpClient from "@/lib/http-client"
import { clsx, type ClassValue } from "clsx"
import qs from "qs"
import { twMerge } from "tailwind-merge"
import ButtonMAFile from "../lib/config/assets/button-ma.svg"
import ButtonManuScrollFile from "../lib/config/assets/button-manuscroll.svg"
import iconCallFile from "../lib/config/assets/call.svg"
import DefaultImageFile from "../lib/config/assets/empty-img.jpg"
import iconFaceBookNewFile from "../lib/config/assets/facebook-logo-new.svg"
import IconArrowLeftFile from "../lib/config/assets/icon-arrow-left.svg"
import IconArrowRightFile from "../lib/config/assets/icon-arrow-right.svg"
import iconDateCreatedFile from "../lib/config/assets/icon-date-created.svg"
import iconFacebookFile from "../lib/config/assets/icon-facebook.svg"
import iconLinkedinFile from "../lib/config/assets/icon-linkedin.svg"
import iconTiktokFile from "../lib/config/assets/icon-tiktok.svg"
import iconTwitterFile from "../lib/config/assets/icon-twitter.svg"
import iconYoutubeFile from "../lib/config/assets/icon-youtube.svg"
import iconZaloNewFile from "../lib/config/assets/icon_zalo-new.svg"
import iconAdminFile from "../lib/config/assets/iconAdmin.svg"
import iconAdminMobileFile from "../lib/config/assets/iconAdminMobile.svg"
import iconCalenderFile from "../lib/config/assets/iconCalender.svg"
import iconCalenderMobileFile from "../lib/config/assets/iconCalenderMobile.svg"
import iconDropdownFile from "../lib/config/assets/iconDropdown.svg"
import iconMailMapFile from "../lib/config/assets/iconGmail.svg"
import iconPhoneMapFile from "../lib/config/assets/iconHotline.svg"
import {
  default as iconLocationMapFile,
  default as iconLocationRecruimentFile,
} from "../lib/config/assets/iconLocation.svg"
import iconLocationRecruimentMobileFile from "../lib/config/assets/iconLocationMobile.svg"
import iconMailFile from "../lib/config/assets/iconMail.svg"
import iconMoneyFile from "../lib/config/assets/iconMoney.svg"
import iconMoneyMobileFile from "../lib/config/assets/iconMoneyMobile.svg"
import iconTypeFile from "../lib/config/assets/iconType.svg"
import iconTypeMobileFile from "../lib/config/assets/iconTypeMobile.svg"
import iconWebFile from "../lib/config/assets/iconWeb.svg"
import iconZaloFile from "../lib/config/assets/iconZalo.svg"
import iconLocationFile from "../lib/config/assets/location.svg"
import iconYoutubeNewFile from "../lib/config/assets/logo-youtube-new.svg"
import logoFooterFile from "../lib/config/assets/logoFooter.svg"
import ButtonPlayFile from "../lib/config/assets/play-button.svg"
import iconTiktokNewFile from "../lib/config/assets/tiktok-logo-new.svg"
import iconSearchFooterFile from "../lib/config/assets/vector-input.svg"
import chinhThucIcon from "../lib/config/themes/ske/MultiLayout/assets/chinh-chuc.svg"
import doiMoiIcon from "../lib/config/themes/ske/MultiLayout/assets/doi-moi.svg"
import thauCamIcon from "../lib/config/themes/ske/MultiLayout/assets/thau-cam.svg"
import trachNhiemIcon from "../lib/config/themes/ske/MultiLayout/assets/trach-nhiem.svg"
import tuChuIcon from "../lib/config/themes/ske/MultiLayout/assets/tu-chu.svg"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const useUiBuilder = () => {
  const fetchBlockContent = async (id: string) => {
    return await httpClient.get<BlockContentResponse>(`block-contents/${id}?populate=*`)
  }

  const fetchBlockContentTemplate = async () => {
    return await httpClient.get<BlockContentResponse>(`block-contents?populate=*&filters[isTemplate][$eq]=true`)
  }

  return {
    fetchBlockContent,
    fetchBlockContentTemplate,
  }
}

const MediaUpload = (props: any) => null

const Media = (props: any) => null

export interface FilterSearchParams {
  populate: string
  filters: {
    [key: string]: {
      $containsi?: string
      $null?: boolean
      $gt?: string
      $lt?: string
      $in?: string
    }
  }
  sort: string
  publicationState?: string
  pagination?: {
    page?: string
    pageSize?: string
    current?: string
    start?: string
    limit?: string
    total?: string
    withCount?: boolean
  }
}

const fetchPostByCategories = async (categoriesId: string[]) => {
  const params: FilterSearchParams = {
    populate: "*",
    sort: "createdAt:desc",
    publicationState: "live",
    filters: {
      categories: {
        // @ts-expect-error
        id: {
          $in: categoriesId,
        },
      },
    },
  }

  try {
    const response = await httpClient.get<any>(`posts?${qs.stringify(params, { encodeValuesOnly: true })}`)

    const modifiedResponse = response.data.map((post: any) => ({
      ...post,
      status: post.attributes.publishedAt ? "published" : "draft",
      publishedAt: post.attributes.publishedAt,
    }))

    return {
      data: modifiedResponse,
      meta: response.meta,
    }
  } catch (error) { }
}

export interface BaseSystem {
  id: string
  attributes: {
    name: string
    address: string
    hotline: string
  }
}

const fetchCategories = async (searchTerm?: string) => {
  const params: FilterSearchParams = {
    populate: "*",
    sort: "createdAt:desc",
    filters: {
      name: { $containsi: searchTerm },
    },
  }
  return await httpClient.get(`/cateogries`, {
    params,
  })
}

const fetchBaseSystems = async () => {
  const response = await httpClient.get<{ data: any }>(`base-systems?populate=*&sort=id:DESC`)
  return response.data
}

export const configs = {
  API_URL: process.env.NEXT_PUBLIC_API_URL,
  BASE_URL: process.env.BASE_URL,
  IMAGES_DOMAIN: process.env.URL_IMAGES_PRODUCTION,
}
export const filterOption = (input: string, option?: { label: string; value: string }) =>
  normalizeText((option?.label ?? "").toLowerCase()).includes(normalizeText(input.toLowerCase()))

export const normalizeText = (text: string) => {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
}

const DefaultImage = DefaultImageFile.src
const ButtonPlay = ButtonPlayFile.src
const ButtonMA = ButtonMAFile.src
const ButtonManuScroll = ButtonManuScrollFile.src
const IconArrowLeft = IconArrowLeftFile.src
const IconArrowRight = IconArrowRightFile.src
const iconFacebook = iconFacebookFile.src
const iconTiktok = iconTiktokFile.src
const iconYoutube = iconYoutubeFile.src
const iconSearchFooter = iconSearchFooterFile.src
const iconCall = iconCallFile.src
const iconDropdown = iconDropdownFile.src
const iconLocation = iconLocationFile.src
const logoFooter = logoFooterFile.src
const iconMail = iconMailFile.src
const iconWeb = iconWebFile.src
const iconAdmin = iconAdminFile.src
const iconAdminMobile = iconAdminMobileFile.src
const iconCalender = iconCalenderFile.src
const iconCalenderMobile = iconCalenderMobileFile.src
const iconLocationRecruiment = iconLocationRecruimentFile.src
const iconLocationRecruimentMobile = iconLocationRecruimentMobileFile.src
const iconMoney = iconMoneyFile.src
const iconMoneyMobile = iconMoneyMobileFile.src
const iconType = iconTypeFile.src
const iconTypeMobile = iconTypeMobileFile.src
const iconTrachNhiem = trachNhiemIcon.src
const iconDoiMoi = doiMoiIcon.src
const iconChinhThuc = chinhThucIcon.src
const iconThauCam = thauCamIcon.src
const iconTuChu = tuChuIcon.src
const iconTwitter = iconTwitterFile.src
const iconLinkedin = iconLinkedinFile.src
const iconDateCreated = iconDateCreatedFile.src
const iconZalo = iconZaloFile.src
const iconPhoneMap = iconPhoneMapFile.src
const iconMailMap = iconMailMapFile.src
const iconLocationMap = iconLocationMapFile.src
const iconYoutubeNew = iconYoutubeNewFile.src
const iconFaceBookNew = iconFaceBookNewFile.src
const iconZaloNew = iconZaloNewFile.src
const iconTiktokNew = iconTiktokNewFile.src

export {
  ButtonMA,
  ButtonManuScroll,
  ButtonPlay,
  cn,
  DefaultImage,
  fetchBaseSystems,
  fetchCategories,
  fetchPostByCategories,
  iconAdmin,
  iconAdminMobile,
  IconArrowLeft,
  IconArrowRight,
  iconCalender,
  iconCalenderMobile,
  iconCall,
  iconChinhThuc,
  iconDateCreated,
  iconDoiMoi,
  iconDropdown,
  iconFacebook, iconFaceBookNew, iconLinkedin,
  iconLocation,
  iconLocationMap,
  iconLocationRecruiment,
  iconLocationRecruimentMobile,
  iconMail,
  iconMailMap,
  iconMoney,
  iconMoneyMobile,
  iconPhoneMap,
  iconSearchFooter,
  iconThauCam,
  iconTiktok, iconTiktokNew, iconTrachNhiem,
  iconTuChu,
  iconTwitter,
  iconType,
  iconTypeMobile,
  iconWeb,
  iconYoutube, iconYoutubeNew, iconZalo, iconZaloNew, logoFooter,
  Media,
  MediaUpload,
  useUiBuilder
}

