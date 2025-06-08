import Image from "next/image"
import Link from "next/link"

export function BigMedia() {
  return (
    <section className="w-full text-white">
      <div className="container bg-card mx-auto">
        {/* Top Info Bar */}
        <div className="flex flex-col lg:flex-row justify-between px-6 py-8 gap-6 items-start lg:items-center">
          {/* Left Column: Text Content */}
          <div className="flex flex-col gap-2 max-w-lg">
            <div className="text-xs text-gray-400 font-mono uppercase tracking-widest">
              EXAMPLE IMG
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-mono leading-snug">
              Functional Design<br />for the Modern Age
            </h1>
          </div>

          {/* Middle Column: Paragraph */}
          <div className="flex-1 max-w-xl">
            <p className="text-sm text-gray-300 font-mono">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            </p>
          </div>

          {/* Right Column: Contact Button */}
          <div className="flex items-start lg:items-center">
            <Link
              href="/contact"
              className="bg-white text-black px-4 py-2 text-sm font-medium flex items-center whitespace-nowrap"
            >
              CONTACT US <span className="ml-2">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full h-[500px]">
          <Image
            src="/lasers.png"
            alt="Abstract Lasers"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
