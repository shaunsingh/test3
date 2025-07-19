import Image from "next/image"
import { memo, ReactNode } from "react"
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
  /** Override for the `sizes` attribute on next/image */
  imageSizes?: string
}

/**
 * Generic image + text split section used by both the Hero and the secondary feature section.
 * Keeps the visual style of the existing Hero component but allows reversing column order.
 */
export const ImageTextSection = memo(function ImageTextSection({
  heading,
  description,
  imageSrc,
  imageAlt,
  textOnLeft = true,
  cta,
  imagePriority = false,
  imageSizes = "(max-width: 1024px) 100vw, 50vw",
}: ImageTextSectionProps) {
  // Mobile: image first (order-1), text second (order-2)
  const textOrder = textOnLeft ? "order-2 lg:order-1" : "order-2 lg:order-2"
  const imageOrder = textOnLeft ? "order-1 lg:order-2" : "order-1 lg:order-1"
  const gridCols = textOnLeft ? "lg:grid-cols-[9fr_11fr]" : "lg:grid-cols-[11fr_9fr]"

  return (
    <section className={cn("w-full max-container padding-container grid grid-cols-1", gridCols, "gap-0")}> 
      {/* Text block */}
      <div
        className={cn(
          "bg-card p-4 lg:p-8 lg:pt-4 flex flex-col justify-between min-h-[400px] lg:min-h-[500px]",
          textOrder,
        )}
      >
        {/* Top: label + title */}
        <div>{heading}</div>

        {/* Bottom: description + CTA */}
        {(description || cta) && (
          <div className="flex flex-col gap-6">
            {description && <div className="text-sm text-gray-400 max-w-lg font-mono">{description}</div>}
            {cta && <div>{cta}</div>}
          </div>
        )}
      </div>

      {/* Image block */}
      <div className={cn("bg-black h-[300px] sm:h-[380px] lg:h-auto relative overflow-hidden", imageOrder)}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes={imageSizes}
          className="object-cover"
          priority={imagePriority}
          quality={90}
        />
      </div>
    </section>
  )
}) 