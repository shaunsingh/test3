import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

import { ContactDialog } from "../contact-dialog";
import { Button } from "../ui/button";

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  const targetId = e.currentTarget.getAttribute("href")?.slice(1);
  if (!targetId) return;
  const el = document.getElementById(targetId);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function NavLink({
  href,
  label,
  index,
}: {
  href: string;
  label: string;
  index: string;
}) {
  return (
    <a
      href={href}
      onClick={scrollToSection}
      className="px-2 py-2 flex items-center bg-bg3 hover:bg-bg4 transition-colors"
    >
      <span className="mr-8">{label}</span>
      <span className="text-[#8d8d8d] font-mono">{index}</span>
    </a>
  );
}

function MobileNavLink({
  href,
  label,
  index,
  onClick,
}: {
  href: string;
  label: string;
  index: string;
  onClick: () => void;
}) {
  return (
    <a
      href={href}
      onClick={(e) => {
        scrollToSection(e);
        onClick();
      }}
      className="bg-bg3 hover:bg-bg4 transition-colors px-4 py-4 font-mono text-xl flex justify-between items-center"
    >
      <span className="uppercase tracking-wide">{label}</span>
      <span className="text-fg2">{index}</span>
    </a>
  );
}

function SecondaryLinks({ onClick }: { onClick?: () => void }) {
  const links = [
    { href: "/blog", label: "Blog" },
    { href: "/docs", label: "Docs" },
    { href: "/automotive", label: "Automotive" },
    { href: "/oxocarbon", label: "Oxocarbon" },
  ];
  return (
    <>
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          onClick={onClick}
          className="hover:text-fg2"
        >
          {label}
        </Link>
      ))}
    </>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-bg1/80 backdrop-blur-xl border-b border-white/10 h-16 shadow-lg shadow-black/5">
        <div className="max-container padding-container flex justify-between items-center h-full">
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
              <NavLink href="#big-media" label="Solutions" index="01" />
              <NavLink href="#projects-section" label="Projects" index="02" />
              <NavLink href="#writings" label="Research" index="03" />
            </div>
          </div>

          <div className="flex items-center space-x-6 font-mono text-fg1">
            <div className="hidden xl:flex items-center space-x-6">
              <SecondaryLinks />
            </div>

            <ContactDialog>
              <Button className="hidden lg:flex bg-white text-black px-2 py-2 font-medium items-center">
                CONTACT US <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </ContactDialog>

            <button
              aria-label="Open menu"
              className="lg:hidden p-2 text-fg1 hover:text-fg3"
              onClick={() => setOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-bg1 text-fg1 overflow-y-auto px-5">
          <div className="flex flex-col">
            <div className="flex justify-between items-center h-16 mb-6">
              <Link href="/" onClick={() => setOpen(false)}>
                <Image
                  src="/logo-baked.svg"
                  alt="Nyoom Engineering logo"
                  width={160}
                  height={53}
                  priority
                />
              </Link>
              <button
                aria-label="Close menu"
                className="p-2"
                onClick={() => setOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-4 mb-8">
              <MobileNavLink
                href="#big-media"
                label="Solutions"
                index="01"
                onClick={() => setOpen(false)}
              />
              <MobileNavLink
                href="#projects-section"
                label="Projects"
                index="02"
                onClick={() => setOpen(false)}
              />
              <MobileNavLink
                href="#writings"
                label="Research"
                index="03"
                onClick={() => setOpen(false)}
              />
            </div>

            <div className="flex flex-col space-y-4 font-mono text-lg mb-8">
              <SecondaryLinks onClick={() => setOpen(false)} />
            </div>

            <ContactDialog>
              <Button
                className="bg-white text-black w-full py-4 font-medium flex items-center justify-between"
                onClick={() => setOpen(false)}
              >
                CONTACT US <ArrowRight className="h-4 w-4" />
              </Button>
            </ContactDialog>
          </div>
        </div>
      )}
    </>
  );
}
