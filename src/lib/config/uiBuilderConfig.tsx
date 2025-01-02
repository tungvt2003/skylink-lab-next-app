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
import { PostGridByCategory as PostGridByCategoryConfig } from "./blocks/PostGridByCategory"
import { ProfileUserCard } from "./blocks/ProfileUserCard"
import { SimpleSlider as SimpleSliderConfig } from "./blocks/SimpleSliders"
import { Text } from "./blocks/Text"
import { VericalSpace } from "./blocks/VerticalSpace"
import { Video as VideoConfig } from "./blocks/Video"
import { VideoLibrary } from "./blocks/VideoLibrary"
import { ButtonMABG } from "./themes/manu-bacgiang/Button"
import { ManuCountdownBG } from "./themes/manu-bacgiang/Countdown/ManCountdown"
import { FormRegisterBG } from "./themes/manu-bacgiang/FormRegister"
import { ManuDropDownBG } from "./themes/manu-bacgiang/ManDropDown"
import { ButtonMA } from "./themes/manu/Button"
import { FormRegister } from "./themes/manu/FormRegister"
import { SliderScroll } from "./themes/manu/SliderScroll"
import { SKELPEnrollmentCard } from "./themes/ske-landing-page/EnrollmentCard/SKEEnrollmentCard"
import { SKELPEnrollmentCard2 } from "./themes/ske-landing-page/EnrollmentCard2/SKEEnrollmentCard"
import { SKELPFormRegister } from "./themes/ske-landing-page/FormRegister"
import { SKELPGalleryLayout } from "./themes/ske-landing-page/GalleryLayout"
import { SKELPPopup } from "./themes/ske-landing-page/Popup"
import { SKELPRegister } from "./themes/ske-landing-page/SKESchoolSystem/SKESchoolSystem"
import { SKELPCustomTabs } from "./themes/ske-landing-page/Tabs"
import { SKELPTuitionCard } from "./themes/ske-landing-page/TuitionCard/SKEEnrollmentCard"
import { SKEActionButton } from "./themes/ske/ActionButton/SKEActionButton"
import { SKEBaseSystem } from "./themes/ske/BaseSystem"
import { SKEContactForm } from "./themes/ske/ContactForm"
import { SKEContentDescription } from "./themes/ske/ContentDescription/SKEContentDescription"
import { SKEContentHeading } from "./themes/ske/ContentHeading/SKEContentHeading"
import { SKEContentText } from "./themes/ske/ContentText/SKEContentText"
import { ManCountdown } from "./themes/ske/Countdown/ManCountdown"
import { SKEEducationalCard } from "./themes/ske/EducationalCard/SKEEnrollmentCard"
import { SKEEnrollmentCard } from "./themes/ske/EnrollmentCard/SKEEnrollmentCard"
import { SKEEnrollmentProcess } from "./themes/ske/EnrollmentProcess/SKEEnrollmentProcess"
import { ImageFlip } from "./themes/ske/ImageFlip"
import { ImageSection } from "./themes/ske/ImageSection"
import { ManDropDown } from "./themes/ske/ManDropDown"
import { MultiLayout } from "./themes/ske/MultiLayout"
import { RelationshipLayout } from "./themes/ske/RelationshipLayout"
import { SKEFooter } from "./themes/ske/SKEFooter/SKEFooter"
import { SKERecruiment } from "./themes/ske/SKERecruitment/SKERecruitment"
import { SKESchoolSystem } from "./themes/ske/SKESchoolSystem/SKESchoolSystem"
import { SKESimpleSlider } from "./themes/ske/SKESimpleSlider/SKESimpleSlider"
import { SKETabBlockWithMedia } from "./themes/ske/SKETabBlockWithMedia/SKETabBlockWithMedia"
import { SKECustomTabs } from "./themes/ske/Tabs"
import { SKETitle } from "./themes/ske/Tittle/SKETitle"
import { SKLLabFooter } from "./themes/skylink-lab/footer"
import { SKLLabHeader } from "./themes/skylink-lab/header"

const components = {
  Container,
  Columns,
  Box,
  VericalSpace,
  Heading,
  Text,
  Button,
  CustomTabs,
  ButtonLocation,
  ImageCard,
  ProfileUserCard,
  SKETitle,
  SKEActionButton,
  SKEContentHeading,
  SKEContentText,
  SKEContentDescription,
  PhotoLibrary,
  VideoLibrary,
  DropDown,
  VideoConfig,
  ImageConfig,
  GalleryConfig,
  GalleryLayoutConfig,
  SimpleSliderConfig,
  PostGridByCategoryConfig,
  // New components
  MultiLayout,
  SKERecruiment,
  IconSocial,
  RelationshipLayout,
  SKEEnrollmentProcess,
  SKEEnrollmentCard,
  ImageSection,
  ManCountdown,
  Input,
  ManDropDown,
  SliderScroll,
  FormRegister,
  ButtonMA,
  SKESchoolSystem,
  SKESimpleSlider,
  SKEFooter,
  ButtonMABG,
  ManuCountdownBG,
  FormRegisterBG,
  ManuDropDownBG,
  SKELPEnrollmentCard,
  SKELPGalleryLayout,
  SKELPCustomTabs,
  SKELPRegister,
  SKELPTuitionCard,
  SKELPFormRegister,
  SKELPEnrollmentCard2,
  SKELPPopup,
  SKEBaseSystem,
  SKEContactForm,
  SKEEducationalCard,
  SKECustomTabs,
  SKEProcessSlide,
  SKETabBlockWithMedia,
  ImageFlip,
  SKLLabHeader,
  SKLLabFooter,
}

export const common = {
  categories: {
    layout: {
      title: "Layout",
      components: ["Container", "Columns", "Box", "VericalSpace"],
    },
    content: {
      title: "Content",
      components: ["Heading", "Text", "Button", "ButtonLocation", "DropDown"],
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
        "ProfileUserCard",
        "SimpleSliderConfig",
        "PostGridByCategoryConfig",
        "CustomTabs",
      ],
    },
    themes: {
      title: "Themes - SKE",
      components: [
        "SKETitle",
        "SKEActionButton",
        "SKEContentHeading",
        "SKEContentText",
        "SKEContentDescription",
        "MultiLayout",
        "SKERecruiment",
        "RelationshipLayout",
        "SKEEnrollmentProcess",
        "SKEEnrollmentCard",
        "SKESchoolSystem",
        "SKESimpleSlider",
        "ImageSection",
        "ManCountdown",
        "ManDropDown",
        "SKEFooter",
        "SKEBaseSystem",
        "SKEContactForm",
        "SKEEducationalCard",
        "SKECustomTabs",
        "SKEProcessSlide",
        "SKETabBlockWithMedia",
        "ImageFlip",
      ],
    },
    themesManu: {
      title: "Themes - Manu",
      components: ["SliderScroll", "FormRegister", "ButtonMA"],
    },
    themesManuBG: {
      title: "Themes - Manu Bac Giang",
      components: ["ButtonMABG", "ManuCountdownBG", "FormRegisterBG", "ManuDropDownBG"],
    },
    themesSKELandingpage: {
      title: "Themes - SKE Landing Page",
      components: [
        "SKELPEnrollmentCard",
        "SKELPGalleryLayout",
        "SKELPCustomTabs",
        "SKELPRegister",
        "SKELPTuitionCard",
        "SKELPFormRegister",
        "SKELPEnrollmentCard2",
      ],
    },
    themesSKLLab: {
      title: "Themes - SKYLINK Lab",
      components: ["SKLLabHeader", "SKLLabFooter"],
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
import { ButtonLocation } from "./blocks/ButtonLocation"
import { RenderConfig as NewButtonLocation } from "./blocks/ButtonLocation/RenderConfig"
import { RenderConfig as NewColumns } from "./blocks/Columns/RenderConfig"
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
import { RenderConfig as NewPostGridByCategory } from "./blocks/PostGridByCategory/RenderConfig"
import { RenderConfig as NewProfileUserCard } from "./blocks/ProfileUserCard/RenderConfig"
import { RenderConfig as NewSimpleSlider } from "./blocks/SimpleSliders/RenderConfig"
import { CustomTabs } from "./blocks/Tabs"
import { RenderConfig as NewCustomTabs } from "./blocks/Tabs/RenderConfig"
import { RenderConfig as NewText } from "./blocks/Text/RenderConfig"
import { RenderConfig as NewVericalSpace } from "./blocks/VerticalSpace/RenderConfig"
import { RenderConfig as NewVideo } from "./blocks/Video/RenderConfig"
import { RenderConfig as NewVideoLibrary } from "./blocks/VideoLibrary/RenderConfig"
import { RenderConfig as NewManuButtonBG } from "./themes/manu-bacgiang/Button/RenderConfig"
import { RenderConfig as NewManuCountdownBG } from "./themes/manu-bacgiang/Countdown/RenderConfig"
import { RenderConfig as NewManuFormRegisterBG } from "./themes/manu-bacgiang/FormRegister/RenderConfig"
import { RenderConfig as NewManuDropDownBG } from "./themes/manu-bacgiang/ManDropDown/RenderConfig"
import { RenderConfig as NewButtonMA } from "./themes/manu/Button/RenderConfig"
import { RenderConfig as NewFormRegister } from "./themes/manu/FormRegister/RenderConfig"
import { RenderConfig as NewManuSliderScroll } from "./themes/manu/SliderScroll/RenderConfig"
import { RenderConfig as NewSKELPEnrollmentCard2 } from "./themes/ske-landing-page/EnrollmentCard2/RenderConfig"
import { RenderConfig as NewSKELPFormRegister } from "./themes/ske-landing-page/FormRegister/RenderConfig"
import { RenderConfig as NewSKELPGalleryLayout } from "./themes/ske-landing-page/GalleryLayout/RenderConfig"
import { RenderConfig as NewSKELPPopup } from "./themes/ske-landing-page/Popup/RenderConfig"
import { RenderConfig as NewSKELPRegister } from "./themes/ske-landing-page/SKESchoolSystem/RenderConfig"
import { RenderConfig as NewSKELPCustomTabs } from "./themes/ske-landing-page/Tabs/RenderConfig"
import { RenderConfig as NewSKELPTuitionCard } from "./themes/ske-landing-page/TuitionCard/SKEEnrollmentCard"
import { RenderConfig as NewSKEActionButton } from "./themes/ske/ActionButton/RenderConfig"
import { RenderConfig as NewSKEBaseSystem } from "./themes/ske/BaseSystem/RenderConfig"
import { RenderConfig as NewSKEContactForm } from "./themes/ske/ContactForm/RenderConfig"
import { RenderConfig as NewSKEContentDescription } from "./themes/ske/ContentDescription/RenderConfig"
import { RenderConfig as NewSKEContentHeading } from "./themes/ske/ContentHeading/RenderConfig"
import { RenderConfig as NewSKEContentText } from "./themes/ske/ContentText/RenderConfig"
import { RenderConfig as NewSKEEducationalCard } from "./themes/ske/EducationalCard/RenderConfig"
import { RenderConfig as NewSKEEnrollmentCard } from "./themes/ske/EnrollmentCard/RenderConfig"
import { RenderConfig as NewSKEEnrollmentProcess } from "./themes/ske/EnrollmentProcess/RenderConfig"
import { RenderConfig as NewImageFlip } from "./themes/ske/ImageFlip/RenderConfig"
import { RenderConfig as NewImageSection } from "./themes/ske/ImageSection/RenderConfig"
import { RenderConfig as NewMultiLayout } from "./themes/ske/MultiLayout/RenderConfig"
import { SKEProcessSlide } from "./themes/ske/ProcessSlide/ProcessSlide"
import { RenderConfig as NewSKEProcessSlide } from "./themes/ske/ProcessSlide/RenderConfig"
import { RenderConfig as NewRelationshipLayout } from "./themes/ske/RelationshipLayout/RenderConfig"
import { RenderConfig as NewSKERecruiment } from "./themes/ske/SKERecruitment/RenderConfig"
import { RenderConfig as NewSKESchoolSystem } from "./themes/ske/SKESchoolSystem/RenderConfig"
import { RenderConfig as NewSKESimpleSlider } from "./themes/ske/SKESimpleSlider/RenderConfig"
import { RenderConfig as NewSKETabBlockWithMedia } from "./themes/ske/SKETabBlockWithMedia/RenderConfig"
import { RenderConfig as NewSKECustomTabs } from "./themes/ske/Tabs/RenderConfig"
import { RenderConfig as NewSKETitle } from "./themes/ske/Tittle/RenderConfig"
import { RenderConfig as NewSKLLabFooter } from "./themes/skylink-lab/footer/RenderConfig"
import { RenderConfig as NewSKLLabHeader } from "./themes/skylink-lab/header/RenderConfig"

export const newRenderComponents = {
  Container: NewContainer,
  Columns: NewColumns,
  Box: NewBox,
  VericalSpace: NewVericalSpace,
  Heading: NewHeading,
  Text: NewText,
  Button: NewButton,
  CustomTabs: NewCustomTabs,
  ButtonLocation: NewButtonLocation,
  ImageConfig: NewImage,
  ImageCard: NewImageCard,
  VideoConfig: NewVideo,
  GalleryConfig: NewGallery,
  GalleryLayoutConfig: NewGalleryLayout,
  ProfileUserCard: NewProfileUserCard,
  SimpleSliderConfig: NewSimpleSlider,
  PostGridByCategoryConfig: NewPostGridByCategory,
  SKETitle: NewSKETitle,
  SKEActionButton: NewSKEActionButton,
  SKEContentHeading: NewSKEContentHeading,
  SKEContentText: NewSKEContentText,
  SKEContentDescription: NewSKEContentDescription,
  PhotoLibrary: NewPhotoLibrary,
  VideoLibrary: NewVideoLibrary,
  DropDown: NewDropDown,
  // New components
  MultiLayout: NewMultiLayout,
  SKERecruiment: NewSKERecruiment,
  IconSocial: NewIconSocial,
  RelationshipLayout: NewRelationshipLayout,
  SKEEnrollmentProcess: NewSKEEnrollmentProcess,
  SKEEnrollmentCard: NewSKEEnrollmentCard,
  ImageSection: NewImageSection,
  ManCountdown: ManCountdown,
  Input: Input,
  ManDropDown: ManDropDown,
  SliderScroll: NewManuSliderScroll,
  FormRegister: NewFormRegister,
  ButtonMA: NewButtonMA,
  SKESchoolSystem: NewSKESchoolSystem,
  SKESimpleSlider: NewSKESimpleSlider,
  SKEFooter: SKEFooter,
  ButtonMABG: NewManuButtonBG,
  ManuCountdownBG: NewManuCountdownBG,
  FormRegisterBG: NewManuFormRegisterBG,
  ManuDropDownBG: NewManuDropDownBG,
  SKELPEnrollmentCard: SKELPEnrollmentCard,
  SKELPGalleryLayout: NewSKELPGalleryLayout,
  SKELPCustomTabs: NewSKELPCustomTabs,
  SKELPRegister: NewSKELPRegister,
  SKELPTuitionCard: NewSKELPTuitionCard,
  SKELPFormRegister: NewSKELPFormRegister,
  SKELPEnrollmentCard2: NewSKELPEnrollmentCard2,
  SKELPPopup: NewSKELPPopup,
  SKEBaseSystem: NewSKEBaseSystem,
  SKEContactForm: NewSKEContactForm,
  SKEEducationalCard: NewSKEEducationalCard,
  SKECustomTabs: NewSKECustomTabs,
  SKEProcessSlide: NewSKEProcessSlide,
  SKETabBlockWithMedia: NewSKETabBlockWithMedia,
  ImageFlip: NewImageFlip,
  SKLLabHeader: NewSKLLabHeader,
  SKLLabFooter: NewSKLLabFooter,
}

// @ts-ignore
export const newRenderConfig: Config = {
  components: {
    ...newRenderComponents,
  },
  ...common,
}
