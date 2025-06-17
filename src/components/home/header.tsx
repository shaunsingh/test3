import Link from "next/link"
import { ArrowRight, Menu, X } from "lucide-react"
import Image from "next/image";
import { ContactDialog } from "../contact-dialog";
import { Button } from "../ui/button";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="flex fixed top-0 left-0 right-0 z-50 bg-bg1/80 backdrop-blur-xl items-center backdrop-saturate-150 border-b border-white/10 h-16 shadow-lg shadow-black/5">
        <div className="max-container padding-container w-full flex justify-between">
          {/* Left: logo and desktop primary nav */}
          <div className="flex gap-4 items-center">
            <Link href="/" className="shrink-0">
              <Image
                src="/logo-baked.svg"
                alt="Nyoom Engineering logo"
                width={160}
                height={53}
                priority
                className="h-auto w-[160px]"
              />
            </Link>

            <div className="hidden lg:flex items-center space-x-4">
              <NavItem label="Solutions" number="01" href="/#big-media" />
              <NavItem label="Projects" number="02" href="/#projects-section" />
              <NavItem label="Research" number="03" href="/#writings" />
            </div>
          </div>

          {/* Right: desktop secondary nav + contact or hamburger */}
          <div className="flex items-center space-x-6 font-mono text-fg1">
            <div className="hidden xl:flex items-center space-x-6">
              <Link href="/blog" className="text-sm hover:text-fg2">Blog</Link>
              <Link href="/docs" className="hover:text-fg2">Docs</Link>
              <Link href="/automotive" className="hover:text-fg2">Automotive</Link>
              <Link href="/oxocarbon" className="hover:text-fg2">Oxocarbon</Link>
            </div>
            <ContactDialog>
              <Button className="hidden lg:flex bg-white text-black px-2 py-2 font-medium items-center">
                CONTACT US <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </ContactDialog>

            {/* Hamburger */}
            <button
              aria-label="Open menu"
              className="lg:hidden p-2 text-fg1 hover:text-fg3 focus:outline-none"
              onClick={() => setOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay menu */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-bg1 text-fg1 overflow-y-auto transition-transform duration-300 will-change-transform transform translate-x-0 flex flex-col px-5">
          <div className="flex flex-col">
            {/* Top bar */}
            <div className="flex items-center justify-between h-16 mb-6">
              <Link href="/" onClick={() => setOpen(false)}>
                <Image src="/logo-baked.svg" alt="Nyoom Engineering logo" width={160} height={53} priority />
              </Link>
              <button aria-label="Close menu" className="p-2" onClick={() => setOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Primary nav */}
            <div className="space-y-4 mb-8">
              <MobileNavBox label="Solutions" number="01" href="/#big-media" onClick={() => setOpen(false)} />
              <MobileNavBox label="Projects" number="02" href="/#projects-section" onClick={() => setOpen(false)} />
              <MobileNavBox label="Research" number="03" href="/#writings" onClick={() => setOpen(false)} />
            </div>

            {/* Secondary links */}
            <div className="flex flex-col space-y-4 font-mono text-lg mb-8">
              <Link href="/blog" onClick={() => setOpen(false)} className="hover:text-fg3">Blog</Link>
              <Link href="/docs" onClick={() => setOpen(false)} className="hover:text-fg3">Docs</Link>
              <Link href="/automotive" onClick={() => setOpen(false)} className="hover:text-fg3">Automotive</Link>
              <Link href="/oxocarbon" onClick={() => setOpen(false)} className="hover:text-fg3">Oxocarbon</Link>
            </div>

            <ContactDialog>
              <Button className="bg-white text-black w-full py-4 font-medium flex items-center justify-between" onClick={() => setOpen(false)}>
                CONTACT US <ArrowRight className="h-4 w-4" />
              </Button>
            </ContactDialog>
          </div>
        </div>
      )}
    </>
  )
}

function NavItem({ label, number, href }: { label: string; number: string; href?: string; }) {
  return (
    <Link
      href={href || `/${label.toLowerCase()}`}
      className={"px-2 py-2 flex items-center bg-bg3 hover:bg-bg4 transition-colors"}
    >
      <span className="mr-8">{label}</span>
      <span className="text-[#8d8d8d] font-mono">{number}</span>
    </Link>
  )
}

function MobileNavBox({ label, number, href, onClick }: { label: string; number: string; href?: string; onClick?: () => void }) {
  return (
    <Link
      href={href || `/${label.toLowerCase()}`}
      onClick={onClick}
      className="block bg-bg3 hover:bg-bg4 transition-colors px-4 py-4 font-mono text-xl flex justify-between items-center"
    >
      <span className="uppercase tracking-wide">{label}</span>
      <span className="text-fg2">{number}</span>
    </Link>
  )
}
