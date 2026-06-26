import type { Metadata, Viewport } from "next"
import { Geist_Mono, Inter } from "next/font/google"

import { AccentBackdrop } from "@/components/landing-layout/accent-backdrop"
import { ThemeProvider } from "@/components/theme-provider"
import { SITE } from "@/lib/site"
import { cn } from "@/lib/utils"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} - ${SITE.tagline}`,
    template: `%s - ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "AI terminal",
    "AI IDE",
    "AI code editor",
    "agentic coding",
    "React terminal",
    "xterm.js",
    "Tauri terminal",
    "Terminal Emulator",
    "BYOK",
    "developer tools",
    "open source terminal",
  ],
  authors: [{ name: "Oz", url: SITE.github }],
  creator: "Oz",
  publisher: "Oz",
  alternates: { canonical: SITE.url },
  openGraph: {
    type: "website",
    url: SITE.url,
    title: `${SITE.name} - ${SITE.tagline}`,
    description: SITE.description,
    siteName: SITE.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} - ${SITE.tagline}`,
    description: SITE.description,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/oz_icon_256.png?v=2", sizes: "256x256", type: "image/png" },
      { url: "/oz-icon.png?v=2", sizes: "1024x1024", type: "image/png" },
    ],
    apple: [{ url: "/oz_icon_256.png?v=2", sizes: "256x256" }],
    shortcut: ["/favicon.ico?v=2"],
  },
  category: "technology",
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body>
        <ThemeProvider defaultTheme="dark">
          <AccentBackdrop />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
