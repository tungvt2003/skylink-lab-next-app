import { NextResponse } from "next/server"
import httpClient from "../../../lib/http-client"

export async function POST(req: Request) {
  try {
    const { locale } = await req.json()

    const dictionaries = await httpClient.get<{ data: any }>(`dictionaries?populate=*&pagination[pageSize]=100`)

    if (!Array.isArray(dictionaries.data)) {
      return NextResponse.json({ error: "Invalid dictionaries data" }, { status: 500 })
    }

    const texts = dictionaries.data.map((e: any) => {
      const {
        attributes: { vi, en, key },
      } = e
      return { vi, en, key }
    })

    const response = texts
      .map((e: any) => ({ [e.key]: e[locale] }))
      .reduce((prev: any, curr: any) => {
        return { ...prev, ...curr }
      }, {})

    return NextResponse.json({ ...response })
  } catch (error) {
    console.error("Error in POST:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const locale = searchParams.get("locale") || "vi"

    const dictionaries = await httpClient.get<{ data: any }>(`dictionaries?populate=*&pagination[pageSize]=100`)

    if (!Array.isArray(dictionaries.data)) {
      return NextResponse.json({ error: "Invalid dictionaries data" }, { status: 500 })
    }

    const texts = dictionaries.data.map((e: any) => {
      const {
        attributes: { vi, en, key },
      } = e
      return { vi, en, key }
    })

    const response = texts
      .map((e: any) => ({ [e.key]: e[locale] }))
      .reduce((prev: any, curr: any) => {
        return { ...prev, ...curr }
      }, {})

    return NextResponse.json({ ...response })
  } catch (error) {
    console.error("Error in GET:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
