import { ContentSection } from "./content-section"

const stats = [
  { value: "< 10MB", label: "App size" },
  { value: "~300ms", label: "Cold start" },
  { value: "No telemetry", label: "Ever" },
  { value: "Apache-2.0", label: "Open source" },
]

export function ProductStats() {
  return (
    <ContentSection className="!py-12 sm:!py-16">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-background px-6 py-8 text-center">
            <div className="font-mono text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {s.value}
            </div>
            <div className="mt-1.5 text-xs tracking-wide text-muted-foreground uppercase">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </ContentSection>
  )
}
