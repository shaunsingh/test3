import Image from "next/image"
import { ContactDialogButton } from "../contact-dialog-button"
import { memo } from "react"

export const Section = memo(function Section() {
  return (
    <section className="w-full">
      <div className="max-container padding-container grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="bg-black h-[400px] lg:h-auto relative overflow-hidden">
          <Image
            src="/heatmap.png"
            alt="heatmap visualization"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            quality={90}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>

        <div className="bg-card p-4 lg:p-4 flex flex-col justify-center">
          <div className="text-gray-400 mb-4">Nyoom Engineering</div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-mono mb-6">
            Functional Design for
            <br />
            the Modern age
          </h2>
          <p className="text-sm text-gray-400 mb-8 max-w-lg font-mono">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum do
          </p>
          <div>
            <ContactDialogButton className="bg-white text-black px-4 py-2 font-medium flex items-center hover:bg-gray-100 transition-colors" />
          </div>
        </div>
      </div>
    </section>
  )
})
