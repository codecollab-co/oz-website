"use client"

import * as React from "react"

export type Platform = "mac" | "linux" | "windows" | "unknown"

export function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "unknown"
  const ua = navigator.userAgent.toLowerCase()
  if (/mac|iphone|ipad|ipod/.test(ua)) return "mac"
  if (/win/.test(ua)) return "windows"
  if (/linux|x11|cros/.test(ua)) return "linux"
  return "unknown"
}

export function useDetectedPlatform(): Platform {
  const [p, setP] = React.useState<Platform>("unknown")
  React.useEffect(() => {
    // navigator only exists post-mount
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setP(detectPlatform())
  }, [])
  return p
}
