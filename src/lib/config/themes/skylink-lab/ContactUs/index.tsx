"use client"
import { ComponentConfig } from "@measured/puck"
import { commonStylesProps } from "../../../lib/commonCSSProps"
import { ContactUsProps, RenderConfig } from "./RenderConfig"

export const ContactUsSKLLabs: ComponentConfig<ContactUsProps> = {
  label: "Contact Us Custom",
  //@ts-ignore
  fields: {
    title: {
      label: "Title",
      type: "text",
    },
    fullNameCompany: {
      label: "Full Name Company",
      type: "text",
    },
    nameLocation: {
      label: "Name Location",
      type: "text",
    },
    phone: {
      label: "Phone",
      type: "text",
    },
    iframeSrc: {
      label: "Iframe Src",
      type: "text",
    },

    titleForm: {
      label: "Title Form",
      type: "text",
    },
    ...commonStylesProps,
  },
  defaultProps: {
    title: "SKYLINK Labs",
    fullNameCompany: "SKYLINK LABS TECHNOLOGY JOINT STOCK COMPANY",
    phone: "086.254.9999",
    nameLocation:
      "8th floor, Cantavil Premier Building, No. 1 Song Hanh - Xa Lo Ha Noi, An Phu Ward, Thu Duc City, HCMC.",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.121904912063!2d106.74653362656525!3d10.801974310048596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317526119e7aaaab%3A0xd6f9d15fc87d3d3e!2sCantavil%20Premier!5e0!3m2!1svi!2s!4v1735982733895!5m2!1svi!2s",
    width: "100%",
    height: "100%",
    titleForm: "Your information",
    className: "",
    styles: {
      mobile: {
        display: "block",
      },
      tablet: {
        display: "block",
      },
      desktop: {
        display: "block",
      },
    },
  },
  ...RenderConfig,
}
