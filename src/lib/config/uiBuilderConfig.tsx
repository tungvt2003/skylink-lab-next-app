import { Config } from "@measured/puck"
import { Box } from "./blocks/Box"
import { Button } from "./blocks/Button"
import { Columns } from "./blocks/Columns"
import { Container } from "./blocks/Container"
import { Gallery as GalleryConfig } from "./blocks/Gallery"
import { GalleryLayout as GalleryLayoutConfig } from "./blocks/GalleryLayout"
import { Heading } from "./blocks/Heading"
import { IconSocial } from "./blocks/IconSocial"
import { Image as ImageConfig } from "./blocks/Image"
import { ImageCard } from "./blocks/ImageCard"
import { Input } from "./blocks/Input"
import { PhotoLibrary } from "./blocks/PhotoLibrary"
import { SimpleSlider as SimpleSliderConfig } from "./blocks/SimpleSliders"
import { Text } from "./blocks/Text"
import { VericalSpace } from "./blocks/VerticalSpace"
import { Video as VideoConfig } from "./blocks/Video"
import { VideoLibrary } from "./blocks/VideoLibrary"
import { SKLAutoSlider } from "./themes/skylink-lab/AutoSliders/index"
import { BannerHover } from "./themes/skylink-lab/bannerHover"
import { ButtonSKLLab } from "./themes/skylink-lab/button"
import { CardOurCoreValue } from "./themes/skylink-lab/CardOurCoreValue/index"
import { CollapseSKLLab } from "./themes/skylink-lab/collapseCustom"
import { ContactUsSKLLabs } from "./themes/skylink-lab/ContactUs"
import { ContentCard } from "./themes/skylink-lab/ContentCard/index"
import { CustomCounter } from "./themes/skylink-lab/CustomCounter/index"
import { CustomImage } from "./themes/skylink-lab/CustomImage/index"
import { EnhancedIconBox } from "./themes/skylink-lab/EnhancedIconBox/index"
import { SKLLabFooter } from "./themes/skylink-lab/footer"
import { GridImageSKL } from "./themes/skylink-lab/GridImage/index"
import { SKLLabHeader } from "./themes/skylink-lab/header"
import { ImageSKLLab } from "./themes/skylink-lab/imageCustom"
import { ImageKeyAI } from "./themes/skylink-lab/ImageKeyAI/index"
import { ListKeyAI } from "./themes/skylink-lab/ListKeyAI/index"
import { ProfileCustomerCard } from "./themes/skylink-lab/ProfileCustomerCard/index"
import { SKLSimpleSlider } from "./themes/skylink-lab/SimpleSliders/index"
import { SKLLabHeading } from "./themes/skylink-lab/SKLLabHeading"

const components = {
  Container,
  Columns,
  Box,
  VericalSpace,
  Heading,
  Text,
  Button,
  // CustomTabs,
  // ButtonLocation,
  ImageCard,
  // ProfileUserCard,
  PhotoLibrary,
  VideoLibrary,
  DropDown,
  VideoConfig,
  ImageConfig,
  GalleryConfig,
  GalleryLayoutConfig,
  SimpleSliderConfig,
  // PostGridByCategoryConfig,
  // New components
  IconSocial,
  Input,
  BannerHover,
  SKLLabHeading,
  SKLSimpleSlider,
  EnhancedIconBox,
  ListKeyAI,
  ImageKeyAI,
  CustomCounter,
  CardOurCoreValue,
  ProfileCustomerCard,
  SKLLabHeader,
  SKLLabFooter,
  ButtonSKLLab,
  ImageSKLLab,
  CollapseSKLLab,
  CustomImage,
  ContentCard,
  ContactUsSKLLabs,
  GridImageSKL,
  SKLAutoSlider,
}

export const common = {
  categories: {
    layout: {
      title: "Layout",
      components: ["Container", "Columns", "Box", "VericalSpace"],
    },
    content: {
      title: "Content",
      components: ["Heading", "Text", "Button", "DropDown"],
    },
    media: {
      title: "Media",
      components: ["ImageConfig", "ImageCard", "VideoConfig", "PhotoLibrary", "VideoLibrary", "IconSocial"],
    },
    data: {
      title: "Data",
      components: [
        "GalleryLayoutConfig",
        "GalleryConfig",
        // "ProfileUserCard",
        "SimpleSliderConfig",
        // "PostGridByCategoryConfig",
        // "CustomTabs",
      ],
    },
    themesSKLLab: {
      title: "Themes - SKYLINK Lab",
      components: [
        "BannerHover",
        "SKLLabHeading",
        "SKLSimpleSlider",
        "EnhancedIconBox",
        "ListKeyAI",
        "ImageKeyAI",
        "CustomCounter",
        "CardOurCoreValue",
        "ProfileCustomerCard",
        "SKLLabHeader",
        "SKLLabFooter",
        "ButtonSKLLab",
        "ImageSKLLab",
        "CollapseSKLLab",
        "CustomImage",
        "ContentCard",
        "ContactUsSKLLabs",
        "GridImageSKL",
        "SKLAutoSlider",
      ],
    },
  },
  root: {
    fields: {
      title: {
        type: "text",
        label: "Title",
      },
      breadcrumb: {
        type: "array",
        label: "Bread Crumb",
        min: 0,
        max: 4,
        arrayFields: {
          title: {
            type: "text",
            label: "Title",
          },
          link: {
            type: "text",
            label: "Link",
          },
        },
      },
    },
  },
}

// @ts-ignore
export const uiBuilderConfig: Config = {
  components: {
    ...components,
  },
  ...common,
}

// Below config is used for renderer only
// import { Config } from "@measured/puck"
import { RenderConfig as NewBox } from "./blocks/Box/RenderConfig"
import { RenderConfig as NewButton } from "./blocks/Button/RenderConfig"
// import { ButtonLocation } from "./blocks/ButtonLocation"
// import { RenderConfig as NewButtonLocation } from "./blocks/ButtonLocation/RenderConfig"
// import { RenderConfig as NewColumns } from "./blocks/Columns/RenderConfig"
import { RenderConfig as NewContainer } from "./blocks/Container/RenderConfig"
import { DropDown } from "./blocks/DropDown"
import { RenderConfig as NewDropDown } from "./blocks/DropDown/RenderConfig"
import { RenderConfig as NewGallery } from "./blocks/Gallery/RenderConfig"
import { RenderConfig as NewGalleryLayout } from "./blocks/GalleryLayout/RenderConfig"
import { RenderConfig as NewHeading } from "./blocks/Heading/RenderConfig"
import { RenderConfig as NewIconSocial } from "./blocks/IconSocial/RenderConfig"
import { RenderConfig as NewImage } from "./blocks/Image/RenderConfig"
import { RenderConfig as NewImageCard } from "./blocks/ImageCard/RenderConfig"
import { RenderConfig as NewPhotoLibrary } from "./blocks/PhotoLibrary/RenderConfig"
// import { RenderConfig as NewPostGridByCategory } from "./blocks/PostGridByCategory/RenderConfig"
// import { RenderConfig as NewProfileUserCard } from "./blocks/ProfileUserCard/RenderConfig"
import { RenderConfig as NewSimpleSlider } from "./blocks/SimpleSliders/RenderConfig"
// import { RenderConfig as NewCustomTabs } from "./blocks/Tabs/RenderConfig"
import { RenderConfig as NewText } from "./blocks/Text/RenderConfig"
import { RenderConfig as NewVericalSpace } from "./blocks/VerticalSpace/RenderConfig"
import { RenderConfig as NewVideo } from "./blocks/Video/RenderConfig"
import { RenderConfig as NewVideoLibrary } from "./blocks/VideoLibrary/RenderConfig"
import { RenderConfig as NewSKLAutoSlider } from "./themes/skylink-lab/AutoSliders/RenderConfig"
import { RenderConfig as NewBannerHover } from "./themes/skylink-lab/bannerHover/RenderConfig"
import { RenderConfig as NewButtonSKLLab } from "./themes/skylink-lab/button/RenderConfig"
import { RenderConfig as NewCardOurCoreValue } from "./themes/skylink-lab/CardOurCoreValue/RenderConfig"
import { RenderConfig as NewCollapseSKLLab } from "./themes/skylink-lab/collapseCustom/RenderConfig"
import { RenderConfig as NewContactUsSKLLabs } from "./themes/skylink-lab/ContactUs/RenderConfig"
import { RenderConfig as NewContentCard } from "./themes/skylink-lab/ContentCard/RenderConfig"
import { RenderConfig as NewCustomCounter } from "./themes/skylink-lab/CustomCounter/RenderConfig"
import { RenderConfig as NewCustomImage } from "./themes/skylink-lab/CustomImage/RenderConfig"
import { RenderConfig as NewEnhancedIconBox } from "./themes/skylink-lab/EnhancedIconBox/RenderConfig"
import { RenderConfig as NewSKLLabFooter } from "./themes/skylink-lab/footer/RenderConfig"
import { RenderConfig as NewGridImageSKL } from "./themes/skylink-lab/GridImage/RenderConfig"
import { RenderConfig as NewSKLLabHeader } from "./themes/skylink-lab/header/RenderConfig"
import { RenderConfig as NewImageSKLLab } from "./themes/skylink-lab/imageCustom/RenderConfig"
import { RenderConfig as NewImageKeyAI } from "./themes/skylink-lab/ImageKeyAI/RenderConfig"
import { RenderConfig as NewListKeyAI } from "./themes/skylink-lab/ListKeyAI/RenderConfig"
import { RenderConfig as NewProfileCustomerCard } from "./themes/skylink-lab/ProfileCustomerCard/RenderConfig"
import { RenderConfig as NewSimpleSliders } from "./themes/skylink-lab/SimpleSliders/RenderConfig"
import { RenderConfig as NewSKLLabHeading } from "./themes/skylink-lab/SKLLabHeading/RenderConfig"

export const newRenderComponents = {
  Container: NewContainer,
  // Columns: NewColumns,
  Box: NewBox,
  VericalSpace: NewVericalSpace,
  Heading: NewHeading,
  Text: NewText,
  Button: NewButton,
  // CustomTabs: NewCustomTabs,
  // ButtonLocation: NewButtonLocation,
  ImageConfig: NewImage,
  ImageCard: NewImageCard,
  VideoConfig: NewVideo,
  GalleryConfig: NewGallery,
  GalleryLayoutConfig: NewGalleryLayout,
  // ProfileUserCard: NewProfileUserCard,
  SimpleSliderConfig: NewSimpleSlider,
  // PostGridByCategoryConfig: NewPostGridByCategory,
  PhotoLibrary: NewPhotoLibrary,
  VideoLibrary: NewVideoLibrary,
  DropDown: NewDropDown,
  // New components
  IconSocial: NewIconSocial,
  Input: Input,
  BannerHover: NewBannerHover,
  SKLLabHeading: NewSKLLabHeading,
  SKLSimpleSlider: NewSimpleSliders,
  EnhancedIconBox: NewEnhancedIconBox,
  ListKeyAI: NewListKeyAI,
  ImageKeyAI: NewImageKeyAI,
  CustomCounter: NewCustomCounter,
  CardOurCoreValue: NewCardOurCoreValue,
  ProfileCustomerCard: NewProfileCustomerCard,
  SKLLabHeader: NewSKLLabHeader,
  SKLLabFooter: NewSKLLabFooter,
  ButtonSKLLab: NewButtonSKLLab,
  ImageSKLLab: NewImageSKLLab,
  CollapseSKLLab: NewCollapseSKLLab,
  CustomImage: NewCustomImage,
  ContentCard: NewContentCard,
  ContactUsSKLLabs: NewContactUsSKLLabs,
  GridImageSKL: NewGridImageSKL,
  SKLAutoSlider: NewSKLAutoSlider,
}

// @ts-ignore
export const newRenderConfig: Config = {
  components: {
    ...newRenderComponents,
  },
  ...common,
}
