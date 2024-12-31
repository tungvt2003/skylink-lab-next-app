import { FormInstance } from "antd"
import { ValidateErrorEntity } from "rc-field-form/lib/interface"
import { ChangeEvent } from "react"

export interface StrapiResponse<T> {
  data: T
  meta: Meta
}

export interface BlockContent {
  id: string
  attributes: {
    content: string | null
    createdAt: string
    updatedAt: string
  }
}

export interface BlockContentResponse extends StrapiResponse<BlockContent> {}
export interface LoginResponse {
  jwt: string
  user: {
    id: number
    email: string
    username: string
    provider: string
    confirmed: boolean
    blocked: boolean
    createdAt: string
    updatedAt: string
  }
}
// slice redux
export interface LoginState {
  isAuthenticated: boolean
  user: {
    id: number
    email: string
    username: string
    provider: string
    confirmed: boolean
    blocked: boolean
    createdAt: string
    updatedAt: string
  } | null
  accessToken: string | null
}
export interface Data {
  data: PostData[]
  meta: Meta
}

export interface PostListProps {
  dataItem?: string
}

export interface PageListProps {
  searchTerm?: string
}

export interface dataPayloadPage {
  name: string | undefined
  content: string
  slug?: string
}

export interface FieldType {
  name?: string
  slug?: string
  password?: string
  remember?: string
  content?: string
  excerpt?: string
  categories?: number[]
  tags?: number[]
  metaTitle?: string
  metaDescription?: string
  keywords?: string
  metaImage?: MetaImage
  metaRobots?: string
  metaViewport?: string
  structuredData?: JSON
}

export interface PostFormProps {
  form: FormInstance
  onFinishFailed: (errorInfo: ValidateErrorEntity) => void
  quillValue: string
  setQuillValue: (value: string) => void
  onFinish: (values: FieldType) => void
  onChangeMetaImage: (value: MediaData) => void
}

export interface PageFormProps {
  page?: PageData
  edit?: boolean
  form: FormInstance
  onFinishFailed: (errorInfo: ValidateErrorEntity) => void
  quillValue: string
  setQuillValue: (value: string) => void
  onFinish: (values: FieldType) => void
  onChangeMetaImage: (value: MediaData) => void
  isUIBuilderPage?: boolean
}

export interface CategoryOption {
  id: number
  label: string | undefined
  value: number
  disabled: boolean
}

export interface CategoriesProps {
  selectedCategories: string[]
  onChangeCategories: (checkedValues: string[]) => void
}

export interface TagOption {
  id: number
  label: string | undefined
  value: number
  disabled: boolean
}

export interface TagsProps {
  selectedTags: string[]
  onChangeTags: (checkedValues: string[]) => void
}

export interface PublishProps {
  onSubmit: () => void
  isCreateEdit: boolean
  setStatus: (status: string) => void
  status: string
  setPublishDate: (date: string) => void
  onPageTypeChanged?: (isUseUIBuiler: boolean) => void
}

export interface InputSearchProps {
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export interface PostData {
  id: number
  attributes: AttributesPost
}

export type PostMetaData = PostMetaDataArray[]

export interface PostMetaDataArray {
  id: number
  attributes: {
    name: string
    slug: string
    content: string
    excerpt: string
    isUseUIBuilder: boolean | null
    createdAt: string
    updatedAt: string
    publishedAt: string
    locale: string
    SEO: {
      id?: string
      metaTitle?: string
      metaDescription?: string
      keywords?: string
      metaRobots?: string
      metaViewport?: string
      canonicalURL?: string
      metaImage?: {
        data: {
          attributes: {
            url?: string | undefined
          }
        }
      }
      metaSocial: string | null
    }
  }
}

export interface AttributesPost {
  name: string
  slug: string
  content: string
  excerpt: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  isUseUIBuilder?: boolean
  blockContent: {
    data?: BlockContent | null
  }
  image: {
    data?: DataImage | null
  }
  categories: {
    data: CategoryData[]
  }
  tags: {
    data: TagData[]
  }
  SEO: {
    data: SeoData
  }
}

export interface PageData {
  id: number
  attributes: AttributesPost
}
export interface AttributesPage {
  name: string
  slug: string
  content: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  image: {
    data?: DataImage | null
  }
}
export interface ApiResponse {
  data: PageAttributes[]
  error?: string
}

export interface PageAttributes {
  id: number
  title: string
  slug: string
  content: string
  attributes: {
    name: string
    createdAt: string
    updatedAt: string
  }
  number: string
}
export interface UserAttributes {
  id: number
  username: string
  email: string
  blocked: boolean
  confirmed: boolean
  createdAt: string
  updatedAt: string
  provider: string
  role: {
    id: number
    name: string
    description: string
    type: string
    createdAt: string
  }
}

export interface Image {
  data: Data
}

export interface DataImage {
  id: number
  attributes: AttributesImage
}

export interface SeoData {
  id: number
  metaTitle: string
}

export interface AttributesImage {
  name: string
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  provider: string
  createdAt: string
  updatedAt: string
}

export interface Meta {
  pagination: Pagination
}

export interface Pagination {
  page?: number
  pageSize: number | undefined
  current: number | undefined
  total: number | undefined
}
export type CategoryData = {
  id: number
  attributes: CategoryAttributes
}

export type CategoryAttributes = {
  name: string
  slug?: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export type TagAttributes = {
  name: string
  slug?: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export type TagData = {
  id: number
  attributes: TagAttributes
}

export type PageEditProps = {
  id: number
  something: TagAttributes
}

export interface FormValues {
  pagination: Pagination
  createdAt: string
  updatedAt: string
  publishedAt: string
  categories: {
    data: CategoryResponse[]
  }
  tags: {
    data: TagData[]
  }
  dataItem: PostData[]
  loading: boolean
  error: string | null
}

export interface CategoryApiResponse {
  data: CategoryData[]
  meta: {
    pagination: {
      page: number
      total: number
    }
  }
}

export interface TagApiResponse {
  data: TagData[]
  meta: {
    pagination: {
      page: number
      total: number
    }
  }
}

export interface MediaData {
  id: number
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string
  provider: string
  provider_metadata: string
  createdAt: string
  updatedAt: string
  attributes: AttributesImage
}
export interface ImageFormats {
  name: string
  hash: string
  ext: string
  mime: string
  path: string | null
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
}

export interface MetaImageAttributes {
  name: string
  alternativeText: string | null
  caption: string | null
  width: number
  height: number
  formats: {
    medium: ImageFormats
    thumbnail: ImageFormats
    small: ImageFormats
  }
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string | null
  provider: string
  provider_metadata: any | null
  createdAt: string
  updatedAt: string
}

export interface MetaImage {
  id: number
  attributes: MetaImageAttributes
}

export interface FileInfo {
  file: {
    status: string
    url?: string
    originFileObj?: File
  }
}
export interface SEOAttributes {
  metaTitle: string
  metaDescription: string
  metaKeywords: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  MetaImage: {
    data: MetaImage
  }
}

export interface SEOData {
  id: number
  attributes: SEOAttributes
}

export interface SEOResponse {
  data: SEOData
  meta: {
    pagination: {
      page: number
      total: number
    }
  }
}

export interface FormValuesPage {
  pagination: Pagination
  createdAt: string
  updatedAt: string
  publishedAt: string
  dataItem: PageData[]
  loading: boolean
  error: string | null
}

export interface CustomBreakpointMap {
  xs?: boolean
  sm?: boolean
  md?: boolean
  lg?: boolean
  xl?: boolean
  xxl?: boolean
}

export interface CustomTokenType {
  padding: number
  paddingXL: number
  sizeXXL: number
  marginLG: number
  fontSizeHeading2: number
  fontSizeHeading3: number
  colorTextSecondary: string
}

export interface ContactFormData {
  nameContact: string
  firstName: string
  lastName: string
  email: string
  numberPhone: string
  slug?: string
  message: string
}
export interface ContactData {
  id: number
  attributes: ContactFormData
}
export interface ContactListProps {
  searchTerm?: string
}
export interface FormValuesContact {
  pagination: Pagination
  createdAt: string
  updatedAt: string
  publishedAt: string
  dataForm: ContactData[]
  loading: boolean
  error: string | null
}
export interface CategoryResponse {
  id: number
  attributes: {
    name: string
    slug: string
    description: string
    createdAt?: string
    updatedAt?: string
    publishedAt?: string
    posts?: PostResponse[]
    products?: Products
  }
}

export interface AttributesCategory {
  name: string
  slug: string
  description: string
  createdAt?: string
  updatedAt?: string
  publishedAt?: string
  posts?: Posts
  products?: ProductResponse[]
}

export interface Posts {
  data: PostResponse[]
}

export interface PostResponse {
  id: number
  attributes: Attributes2
}

export interface Attributes2 {
  name: string
  slug: string
  content: string
  excerpt: string
  createdAt: string
  updatedAt: string
}

export interface FileUpdate {
  fileInfo?: {
    name: string
    alternativeText: string
    caption: string
    width?: number
    height?: number
  }
  file?: File
}
export interface Products {
  data: ProductResponse[]
}

export interface ProductResponse {
  id: number
  attributes: ProductAttributes
}

export interface ProductAttributes {
  name: string
  slug: string
  content: string
  excerpt: string
  price: string
  discount: string
  stock: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface FormValuesCategory {
  pagination: Pagination
  createdAt: string
  updatedAt: string
  publishedAt: string
  dataItem: CategoryData[]
  loading: boolean
  error: string | null
}

export interface ContactFormProps {
  form: FormInstance
  onFinishFailed: (errorInfo: ValidateErrorEntity) => void
  onFinish: (values: FieldTypeContactForm) => void
}
export type FieldTypeContactForm = {
  name: string
  slug: string
  excerpt: string
  nameContact: string
  firstName: string
  lastName: string
  email: string
  numberPhone: string
  message: string
}

export interface UserUpdatePayload {
  id: number
  username: string
  email: string
  provider: string
  confirmed: boolean
  blocked: boolean
  createdAt: string
  updatedAt: string
  firstName: string
  lastName?: string
  emailSubscription?: boolean
  language?: string
  role: Role
}

export interface Role {
  id: number
  name: string
  description: string
  type: string
}
export interface FormValuesMedia {
  pagination: Pagination
  createdAt: string
  updatedAt: string
  publishedAt: string
  dataItem: MediaData[]
  loading: boolean
  error: string | null
}

export interface Formats {
  thumbnail: Thumbnail
  large: LargeFile
  medium: MediumFile
  small: SmallFile
}

export interface Thumbnail {
  name: string
  hash: string
  ext: string
  mime: string
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
}

export interface LargeFile {
  name: string
  hash: string
  ext: string
  mime: string
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
}

export interface MediumFile {
  name: string
  hash: string
  ext: string
  mime: string
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
}

export interface SmallFile {
  name: string
  hash: string
  ext: string
  mime: string
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
}
export interface DataSettingItem {
  id: number
  attributes: {
    key: string
    value: string
    description: string
  }
}

export interface PayloadSetting {
  key: string
  value: string
  description: string
}

export interface Filters {
  [key: string]: string
}
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
  publicationState: string
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
export interface PaginationMeta {
  pagination: {
    total?: number
    page?: number
  }
}

export interface FetchPagesResponse {
  data: any[]
  meta?: PaginationMeta
  error?: {
    message: string
  }
}
// export interface DashboardCardProps {
//   id: number;
//   pageCount: number;
//   postCount: number;
//   userCount: number;
//   commentCount: number;
// }

export interface MenuApiResponse {
  id: number
  attributes: {
    name: string
    slug: string
    order: number
    parent: number | null
  }
}

export interface DataType {
  key: React.Key
  theme: string
  menu: string
}

export interface MenuItem {
  id: number
  name: string
  slug: string
  parent: number | null
  order: number
  url: string
}

export interface PageItem {
  name: string
  slug: string
}

export interface PostItem {
  name: string
  slug: string
}

export interface CategoryItem {
  name: string
  slug: string
}

export interface MenuPreference {
  id: number
  name: string
  items: MenuItem[]
}

export interface MenuPreferenceApi {
  id: number
  attributes: {
    name: string
    items: {
      id: number
      name: string
      slug: string
      parent: number
      order: number
    }
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
}

export interface AddCategoryPayload {
  name: string
  slug: string
  description: string
}
