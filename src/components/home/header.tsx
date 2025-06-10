import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image";

export function Header() {
  return (
    <header className="flex fixed top-0 left-0 right-0 z-50 bg-bg1/80 backdrop-blur-xl items-center backdrop-saturate-150 border-b border-white/10 h-18 shadow-lg shadow-black/5">
      <div className="container mx-auto flex  justify-between px-4 py-2">
        <div className="flex gap-6">
          <div className="flex items-center">
            <Link href="/">
              <Image src="/logo.png" alt="Nyoom Engineering logo" width={150} height={50} />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <NavItem label="Projects" number="01" />
            <NavItem label="Research" number="02" />
            <NavItem label="Solutions" number="03" />
          </div>
        </div>
        <div className="flex items-center space-x-6 font-mono text-fg1">
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/blog" className="text-sm hover:text-fg3">
              Blog
            </Link>
            <Link href="/docs" className="hover:text-fg3">
              Docs
            </Link>
            <Link href="/automotive" className="hover:text-fg3">
              Automotive
            </Link>
            <Link href="/oxocarbon" className="hover:text-fg3">
              Oxocarbon
            </Link>
          </div>
          <Link href="/contact" className="bg-white text-black px-2 py-2  font-medium flex items-center">
            CONTACT US <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  )
}

function NavItem({ label, number }: { label: string; number: string; }) {
  return (
    <Link
      href={`/${label.toLowerCase()}`}
      className={"px-2 py-2 flex items-center bg-bg3 hover:bg-bg4 transition-colors"}
    >
      <span className="mr-8">{label}</span>
      <span className="text-gray-400">{number}</span>
    </Link>
  )
}
