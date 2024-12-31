"use client"

import { AppProgressBar } from "next-nprogress-bar"
import { Suspense } from "react"

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Suspense>
        <AppProgressBar height="2px" color="#01A19A" options={{ showSpinner: false }} delay={500} />
      </Suspense>
      {children}
    </>
  )
}

export default Providers
