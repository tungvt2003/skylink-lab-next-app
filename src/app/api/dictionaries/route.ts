import { NextResponse } from "next/server"
import httpClient from "../../../lib/http-client"

export async function POST(req: Request) {
  const dictionaries = await httpClient.get<{ data: any }>(`dictionaries?populate=*&pagination[pageSize]=100`)
  const { lang } = await req.json()

  const texts = dictionaries.data.map((e: any) => {
    const {
      attributes: { vi, en, key },
    } = e
    return { vi, en, key }
  })

  const response = texts
    .map((e: any) => ({ [e.key]: e[lang] }))
    .reduce((prev: any, curr: any) => {
      return { ...prev, ...curr }
    }, {})

  return NextResponse.json({ ...response })
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const locale = searchParams.get("locale")

  const dictionaries = await httpClient.get<{ data: any }>(`dictionaries?populate=*&pagination[pageSize]=100`)
  const texts = dictionaries.data.map((e: any) => {
    const {
      attributes: { vi, en, key },
    } = e
    return { vi, en, key }
  })

  const response = texts
    .map((e: any) => ({ [e.key]: e[locale || "vi"] }))
    .reduce((prev: any, curr: any) => {
      return { ...prev, ...curr }
    }, {})

  return NextResponse.json({ ...response })
}
