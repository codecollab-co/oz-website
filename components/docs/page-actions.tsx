"use client"

import * as React from "react"
import {
  Copy01Icon,
  Tick01Icon,
  ArrowDown01Icon,
  GithubIcon,
  FileScriptIcon,
  SparklesIcon,
  ChatGptIcon,
  ClaudeIcon,
  CursorPointer01Icon,
  Share05Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Button } from "@/components/ui/button"

interface PageActionsProps {
  rawMarkdown: string
  gitUrl: string
  rawMarkdownUrl: string
  sciraUrl: string
  chatgptUrl: string
  claudeUrl: string
  cursorUrl: string
}

export function PageActions({
  rawMarkdown,
  gitUrl,
  rawMarkdownUrl,
  sciraUrl,
  chatgptUrl,
  claudeUrl,
  cursorUrl,
}: PageActionsProps) {
  const [copied, setCopied] = React.useState(false)
  const [dropdownOpen, setDropdownOpen] = React.useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  const handleCopy = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(rawMarkdown)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy markdown", err)
    }
  }, [rawMarkdown])

  React.useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleOutsideClick)
    return () => document.removeEventListener("mousedown", handleOutsideClick)
  }, [])

  const links = [
    { href: gitUrl, label: "Open in GitHub", icon: GithubIcon },
    { href: rawMarkdownUrl, label: "View as Markdown", icon: FileScriptIcon },
    { href: sciraUrl, label: "Open in Scira AI", icon: SparklesIcon },
    { href: chatgptUrl, label: "Open in ChatGPT", icon: ChatGptIcon },
    { href: claudeUrl, label: "Open in Claude", icon: ClaudeIcon },
    {
      href: cursorUrl,
      label: "Open in Cursor",
      icon: CursorPointer01Icon,
    },
  ]

  return (
    <div className="mb-2 flex items-center gap-2">
      {/* Copy Markdown Button */}
      <Button
        variant="outline"
        onClick={handleCopy}
        type="button"
        size="sm"
        className="cursor-pointer rounded-lg"
      >
        <HugeiconsIcon
          icon={copied ? Tick01Icon : Copy01Icon}
          className="size-3.5"
          strokeWidth={2}
        />
        {copied ? "Copied!" : "Copy Markdown"}
      </Button>

      {/* Open Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <Button
          variant="outline"
          onClick={() => setDropdownOpen((prev) => !prev)}
          type="button"
          size="sm"
          className="cursor-pointer rounded-lg"
        >
          Open
          <HugeiconsIcon
            icon={ArrowDown01Icon}
            className="size-3.5 opacity-60"
            strokeWidth={2}
          />
        </Button>

        {dropdownOpen && (
          <div className="absolute top-full left-0 z-50 mt-1.5 flex w-56 flex-col gap-0.5 rounded-xl border border-white/8 bg-zinc-950 p-1.5 shadow-xl shadow-black/40">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                onClick={() => setDropdownOpen(false)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                <div className="flex items-center gap-2">
                  <HugeiconsIcon
                    icon={link.icon}
                    className="size-4 shrink-0"
                    strokeWidth={1.5}
                  />
                  <span>{link.label}</span>
                </div>
                <HugeiconsIcon
                  icon={Share05Icon}
                  className="size-3.5 opacity-40"
                  strokeWidth={1.5}
                />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
