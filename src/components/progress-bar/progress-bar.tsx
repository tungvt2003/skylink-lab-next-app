"use client"

import { AppProgressBar } from "next-nprogress-bar"
import { Suspense } from "react"

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Suspense>
        <AppProgressBar height="2px" color="#e03cdb" options={{ showSpinner: false }} delay={500} />
      </Suspense>
      {children}
    </>
  )
}

export default Providers
