import Link from "next/link"
import { ArrowRight } from "@carbon/icons-react"
import { memo } from "react"
import { ImageTextSection } from "./image-text-section"

// Extracted static fragments to avoid recreating them on each render
const heading = (
  <>
    <div className="text-gray-400 mb-4">Nyoom Engineering</div>
    <h1 className="text-2xl md:text-3xl lg:text-4xl font-mono leading-tight mb-6">
      Functional Design for
      <br />
      the Modern age
    </h1>
  </>
)

const description = (
  <>
    Nyoom Engineering democratizes AI development at scale. Our platform makes it effortless to discover global
    compute resources and train state-of-the-art models through distributed clusters. Collectively own the resulting
    open AI innovations – from language models to scientific breakthroughs.
  </>
)

const cta = (
  <Link
    href="/contact"
    className="bg-white text-black px-4 py-2 text-sm font-medium inline-flex items-center hover:bg-gray-100 transition-colors"
    prefetch={false}
  >
    GET STARTED <ArrowRight className="ml-2 h-4 w-4" />
  </Link>
)

export const Hero = memo(function Hero() {
  return (
    <ImageTextSection
      imageSrc="/caida/ries-t-re.avif"
      imageAlt="planet"
      imagePriority
      heading={heading}
      description={description}
      cta={cta}
    />
  )
})
