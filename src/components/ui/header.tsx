"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, Close as X } from "@carbon/icons-react";
import { ButtonLink } from "./button-link";

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      className="shrink-0"
      prefetch={false}
      onClick={onClick}
    >
      <Image
        src="/logo-baked.svg"
        alt="Nyoom Engineering logo"
        width={160}
        height={53}
        priority
        loading="eager"
      />
    </Link>
  );
}

function NavLink({
  href,
  label,
  index,
  onClick,
}: {
  href: string;
  label: string;
  index: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="flex bg-bg3 hover:bg-bg4 transition-colors items-center justify-between px-4 py-3 xl:justify-start xl:px-2 xl:py-2"
    >
      <span className="uppercase font-medium mr-6">{label}</span>
      <span className="text-ignore">{index}</span>
    </a>
  );
}

const PRIMARY_LINKS = [
  { href: "#big-media", label: "Solutions" },
  { href: "#projects-section", label: "Projects" },
  { href: "#writings", label: "Research" },
] as const;

function PrimaryLinks({ onClick }: { onClick?: () => void }) {
  return (
    <>
      {PRIMARY_LINKS.map(({ href, label }, i) => (
        <NavLink
          key={href}
          href={href}
          label={label}
          index={String(i + 1).padStart(2, "0")}
          onClick={onClick}
        />
      ))}
    </>
  );
}

const SECONDARY_LINKS = [
  { href: "/blog", label: "Blog" },
  { href: "/docs", label: "Docs" },
  { href: "/automotive", label: "Automotive" },
  { href: "/oxocarbon", label: "Oxocarbon" },
] as const;

function SecondaryLinks({ onClick }: { onClick?: () => void }) {
  return (
    <>
      {SECONDARY_LINKS.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          onClick={onClick}
          className="hover:text-fg3 transition-colors"
        >
          {label}
        </Link>
      ))}
    </>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(prev => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 min-h-16 border-b border-bg2 bg-bg1/80 backdrop-blur-xl z-10 font-mono"
      >
        <div className="max-container padding-container flex justify-between items-center h-16">
          <div className="flex gap-4">
            <Logo />

            {/* Primary navigation: visible only on xl and above */}
            <nav className="hidden xl:flex items-center gap-4" role="navigation">
              <PrimaryLinks />
            </nav>
          </div>

          <div>
            {/* Secondary navigation: visible on lg and above */}
            <nav className="hidden lg:flex gap-4 items-center" role="navigation">
              <SecondaryLinks />
              <span className="hidden xl:inline-flex">
                <ButtonLink href="/get-started">GET STARTED</ButtonLink>
              </span>
            </nav>

            {/* Hamburger menu: visible below lg */}
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              className="lg:hidden text-fg1 hover:text-fg3"
              onClick={toggleMenu}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile navigation overlay*/}
        {open && (
          <div className="py-8 flex flex-col padding-container">
            {/* Primary links TODO */}
            <nav className="space-y-2 mb-8" role="navigation">
              <PrimaryLinks onClick={closeMenu} />
            </nav>

            {/* Secondary links */}
            <div className="flex flex-col space-y-4 mb-8">
              <SecondaryLinks onClick={closeMenu} />
            </div>

            <ButtonLink
              href="/get-started"
              className="padding-container justify-center py-3 bg-fg2"
            >
              GET STARTED
            </ButtonLink>
          </div>
        )}
      </header>

      {/* Dim the background when mobile menu is open */}
      {open && (
        <div
          className="fixed inset-0 bg-bg1/50 z-5 lg:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  );
}
