"use client"

import { Button } from "@/components/ui/button"
import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useTheme } from "next-themes"
import * as React from "react"

export function ThemeToggleControl() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => {
    // hydration-safe mount flag - must run after mount
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === "dark"

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-sm"
      aria-label="Toggle theme (press d)"
      title="Toggle theme (press d)"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-full"
    >
      <HugeiconsIcon
        icon={mounted ? (isDark ? Sun03Icon : Moon02Icon) : Moon02Icon}
        strokeWidth={2}
      />
    </Button>
  )
}
