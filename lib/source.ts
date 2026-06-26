import { docs } from "collections/server"
import { loader } from "fumadocs-core/source"
import { createElement } from "react"

import {
  AiIdeaIcon,
  BookOpen01Icon,
  BrowserIcon,
  CodeFolderIcon,
  CodeIcon,
  CommandIcon,
  CommandLineIcon,
  Configuration01Icon,
  CpuIcon,
  GitBranchIcon,
  KeyboardIcon,
  Layout02Icon,
  Notebook01Icon,
  PaintBrush02Icon,
  PlayIcon,
  RecordIcon,
  Rocket01Icon,
  Settings02Icon,
  ShieldUserIcon,
  TerminalIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

/**
 * Map icon name strings (used in meta.json / MDX frontmatter)
 * to HugeIcons React elements for the docs sidebar.
 */
const iconMap: Record<string, typeof PlayIcon> = {
  Play: PlayIcon,
  Rocket: Rocket01Icon,
  PaintBrush: PaintBrush02Icon,
  Terminal: TerminalIcon,
  CommandLine: CommandLineIcon,
  Code: CodeIcon,
  CodeFolder: CodeFolderIcon,
  Browser: BrowserIcon,
  GitBranch: GitBranchIcon,
  Layout: Layout02Icon,
  AiIdea: AiIdeaIcon,
  Cpu: CpuIcon,
  Record: RecordIcon,
  Shield: ShieldUserIcon,
  Command: CommandIcon,
  Settings: Settings02Icon,
  Keyboard: KeyboardIcon,
  Notebook: Notebook01Icon,
  BookOpen: BookOpen01Icon,
  Config: Configuration01Icon,
}

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  icon(icon) {
    if (!icon) return
    const resolved = iconMap[icon]
    if (resolved) {
      return createElement(HugeiconsIcon, {
        icon: resolved,
        size: 18,
        strokeWidth: 1.8,
      })
    }
  },
})
