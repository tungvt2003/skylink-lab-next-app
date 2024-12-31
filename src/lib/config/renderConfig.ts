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
import { SKEProcessSlide } from "./themes/ske/ProcessSlide/ProcessSlide"
import { RelationshipLayout } from "./themes/ske/RelationshipLayout"
import { SKEFooter } from "./themes/ske/SKEFooter/SKEFooter"
import { SKERecruiment } from "./themes/ske/SKERecruitment/SKERecruitment"
import { SKESchoolSystem } from "./themes/ske/SKESchoolSystem/SKESchoolSystem"
import { SKESimpleSlider } from "./themes/ske/SKESimpleSlider/SKESimpleSlider"
import { SKETabBlockWithMedia } from "./themes/ske/SKETabBlockWithMedia/SKETabBlockWithMedia"
import { SKECustomTabs } from "./themes/ske/Tabs"
import { SKETitle } from "./themes/ske/Tittle/SKETitle"

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
    MultiLayout,
    ProfileUserCard,
    SimpleSlider,
    PostGridByCategory,
    SKETitle,
    SKEActionButton,
    SKEContentHeading,
    SKEContentText,
    SKEContentDescription,
    SKERecruiment,
    PhotoLibrary,
    VideoLibrary,
    DropDown,
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
    SKEContactForm,
    SKEBaseSystem,
    SKEEducationalCard,
    SKECustomTabs,
    SKEProcessSlide,
    SKETabBlockWithMedia,
    ImageFlip
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
    themes: {
      title: "Themes - SKE",
      components: [
        "SKETitle",
        "SKEActionButton",
        "SKEContentHeading",
        "SKEContentText",
        "SKEEnrollmentProcess",
        "SKEEnrollmentCard",
        "SKESchoolSystem",
        "SKESimpleSlider",
        "SKEFooter",
        "SKEContactForm",
        "SKEBaseSystem",
        "SKEEducationalCard",
        "SKECustomTabs",
        "SKEProcessSlide",
        "SKETabBlockWithMedia",
        "ImageFlip",
      ],
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
        "SKELPPopup",
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
