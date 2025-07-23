import Image from "next/image"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"
// heading utility class defined in globals.css

interface ImageTextSectionProps {
  /** Label text shown above the main heading */
  label: string
  /** Main heading text */
  title: string
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
  label,
  title,
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
    <section className={cn("grid", gridCols)}>
      {/* Text block */}
      <div
        className={cn(
          "bg-bg2 p-4 lg:p-8 lg:pt-4 flex flex-col gap-6 justify-between",
          textOrder,
        )}
      >
        {/* Top: label + title */}
        <div className="flex flex-col gap-4">
          <div className="text-ignore">{label}</div>
          <h1 className="section-heading">{title}</h1>
        </div>

        {/* Bottom: description + CTA*/}
        {(description || cta) && (
          <div className="flex flex-col gap-6">
            {description && <p>{description}</p>}
            {cta && <div>{cta}</div>}
          </div>
        )}
      </div>

      {/* Image block */}
      <div className={cn("section-image", imageOrder)}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority={imagePriority}
          fetchPriority={imagePriority ? "high" : undefined}
          sizes="(min-width: 1024px) 55vw, 100vw"
        />
      </div>
    </section>
  )
} 