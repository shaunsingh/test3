import { ButtonLink } from "../ui/button-link"
import { ImageTextSection } from "../cards/image-text-card"

const description = (
  <>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum do
  </>
)

export function Section() {
  return (
    <ImageTextSection
      textOnLeft={false}
      imageSrc="/caida/lar-gr-l-7.avif"
      imageAlt="lar-gr-l-7"
      label="Nyoom Engineering"
      title="Functional Design for the Modern age"
      description={description}
      cta={<ButtonLink href="/">GET STARTED</ButtonLink>}
    />
  )
}
