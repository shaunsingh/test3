import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { memo } from "react"

export const Hero = memo(function Hero() {
  return (
    <section className="w-full max-container padding-container grid grid-cols-1 lg:grid-cols-2 gap-0">
      <div className="bg-card p-4 lg:p-8 flex flex-col justify-between h-[400px] min-h-[500px]">
        <div>
          <div className="text-gray-400 mb-4">Nyoom Engineering</div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-mono mb-0">
            Functional Design for
            <br />
            the Modern age
          </h1>
        </div>
        <div>
          <p className="text-sm text-gray-400 mb-8 max-w-lg font-mono">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum do
          </p>
          <Link
            href="/contact"
            className="bg-white text-black px-4 py-2 text-sm font-medium inline-flex items-center hover:bg-gray-100 transition-colors"
            prefetch={false}
          >
            CONTACT US <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="bg-black h-[380px] lg:h-auto relative overflow-hidden">
        <Image
          src="/caida/ries-t.png"
          alt="planet"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          priority
        />
      </div>
    </section>
  )
})
