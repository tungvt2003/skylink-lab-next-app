import { revalidateTag } from "next/cache"
export const runtime = "edge"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  // const secret = request.nextUrl.searchParams.get("secret")
  const secret = searchParams.get("secret")
  const pageSlug = searchParams.get("pageSlug")
  const postSlug = searchParams.get("postSlug")
  const categoryId = searchParams.get("categoryId")

  if (!secret || secret !== process.env.NEXT_PRIVATE_REVALIDATION_KEY) {
    // Do not indicate that the revalidation key is incorrect in the response
    // This will protect this API route from being exploited
    return new Response(JSON.stringify({ success: false, message: "Invalid Request" }), { status: 400 })
  }

  // const { pageSlug } = body
  if (pageSlug === "trang-chu") {
    await revalidateTag("trang-chu")
  }

  if (pageSlug === "home") {
    await revalidateTag("home")
  }

  if (pageSlug) {
    // Revalidate the page cache
    await revalidateTag(`pages_${pageSlug}`)
  }

  if (postSlug) {
    await revalidateTag(`posts_${postSlug}`)
  }

  if (categoryId) {
    await revalidateTag(`category_${categoryId}`)
  }

  // For posts
  // 1. post detail
  // 2. category
  // 3. homepage

  // Revalidate the post cache
  //   await revalidateTag(`post-${postId}`)

  //   // Revalidate the category cache
  //   await revalidateTag(`category-${categoryId}`)

  //   // Revalidate the homepage cache
  //   await revalidateTag("homepage")

  return new Response(JSON.stringify({ revalidated: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}
