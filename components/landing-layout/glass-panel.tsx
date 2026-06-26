import * as React from "react"
import { cn } from "@/lib/utils"

type GlassProps<T extends React.ElementType = "div"> = {
  as?: T
  className?: string
  inset?: boolean
  children?: React.ReactNode
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className" | "children">

export function GlassPanel<T extends React.ElementType = "div">({
  as,
  className,
  inset = true,
  children,
  ...rest
}: GlassProps<T>) {
  const Component = (as ?? "div") as React.ElementType
  return (
    <Component
      className={cn(
        "relative rounded-2xl border border-white/10 bg-white/60 backdrop-blur-xl",
        "dark:border-white/[0.08] dark:bg-white/[0.04]",
        inset &&
          "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.45)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]",
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  )
}
