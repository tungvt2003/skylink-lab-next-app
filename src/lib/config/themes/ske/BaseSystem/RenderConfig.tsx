"use client"

import { EnvironmentOutlined, PhoneOutlined } from "@ant-design/icons"
import { ComponentConfig } from "@measured/puck"
import { GoogleMap, InfoWindow, MarkerF, useJsApiLoader } from "@react-google-maps/api"
import { Spin } from "antd"
import { useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"
import { iconLocationMap, iconMailMap, iconPhoneMap } from "../../../../external-components"
import httpClient from "../../../../http-client"
import { CommonStylesProps } from "../../../lib/commonCSSProps"
import { generateResponsiveCSS } from "../../../lib/helper"
import "./google-map.css"

export interface BaseSystemProps extends CommonStylesProps {
  title?: string
  subTitle?: string
}

interface BaseSystem {
  id: string
  attributes: {
    name: string
    email: string
    workingTime: string
    address: string
    hotline: string
    latitude: string
    longitude: string
    linkMap: string
  }
}

export const RenderConfig: ComponentConfig<BaseSystemProps> = {
  render: ({ styles, responsiveType, className, title, subTitle }) => {
    const id = `form-register-${Math.random().toString(36).substr(2, 9)}`

    const [baseSystems, setBaseSystems] = useState<BaseSystem[]>([])
    const [selectedStore, setSelectedStore] = useState<BaseSystem | null>(null)

    const containerStyle = {
      width: "100%",
      height: "100%",
    }

    const fetchData = async () => {
      try {
        const response = await httpClient.get<{ data: any }>("base-systems?populate=*&sort=id:ASC")
        const baseSystems = response.data
        setBaseSystems(response?.data)
        return baseSystems
      } catch (error) {
        console.error("Error fetching base systems:", error)
        throw error
      }
    }

    useEffect(() => {
      fetchData()
    }, [])

    useEffect(() => {
      if (baseSystems.length > 0) {
        setSelectedStore(baseSystems[0])

        const { latitude, longitude } = baseSystems[0].attributes
      }
    }, [baseSystems])

    const { isLoaded } = useJsApiLoader({
      id: "google-map-script",
      googleMapsApiKey: "AIzaSyDGodfPRJzvat54G3EAHM87ymkPGL2HsvE",
    })

    const mergedStyles = {
      mobile: { ...styles?.mobile },
      tablet: { ...styles?.tablet },
      desktop: { ...styles?.desktop },
    }

    const responsiveCSS = generateResponsiveCSS(id, mergedStyles || {}, responsiveType)

    return (
      <>
        {responsiveCSS}
        <div className={`${id} ${twMerge(className)} w-full text-center bg-[#F5F6FE] rounded-xl`}>
          <div className="flex sm:flex-row flex-col-reverse sm:gap-3 gap-0 sm:min-h-[33rem] sm:h-[280px] ">
            <div className="w-full sm:w-[46%] overflow-y-auto">
              <div className="bg-green text-white sm:text-lg text-base font-bold p-3 uppercase sm:block hidden">
                {title}
              </div>
              <div className="">
                {baseSystems?.map((base, index) => (
                  <div
                    key={base.id}
                    className={`flex flex-col gap-1 sm:gap-2 sm:px-3 sm:py-4 p-3 border sm:border-b sm:border-r-0 cursor-pointer 
                    ${selectedStore?.id === base.id ? "bg-gray-tertiary" : "hover:bg-gray-100"}
                    ${index === baseSystems.length - 1 ? "border rounded-none" : ""}`}
                    onClick={() => {
                      setSelectedStore(base)
                    }}
                  >
                    <p className="font-semibold sm:text-sm text-[13px] leading-[21px] sm:leading-5 text-justify">
                      {base.attributes.name}
                    </p>
                    <div className="flex sm:ml-2 gap-2">
                      <EnvironmentOutlined className="sm:block hidden" />
                      <p className="font-normal text-sm leading-5 text-justify">{base.attributes.address}</p>
                    </div>
                    <div className="sm:ml-2 gap-2 sm:flex hidden">
                      <PhoneOutlined />
                      <p className="font-normal text-sm leading-5">{base.attributes.hotline}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full sm:w-[54%] h-full">
              <div className="bg-green text-white sm:text-lg text-base font-bold p-3 uppercase sm:hidden block">
                {title}
              </div>
              <div className="h-[280px] sm:h-full relative">
                {isLoaded && selectedStore ? (
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={{
                      lat: parseFloat(selectedStore.attributes.latitude),
                      lng: parseFloat(selectedStore.attributes.longitude),
                    }}
                    zoom={16}
                    options={{ disableDefaultUI: true }}
                  >
                    {selectedStore && (
                      <>
                        <MarkerF
                          position={{
                            lat: parseFloat(selectedStore.attributes.latitude),
                            lng: parseFloat(selectedStore.attributes.longitude),
                          }}
                          onClick={() => setSelectedStore(selectedStore)}
                        />
                        <InfoWindow
                          position={{
                            lat: parseFloat(selectedStore.attributes.latitude),
                            lng: parseFloat(selectedStore.attributes.longitude),
                          }}
                        >
                          <div className="sm:w-[25rem] bg-white p-1">
                            <div className="flex flex-col gap-2 mb-2 pb-2 border-b border-black/10">
                              <div className="flex items-start gap-1 text-justify">
                                <img className="h-3 w-3" src={iconLocationMap} alt="input" />
                                <a href={selectedStore?.attributes.linkMap} target="_blank" rel="noopener noreferrer">
                                  <div className="font-normal text-sm">{selectedStore?.attributes.address}</div>
                                </a>
                              </div>
                              <div className="flex justify-between">
                                <div className="flex items-center gap-1">
                                  <img className="h-3 w-3" src={iconMailMap} alt="input" />
                                  <div className="font-normal text-sm">{selectedStore.attributes.email}</div>
                                </div>
                                <div className="flex items-center gap-1">
                                  <img className="h-3 w-3" src={iconPhoneMap} alt="input" />
                                  <div className="font-normal text-sm">{selectedStore.attributes.hotline}</div>
                                </div>
                              </div>
                            </div>
                            <div className="font-normal text-sm text-justify">
                              Giờ làm việc: {selectedStore.attributes.workingTime}
                            </div>
                          </div>
                        </InfoWindow>
                      </>
                    )}
                  </GoogleMap>
                ) : (
                  <div className="flex items-center justify-center min-h-[500px]">
                    <Spin size="large" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  },
}
