import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerClassName?: string
  bleed?: boolean
}

export function ContentSection({
  className,
  containerClassName,
  bleed = false,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("relative w-full px-4 py-20 sm:px-6 sm:py-28", className)}
      {...props}
    >
      <div
        className={cn(
          !bleed && "mx-auto w-full max-w-6xl",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  )
}

export function SectionEyebrow({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase",
        className
      )}
    >
      {children}
    </div>
  )
}

export function SectionHeading({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h2
      className={cn(
        "mt-3 text-3xl font-semibold tracking-[-0.02em] text-balance sm:text-4xl md:text-5xl",
        className
      )}
    >
      {children}
    </h2>
  )
}

export function SectionLead({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p
      className={cn(
        "mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg",
        className
      )}
    >
      {children}
    </p>
  )
}
