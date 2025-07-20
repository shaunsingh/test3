import { ImageTextSection } from "./image-text-section"
import { ContactDialogButton } from "../contact-dialog-button"

// Extracted static fragments
const heading = (
  <>
    <div className="text-gray-400 mb-4">Nyoom Engineering</div>
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-mono mb-6">
      Functional Design for
      <br />
      the Modern age
    </h2>
  </>
)

const description = (
  <>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum do
  </>
)

const cta = (
  <ContactDialogButton className="bg-white text-black px-4 py-2 font-medium flex items-center hover:bg-gray-100 transition-colors" />
)

export function Section() {
  return (
    <ImageTextSection
      textOnLeft={false}
      imageSrc="/caida/lar-gr-l-7.avif"
      imageAlt="lar-gr-l-7"
      imagePriority
      heading={heading}
      description={description}
      cta={cta}
    />
  )
}
