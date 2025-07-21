import Link from "next/link"
import { ArrowRight } from "@carbon/icons-react"
import { ImageTextSection } from "./image-text-section"

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

export function Hero() {
  return (
    <ImageTextSection
      imageSrc="/caida/ries-t-re.avif"
      imageAlt="Ries T-Re"
      imagePriority
      label="Nyoom Engineering"
      title="Functional Design for the Modern age"
      description={description}
      cta={cta}
    />
  )
}
