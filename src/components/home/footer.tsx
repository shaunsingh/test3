import Link from "next/link"
import Image from "next/image"
import { memo } from "react"

const FOOTER_LINKS = {
  discover: [
    { href: "/#big-media", label: "Solutions" },
    { href: "/#projects-section", label: "Projects" },
    { href: "/#writings", label: "Research" },
  ],
  connect: [
    { href: "/Merchandise", label: "Merchandise" },
  ],
  relevant: [
    { href: "/blog", label: "Blog" },
    { href: "/docs", label: "Documentation" },
    { href: "/automotive", label: "Automotive" },
    { href: "/oxocarbon", label: "Oxocarbon" },
  ],
  follow: [
    { href: "https://x.com", label: "Twitter" },
    { href: "https://discord.com", label: "Discord" },
  ],
} as const;

const TECHNOLOGIES = [
  { src: "/technologies/ocaml-logo.svg", alt: "OCaml" },
  { src: "/technologies/lisp-logo.svg", alt: "Lisp" },
  { src: "/technologies/rust-logo.svg", alt: "Rust" },
] as const;

const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/accessibility", label: "Accessibility" },
] as const;

export const Footer = memo(function Footer() {
  return (
    <>
      {/* Top separator line */}
      <div className="w-full h-[1px] bg-bg2"></div>

      <footer className="w-full bg-bg1 text-fg1">
        {/* Grid section */}
        <div className="max-container padding-container pt-5 pb-10">
          {/* Main footer layout */}
          <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start text-center sm:text-left">
            {/* Logo and Made With Section */}
            <div className="w-full sm:w-1/3 md:w-1/4 xl:w-1/5 flex-shrink-0">
              <Link href="/" className="inline-block mb-2" prefetch={false}>
                <Image
                  src="/logo-baked.svg"
                  alt="Nyoom Engineering"
                  width={180}
                  height={50}
                  title="Nyoom Engineering"
                  className="h-auto w-[180px]"
                />
              </Link>
              <div className="sm:ml-1 sm:pl-2 text-center sm:text-left">
                <p className="text-xs text-fg2 mb-2">Made With</p>
                <div className="flex justify-center sm:justify-start gap-3">
                  {TECHNOLOGIES.map(({ src, alt }) => (
                    <Image
                      key={alt}
                      src={src}
                      alt={alt}
                      width={24}
                      height={24}
                      className="opacity-70 hover:opacity-100 transition-opacity"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Link sections */}
            <div className="grid w-full grid-cols-2 md:grid-cols-4 gap-x-4 sm:gap-x-8 gap-y-6 justify-items-center sm:justify-items-start">
              {/* Discover */}
              <div>
                <h3 className="text-sm font-medium mb-1 text-fg3">Discover</h3>
                <ul className="space-y-0.5">
                  {FOOTER_LINKS.discover.map(({ href, label }) => (
                    <li key={href}>
                      <Link href={href} className="text-xs text-fg1 hover:text-fg3 transition-colors" prefetch={false}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connect */}
              <div>
                <h3 className="text-sm font-medium mb-1 text-fg3">Connect</h3>
                <ul className="space-y-0.5">
                  {FOOTER_LINKS.connect.map(({ href, label }) => (
                    <li key={href}>
                      <Link href={href} className="text-xs text-fg1 hover:text-fg3 transition-colors" prefetch={false}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Relevant */}
              <div>
                <h3 className="text-sm font-medium mb-1 text-fg3">Relevant</h3>
                <ul className="space-y-0.5">
                  {FOOTER_LINKS.relevant.map(({ href, label }) => (
                    <li key={href}>
                      <Link href={href} className="text-xs text-fg2 hover:text-fg3 transition-colors" prefetch={false}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Follow */}
              <div>
                <h3 className="text-sm font-medium mb-1 text-fg3">Follow</h3>
                <ul className="space-y-0.5">
                  {FOOTER_LINKS.follow.map(({ href, label }) => (
                    <li key={href}>
                      <Link href={href} className="text-xs text-fg2 hover:text-fg3 transition-colors" prefetch={false}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width divider */}
        <div className="w-full h-[1px] bg-bg2"></div>

        {/* Bottom bar */}
        <div className="max-container padding-container py-3 flex flex-col md:flex-row items-center md:justify-between text-xs text-fg2 font-mono">
          <p className="mb-1 md:mb-0">© {new Date().getFullYear()} Nyoom Engineering, Inc. All rights reserved.</p>

          <div className="flex space-x-4">
            {LEGAL_LINKS.map(({ href, label }) => (
              <Link key={href} href={href} className="hover:text-fg3 transition-colors" prefetch={false}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
});
