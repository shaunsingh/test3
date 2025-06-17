import Link from "next/link"
import Image from "next/image"

export function Footer() {
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
              <Link href="/" className="inline-block mb-2">
                <Image src="/logo-baked.svg" alt="Nyoom Engineering" width={180} height={50} />
              </Link>
              <div className="sm:ml-1 sm:pl-2 text-center sm:text-left">
                <p className="text-xs text-fg2 mb-2">Made With</p>
                <div className="flex justify-center sm:justify-start gap-3">
                  <Image src="/technologies/ocaml-logo.svg" alt="OCaml" width={24} height={24} className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/technologies/lisp-logo.svg" alt="Lisp" width={24} height={24} className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/technologies/rust-logo.svg" alt="Rust" width={24} height={24} className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>

            {/* Link sections */}
            <div className="grid w-full grid-cols-2 md:grid-cols-4 gap-x-4 sm:gap-x-8 gap-y-6 justify-items-center sm:justify-items-start">
              {/* Discover */}
              <div>
                <h3 className="text-sm font-medium mb-1 text-fg3">Discover</h3>
                <ul className="space-y-0.5">
                  <li><Link href="/#big-media" className="text-xs text-fg1 hover:text-fg3 transition-colors">Solutions</Link></li>
                  <li><Link href="/#projects-section" className="text-xs text-fg1 hover:text-fg3 transition-colors">Projects</Link></li>
                  <li><Link href="/#writings" className="text-xs text-fg1 hover:text-fg3 transition-colors">Research</Link></li>
                  {/* <li><Link href="/FIXME" className="text-xs text-fg1 hover:text-fg3 transition-colors">Contact Us</Link></li> */}
                </ul>
              </div>

              {/* Connect */}
              <div>
                <h3 className="text-sm font-medium mb-1 text-fg3">Connect</h3>
                <ul className="space-y-0.5">
                  {/* <li><Link href="/events" className="text-xs text-fg1 hover:text-fg3 transition-colors">Events</Link></li> */}
                  {/* <li><Link href="/support" className="text-xs text-fg1 hover:text-fg3 transition-colors">Support</Link></li> */}
                  {/* <li><Link href="/careers" className="text-xs text-fg1 hover:text-fg3 transition-colors">Careers</Link></li> */}
                  <li><Link href="/Merchandise" className="text-xs text-fg1 hover:text-fg3 transition-colors">Merchandise</Link></li>
                </ul>
              </div>

              {/* Relevant */}
              <div>
                <h3 className="text-sm font-medium mb-1 text-fg3">Relevant</h3>
                <ul className="space-y-0.5">
                  <li><Link href="/blog" className="text-xs text-fg1 hover:text-fg3 transition-colors">Blog</Link></li>
                  <li><Link href="/docs" className="text-xs text-fg2 hover:text-fg3 transition-colors">Documentation</Link></li>
                  <li><Link href="/automotive" className="text-xs text-fg2 hover:text-fg3 transition-colors">Automotive</Link></li>
                  <li><Link href="/oxocarbon" className="text-xs text-fg2 hover:text-fg3 transition-colors">Oxocarbon</Link></li>
                </ul>
              </div>

              {/* Follow */}
              <div>
                <h3 className="text-sm font-medium mb-1 text-fg3">Follow</h3>
                <ul className="space-y-0.5">
                  {/* <li><Link href="https://linkedin.com" className="text-xs text-fg1 hover:text-fg3 transition-colors">LinkedIn</Link></li> */}
                  <li><Link href="https://x.com" className="text-xs text-fg2 hover:text-fg3 transition-colors">Twitter</Link></li>
                  {/* <li><Link href="https://youtube.com" className="text-xs text-fg2 hover:text-fg3 transition-colors">YouTube</Link></li> */}
                  <li><Link href="https://discord.com" className="text-xs text-fg2 hover:text-fg3 transition-colors">Discord</Link></li>
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
            <Link href="/privacy" className="hover:text-fg3 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-fg3 transition-colors">Terms of Use</Link>
            <Link href="/accessibility" className="hover:text-fg3 transition-colors">Accessibility</Link>
          </div>
        </div>
      </footer>
    </>
  )
}
