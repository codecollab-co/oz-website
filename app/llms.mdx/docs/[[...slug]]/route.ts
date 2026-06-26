import { getLLMText } from "@/lib/get-llm-text"
import { source } from "@/lib/source"
import { notFound } from "next/navigation"

export const revalidate = false

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug?: string[] }> }
) {
  const { slug } = await params
  let cleanSlug = slug
  if (cleanSlug && cleanSlug.length > 0 && cleanSlug[cleanSlug.length - 1] === "index") {
    cleanSlug = cleanSlug.slice(0, -1)
  }
  const page = source.getPage(cleanSlug)
  if (!page) notFound()

  return new Response(await getLLMText(page), {
    headers: {
      "Content-Type": "text/markdown",
    },
  })
}

export function generateStaticParams() {
  return source.generateParams()
}
