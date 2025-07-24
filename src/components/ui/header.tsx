"use client"

import Link from "next/link";
import { useState } from "react";
import { Menu, Close as X } from "@carbon/icons-react";
import { ButtonLink } from "./button-link";
import { Logo } from "./logo";

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
    <Link
      href={href}
      onClick={onClick}
      className="flex bg-bg3 hover:bg-bg4 items-center justify-between gap-6 px-4 py-3 xl:justify-start xl:px-2 xl:py-2"
    >
      <span className="uppercase font-medium">{label}</span>
      <span className="text-ignore">{index}</span>
    </Link>
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
  { href: "/", label: "Blog" },
  { href: "/", label: "Docs" },
  { href: "/", label: "Automotive" },
  { href: "/", label: "Oxocarbon" },
] as const;

function SecondaryLinks({ onClick }: { onClick?: () => void }) {
  return (
    <>
      {SECONDARY_LINKS.map(({ href, label }) => (
        <Link
          key={label}
          href={href}
          onClick={onClick}
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
        className="sticky top-0 relative bg-bg1/80 backdrop-blur-xl z-10 font-mono"
      >
        <div className="flex justify-between items-center py-2">
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
              <ButtonLink href="/">GET STARTED</ButtonLink>
            </nav>

            {/* Hamburger menu: visible below lg */}
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              className="lg:hidden"
              onClick={toggleMenu}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile navigation overlay*/}
        {open && (
          <div className="py-4 flex flex-col gap-8 padding-container">
            {/* Primary links */}
            <nav className="flex flex-col gap-2" role="navigation">
              <PrimaryLinks onClick={closeMenu} />
            </nav>

            {/* Secondary links */}
            <div className="flex flex-col gap-4">
              <SecondaryLinks onClick={closeMenu} />
            </div>

            <ButtonLink
              href="/"
              className="justify-center py-3"
            >
              GET STARTED
            </ButtonLink>
          </div>
        )}
        {/* Full-width bottom border */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-screen border-b border-bg2"
        />
      </header>

      {/* Dim the background when mobile menu is open */}
      {open && (
        <div
          className="fixed inset-0 bg-bg1/50"
          onClick={closeMenu}
        />
      )}
    </>
  );
}
