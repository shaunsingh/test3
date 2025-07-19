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
  about: [
    { href: "/overview", label: "Overview" },
    { href: "/careers", label: "Careers" },
    { href: "/investors", label: "Investor relations" },
    { href: "/leadership", label: "Leadership" },
    { href: "/newsroom", label: "Newsroom" },
    { href: "/trust", label: "Security, privacy and trust" },
  ],
  follow: [
    { href: "https://x.com", label: "Twitter" },
    { href: "https://discord.com", label: "Discord" },
  ],
} as const;

const TECHNOLOGIES = [
  {
    src: "/technologies/ocaml-logo.svg",
    alt: "OCaml",
    href: "https://ocaml.org",
    width: 76,
    height: 76,
  },
  {
    src: "/technologies/lisp-logo.svg",
    alt: "Lisp",
    href: "https://lisp-lang.org",
    width: 24,
    height: 24,
  },
  {
    src: "/technologies/rust-logo.svg",
    alt: "Rust",
    href: "https://www.rust-lang.org",
    width: 24,
    height: 24,
  },
] as const;

const LEGAL_GROUPS = [
  [
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy" },
  ],
  [
    { href: "/terms", label: "Terms of Use" },
    { href: "/accessibility", label: "Accessibility" },
  ],
] as const;

export const Footer = memo(function Footer() {
  return (
    <>
      {/* Top separator line */}
      <div className="w-full h-[1px] bg-bg2"></div>

      <footer className="w-full bg-bg1 text-fg1">
        {/* Grid section */}
        <div className="max-container padding-container pt-8 pb-12">
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
                  {TECHNOLOGIES.map(({ src, alt, href, width, height }) => (
                    <Link
                      key={alt}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      prefetch={false}
                      className="inline-block"
                    >
                      <Image
                        src={src}
                        alt={alt}
                        width={width}
                        height={height}
                        className="opacity-70 hover:opacity-100 transition-opacity object-contain"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Link sections */}
            <div className="grid w-full grid-cols-2 md:grid-cols-3 gap-x-6 lg:gap-x-12 gap-y-8 justify-items-center sm:justify-items-start">
              {/* Discover */}
              <div>
                <h3 className="text-sm font-semibold mb-1 text-fg3">Discover</h3>
                <ul className="space-y-1 leading-5">
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
                <h3 className="text-sm font-semibold mb-1 text-fg3">Connect</h3>
                <ul className="space-y-1 leading-5">
                  {FOOTER_LINKS.connect.map(({ href, label }) => (
                    <li key={href}>
                      <Link href={href} className="text-xs text-fg1 hover:text-fg3 transition-colors" prefetch={false}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About */}
              <div>
                <h3 className="text-sm font-semibold mb-1 text-fg3">About</h3>
                <ul className="space-y-1 leading-5">
                  {FOOTER_LINKS.about.map(({ href, label }) => (
                    <li key={href}>
                      <Link href={href} className="text-xs text-fg1 hover:text-fg3 transition-colors" prefetch={false}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Follow */}
              <div className="md:col-span-3">
                <h3 className="text-sm font-semibold mb-1 text-fg3">Follow</h3>
                <ul className="space-y-1 leading-5">
                  {FOOTER_LINKS.follow.map(({ href, label }) => (
                    <li key={href}>
                      <Link href={href} className="text-xs text-fg1 hover:text-fg3 transition-colors" prefetch={false}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Divider aligned with content (starts after logo column) */}
        <div className="max-container padding-container">
          <div className="flex items-center gap-8">
            {/* placeholder matching logo width */}
            <div className="hidden sm:block sm:w-1/3 md:w-1/4 xl:w-1/5 flex-shrink-0"></div>
            <div className="flex-grow h-[1px] bg-bg2"></div>
          </div>
        </div>

        {/* Bottom legal links */}
        <div className="max-container padding-container py-6 text-xs text-fg2">
          <div className="flex flex-col sm:flex-row gap-8">
            {/* Invisible placeholder to match logo column widths */}
            <div className="hidden sm:block sm:w-1/3 md:w-1/4 xl:w-1/5 flex-shrink-0"></div>

            {/* Legal links grid */}
            <div className="w-full">
              <div className="grid grid-cols-3 gap-x-6 lg:gap-x-12 gap-y-2">
                {LEGAL_GROUPS.map((group, idx) => (
                  <ul key={idx} className="space-y-2">
                    {group.map(({ href, label }) => (
                      <li key={href}>
                        <Link href={href} className="hover:text-fg3 transition-colors" prefetch={false}>
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
});
