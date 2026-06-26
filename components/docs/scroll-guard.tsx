"use client"

import { useEffect } from "react"

export function ScrollGuard() {
  useEffect(() => {
    const html = document.documentElement
    const body = document.body

    const prevHtmlOverscroll = html.style.overscrollBehavior
    const prevBodyOverscroll = body.style.overscrollBehavior

    html.style.overscrollBehavior = "none"
    body.style.overscrollBehavior = "none"

    return () => {
      html.style.overscrollBehavior = prevHtmlOverscroll
      body.style.overscrollBehavior = prevBodyOverscroll
    }
  }, [])

  return null
}
