// 1. Create a fetch util using fetch, which have 4 functions: get, post, put, delete
// 2. Each function should return a promise
// 3. Each function should have 2 parameters: url and data
// 4. If the method is get, the data should be appended to the url
// 5. If the method is post, put, delete, the data should be passed as a body
// 6. Use typescript with fully typed
// 7. Use async await

const PREFIX_URL = process.env.NEXT_PUBLIC_API_URL

const DEFAULT_REVALIDATE_TIME = 60 * 5 // 5 minutes

export type RequestMethod = "GET" | "POST" | "PUT" | "DELETE"

export interface FetchOptions {
  url: string
  data?: Record<string, any> | null
  otherOptions?: RequestInit
}

const httpClient = {
  async request(method: RequestMethod, { url, data, otherOptions }: FetchOptions): Promise<any> {
    const options: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      ...otherOptions,
    }

    if (method === "GET" && data) {
      function buildQueryString(data: Record<string, any>, parentKey: string = ""): string {
        const queryString = Object.entries(data)
          .map(([key, value]) => {
            const fullKey = parentKey ? `${parentKey}[${key}]` : key

            if (typeof value === "object" && value !== null && !Array.isArray(value)) {
              return buildQueryString(value as Record<string, any>, fullKey)
            }
            return `${fullKey}=${value}`
          })
          .join("&")

        return queryString
      }

      url += `?${buildQueryString(data)}`
    } else if (data) {
      options.body = JSON.stringify(data)
    }
    const response = await fetch(`${PREFIX_URL}/api/${url}`, options)

    if (!response.ok) {
    }

    return response.json()
  },

  get<T>(url: string, data?: FetchOptions["data"], options?: FetchOptions["otherOptions"]): Promise<T> {
    return this.request("GET", { url, data, otherOptions: options })
  },

  post<T>(url: string, data: any): Promise<T> {
    return this.request("POST", { url, data })
  },

  put<T>(url: string, data: any): Promise<T> {
    return this.request("PUT", { url, data })
  },

  delete<T>(url: string, data: any): Promise<T> {
    return this.request("DELETE", { url, data })
  },
}

export default httpClient
