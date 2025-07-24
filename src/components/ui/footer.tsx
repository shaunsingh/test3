import Link from "next/link"
import Image from "next/image"
import { Logo } from "./logo"

const FOOTER_LINKS = {
  discover: [
    { href: "/#solutions", label: "Solutions" },
    { href: "/#projects", label: "Projects" },
    { href: "/#research", label: "Research" },
    { href: "/#automotive", label: "Automotive" },
  ],
  connect: [
    { href: "/#5", label: "Merchandise" },
    { href: "/#6", label: "Overview" },
    { href: "/#7", label: "Careers" },
    { href: "/#8", label: "Investor relations" },
  ],
  about: [
    { href: "/#9", label: "Leadership" },
    { href: "/#10", label: "Newsroom" },
    { href: "/#11", label: "Security, privacy and trust" },
    { href: "/#12", label: "Think of a link" },
  ],
  follow: [
    { href: "https://x.com", label: "Twitter" },
    { href: "https://discord.com", label: "Discord" },
    { href: "https://github.com/nyoom-engineering", label: "GitHub" },
    { href: "https://www.linkedin.com/company/nyoom-engineering", label: "LinkedIn" },
  ],
} as const;

const TECHNOLOGIES = [
  {
    src: "/technologies/ocaml-logo.svg",
    alt: "OCaml",
    href: "https://ocaml.org",
  },
  {
    src: "/technologies/lisp-logo.svg",
    alt: "Lisp",
    href: "https://lisp-lang.org",
  },
  {
    src: "/technologies/rust-logo.svg",
    alt: "Rust",
    href: "https://www.rust-lang.org",
  },
] as const;

/*
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
*/

type FooterLink = {
  href: string
  label: string
}

interface LinkSectionProps {
  title: string
  links: readonly FooterLink[]
  className?: string
}

function LinkSection({ title, links }: LinkSectionProps) {
  return (
    <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
      <h1 className="text-sm font-semibold text-fg3">{title}</h1>
      <ul className="flex flex-col items-center md:items-start">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-xs"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <>
      <footer>
        {/* Main footer layout */}
        <div className="flex flex-col gap-6 p-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Logo and Made With Section */}
            <div className="w-full md:w-1/3 flex flex-col gap-6 items-center md:items-start text-center md:text-left">
              <div className="flex flex-col gap-2">
                <p className="text-xs">Made With</p>
                <div className="flex flex-row gap-2">
                  {TECHNOLOGIES.map(({ src, alt, href }) => (
                    <Link
                      key={alt}
                      href={href}
                    >
                      <Image
                        src={src}
                        alt={alt}
                        width={0}
                        height={0}
                        className="h-[28px] w-auto"
                      />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs">Brought to you by</p>
                <Logo />
              </div>
            </div>

            {/* Link sections */}
            {/* Use a responsive grid so the four sections line up horizontally on medium screens and larger */}
            <div className="w-full grid gap-4 grid-cols-2 md:grid-cols-4">
              <LinkSection title="Discover" links={FOOTER_LINKS.discover} />
              <LinkSection title="Connect" links={FOOTER_LINKS.connect} />
              <LinkSection title="About" links={FOOTER_LINKS.about} />
              <LinkSection title="Follow" links={FOOTER_LINKS.follow} />
            </div>
          </div>
          <p className="text-xs text-fg3 text-center">© 2025 Nyoom Engineering.</p>
        </div>
      </footer >
    </>
  )
}
