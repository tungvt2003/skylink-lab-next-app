import { Input } from "antd"
import { RenderConfig as Box } from "./blocks/Box/RenderConfig"
import { RenderConfig as Button } from "./blocks/Button/RenderConfig"
import { RenderConfig as ButtonLocation } from "./blocks/ButtonLocation/RenderConfig"
import { RenderConfig as Columns } from "./blocks/Columns/RenderConfig"
import { RenderConfig as Container } from "./blocks/Container/RenderConfig"
import { RenderConfig as DropDown } from "./blocks/DropDown/RenderConfig"
import { RenderConfig as Gallery } from "./blocks/Gallery/RenderConfig"
import { RenderConfig as GalleryLayout } from "./blocks/GalleryLayout/RenderConfig"
import { RenderConfig as Heading } from "./blocks/Heading/RenderConfig"
import { RenderConfig as Image } from "./blocks/Image/RenderConfig"
import { RenderConfig as ImageCard } from "./blocks/ImageCard/RenderConfig"
import { RenderConfig as PhotoLibrary } from "./blocks/PhotoLibrary/RenderConfig"
import { RenderConfig as PostGridByCategory } from "./blocks/PostGridByCategory/RenderConfig"
import { RenderConfig as ProfileUserCard } from "./blocks/ProfileUserCard/RenderConfig"
import { RenderConfig as SimpleSlider } from "./blocks/SimpleSliders/RenderConfig"
import { RenderConfig as CustomTabs } from "./blocks/Tabs/RenderConfig"
import { RenderConfig as Text } from "./blocks/Text/RenderConfig"
import { RenderConfig as VericalSpace } from "./blocks/VerticalSpace/RenderConfig"
import { RenderConfig as Video } from "./blocks/Video/RenderConfig"
import { RenderConfig as VideoLibrary } from "./blocks/VideoLibrary/RenderConfig"
import { RenderConfig as ManuBGButton } from "./themes/manu-bacgiang/Button/RenderConfig"
import { RenderConfig as ManuBGCountDown } from "./themes/manu-bacgiang/Countdown/RenderConfig"
import { RenderConfig as ManuBGRegister } from "./themes/manu-bacgiang/FormRegister/RenderConfig"
import { RenderConfig as ManuBGDropDown } from "./themes/manu-bacgiang/ManDropDown/RenderConfig"
import { RenderConfig as ButtonMTA } from "./themes/manu/Button/RenderConfig"
import { RenderConfig as FormRegister } from "./themes/manu/FormRegister/RenderConfig"
import { SliderScroll } from "./themes/manu/SliderScroll"
import { SKELPEnrollmentCard } from "./themes/ske-landing-page/EnrollmentCard/SKEEnrollmentCard"
import { SKELPEnrollmentCard2 } from "./themes/ske-landing-page/EnrollmentCard2/SKEEnrollmentCard"
import { SKELPFormRegister } from "./themes/ske-landing-page/FormRegister"
import { SKELPGalleryLayout } from "./themes/ske-landing-page/GalleryLayout"
import { SKELPPopup } from "./themes/ske-landing-page/Popup"
import { SKELPRegister } from "./themes/ske-landing-page/SKESchoolSystem/SKESchoolSystem"
import { SKELPCustomTabs } from "./themes/ske-landing-page/Tabs"
import { SKELPTuitionCard } from "./themes/ske-landing-page/TuitionCard/SKEEnrollmentCard"
import { RenderConfig as SKEActionButton } from "./themes/ske/ActionButton/RenderConfig"
import { SKEBaseSystem } from "./themes/ske/BaseSystem"
import { SKEContactForm } from "./themes/ske/ContactForm"
import { RenderConfig as SKEContentDescription } from "./themes/ske/ContentDescription/RenderConfig"
import { RenderConfig as SKEContentHeading } from "./themes/ske/ContentHeading/RenderConfig"
import { RenderConfig as SKEContentText } from "./themes/ske/ContentText/RenderConfig"
import { ManCountdown } from "./themes/ske/Countdown/ManCountdown"
import { SKEEducationalCard } from "./themes/ske/EducationalCard/SKEEnrollmentCard"
import { RenderConfig as SKEEnrollmentCard } from "./themes/ske/EnrollmentCard/RenderConfig"
import { RenderConfig as SKEEnrollmentProcess } from "./themes/ske/EnrollmentProcess/RenderConfig"
import { ImageFlip } from "./themes/ske/ImageFlip"
import { RenderConfig as ImageSection } from "./themes/ske/ImageSection/RenderConfig"
import { ManDropDown } from "./themes/ske/ManDropDown"
import { SKEProcessSlide } from "./themes/ske/ProcessSlide/ProcessSlide"
import { RenderConfig as SKEFooter } from "./themes/ske/SKEFooter/RenderConfig"
import { RenderConfig as SKESchoolSystem } from "./themes/ske/SKESchoolSystem/RenderConfig"
import { RenderConfig as SKESimpleSlider } from "./themes/ske/SKESimpleSlider/RenderConfig"
import { RenderConfig as SKETabBlockWithMedia } from "./themes/ske/SKETabBlockWithMedia/RenderConfig"
import { SKECustomTabs } from "./themes/ske/Tabs"
import { RenderConfig as SKETitle } from "./themes/ske/Tittle/RenderConfig"

export const renderComponents = {
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
  SKETitle,
  SKEActionButton,
  SKEContentHeading,
  SKEContentText,
  SKEContentDescription,
  PhotoLibrary,
  VideoLibrary,
  DropDown,
  SKEEnrollmentProcess,
  SKEEnrollmentCard,
  ImageSection,
  ManCountdown,
  Input,
  ManDropDown,
  SliderScroll,
  FormRegister,
  ButtonMTA,
  SKESchoolSystem,
  SKESimpleSlider,
  SKEFooter,
  ManuBGButton,
  ManuBGCountDown,
  ManuBGRegister,
  ManuBGDropDown,
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
}
