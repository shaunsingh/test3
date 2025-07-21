import Image from "next/image"

export function BigMedia() {
  return (
    <section id="big-media" className="scroll-mt-16 w-full max-container padding-container text-white">
      <div className="bg-card border-16 border-bg2">
        <div className="flex flex-col gap-4 lg:flex-row lg:justify-between pb-4 items-start lg:items-center">
          <div className="flex flex-col gap-2 max-w-lg">
            <div className="text-xs text-gray-400 font-mono uppercase tracking-widest">
              EXAMPLE IMG
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-mono leading-snug">
              Functional Design<br />for the Modern Age
            </h2>
          </div>

          <div className="flex-1 w-full lg:max-w-xl">
            <p className="text-sm text-gray-300 font-mono">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            </p>
          </div>
        </div>

        <div className="relative w-full h-[500px] overflow-hidden">
          <Image
            src="/lasers.avif"
            alt="Abstract Lasers"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
