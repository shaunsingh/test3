import { ButtonLink } from "../ui/button-link"
import { ImageTextSection } from "../cards/image-text-card"

const description = (
  <>
    Nyoom Engineering democratizes AI development at scale. Our platform makes it effortless to discover global
    compute resources and train state-of-the-art models through distributed clusters. Collectively own the resulting
    open AI innovations – from language models to scientific breakthroughs.
  </>
)

export function Hero() {
  return (
    <ImageTextSection
      imageSrc="/caida/ries-t.png"
      imageAlt="ries-t"
      label="Nyoom Engineering"
      title="Functional Design for the Modern age"
      description={description}
      cta={<ButtonLink href="/">GET STARTED</ButtonLink>}
    />
  )
}
