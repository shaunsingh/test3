import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <>
      {/* Top separator line */}
      <div className="w-full h-[1px] bg-bg2"></div>
      
      <footer className="w-full bg-bg1 text-fg1">
        <div className="max-container padding-container px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
            {/* Logo and Made With Section */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-6">
                <Image src="/logo.png" alt="Nyoom Engineering" width={180} height={50} />
              </Link>
              <div className="ml-1">
                <p className="text-xs text-fg2 mb-2">Made With</p>
                <div className="flex gap-4">
                  <Image src="/technologies/ocaml-logo.svg" alt="OCaml" width={24} height={24} className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/technologies/dioxus-logo.svg" alt="Dioxus" width={24} height={24} className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/technologies/rust-logo.svg" alt="Rust" width={24} height={24} className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/technologies/lisp-logo.svg" alt="Lisp" width={24} height={24} className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>

            {/* Discover */}
            <div className="lg:col-span-1">
              <h3 className="font-semibold mb-4 text-fg3">Discover</h3>
              <ul className="space-y-2">
                <li><Link href="/products" className="text-sm text-fg2 hover:text-fg3 transition-colors">Products</Link></li>
                <li><Link href="/consulting" className="text-sm text-fg2 hover:text-fg3 transition-colors">Consulting services</Link></li>
                <li><Link href="/industries" className="text-sm text-fg2 hover:text-fg3 transition-colors">Industries</Link></li>
                <li><Link href="/case-studies" className="text-sm text-fg2 hover:text-fg3 transition-colors">Case studies</Link></li>
                <li><Link href="/financing" className="text-sm text-fg2 hover:text-fg3 transition-colors">Financing</Link></li>
                <li><Link href="/research" className="text-sm text-fg2 hover:text-fg3 transition-colors">Research</Link></li>
              </ul>
            </div>

            {/* Connect */}
            <div className="lg:col-span-1">
              <h3 className="font-semibold mb-4 text-fg3">Connect</h3>
              <ul className="space-y-2">
                <li><Link href="/partners" className="text-sm text-fg2 hover:text-fg3 transition-colors">Business partners</Link></li>
                <li><Link href="/documentation" className="text-sm text-fg2 hover:text-fg3 transition-colors">Documentation</Link></li>
                <li><Link href="/events" className="text-sm text-fg2 hover:text-fg3 transition-colors">Events</Link></li>
                <li><Link href="/subscription" className="text-sm text-fg2 hover:text-fg3 transition-colors">Subscription center</Link></li>
                <li><Link href="/support" className="text-sm text-fg2 hover:text-fg3 transition-colors">Support</Link></li>
                <li><Link href="/community" className="text-sm text-fg2 hover:text-fg3 transition-colors">TechXchange community</Link></li>
              </ul>
            </div>

            {/* About */}
            <div className="lg:col-span-1">
              <h3 className="font-semibold mb-4 text-fg3">About</h3>
              <ul className="space-y-2">
                <li><Link href="/overview" className="text-sm text-fg2 hover:text-fg3 transition-colors">Overview</Link></li>
                <li><Link href="/careers" className="text-sm text-fg2 hover:text-fg3 transition-colors">Careers</Link></li>
                <li><Link href="/investor-relations" className="text-sm text-fg2 hover:text-fg3 transition-colors">Investor relations</Link></li>
                <li><Link href="/leadership" className="text-sm text-fg2 hover:text-fg3 transition-colors">Leadership</Link></li>
                <li><Link href="/newsroom" className="text-sm text-fg2 hover:text-fg3 transition-colors">Newsroom</Link></li>
                <li><Link href="/security" className="text-sm text-fg2 hover:text-fg3 transition-colors">Security, privacy and trust</Link></li>
              </ul>
            </div>

            {/* Follow */}
            <div className="lg:col-span-1">
              <h3 className="font-semibold mb-4 text-fg3">Follow</h3>
              <ul className="space-y-2">
                <li><Link href="https://linkedin.com" className="text-sm text-fg2 hover:text-fg3 transition-colors">LinkedIn</Link></li>
                <li><Link href="https://x.com" className="text-sm text-fg2 hover:text-fg3 transition-colors">X</Link></li>
                <li><Link href="https://instagram.com" className="text-sm text-fg2 hover:text-fg3 transition-colors">Instagram</Link></li>
                <li><Link href="https://youtube.com" className="text-sm text-fg2 hover:text-fg3 transition-colors">YouTube</Link></li>
                <li><Link href="/podcasts" className="text-sm text-fg2 hover:text-fg3 transition-colors">Podcasts</Link></li>
              </ul>
            </div>

            {/* Bottom links */}
            <div className="lg:col-span-1">
              <ul className="space-y-2 lg:mt-12">
                <li><Link href="/contact" className="text-sm text-fg2 hover:text-fg3 transition-colors">Contact Nyoom</Link></li>
                <li><Link href="/privacy" className="text-sm text-fg2 hover:text-fg3 transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="text-sm text-fg2 hover:text-fg3 transition-colors">Terms of use</Link></li>
                <li><Link href="/accessibility" className="text-sm text-fg2 hover:text-fg3 transition-colors">Accessibility</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
