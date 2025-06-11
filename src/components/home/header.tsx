import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image";
import { ContactDialog } from "../contact-dialog";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="flex fixed top-0 left-0 right-0 z-50 bg-bg1/80 backdrop-blur-xl items-center backdrop-saturate-150 border-b border-white/10 h-16 shadow-lg shadow-black/5">
      <div className="max-container padding-container w-full flex justify-between">
        <div className="flex gap-4">
          <div className="flex items-center">
            <Link href="/">
              <Image src="/logo.png" alt="Nyoom Engineering logo" width={160} height={53} />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <NavItem label="Solutions" number="01" href="/#big-media" />
            <NavItem label="Projects" number="02" href="/#projects-section" />
            <NavItem label="Research" number="03" href="/#writings" />
          </div>
        </div>
        <div className="flex items-center space-x-6 font-mono text-fg1">
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/blog" className="text-sm hover:text-fg2">
              Blog
            </Link>
            <Link href="/docs" className="hover:text-fg2">
              Docs
            </Link>
            <Link href="/automotive" className="hover:text-fg2">
              Automotive
            </Link>
            <Link href="/oxocarbon" className="hover:text-fg2">
              Oxocarbon
            </Link>
          </div>
          <ContactDialog>
            <Button className="bg-white text-black px-2 py-2  font-medium flex items-center">
              CONTACT US <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </ContactDialog>
        </div>
      </div>
    </header>
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
