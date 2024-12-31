"use client"
import { ComponentConfig } from "@measured/puck"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import { configs, DefaultImage } from "../../../external-components"
import useIsMobile from "../../lib/use-is-mobile"

export interface GalleryLayoutProps {
  items: { id?: number; image?: string; url: string; title: string; description?: string }[]
  effectType?: string
  duration?: number
}

export const RenderConfig: ComponentConfig<GalleryLayoutProps> = {
  // @TODO: missing Responsive CSS @datvct
  render: ({ items }) => {
    const isMobile = useIsMobile()

    useEffect(() => {
      AOS.init({})
    }, [])

    return (
      <div className="flex flex-col sm:!grid sm:grid-cols-3 gap-3 sm:gap-6 px-4 sm:p-0">
        <div className="flex flex-row sm:flex-col gap-3 sm:gap-6 " data-aos="fade-right" data-aos-duration="1000">
          <div className="w-1/2 sm:w-full h-[13.75rem] sm:h-[318px] overflow-hidden rounded-2xl relative group cursor-pointer">
            <img
              src={items[0]?.image ? `${configs.API_URL}${items[0]?.image}` : DefaultImage}
              alt="imageStaff"
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#0000004D] transition-opacity duration-300 ease-in-out sm:group-hover:opacity-0 sm:group-hover:hidden"></div>
            <div className="absolute bottom-0 bg-gradient-to-t from-[#00A19A] to-transparent rounded-2xl transition-all duration-300 ease-in-out sm:from-transparent sm:to-transparent sm:group-hover:bg-gradient-to-t sm:group-hover:from-[#00A19A] sm:group-hover:to-transparent sm:group-hover:rounded-2xl">
              <div className="font-medium text-base leading-5 text-left text-white uppercase p-4 sm:font-extrabold sm:text-xl sm:w-full transition-colors duration-300">
                {items[0]?.title}
              </div>
            </div>
          </div>

          <div className="w-1/2 sm:w-full h-[13.75rem] sm:h-[318px] overflow-hidden rounded-2xl relative group cursor-pointer">
            <img
              src={items[1]?.image ? `${configs.API_URL}${items[1]?.image}` : DefaultImage}
              alt="imageStudent1"
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#0000004D] transition-opacity duration-300 ease-in-out sm:group-hover:opacity-0 sm:group-hover:hidden"></div>
            <div className="absolute bottom-0 bg-gradient-to-t from-[#00A19A] to-transparent rounded-2xl transition-all duration-300 ease-in-out sm:from-transparent sm:to-transparent sm:group-hover:bg-gradient-to-t sm:group-hover:from-[#00A19A] sm:group-hover:to-transparent sm:group-hover:rounded-2xl">
              <div className="font-medium text-base leading-5 text-left uppercase text-white p-4 sm:font-extrabold sm:text-xl sm:w-full transition-colors duration-300">
                {items[0]?.description}
              </div>
            </div>
          </div>
        </div>
        {isMobile ? (
          <div style={{ height: "13.75rem" }}>
            <a href={items[1]?.url || "#"} style={{ position: "relative", display: "block" }}>
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "1rem",
                  width: "100%",
                  height: "13.75rem",
                }}
              >
                <img
                  src={items[2]?.image ? `${configs.API_URL}${items[2]?.image}` : DefaultImage}
                  alt="imageCustomer4"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    transform: "scale(1)",
                    transition: "transform 0.3s ease",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                    transition: "opacity 0.3s ease-in-out",
                  }}
                ></div>
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  borderRadius: "1rem",
                  transition: "background 0.3s ease-in-out",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    color: "white",
                    gap: "1rem",
                    padding: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "22px",
                      textAlign: "left",
                    }}
                  >
                    {items[1].title}
                  </div>
                  <div
                    style={{
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "22px",
                      textAlign: "left",
                    }}
                  >
                    {items[1].description}
                  </div>
                </div>
              </div>
            </a>
          </div>
        ) : (
          <div className="h-[13.75rem] sm:h-[41.25rem]">
            <a href={items[1]?.url || "#"} className="relative group">
              <div className="relative h-full w-full sm:w-auto overflow-hidden rounded-2xl">
                <img
                  src={items[2]?.image ? `${configs.API_URL}${items[2]?.image}` : DefaultImage}
                  alt="imageCustomer4"
                  className="h-full w-full sm:w-auto object-cover transform transition-transform duration-300 hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-[#0000004D] transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                  data-aos="zoom-in"
                  data-aos-duration="500"
                ></div>
              </div>
              <div
                className="absolute bottom-0 ease-in-out bg-gradient-to-t  group-hover:rounded-2xl group-hover:bg-gradient-to-t group-hover:from-[#00A19A] 
               group-hover:to-transparent transition-transform duration-300"
              >
                <div className="flex flex-col justify-between text-white gap-3.5 sm:gap-[5.375rem] p-5 sm:p-8">
                  <div className="font-medium text-base leading-5.5 sm:text-xl sm:leading-[28px] sm:font-extrabold text-left">
                    {items[1].title}
                  </div>
                  <div className="text-base font-medium sm:text-xl sm:leading-[28px] text-left sm:font-extrabold">
                    {items[1].description}
                  </div>
                </div>
              </div>
            </a>
          </div>
        )}

        <div className="flex flex-row sm:flex-col gap-3 sm:gap-6" data-aos="fade-left" data-aos-duration="500">
          <div className="flex flex-row sm:flex-col gap-3 sm:gap-6 " data-aos="fade-right" data-aos-duration="1000">
            <div className="w-1/2 sm:w-full h-[13.75rem] sm:h-[318px] overflow-hidden rounded-2xl relative group cursor-pointer">
              <img
                src={items[3]?.image ? `${configs.API_URL}${items[3]?.image}` : DefaultImage}
                alt="imageStudent1"
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#0000004D] transition-opacity duration-300 ease-in-out sm:group-hover:opacity-0 sm:group-hover:hidden"></div>
              <div className="absolute bottom-0 bg-gradient-to-t from-[#00A19A] to-transparent rounded-2xl transition-all duration-300 ease-in-out sm:from-transparent sm:to-transparent sm:group-hover:bg-gradient-to-t sm:group-hover:from-[#00A19A] sm:group-hover:to-transparent sm:group-hover:rounded-2xl">
                <div className="sm:font-extrabold font-medium sm:text-xl text-base leading-5 sm:w-full text-left uppercase text-white transition-colors duration-300 p-4">
                  {items[2]?.description}
                </div>
              </div>
            </div>

            <div className="w-1/2 sm:w-full h-[13.75rem] sm:h-[318px] overflow-hidden rounded-2xl relative group cursor-pointer">
              <img
                src={items[4]?.image ? `${configs.API_URL}${items[4]?.image}` : DefaultImage}
                alt="imageStaff"
                className="w-full h-[318px] object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#0000004D] transition-opacity duration-300 ease-in-out sm:group-hover:opacity-0 sm:group-hover:hidden"></div>
              <div className="absolute bottom-0 bg-gradient-to-t from-[#00A19A] to-transparent rounded-2xl transition-all duration-300 ease-in-out sm:from-transparent sm:to-transparent sm:group-hover:bg-gradient-to-t sm:group-hover:from-[#00A19A] sm:group-hover:to-transparent sm:group-hover:rounded-2xl">
                <div className="sm:font-extrabold font-medium sm:text-xl text-base leading-5 sm:w-full text-left uppercase text-white transition-colors duration-300 p-4">
                  {items[2]?.title}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
}
