import Image from "next/image"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ImageTextSectionProps {
  /** Heading element(s) to render at the top of the text block */
  heading: ReactNode
  /** Optional description to render under the heading */
  description?: ReactNode
  /** Absolute or relative image source */
  imageSrc: string
  /** Alt text for the image */
  imageAlt: string
  /** If true, text is shown on the left on large screens. Defaults to true */
  textOnLeft?: boolean
  /** Optional call-to-action element rendered at the bottom of the text block */
  cta?: ReactNode
  /** Forwarded to next/image priority prop – useful for the hero */
  imagePriority?: boolean
}

/**
 * Generic image + text split section used by both the Hero and the secondary feature section.
 */
export function ImageTextSection({
  heading,
  description,
  imageSrc,
  imageAlt,
  textOnLeft = true,
  cta,
  imagePriority = false,
}: ImageTextSectionProps) {
  // Mobile: image first (order-1), text second (order-2)
  const textOrder = textOnLeft ? "order-2 lg:order-1" : "order-2 lg:order-2"
  const imageOrder = textOnLeft ? "order-1 lg:order-2" : "order-1 lg:order-1"
  const gridCols = textOnLeft ? "lg:grid-cols-[9fr_11fr]" : "lg:grid-cols-[11fr_9fr]"

  return (
    <section className={cn("w-full max-container padding-container grid", gridCols)}> 
      {/* Text block */}
      <div
        className={cn(
          "bg-bg2 p-4 lg:p-8 lg:pt-4 flex flex-col justify-between min-h-[400px]",
          textOrder,
        )}
      >
        {/* Top: label + title */}
        <div>{heading}</div>

        {/* Bottom: description + CTA*/}
        {(description || cta) && (
          <div className="flex flex-col gap-6">
            {description && <div className="text-sm text-fg1 max-w-lg font-mono">{description}</div>}
            {cta && <div>{cta}</div>}
          </div>
        )}
      </div>

      {/* Image block */}
      <div className={cn("bg-[color-mix(in_srgb,var(--bg1),var(--bg2))] relative", imageOrder)}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority={imagePriority}
        />
      </div>
    </section>
  )
} 