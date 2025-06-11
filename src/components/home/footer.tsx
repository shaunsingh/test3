import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="max-container padding-container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/">
              <Image src="/logo.png" alt="Nyoom Engineering logo" width={200} height={60} />
            </Link>
            <p className="text-gray-400 text-sm my-4 max-w-md">
              Functional Design for the Modern age. We create innovative solutions that bridge the gap between
              technology and human experience.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-gray-400 hover:text-white text-sm">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-400 hover:text-white text-sm">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-gray-400 hover:text-white text-sm">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white text-sm">
                  Get in Touch
                </Link>
              </li>
              <li>
                <Link href="/automotive" className="text-gray-400 hover:text-white text-sm">
                  Automotive
                </Link>
              </li>
              <li>
                <Link href="/oxocarbon" className="text-gray-400 hover:text-white text-sm">
                  Oxocarbon
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-white text-sm">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 Nyoom Engineering. All rights reserved.</div>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
