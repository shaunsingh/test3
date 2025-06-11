import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="w-full">
      <div className="max-container grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="bg-card p-4 lg:p-4 flex flex-col justify-center">
          <div className="text-gray-400 mb-4">Nyoom Engineering</div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-mono mb-6">
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
            <Link
              href="/contact"
              className="bg-white text-black px-4 py-2 text-sm font-medium inline-flex items-center"
            >
              CONTACT US <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="bg-black h-[400px] lg:h-auto relative overflow-hidden">
          <Image
            src="/planet.png"
            alt="planet"
            fill
            className="object-cover"
            priority={true}
          />
        </div>
      </div>
    </section>
  )
}
