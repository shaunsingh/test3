"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useCallback, useEffect, useRef } from "react";
import { Menu, Close as X } from "@carbon/icons-react";
import { usePathname } from "next/navigation";
import { ButtonLink } from "../ui/button-link";

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

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const targetId = e.currentTarget.getAttribute("href")?.slice(1);
  if (!targetId) return;

  if ((window as Window & { smoothScrollTo?: (id: string) => void }).smoothScrollTo) {
    (window as Window & { smoothScrollTo?: (id: string) => void }).smoothScrollTo!(targetId);
  } else {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
};

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
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      scrollToSection(e);
      onClick?.();
    },
    [onClick]
  );

  return (
    <a
      href={href}
      onClick={handleClick}
      className="flex bg-bg3 hover:bg-bg4 transition-colors items-center justify-between px-4 py-3 xl:justify-start xl:px-2 xl:py-2"
    >
      <span className="uppercase font-medium mr-6">{label}</span>
      <span className="text-ignore">{index}</span>
    </a>
  );
}

const PRIMARY_LINKS = [
  { href: "#big-media", label: "Solutions", index: "01" },
  { href: "#projects-section", label: "Projects", index: "02" },
  { href: "#writings", label: "Research", index: "03" },
] as const;

function PrimaryLinks({ onClick }: { onClick?: () => void }) {
  return (
    <>
      {PRIMARY_LINKS.map(({ href, label, index }) => (
        <NavLink
          key={href}
          href={href}
          label={label}
          index={index}
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
  const headerRef = useRef<HTMLElement>(null);
  const openRef = useRef(false);
  // exposes helpers to effects that run after mount (route change etc.)
  const callbacks = useRef({ recompute: () => { }, update: () => { } });
  const [open, setOpen] = useState(false);

  const handleOpenMenu = useCallback(() => setOpen(true), []);
  const handleCloseMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const headerEl = headerRef.current;
    if (!headerEl) return;

    // hint browser that we'll animate transforms
    headerEl.style.willChange = 'transform';

    let headerHeight = headerEl.offsetHeight;
    let heroHalfway = Infinity;
    let footerTrigger = Infinity; // scrollY at which footer starts to appear

    const recompute = () => {
      headerHeight = headerEl.offsetHeight;

      const heroEl = document.querySelector<HTMLElement>('main header.h-screen');
      heroHalfway = heroEl ? heroEl.offsetTop + heroEl.offsetHeight / 2 : Infinity;

      const footerEl = document.querySelector<HTMLElement>('footer');
      // trigger right when top of footer enters viewport
      footerTrigger = footerEl ? footerEl.offsetTop - window.innerHeight : Infinity;
    };

    // expose recompute for external effects
    callbacks.current.recompute = recompute;

    // rAF throttle state
    let lastScrollY = window.scrollY;
    let ticking = false;

    const update = () => {
      ticking = false;

      if (openRef.current) {
        headerEl.style.transform = 'translate3d(0, 0, 0)';
        return;
      }

      let translate = 0;

      // hide header as hero scrolls past halfway
      if (lastScrollY + headerHeight > heroHalfway) {
        translate = Math.min(lastScrollY + headerHeight - heroHalfway, headerHeight);
      }

      // push header off screen as soon as footer starts entering viewport
      if (lastScrollY > footerTrigger) {
        translate = Math.min(Math.max(translate, lastScrollY - footerTrigger), headerHeight);
      }

      headerEl.style.transform = translate
        ? `translate3d(0, -${translate}px, 0)`
        : "translate3d(0, 0, 0)";
      // expose update for external call
      callbacks.current.update = update;
    };

    const handleScroll = () => {
      lastScrollY = window.scrollY;
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    // initial calculations and listeners
    recompute();
    update(); // initial transform
    callbacks.current.update = update;
    window.addEventListener('scroll', handleScroll, { passive: true });
    const handleResize = () => {
      recompute();
      lastScrollY = window.scrollY;
      update();
    };
    window.addEventListener('resize', handleResize);

    // smooth scroll helper that accounts for fixed header height
    (window as Window & { smoothScrollTo?: (id: string) => void }).smoothScrollTo = (targetId: string) => {
      const el = document.getElementById(targetId);
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: y, behavior: 'smooth' });
    };

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      delete (window as Window & { smoothScrollTo?: (id: string) => void }).smoothScrollTo;
    };
  }, []);

  // Recompute positions on route/pathname change (e.g., navigating to 404).
  const pathname = usePathname();
  useEffect(() => {
    callbacks.current.recompute();
    callbacks.current.update();
  }, [pathname]);

  // keep openRef in sync with state and immediately recalculate header position
  useEffect(() => {
    openRef.current = open;
    // Re-run the transform logic so the header snaps to the correct position
    callbacks.current.update();
  }, [open]);

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 border-b border-bg2 bg-bg1/80 backdrop-blur-xl z-10 font-mono"
      >
        <div className="padding-container flex justify-between items-center h-16">
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
              onClick={open ? handleCloseMenu : handleOpenMenu}
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
              <PrimaryLinks onClick={handleCloseMenu} />
            </nav>

            {/* Secondary links */}
            <div className="flex flex-col space-y-4 mb-8">
              <SecondaryLinks onClick={handleCloseMenu} />
            </div>

            {/* TODO */}
            <ButtonLink
              href="/get-started"
              className="padding-container justify-center py-3 bg-fg2 text-bg1"
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
          onClick={handleCloseMenu}
        />
      )}
    </>
  );
}
