import Image from "next/image"
import { ButtonLink } from "../ui/button-link";

export function BigMedia() {
    return (
        <section id="big-media" className="w-full max-container padding-container">
            <div className="bg-bg2 p-4">
                <div className="flex flex-col gap-4 pb-4 lg:flex-row lg:justify-between lg:items-center">
                    <div className="flex flex-col gap-2 max-w-lg">
                        <div className="label-frontmatter">
                            Nyoom Engineering
                        </div>
                        <h1 className="heading-frontmatter">
                            Functional Design<br />for the Modern Age
                        </h1>
                    </div>

                    <div className="flex-1 w-full lg:max-w-xl">
                        <p className="text-sm text-gray-300 font-mono">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        </p>
                    </div>

                    <div className="flex items-start lg:items-center mt-2 lg:mt-0">
                        <ButtonLink href="/contact" className="bg-white text-black px-2 py-2 text-sm font-medium inline-flex items-center hover:bg-gray-100 transition-colors">
                            GET STARTED
                        </ButtonLink>
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