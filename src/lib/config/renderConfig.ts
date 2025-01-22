import { Config } from "@measured/puck"
import { Box } from "./blocks/Box"
import { Button } from "./blocks/Button"
import { ButtonLocation } from "./blocks/ButtonLocation"
import { Columns } from "./blocks/Columns"
import { Container } from "./blocks/Container"
import { DropDown } from "./blocks/DropDown"
import { Gallery } from "./blocks/Gallery"
import { GalleryLayout } from "./blocks/GalleryLayout"
import { Heading } from "./blocks/Heading"
import { IconSocial } from "./blocks/IconSocial"
import { Image } from "./blocks/Image"
import { ImageCard } from "./blocks/ImageCard"
import { Input } from "./blocks/Input"
import { PhotoLibrary } from "./blocks/PhotoLibrary"
import { PostGridByCategory } from "./blocks/PostGridByCategory"
import { ProfileUserCard } from "./blocks/ProfileUserCard"
import { SimpleSlider } from "./blocks/SimpleSliders"
import { CustomTabs } from "./blocks/Tabs"
import { Text } from "./blocks/Text"
import { VericalSpace } from "./blocks/VerticalSpace"
import { Video } from "./blocks/Video"
import { VideoLibrary } from "./blocks/VideoLibrary"
import { SKLAutoSlider } from "./themes/skylink-lab/AutoSliders"
import { BannerHover } from "./themes/skylink-lab/bannerHover"
import { ButtonSKLLab } from "./themes/skylink-lab/button"
import { CardOurCoreValue } from "./themes/skylink-lab/CardOurCoreValue"
import { CollapseSKLLab } from "./themes/skylink-lab/collapseCustom"
import { ContactUsSKLLabs } from "./themes/skylink-lab/ContactUs"
import { ContentCard } from "./themes/skylink-lab/ContentCard"
import { CustomCounter } from "./themes/skylink-lab/CustomCounter"
import { CustomImage } from "./themes/skylink-lab/CustomImage"
import { EnhancedIconBox } from "./themes/skylink-lab/EnhancedIconBox"
import { SKLLabFooter } from "./themes/skylink-lab/footer"
import { GridImageSKL } from "./themes/skylink-lab/GridImage"
import { SKLLabHeader } from "./themes/skylink-lab/header"
import { ImageSKLLab } from "./themes/skylink-lab/imageCustom"
import { ImageKeyAI } from "./themes/skylink-lab/ImageKeyAI"
import { ListKeyAI } from "./themes/skylink-lab/ListKeyAI"
import { ProfileCustomerCard } from "./themes/skylink-lab/ProfileCustomerCard"
import { SKLSimpleSlider } from "./themes/skylink-lab/SimpleSliders"
import { SKLLabHeading } from "./themes/skylink-lab/SKLLabHeading"
import { Benefits } from "./themes/skylink-studio/benefits"
import { GridImageSKS } from "./themes/skylink-studio/GridImage"
import { JobGrid } from "./themes/skylink-studio/JobGrid"

export const renderConfig: Config = {
  components: {
    // ...renderComponents,
    // ...uiBuilderComponents,
    Container,
    Columns,
    Box,
    VericalSpace,
    Heading,
    Text,
    Button,
    CustomTabs,
    ButtonLocation,
    Image,
    ImageCard,
    Video,
    Gallery,
    GalleryLayout,
    ProfileUserCard,
    SimpleSlider,
    PostGridByCategory,
    PhotoLibrary,
    VideoLibrary,
    DropDown,
    IconSocial,
    Input,
    SKLLabFooter,
    SKLLabHeader,
    BannerHover,
    ButtonSKLLab,
    CardOurCoreValue,
    CollapseSKLLab,
    ContentCard,
    CustomCounter,
    CustomImage,
    EnhancedIconBox,
    ImageSKLLab,
    ImageKeyAI,
    ListKeyAI,
    ProfileCustomerCard,
    SKLSimpleSlider,
    SKLLabHeading,
    ContactUsSKLLabs,
    GridImageSKL,
    SKLAutoSlider,
    Benefits,
    JobGrid,
    GridImageSKS,
  },
  // ...commonConfig,
  categories: {
    layout: {
      title: "Layout",
      components: ["Container", "Columns", "Box", "VericalSpace"],
    },
    content: {
      title: "Content",
      components: ["Heading", "Text", "Button", "ButtonLocation", "DropDown", "IconSocial"],
    },
    media: {
      title: "Media",
      components: ["ImageConfig", "ImageCard", "VideoConfig"],
    },
    data: {
      title: "Data",
      components: [
        "GalleryLayoutConfig",
        "GalleryConfig",
        "ProfileUserCard",
        "SimpleSliderConfig",
        "PostGridByCategoryConfig",
        "CustomTabs",
      ],
    },
    theme: {
      title: "Themes - Skylink Studio",
      components: ["GridImageSKS", "JobGrid", "Benefits"],
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
