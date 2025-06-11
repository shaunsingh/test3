import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { ContactDialog } from "../contact-dialog"
import { Button } from "../ui/button"

export function Section() {
  return (
    <section className="w-full">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Image on the left */}
        <div className="bg-black h-[400px] lg:h-auto relative overflow-hidden">
          <Image
            src="/heatmap.png"
            alt="lasers"
            fill
            className="object-cover"
            priority={true}
          />
        </div>

        {/* Text content on the right */}
        <div className="bg-card p-8 lg:p-16 flex flex-col justify-center">
          <div className="text-gray-400 mb-4">Nyoom Engineering</div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono mb-6">
            Functional Design for
            <br />
            the Modern age
          </h1>
          <p className="text-sm text-gray-400 mb-8 max-w-lg font-mono">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum do
          </p>
          <div>
            <ContactDialog>
              <Button className="bg-white text-black px-2 py-2  font-medium flex items-center">
                CONTACT US <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </ContactDialog>
          </div>
        </div>
      </div>
    </section>
  )
}
