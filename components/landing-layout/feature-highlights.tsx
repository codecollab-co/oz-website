"use client"

import type { StaticImageData } from "next/image"
import { motion } from "motion/react"
import type { IconSvgElement } from "@hugeicons/react"
import { HugeiconsIcon } from "@hugeicons/react"

import { cn } from "@/lib/utils"
import { AppScreenshotFrame } from "./app-screenshot-frame"

export interface FeatureBullet {
  icon: IconSvgElement
  label: string
}

interface FeatureShowcaseProps {
  id?: string
  index: string
  eyebrow: string
  title: string
  description: string
  bullets: FeatureBullet[]
  image: {
    src: string | StaticImageData
    alt: string
    width: number
    height: number
    caption?: string
  }
  reverse?: boolean
  priority?: boolean
}

export function FeatureHighlights({
  id,
  index,
  eyebrow,
  title,
  description,
  bullets,
  image,
  reverse,
  priority,
}: FeatureShowcaseProps) {
  return (
    <section
      id={id}
      className="relative w-full px-4 py-24 sm:px-6 sm:py-32 lg:py-40"
    >
      <div
        className={cn(
          "mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-12 lg:gap-12",
          reverse && "lg:[&>*:first-child]:order-2"
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-4"
        >
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
            <span className="text-foreground/40">{index}</span>
            <span className="h-px w-8 bg-border" />
            <span>{eyebrow}</span>
          </div>
          <h3 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-balance sm:text-4xl lg:text-[2.6rem] lg:leading-[1.05]">
            {title}
          </h3>
          <p className="mt-5 text-base text-muted-foreground sm:text-[17px]">
            {description}
          </p>
          <ul className="mt-8 space-y-3 border-l border-border/60 pl-5">
            {bullets.map((b) => (
              <li
                key={b.label}
                className="flex items-start gap-3 text-sm text-foreground/85"
              >
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full text-muted-foreground">
                  <HugeiconsIcon
                    icon={b.icon}
                    className="size-3.5"
                    strokeWidth={2}
                  />
                </span>
                <span>{b.label}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="lg:col-span-8"
        >
          <AppScreenshotFrame
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            caption={image.caption}
            priority={priority}
          />
        </motion.div>
      </div>
    </section>
  )
}
