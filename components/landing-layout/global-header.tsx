import { formatStars, getRepoStars } from "@/lib/github"
import { GlobalHeaderShell } from "./global-header-shell"

export async function GlobalHeader() {
  const stars = await getRepoStars()
  return (
    <GlobalHeaderShell
      stars={stars != null ? formatStars(stars) : null}
      rawStars={stars}
    />
  )
}
