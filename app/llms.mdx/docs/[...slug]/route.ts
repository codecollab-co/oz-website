import { getLLMText } from "@/lib/get-llm-text"
import { source } from "@/lib/source"
import { notFound } from "next/navigation"

export const dynamic = "force-static"
export const revalidate = false

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  const { slug } = await params
  let cleanSlug = [...slug]
  if (cleanSlug.length > 0) {
    const lastIdx = cleanSlug.length - 1
    if (cleanSlug[lastIdx].endsWith(".md")) {
      cleanSlug[lastIdx] = cleanSlug[lastIdx].slice(0, -3)
    }
  }
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
  return source.generateParams().map((p) => {
    const slug = [...p.slug]
    if (slug.length === 0) {
      return { slug: ["index.md"] }
    }
    const lastIdx = slug.length - 1
    slug[lastIdx] = `${slug[lastIdx]}.md`
    return { slug }
  })
}
