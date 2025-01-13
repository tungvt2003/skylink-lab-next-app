import createNextIntlPlugin from "next-intl/plugin"

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    tsconfigPath: "./tsconfig.json",
  },
  async rewrites() {
    return [
      {
        // Match any requests to the old API path and redirect to the new API
        source: "/uploads/:path*",
        destination: "https://api-cms-skylink.dansolutions.vn/uploads/:path*",
      },
      {
        source: "/skylink-lab-privacy-policies",
        destination: "/en/skylink-lab-privacy-policies",
      },
    ]
  },
  async headers() {
    return [
      {
        source: "/app-ads.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain",
          },
        ],
      },
      {
        source: "/.well-known/apple-app-site-association",
        headers: [
          {
            key: "Content-Type",
            value: "application/json",
          },
        ],
      },
      {
        // Routes this applies to
        source: "/api/(.*)",
        // Headers
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ]
  },
}

const withNextIntl = createNextIntlPlugin()

export default withNextIntl(nextConfig)
