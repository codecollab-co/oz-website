export type ChangeKind = "Added" | "Changed" | "Fixed"

export interface ChangelogEntry {
  version: string
  date?: string
  highlight?: string
  groups: { kind: ChangeKind; items: string[] }[]
}

export const CHANGELOG: ChangelogEntry[] = [
  {
    version: "0.8.0",
    date: "2026-06-13",
    highlight:
      "Command palette, GPU block-mode terminal, spaces, broad file-type support, and a UI/UX pass.",
    groups: [
      {
        kind: "Added",
        items: [
          "Command palette: fuzzy launcher for every quick action, with in-file content search and command history.",
          "Block-mode terminal: GPU-accelerated, Warp-style command blocks with a unified shell/AI input bar and editor-like input panel.",
          "Spaces: persisted tab groups you can create, rename, and drag to organize.",
          "Media and document viewers: images, audio, video, PDF, and rendered or raw markdown.",
          "Explorer: drag-and-drop support and git decorations on the file tree.",
          "Zen mode to hide the header and status bar.",
          "Editor auto-save with a configurable delay.",
          "Multiple OpenAI-compatible endpoints; LaTeX and Astro syntax highlighting.",
          "Terminal: macOS readline bindings (Cmd+Arrow, Cmd/Opt+Backspace), Cmd+K to clear scrollback, rename tabs via right-click, middle-click to close.",
          "Drop file paths into the active pane with bracketed-paste and DPI-correct hit detection.",
          "Confirm before closing a tab with a running process.",
          "Official Nix/NixOS support with an auto-update workflow.",
        ],
      },
      {
        kind: "Changed",
        items: [
          "UI/UX polish across tabs, panels, header, and sidebar, with native CSS animations replacing the motion library.",
          "Dynamic window title from the project folder and active terminal.",
          "Source control: right-click context menu on changed files.",
          "Terminal perf: static cursor default, WebGL slot reaping, and TUI keep-alive.",
        ],
      },
      {
        kind: "Fixed",
        items: [
          "Ctrl+B reaches the terminal/Claude; sidebar toggle moved to Ctrl+Shift+B.",
          "Explorer highlights the active file.",
          "Editor: correct cursor positioning on macOS at non-100% zoom; language reconfiguration when the document becomes ready.",
          "macOS: settings window no longer hides behind the main window; press-and-hold character popup disabled.",
          "Terminal: block IME composition keydown events from reaching the PTY.",
          "Linux: strip bundled Wayland libs from the AppImage to fix the EGL crash on newer Mesa.",
        ],
      },
    ],
  },
  {
    version: "0.7.3",
    date: "2026-05-25",
    highlight:
      "Agent notifications + management, live fs watcher, /claude-code command, Windows polish.",
    groups: [
      {
        kind: "Added",
        items: [
          "Agent notifications and management - one bell, one router for the built-in agent and every terminal coding agent.",
          "Live filesystem watcher for the explorer tree and open editors.",
          "/claude-code slash command to orchestrate agents via Oz AI.",
        ],
      },
      {
        kind: "Fixed",
        items: [
          "Editor: preserve original file permissions on atomic-write rename.",
          "PTY: authorize the CLI launch directory in the workspace registry on startup.",
          "Settings window is resizable, with a larger default size.",
          "Terminal: cwd above home, Windows verbatim paths, CI/test hardening.",
          "Windows: System32 launch dir, PTY reload reap, paste + stale-render fixes.",
        ],
      },
    ],
  },
  {
    version: "0.7.1",
    date: "2026-05-21",
    highlight:
      "Themes and customization, MLX + Ollama, Windows ConPTY lifecycle fixes.",
    groups: [
      {
        kind: "Added",
        items: [
          "Custom themes and presets - build in-app, save, switch between bundled and your own. Covers terminal palette and surrounding UI together.",
          "Background images with adjustable opacity and blur (new defaults: 50% opacity, 0 blur).",
          "Editor-based custom theme editor - edit tokens inline rather than hand-writing config.",
          "Full ANSI terminal palette in the theme model.",
          "MLX and Ollama as local AI providers, with autocomplete via local models.",
        ],
      },
      {
        kind: "Changed",
        items: [
          "Reasoning / thinking blocks stripped from history before the model call (Cerebras rejected them, others paid tokens).",
          "Composer keeps focus and accepts typing while the agent is streaming - queue follow-ups instead of waiting.",
          "Models settings tab redesigned, model picker scroll fixed.",
          "AI mini-window: todo panel sizes to content, caps at 35% for long lists.",
        ],
      },
      {
        kind: "Fixed",
        items: [
          "Windows ConPTY lifecycle race - CreatePseudoConsole and ClosePseudoConsole now share one lock. Fixes the WSL-to-Local blank-terminal case.",
          "Console window no longer flashes when Oz spawns subprocesses (shell init, git).",
          "New terminals no longer try to launch into the install directory.",
          "Shortcut changes made in Settings propagate to the main window without a restart.",
          "Agent and snippet editor dialogs scroll their body so Save/Cancel cannot get pushed off screen.",
          "Selection rendering across themes; Linux clipboard handling.",
        ],
      },
    ],
  },
  {
    version: "0.7.0",
    date: "2026-05-20",
    highlight:
      "Source control panel + git graph, security hardening, broad multi-platform fixes.",
    groups: [
      {
        kind: "Added",
        items: [
          "Source control panel with hunk staging, commit, and a real commit graph.",
          "Open in Oz shell integration on Windows.",
          "Mistral AI provider.",
          "Ruby syntax highlighting in the editor.",
          "Markdown preview tab via explorer right-click.",
          "Configurable context limit for OpenAI-compatible providers.",
          "Configurable terminal font family.",
        ],
      },
      {
        kind: "Changed",
        items: [
          "Security pass: AI tool deny-list hardening, SSRF guard, terminal OSC trust boundary, preview iframe sandbox, WSL distro validation.",
        ],
      },
      {
        kind: "Fixed",
        items: [
          "WSL: git and shells honor the workspace env.",
          "Explorer: file tree stays static across InlineInput open/cancel cycles.",
          "AI mini-window: responsive, scrollable todo list.",
          "Terminal: Option+arrow word navigation.",
          "Terminal: TUIs repaint on resume instead of replaying dormant bytes.",
          "Search: terminal refocuses after dismissing find.",
          "Editor: files auto-reload when the AI modifies them.",
          "Editor undo/redo wired and surfaced in the shortcuts dialog.",
          "Security: shell command guard now blocks CR/LF and C0 controls (prevented smuggling a second statement past approval). Reported by Peter D Mora IV.",
          "Security: O_EXCL random tempfile for atomic writes (closed a symlink-staging path that could redirect approved writes). Reported by chocolatecake777.",
        ],
      },
    ],
  },
  {
    version: "0.6.6",
    highlight: "Terminal renderer pool tuning and stability fixes.",
    groups: [
      {
        kind: "Added",
        items: [
          "Workspace file picker in AI chat - type @ to insert a file reference.",
        ],
      },
      {
        kind: "Changed",
        items: [
          "RendererPool capacity bumped from K=4 to K=5 for smoother multi-tab terminals.",
          "Fish shell support: more reliable startup and prompt rendering.",
        ],
      },
      {
        kind: "Fixed",
        items: [
          "TUI apps no longer freeze when a tab is hibernated and restored.",
          "Tabs with unsaved edits are preserved when the underlying file is deleted on disk.",
        ],
      },
    ],
  },
  {
    version: "0.6.5",
    highlight: "Terminal performance pass (xterm.js WebGL + RendererPool).",
    groups: [
      {
        kind: "Changed",
        items: [
          "Optimized the WebGL renderer pool - lower memory and steadier frame times across many tabs.",
        ],
      },
    ],
  },
  {
    version: "0.6.4",
    highlight:
      "Security release - removes the OSC 8888 escape sequence handler (CVE pending).",
    groups: [
      {
        kind: "Fixed",
        items: [
          "Critical: a remote SSH host (or any process writing to the PTY) could silently open arbitrary local files in the editor. The OSC 8888 handler has been removed entirely. Affected: >= 0.6.0, < 0.6.4. Reported responsibly by @eulex.",
          "Settings model dropdowns are now scrollable on small windows.",
          "Inactive terminal tabs no longer bleed across the split divider.",
          "Explorer tree names and inline inputs clip cleanly inside the sidebar.",
        ],
      },
      {
        kind: "Added",
        items: ["WSL workspaces are detected and supported on Windows."],
      },
    ],
  },
  {
    version: "0.6.3",
    highlight: "Editor languages, terminal preferences, and AI model picker.",
    groups: [
      {
        kind: "Added",
        items: [
          "Editor language support: Go, C, C++, Java, C#.",
          "Terminal: WebGL toggle and persistent font-size preferences.",
          "Explorer: show-hidden-folders toggle.",
          "AI: Gemini 2.5 Flash, Gemma 3 27B, and searchable model picker.",
          "Styled confirm dialog for closing tabs with unsaved changes.",
        ],
      },
      {
        kind: "Fixed",
        items: [
          "Windows: main window title now set correctly.",
          "Windows PTY: Tauri worker no longer blocks on close.",
          "Terminal: UTF-8 locale forced for PowerShell sessions.",
          "Terminal: respawn cleans up pending-exit and pty-opening state.",
          "Explorer: rename/create inputs no longer blur when the context menu opens.",
        ],
      },
      {
        kind: "Changed",
        items: [
          "Search focus and keyboard handling refined for explorer and file search.",
        ],
      },
    ],
  },
  {
    version: "0.6.1",
    highlight: "Split terminals, preview tabs, DeepSeek.",
    groups: [
      {
        kind: "Added",
        items: [
          "Split panes in the terminal.",
          "Transient preview tabs with pinning behavior.",
          "DeepSeek provider.",
          "Customizable keyboard shortcuts in Settings.",
          "Ctrl-Backspace deletes the previous word in the terminal.",
        ],
      },
      {
        kind: "Fixed",
        items: [
          "LM Studio and other keyless providers work in the model picker and chat send.",
          "Settings window stays above the main app and broadcasts preference changes across windows.",
          "AI mini-window no longer overshadows the input bar.",
          "Explorer inline input survives the context menu open path.",
        ],
      },
    ],
  },
  {
    version: "0.6.0",
    highlight: "Windows builds, contributor docs, oz_open from the shell.",
    groups: [
      {
        kind: "Added",
        items: [
          "First Windows release (NSIS installer).",
          "oz_open shell command - open files into a Oz editor tab from any terminal.",
          "Contributor docs and issue / PR templates.",
        ],
      },
      {
        kind: "Fixed",
        items: [
          "Explorer create / rename input no longer disappears before you can type.",
          "TabBar padding and alignment.",
          "Gemini model IDs updated to use the -preview suffix.",
        ],
      },
    ],
  },
  {
    version: "0.5.9",
    date: "2026",
    highlight: "Linux adaptions and auto-updater fixes.",
    groups: [
      {
        kind: "Added",
        items: ["Window management for linux"],
      },
      {
        kind: "Changed",
        items: ["Secrets (keyring) redesign", "Auto updater stabilization"],
      },
    ],
  },
  {
    version: "0.5.8",
    highlight: "Auto-updater + CI release pipeline.",
    groups: [
      {
        kind: "Added",
        items: [
          "Auto-updater wired into release builds.",
          "GitHub Actions workflow for cross-platform builds and releases.",
        ],
      },
      {
        kind: "Fixed",
        items: ["Linux window initialization on first launch."],
      },
      {
        kind: "Changed",
        items: ["Bumped Node and pnpm in the release pipeline."],
      },
    ],
  },
  {
    version: "0.5.7",
    groups: [
      {
        kind: "Changed",
        items: [
          "New sessions now open in $HOME by default.",
          "Stabilized zsh / bash / pwsh init scripts - fewer first-prompt edge cases.",
        ],
      },
    ],
  },
  {
    version: "0.5.6",
    groups: [
      {
        kind: "Changed",
        items: [
          "Editor and AI modules now lazy-load - smaller install, faster cold start.",
        ],
      },
    ],
  },
  {
    version: "0.5.5",
    groups: [
      { kind: "Added", items: ["ProductDemo assets and updated README screenshots."] },
      { kind: "Changed", items: ["Dependency version sweep."] },
    ],
  },
  {
    version: "0.5.4",
    groups: [
      {
        kind: "Changed",
        items: ["Snippets and commands merged into a single palette."],
      },
    ],
  },
  {
    version: "0.5.3",
    groups: [
      { kind: "Changed", items: ["UI polish across AI and agent views."] },
    ],
  },
  {
    version: "0.5.2",
    groups: [
      { kind: "Changed", items: ["AI mini-window UI/UX improvements."] },
    ],
  },
  {
    version: "0.5.1",
    highlight: "Plans, sub-agents, tasks.",
    groups: [
      {
        kind: "Added",
        items: [
          "Full agentic workflow: plans, sub-agents, tasks, project init.",
          "Improved shell tool for the agent.",
        ],
      },
    ],
  },
  {
    version: "0.4.7",
    highlight: "Vim mode in the editor.",
    groups: [
      {
        kind: "Added",
        items: [
          "Vim mode in the editor (motions, registers, marks).",
          "Keyboard navigation across the file explorer.",
        ],
      },
    ],
  },
  {
    version: "0.4.6",
    groups: [
      { kind: "Changed", items: ["Cleanup pass: dependencies, UI, icons."] },
    ],
  },
  {
    version: "0.4.5",
    groups: [
      {
        kind: "Changed",
        items: [
          "Optimized PTY resize, session lifecycle, and AI context handling.",
        ],
      },
    ],
  },
  {
    version: "0.4.4",
    groups: [{ kind: "Changed", items: ["Agents UI/UX improvements."] }],
  },
  {
    version: "0.4.3",
    highlight: "Skills and multi-agent.",
    groups: [
      {
        kind: "Added",
        items: ["Skills and multi-agent support.", "Settings UI improvements."],
      },
    ],
  },
  {
    version: "0.4.2",
    groups: [
      {
        kind: "Changed",
        items: ["AI autocomplete: improved latency and accuracy."],
      },
    ],
  },
  {
    version: "0.4.1",
    highlight: "Local LLMs + AI autocomplete.",
    groups: [
      {
        kind: "Added",
        items: [
          "Local LLM support via LM Studio.",
          "Groq and Cerebras providers.",
          "AI autocomplete in the editor.",
        ],
      },
    ],
  },
  {
    version: "0.3.9",
    highlight: "AI Edit Diffs.",
    groups: [
      {
        kind: "Added",
        items: [
          "AI Edit Diffs - preview and approve agent edits before applying.",
        ],
      },
    ],
  },
  {
    version: "0.3.8",
    groups: [
      {
        kind: "Added",
        items: [
          "Workspace-wide file search.",
          "Editor tabs decoupled from terminal tabs.",
        ],
      },
    ],
  },
  {
    version: "0.3.7",
    highlight: "Web preview tab.",
    groups: [
      {
        kind: "Added",
        items: ["Web preview tab with auto-detection of local dev servers."],
      },
    ],
  },
  {
    version: "0.3.6",
    groups: [
      { kind: "Added", items: ["Autostart and window-state persistence."] },
      { kind: "Changed", items: ["Settings UI improvements."] },
    ],
  },
  {
    version: "0.3.5",
    groups: [{ kind: "Added", items: ["Standalone settings window."] }],
  },
  {
    version: "0.3.4",
    groups: [
      {
        kind: "Added",
        items: [
          "New AI mini-window.",
          "Text selection handling and session persistence.",
        ],
      },
    ],
  },
  {
    version: "0.3.1",
    groups: [{ kind: "Changed", items: ["Internal refactor."] }],
  },
  {
    version: "0.3.0",
    highlight: "AI agents (initial).",
    groups: [
      {
        kind: "Added",
        items: ["AI agents (initial implementation).", "Apache-2.0 license."],
      },
    ],
  },
  {
    version: "0.2.9",
    highlight: "Keys move to the OS keychain.",
    groups: [
      {
        kind: "Added",
        items: ["Tauri keyring - API keys now stored in the OS keychain."],
      },
      { kind: "Changed", items: ["Internal renaming pass."] },
    ],
  },
  {
    version: "0.2.8",
    groups: [{ kind: "Changed", items: ["Icon set and theme refresh."] }],
  },
  {
    version: "0.2.7",
    groups: [
      { kind: "Added", items: ["File explorer context menu."] },
      { kind: "Changed", items: ["General refactor; editor improvements."] },
    ],
  },
  {
    version: "0.2.4",
    groups: [{ kind: "Fixed", items: ["Various bug fixes."] }],
  },
  {
    version: "0.2.3",
    highlight: "File explorer + editor.",
    groups: [
      {
        kind: "Added",
        items: [
          "File explorer (first version).",
          "Code editor based on CodeMirror 6.",
        ],
      },
    ],
  },
  {
    version: "0.2.1",
    groups: [
      { kind: "Added", items: ["Logging."] },
      {
        kind: "Fixed",
        items: ["Shell script handling and session edge cases."],
      },
    ],
  },
  {
    version: "0.2.0",
    groups: [
      {
        kind: "Added",
        items: ["AI side panel.", "Status bar.", "Keyboard shortcuts."],
      },
    ],
  },
  {
    version: "0.1.3",
    groups: [{ kind: "Added", items: ["AI SDK and AI Elements integration."] }],
  },
  {
    version: "0.1.2",
    groups: [
      { kind: "Added", items: ["New app logo.", "Configurable window size."] },
    ],
  },
  {
    version: "0.1.1",
    groups: [
      {
        kind: "Changed",
        items: [
          "Rendering and resize improvements.",
          "Header and tabs UI polish.",
        ],
      },
    ],
  },
  {
    version: "0.1.0",
    groups: [
      {
        kind: "Changed",
        items: [
          "New UI shell.",
          "Internal refactor; fixed render/resize race.",
        ],
      },
    ],
  },
  {
    version: "0.0.8",
    groups: [
      { kind: "Added", items: ["Multi-tab support.", "Basic layout UI."] },
    ],
  },
  {
    version: "0.0.7",
    groups: [
      {
        kind: "Changed",
        items: ["Switched icon library from Lucide to HugeIcons."],
      },
    ],
  },
  {
    version: "0.0.6",
    groups: [
      {
        kind: "Added",
        items: ["Custom font and theme.", "Tauri window management."],
      },
    ],
  },
  {
    version: "0.0.5",
    groups: [
      {
        kind: "Added",
        items: ["xterm.js WebGL renderer, search, and link plugins."],
      },
    ],
  },
  {
    version: "0.0.4",
    groups: [
      {
        kind: "Added",
        items: ["shadcn/ui component set and supporting deps."],
      },
    ],
  },
  {
    version: "0.0.3",
    groups: [
      {
        kind: "Added",
        items: ["Child process lifecycle handling.", "Per-session locking."],
      },
    ],
  },
  {
    version: "0.0.2",
    highlight: "First prototype.",
    groups: [
      {
        kind: "Added",
        items: ["Initial Rust PTY backend with xterm.js in React."],
      },
    ],
  },
]
